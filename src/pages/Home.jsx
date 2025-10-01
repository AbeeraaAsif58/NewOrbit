// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Slider from "../components/Slider";
import LoadingGate from "../components/LoadingGate";
import BackgroundAI from "../components/BackgroundAI";
// import MoonText from "../components/MoonText";
import ArcCarousel from "../components/ArcCarousel";
// import StickyBgVideo from "../components/StickyBgVideo"
import StickyStack3 from "../components/StickyStack3";
import QueriesSection from "../components/QueriesSection";
import Marquee from "../components/Marquee";
import TalkBanner from "../components/TalkBanner"
import FooterOrbit from "../components/FooterOrbit";
import Playfull from "../components/Playfull";
import DualMarqueeSliders from "../components/DualMarqueeSliders";







export default function Home() {
  const root = useRef(null);
  const moonWrap = useRef(null);   // 3D tilt wrapper
  const lightRef = useRef(null);   // cursor spotlight
  const [isGlowHovered, setIsGlowHovered] = useState(false);

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
      rotate: 40,
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
            yPercent: 160, // move to bottom
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
  // useEffect(() => {
  //   const wrap = moonWrap.current;
  //   const img = wrap?.querySelector(".moon-img");
  //   if (!wrap || !img) return;

  //   gsap.set(wrap, { transformPerspective: 900, transformStyle: "preserve-3d" });
  //   gsap.set(img, {
  //     willChange: "transform, filter",
  //     filter: "drop-shadow(0 0 40px rgba(157, 70, 15, 0.32))",
  //     rotateX: 0,
  //     rotateY: 0,
  //   });

  //   const idle = gsap.timeline({ repeat: -1, yoyo: true });
  //   idle
  //     .to(img, { y: -12, duration: 2.4, ease: "sine.inOut" }, 0)
  //     .to(img, { rotateY: 3, rotateX: -2, duration: 1, ease: "sine.inOut" }, 0);

  //   return () => idle.kill();
  // }, []);

  return (
    <>
      <LoadingGate />
      <BackgroundAI mode="scroll" nodeCount={140} linkDistance={140} cursorLinkDistance={190} />

      <section
        ref={root}
        className="relative min-h-[266svh] w-full overflow-hidden text-white "
      >
        {/* Centered big heading that scales in and stays (no left/right) */}
        <div className="hero-head absolute top-[20%] h-[100vh] w-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[6vw] font-bold text-center leading-tight">
          <h1 className="hello">Elevate Your</h1>
          <br />
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
              className="moon-img relative z-10 w-[620px] md:w-[820px] select-none mt-[-30%]"
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
              "radial-gradient(closest-side, var(--color-primary), rgba(12,242,93,0))",
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
                   hover:tracking-wider hover:scale-105 hover:drop-shadow-[0_0_18px_rgba(12,242,93,0.55)]"
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
                   hover:drop-shadow-[0_0_14px_rgba(12,242,93,0.6)]"
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
                   hover:drop-shadow-[0_0_18px_rgba(12,242,93,0.55)]"
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

            <DualMarqueeSliders/>
      {/* Technology Company Introduction */}
      <div className="relative py-20 px-8 md:px-16 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-600/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-teal-500/10 via-transparent to-teal-600/10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-teal-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-teal-600/50 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-teal-500/30 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-8xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 
              className="text-4xl md:text-8xl font-bold text-white mb-6 cursor-pointer transition-all duration-300"
              style={{
                textShadow: isGlowHovered 
                  ? '0 0 30px rgba(12,242,93,0.8), 0 0 60px rgba(12,242,93,0.6), 0 0 90px rgba(12,242,93,0.4)'
                  : '0 0 20px rgba(12,242,93,0.6), 0 0 40px rgba(12,242,93,0.4), 0 0 60px rgba(12,242,93,0.2)',
                filter: isGlowHovered 
                  ? 'drop-shadow(0 0 30px rgba(12,242,93,0.8))'
                  : 'drop-shadow(0 0 20px rgba(12,242,93,0.6))'
              }}
              onMouseEnter={() => setIsGlowHovered(true)}
              onMouseLeave={() => setIsGlowHovered(false)}
            >
              Pioneering the Future of 
              <span 
                className="text-teal-500 block transition-all duration-300"
                style={{
                  textShadow: isGlowHovered 
                    ? '0 0 25px rgba(20,184,166,0.8), 0 0 50px rgba(20,184,166,0.6), 0 0 75px rgba(20,184,166,0.4)'
                    : '0 0 15px rgba(20,184,166,0.6), 0 0 30px rgba(20,184,166,0.4), 0 0 45px rgba(20,184,166,0.2)',
                  filter: isGlowHovered 
                    ? 'drop-shadow(0 0 25px rgba(20,184,166,0.8))'
                    : 'drop-shadow(0 0 15px rgba(20,184,166,0.6))'
                  }}
              >
                Digital Innovation
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                At <span className="text-teal-500 font-semibold">Orbit Walls</span>, we are a cutting-edge technology company 
                specializing in transformative digital solutions that revolutionize how businesses operate in the modern world. 
                Our expertise spans across artificial intelligence, blockchain technology, fintech innovations, and enterprise-grade 
                software development.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                We combine deep technical knowledge with creative vision to deliver solutions that not only meet today's challenges 
                but anticipate tomorrow's opportunities. From AI-powered automation and machine learning algorithms to secure blockchain 
                implementations and scalable cloud architectures, we empower organizations to thrive in an increasingly digital landscape.
              </p>
          
            </div>
          </div>
          



          {/* Technology Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">Advanced algorithms and intelligent automation solutions</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Blockchain Technology</h3>
              <p className="text-gray-400">Secure, decentralized solutions for modern enterprises</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Fintech Innovation</h3>
              <p className="text-gray-400">Revolutionary financial technology and payment systems</p>
            </div>
          </div>
        </div>
      </div>
<div className="mt-[-20%]">
  <Playfull/>
</div>



      <div className="relative h-auto grid place-items-center overflow-hidden mt-[-30%]">
        <h1 className="group relative text-center">
          <span
            className="block mt-[15%] text-5xl md:text-8xl font-extrabold leading-none
            text-transparent bg-clip-text
            bg-gradient-to-r from-primary via-text to-secondary
            bg-[length:200%_100%] bg-left
            transition-[background-position,letter-spacing,transform] duration-700 ease-out
            hover:bg-right hover:tracking-wider hover:scale-[1.02]
            drop-shadow-[0_0_14px_rgba(12,242,93,0.28)]"
            >
            ORBIT WaLL'S<span className="text-white/90">SERVICES</span>
          </span>

          <span className="mt-4 block text-text/70 text-lg text-center mx-auto max-w-6xl">
            High-impact visuals, smooth interactions Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, recusandae accusamus sed temporibus, tenetur exercitationem expedita soluta dignissimos sint minima ea voluptatibus delectus ducimus ab laudantium doloremque deserunt nulla. Voluptas.
            quibusdam, cum ut neque quis.
            Deleniti maxime blanditiis, illum doloremque nulla recusandae laborum mollitia distinctio optio! Voluptatem unde quidem voluptates dolore nisi, qui illum ipsum magni nesciunt eaque quod fugiat perferendis doloremque eveniet cupiditate earum?.
          </span>
        </h1>
      </div>
      <div className="mt-[5%]">

      <Marquee />
      </div>
        <ArcCarousel />
      {/* <TestimonialsStack/> */}
      <QueriesSection />
      <TalkBanner/>
      <FooterOrbit/>
      {/* <Playfull/> */}
    </>
  );
}

