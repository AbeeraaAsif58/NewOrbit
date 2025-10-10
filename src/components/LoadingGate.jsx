// src/components/LoadingGate.jsx - Optimized Version
import React, { useEffect, useRef, useState } from "react";

export default function LoadingGate() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const newProgress = Math.min(100, p + 2 + Math.random() * 3);
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 500);
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "#034159" }}
    >
      {/* Simple logo area */}
      <div className="mb-8">
        <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white/80 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64">
        <div className="flex justify-between text-white text-sm mb-2">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}