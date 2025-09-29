import React, { useEffect, useMemo, useRef } from "react";

/** 🔴🔴🔴 PLANET IMAGES YAHI BADALNI HAIN 🔴🔴🔴
 *  -> har object me `img` wali URL replace karo
 *  -> `href` me apna project link
 */
const DEFAULT_PLANETS = [
  { name: "Neptune", ring: 5, angle: 320, size: 70,
    img: "https://plus.unsplash.com/premium_photo-1678820783285-192e0355183c?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "#" },
  { name: "Uranus",  ring: 4, angle: 205, size: 50,
    img: "https://plus.unsplash.com/premium_photo-1678820783285-192e0355183c?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "#" },
  { name: "Jupiter", ring: 3, angle: 172, size: 110,
    img: "https://plus.unsplash.com/premium_photo-1678820783285-192e0355183c?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "#" },
  { name: "Saturn",  ring: 5, angle: 350, size: 110,
    img: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=700&auto=format&fit=crop", href: "#", ringed: true },
  { name: "Mars",    ring: 4, angle:  20, size: 80,
    img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=600&auto=format&fit=crop", href: "#" },
  { name: "Earth",   ring: 4, angle: 265, size: 95,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=700&auto=format&fit=crop", href: "#" },
  { name: "Mercury", ring: 2, angle:  85, size: 38,
    img: "https://images.unsplash.com/photo-1580428180126-7a00f9a3fb4a?q=80&w=300&auto=format&fit=crop", href: "#" },
  { name: "Venus",   ring: 3, angle:  90, size: 58,
    img: "https://images.unsplash.com/photo-1498598453630-d1a4d9f3edcc?q=80&w=500&auto=format&fit=crop", href: "#" },
  { name: "Ceres",   ring: 3, angle: 225, size: 26,
    img: "https://images.unsplash.com/photo-1580428180126-7a00f9a3fb4a?q=80&w=200&auto=format&fit=crop", href: "#" },
];

export default function SolarPoster({
  className = "",
  width = 1920,
  height = 900,
  center = { cx: 1500, cy: 460 },
  rxList = [260, 420, 600, 800, 1040, 1280],
  ryMul = 0.62,
  planets = DEFAULT_PLANETS,

  /** 🔵🔵🔵 MOON IMAGE YAHAN BADALNI HAI 🔵🔵🔵 */
  moon = {
    show: true,
    img: "https://munrooftoprome.com/images/moon/595.webp", // <— apni moon image
    x: 110, y: 470, size: 320,
  },

  starDensity = 1,
  animate = true,
  speed = 1.0,
}) {
  const ryList = useMemo(() => rxList.map((rx) => rx * ryMul), [rxList, ryMul]);
  const toRad = (deg) => (deg * Math.PI) / 180;

  const planetGs = useRef([]);
  const anglesRef = useRef(planets.map((p) => toRad(p.angle)));
  const pausedRef = useRef(planets.map(() => false));
  const rafRef = useRef();

  useEffect(() => {
    if (!animate) return;

    anglesRef.current = planets.map((p) => toRad(p.angle));
    pausedRef.current = planets.map(() => false);

    const base = 0.35;
    const omegas = planets.map((p) => (base * speed) / (1 + p.ring * 0.38));

    let last = performance.now();
    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      planets.forEach((p, i) => {
        const g = planetGs.current[i];
        if (!g) return;
        const rx = rxList[p.ring], ry = ryList[p.ring];

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
  }, [animate, speed, planets, rxList, ryList, center.cx, center.cy]);

  return (
    <section
      /* 👉 ORANGE BORDERED SECTION ko thoda RIGHT shift:
         - left margin add
         - width chhoti so overall box right side dikhe
      */
      className={`relative h-[190svh] border-2 border-orange-600 ${className} w-full`}
      style={{}}
    >
      {/* Stars */}
      <div className="absolute inset-0">
        <div className="stars layer1" />
        <div className="stars layer2" />
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full" role="img">
        {/* Rings */}
        <g filter="url(#ringShadow)">
          {rxList.map((rx, i) => (
            <ellipse key={i} cx={center.cx} cy={center.cy} rx={rx} ry={ryList[i]}
              fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth={2} />
          ))}
          {rxList.map((rx, i) => (
            <ellipse key={`g${i}`} cx={center.cx} cy={center.cy} rx={rx} ry={ryList[i]}
              fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth={20} style={{ filter: "blur(12px)" }} />
          ))}
        </g>

        {/* Moon */}
        {moon?.show && (
          <g filter="url(#moonGlow)">
            <image
              href={moon.img}               /* 🔵 MOON IMG URL */
              x={moon.x - moon.size / 2}
              y={moon.y - moon.size / 2}
              width={moon.size}
              height={moon.size}
              preserveAspectRatio="xMidYMid slice"
              className="floaty"
              style={{ cursor: "default" }}
            />
          </g>
        )}

        {/* Planets */}
        {planets.map((p, idx) => {
          const r = p.size / 2;
          const x0 = center.cx + rxList[p.ring] * Math.cos(toRad(p.angle));
          const y0 = center.cy + ryList[p.ring] * Math.sin(toRad(p.angle));

          return (
            <g
              key={idx}
              ref={(el) => (planetGs.current[idx] = el)}
              transform={`translate(${x0}, ${y0})`}
              className="planet"
              onMouseEnter={() => (pausedRef.current[idx] = true)}
              onMouseLeave={() => (pausedRef.current[idx] = false)}
            >
              <ellipse cx="4" cy={r * 0.65} rx={r * 0.55} ry={r * 0.28} fill="rgba(0,0,0,0.55)" style={{ filter: "blur(6px)" }} />
              <a href={p.href || "#"} target="_blank" rel="noreferrer" aria-label={p.name} onClick={(e) => e.stopPropagation()}>
                <image
                  href={p.img}              /* 🔴 HAR PLANET KI IMG YAHAN SE AATI HAI */
                  x={-r} y={-r} width={p.size} height={p.size}
                  preserveAspectRatio="xMidYMid slice"
                  className="planet-img"
                />
              </a>
              {p.ringed && (
                <ellipse cx="0" cy="0" rx={r * 1.3} ry={r * 0.55}
                  fill="none" stroke="rgba(230,210,170,0.75)" strokeWidth={4}
                  transform="rotate(-15)" style={{ filter: "drop-shadow(0 0 8px rgba(230,210,170,.45))" }} />
              )}
            </g>
          );
        })}

        <defs>
          <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#c85013" floodOpacity=".25" />
          </filter>
          <filter id="ringShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0" />
          </filter>
        </defs>
      </svg>

      <style>{`
        .planet-img { cursor: pointer; transition: transform .22s ease, filter .22s ease; }
        .planet:hover .planet-img { transform: scale(1.08); filter: drop-shadow(0 8px 18px rgba(0,0,0,.45)) brightness(1.04); }
        .floaty { animation: float 6s ease-in-out infinite alternate; }
        @keyframes float { from { transform: translateY(-6px); } to { transform: translateY(6px); } }

        .stars{position:absolute;inset:0;background-size:100% 100%}
        .stars.layer1{
          background-image:
            radial-gradient(1px 1px at 10% 20%, #fff, transparent 60%),
            radial-gradient(1.2px 1.2px at 35% 70%, #fff, transparent 60%),
            radial-gradient(1.4px 1.4px at 78% 30%, #fff, transparent 60%),
            radial-gradient(1px 1px at 60% 45%, #fff, transparent 60%),
            radial-gradient(1.2px 1.2px at 85% 80%, #fff, transparent 60%);
          animation: drift 90s linear infinite; opacity:.75;
        }
        .stars.layer2{
          background-image:
            radial-gradient(1px 1px at 20% 60%, #fff, transparent 60%),
            radial-gradient(1.2px 1.2px at 55% 25%, #fff, transparent 60%),
            radial-gradient(1px 1px at 90% 40%, #fff, transparent 60%),
            radial-gradient(1.2px 1.2px at 70% 75%, #fff, transparent 60%);
          animation: drift 160s linear infinite reverse; opacity:.55;
        }
        @keyframes drift { from { transform: translate3d(0,0,0); } to { transform: translate3d(-3%,-3%,0); } }
      `}</style>
    </section>
  );
}
