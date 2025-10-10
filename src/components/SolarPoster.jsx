// src/components/SolarPoster.jsx
import React, { useEffect, useMemo, useRef } from "react";

/** Theme palette - Updated to match Orbit Walls theme */
const COLOR = {
  MIDNIGHT: "#025951", // secondary dark green
  BLUEGRAY: "#0CF25D", // primary bright green
  DARK: "#034159", // background dark teal
  BABY: "#ffffff", // white text
  WHITE: "#ffffff",
};

const DEFAULT_PLANETS = [
  { name: "Neptune", ring: 5, angle: 320, size: 70,  img: "public/planets/ceres.png",   href: "https://www.cashcare.co/" },
  { name: "Uranus",  ring: 4, angle: 205, size: 50,  img: "public/planets/earth.png",   href: "https://ticksntravel.com/" },
  { name: "Jupiter", ring: 3, angle: 172, size: 110, img: "public/planets/jupiter.png", href: "#" },
  { name: "Saturn",  ring: 5, angle: 350, size: 110, img: "public/planets/neptune.png", href: "#" },
  { name: "Mars",    ring: 4, angle:  20, size: 80,  img: "public/planets/saturn.png",  href: "#" },
  { name: "Earth",   ring: 4, angle: 265, size: 95,  img: "public/planets/mars.png",    href: "#" },
  { name: "Mercury", ring: 2, angle:  85, size: 38,  img: "public/planets/mercury.png", href: "#" },
  { name: "Venus",   ring: 3, angle:  90, size: 58,  img: "public/planets/uranus.png",  href: "#" },
  { name: "Ceres",   ring: 3, angle: 225, size: 26,  img: "public/planets/ceres.png",     href: "#" },
];

export default function SolarPoster({
  className = "",
  width = 1920,
  height = 900,
  center = { cx: 960, cy: 450 },
  rxList = [220, 360, 520, 700, 900, 1100],
  ryMul = 0.62,
  orbitScale = 0.68,
  planets = DEFAULT_PLANETS,
  animate = true,
  speed = 1.0,
  moon = { show: true, img: "public/mun.png", size: 820 },
}) {
  const rxScaled = useMemo(() => rxList.map(r => r * orbitScale), [rxList, orbitScale]);
  const ryScaled = useMemo(() => rxScaled.map(rx => rx * ryMul), [rxScaled, ryMul]);
  const toRad = (deg) => (deg * Math.PI) / 180;

  const planetGs  = useRef([]);
  const anglesRef = useRef(planets.map((p) => toRad(p.angle)));
  const pausedRef = useRef(planets.map(() => false));
  const rafRef    = useRef();

  // How many inner rings to hide
  const hideInner = 2;

  useEffect(() => {
    if (!animate) return;

    anglesRef.current = planets.map((p) => toRad(p.angle));
    pausedRef.current = planets.map(() => false);

    const base = 0.35;
    const omegas = planets.map((p) => (base * speed) / (1 + p.ring * 0.38));

    let t0 = performance.now();
    const step = (now) => {
      const dt = (now - t0) / 1000; t0 = now;
      planets.forEach((p, i) => {
        const g = planetGs.current[i];
        if (!g) return;
        const rx = rxScaled[p.ring];
        const ry = ryScaled[p.ring];
        if (!pausedRef.current[i]) anglesRef.current[i] += omegas[i] * dt;
        const a = anglesRef.current[i];
        const x = center.cx + rx * Math.cos(a);
        const y = center.cy + ry * Math.sin(a);
        g.setAttribute("transform", `translate(${x}, ${y})`);
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, speed, planets, rxScaled, ryScaled, center.cx, center.cy]);

  const moonX = center.cx, moonY = center.cy;

  return (
    <section
    className={`relative w-screen h-[40svh] md:h-[100svh] lg:h-[140svh] overflow-hidden ${className}`}
    style={{ background: "transparent" }}
  >

  
      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" role="img">
        <defs>
          {/* Moon glow in theme primary green */}
          <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor={COLOR.BLUEGRAY} floodOpacity=".35" />
          </filter>

          {/* Moon halo in theme gradient (Primary Green → transparent) */}
          <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="rgba(12,242,93,0.55)" />
            <stop offset="70%" stopColor="rgba(12,242,93,0.18)" />
            <stop offset="100%" stopColor="rgba(12,242,93,0)" />
          </radialGradient>

          {/* Ring gradient stroke: Primary Green → White → Dark Green */}
          <linearGradient id="ringLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={COLOR.BLUEGRAY} />
            <stop offset="50%"  stopColor={COLOR.BABY} />
            <stop offset="100%" stopColor={COLOR.MIDNIGHT} />
          </linearGradient>
        </defs>

        {/* 1) Moon */}
        {moon?.show && (
          <g className="sp-moon" style={{ pointerEvents: "auto" }}>
            <circle
              className="sp-moon-halo"
              cx={moonX}
              cy={moonY}
              r={moon.size * 0.76}
              fill="url(#moonHalo)"
              opacity="0"
            />
            <g filter="url(#moonGlow)">
              <image
                href={moon.img}
                x={moonX - moon.size / 2}
                y={moonY - moon.size / 2}
                width={moon.size}
                height={moon.size}
                preserveAspectRatio="xMidYMid meet"  /* full image visible */
                className="sp-moon-img"
                style={{ cursor: "pointer" }}
              />
            </g>
          </g>
        )}

        {/* 2) Rings (inner 2 hidden) */}
        <g style={{ pointerEvents: "none" }}>
          {rxScaled.map((rx, i) =>
            i >= hideInner ? (
              <ellipse
                key={`line-${i}`}
                cx={center.cx}
                cy={center.cy}
                rx={rx}
                ry={ryScaled[i]}
                fill="none"
                stroke="url(#ringLine)"              /* brand stroke */
                strokeOpacity="0.95"
                strokeWidth={2}
              />
            ) : null
          )}
          {rxScaled.map((rx, i) =>
            i >= hideInner ? (
              <ellipse
                key={`glow-${i}`}
                cx={center.cx}
                cy={center.cy}
                rx={rx}
                ry={ryScaled[i]}
                fill="none"
                stroke={COLOR.BABY}                   /* White soft glow */
                strokeOpacity="0.18"
                strokeWidth={22}
                style={{ filter: "blur(10px)" }}
              />
            ) : null
          )}
        </g>

        {/* 3) Planets */}
        {planets.map((p, idx) => {
          const r  = p.size / 2;
          const x0 = center.cx + rxScaled[p.ring]*Math.cos((p.angle*Math.PI)/180);
          const y0 = center.cy + ryScaled[p.ring]*Math.sin((p.angle*Math.PI)/180);
          return (
            <g
              key={idx}
              ref={(el)=> (planetGs.current[idx] = el)}
              transform={`translate(${x0}, ${y0})`}
              className="sp-planet"
              onMouseEnter={()=> (pausedRef.current[idx] = true)}
              onMouseLeave={()=> (pausedRef.current[idx] = false)}
            >
              {/* shadow kept neutral */}
              <ellipse cx="4" cy={r*.65} rx={r*.55} ry={r*.28} fill="rgba(0,0,0,0.55)" style={{ filter:"blur(6px)" }} />
              <a href={p.href || "#"} target="_blank" rel="noreferrer" aria-label={p.name} onClick={(e)=> e.stopPropagation()}>
                <image
                  href={p.img}
                  x={-r}
                  y={-r}
                  width={p.size}
                  height={p.size}
                  preserveAspectRatio="xMidYMid meet"
                  className="sp-planet-img"
                />
              </a>
              {p.ringed && (
                <ellipse
                  cx="0" cy="0" rx={r*1.3} ry={r*0.55} fill="none"
                  stroke={COLOR.BLUEGRAY} strokeWidth={4}
                  transform="rotate(-15)"
                  style={{ filter:`drop-shadow(0 0 8px ${COLOR.BABY}80)` }}
                />
              )}
            </g>
          );
        })}
      </svg>

      <style>{`
        .sp-planet-img{
          cursor:pointer;
          transition:transform .22s ease,filter .22s ease;
          will-change:transform,filter
        }
        .sp-planet:hover .sp-planet-img{
          transform:scale(1.08);
          filter:drop-shadow(0 8px 18px rgba(0,0,0,.45)) brightness(1.04)
        }
        .sp-moon-img{
          transform-origin:50% 50%;
          transition:transform .35s cubic-bezier(.2,.8,.2,1),filter .35s ease,opacity .35s ease;
          filter:drop-shadow(0 0 40px rgba(12,242,93,.22)); /* Primary green glow */
          will-change:transform,filter
        }
        .sp-moon:hover .sp-moon-img{
          transform:scale(1.13) rotate(1.2deg);
          filter:drop-shadow(0 0 70px rgba(12,242,93,.38)) brightness(1.06)
        }
        .sp-moon-halo{transition:opacity .35s ease,transform .35s ease;transform-origin:50% 50%}
        .sp-moon:hover .sp-moon-halo{opacity:.9;transform:scale(1.04)}
      `}</style>
    </section>
  );
}
