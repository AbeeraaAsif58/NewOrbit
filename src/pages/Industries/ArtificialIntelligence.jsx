import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TalkBanner from "../../components/TalkBanner";
import SimpleFooter from "../../components/SimpleFooter";

gsap.registerPlugin(ScrollTrigger);

export default function ArtificialIntelligence() {
  const scrollRoot = useRef(null);
  const navigate = useNavigate();

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
    <div className="min-h-screen text-white selection:bg-green-500/20">
      {/* Smooth scroll container */}
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
          AI Marketplace Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
          Discover verified and tested AI startups from our marketplace. Ready-to-launch SaaS solutions 
          for text-to-speech, content generation, marketplace platforms, and AI-powered tools.
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
      title: "SonicVox – Text to Speech as SaaS",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities"],
      description: "Machine learning and Deep learning based text-to-speech solution with advanced features and analytics",
      status: "1 Sale",
      price: "$625 – $1,250",
      slug: "sonicvox-text-to-speech-as-saas",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Classifiable – Classified Buy and Sell Marketplace Platform",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities"],
      description: "AI-powered classified marketplace platform for buying and selling with intelligent matching and recommendations",
      status: "Available",
      price: "$2,000 – $3,500",
      slug: "classifiable-classified-buy-sell-marketplace",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Inbitcoin – AI Prompt Buy Selling Marketplace",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities"],
      description: "Multi-seller marketplace platform for AI prompts with intelligent pricing and automated trading features",
      status: "Available",
      price: "$2,000 – $3,500",
      slug: "inbitcoin-ai-prompt-buy-selling-marketplace",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "WriteTalent – SAAS OpenAI Content Generator",
      category: "Artificial Intelligence", 
      tags: ["SaaS", "Tools and Utilities"],
      description: "Complete AI solution for content, text, image, voice, chat, code, transcript, and video generation",
      status: "Available",
      price: "$2,000 – $3,500",
      slug: "writetalent-saas-openai-content-generator",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Writingo – AI Content Writer & Copyright Generator",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities"],
      description: "Advanced AI-powered content writing and copyright generation tool with SAAS capabilities",
      status: "Available",
      price: "$750 – $1,375",
      slug: "writingo-ai-content-writer-copyright-generator",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Aitini – ChatGPT SaaS Writing Assistant",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities"],
      description: "AI writing assistant and content creator powered by ChatGPT technology",
      status: "Available",
      price: "$750 – $1,375",
      slug: "aitini-chatgpt-saas-writing-assistant",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
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
    navigate(`/artificial-intelligence/${project.slug}`);
  };

  return (
    <div 
      data-reveal
      onClick={handleCardClick}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer"
    >
      {/* Top Graphic Section */}
      <div className="relative bg-gradient-to-b from-green-100 to-green-200 p-4">
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
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
            {project.category}
      </span>
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
              {tag}
          </span>
        ))}
      </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
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
            <div className="text-green-400 text-sm font-bold">
              {project.price}
            </div>
          )}
        </div>
        </div>
      </div>
  );
}