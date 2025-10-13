// Navbar.jsx
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";

export default function Navbar() {
  const headerRef = useRef(null);
  const barRef = useRef(null);
  const brandRef = useRef(null);

  // LEFT nav
  const burgerRef = useRef(null);
  const closeRef = useRef(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const itemRefs = useRef([]);

  // INDUSTRIES mega menu
  const industriesBtnRef = useRef(null);
  const industriesPanelRef = useRef(null);

  const [openLeft, setOpenLeft] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);

  const PAGES = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const INDUSTRY_PAGES = [
    { to: "/artificial-intelligence", label: "Artificial Intelligence" },
    { to: "/automobile", label: "Automobile" },
    { to: "/blockchain", label: "Blockchain" },
    { to: "/b2b", label: "B2B" },
    { to: "/dating", label: "Dating" },
    { to: "/companies", label: "Directory" },
    { to: "/ecommerce", label: "eCommerce" },
    { to: "/education", label: "Education" },
    { to: "/entertainment", label: "Entertainment" },
    { to: "/finance", label: "Finance" },
    { to: "/games", label: "Games" },
    { to: "/grocery", label: "Grocery" },
    { to: "/healthcare", label: "HealthCare" },
    { to: "/human-resource", label: "Human Resource" },
    { to: "/matrimony", label: "Matrimony" },
    { to: "/news-media", label: "News & Media" },
    { to: "/real-estate", label: "Real Estate" },
    { to: "/restaurant", label: "Restaurant" },
    { to: "/travel", label: "Travel" },
  ];

  const CREAM = "#ffffff"; // white text
  const NAVY_GLASS = "rgba(0,0,0,0.85)"; // black background with opacity
  const ORANGE_ACCENT = "rgba(255,107,53,0.9)"; // orange accent

  // Entrance animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: -24, opacity: 0 });
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(headerRef.current, { y: 0, opacity: 1, duration: 0.5 })
        .from(
          [burgerRef.current, brandRef.current, industriesBtnRef.current],
          { y: -10, opacity: 0, stagger: 0.08, duration: 0.28 },
          "<0.04"
        );
    });
    return () => ctx.revert();
  }, []);

  // Shrink & shadow on scroll (header stays visible)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      gsap.to(barRef.current, {
        height: y > 8 ? 60 : 72,
        backgroundColor: y > 8 ? "rgba(0,0,0,0.95)" : NAVY_GLASS,
        boxShadow: y > 8 ? "0 8px 30px rgba(0,0,0,.35)" : "0 0 0 rgba(0,0,0,0)",
        duration: 0.25,
        ease: "power2.out",
      });
      // Keep header fixed in place
      gsap.set(headerRef.current, { y: 0 });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC key to close menus
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (openLeft) closeLeft();
        if (openIndustries) closeIndustries();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openLeft, openIndustries]);

  // Lock body scroll when any panel is open
  useEffect(() => {
    document.body.style.overflow = openLeft || openIndustries ? "hidden" : "";
  }, [openLeft, openIndustries]);

  // OPEN / CLOSE — LEFT
  const openLeftMenu = () => {
    setOpenLeft(true);
    gsap.set(overlayRef.current, { display: "block", opacity: 0 });
    gsap.set(panelRef.current, { display: "flex" });

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .to(overlayRef.current, { opacity: 1, duration: 0.25 })
      .fromTo(panelRef.current, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.36 })
      .from(itemRefs.current, { x: -14, opacity: 0, stagger: 0.05, duration: 0.22 });
  };

  const closeLeft = () => {
    setOpenLeft(false);
    gsap
      .timeline({ defaults: { ease: "power3.inOut" } })
      .to(panelRef.current, { x: -20, opacity: 0, duration: 0.2 })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "<")
      .add(() => gsap.set([panelRef.current, overlayRef.current], { display: "none" }));
  };

  // OPEN / CLOSE — Industries Mega Menu
  const openIndustriesSheet = () => {
    setOpenIndustries(true);
    gsap.set(industriesPanelRef.current, { display: "block", opacity: 0, y: -10 });
    gsap.to(industriesPanelRef.current, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
  };

  const closeIndustries = () => {
    gsap.to(industriesPanelRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: "power3.inOut",
      onComplete: () => gsap.set(industriesPanelRef.current, { display: "none" }),
    });
    setOpenIndustries(false);
  };

  const toggleLeft = () => (openLeft ? closeLeft() : openLeftMenu());
  const setItemRef = (el, i) => (itemRefs.current[i] = el);

  return (
    <header ref={headerRef} className="sticky top-0 z-[200] w-full">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      {/* Navbar */}
      <nav
        ref={barRef}
        className="relative z-[201] flex h-[72px] w-full items-center justify-between px-4 md:px-6 border-b border-teal-500/20 bg-gradient-to-r from-teal-900/90 via-teal-800/90 to-teal-900/90 backdrop-blur-xl"
        style={{ color: CREAM, transition: "height .25s ease" }}
      >
        {/* Left menu */}
        <div className="flex items-center gap-2">
          <button ref={burgerRef} onClick={toggleLeft} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-teal-600/5 hover:from-teal-500/20 hover:to-teal-600/10 transition-all duration-300">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Brand */}
        <Link 
          to="/" 
          ref={brandRef} 
          className="transition-all duration-300 hover:scale-105"
        >
          <img 
            src="/newlogo.png" 
            alt="Orbit Walls Logo" 
            className="h-[30vh] w-auto object-contain mt-[5%]"
          />
        </Link>

        {/* Right — Industries Button */}
        <div className="flex items-center">
          <button
            ref={industriesBtnRef}
            onMouseEnter={openIndustriesSheet}
            onClick={openIndustriesSheet}
            className="px-4 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 border border-teal-500 ring-1 ring-teal-500/20 shadow-md hover:from-teal-600 hover:to-teal-700 hover:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
          >
            Industries
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[70] hidden bg-black/60"
        onClick={() => { if (openLeft) closeLeft(); if (openIndustries) closeIndustries(); }}
      />

      {/* LEFT — Slide Panel */}
      <div ref={panelRef} className="fixed left-0 top-0 z-[75] hidden h-full w-full max-w-md flex-col gap-4 bg-gradient-to-br from-teal-900/95 via-teal-800/95 to-teal-900/95 backdrop-blur-xl p-8 pt-20">
        {PAGES.map((item, i) => (
          <NavLink 
            key={i} 
            to={item.to} 
            end={item.end} 
            onClick={closeLeft} 
            ref={(el) => setItemRef(el, i)} 
            className="text-white text-lg font-normal hover:text-teal-500 transition-colors duration-200"
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* RIGHT — Industries Mega Menu */}
      <div
        ref={industriesPanelRef}
        className="fixed right-0 top-[72px] z-[75] hidden w-[600px] bg-gradient-to-br from-teal-900/95 via-teal-800/95 to-teal-900/95 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-teal-500/20"
        onMouseLeave={closeIndustries}
      >
        <div className="grid grid-cols-2 gap-3 text-white">
          {INDUSTRY_PAGES.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              onClick={closeIndustries}
              className="text-white text-sm font-normal hover:text-teal-500 transition-colors duration-200"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
