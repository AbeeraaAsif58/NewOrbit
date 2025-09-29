// src/components/TalkBanner.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Utility: split a node's text into <span class="char"> elements
function splitChars(el) {
  const text = el.textContent;
  el.textContent = "";
  const frag = document.createDocumentFragment();
  [...text].forEach((ch) => {
    const span = document.createElement("span");
    span.className = "char inline-block will-change-transform";
    span.textContent = ch === " " ? "\u00A0" : ch;
    frag.appendChild(span);
  });
  el.appendChild(frag);
  return el.querySelectorAll(".char");
}

export default function TalkBanner({
  email = "hello@example.com",
  bg = "#e0550d",      // theme background color
  textColor = "#ffffff", // theme text color (white)
  subColor = "#c85013", // theme primary color for email
}) {
  const root = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const helloRef = useRef(null);
  const emailRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const rootEl = root.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const hello = helloRef.current;
    const emailEl = emailRef.current;

    // Split into characters
    const chars1 = splitChars(l1);
    const chars2 = splitChars(l2);

    // Base states
    gsap.set([l1, l2], { perspective: 1000 });
    gsap.set([chars1, chars2], { transformOrigin: "50% 50% -6px" });

    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    // small hello pop
    tl.from(hello, { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" }, 0);

    // Line 1 – flip/toggle in
    tl.fromTo(
      chars1,
      { rotateX: 90, opacity: 0, y: 18 },
      {
        rotateX: 0,
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.4)",
        stagger: { each: 0.02 },
      },
      0.1
    );

    // Line 2 – slightly delayed
    tl.fromTo(
      chars2,
      { rotateX: 90, opacity: 0, y: 18 },
      {
        rotateX: 0,
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.4)",
        stagger: { each: 0.02 },
      },
      "+=0.1"
    );

    // Email fade-in
    tl.from(emailEl, { opacity: 0, y: 10, duration: 0.6, ease: "power3.out" }, "-=0.2");

    // Play when enters viewport (simple observer; no ScrollTrigger needed)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && tl.restart()),
      { threshold: 0.25 }
    );
    io.observe(rootEl);

    // Re-run animation on click
    const replay = () => tl.restart();
    l1.addEventListener("click", replay);
    l2.addEventListener("click", replay);

    return () => {
      io.disconnect();
      l1.removeEventListener("click", replay);
      l2.removeEventListener("click", replay);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={root}
      style={{ background: bg, color: textColor }}
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-white overflow-hidden mt-0"
    >
      {/* small top label */}
      <div ref={helloRef} className="mb-6 flex items-center gap-2 text-lg font-semibold tracking-wider">
        <span role="img" aria-label="wave">👋</span>
        <span className="uppercase">Hello !</span>
      </div>

      {/* giant headline */}
      <div className="text-center leading-[0.9] font-extrabold uppercase select-none px-4">
        <h1
          ref={line1Ref}
          className="text-[clamp(40px,10vw,180px)] tracking-tight cursor-pointer"
        >
          LET’S TALK
        </h1>
        <h2
          ref={line2Ref}
          className="text-[clamp(40px,10vw,180px)] tracking-tight cursor-pointer"
        >
          WITH US
        </h2>
      </div>

      {/* email */}
      <a
        ref={emailRef}
        href={`mailto:${email}`}
        style={{ color: subColor }}
        className="mt-10 text-[clamp(18px,2.5vw,44px)] font-medium tracking-wide hover:opacity-90 transition"
      >
        {email}
      </a>

      {/* footer links row */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
        <div className="flex items-center justify-center gap-10 text-xs sm:text-sm font-extrabold tracking-widest uppercase opacity-90">
          <a href="#" className="hover:opacity-70">Agency</a>
          <a href="#" className="hover:opacity-70">Career</a>
          <a href="#" className="hover:opacity-70">Privacy</a>
          <a href="#" className="hover:opacity-70">Terms &amp; Condition</a>
        </div>
      </div>
    </section>
  );
}
