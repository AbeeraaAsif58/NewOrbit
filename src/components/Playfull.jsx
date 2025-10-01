// src/components/Playfull.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Playfull — Simple Eyes + Animated Background
 * - Background: aurora, stars, multi-orbit satellites (cinematic)
 * - Foreground: simple glossy eyeballs; small pupil parallax (mouse follow)
 * - Reduced-motion: disables moving parts except subtle fades
 * - No external libraries
 */
export default function Playfull({
  count = 2,              // number of eyes
  titles = ["", ""],      // optional labels inside eyes (keep "" for cleaner look)
}) {
  const rootRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [aimAngle, setAimAngle] = useState(0);   // for background satellites
  const [bgAngle, setBgAngle] = useState(0);
  const rafRef = useRef(0);
  const lastMoveRef = useRef(Date.now());

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // mouse tracking (for pupils + spotlight + bg aim)
  useEffect(() => {
    const onMove = (e) => {
      lastMoveRef.current = Date.now();
      setMouse({ x: e.clientX, y: e.clientY });

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const a = Math.atan2(dy, dx) * (180 / Math.PI) - 180;
      if (!reduced) setAimAngle(a);

      // spotlight vars
      const r = rootRef.current?.getBoundingClientRect();
      if (r && rootRef.current) {
        rootRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
        rootRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  // background auto-rotate + blend to aim
  useEffect(() => {
    if (reduced) return;
    let current = bgAngle;
    let last = performance.now();

    const loop = (now) => {
      const dt = Math.min(0.06, (now - last) / 1000);
      last = now;

      const idleMs = Date.now() - lastMoveRef.current;
      const autoSpeed = idleMs > 1200 ? 14 : 5; // deg/s
      current += autoSpeed * dt;

      // ease towards aimAngle a little
      const diff = ((aimAngle - current + 540) % 360) - 180;
      current += diff * 0.06;

      setBgAngle(current);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aimAngle, reduced]);

  const eyes = useMemo(() => Array.from({ length: count }).map((_, i) => i), [count]);

  return (
    <section
      ref={rootRef}
      className="
        relative w-full overflow-hidden
        h-[100svh] sm:h-[110svh] md:h-[130svh] lg:h-[140svh]
        select-none
      "
      style={{ background: "transparent" }}
      aria-label="Orbit background with simple eyes"
    >
      {/* Animated BACKGROUND (moved all fancy animation here) */}
      <BackgroundLayer angle={bgAngle} reduced={reduced} />

      {/* FOREGROUND: Simple Eyes */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          flex items-center justify-center gap-5 md:gap-8
        "
      >
        {eyes.map((i) => (
          <Eye key={i} mouse={mouse} label={titles[i] ?? ""} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Simple Eye ---------- */
function Eye({ mouse, label }) {
  const ref = useRef(null);

  // compute pupil offset (clamped) towards mouse
  const getPupilTransform = () => {
    const el = ref.current;
    if (!el) return "translate(-50%, -50%)";

    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    const dx = mouse.x - cx;
    const dy = mouse.y - cy;

    // normalize + clamp radius
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(Math.hypot(dx, dy), r.width * 0.16); // max ~16% of eye
    const ox = Math.cos(angle) * dist;
    const oy = Math.sin(angle) * dist;

    return `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px))`;
  };

  return (
    <div
      ref={ref}
      className="relative grid place-items-center rounded-full md:size-[16vw] size-[42vw]"
      style={{
        // clean white eyeball with soft shading
        background:
          "radial-gradient(100% 100% at 30% 25%, rgba(255,255,255,.98), rgba(255,255,255,.88) 55%, rgba(255,255,255,.75) 75%, rgba(255,255,255,.65) 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,.9), inset 0 -10px 30px rgba(0,0,0,.1), 0 40px 80px -30px rgba(0,0,0,.35)",
        border: "1px solid rgba(0,0,0,.04)",
      }}
    >
      {/* subtle rim highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/60" />

      {/* iris + pupil (simple, no inner animations) */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full md:size-[8.6vw] size-[22vw] overflow-hidden"
        style={{
          transform: getPupilTransform(),
          transition: "transform 90ms ease-out",
          background:
            "radial-gradient(80% 80% at 50% 50%, #0b1220 35%, #0a0f1a 65%, #070b13 100%)",
          boxShadow: "inset 0 -10px 24px rgba(0,0,0,.4)",
        }}
      >
        {/* pupil core */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full md:size-[2.6vw] size-[7vw] bg-black/85 shadow-[0_0_0_1px_rgba(255,255,255,.15),0_8px_18px_rgba(0,0,0,.5)]" />
        {/* catchlight */}
        <span className="absolute left-[28%] top-[30%] rounded-full md:size-[1vw] size-[3vw] bg-white/85 blur-[1px]" />
      </div>

      {/* optional small label (kept very subtle) */}
      {label ? (
        <span className="absolute bottom-3 text-[3.4vw] md:text-[1.15vw] font-medium text-black/50 tracking-wide">
          {label}
        </span>
      ) : null}
    </div>
  );
}

/* ---------- Background Layer (all the fancy stuff) ---------- */
function BackgroundLayer({ angle, reduced }) {
  return (
    <>
      {/* Base aurora + gradients */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute inset-0
            [background:radial-gradient(1100px_700px_at_-10%_-10%,rgba(99,102,241,.18),transparent_55%),
                        radial-gradient(1100px_700px_at_120%_-20%,rgba(59,130,246,.18),transparent_55%)]
          "
        />
        <div
          className="absolute inset-0 mix-blend-screen opacity-70 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(168,85,247,.10), rgba(59,130,246,.10), rgba(147,197,253,.10), rgba(168,85,247,.10))",
            filter: "blur(22px)",
          }}
        />
        {/* Grain */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[.08] pointer-events-none"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')",
          }}
        />
        {/* Stars */}
        <Stars />
      </div>

      {/* Mouse spotlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(220px 220px at var(--mx,50%) var(--my,50%), rgba(255,255,255,.07), transparent 60%)",
        }}
      />

      {/* Multi-orbit satellites (far in the back) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <OrbitField angle={angle} reduced={reduced} />
      </div>
    </>
  );
}

function OrbitField({ angle, reduced }) {
  // three rings of satellites
  const rings = [
    { rPct: 36, count: 10, size: 8, hue: 215, dashed: false },
    { rPct: 52, count: 14, size: 7, hue: 255, dashed: true },
    { rPct: 68, count: 18, size: 6, hue: 285, dashed: true },
  ];

  return (
    <div className="relative" style={{ width: "120vmin", height: "120vmin" }}>
      {rings.map((ring, i) => (
        <Ring
          key={i}
          baseAngle={angle * (i % 2 ? -1 : 1)} // alternate direction
          {...ring}
          reduced={reduced}
        />
      ))}
    </div>
  );
}

function Ring({ rPct, count, size, hue, dashed, baseAngle, reduced }) {
  const ringSize = `${rPct}vmin`;
  const items = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* track */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: `calc(${ringSize} * 2)`,
          height: `calc(${ringSize} * 2)`,
          border: dashed ? "1px dashed rgba(255,255,255,.12)" : "1px solid rgba(255,255,255,.14)",
          filter: "drop-shadow(0 0 16px rgba(147,197,253,.14))",
        }}
      />
      {/* satellites */}
      {items.map((_, idx) => {
        const step = 360 / count;
        const a = baseAngle + idx * step;
        const s = `rotate(${a}deg) translate(${rPct}vmin)`;
        return (
          <span
            key={idx}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `${s}`,
              transformOrigin: "0 0",
              transition: reduced ? "transform 220ms ease-out" : undefined,
            }}
          >
            <span
              className="block rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background:
                  "radial-gradient(60% 60% at 35% 35%, rgba(255,255,255,.9), rgba(255,255,255,.6) 60%, rgba(255,255,255,.2) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,.7), 0 10px 20px rgba(255,255,255,.6), 0 0 28px hsla(var(--h), 90%, 70%, .9)",
                ["--h"]: hue,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

function Stars() {
  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%,100% { opacity: .55; transform: translateY(0) }
          50%     { opacity: 1; transform: translateY(-1px) }
        }
      `}</style>
      <span className="tw absolute left-[12%] top-[18%] h-[2px] w-[2px] bg-white rounded-full" />
      <span className="tw absolute left-[78%] top-[26%] h-[2px] w-[2px] bg-white rounded-full" />
      <span className="tw absolute left-[36%] top-[74%] h-[2px] w-[2px] bg-white rounded-full" />
      <style>{`.tw{animation:twinkle 3.6s ease-in-out infinite}`}</style>
    </>
  );
}
