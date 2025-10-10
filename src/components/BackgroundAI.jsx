// src/components/BackgroundAI.jsx - Optimized Version
import React, { useEffect, useRef } from "react";

export default function BackgroundAI({
  nodeCount = 20, // Reduced default
  linkDistance = 80,
  cursorLinkDistance = 100,
  mode = "fixed",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Simplified nodes
    const nodes = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const cursor = { x: w / 2, y: h / 2 };
    
    const onMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };
    
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(12, 242, 93, 0.1)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        
        // Cursor connections
        const dx = nodes[i].x - cursor.x;
        const dy = nodes[i].y - cursor.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < cursorLinkDistance) {
          ctx.strokeStyle = "rgba(12, 242, 93, 0.2)";
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(cursor.x, cursor.y);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [nodeCount, linkDistance, cursorLinkDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${
        mode === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0 -z-10"
      }`}
      style={{ background: "transparent" }}
    />
  );
}