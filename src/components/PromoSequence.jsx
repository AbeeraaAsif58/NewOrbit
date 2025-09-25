// src/components/PromoSequence.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PromoSequence({
  // timing (seconds)
  delay = 0.2,
  heading = ["FREQUENTLY", "ASKED", "QUESTIONS"],
  sub = "Find crisp answers fast — crafted for product teams.",
  ctaText = "Explore More",
}) {
  const root = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      tl.current?.kill();

      tl.current = gsap
        .timeline({ defaults: { ease: "power3.out" }, delay })
        // stars fade
        .from(q(".stars > span"), {
          opacity: 0,
          duration: 0.6,
          stagger: 0.02,
        }, 0)
        // heading lines
        .from(q(".line"), {
          yPercent: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
        }, 0.15)
        // underline grow
        .fromTo(
          q(".underline"),
          { scaleX: 0, opacity: 0.6 },
          { scaleX: 1, opacity: 1, transformOrigin: "50% 50%", duration: 0.7 },
          "+=0.05"
        )
        // subtitle
        .from(q(".subtitle"), { y: 16, opacity: 0, duration: 0.6 }, "-=0.2")
        // CTA
        .from(q(".cta"), { y: 14, opacity: 0, scale: 0.95, duration: 0.55 }, "-=0.2")
        .to(q(".cta"), { y: 0, scale: 1, duration: 0.25 }, ">")
        // right cards in
        .from(q(".card"), {
          x: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
        }, "-=0.2")
        // idle loop: subtle float
        .to(q(".floaty"), {
          y: -6,
          repeat: -1,
          yoyo: true,
          duration: 2.6,
          ease: "sine.inOut",
        }, 1.2);

      // mouse parallax
      const onMove = (e) => {
        const r = root.current.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        gsap.to(q(".parallax"), {
          x: dx * 14,
          y: dy * 10,
          duration: 0.4,
          ease: "sine.out",
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    }, root);

    return () => ctx.revert();
  }, [delay, heading, sub, ctaText]);

  return (
    <section
      ref={root}
      className="relative w-full overflow-hidden"
      style={{
        // 16:9 safe height but adaptive
        minHeight: "100svh",
        background:
          "radial-gradient(1000px 600px at 15% -10%, rgba(71,214,255,.08), transparent 50%), radial-gradient(1000px 600px at 120% -20%, rgba(154,140,255,.08), transparent 50%), #0b1324",
      }}
    >
      {/* gentle star field */}
      <div className="stars pointer-events-none absolute inset-0">
        {[...Array(140)].map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 2,
              height: 2,
              background: "rgba(255,255,255,.65)",
              opacity: Math.random() * 0.8 + 0.2,
              filter: "drop-shadow(0 0 1px rgba(255,255,255,.75))",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:py-16 lg:py-24">
        {/* LEFT: Heading / Sub / CTA */}
        <div className="parallax">
          <h1 className="font-extrabold leading-[0.95] tracking-tight">
            {heading.map((t, idx) => (
              <span
                key={idx}
                className="line block text-balance"
                style={{
                  fontSize: "clamp(36px, 9vw, 86px)",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #dfe7ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 20px 60px rgba(0,0,0,.35)",
                }}
              >
                {t}
              </span>
            ))}
          </h1>

          <div className="mt-4 h-[3px] w-40 overflow-hidden rounded-full bg-white/15">
            <div className="underline h-full w-full bg-white/85" />
          </div>

          <p
            className="subtitle mt-5 max-w-xl text-base md:text-lg"
            style={{ color: "rgba(223,231,255,.85)" }}
          >
            {sub}
          </p>

          <button
            className="cta floaty mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
            }}
            style={{
              color: "#0e1222",
              position: "relative",
              isolation: "isolate",
              border: "1px solid rgba(255,255,255,.18)",
              background:
                "linear-gradient(90deg, #47d6ff 0%, #9a8cff 100%)",
              boxShadow: "0 16px 36px -18px rgba(71,214,255,.55)",
            }}
          >
            {ctaText}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>

            {/* ink ripple highlight */}
            <span
              aria-hidden
              style={{
                content: '""',
                position: "absolute",
                left: "var(--x,50%)",
                top: "var(--y,50%)",
                translate: "-50% -50%",
                width: 0,
                height: 0,
                borderRadius: "999px",
                background:
                  "radial-gradient(120px 120px at center, rgba(255,255,255,.35), transparent 60%)",
                zIndex: -1,
                transition: "width .45s ease, height .45s ease",
              }}
              className="cta-ripple"
              onMouseEnter={(e) => {
                e.currentTarget.style.width = "260%";
                e.currentTarget.style.height = "260%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.width = "0";
                e.currentTarget.style.height = "0";
              }}
            />
          </button>
        </div>

        {/* RIGHT: “cards” showcase */}
        <div className="parallax grid content-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="card floaty rounded-2xl border backdrop-blur"
              style={{
                background: "rgba(255,255,255,.06)",
                borderColor: "rgba(255,255,255,.14)",
                boxShadow: "0 14px 40px -18px rgba(0,0,0,.55)",
                padding: "16px",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-block h-8 w-8 shrink-0 rounded-xl"
                  style={{
                    background:
                      i % 2
                        ? "linear-gradient(160deg,#47d6ff,#00abd2)"
                        : "linear-gradient(160deg,#b69cff,#735bff)",
                    boxShadow:
                      "0 10px 20px -10px rgba(71,214,255,.45)",
                  }}
                />
                <div className="flex-1">
                  <p
                    className="font-semibold"
                    style={{ color: "#dfe7ff" }}
                  >
                    Motion Tile {i + 1}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(223,231,255,.75)" }}
                  >
                    Smooth, video-ready UI animation.
                  </p>
                </div>
                <span
                  className="rounded-full px-2 py-1 text-xs"
                  style={{
                    color: "#0e1222",
                    background:
                      i % 2
                        ? "linear-gradient(90deg,#47d6ff,#9a8cff)"
                        : "linear-gradient(90deg,#9a8cff,#47d6ff)",
                  }}
                >
                  {i % 2 ? "GSAP" : "UI"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* mobile spacing helper */}
      <div className="h-8 md:hidden" />
    </section>
  );
}
