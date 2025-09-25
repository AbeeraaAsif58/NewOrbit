import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom cursor:
 * - Dot + Ring (same as before)
 * - New: colorful trailing particles on move
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailWrap = useRef(null);

  useEffect(() => {
    const finePointer = matchMedia("(pointer:fine)").matches;
    if (!finePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const wrap = trailWrap.current;

    // Position animators (dot + ring)
    const qxDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const qyDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const qxRing = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3" });
    const qyRing = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3" });

    // 🎨 Particle colors
    const colors = ["#ff4d4d", "#4dd0ff", "#4dff88", "#ffd24d", "#d44dff"];

    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      qxDot(x); qyDot(y);
      qxRing(x); qyRing(y);

      // 👉 Create particle
      const particle = document.createElement("div");
      particle.className =
        "pointer-events-none fixed left-0 top-0 w-2 h-2 rounded-full opacity-80";
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.transform = `translate(${x}px, ${y}px)`;
      wrap.appendChild(particle);

      // Animate particle
      gsap.to(particle, {
        x: x + gsap.utils.random(-40, 40),
        y: y + gsap.utils.random(-40, 40),
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    };

    const down = () => {
      gsap.to(dot, { scale: 0.6, duration: 0.12 });
      gsap.to(ring, { scale: 0.9, duration: 0.12 });
    };

    const up = () => {
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power3.out" });
      gsap.to(ring, { scale: 1, duration: 0.2, ease: "power3.out" });
    };

    // Hover targets
    const enter = () => {
      gsap.to(ring, { scale: 1.8, borderColor: "#ffffff", duration: 0.2 });
      gsap.to(dot, { backgroundColor: "#ffffff", duration: 0.2 });
    };
    const leave = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.4)",
        duration: 0.2,
      });
      gsap.to(dot, { backgroundColor: "#ffffff", duration: 0.2 });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const over = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (el) enter();
      else leave();
    };
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", over);
    };
  }, []);

  return (
    <>
      {/* Trail container */}
      <div ref={trailWrap} className="pointer-events-none fixed inset-0 z-[9997]" />

      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-[9998]
                   h-10 w-10 rounded-full border
                   border-white/40 backdrop-blur-[1px]"
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-[9999]
                   h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
      />
    </>
  );
}
