import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TalkBanner from "../../components/TalkBanner";
import SimpleFooter from "../../components/SimpleFooter";

gsap.registerPlugin(ScrollTrigger);

export default function B2B() {
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
    <div className="min-h-screen text-white selection:bg-orange-500/20">
      <div data-scroll-container ref={scrollRoot}>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <Hero />
          <ProjectsGrid />
        </div>
        
        {/* Talk Banner */}
        <TalkBanner 
          email="hello@orbitwalls.com"
          bg="#034159"
          textColor="#ffffff"
          subColor="#0CF25D"
        />
        
        {/* Footer */}
        <SimpleFooter />
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          B2B Marketplace Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
          Discover verified and tested B2B startups from our marketplace. Ready-to-launch solutions 
          for business management, CRM, eCommerce, healthcare systems, and enterprise applications.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Projects Grid ---------------- */

function ProjectsGrid() {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Vyapaar – Complete SAAS Business for Stock Management, POS & Invoicing",
      category: "B2B",
      tags: ["ERP & CRM", "SAAS"],
      description: "This is a SAAS based Startup provides a CRM with some amazing features suitable for all businesses. With this application, you are assured to save time-consuming process of bookkeeping accounting and inventory information.",
      status: "164 Sales",
      price: "$750 – $1,375",
      slug: "vyapaar-complete-saas-business-for-stock-management-pos-invoicing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Cloud Prospects – Lead Management System and Sales CRM",
      category: "B2B",
      tags: ["ERP & CRM"],
      description: "Advanced lead management system and sales CRM designed to streamline business processes, track prospects, and manage customer relationships effectively.",
      status: "72 Sales",
      price: "$625 – $1,250",
      slug: "cloud-prospects-lead-management-system-and-sales-crm",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Hospitalcore – Complete SAAS Hospital management system",
      category: "B2B",
      tags: ["HealthCare", "SAAS"],
      description: "Comprehensive SAAS-based hospital management system with patient records, appointment scheduling, billing, and complete healthcare facility management.",
      status: "51 Sales",
      price: "$625 – $1,250",
      slug: "hospitalcore-complete-saas-hospital-management-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Business Brawn – Complete SAAS Business Management",
      category: "B2B",
      tags: ["SAAS"],
      description: "Complete SAAS business management solution with comprehensive tools for operations, finance, HR, and project management in one unified platform.",
      status: "14 Sales",
      price: "$625 – $1,250",
      slug: "business-brawn-complete-saas-business-management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Account Tap – KhataBook Clone Android application",
      category: "B2B",
      tags: ["Finance"],
      description: "Android application clone of KhataBook for digital ledger management, accounting, and financial tracking for small and medium businesses.",
      status: "8 Sales",
      price: "$625 – $1,250",
      slug: "account-tap-khatabook-clone-android-application",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "BusinessBite – Business Consulting",
      category: "B2B",
      tags: ["HealthCare"],
      description: "Professional business consulting platform providing strategic advice, market analysis, and growth solutions for businesses across various industries.",
      status: "Available",
      price: "$750 – $1,000",
      slug: "businessbite-business-consulting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Shopping Spark – Ecommerce Shopping Platform",
      category: "B2B",
      tags: ["eCommerce"],
      description: "Complete ecommerce shopping platform with advanced features for online retail, inventory management, and customer engagement.",
      status: "Available",
      price: "$750 – $1,500",
      slug: "shopping-spark-ecommerce-shopping-platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Close Sourcing – B2B eCommerce with Bulk Discount",
      category: "B2B",
      tags: ["eCommerce"],
      description: "B2B eCommerce platform with bulk discount features - AliExpress, IndiaMart Clone with advanced wholesale and retail capabilities.",
      status: "Available",
      price: "$750 – $1,500",
      slug: "close-sourcing-b2b-ecommerce-with-bulk-discount",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Billing – Advanced POS, Inventory, Accounting, Warehouse",
      category: "B2B",
      tags: ["ERP & CRM"],
      description: "Advanced POS system with inventory management, accounting, warehouse management, multi-user support, and GST ready features.",
      status: "Available",
      price: "$625 – $1,250",
      slug: "billing-advanced-pos-inventory-accounting-warehouse",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Project Card ---------------- */

function ProjectCard({ project, index, navigate }) {
  const handleCardClick = () => {
    navigate(`/b2b/${project.slug}`);
  };

  return (
    <div 
      data-reveal
      onClick={handleCardClick}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
    >
      {/* Top Graphic Section */}
      <div className="relative bg-gradient-to-b from-orange-100 to-orange-200 p-4">
        {/* Project Image */}
        <div className="w-full h-32 rounded-lg overflow-hidden">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/70">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30">
            {project.category}
          </span>
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Status and Price */}
        <div className="flex justify-between items-center">
          <div className="text-white text-sm font-medium">
            {project.status}
          </div>
          {project.price && (
            <div className="text-orange-400 text-sm font-bold">
              {project.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}