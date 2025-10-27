// src/components/QueriesSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sendContactEmail } from "../utils/emailService";
gsap.registerPlugin(ScrollTrigger);

/* ——— Theme Palette ——— */
const PALETTE = {
  INK: "#034159", // background - Dark Teal (your theme background)
  INK_SOFT: "rgba(6, 183, 62, 0.65)", // background with opacity
  SHEEN: "#ffffff", // white text
  CYAN: "#0CF25D", // primary - Bright Green (your theme primary)
  CYAN_DARK: "#025951", // secondary - Dark Green (your theme secondary)
  PURPLE: "#0CF25D", // primary - Bright Green (same as CYAN)
  CARD: "rgba(255,255,255,.06)",
  CARD_BORDER: "rgba(255,255,255,.14)",
  CARD_BORDER_HOVER: "rgba(12,242,93,.55)", // primary with opacity
  WHITE: "#ffffff",
  MUTED: "rgba(255,255,255,.7)", // white with opacity
};

const faqs = [
  { 
    q: "What services does Orbit Walls LLC provide?", 
    a: "We specialize in building front-end heavy, motion-first websites and applications using React, GSAP, and Three.js. Our focus is on delivering enterprise-grade performance with pixel-perfect user interfaces." 
  },
  { 
    q: "What is your typical timeline and process?", 
    a: "Our workflow follows a structured approach: Discovery → Wireframes → Visual & Animation Prototypes → Development Sprints → QA Testing → Launch. At the end of each phase, we provide a demo to ensure alignment." 
  },
  { 
    q: "Who can benefit from your solutions?", 
    a: "Our solutions are designed for businesses, startups, and enterprises that value high-quality, performance-driven digital experiences. We build accessible, SEO-friendly, and animation-rich platforms optimized for modern audiences." 
  },
  { 
    q: "How does Orbit Walls LLC ensure quality?", 
    a: "We maintain quality through fixed-scope packages for landing pages and long-term retainers for complex products. Each project undergoes rigorous testing, accessibility checks, and performance audits before launch." 
  },
];


export default function QueriesSection() {
  const root = useRef(null);
  const listRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(null);
  const tlRefs = useRef({});
  
  // Form state
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous messages
    setMessage('');
    setIsSuccess(false);
    setIsError(false);
    setIsLoading(true);

    const btn = e.currentTarget.querySelector("#q-btn");
    const text = e.currentTarget.querySelector("#q-done");

    try {
      // Get form data
      const formData = new FormData(e.target);
      
      // Send email
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setIsSuccess(true);
        setMessage(result.message);
        
        // Button animation
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
        
        // Reset form on success
        e.target.reset();
        // Hide success message after 5 seconds
        setTimeout(() => {
          setMessage('');
          setIsSuccess(false);
        }, 5000);
      } else {
        setIsError(true);
        setMessage(result.message);
      }
    } catch (error) {
      setIsError(true);
      setMessage('An error occurred. Please try again or contact us directly at info@orbitwalls.com');
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={root}
      className="relative w-full py-8 md:py-12"
      style={{
        // soft radial vignette for depth on dark bg
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(12,242,93,.08), transparent 50%), radial-gradient(1000px 600px at 110% -20%, rgba(12,242,93,.08), transparent 50%)",
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
            We'll get back within 1–2 business days.
          </p>

          {/* Success/Error Messages */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${
              isSuccess 
                ? 'bg-green-100 border border-green-400 text-green-700' 
                : 'bg-red-100 border border-red-400 text-red-700'
            }`}>
              {message}
            </div>
          )}

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
              <button 
                id="q-btn" 
                type="submit" 
                disabled={isLoading}
                className={`btn-primary ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Submit Query'
                )}
              </button>
              <span id="q-done" style={{ color: PALETTE.SHEEN, opacity: 0.9 }}>
                Thanks! We got it ✅
              </span>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-4 opacity-90">
            <img src="/svg/linkedin-box-line.svg" alt="LinkedIn" className="h-8 social-icon" />
            <img src="/svg/facebook-circle-fill.svg" alt="Facebook" className="h-8 social-icon" />
            <img src="/svg/instagram-line.svg" alt="Instagram" className="h-6 social-icon" />
            <img src="/svg/twitter-x-line.svg" alt="X (Twitter)" className="h-6 social-icon" />
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
          box-shadow: 0 0 0 3px rgba(12,242,93,.2);
          background: rgba(10,14,24,.45);
        }

        .btn-primary{
          position:relative;
          display:inline-flex; align-items:center; justify-content:center;
          padding:.9rem 1.2rem;
          border-radius:14px;
          font-weight:700;
          color:#000000;
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
