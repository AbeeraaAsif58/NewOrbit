import React from "react";

/**
 * DualMarqueeSliders (SINGLE COMPONENT VERSION)
 * - Full viewport height (100vh)
 * - Top slider (50vh) moves Right ➜ Left
 * - Bottom slider (50vh) moves Left ➜ Right
 * - Hover on each slider pauses movement & reveals images
 * - By default, images are hidden (opacity 0)
 * - Exactly 5 <img> per slider (no cards)
 */
export default function DualMarqueeSliders({
  imagesTop = [
    "/heromeet1.jpg",
    "/heromeet2.jpg",
    "/heromeet3.jpg",
    "/heromeet4.jpg",
    "/heromeet5.jpg",
  ],
  imagesBottom = [
    "/busi1.jpg",
    "/busi2.jpg",
    "/busi3.jpg",
    "/busi4.jpg",
    "/busi5.jpg",
  ],
  speedTop = 50, // Increased speed to reduce GPU load
  speedBottom = 50, // Increased speed to reduce GPU load
}) {
  // ensure exactly 5 images per row
  const top5 = imagesTop.slice(0, 5);
  const bottom5 = imagesBottom.slice(0, 5);

  return (
    <div className="hidden md:block w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden text-white">
      {/* Inline styles for keyframes and hover-pause */}
      <style>{`
        .marquee-group { position: relative; }
        .marquee-outer { position: absolute; inset: 0; }
        .marquee-rail { display: flex; width: max-content; }

        /* Right ➜ Left */
        @keyframes marquee-rtl { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        /* Left ➜ Right */
        @keyframes marquee-ltr { from { transform: translateX(-50%); } to { transform: translateX(0); } }

        .track-rtl { animation-name: marquee-rtl; animation-timing-function: linear; animation-iteration-count: infinite; }
        .track-ltr { animation-name: marquee-ltr; animation-timing-function: linear; animation-iteration-count: infinite; }/* hover keeps sliding; images still reveal via .group-hover */
      `}</style>

      {/* TOP 50vh: Right ➜ Left */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full select-none">
        <div className="marquee-group group h-full w-full overflow-hidden">
          <div
            className="marquee-outer pointer-events-none"
            style={{ animationDuration: `${speedTop}s` }}
          >
            <div className="marquee-rail track-rtl" style={{ animationDuration: `${speedTop}s` }}>
              {/* duplicate rails for seamless loop */}
              {[0, 1].map((d) => (
                <div key={d} className="flex items-center gap-4 sm:gap-6 md:gap-8 pr-4 sm:pr-6 md:pr-8">
                  {top5.map((src, i) => (
                    <img
                      key={`${d}-${i}`}
                      src={src}
                      alt={`top-${i+1}`}
                      className="h-[36vh] sm:h-[40vh] md:h-[50vh] w-auto object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                      draggable={false}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* hover hit area */}
          <div className="absolute inset-0" />
        </div>
      </div>

      {/* BOTTOM 50vh: Left ➜ Right */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] w-full select-none">
        <div className="marquee-group group h-full w-full overflow-hidden">
          <div
            className="marquee-outer pointer-events-none"
            style={{ animationDuration: `${speedBottom}s` }}
          >
            <div className="marquee-rail track-ltr" style={{ animationDuration: `${speedBottom}s` }}>
              {[0, 1].map((d) => (
                <div key={d} className="flex items-center gap-4 sm:gap-6 md:gap-8 pr-4 sm:pr-6 md:pr-8">
                  {bottom5.map((src, i) => (
                    <img
                      key={`${d}-${i}`}
                      src={src}
                      alt={`bottom-${i+1}`}
                      className="h-[36vh] sm:h-[40vh] md:h-[50vh] w-auto object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                      draggable={false}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* hover hit area */}
          <div className="absolute inset-0" />
        </div>
      </div>
    </div>
  );
}
