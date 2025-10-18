// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import ProfessionalPartners from "../components/Slider";
import SolarPoster from "../components/SolarPoster";
import LoadingGate from "../components/LoadingGate";
// import MoonText from "../components/MoonText";
import ArcCarousel from "../components/ArcCarousel";
// import StickyBgVideo from "../components/StickyBgVideo"
import StickyStack3 from "../components/StickyStack3";
import QueriesSection from "../components/QueriesSection";
import TalkBanner from "../components/TalkBanner"
import FooterOrbit from "../components/FooterOrbit";
import DualMarqueeSliders from "../components/DualMarqueeSliders";

export default function Home() {
  const root = useRef(null);

  // Initial headline POP (center scale-in)
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
        .to(".line-two", { xPercent: 45, opacity: 0.9, ease: "power2.out" }, 0);
    }, root);

    return () => ctx.revert();
  }, []);

  // (REMOVED) The old scroll effect that pushed .hello/.hyisycis left/right
  // => nothing here anymore so the headline won't slide sideways

  return (
    <>
      <LoadingGate />

      <section
        ref={root}
        className="relative h-screen w-screen overflow-hidden text-white fixed inset-0 m-0 p-0 -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8 -my-6 sm:-my-8 md:-my-10 -mt-20 sm:-mt-24 md:-mt-28"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectFit: 'cover' }}
          onError={(e) => console.log('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/backvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered big heading that scales in and stays (no left/right) */}
        <div className="hero-head absolute top-0 h-[100vh] w-full left-0 z-10 text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[6vw] font-bold text-center leading-tight px-4 flex items-center justify-center font-poppins">
          <div>
            <h1 className="hello font-poppins">Beyond Walls</h1>
            <br />
            <h1 className="hyisycis font-poppins">Towards Innovation</h1>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/about" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                Why ORBIT WALLS
                <span className="text-white">→</span>
              </Link>
              <Link to="/contact" className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                Let's Talk
                <span className="text-teal-500 hover:text-white">→</span>
              </Link>
            </div>
          </div>
        </div>



      </section>


      {/* Spacer for fixed red box */}
    


        

    
        <div
          className="glow pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[780px] h-[400px] sm:h-[600px] md:h-[780px] rounded-full blur-3xl opacity-0 border-2 border-primary"
          style={{
            background:
              "radial-gradient(closest-side, var(--color-primary), rgba(12,242,93,0))",
            mixBlendMode: "screen",
          }}
        />

  




            <div className="-mt-24 sm:mt-0">
              {/* Orbit Walls Powering Section */}
              <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center py-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-400 mb-6 leading-tight">
                  Orbit Walls
                  <span className="block text-white/90">Powering the Future</span>
                  <span className="block text-green-400">with Technology</span>
                </h1>

                <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-8" />

                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8 text-justify">
                  Orbit Walls is a leading Web3 solutions provider specializing in peer-to-peer funding and tokenization platforms. 
                  Our innovative platform facilitates revenue sharing and seamlessly connects traditional financial systems with digital assets.
                </p>

              </div>

              {/* Professional Partners */}
              <div className="mt-2">
                <ProfessionalPartners />
              </div>
            </div> 

            {/* Moving Objects Section - SolarPoster */}
            <div className="mt-4 mb-8">
              <SolarPoster animate={true} speed={1.4} />
            </div>






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
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
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
          <div className="mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 cursor-pointer transition-all duration-300 px-4 font-poppins"
              style={{
                textShadow: 'none',
                filter: 'none'
              }}
            >
              Pioneering the Future of 
              <span 
                className="text-teal-500 block transition-all duration-300 font-poppins"
                style={{
                  textShadow: 'none',
                  filter: 'none'
                }}
              >
                Digital Innovation
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 font-sans text-justify">
                At <span className="text-teal-500 font-semibold">Orbit Walls</span>, we are a cutting-edge technology company 
                specializing in transformative digital solutions that revolutionize how businesses operate in the modern world. 
                Our expertise spans across artificial intelligence, blockchain technology, fintech innovations, and enterprise-grade 
                software development.
              </p>
            {/* Core domains: Web3, Fintech, AI, Gaming */}
            <div className="mt-6 mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                { label: 'Web3', color: 'from-emerald-500/20 to-teal-500/10' },
                { label: 'Fintech', color: 'from-teal-500/20 to-emerald-500/10' },
                { label: 'AI', color: 'from-cyan-500/20 to-teal-500/10' },
                { label: 'Gaming', color: 'from-lime-500/20 to-teal-500/10' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`px-4 py-2 rounded-full border border-teal-500/30 bg-gradient-to-br ${tag.color} text-white/90 text-sm sm:text-base font-semibold tracking-wide backdrop-blur-sm`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 font-sans text-justify">
                We combine deep technical knowledge with creative vision to deliver solutions that not only meet today's challenges 
                but anticipate tomorrow's opportunities. From AI-powered automation and machine learning algorithms to secure blockchain 
                implementations and scalable cloud architectures, we empower organizations to thrive in an increasingly digital landscape.
              </p>
          
            </div>
          </div>
          



          {/* Technology Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-4 sm:p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 font-poppins">AI & Machine Learning</h3>
              <p className="text-sm sm:text-base text-gray-400 font-sans text-justify">Advanced algorithms and intelligent automation solutions</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-4 sm:p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 font-poppins">Blockchain Technology</h3>
              <p className="text-sm sm:text-base text-gray-400 font-sans text-justify">Secure, decentralized solutions for modern enterprises</p>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-4 sm:p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 font-poppins">Fintech Innovation</h3>
              <p className="text-sm sm:text-base text-gray-400 font-sans text-justify">Revolutionary financial technology and payment systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-auto grid place-items-center overflow-hidden px-4">
        <h1 className="group relative text-center">
          <span
            className="block mt-[10%] sm:mt-[15%] text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-none font-poppins
            text-transparent bg-clip-text
            bg-gradient-to-r from-primary via-text to-secondary
            bg-[length:200%_100%] bg-left
            transition-[background-position,letter-spacing,transform] duration-700 ease-out
            hover:bg-right hover:tracking-wider hover:scale-[1.02]
            drop-shadow-[0_0_14px_rgba(12,242,93,0.28)]"
            >
            Redefining Innovation <span className="text-white/90 font-poppins">Through Advanced Technology</span>
          </span>

          <span className="mt-4 sm:mt-6 block text-text/70 text-base sm:text-lg text-center mx-auto max-w-6xl px-4 font-sans text-justify">
          Orbit Walls LLC, we believe that true innovation begins where technology and creativity meet. By harnessing the power of AI, automation, cloud computing, blockchain, and next-generation frameworks, we are redefining how businesses adopt and benefit from digital transformation. Our solutions go beyond functionality — they deliver scalability, performance, and long-term value. With a relentless focus on innovation, we empower organizations to stay ahead in a rapidly evolving digital world.
          </span>
        </h1>
      </div>
        <ArcCarousel />
      {/* <TestimonialsStack/> */}
      <QueriesSection />
      <TalkBanner/>
      <FooterOrbit/>
    </>
  );
}

