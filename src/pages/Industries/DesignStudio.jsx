import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function DesignStudio() {
  const scrollRoot = useRef(null);

  useEffect(() => {
    if (!scrollRoot.current) return;

    // Locomotive
    const loco = new LocomotiveScroll({
      el: scrollRoot.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      class: "is-revealed",
    });

    // Proxy
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

    // Animations
    const ctx = gsap.context(() => {
      // reveal
      gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: "power3.out",
          delay: Math.min(i * 0.05, 0.25),
          scrollTrigger: { trigger: el, start: "top 85%", scroller: scrollRoot.current },
        });
      });

      // parallax blobs
      gsap.to(".orb-a", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: "#hero", scroller: scrollRoot.current, scrub: true },
      });
      gsap.to(".orb-b", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: "#projects", scroller: scrollRoot.current, scrub: true },
      });
    }, scrollRoot);

    setTimeout(() => ScrollTrigger.refresh(), 60);

    return () => {
      ctx.revert();
      ScrollTrigger.removeEventListener("refresh", loco.update);
      loco.off("scroll", onScroll);
      loco.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0E1730] text-[#ECE7D8] selection:bg-cyan-300/20 mt-[-5%]">
      {/* Decorative backdrop */}
      <Backdrop />

      {/* Smooth scroll container */}
      <div data-scroll-container ref={scrollRoot}>
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Hero />
          <TrustMarquee />
          <FeaturedSection />
          <ProjectsGrid />
          <TestimonialBand />
          <CTA />
        </main>
      </div>
    </div>
  );
}

/* ---------------- Decor ---------------- */

function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb-a absolute -top-32 -right-28 h-[28rem] w-[28rem] rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="orb-b absolute top-1/2 -left-28 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-60 w-60 translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}

/* ---------------- Sections ---------------- */

/** Frameless hero + larger type */
function Hero() {
  return (
    <section id="hero" data-reveal className="relative isolate py-4 sm:py-8">
      <div className="max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-cyan-200/80">
          <Dot /> UI/UX Design • Creative Solutions • Brand Systems
        </span>

        <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight">
          Transform Your Business with <span className="text-cyan-200">Cutting-Edge Design Solutions</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-white/85">
          We develop bespoke design solutions focused on your target audience's needs. Own your design system and add new features as necessary with our innovative approach.
        </p>

        <div className="mt-7 grid gap-3 sm:max-w-2xl sm:grid-cols-[1fr_auto]">
          <div className="relative">
            <input
              placeholder="Search: UI/UX design, creative solutions, brand systems…"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 pr-10 outline-none placeholder:text-white/40 focus:border-cyan-200/60"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cyan-200/80">
              <SearchIcon />
            </div>
          </div>
          <button className="rounded-2xl bg-cyan-300/90 px-6 py-3 font-semibold text-[#0E1730] transition hover:bg-cyan-300">
            Explore
          </button>
        </div>

        {/* compact KPI chips */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "200+", l: "Design Solutions" },
            { k: "99%", l: "Client Satisfaction" },
            { k: "5x", l: "User Engagement" },
            { k: "24/7", l: "Design Support" },
          ].map((it, i) => (
            <div
              key={i}
              data-reveal
              className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-cyan-200">{it.k}</div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Simple brand pills */
function TrustMarquee() {
  const logos = ["UI/UX Design", "Creative Solutions", "Brand Systems", "Design Systems", "User Experience", "Interface Design"];
  return (
    <section className="mt-6" data-reveal>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {logos.map((l, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/75"
          >
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedSection() {
  const cards = [
    {
      tag: "Featured",
      title: "UI/UX Design",
      desc: "Create personalized customer experiences and interfaces that exemplify superior design and best software engineering practices.",
      tech: ["UI/UX Design", "User Experience", "Interface Design"],
    },
    {
      tag: "New",
      title: "Custom Application Development",
      desc: "Develop bespoke design solutions tailored to your target audience's needs. Own the design system and add new features as necessary.",
      tech: ["Custom Development", "Design Systems", "Full-Stack"],
    },
    {
      tag: "Popular",
      title: "Integration Services",
      desc: "Expand your solution's functionality by integrating with third-party services and data sources.",
      tech: ["API Integration", "Third-Party Services", "Data Sources"],
    },
  ];
  return (
    <section className="mt-10" data-reveal>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Our Services</h2>
        <a className="text-sm text-cyan-200 hover:underline" href="#">
          View all
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((it, i) => (
          <Card key={i} {...it} />
        ))}
      </div>
    </section>
  );
}

function ProjectsGrid() {
  const cards = Array.from({ length: 9 }).map((_, i) => ({
    title: [
      "Tech Startup Brand Identity",
      "E-commerce UI/UX Design",
      "Restaurant Visual Identity",
      "SaaS Dashboard Design",
      "Fashion Brand Campaign",
      "Healthcare Brand Refresh",
      "Non-profit Visual System",
      "Corporate Rebrand",
      "Creative Portfolio Design",
    ][i],
    desc:
      [
        "Complete brand identity for a fintech startup including logo, guidelines, and digital assets.",
        "User-centered e-commerce platform design with seamless shopping experience.",
        "Authentic visual identity for a farm-to-table restaurant with rustic charm.",
        "Intuitive dashboard interface for a project management SaaS platform.",
        "Bold fashion campaign design with striking visuals and typography.",
        "Trustworthy brand refresh for a healthcare technology company.",
        "Inspiring visual system for a social impact organization.",
        "Modern corporate rebrand that maintains heritage while embracing innovation.",
        "Creative portfolio design showcasing artistic vision and technical skills.",
      ][i],
  }));

  return (
    <section id="projects" className="mt-12" data-reveal>
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Creative portfolio</h2>
        <span className="text-sm text-white/60">{cards.length} projects</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <ProjectCard key={i} {...c} idx={i} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm hover:border-cyan-200/60">
          Load more
        </button>
      </div>
    </section>
  );
}

function TestimonialBand() {
  return (
    <section className="mt-12" data-reveal>
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-10 text-center shadow-[0_0_50px_-25px_rgba(255,255,255,.35)]">
        <blockquote className="mx-auto max-w-3xl text-lg text-white/90">
          "The design team transformed our vision into a{" "}
          <span className="text-cyan-200">stunning visual identity</span> that perfectly represents our brand values."
        </blockquote>
        <div className="mt-3 text-sm text-white/60">— Creative Director, BrandCo</div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 sm:p-10 shadow-[0_0_60px_-25px_rgba(255,255,255,.35)]"
      data-reveal
    >
      <div className="grid items-center gap-6 sm:grid-cols-[1.2fr_.8fr]">
        <div>
          <h3 className="text-2xl font-semibold">Ready to bring your vision to life?</h3>
          <p className="mt-2 max-w-xl text-white/80">
            Let's collaborate to create designs that not only look amazing but also drive real results for your business.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-xl bg-cyan-300/90 px-4 py-2.5 text-sm font-medium text-[#0E1730] hover:bg-cyan-300">
              Start your project
            </button>
            <button className="rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm hover:border-cyan-200/60">
              View portfolio
            </button>
          </div>
        </div>
        <div className="relative isolate">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="flex h-full items-center justify-center text-white/40">Design Preview</div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Cards & UI bits ---------------- */

function Card({ tag, title, desc, tech }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:shadow-[0_10px_40px_-20px_rgba(94,234,212,.5)]">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-cyan-200">
        <Dot /> {tag}
      </span>
      <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-cyan-200">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm hover:border-cyan-200/60">
          Preview
        </button>
        <button className="rounded-xl bg-cyan-300/90 px-3.5 py-2 text-sm font-medium text-[#0E1730] hover:bg-cyan-300">
          Get started
        </button>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/15 blur-2xl transition-all group-hover:scale-150" />
    </article>
  );
}

function ProjectCard({ title, desc, idx }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 transition hover:-translate-y-1.5 hover:border-cyan-200/50">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <div className="flex h-full items-center justify-center text-white/40">Design Preview</div>
      </div>
      <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-cyan-200">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{desc}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-white/70">
          <span className="inline-flex items-center gap-1">
            <Star /> 4.{(8 + (idx % 3)).toFixed(0)}
          </span>
          <span>•</span>
          <span>{100 + idx * 15} views</span>
        </div>
        <button className="rounded-xl bg-cyan-300/90 px-3.5 py-2 text-sm font-medium text-[#0E1730] hover:bg-cyan-300">
          View project
        </button>
      </div>
      <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-fuchsia-400/10 blur-2xl transition-all group-hover:scale-150" />
    </article>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-200" />;
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 3.82 12.33l3.8 3.8a.75.75 0 1 0 1.06-1.06l-3.8-3.8A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M11.48 3.5c.2-.49.84-.49 1.04 0l1.89 4.65 5.03.37c.53.04.75.7.34 1.04l-3.83 3.2 1.16 4.9a.75.75 0 0 1-1.11.82L12 16.96l-4.99 2.52a.75.75 0 0 1-1.11-.82l1.16-4.9-3.83-3.2a.75.75 0 0 1 .34-1.04l5.03-.37 1.89-4.65Z" />
    </svg>
  );
}


