// src/components/GalleryMarquee.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SolarPoster from "./SolarPoster";

/* ✅ Optimized local assets with correct Vite paths */
const LEFT_IMGS = [
  "/slider1.png","/slider2.png","/slider3.png","/slider4.png",
  "/visa,logo.png","/master-card-logo2.png","/paypal-logo.png",
  "/jsbank logo.png","/peace homes-logo.png","/Booking.com-logo.png","/iata-logo.png",
  "/lbank-logo.png","/NIB_Bank_Logo (2).png","/bkash-logo.png","/payTM-logo.png",
];

const RIGHT_IMGS = [
  "/g1.png","/g2.png","/g3.png","/g8.png","/g5.png",
  "/g6.png","/g7.png","/g8.png","/g9.png","/g10.png",
];

const dup = (arr) => [...arr, ...arr];

/* -------------------- Responsive sizes -------------------- */
function useResponsiveSizes() {
  const [ui, setUi] = useState(() => ({
    gap: 16, w: 140, h: 92, speedLeft: 120, speedRight: 110, // mobile
  }));

  useEffect(() => {
    const mSm = window.matchMedia("(min-width: 640px)");
    const mMd = window.matchMedia("(min-width: 768px)");
    const mLg = window.matchMedia("(min-width: 1024px)");
    const mXl = window.matchMedia("(min-width: 1280px)");

    const apply = () => {
      let next = { gap: 16, w: 120, h: 80, speedLeft: 120, speedRight: 110 }; // mobile - smaller for logos
      if (mSm.matches) next = { gap: 18, w: 140, h: 90, speedLeft: 130, speedRight: 120 };
      if (mMd.matches) next = { gap: 22, w: 160, h: 100, speedLeft: 150, speedRight: 135 };
      if (mLg.matches) next = { gap: 26, w: 180, h: 110, speedLeft: 160, speedRight: 145 };
      if (mXl.matches) next = { gap: 30, w: 200, h: 120, speedLeft: 170, speedRight: 155 };
      setUi(next);
    };

    apply();
    const offs = [mSm, mMd, mLg, mXl].map((m) => {
      const fn = () => apply();
      m.addEventListener("change", fn);
      return () => m.removeEventListener("change", fn);
    });
    return () => offs.forEach((off) => off());
  }, []);

  return ui;
}

/* -------------------- Component -------------------- */
export default function GalleryMarquee({
  leftImages = LEFT_IMGS,
  rightImages = RIGHT_IMGS,
}) {
  const { gap, w: itemWidth, h: itemHeight, speedLeft, speedRight } = useResponsiveSizes();

  const rootRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const tlLeft = useRef(null);
  const tlRight = useRef(null);
  const resizeId = useRef(0);

  const buildMarquee = (el, pxPerSec, dir = "left") => {
    if (!el) return null;
    const half = el.scrollWidth / 2;
    const dur = half / Math.max(40, pxPerSec);
    const fromX = dir === "right" ? -half : 0;
    const toX   = dir === "right" ? 0 : -half;
    return gsap.fromTo(el, { x: fromX }, { x: toX, duration: dur, ease: "none", repeat: -1 });
  };

  const rebuild = () => {
    const L = leftRef.current, R = rightRef.current;
    if (!L || !R) return;
    tlLeft.current?.kill();
    tlRight.current?.kill();
    tlLeft.current  = buildMarquee(L, speedLeft, "left");
    tlRight.current = buildMarquee(R, speedRight, "right");
  };

  useEffect(() => {
    const id = setTimeout(rebuild, 30);
    const onResize = () => {
      clearTimeout(resizeId.current);
      resizeId.current = window.setTimeout(rebuild, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", onResize);
      tlLeft.current?.kill();
      tlRight.current?.kill();
    };
  }, [speedLeft, speedRight, gap, itemWidth, itemHeight, leftImages, rightImages]);

  // Hover zoom (marquee chalta rehta hai)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-imgitem]"));
    const cleaners = items.map((item) => {
      const img = item.querySelector("img");
      const enter = () => gsap.to(img, { scale: 0.96, duration: 0.18, ease: "power2.out" });
      const leave = () => gsap.to(img, { scale: 1,    duration: 0.22, ease: "power3.out" });
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      return () => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      };
    });
    return () => cleaners.forEach((fn) => fn());
  }, [leftImages, rightImages]);

  // Center floating
  const middleRef = useRef(null);
  useEffect(() => {
    if (!middleRef.current) return;
    gsap.to(middleRef.current, { y: -6, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, []);

  /* ---- Left Item: Optimized for logos with green-themed frame ---- */
  const LeftItem = ({ src, idx }) => (
    <div
      data-imgitem
      className="relative shrink-0 overflow-hidden bg-white rounded-lg shadow-lg"
      style={{ 
        width: `${itemWidth}px`, 
        height: `${itemHeight}px`,
        padding: '8px',
        border: '2px solid #0CF25D',
        boxShadow: '0 4px 12px rgba(12, 242, 93, 0.3)'
      }}
    >
      <img
        src={src}
        alt={`logo-${idx}`}
        className="absolute inset-0 w-full h-full object-contain transition-transform duration-200"
        draggable="false"
        loading="lazy"
        decoding="async"
        style={{ 
          borderRadius: '4px',
          padding: '4px'
        }}
        onLoad={(e) => {
          e.target.style.opacity = '1';
        }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );

  /* ---- Right Item: Simple gallery images without frame ---- */
  const RightItem = ({ src, idx }) => (
    <div
      data-imgitem
      className="relative shrink-0 overflow-hidden"
      style={{ 
        width: `${itemWidth}px`, 
        height: `${itemHeight}px`
      }}
    >
      <img
        src={src}
        alt={`gallery-${idx}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-200"
        draggable="false"
        loading="lazy"
        decoding="async"
        style={{ borderRadius: 0 }}
        onLoad={(e) => {
          e.target.style.opacity = '1';
        }}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12 select-none"
      aria-label="Gallery dual marquee"
    >
      {/* Top row → LEFT with gradient background */}
      <div className="relative w-full mb-4">
        {/* Gradient background div behind left images */}
        <div 
          className="absolute inset-0 rounded-lg"
          style={{ 
            height: `${itemHeight + 20}px`, // Add some padding
            top: '-10px',
            left: '-20px',
            right: '-20px',
            background: 'linear-gradient(135deg, #034159 0%, #025951 30%, #02735E 70%, #0CF25D 100%)'
          }}
        />
        <div
          ref={leftRef}
          className="relative flex items-center z-10"
          style={{ gap: `${gap}px`, width: "max-content" }}
        >
          {dup(leftImages).map((src, i) => <LeftItem key={`L-${i}`} src={src} idx={i} />)}
        </div>
      </div>

      {/* —— Center block —— */}
      <div
        ref={middleRef}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center group my-6 sm:my-8"
      >
 

        <h1
          className="
            text-image-fill relative inline-block text-center
            text-[12vw] sm:text-[9vw] md:text-[6vw] lg:text-[5vw]
            leading-none font-extrabold
            drop-shadow-[0_6px_24px_rgba(0,0,0,.35)]
            transition-all duration-300 group-hover:scale-[1.02]
            cursor-pointer
            mt-[10%]
          "
          style={{
            textShadow: 'none',
            filter: 'none',
            color: '#0CF25D'
          }}
        >
          Orbit Walls Powering the Future with Technology
          <span className="heading-shine" aria-hidden />
        </h1>

        <div className="mx-auto mt-3 h-[3px] w-20 sm:w-24 rounded-full overflow-hidden" style={{ background: 'rgba(12, 242, 93, 0.3)' }}>
          <div className="h-full w-0 transition-all duration-500 group-hover:w-full" style={{ background: '#0CF25D' }} />
        </div>

        <p 
          className="mt-8 sm:mt-10 md:mt-12 text-base sm:text-lg md:text-xl text-white leading-relaxed cursor-pointer transition-all duration-300 text-center max-w-4xl mx-auto"
          style={{
            textShadow: 'none',
            filter: 'none'
          }}
        >
          Obrit is a leading Web3 solutions provider specializing in peer-to-peer funding and tokenization platforms. Our innovative platform facilitates revenue sharing and seamlessly connects traditional financial systems with digital assets. Our mission is to enable a secure and effortless bridge between conventional finance and the digital economy through advanced payment gateway solutions, tokenized deposits, and Central Bank Digital Currency (CBDC) integration.
          </p>
      </div>







      {/* SolarPoster (as-is) */}
      <div className="mt-[-8vw] sm:mt-[-6%]">
        <SolarPoster animate={true} speed={1.4} />
      </div>

      {/* Bottom row → RIGHT */}
      <div
        ref={rightRef}
        className="flex items-center"
        style={{ gap: `${gap}px`, width: "max-content" }}
      >
        {dup(rightImages).map((src, i) => <RightItem key={`R-${i}`} src={src} idx={i} />)}
      </div>
    </div>
  );
}
