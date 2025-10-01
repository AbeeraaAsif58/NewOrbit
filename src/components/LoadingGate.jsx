// src/components/LoadingGate.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingGate({
  assets = [],
  logoSrc = "",
  onDone,
  colors = {
    ink: "#034159",                 // Dark Teal background
    text: "#ffffff",                // white text
    textSoft: "rgba(255,255,255,.85)", // white with opacity
    dark: "#025951", // Dark Green
    mid: "#02735E", // Teal Green
    blue: "#0CF25D", // Bright Green
    cyan: "#ffffff", // white
  },
}) {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  const wrapRef = useRef(null);
  const ringRef = useRef(null);
  const dotsRef = useRef(null);
  const barRef = useRef(null);
  const countRef = useRef(null);

  const list = useMemo(() => Array.from(new Set(assets)).filter(Boolean), [assets]);

  // preload images
  useEffect(() => {
    if (list.length === 0) {
      const id = setInterval(() => {
        setProgress((p) => {
          const n = Math.min(100, p + 3 + Math.random() * 4);
          if (n >= 100) clearInterval(id);
          return n;
        });
      }, 60);
      return () => clearInterval(id);
    }
    let done = 0;
    list.forEach((src) => {
      const img = new Image();
      const mark = () => {
        done += 1;
        setProgress(Math.round((done / list.length) * 100));
      };
      img.onload = mark;
      img.onerror = mark;
      img.src = src;
    });
  }, [list]);

  // spinning rings
  useEffect(() => {
    const spin1 = gsap.to(ringRef.current, { rotate: 360, duration: 18, ease: "none", repeat: -1 });
    const spin2 = gsap.to(dotsRef.current, { rotate: -360, duration: 26, ease: "none", repeat: -1 });
    return () => { spin1.kill(); spin2.kill(); };
  }, []);

  // progress tween
  useEffect(() => {
    gsap.to(barRef.current, { width: `${progress}%`, duration: 0.25, ease: "power2.out" });
    gsap.to(countRef.current, { textContent: progress, duration: 0.25, roundProps: "textContent" });
  }, [progress]);

  // outro animation
  useEffect(() => {
    if (progress < 100) return;
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(wrapRef.current, {
      scale: 1.06,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        setHidden(true);
        onDone && onDone();
      },
    });
    return () => tl.kill();
  }, [progress, onDone]);

  if (hidden) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: colors.ink }}
    >
      {/* subtle radial tints */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            `radial-gradient(ellipse at 30% 20%, rgba(12,242,93,.15), transparent 55%),
             radial-gradient(ellipse at 70% 80%, rgba(12,242,93,.12), transparent 60%)`,
        }}
      />

      {/* star specks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 48 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "rgba(255,255,255,.9)",
              opacity: 0.35 + Math.random() * 0.6,
              filter: "drop-shadow(0 0 6px rgba(255,255,255,.65))",
              animation: `twinkle ${1.5 + Math.random() * 2.5}s ease-in-out ${Math.random() * 1.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Orbit + Logo */}
      <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
        {/* spinning outer ring */}
        <div
          ref={ringRef}
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              `inset 0 0 0 2px rgba(255,255,255,0.10),
               0 0 26px rgba(255,255,255,0.12),
               0 0 70px rgba(12,242,93,0.14)`,
            maskImage: "radial-gradient(circle at center, black 63%, transparent 64%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 63%, transparent 64%)",
          }}
        />
        {/* orbiting dots */}
        <div ref={dotsRef} className="absolute inset-0">
          {[0, 120, 240].map((deg) => (
            <span
              key={deg}
              className="absolute left-1/2 top-0 w-2 h-2 rounded-full"
              style={{
                background: colors.cyan,
                boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                transform: `rotate(${deg}deg) translateY(-10px)`,
                transformOrigin: "center 90px",
              }}
            />
          ))}
        </div>
      </div>

      {/* progress */}
      <div className="absolute bottom-16 w-[68%] max-w-[560px]">
        <div className="flex items-center justify-between mb-2">
          <p className="tracking-[0.25em] text-xs" style={{ color: "#ffffff" }}>
            INITIALIZING
          </p>
          <p ref={countRef} className="tabular-nums" style={{ color: "#ffffff" }}>
            0
          </p>
        </div>
        <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "rgba(12,242,93,.25)" }}>
          <div
            ref={barRef}
            className="h-full w-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.dark} 0%, ${colors.mid} 35%, ${colors.blue} 70%, #ffffff 100%)`,
              boxShadow: "0 0 18px rgba(255,255,255,.35)",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%,100% { transform: scale(0.8); opacity: .4 }
          50% { transform: scale(1.3); opacity: 1 }
        }
      `}</style>
    </div>
  );
}
