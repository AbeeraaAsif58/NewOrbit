// src/components/GalleryMarquee.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SolarPoster from "./SolarPoster";

/* ✅ Public folder ke assets ko hamesha leading slash ke sath use karein */
const LEFT_IMGS = [
  "public/ser1.webp","public/ser2.webp","public/ser3.webp","public/ser4.webp","public/ser5.webp",
  "public/ser6.webp","public/ser7.webp","public/ser8.webp","public/ser9.webp","/public/ser10.webp",
  "public/ser1.webp","public/ser2.webp","public/ser3.webp",
];

const RIGHT_IMGS = [
  "public/g1.png","public/g2.png","/public/g3.png","/public/g7.png","public/g5.png",
  "public/g6.png","public/g7.png","public/g8.png","public/g9.png","public/g10.png",
  "public/g11.png","public/g12.png","public/g13.png",
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
      let next = { gap: 16, w: 140, h: 92, speedLeft: 120, speedRight: 110 };
      if (mSm.matches) next = { gap: 18, w: 160, h: 104, speedLeft: 130, speedRight: 120 };
      if (mMd.matches) next = { gap: 22, w: 180, h: 118, speedLeft: 150, speedRight: 135 };
      if (mLg.matches) next = { gap: 26, w: 210, h: 132, speedLeft: 160, speedRight: 145 };
      if (mXl.matches) next = { gap: 30, w: 240, h: 150, speedLeft: 170, speedRight: 155 };
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
  const [isHovered, setIsHovered] = useState(false);

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

  /* ---- Item: FRAME REMOVED (no shadow/rounded/bg) ---- */
  const Item = ({ src, idx }) => (
    <div
      data-imgitem
      className="relative shrink-0 overflow-hidden"
      style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
    >
      <img
        src={src}
        alt={`gallery-${idx}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 will-change-transform"
        draggable="false"
        loading="lazy"
        style={{ borderRadius: 0 }}
      />
    </div>
  );

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden py-8 sm:py-10 md:py-12 select-none"
      aria-label="Gallery dual marquee"
    >
      {/* Top row → LEFT */}
      <div
        ref={leftRef}
        className="flex items-center"
        style={{ gap: `${gap}px`, width: "max-content", marginBottom: "14px" }}
      >
        {dup(leftImages).map((src, i) => <Item key={`L-${i}`} src={src} idx={i} />)}
      </div>

      {/* —— Center block —— */}
      <div
        ref={middleRef}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center group my-6 sm:my-8"
      >
        {/* Decorative corners/glow ko frame samajh rahe ho to inko bhi remove kar diya */}
        {/* (agar chahiye to uncomment kar sakte ho) */}

        <h1
          className="
            text-image-fill relative inline-block
            text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]
            leading-none font-extrabold
            drop-shadow-[0_6px_24px_rgba(0,0,0,.35)]
            transition-all duration-300 group-hover:scale-[1.02]
            cursor-pointer
          "
          style={{
            textShadow: isHovered 
              ? '0 0 30px rgba(12,242,93,0.8), 0 0 60px rgba(12,242,93,0.6), 0 0 90px rgba(12,242,93,0.4)'
              : '0 0 20px rgba(12,242,93,0.6), 0 0 40px rgba(12,242,93,0.4), 0 0 60px rgba(12,242,93,0.2)',
            filter: isHovered 
              ? 'drop-shadow(0 0 30px rgba(12,242,93,0.8))'
              : 'drop-shadow(0 0 20px rgba(12,242,93,0.6))'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          INTRODUCTION
          <span className="heading-shine" aria-hidden />
        </h1>

        <div className="mx-auto mt-3 h-[3px] w-20 sm:w-24 bg-primary/70 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-primary/70 transition-all duration-500 group-hover:w-full" />
        </div>

        <p 
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-text/90 leading-relaxed cursor-pointer transition-all duration-300"
          style={{
            textShadow: isHovered 
              ? '0 0 20px rgba(12,242,93,0.6), 0 0 40px rgba(12,242,93,0.4), 0 0 60px rgba(12,242,93,0.2)'
              : '0 0 10px rgba(12,242,93,0.4), 0 0 20px rgba(12,242,93,0.2), 0 0 30px rgba(12,242,93,0.1)',
            filter: isHovered 
              ? 'drop-shadow(0 0 20px rgba(12,242,93,0.6))'
              : 'drop-shadow(0 0 10px rgba(12,242,93,0.4))'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          orbits walls Projects Circle Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero, dolorum eaque atque temporibus unde delectus perferendis! Sapiente, tenetur corporis? Accusantium aliquid sunt iste dolores placeat? Ipsum enim libero officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae voluptates molestias, magni excepturi doloremque ducimus tempore possimus repudiandae aliquam voluptatem quidem exercitationem nam enim, blanditiis dignissimos ipsam quas placeat.?
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
        {dup(rightImages).map((src, i) => <Item key={`R-${i}`} src={src} idx={i} />)}
      </div>
    </div>
  );
}
