// src/pages/Contact.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TalkBanner from "../components/TalkBanner";
import Marquee from "../components/Marquee";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const hero = useRef(null);
  const grid = useRef(null);
  const formWrap = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // global smoothness
      document.documentElement.style.scrollBehavior = "smooth";

      // HERO: split lines by <br/> and animate
      gsap.from(hero.current.querySelectorAll(".hero-line"), {
        yPercent: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: hero.current, start: "top 80%" },
      });

      // Masonry images float in + subtle parallax on scroll
      const imgs = grid.current.querySelectorAll(".m-img");
      gsap.from(imgs, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: { trigger: grid.current, start: "top 85%" },
      });
      imgs.forEach((img) => {
        gsap.to(img, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // FORM block
      gsap.from(formWrap.current.querySelectorAll(".w-line"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: formWrap.current, start: "top 85%" },
      });

      // Button micro-bounce
      const btn = formWrap.current.querySelector("#sendBtn");
      btn.addEventListener("mouseenter", () =>
        gsap.to(btn, { y: -2, scale: 1.02, duration: 0.18, ease: "power2.out" })
      );
      btn.addEventListener("mouseleave", () =>
        gsap.to(btn, { y: 0, scale: 1, duration: 0.2, ease: "power2.out" })
      );
    });
    return () => ctx.revert();
  }, []);

  const Input = ({ label, type = "text", name, required }) => (
    <label className="w-line block">
      <span className="block text-sm font-medium text-white-600">{label}{required && " "}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-[18px] text-white-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-slate-900 transition"
        placeholder=""
      />
    </label>
  );

  return (
    <main className=" text-white">
   
      <section className="mx-auto max-w-[1400px] px-6 pt-10 md:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left huge copy */}
          <div ref={hero} className="lg:col-span-6">
            <h1 className="leading-[0.95] font-semibold tracking-[-0.02em] text-[16vw] md:text-[10vw] lg:text-[7vw]">
              <span className="hero-line block">Any questions?</span>
              <span className="hero-line block">simply</span>
              <span className="hero-line block">ask us this</span>
              <span className="hero-line block">is your</span>
              <span className="hero-line block">home!</span>
            </h1>
          </div>

          {/* Right image masonry */}
          <div ref={grid} className="lg:col-span-6 grid grid-cols-2 gap-6 items-start">
            <img
              className="m-img rounded-xl object-cover w-full h-[260px] md:h-[300px]"
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              alt=""
              draggable={false}
            />
            <img
              className="m-img rounded-xl object-cover w-full h-[260px] md:h-[300px]"
              src="https://images.pexels.com/photos/5256524/pexels-photo-5256524.jpeg"
              alt=""
              draggable={false}
            />
            <img
              className="m-img rounded-xl object-cover w-full h-[320px] md:h-[380px] col-span-1"
              src="https://images.pexels.com/photos/7693723/pexels-photo-7693723.jpeg"
              alt=""
              draggable={false}
            />
            <img
              className="m-img rounded-xl object-cover w-full h-[320px] md:h-[380px] col-span-1"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </section>
   
 <Marquee/>

      <section className="mx-auto max-w-[1400px] px-6 pt-24 pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Big headline */}
          <div className="w-line lg:col-span-12">
            <h2 className="text-[15vw] md:text-[9vw] lg:text-[6.3vw] leading-[0.95] font-semibold tracking-[-0.02em]">
              We’ve been<br />waiting for you!
            </h2>
          </div>

          {/* Left: intro + contact info */}
          <div className="lg:col-span-5 space-y-8">
            <p className="w-line text-xl md:text-2xl font-semibold">
              We want to hear from you. let’s<br className="hidden md:block" />
              us know how we can help!
            </p>

            <div className="w-line space-y-6 text-lg">
              <div className="space-y-2">
                <a href="tel:+881750660600" className="inline-block border-b border-slate-400 hover:border-slate-900 transition">
                  +881 750 6606 00
                </a>
              </div>

              <div className="space-y-2">
                <a href="mailto:hello@arolax.com" className="inline-block border-b border-slate-400 hover:border-slate-900 transition">
                  hello@orbit walls.com
                </a>
              </div>

              <div>
                <p>230 alaska street dunasia</p>
                <p>QC (USA) H8R 1A1</p>
              </div>
            </div>
          </div>
  
        

          {/* Right: form */}
           
          <div ref={formWrap} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const t = document.getElementById("sendBtn");
                gsap.timeline()
                  .to(t, { y: -1, scale: 0.98, duration: 0.1 })
                  .to(t, { y: 0, scale: 1, duration: 0.2, ease: "power2.out" });
                alert("Message sent (demo). Hook your API or EmailJS here.");
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
            >
              <Input label="Name" name="name" required />
              <Input label="Email" type="email" name="email" required />
              <Input label="Phone" type="tel" name="phone" />
              <Input label="Subject" name="subject" required />

              <label className="w-line md:col-span-2">
                <span className="block text-sm font-medium text-white-400">Message </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-[18px] text-white-400 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-slate-900 transition resize-y"
                />
              </label>

              <div className="w-line md:col-span-2 pt-2">
                <button
                  id="sendBtn"
                  type="submit"
                  className="inline-flex items-center justify-center rounded-[999px] bg-slate-900 px-8 md:px-10 py-4 text-white text-[16px] md:text-[17px] font-semibold shadow-[0_8px_20px_-10px_rgba(0,0,0,.5)] hover:shadow-[0_12px_26px_-10px_rgba(0,0,0,.55)] transition"
                >
                  Send Messages
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
        <TalkBanner/>
    </main>
  );
}
