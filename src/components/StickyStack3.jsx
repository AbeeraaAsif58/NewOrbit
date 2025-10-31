// src/components/StickyStack3.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function StickyStack3({
  topOffset = "0px",
  // palette: tumhare global colors ke mutabiq
  // Theme colors palette
  colors = {
    ink: "#034159", // Dark Teal background
    text: "#ffffff", // text - white
    sub: "rgba(255,255,255,0.82)", // white with opacity
    dark: "#025951", // Dark Green
    mid: "#02735E", // Teal Green
    blue: "#0CF25D", // Bright Green
    border: "rgba(12,242,93,0.30)", // Bright Green with opacity
    borderSoft: "rgba(12,242,93,0.30)", // Bright Green with opacity
    veil: "rgba(12,242,93,0.50)", // Bright Green with opacity
  },
}) {
  const sectionRef = useRef(null);
  const baseRef = useRef(null);
  const o1Ref = useRef(null);
  const o2Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Determine mobile once on mount and on resize
    const update = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.matchMedia('(max-width: 767px)').matches);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    // Skip GSAP scroll interactions on mobile
    if (isMobile) return;

    const ctx = gsap.context(() => {
      gsap.set([o1Ref.current, o2Ref.current], { yPercent: -110, z: 0.001 });
      gsap.set([baseRef.current, o1Ref.current, o2Ref.current], {
        willChange: "transform, opacity",
        force3D: true,
      });

      gsap.to(baseRef.current, {
        yPercent: 8,
        opacity: 0.98,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      tl.to(o1Ref.current, { yPercent: 0, duration: 0.48 })
        .to(o2Ref.current, { yPercent: 0, duration: 0.48 }, ">+0.04");
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: isMobile ? "auto" : "300vh" }}>
      {isMobile ? (
        // Static stacked layout for mobile (no sticky/pin)
        <div className="w-full" style={{ background: colors.ink }}>
          <div className="w-full">
            <HeroLayer colors={colors} />
          </div>
          <div className="w-full">
            <ExploreLayer colors={colors} />
          </div>
          {/* Hide the WE CREATE MAGIC closer card on mobile to save space */}
        </div>
      ) : (
        <div className="sticky" style={{ top: topOffset }}>
          <div className="relative h-screen w-full overflow-hidden" style={{ background: colors.ink }}>
            {/* BASE (HERO) */}
            <div className="absolute inset-0 z-10">
              <div ref={baseRef} className="relative h-full w-full">
                <HeroLayer colors={colors} />
              </div>
            </div>

            {/* OVERLAY 1 (EXPLORE) */}
            <div ref={o1Ref} className="absolute inset-0 z-20">
              <ExploreLayer colors={colors} />
            </div>

            {/* OVERLAY 2 (CLOSER) */}
            <div ref={o2Ref} className="absolute inset-0 z-30">
              <CloserLayer colors={colors} />
            </div>
          </div>
        </div>
      )}

      {/* small helpers */}
      <style>{`
        .circle-clip{ -webkit-clip-path:circle(50% at 50% 50%); clip-path:circle(50% at 50% 50%) }
        .half-tint::after{
          content:""; position:absolute; inset:0;
          background: linear-gradient(90deg, rgba(12,242,93,.55) 0%, rgba(12,242,93,0) 52%);
          mix-blend-mode: screen; pointer-events:none;
        }
        @keyframes wheel { 0%{ transform: translateY(0); opacity:.85 } 100%{ transform: translateY(10px); opacity:.25 } }
      `}</style>
    </section>
  );
}

/* ----------------------- LAYER 1: HERO ----------------------- */
function HeroLayer({ colors }) {
  return (
    <div className="h-full w-full">
      <div className="mx-auto h-full w-full max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-10">
        {/* LEFT: Headline */}
        <div>
          <div className="space-y-2">
            {["Empowering Finance", "Through Technology"].map((t, i) => (
              <h1
                key={i}
                className="font-black leading-[0.95] tracking-tight text-[14vw] sm:text-[12vw] lg:text-[6vw] font-poppins"
                style={{ color: colors.text }}
              >
                {t}
              </h1>
            ))}
            <div className="flex items-center gap-3">
              <h1
                className="font-black leading-[0.95] tracking-tight text-[14vw] sm:text-[12vw] lg:text-[8.2vw] font-poppins"
                style={{ color: colors.text }}
              >
              
              </h1>
              <span className="hidden sm:flex items-center gap-2">
                <span
                  className="inline-block rounded-[22px] px-3 py-2 text-[11px] font-semibold uppercase tracking-wider"
                  style={{ background: colors.dark, color: colors.text, border:`1px solid ${colors.border}` }}
                >
                <span className="font-sans">development</span>
                </span>
                <img
                  src="/g2.png"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover ring-2"
                  style={{ ringColor: colors.border }}
                />
              </span>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed font-sans" style={{ color: colors.sub }}>
           We are Obit shaping the future of finance meets decentralization
          </p>
        </div>

        {/* RIGHT: circular image with blue tint */}
        <div className="relative">
          <div className="relative mx-auto w-[68vw] max-w-[560px] aspect-square circle-clip overflow-hidden shadow-xl">
            {/* ✅ DIRECT SRC HERE */}
            <img
              src="/g4.png"
              alt="hero"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 half-tint" />
          </div>

          {/* <div className="mt-6 flex items-center gap-4">
            <button
              className="inline-flex items-center justify-center h-16 w-16 rounded-full shadow-xl transition"
              style={{ background: colors.dark, color: colors.text, boxShadow:'0 12px 40px rgba(0,0,0,.35)' }}
              aria-label="Watch video"
            >
              ▶
            </button>
            <div className="text-sm font-semibold tracking-wider" style={{ color: colors.text }}>
              WATCH<br/>VIDEO
            </div>
          </div>
           */}
        </div>
      </div>
    </div>
  );
}

/* ----------------------- LAYER 2: EXPLORE ----------------------- */
function ExploreLayer({ colors }) {
  return (
    <div className="h-full w-full" style={{ background: colors.ink }}>
      <div className="mx-auto h-full w-full max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_520px] gap-10 items-center h-full">
          {/* LEFT column */}
          <div className="relative">
            <div className="flex justify-center lg:justify-start">
              <button
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition"
                style={{
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  background: "transparent",
                }}
              >
                <span className="font-sans">Explore Us More</span>
                <span
                  className="grid h-8 w-8 place-items-center rounded-full transition-transform group-hover:translate-x-0.5"
                  style={{ border: `1px solid ${colors.border}` }}
                >
                  →
                </span>
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition"
                  style={{ background: colors.veil }}
                />
              </button>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <div
                className="w-full max-w-[560px] aspect-[16/9] overflow-hidden rounded-2xl shadow-xl"
                style={{ border: `1px solid ${colors.borderSoft}` }}
              >
                {/* ✅ DIRECT SRC HERE */}
                <img src="/meet 2.png" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* RIGHT column */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl shadow-xl"
              style={{ border: `1px solid ${colors.borderSoft}` }}
            >
              {/* ✅ DIRECT SRC HERE */}
              <img
                src="/meet 1.png"
                alt=""
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>

            {/* stat card */}
            <div
              className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[62%] min-w-[260px] rounded-2xl p-6 sm:p-8 shadow-[0_30px_80px_-28px_rgba(0,0,0,.35)]"
              style={{ background: colors.dark, border: `1px solid ${colors.border}` }}
            >
              <div className="text-2xl" style={{ color: colors.blue }}>”</div>
              <p className="mt-3 text-sm sm:text-base font-sans" style={{ color: colors.sub }}>
                Make your business prosper with our great team of experts. We’ll
                make your project faster & better.
              </p>
              <div className="mt-6">
                <div className="text-6xl font-black" style={{ color: colors.text }}>
                  1.8<span className="text-3xl align-top" style={{ color: colors.blue }}>x</span>
                </div>
                <div className="mt-2 text-sm font-extrabold tracking-widest font-sans" style={{ color: colors.mid }}>
                  FASTER SERVICE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- LAYER 3: CLOSER ----------------------- */
function CloserLayer({ colors }) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-500/10 via-transparent to-teal-600/10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-teal-600/50 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-teal-500/30 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 text-center relative z-10">
        <h2
          className="font-black tracking-tight text-[12vw] sm:text-[10vw] lg:text-[6vw] font-poppins"
          style={{ color: colors.text }}
        >
          WE CREATE MAGIC
        </h2>

        <div className="mt-10">
          <div className="grid place-items-center">
            <div
              className="h-24 w-16 rounded-full grid place-items-center"
              style={{ border: "4px solid rgba(12,242,93,.7)" }}
            >
              <div
                className="h-6 w-1.5 rounded-full"
                style={{ background: "rgba(12,242,93,.85)", animation: "wheel 1s ease-in-out infinite alternate" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
