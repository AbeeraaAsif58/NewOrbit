import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/business-partners", label: "Business Partners" },
  { to: "/contact", label: "Contact" }
];

const INDUSTRIES = [
  { to: "/artificial-intelligence", label: "Artificial Intelligence" },
  { to: "/automobile", label: "Automobile" },
  { to: "/blockchain", label: "Blockchain" },
  { to: "/b2b", label: "B2B" },
  { to: "/dating", label: "Dating" },
  { to: "/directory", label: "Directory" },
  { to: "/ecommerce", label: "eCommerce" },
  { to: "/education", label: "Education" },
  { to: "/entertainment", label: "Entertainment" },
  { to: "/finance", label: "Finance" },
  { to: "/games", label: "Games" },
  { to: "/grocery", label: "Grocery" },
  { to: "/healthcare", label: "HealthCare" },
  { to: "/human-resource", label: "Human Resource" },
  { to: "/erp-crm", label: "ERP & CRM" },
  { to: "/tools-and-utilities", label: "Tools and Utilities" },
  { to: "/companies", label: "Companies" },
  { to: "/digital-marketing", label: "Digital Marketing" },
  { to: "/matrimony", label: "Matrimony" },
  { to: "/news-media", label: "News & Media" },
  { to: "/real-estate", label: "Real Estate" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/travel", label: "Travel" },
  { to: "/social", label: "Social" },
  { to: "/saas", label: "SAAS" },
  { to: "/fantasy", label: "Fantasy" }
];

export default function SidebarNavbar() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [industriesSearch, setIndustriesSearch] = useState("");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const navbarRef = useRef(null);
  const industriesBtnRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const location = useLocation();

  // Custom font style for sidebar navbar
  const sidebarFontStyle = {
    fontFamily: "'DM Serif Text', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, serif",
    fontWeight: "400",
    letterSpacing: "0.02em"
  };

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

  // Scroll-based navbar hide/show functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide/show if scrolled more than 100px to avoid flickering
      if (Math.abs(currentScrollY - lastScrollY) < 100) return;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  // Handle home logo click - scroll to top if already on home page
  const handleHomeClick = (e) => {
    console.log("Home clicked, current path:", location.pathname);
    if (location.pathname === "/") {
      e.preventDefault();
      console.log("Scrolling to top...");
      
      // Force scroll to top with multiple methods
      const scrollToTop = () => {
        // Method 1: window.scrollTo
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        
        // Method 2: Direct property setting
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Method 3: Try scrolling the main container
        const appRoot = document.getElementById('app-root');
        if (appRoot) {
          appRoot.scrollTop = 0;
        }
        
        // Method 4: Try scrolling the main element
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.scrollTop = 0;
        }
      };
      
      // Execute immediately
      scrollToTop();
      
      // Execute with a small delay to handle any async rendering
      setTimeout(scrollToTop, 100);
    }
  };

  // Click outside handler for industries dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (industriesOpen && 
          industriesBtnRef.current && 
          industriesDropdownRef.current &&
          !industriesBtnRef.current.contains(event.target) &&
          !industriesDropdownRef.current.contains(event.target)) {
        setIndustriesOpen(false);
      }
    };

    if (industriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [industriesOpen]);

  const filteredSidebarLinks = LINKS.filter((item) => 
    item.label.toLowerCase().includes(sidebarSearch.toLowerCase())
  );
  const filteredIndustries = INDUSTRIES.filter((item) =>
    item.label.toLowerCase().includes(industriesSearch.toLowerCase())
  );

  return (
    <>
      {/* Top Navbar */}
      <header 
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#034159] via-[#025951] to-[#034159] text-white shadow-2xl border-b border-teal-500/30 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-12 sm:h-14 md:h-16 flex items-center px-3 sm:px-4 md:px-6 relative">
          <button
            onClick={() => setOpen(true)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0CF25D] to-[#0CF25D]/80 hover:from-[#0CF25D]/90 hover:to-[#0CF25D]/70 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:scale-105 transform touch-manipulation"
          >
            <svg width="20" height="20" className="sm:w-6 sm:h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="6" width="16" height="2" rx="1" />
              <rect x="4" y="11" width="16" height="2" rx="1" />
              <rect x="4" y="16" width="16" height="2" rx="1" />
            </svg>
          </button>

          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <Link 
              to="/" 
              className="pointer-events-auto group"
              onClick={handleHomeClick}
            >
              <img 
                src="/newlogo.png" 
                alt="Orbit Walls Logo" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-4 relative">
            {/* Industries Dropdown on Top Navbar - Responsive design */}
            <div className="relative">
              <button
                ref={industriesBtnRef}
                onClick={() => toggleDropdown(setIndustriesOpen)}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className="px-2 sm:px-3 md:px-4 lg:px-6 h-8 sm:h-10 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#0CF25D] to-[#0CF25D]/90 hover:from-[#0CF25D]/90 hover:to-[#0CF25D]/80 font-semibold flex items-center gap-1 sm:gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform touch-manipulation text-xs sm:text-sm md:text-base"
                style={sidebarFontStyle}
              >
                <span className="hidden lg:inline">Industries</span>
                <span className="lg:hidden">Ind.</span>
                <svg
                  className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>

              <div
                ref={industriesDropdownRef}
                className={`absolute right-0 mt-2 sm:mt-4 w-[90vw] sm:w-96 md:w-[32rem] lg:w-[40rem] max-w-sm sm:max-w-none rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#034159]/95 to-[#025951]/95 backdrop-blur-xl text-white shadow-2xl transform transition-all duration-400 ease-out origin-top border border-teal-500/30 z-50 ${
                  industriesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="p-3 sm:p-4 border-b border-teal-500/30">
                  <input
                    type="text"
                    placeholder="Search industries..."
                    value={industriesSearch}
                    onChange={(e) => setIndustriesSearch(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-teal-500/40 bg-teal-800/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0CF25D] focus:border-[#0CF25D] transition-all duration-300 text-sm sm:text-base"
                    style={sidebarFontStyle}
                  />
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 divide-y divide-teal-500/30">
                  {filteredIndustries.map((item, index) => (
                    <li key={item.to} className={`${index % 4 !== 3 && window.innerWidth >= 1024 ? "lg:border-r border-teal-500/30" : ""}`}>
                      <NavLink
                        to={item.to}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        onClick={() => setIndustriesOpen(false)}
                        className="block px-4 sm:px-5 py-3 sm:py-4 hover:bg-gradient-to-r hover:from-[#0CF25D]/20 hover:to-[#0CF25D]/10 hover:text-[#0CF25D] transition-all duration-300 font-medium text-sm sm:text-base"
                        style={sidebarFontStyle}
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
        className="fixed inset-0 z-30 bg-black/60 opacity-0 pointer-events-none backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        ref={drawerRef}
        className="fixed left-0 top-0 h-full w-[280px] sm:w-[320px] max-w-[90%] sm:max-w-[85%] bg-gradient-to-b from-[#034159]/98 to-[#025951]/98 backdrop-blur-xl text-white shadow-2xl border-r border-teal-500/30 -translate-x-full opacity-0 scale-95 z-40"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 border-b border-teal-500/30">
          <div className="text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-r from-[#0CF25D] to-white bg-clip-text text-transparent" style={sidebarFontStyle}>Menu</div>
          <button
            onClick={() => setOpen(false)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="w-8 h-8 sm:w-10 sm:h-10 grid place-items-center rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 touch-manipulation"
          >
            <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          </button>
        </div>

        <nav className="p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-teal-500/40 bg-teal-800/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0CF25D] focus:border-[#0CF25D] transition-all duration-300 shadow-lg text-sm sm:text-base"
              style={sidebarFontStyle}
            />
          </div>

          <ul className="space-y-1">
            {filteredSidebarLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `relative block text-lg sm:text-xl md:text-2xl font-semibold tracking-wide transition-all duration-300 px-3 sm:px-4 py-1 touch-manipulation ${
                      isActive ? 'text-white' : 'hover:text-[#0CF25D]'
                    }`
                  }
                  style={sidebarFontStyle}
                >
                  {link.label}
                  <span className="underline absolute left-3 sm:left-4 bottom-0 h-[2px] sm:h-[3px] w-0 bg-gradient-to-r from-[#0CF25D] to-[#0CF25D]/60 rounded-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
