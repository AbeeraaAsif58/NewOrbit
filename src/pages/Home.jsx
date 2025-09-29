// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Slider from "../components/Slider";
import LoadingGate from "../components/LoadingGate";
// import MoonText from "../components/MoonText";
import ArcCarousel from "../components/ArcCarousel";
// import StickyBgVideo from "../components/StickyBgVideo"
import StickyStack3 from "../components/StickyStack3";
import QueriesSection from "../components/QueriesSection";
import Marquee from "../components/Marquee";
import TalkBanner from "../components/TalkBanner"
import FooterOrbit from "../components/FooterOrbit";







export default function Home() {
  const root = useRef(null);
  const moonWrap = useRef(null);   // 3D tilt wrapper
  const lightRef = useRef(null);   // cursor spotlight

  // Initial headline POP (center scale-in) + idle moon drift
 // Initial headline POP (center scale-in) + idle moon drift
useEffect(() => {
  const ctx = gsap.context(() => {
    // Headline hidden initially
    gsap.set(".hero-head", {
      opacity: 0,
      scale: 0,
      filter: "blur(10px)",
      transformOrigin: "50% 50%",
    });

    gsap
      .timeline({ defaults: { ease: "power3.out" }, delay: 2 }) // 👈 3s delay added
      .to(".hero-head", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.9 })
      .to(".hero-head", { scale: 1.06, duration: 0.45 }, "-=0.2")
      .to(".hero-head", { scale: 1.0, duration: 0.45, ease: "power2.out" });

    // Idle drift (moon subtle rotation)
    gsap.to(".moon-img", {
      rotate: 20,
      duration: 30,
      yoyo: true,
      repeat: -1,
    });
  }, root);

  return () => ctx.revert();
}, []);

  // Parallax while hero is on screen
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(".moon-img", { y: 90, scale: 0.98 }, { y: -60, scale: 1.06 }, 0)
        .fromTo(".hero-title", { y: 24, opacity: 0 }, { y: 0, opacity: 1 }, 0.1)
        .to(".glow", { opacity: 1 }, 0.2);

      // Main scroll choreography (kept, but NO left/right on headline)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      tl
        .to(".line-one", { xPercent: -45, opacity: 0.9, ease: "power2.out" }, 0)
        .to(".line-two", { xPercent: 45, opacity: 0.9, ease: "power2.out" }, 0)
        .to(
          moonWrap.current,
          {
            scale: 0.55,
            xPercent: 79,  // move to right
            yPercent: 130, // move to bottom
            transformOrigin: "50% 50%",
          },
          0.1
        );
    }, root);

    return () => ctx.revert();
  }, []);

  // (REMOVED) The old scroll effect that pushed .hello/.hyisycis left/right
  // => nothing here anymore so the headline won’t slide sideways

  // MOON: soft glow + gentle idle wobble (no hover light)
  useEffect(() => {
    const wrap = moonWrap.current;
    const img = wrap?.querySelector(".moon-img");
    if (!wrap || !img) return;

    gsap.set(wrap, { transformPerspective: 900, transformStyle: "preserve-3d" });
    gsap.set(img, {
      willChange: "transform, filter",
      filter: "drop-shadow(0 0 40px rgba(157, 70, 15, 0.32))",
      rotateX: 0,
      rotateY: 0,
    });

    const idle = gsap.timeline({ repeat: -1, yoyo: true });
    idle
      .to(img, { y: -12, duration: 2.4, ease: "sine.inOut" }, 0)
      .to(img, { rotateY: 3, rotateX: -2, duration: 1, ease: "sine.inOut" }, 0);

    return () => idle.kill();
  }, []);

  return (
    <>
      <LoadingGate />

      <section
        ref={root}
        className="relative min-h-[266svh] w-full overflow-hidden text-white mt-[-9%]"
      >
        {/* Centered big heading that scales in and stays (no left/right) */}
        <div className="hero-head absolute top-[20%] h-[100vh] w-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[8vw] font-bold text-center leading-tight">
          <h1 className="hello">Elevate Your</h1>
          <h1 className="hyisycis">Financial Future</h1>
        </div>

        {/* Starfield now provided globally in App.jsx */}

        {/* Moon + Spotlight */}
        <div className="absolute inset-0 flex justify-center items-start pt-16 md:pt-24">
          <div
            ref={moonWrap}
            className="relative will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="public/moon.png"
              alt="moon"
              className="moon-img relative z-10 w-[420px] md:w-[620px] select-none"
              draggable="false"
            />
            <div
              ref={lightRef}
              className="pointer-events-none absolute inset-0 rounded-full z-20 opacity-0"
              style={{
                background:
                  "radial-gradient(circle at var(--lx,50%) var(--ly,50%), rgba(217,217,217,0.9) 0%, rgba(217,217,217,0.6) 20%, rgba(217,217,217,0.2) 38%, rgba(217,217,217,0) 60%)",
                mixBlendMode: "screen",
                filter: "blur(1.5px)",
              }}
            />
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="glow pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full blur-3xl opacity-0 border-2 border-primary"
          style={{
            background:
              "radial-gradient(closest-side, var(--color-primary), rgba(200,80,19,0))",
            mixBlendMode: "screen",
          }}
        />

        <div className="mt-[68%]">
          <div className="group relative h-[70vh] overflow-hidden">
            <div className="flex flex-col place-items-start gap-10 pl-[10%]">
              {/* 1) Gradient + glow + underline slide */}
              <h1
                className="group/one relative cursor-pointer text-4xl md:text-4xl font-extrabold tracking-tight
                   text-white
                   transition-all duration-300 ease-out
                   hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_18px_rgba(200,80,19,0.55)]"
              >
                Transform your business <br /> with cutting-edge
                <span
                  className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-black to-primary
                       transition-all duration-500 group-hover/one:w-full"
                ></span>
              </h1>

              {/* 2) Clean white -> neon shift + slight skew */}
              <h1
                className="group/two relative cursor-pointer text-2xl md:text-4xl font-extrabold tracking-tight
                   text-white transition-all duration-300 ease-out
                   hover:text-white hover:translate-y-1 hover:skew-x-[2deg] hover:tracking-wider
                   hover:drop-shadow-[0_0_14px_rgba(200,80,19,0.6)]"
              >
                fintech solutions powered by
                <span
                  className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-black to-primary
                       transition-all duration-500 group-hover/two:w-full"
                ></span>
              </h1>

              {/* 3) Subtle -> teal gradient on hover + lift */}
              <h1
                className="group/three relative cursor-pointer text-2xl md:text-4xl font-extrabold tracking-tight
                   text-white
                   transition-all duration-300 ease-out
                   hover:text-white hover:tracking-wider hover:-translate-y-1
                   hover:drop-shadow-[0_0_18px_rgba(200,80,19,0.55)]"
              >
                ORBIT WALLS's <br /> innovative technology.
                <span
                  className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-black to-primary
                       transition-all duration-500 group-hover/three:w-full"
                ></span>
              </h1>
            </div>
          </div>

            <Slider />
          
        </div>
      </section>

      <StickyStack3
        topOffset="64px"
        images={{
          heroCircle: "/media/hero-people.jpg",
          exploreLeft: "/media/explore-left.jpg",
          exploreRight: "/media/explore-right.jpg",
        }}
      />

      <div className="relative h-[100vh] grid place-items-center overflow-hidden">
        <h1 className="group relative text-center">
          <span
            className="block mt-[15%] text-5xl md:text-8xl font-extrabold leading-none
                 text-transparent bg-clip-text
                 bg-gradient-to-r from-primary via-text to-secondary
                 bg-[length:200%_100%] bg-left
                 transition-[background-position,letter-spacing,transform] duration-700 ease-out
                 hover:bg-right hover:tracking-wider hover:scale-[1.02]
                 drop-shadow-[0_0_14px_rgba(255,107,53,0.28)]"
          >
            ORBIT WALL'S<span className="text-white/90">SERVICES</span>
          </span>

          <span className="mt-4 block text-text/70 text-lg">
            High-impact visuals, smooth interactions.
          </span>
        </h1>
      </div>
        <ArcCarousel />
      <Marquee/>
      {/* <TestimonialsStack/> */}
      <QueriesSection />
      <TalkBanner/>
      <FooterOrbit/>
      {/* <Playfull/> */}
    </>
  );
}

