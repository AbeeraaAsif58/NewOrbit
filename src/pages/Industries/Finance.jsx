import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TalkBanner from "../../components/TalkBanner";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function Finance() {
  const scrollRoot = useRef(null);

  useEffect(() => {
    if (!scrollRoot.current) return;

    const loco = new LocomotiveScroll({
      el: scrollRoot.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      class: "is-revealed",
    });

    ScrollTrigger.scrollerProxy(scrollRoot.current, {
      scrollTop(value) {
        return arguments.length
          ? loco.scrollTo(value, { duration: 0, disableLerp: true })
          : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: innerWidth, height: innerHeight };
      },
      pinType: scrollRoot.current.style.transform ? "transform" : "fixed",
    });

    const onScroll = () => ScrollTrigger.update();
    loco.on("scroll", onScroll);
    ScrollTrigger.addEventListener("refresh", loco.update);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, scroller: scrollRoot.current, start: "top 90%" },
        });
      });
    });

    return () => {
      ctx.revert();
      loco.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/20 mt-[-5%]">
      <Backdrop />
      <div data-scroll-container ref={scrollRoot}>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <Hero />
          <Stats />
          <Features />
        </div>
      </div>
      <TalkBanner />
    </div>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb-a absolute -top-32 -right-28 h-[28rem] w-[28rem] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="orb-b absolute top-1/2 -left-28 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-60 w-60 translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}

function Dot() {
  return <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx={11} cy={11} r={8} />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="hero" data-reveal className="relative isolate py-4 sm:py-8">
      <div className="max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-orange-400/80">
          <Dot /> FinTech • Banking • Payments
        </span>

        <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight">
          Transform finance with <span className="text-orange-400">cutting-edge technology</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-white/85">
          Build secure financial applications, payment systems, and banking solutions. 
          From mobile banking to investment platforms, we create fintech solutions that matter.
        </p>

        <div className="mt-7 grid gap-3 sm:max-w-2xl sm:grid-cols-[1fr_auto]">
          <div className="relative">
            <input
              placeholder="Search: mobile banking, payments, trading, investment…"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 pr-10 outline-none placeholder:text-white/40 focus:border-orange-400/60"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-orange-400/80">
              <SearchIcon />
            </div>
          </div>
          <button className="rounded-2xl bg-orange-500/90 px-6 py-3 font-semibold text-black transition hover:bg-orange-400">
            Explore
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "$1B+", l: "Transactions" },
            { k: "99.99%", l: "Security" },
            { k: "50+", l: "Banks" },
            { k: "1M+", l: "Users" },
          ].map((it, i) => (
            <div
              key={i}
              data-reveal
              className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-orange-400">{it.k}</div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mt-16" data-reveal>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold sm:text-2xl">Financial Solutions</h2>
        <div className="h-px flex-1 bg-white/10" />
        <button
          className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
        </button>
      </div>
    </section>
  );
}

function Features() {
  const cards = [
    {
      title: "Mobile Banking",
      desc: "Complete mobile banking applications with secure authentication and real-time transactions.",
      tags: ["Biometric Auth", "Real-time", "Secure"],
    },
    {
      title: "Payment Gateway",
      desc: "Multi-channel payment processing solutions for businesses of all sizes.",
      tags: ["Multi-currency", "PCI Compliant", "API Integration"],
    },
    {
      title: "Investment Platform",
      desc: "Trading and investment platforms with advanced analytics and portfolio management.",
      tags: ["Trading", "Analytics", "Portfolio"],
    },
    {
      title: "Digital Wallet",
      desc: "Secure digital wallet solutions with multi-currency support and instant transfers.",
      tags: ["Multi-currency", "Instant Transfer", "Security"],
    },
    {
      title: "Lending Platform",
      desc: "Automated lending and credit assessment platforms with risk management.",
      tags: ["Credit Scoring", "Risk Assessment", "Automation"],
    },
    {
      title: "Insurance Tech",
      desc: "Digital insurance platforms with automated claims processing and risk assessment.",
      tags: ["Claims Processing", "Risk Assessment", "Automation"],
    },
  ];

  return (
    <section className="mt-10" data-reveal>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Featured Financial Solutions</h2>
        <a className="text-sm text-orange-400 hover:underline" href="#">
          View all
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((it, i) => (
          <div
            key={i}
            data-reveal
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {it.tags.map((tag, j) => (
                <span
                  key={j}
                  className="rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
