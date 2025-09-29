import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TalkBanner from "../../components/TalkBanner";

gsap.registerPlugin(ScrollTrigger);

export default function Companies() {
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
          bg="#ff6b35"
          textColor="#ffffff"
          subColor="#ff8c42"
        />
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
          Companies for Sale
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
          Discover innovative companies and businesses available for acquisition. 
          Explore our curated selection of profitable ventures across various industries 
          with proven track records and growth potential.
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
      title: "For Sale: Innovative fintech banking company in Spain",
      category: "Companies",
      tags: ["Fintech", "Banking"],
      description: "Our business is an innovative fintech banking company that is registered in Barcelona, Spain. We have our headquarters in Madrid and virtual offices in Barcelona, Estonia, and Bulgaria.",
      status: "EUR 50,000,000",
      slug: "for-sale-innovative-fintech-banking-company-in-spain",
      image: "/api/placeholder/400/300",
      established: "4 years",
      employees: "25",
      sales: "EUR 12.4 million",
      location: "Barcelona, Spain"
    },
    {
      title: "For Sale: E-commerce Marketplace Platform",
      category: "Companies",
      tags: ["E-commerce", "Marketplace"],
      description: "Profitable e-commerce marketplace with established vendor network, integrated payment systems, and strong customer base across multiple regions.",
      status: "EUR 15,000,000",
      slug: "for-sale-ecommerce-marketplace-platform",
      image: "/api/placeholder/400/300",
      established: "6 years",
      employees: "45",
      sales: "EUR 8.2 million",
      location: "London, UK"
    },
    {
      title: "For Sale: SaaS Analytics Company",
      category: "Companies",
      tags: ["SaaS", "Analytics"],
      description: "Leading SaaS analytics platform serving enterprise clients with advanced data visualization and business intelligence solutions.",
      status: "EUR 25,000,000",
      slug: "for-sale-saas-analytics-company",
      image: "/api/placeholder/400/300",
      established: "5 years",
      employees: "60",
      sales: "EUR 18.5 million",
      location: "San Francisco, USA"
    },
    {
      title: "For Sale: Digital Marketing Agency",
      category: "Companies",
      tags: ["Marketing", "Digital"],
      description: "Full-service digital marketing agency with established client portfolio, proprietary tools, and strong recurring revenue streams.",
      status: "EUR 8,000,000",
      slug: "for-sale-digital-marketing-agency",
      image: "/api/placeholder/400/300",
      established: "7 years",
      employees: "35",
      sales: "EUR 6.8 million",
      location: "Berlin, Germany"
    },
    {
      title: "For Sale: Healthcare Technology Startup",
      category: "Companies",
      tags: ["Healthcare", "Technology"],
      description: "Innovative healthcare technology company with patented solutions for patient management and telemedicine platforms.",
      status: "EUR 30,000,000",
      slug: "for-sale-healthcare-technology-startup",
      image: "/api/placeholder/400/300",
      established: "3 years",
      employees: "28",
      sales: "EUR 4.2 million",
      location: "Toronto, Canada"
    },
    {
      title: "For Sale: Real Estate Technology Platform",
      category: "Companies",
      tags: ["Real Estate", "Technology"],
      description: "Comprehensive real estate technology platform connecting buyers, sellers, and agents with advanced property management tools.",
      status: "EUR 20,000,000",
      slug: "for-sale-real-estate-technology-platform",
      image: "/api/placeholder/400/300",
      established: "8 years",
      employees: "50",
      sales: "EUR 12.1 million",
      location: "Sydney, Australia"
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
    navigate(`/companies/${project.slug}`);
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
            src={`https://picsum.photos/400/200?random=${index + 40}`}
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
        
        {/* Company Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="text-gray-400">
            <span className="font-semibold">Established:</span> {project.established}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold">Employees:</span> {project.employees}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold">Sales:</span> {project.sales}
          </div>
          <div className="text-gray-400">
            <span className="font-semibold">Location:</span> {project.location}
          </div>
        </div>
        
        {/* Price */}
        <div className="text-orange-400 text-lg font-bold">
          {project.status}
        </div>
      </div>
    </div>
  );
}
