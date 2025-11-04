// src/components/NeoOrbitSlider.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const DEFAULT_ITEMS = [
  {
    title: "",
    subtitle: "",
    image: "/card1.png",
  },
  {
    title: "",
    subtitle: "",
    image: "/card2.png",
  },
  {
    title: "",
    subtitle: "",
    image: "/card3.png",
  },
  {
    title: "",
    subtitle: "",
    image: "/card4.png",
  },
  {
    title: "",
    subtitle: "",
    image: "/card5.png",
  },
];

export default function ArcCarousel({
  items = DEFAULT_ITEMS,
  className = "",
  showCount = 5,
  autoplay = true,
  interval = 4000, // Increased interval to reduce CPU load
  pauseOnHover = true,
  /** set true if you want the soft radial backdrop behind the slider */
  backdrop = false,
}) {
  const PALETTE = {
    MIDNIGHT: "#0f4c75", // Dark Teal
    BLUEGRAY: "#1a5f7a", // Medium Teal
    DARK: "#2a7c8a", // Light Teal
    BABY: "#ffffff", // white text
    WHITE: "#ffffff",
  };

  const rootRef = useRef(null);
  const cardRefs = useRef([]);
  const hoverTiltCleanup = useRef(new Map());
  const autoRef = useRef(null);
  const hoveringRef = useRef(false);
  const visibleRef = useRef(true);

  const [index, setIndex] = useState(0);
  const [gap, setGap] = useState(360);
  const [ringSize, setRingSize] = useState({ w: 520, h: 220 });

  const total = items.length;
  const mod = (n, m) => ((n % m) + m) % m;

  const dots = useMemo(() => new Array(total).fill(0), [total]);

  // Measure responsive gaps & ring
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const first = cardRefs.current.find(Boolean);
      const w = first?.offsetWidth ?? 320;
      setGap(Math.round(w * 0.95 + 120));
      setRingSize({
        w: Math.max(420, Math.round(w * 1.45)),
        h: Math.max(180, Math.round(w * 0.62)),
      });
    };
    measure();
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    });
    if (rootRef.current) ro.observe(rootRef.current);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  // GPU hint
  useEffect(() => {
    gsap.set(cardRefs.current, {
      willChange: "transform, opacity",
      force3D: true,
    });
  }, []);

  // Place & animate cards
  useEffect(() => {
    const span = Math.floor(showCount / 2);
    for (let i = 0; i < total; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let raw = i - index;
      if (raw > total / 2) raw -= total;
      if (raw < -total / 2) raw += total;

      const depth = Math.abs(raw);
      const x = raw * gap;
      const y = depth * 40;
      const scale = 1 - depth * 0.14;
      const rotY = raw * -14;
      const opacity = depth > span ? 0 : 1;

      gsap.to(el, {
        xPercent: -50,
        x,
        y,
        rotateY: rotY,
        scale,
        opacity,
        duration: 0.35, // Reduced duration for better performance
        ease: "power2.out", // Simpler easing
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        pointerEvents: depth <= span ? "auto" : "none",
      });

      el.classList.toggle("is-center", depth === 0);
    }
  }, [index, gap, showCount, total]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear all GSAP animations
      gsap.killTweensOf(cardRefs.current);
      // Clear autoplay
      if (autoRef.current) {
        clearInterval(autoRef.current);
      }
      // Clear hover cleanups
      hoverTiltCleanup.current.forEach(cleanup => cleanup());
      hoverTiltCleanup.current.clear();
    };
  }, []);

  // Hover tilt + sparkles
  useEffect(() => {
    const bindTilt = (el) => {
      if (!el) return;
      const gloss = el.querySelector(".shine");
      const sparks = el.querySelectorAll(".spark");

      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / (r.width / 2);
        const dy = (e.clientY - cy) / (r.height / 2);
        gsap.to(el, {
          rotateY: dx * -12,
          rotateX: dy * 8,
          scale: 1.05,
          duration: 0.18,
          ease: "power2.out",
        });
        if (gloss)
          gsap.to(gloss, {
            x: dx * 40,
            y: dy * 40,
            opacity: 0.28,
            duration: 0.18,
            ease: "power2.out",
          });
        sparks.forEach((s, i) => {
          gsap.to(s, {
            x: dx * (20 + i * 4),
            y: dy * (20 + i * 3),
            duration: 0.25,
            ease: "power2.out",
          });
        });
      };
      const onEnter = () => {
        gsap.to(el, { boxShadow: "0 30px 120px rgba(0,0,0,.45)", duration: 0.25 });
        sparks.forEach((s, i) => {
          gsap.fromTo(
            s,
            { opacity: 0, scale: 0.6 },
            { opacity: 0.6, scale: 1, duration: 0.25, delay: i * 0.04 }
          );
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
        });
        if (gloss) gsap.to(gloss, { opacity: 0.14, x: 0, y: 0, duration: 0.35 });
        sparks.forEach((s) => gsap.to(s, { opacity: 0, scale: 0.8, duration: 0.25 }));
      };

      el.addEventListener("mousemove", onMove, { passive: true });
      el.addEventListener("mouseenter", onEnter, { passive: true });
      el.addEventListener("mouseleave", onLeave, { passive: true });
      hoverTiltCleanup.current.set(el, () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
    cardRefs.current.forEach((el) => el && bindTilt(el));
    return () => {
      hoverTiltCleanup.current.forEach((fn) => fn && fn());
      hoverTiltCleanup.current.clear();
    };
  }, []);

  // Swipe/drag
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let startX = 0,
      dx = 0,
      downed = false;

    const down = (e) => {
      downed = true;
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      dx = 0;
      if (pauseOnHover) hoveringRef.current = true;
    };
    const move = (e) => {
      if (!downed) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      dx = x - startX;
    };
    const up = () => {
      if (!downed) return;
      downed = false;
      if (Math.abs(dx) > 40) setIndex((i) => mod(i + (dx < 0 ? 1 : -1), total));
      if (pauseOnHover) hoveringRef.current = false;
    };

    root.addEventListener("pointerdown", down, { passive: true });
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerup", up, { passive: true });
    root.addEventListener("touchstart", down, { passive: true });
    root.addEventListener("touchmove", move, { passive: true });
    root.addEventListener("touchend", up, { passive: true });

    return () => {
      root.removeEventListener("pointerdown", down);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerup", up);
      root.removeEventListener("touchstart", down);
      root.removeEventListener("touchmove", move);
      root.removeEventListener("touchend", up);
    };
  }, [total, pauseOnHover]);

  // Pause on hover (for autoplay)
  useEffect(() => {
    if (!pauseOnHover) return;
    const root = rootRef.current;
    if (!root) return;
    const enter = () => (hoveringRef.current = true);
    const leave = () => (hoveringRef.current = false);
    root.addEventListener("mouseenter", enter, { passive: true });
    root.addEventListener("mouseleave", leave, { passive: true });
    return () => {
      root.removeEventListener("mouseenter", enter);
      root.removeEventListener("mouseleave", leave);
    };
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!hoveringRef.current && visibleRef.current) {
        setIndex((i) => mod(i + 1, total));
      }
    }, interval);
    return () => clearInterval(autoRef.current);
  }, [autoplay, interval, total]);

  // Pause videos when offscreen + pause autoplay when not visible
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const vids = root.querySelectorAll("video");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === root) visibleRef.current = e.isIntersecting;
          const v = e.target.tagName === "VIDEO" ? e.target : null;
          if (v) e.isIntersecting ? v.play?.() : v.pause?.();
        });
      },
      { root: null, threshold: 0.2 }
    );

    io.observe(root);
    vids.forEach((v) => io.observe(v));

    return () => io.disconnect();
  }, []);

  const next = () => setIndex((i) => mod(i + 1, total));
  const prev = () => setIndex((i) => mod(i - 1, total));

  return (
    <section
      ref={rootRef}
      className={`relative w-full h-auto md:min-h-auto py-10 md:py-16 text-white overflow-hidden ${className}`}
      style={{ background: "transparent" }}
    >
      {/* Optional soft gradient backdrop (brand colors) */}
      {backdrop && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -inset-24 blur-3xl opacity-35"
            style={{
              background:
                `radial-gradient(circle at 30% 20%, ${PALETTE.BABY}33, transparent 40%),
                 radial-gradient(circle at 80% 60%, ${PALETTE.MIDNIGHT}33, transparent 45%)`,
            }}
          />
        </div>
      )}

      {/* Stage */}
      <div className="relative mx-auto max-w-[1300px] h-[430px] sm:h-[500px] md:h-[640px] flex items-center justify-center">
        {/* Rotating ring behind the center card (brand gradient) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: ringSize.w, height: ringSize.h }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={PALETTE.BLUEGRAY} />
                <stop offset="50%" stopColor={PALETTE.BABY} />
                <stop offset="100%" stopColor={PALETTE.MIDNIGHT} />
              </linearGradient>
            </defs>
            <g className="origin-center animate-[spin_16s_linear_infinite]">
              <ellipse
                cx="50"
                cy="50"
                rx="44"
                ry="18"
                fill="none"
                stroke="url(#ring-grad)"
                strokeWidth="1.5"
                opacity="0.75"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="44"
                ry="18"
                fill="none"
                stroke={PALETTE.WHITE}
                strokeOpacity="0.25"
                strokeWidth="0.4"
              />
            </g>
          </svg>
        </div>

        {items.map((it, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="
              absolute left-1/2 will-change-transform select-none
              w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] md:w-[340px] md:h-[440px] lg:w-[420px] lg:h-[520px]
              rounded-[26px] overflow-hidden
              bg-white/5 backdrop-blur border border-white/12
              shadow-[0_40px_120px_rgba(0,0,0,0.35)]
              transition-[box-shadow] duration-300
            "
            style={{ transform: "translateX(-50%)" }}
          >
            {/* Gradient border overlay (brand conic) */}
            <div className="pointer-events-none absolute inset-0 rounded-[26px]">
              <div
                className="absolute inset-[-2px] rounded-[28px] opacity-60"
                style={{
                  background: `conic-gradient(
                    from 180deg at 50% 50%,
                    ${PALETTE.BLUEGRAY},
                    ${PALETTE.BABY},
                    ${PALETTE.MIDNIGHT},
                    ${PALETTE.BLUEGRAY}
                  )`,
                }}
              />
              <div
                className="absolute inset-[1.5px] rounded-[24px]"
                style={{ background: "rgba(15,76,117,0.88)" }} // theme background with alpha
              />
            </div>

            {/* Soft inner shine + brand wash */}
            <div className="shine pointer-events-none absolute inset-0">
              <div className="absolute -inset-12 opacity-25 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),transparent_60%)] mix-blend-screen" />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background:
                    `linear-gradient(120deg,
                      transparent 0%,
                      ${PALETTE.BABY}33 40%,
                      transparent 60%,
                      ${PALETTE.BLUEGRAY}33 85%)`,
                }}
              />
            </div>

            {/* Media */}
            <div className="absolute inset-[6px] rounded-[20px] overflow-hidden">
              {it.video ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={it.image}
                  src={it.video}
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={it.image}
                  alt={it.title}
                  draggable={false}
                  loading="lazy"
                />
              )}

              {/* subtle dark gradient bottom for text */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
            </div>

            {/* Sparkles */}
            {[...Array(6)].map((_, k) => (
              <span
                key={k}
                className="spark pointer-events-none absolute rounded-full opacity-0"
                style={{
                  width: 8 + (k % 3) * 2,
                  height: 8 + (k % 3) * 2,
                  left: `${12 + k * 14}%`,
                  top: `${18 + (k * 9) % 70}%`,
                  background:
                    "radial-gradient(circle, rgba(255,255,255,.9), rgba(255,255,255,.2) 60%, transparent 70%)",
                  filter: "blur(0.5px)",
                }}
              />
            ))}

            {/* Labels */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-3">
              <div className="text-[13px] md:text-[14px] tracking-[.28em] uppercase text-white font-semibold">
                {it.title}
              </div>
              {it.subtitle && (
                <div className="text-[12px] md:text-[13px] text-white/90 font-medium">
                  {it.subtitle}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots (brand colors) */}
      <div className="mt-6 hidden md:flex items-center justify-center gap-3">
        {dots.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all ${
              i === index
                ? "h-2.5 w-10 md:w-12"
                : "h-2 w-2 md:h-2.5 md:w-2.5 bg-white/50 hover:bg-white/70"
            }`}
            style={i === index ? {
              background: `linear-gradient(90deg, ${PALETTE.BLUEGRAY}, ${PALETTE.MIDNIGHT})`
            } : {}}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Nav */}
      <button
        onClick={prev}
        className="group absolute left-6 top-1/2 -translate-y-1/2 z-10"
        aria-label="Previous"
      >
        <div
          className="size-11 md:size-12 rounded-full font-semibold grid place-items-center shadow-lg ring-1 ring-teal-400/40 group-active:scale-95 transition text-white"
          style={{ 
            background: `linear-gradient(135deg, ${PALETTE.BLUEGRAY}, ${PALETTE.MIDNIGHT})`,
            border: `1px solid ${PALETTE.BLUEGRAY}`
          }}
        >
          ←
        </div>
      </button>
      <button
        onClick={next}
        className="group absolute right-6 top-1/2 -translate-y-1/2 z-10"
        aria-label="Next"
      >
        <div
          className="size-11 md:size-12 rounded-full font-semibold grid place-items-center shadow-lg ring-1 ring-teal-400/40 group-active:scale-95 transition text-white"
          style={{ 
            background: `linear-gradient(135deg, ${PALETTE.BLUEGRAY}, ${PALETTE.MIDNIGHT})`,
            border: `1px solid ${PALETTE.BLUEGRAY}`
          }}
        >
          →
        </div>
      </button>
    </section>
  );
}
