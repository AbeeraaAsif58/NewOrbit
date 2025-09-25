// src/components/StickyBgVideo.jsx
import React from "react";

export default function StickyBgVideo({
  src = "public/logo/vid 1.mp4",   // apna video yahan
  poster = "public/logo/vid 1.mp4", // optional fallback frame
  topOffset = "0px",            // navbar height jitna offset (e.g. "64px")
  dark = 0.35,                  // overlay darkness (0–1)
  children,
}) {
  return (
    // Outer wrapper ko extra height dete hain taake sticky effect dikhé
    <section className="relative" style={{ height: "200vh" }}>
      {/* Sticky wrapper — scroll ke dauran top par chipak jaayega */}
      <div className="sticky" style={{ top: topOffset }}>
        <div className="relative h-screen w-full overflow-hidden">
          {/* Background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay (readability) */}
          <div
            className="absolute inset-0"
            style={{ background: `rgba(0,0,0,${dark})` }}
          />
          {/* Your foreground content (optional) */}
          <div className="relative z-10 flex h-full items-center justify-center text-center p-6">
            {children ?? (
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold">Sticky Video Hero</h1>
                <p className="mt-3 text-white/80">
                  Yeh section scroll par top se chipka rehta hai — video background ke sath.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
