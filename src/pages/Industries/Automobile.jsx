import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TalkBanner from "../../components/TalkBanner";

gsap.registerPlugin(ScrollTrigger);

export default function Automobile() {
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
          Automobile Marketplace Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
          Discover verified and tested automobile startups from our marketplace. Ready-to-launch solutions 
          for car dealerships, fleet management, vehicle rental, parking systems, and automotive services.
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
      title: "Carinian - Used Car Buy/Sell & Dealership Website & Apps",
      category: "Automobile",
      tags: ["Directory"],
      description: "A comprehensive platform for buying, selling, and managing used cars with dealership integration and mobile apps.",
      status: "38 Sales",
      price: "$625 – $1,125",
      slug: "carinian-used-car-buy-sell-dealership-website-apps",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Garagify - Garage/Vehicle Service Management System",
      category: "Automobile",
      tags: ["ERP & CRM"],
      description: "Complete garage and vehicle service management system for modern automotive businesses with comprehensive CRM features.",
      status: "14 Sales",
      price: "$625 – $1,250",
      slug: "garagify-garage-vehicle-service-management-system",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Carenting - Car/Bike/Scooter Vehicle Rental Platform",
      category: "Automobile",
      tags: ["Directory"],
      description: "Advanced car, bike, and scooter rental platform with complete booking management - Zoomcar/Revv Clone with modern features.",
      status: "Available",
      price: "$750 – $1,500",
      slug: "carenting-car-bike-scooter-vehicle-rental-platform",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "TrackingBit - Fleet Management System With Live GPS Tracking",
      category: "Automobile",
      tags: ["ERP & CRM"],
      description: "Advanced fleet management system with live GPS tracking, comprehensive reporting, and real-time monitoring capabilities.",
      status: "Available",
      price: "$625 – $1,250",
      slug: "trackingbit-fleet-management-system-live-gps-tracking",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "ParkingRabbit - SaaS Vehicle Parking Management System",
      category: "Automobile",
      tags: ["ERP & CRM"],
      description: "Complete SaaS-based parking management solution for modern parking facilities with smart space allocation and payment processing.",
      status: "Available",
      price: "$625 – $1,250",
      slug: "parkingrabbit-saas-vehicle-parking-management-system",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center"
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
    navigate(`/automobile/${project.slug}`);
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