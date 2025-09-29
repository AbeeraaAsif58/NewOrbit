import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TalkBanner from "../../components/TalkBanner";

gsap.registerPlugin(ScrollTrigger);

export default function Blockchain() {
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
          Blockchain Industry Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
          Explore our cutting-edge blockchain projects and solutions that help businesses leverage 
          decentralized technology, smart contracts, and cryptocurrency innovations.
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
      title: "Cryptoquiver – ICO / STO Token Sale Management / ICO Admin",
      category: "Blockchain",
      tags: ["ICO", "STO"],
      description: "Cryptoquiver is a comprehensive ICO/STO token sale management platform that provides advanced features for managing token sales, user investments, and administrative tasks.",
      status: "Available",
      slug: "cryptoquiver-ico-sto-token-sale-management-ico-admin",
      image: "/api/placeholder/400/300"
    },
    {
      title: "DeFiSwap – Decentralized Exchange Platform",
      category: "Blockchain",
      tags: ["DeFi", "DEX"],
      description: "A comprehensive decentralized exchange platform with automated market making, liquidity pools, and yield farming capabilities.",
      status: "Available",
      slug: "defiswap-decentralized-exchange-platform",
      image: "/api/placeholder/400/300"
    },
    {
      title: "NFTMarket – Digital Asset Marketplace",
      category: "Blockchain",
      tags: ["NFT", "Marketplace"],
      description: "Complete NFT marketplace solution with minting, trading, and auction features for digital collectibles and art.",
      status: "Available",
      slug: "nftmarket-digital-asset-marketplace",
      image: "/api/placeholder/400/300"
    },
    {
      title: "CryptoWallet – Multi-Chain Wallet Solution",
      category: "Blockchain",
      tags: ["Wallet", "Multi-chain"],
      description: "Secure multi-chain cryptocurrency wallet supporting Bitcoin, Ethereum, and other major blockchain networks.",
      status: "Available",
      slug: "cryptowallet-multi-chain-wallet-solution",
      image: "/api/placeholder/400/300"
    },
    {
      title: "SmartContract – Automated Contract Platform",
      category: "Blockchain",
      tags: ["Smart Contracts", "Automation"],
      description: "Platform for creating, deploying, and managing smart contracts across multiple blockchain networks.",
      status: "Available",
      slug: "smartcontract-automated-contract-platform",
      image: "/api/placeholder/400/300"
    },
    {
      title: "BlockExplorer – Blockchain Analytics Tool",
      category: "Blockchain",
      tags: ["Analytics", "Explorer"],
      description: "Advanced blockchain explorer and analytics platform for tracking transactions and monitoring network activity.",
      status: "Available",
      slug: "blockexplorer-blockchain-analytics-tool",
      image: "/api/placeholder/400/300"
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
    navigate(`/blockchain/${project.slug}`);
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
            src={`https://picsum.photos/400/200?random=${index + 20}`}
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
        
        {/* Status */}
        <div className="text-white text-sm font-medium">
          {project.status}
        </div>
      </div>
    </div>
  );
}