import React, { useEffect, useRef } from "react";

export default function BackgroundAI({
  nodeCount = 120,
  linkDistance = 130,
  cursorLinkDistance = 170,
  mode = "fixed", // "fixed" | "scroll"
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const DPR = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    let w = 0, h = 0;

    const resize = () => {
      // viewport size if fixed, otherwise use current visible area
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const rand = (a, b) => a + Math.random() * (b - a);
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: rand(-0.15, 0.15),
      vy: rand(-0.15, 0.15),
      z: Math.random(),
    }));

    const cursor = { x: w / 2, y: h / 2, tx: w / 2, ty: h / 2, down: false };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      cursor.tx = e.clientX - rect.left;
      cursor.ty = e.clientY - rect.top;
    };
    const onDown = () => (cursor.down = true);
    const onUp = () => (cursor.down = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const baseBg = "rgba(32,44,63,1)";
    const nodeColor = "rgba(173,216,255,0.95)";
    const lineColor = "rgba(120,190,255,";
    const cursorHalo = "rgba(120,190,255,0.15)";

    const clamp = (v,a,b)=>Math.max(a,Math.min(v,b));
    const lerp = (a,b,t)=>a+(b-a)*t;

    let lastScrollY = window.scrollY;

    const tick = () => {
      cursor.x = lerp(cursor.x, cursor.tx, 0.15);
      cursor.y = lerp(cursor.y, cursor.ty, 0.15);

      // if mode = "scroll", add subtle parallax by scroll delta
      let scrollDelta = 0;
      if (mode === "scroll") {
        const now = window.scrollY;
        scrollDelta = now - lastScrollY;
        lastScrollY = now;
      }

      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#1b2738");
      g.addColorStop(1, baseBg);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 12; i++) {
        const r = Math.random() * 2 + 0.5;
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.fill();
      }

      for (let n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // parallax scroll drift (front layers move a bit more)
        if (mode === "scroll") n.y += scrollDelta * (0.15 + 0.35 * n.z);

        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        const dx = cursor.x - n.x;
        const dy = cursor.y - n.y;
        const dist = Math.hypot(dx, dy);
        if (dist < cursorLinkDistance) {
          const force = (cursorLinkDistance - dist) / cursorLinkDistance;
          const pull = 0.08 * (0.4 + 0.6 * n.z) * force;
          n.x += dx * pull;
          n.y += dy * pull;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDistance) {
            const op = clamp(1 - d / linkDistance, 0, 1) * (0.35 + 0.65 * (a.z + b.z) / 2);
            const lw = 1 + 1.2 * op;
            ctx.strokeStyle = `${lineColor}${op})`;
            ctx.lineWidth = lw;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let n of nodes) {
        const size = 1.2 + n.z * 2.2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.shadowBlur = 12 * n.z;
        ctx.shadowColor = "rgba(120,190,255,0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      const haloR = 80;
      const rad = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, haloR);
      rad.addColorStop(0, cursorHalo);
      rad.addColorStop(1, "rgba(120,190,255,0)");
      ctx.fillStyle = rad;
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, haloR, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [nodeCount, linkDistance, cursorLinkDistance, mode]);

  // className changes by mode:
  const cls =
    mode === "fixed"
      ? "fixed inset-0 z-0 pointer-events-none"
      : "absolute inset-0 z-0 pointer-events-none"; // scrolls with page

  return <canvas ref={canvasRef} className={cls} aria-hidden />;
}
