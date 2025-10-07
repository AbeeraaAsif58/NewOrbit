import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";

const EVENTS = ["TechTalks", "CodeConnect", "DevInsights", "SkillUp", "LearnIT"];
const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];

const INDUSTRIES = [
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
  { to: "/travel", label: "Travel" }
];

export default function SidebarNavbar() {
  const [open, setOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [industriesSearch, setIndustriesSearch] = useState("");
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(drawerRef.current, { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power4.out" });
      gsap.to(backdropRef.current, { opacity: 1, pointerEvents: "auto", backdropFilter: "blur(4px)", duration: 0.5, ease: "power2.out" });
      gsap.fromTo(drawerRef.current.querySelectorAll("nav ul li"), { x: -40, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" });
    } else {
      gsap.to(drawerRef.current, { x: "-100%", opacity: 0, scale: 0.95, duration: 0.6, ease: "power3.inOut" });
      gsap.to(backdropRef.current, { opacity: 0, pointerEvents: "none", backdropFilter: "blur(0px)", duration: 0.4, ease: "power2.in" });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleHover = (e) => {
    gsap.to(e.currentTarget, { scale: 1.07, duration: 0.3, ease: "power3.out" });
    const underline = e.currentTarget.querySelector(".underline");
    if (underline) gsap.to(underline, { width: "100%", duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power3.inOut" });
    const underline = e.currentTarget.querySelector(".underline");
    if (underline) gsap.to(underline, { width: "0%", duration: 0.4, ease: "power3.inOut" });
  };

  const toggleDropdown = (setter) => setter((prev) => !prev);

  const filteredSidebarLinks = LINKS.filter((item) => 
    item.label.toLowerCase().includes(sidebarSearch.toLowerCase())
  );
  const filteredSidebarEvents = EVENTS.filter((item) => 
    item.toLowerCase().includes(sidebarSearch.toLowerCase())
  );
  const filteredIndustries = INDUSTRIES.filter((item) =>
    item.label.toLowerCase().includes(industriesSearch.toLowerCase())
  );

  return (
    <>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#034159] via-[#025951] to-[#034159] text-white shadow-lg border-b border-teal-500/20">
        <div className="h-14 flex items-center px-4 relative">
          <button
            onClick={() => setOpen(true)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0CF25D] hover:bg-[#0CF25D]/80 transition-colors text-white shadow-md"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="6" width="16" height="2" rx="1" />
              <rect x="4" y="11" width="16" height="2" rx="1" />
              <rect x="4" y="16" width="16" height="2" rx="1" />
            </svg>
          </button>

          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <Link to="/" className="pointer-events-auto">
              <img 
                src="/logo2.png" 
                alt="Orbit Walls Logo" 
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-4 relative">
            {/* Industries Dropdown on Top Navbar */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(setIndustriesOpen)}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className="px-4 h-10 rounded-lg bg-[#0CF25D] hover:bg-[#0CF25D]/80 font-semibold flex items-center gap-1 transition-colors shadow-md"
              >
                Industries
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>

              <div
                className={`absolute right-0 mt-3 w-96 rounded-lg overflow-hidden bg-gradient-to-br from-[#034159] to-[#025951] text-white shadow-xl transform transition-all duration-400 ease-out origin-top border border-teal-500/20 ${
                  industriesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="p-3 border-b border-teal-500/20">
                  <input
                    type="text"
                    placeholder="Search industries..."
                    value={industriesSearch}
                    onChange={(e) => setIndustriesSearch(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-teal-500/30 bg-teal-800/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0CF25D] focus:border-[#0CF25D]"
                  />
                </div>
                <ul className="grid grid-cols-2 divide-y divide-teal-500/20">
                  {filteredIndustries.map((item, index) => (
                    <li key={item.to} className={`${index % 2 === 0 ? "border-r border-teal-500/20" : ""}`}>
                      <NavLink
                        to={item.to}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setIndustriesOpen(false)}
                        className="block px-4 py-3 hover:bg-[#0CF25D] hover:text-[#034159] transition-colors"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-30 bg-black/40 opacity-0 pointer-events-none"
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        ref={drawerRef}
        className="fixed left-0 top-0 h-full w-[300px] max-w-[85%] bg-gradient-to-b from-[#034159] to-[#025951] text-white shadow-2xl border-r border-teal-500/20 -translate-x-full opacity-0 scale-95 z-40"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-teal-500/20">
          <div className="text-lg font-semibold tracking-wide">Menu</div>
          <button
            onClick={() => setOpen(false)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="w-9 h-9 grid place-items-center rounded-full hover:bg-white/20 transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          </button>
        </div>

        <nav className="p-5">
          <div className="mb-4">
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-lg border border-teal-500/30 bg-teal-800/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0CF25D] focus:border-[#0CF25D]"
            />
          </div>

          <ul className="space-y-5">
            {filteredSidebarLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `relative block text-[22px] font-medium tracking-wide transition-colors ${
                      isActive ? 'text-[#0CF25D]' : 'hover:text-[#0CF25D]'
                    }`
                  }
                >
                  {link.label}
                  <span className="underline absolute left-0 bottom-0 h-[2px] w-0 bg-[#0CF25D]"></span>
                </NavLink>
              </li>
            ))}

            <li className="pt-3">
              <button 
                onClick={() => toggleDropdown(setEventsOpen)} 
                onMouseEnter={handleHover} 
                onMouseLeave={handleLeave} 
                className="flex items-center gap-2 text-[22px] font-semibold select-none hover:text-[#0CF25D] transition"
              >
                Events
                <svg 
                  className={`transition-transform duration-300 ${eventsOpen ? "rotate-180" : ""}`} 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-out ${eventsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="mt-2 pl-3 space-y-2">
                  {filteredSidebarEvents.map((event, i) => (
                    <li key={event} className="opacity-0" ref={(el) => { if (el && eventsOpen) gsap.to(el, { opacity: 1, y: 0, duration: 0.4, delay: i * 0.05, ease: "power3.out" }); }}>
                      <a 
                        href={`#${event.toLowerCase()}`} 
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleLeave} 
                        className="relative block text-[18px] text-white/90 hover:text-white transition"
                      >
                        {event}
                        <span className="underline absolute left-0 bottom-0 h-[1.5px] w-0 bg-[#0CF25D]"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
