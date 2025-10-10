import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TalkBanner from "../components/TalkBanner";
import Marquee from "../components/Marquee";
import ProjectsCard from "../components/ProjectCard";
import FooterOrbitMoonTech from "../components/FooterOrbit";
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  // ---- counters ----
  const [countA, setCountA] = useState(0); // Expertise Employees (99+)
  const [countB, setCountB] = useState(0); // Satisfied clients (99k+ example)

  const containerRef = useRef(null);
  const counterARef = useRef(null);
  const counterBRef = useRef(null);
  const imagesRef = useRef([]);

  const data = [
    { img: "/TeamA.webp", title: "Ceyhan Özçivit", description: "Mid-Level Developer" },
    { img: "/TeamB.webp", title: "Amanulla Joey", description: "Founder & CEO" },
    { img: "/TeamC.webp", title: "William Ray", description: "Marketing Leader" },
    { img: "/TeamD.webp", title: "Albert Hyekin", description: "Co-Ordinator" },
    { img: "/TeamE.webp", title: "Steven Dirkse", description: "Merchandiser" },
    { img: "/TeamF.webp", title: "Marius Bützler", description: "Co-Ordinator" },
    { img: "/TeamG.webp", title: "Franz Nelissen", description: "Marketing Leader" },
    { img: "/TeamH.webp", title: "Samantha", description: "Developer" },
  ];

  // entrance of hero container
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  // counter A: 0 -> 99
  useEffect(() => {
    const tween = gsap.fromTo(
      counterARef.current,
      { textContent: 0 },
      {
        textContent: 99,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: counterARef.current, start: "top 90%" },
        onUpdate() {
          setCountA(Math.floor(this.targets()[0].textContent));
        },
      }
    );
    return () => {
      tween.kill();
      ScrollTrigger.getById?.(counterARef.current)?.kill?.();
    };
  }, []);

  // counter B: 0 -> 99 (e.g., 99k+ satisfied clients)
  useEffect(() => {
    const tween = gsap.fromTo(
      counterBRef.current,
      { textContent: 0 },
      {
        textContent: 99,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: counterBRef.current, start: "top 90%" },
        onUpdate() {
          setCountB(Math.floor(this.targets()[0].textContent));
        },
      }
    );
    return () => {
      tween.kill();
      ScrollTrigger.getById?.(counterBRef.current)?.kill?.();
    };
  }, []);

  // team cards reveal (left to right)
  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={containerRef} className="flex flex-col h-auto">
        {/* top strip */}
        <div className="md:flex md:items-center md:justify-between md:w-full md:h-auto xl:h-auto lg:h-auto xl:pt-20">
          <div className="first flex items-center justify-between border-white border-t-[1px] w-[100vw] px-3 mt-14 sm:w-[92%] md:w-[35vw] md:px-4 md:mt-2 lg:w-[38vw]">
            {/* <p className='text-[17px] sm:text-[17px] md:text-[18px] lg:text-[20px]'>
              Want to serve global audiences and take your career to the next level? 
            </p> */}
            {/* NOTE: file name has a space; make sure the file really exists */}
            <img className="text-[25px] " src="/g4.png" alt="" />
          </div>

          <div className="head">
            <h1 className="text-[38px] tracking-wide leading-[1.08em] text-white ml-4 pt-4 sm:text-[43px] md:text-5xl md:ml-[13%] md:mt-[10%] lg:text-[80px] lg:ml-[9%] lg:mt-[13%] xl:text-[90px] xl:mt-[5%]">
              Work together for success.
            </h1>
            <p className="mt-[4%] w-[100%] px-5 text-white font-Kanit font-[500] text-[18px] leading-[1.4em] sm:w-[72%] md:mt-[5%] md:w-[52vw] md:ml-[25%] lg:w-[40vw] lg:ml-[40%] lg:mt-[1%]">
              Arolax is a beacon of best innovation and the dynamic parent company of Wealcoder and many other subsidiaries.
            </p>
          </div>
        </div>

        {/* circle stats */}
        <div className="circle flex justify-center items-center py-5 sm:pt-[65px] md:justify-end md:pr-[8%] lg:pt-[90px] xl:pt-[130px] lg:pb-20">
          <div className="circle1 flex flex-col justify-center items-start text-left border rounded-full h-auto w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[32%] p-5 lg:p-8 xl:p-10">
            <h1 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-semibold text-white">4,000 +</h1>
            <p className="text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] text-white font-medium">Happy Clients</p>
          </div>
        </div>

        {/* hero image & expertise employees counter */}
        <div className="flex flex-col justify-center items-center gap-3 pt-[70px] sm:pt-[50px] md:relative lg:relative lg:h-auto">
          <div className="sectionCircle flex flex-col justify-center items-center text-center h-[25vh] w-[50vw] rounded-full bg-primary sm:w-[35vw] sm:h-[50vh] sm:pb-[55px] md:absolute md:top-[-6%] md:left-10 md:h-[22vh] md:w-[26vw] lg:h-[20vh] lg:w-[26vw] lg:left-[7%] lg:top-[-15%] xl:h-[45vh] xl:w-[22vw]">
            <h1 ref={counterARef} className="text-[35px] sm:text-[60px] md:mt-10 lg:text-[70px] mt-1 font-semibold text-white">
              {countA} +
            </h1>
            <p className="text-[21px] sm:text-[27px] md:text-[24px] lg:text-[40px] xl:text-[34px] text-white font-medium leading-[1.3em] sm:text-white sm:font-light sm:leading-[1.03em]">
              Expertise Employees
            </p>
          </div>

          <div className="team h-26 w-[99vw] sm:w-full xl:pt-10">
            <img className="w-[99vw]" src="/meet 3.png" alt="team feature" />
          </div>
        </div>

        {/* section title */}
        <div>
          <div className="sectionbar flex flex-col pt-5 md:flex-row lg:gap-20">
            <h1 className="text-[35px] tracking-wider leading-[1.2em] text-white ml-3 pt-5 sm:text-[43px] sm:w-[70%] md:w-[130%] md:mt-7 md:text-[45px] md:ml-5 lg:w-[50%] lg:text-[55px] lg:leading-[1em] xl:w-[60%] xl:text-[72px]">
              Bringing passion and our expertise together!
            </h1>
            <p className="mt-[4%] w-[100%] px-5 text-white font-Kanit font-[500] text-[18px] leading-[1.4em] sm:w-[95%] sm:pl-[200px] sm:text-[15px] sm:mt-2 md:text-[18px] md:w-[90%] md:pl-[20px] md:mt-14 lg:w-[44%] lg:pt-[30px] xl:pt-[100px]">
              We bet on brands that shift categories and add value to people’s lives; and on founders who are motivated to shape.
            </p>
          </div>

          {/* team cards */}
          <div className="xl:h-[300vh] cards flex flex-wrap justify-center gap-4 p-4">
            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (imagesRef.current[i] = el)}
                className="card1 flex flex-col items-center w-full sm:w-[90%] md:w-[48%] lg:w-[30%] xl:w-[26%]"
              >
                <div className="card2 flex flex-col justify-center items-center gap-2 p-4 w-full">
                  <div className="imagecontainer w-full h-full overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="titlebar w-[90%] text-center lg:text-left">
                    <h1 className="font-semibold text-[22px] sm:text-[20px] md:text-[24px] lg:text-[26px] text-white">{item.title}</h1>
                    <p className="text-white font-medium leading-[1.2em] text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3-column boxes & counter B */}
          <div className="boxes pt-[5%] lg:pt-0 h-auto xl:h-[100vh] w-auto lg:flex">
            <div className="lg:w-[50%]">
              <img className="h-full w-full p-[5px]" src="/box-A.webp" alt="box A" />
            </div>

            <div className="h-auto lg:w-[25vw]">
              <div className="lg:h-[50%]">
                <img className="h-full w-full p-[5px]" src="/box-B.webp" alt="box B" />
              </div>
              <div className="h-[40vh] lg:h-[50%] p-[5px] relative">
                <img className="h-full w-full bg-black" src="/shapeA.png" alt="shape A" />
                <div className="absolute top-10 left-2 bg-opacity-80 px-4 py-2 rounded-lg">
                  <p className="text-[30px] font-medium leading-[2rem] text-white">
                    We helped companies get 99M+ funding
                  </p>
                </div>
              </div>
            </div>

            <div className="h-auto lg:w-[25vw]">
              <div className="h-[40vh] lg:h-[50%] relative">
                {/* NOTE: file name looks like a typo (shpaeB). Make sure the actual file name matches. */}
                <img className="h-full w-full p-[5px]" src="/shapeA.png" alt="shape B" />
                <div className="absolute top-10 left-5">
                  <p className="text-[30px] font-[400] leading-[2.3rem] text-white">We have 99+ satisfied clients</p>
                  <h1 ref={counterBRef} className="font-bold text-white text-[75px] text-center">
                    {countB}
                    <span className="text-[20px] font-medium leading-[2rem] text-white">K+</span>
                  </h1>
                </div>
              </div>
              <div className="lg:h-[50%]">
                <img className="h-full w-full p-[5px]" src="/box-C.webp" alt="box C" />
              </div>
            </div>
          </div>

          {/* bottom content + gallery */}
          <div className="content py-4 px-3 lg:py-20 lg:px-20 md:pt-20">
            <ul className="text-[20px] font-[Kanit] flex gap-8 flex-wrap px-3 leading-[1.16em] sm:text-[18px] sm:gap-5 sm:px-3 md:justify-center md:text-[35px] md:gap-10 lg:gap-5 text-white">
              <li>Future</li>
              <li className="flex items-center md:gap-3">
                <img className="h-[1.5vh] w-[1vw] md:h-[1vh] md:w-[.8vw]" src="/g2.png" alt="" />
                <span className="ml-3 lg:ml-1">Community</span>
              </li>
              <li className="flex items-center md:gap-3">
                <img className="h-[1.5vh] w-[1vw] md:h-[1vh] md:w-[.8vw]" src="/g2.png" alt="" />
                <span className="ml-3 lg:ml-1">Honor</span>
              </li>
            </ul>

            <p className="text-[17px] px-6 py-2 leading-[1.4em] sm:text-[14px] sm:px-3 md:text-[19px] md:text-white md:text-center md:px-5 md:mt-3 lg:text-[28px] lg:font-[400]">
              What sets us apart is what brings us together – a shared passion for solving business challenges through strategy,
              design, and engineering. We are the sum total of our team, their unique perspectives, capabilities, and our ability to
              collaborate from ideation to deployment.
            </p>
          </div>
      <Marquee/>
     <ProjectsCard/>
          <div className="md:flex md:gap-10 lg:px-2">
            <div className="flex flex-col p-3 gap-2 sm:flex-row sm:flex-wrap sm:p-0 sm:pl-1 sm:gap-1 sm:py-3 lg:gap-5">
              <div className="w-[32vw] sm:w-[50vw] md:w-[28vw] md:pt-5 lg:w-[23vw] lg:mt-20">
                <img src="/GalleryA.webp" alt="gallery A" />
              </div>
              <div className="w-[40vw] sm:w-[48vw] md:w-[37vw] lg:w-[39vw]">
                <img src="/GalleryB.webp" alt="gallery B" />
              </div>
              <div className="flex gap-3 md:flex-col-reverse md:gap-1 lg:gap-2 lg:pb-10">
                <img className="w-[35vw] sm:w-[60vw] md:w-[30vw] lg:w-[25vw]" src="/GalleryC.webp" alt="gallery D" />
                <img className="w-[40vw] sm:w-[30vw] sm:h-[38vh] md:w-[30vw] md:h-[15vh] lg:w-[23vw] lg:h-auto" src="/GalleryD.webp" alt="gallery C" />
              </div>
            </div>
          </div>

        </div>
      </div>
 <TalkBanner/>
 <FooterOrbitMoonTech/>      
    </div>

  );
};

export default Team;
