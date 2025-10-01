// src/components/QueriesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* ——— Theme Palette ——— */
const PALETTE = {
  INK: "#0f4c75", // background - Dark Teal
  INK_SOFT: "rgba(15,76,117,.65)", // background with opacity
  SHEEN: "#ffffff", // white text
  CYAN: "#00d4aa", // primary - Bright Green
  CYAN_DARK: "#0f4c75", // text - Dark Teal
  PURPLE: "#00d4aa", // primary - Bright Green
  CARD: "rgba(255,255,255,.06)",
  CARD_BORDER: "rgba(255,255,255,.14)",
  CARD_BORDER_HOVER: "rgba(0,212,170,.55)", // primary with opacity
  WHITE: "#ffffff",
  MUTED: "rgba(255,255,255,.7)", // white with opacity
};

const faqs = [
  { q: "Orbit Walls kis type ke projects leta hai?", a: "Frontend-heavy, motion-first websites/apps (React, GSAP, Three.js). Enterprise-grade performance aur pixel-perfect UI par focus." },
  { q: "Timeline aur process kya hota hai?", a: "Discovery → Wireframes → Visual/Animation prototypes → Dev sprints → QA → Launch. Har phase ke end par demo." },
  { q: "GSAP scroll animations SEO-friendly hoti hain?", a: "Haan—content DOM me rahta hai. Hum lazy motion + accessible markup use karte hain, LCP aur CLS par dhyan ke saath." },
  { q: "Pricing model?", a: "Fixed-scope for landing pages, aur retainers/blocks for long-running products. Contact form bhejein—hum breakdown share karenge." },
];

export default function QueriesSection() {
  const root = useRef(null);
  const listRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(null);
  const tlRefs = useRef({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(root.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top bottom-=60" },
      });
      gsap.from(listRef.current?.querySelectorAll(".faq-item"), {
        opacity: 0,
        y: 12,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: listRef.current, start: "top bottom-=60" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (i) => {
    if (!tlRefs.current[i]) {
      const item = document.getElementById(`faq-${i}`);
      const panel = item.querySelector(".faq-panel");
      const chev = item.querySelector(".faq-chev");
      tlRefs.current[i] = gsap
        .timeline({ paused: true })
        .fromTo(
          panel,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            onStart: () => panel.classList.remove("hidden"),
          }
        )
        .to(chev, { rotate: 45, duration: 0.25, ease: "power2.out" }, 0); // + turns to x-ish
    }
    const tl = tlRefs.current[i];
    const isOpen = openIdx === i;
    if (isOpen) {
      tl.reverse();
      setOpenIdx(null);
    } else {
      if (openIdx !== null && tlRefs.current[openIdx]) tlRefs.current[openIdx].reverse();
      tl.play();
      setOpenIdx(i);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("#q-btn");
    const text = e.currentTarget.querySelector("#q-done");
    gsap
      .timeline()
      .to(btn, { scale: 0.97, duration: 0.08 })
      .to(btn, { scale: 1, duration: 0.18, ease: "power2.out" })
      .fromTo(
        text,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" },
        0.05
      )
      .to(text, { opacity: 0, y: -6, duration: 0.45, delay: 1.1, ease: "power2.in" });
    e.currentTarget.reset();
  };

  return (
    <section
      ref={root}
      className="relative w-full py-8 md:py-12"
      style={{
        // soft radial vignette for depth on dark bg
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(0,212,170,.08), transparent 50%), radial-gradient(1000px 600px at 110% -20%, rgba(0,212,170,.08), transparent 50%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        {/* LEFT */}
        <div>
          {/* Heading with subtle gradient and glow */}
          <h2
            className="font-extrabold leading-[0.95] tracking-tight"
            style={{
              fontSize: "clamp(34px, 9vw, 86px)",
              background: `linear-gradient(180deg, ${PALETTE.WHITE} 0%, ${PALETTE.WHITE} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 20px 60px rgba(0,0,0,.35)",
            }}
          >
            FREQUENTLY <br /> ASKED <br /> QUESTIONS
          </h2>

          <p className="mt-3 text-base md:text-lg" style={{ color: PALETTE.MUTED }}>
            Frequently asked question (FAQ) pages to find answers.
          </p>

          {/* Explore More button */}
          <button
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
            }}
            className="group mt-8 inline-flex items-center gap-2 explore-btn"
            aria-label="Explore more"
          >
            <span>Explore More</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>

          {/* FAQ list */}
          <div ref={listRef} className="mt-8 md:mt-10 space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                id={`faq-${i}`}
                className="faq-item rounded-2xl overflow-hidden transition-shadow"
                style={{
                  background: PALETTE.CARD,
                  border: `1px solid ${PALETTE.CARD_BORDER}`,
                  boxShadow: "0 14px 40px -18px rgba(0,0,0,.55)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onMouseEnter={(e) =>
                    (e.currentTarget.parentElement.style.border = `1px solid ${PALETTE.CARD_BORDER_HOVER}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.parentElement.style.border = `1px solid ${PALETTE.CARD_BORDER}`)
                  }
                >
                  <span className="font-semibold text-[17px]" style={{ color: PALETTE.SHEEN }}>
                    {f.q}
                  </span>
                  <span
                    className="faq-chev inline-grid place-items-center rounded-full h-7 w-7"
                    style={{
                      color: PALETTE.SHEEN,
                      border: `1px solid ${PALETTE.CARD_BORDER}`,
                    }}
                  >
                    +
                  </span>
                </button>

                <div className="faq-panel hidden px-5 pb-5" style={{ color: PALETTE.MUTED }}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT (Form Card) */}
        <div
          className="rounded-3xl p-6 md:p-8"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05))",
            border: `1px solid ${PALETTE.CARD_BORDER}`,
            boxShadow:
              "0 30px 60px -30px rgba(0,0,0,.65), inset 0 1px 0 rgba(255,255,255,.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-extrabold"
            style={{ color: PALETTE.SHEEN }}
          >
            Send us your Query
          </h3>
          <p className="mt-1" style={{ color: PALETTE.MUTED }}>
            We’ll get back within 1–2 business days.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="field"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="field"
                />
              </Field>
            </div>

            <Field label="Message">
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Tell us about your project or question…"
                className="field"
              />
            </Field>

            <div className="flex items-center gap-3 pt-1">
              <button id="q-btn" type="submit" className="btn-primary">
                Submit Query
              </button>
              <span id="q-done" style={{ color: PALETTE.SHEEN, opacity: 0.9 }}>
                Thanks! We got it ✅
              </span>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-4 opacity-90">
            <img src="public/svg/linkedin-box-line.svg" alt="LinkedIn" className="h-8 social-icon" />
            <img src="public/svg/facebook-circle-fill.svg" alt="Facebook" className="h-8 social-icon" />
            <img src="public/svg/instagram-line.svg" alt="Instagram" className="h-6 social-icon" />
            <img src="public/svg/twitter-x-line.svg" alt="X (Twitter)" className="h-6 social-icon" />
          </div>
        </div>
      </div>

      {/* styles scoped to this component */}
      <style>{`
        .explore-btn{
          position:relative;
          padding:.9rem 1.3rem;
          border-radius:9999px;
          color:${PALETTE.SHEEN};
          border:1px solid ${PALETTE.CARD_BORDER};
          overflow:hidden; isolation:isolate;
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
          transition: border-color .25s ease, transform .2s ease, color .25s ease, box-shadow .25s ease;
          box-shadow: 0 10px 28px -18px rgba(0,0,0,.7);
        }
        .explore-btn::before{
          content:"";
          position:absolute; left: var(--x, 50%); top: var(--y, 50%);
          width:0; height:0; transform: translate(-50%,-50%);
          background: radial-gradient(120px 120px at center, ${PALETTE.CYAN}, ${PALETTE.CYAN_DARK});
          border-radius:50%;
          z-index:-1;
          transition: width .45s ease, height .45s ease;
          filter: blur(2px);
        }
        .explore-btn:hover{
          color: ${PALETTE.INK};
          border-color: ${PALETTE.CARD_BORDER_HOVER};
          box-shadow: 0 18px 40px -20px rgba(0,0,0,.75);
        }
        .explore-btn:hover::before{ width:260%; height:260%; }
        .explore-btn:active{ transform: translateY(1px) }

        .field{
          width:100%;
          border-radius:14px;
          padding:.8rem 1rem;
          background: rgba(10,14,24,.35);
          color:${PALETTE.SHEEN};
          border:1px solid ${PALETTE.CARD_BORDER};
          outline:none;
          transition:border .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .field::placeholder{ color: ${PALETTE.MUTED}; }
        .field:focus{
          border:1px solid ${PALETTE.CYAN};
          box-shadow: 0 0 0 3px rgba(71,214,255,.2);
          background: rgba(10,14,24,.45);
        }

        .btn-primary{
          position:relative;
          display:inline-flex; align-items:center; justify-content:center;
          padding:.9rem 1.2rem;
          border-radius:14px;
          font-weight:700;
          color:${PALETTE.WHITE};
          background: linear-gradient(90deg, ${PALETTE.CYAN}, ${PALETTE.PURPLE});
          box-shadow: 0 14px 30px -14px ${PALETTE.CYAN};
          transition: transform .15s ease, filter .2s ease, box-shadow .2s ease;
        }
        .btn-primary:hover{
          filter: saturate(115%);
          box-shadow: 0 18px 42px -16px ${PALETTE.CYAN};
        }
        .btn-primary:active{ transform: translateY(1px) }

        .social-icon{
          filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
          transition: filter 0.3s ease, transform 0.2s ease;
        }
        .social-icon:hover{
          filter: brightness(0) saturate(100%) invert(67%) sepia(100%) saturate(1000%) hue-rotate(120deg) brightness(100%) contrast(100%);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

/* ——— tiny helper for labeled fields ——— */
function Field({ label, children }) {
  return (
    <div>
      <label className="text-sm" style={{ color: PALETTE.MUTED }}>
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
