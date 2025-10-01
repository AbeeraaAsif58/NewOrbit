import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import TalkBanner from "../../components/TalkBanner";

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
          Finance Marketplace Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
          Discover verified and tested finance startups from our marketplace. Ready-to-launch solutions 
          for banking, payments, trading, lending, and financial technology applications.
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
      title: "ProperLoan - NBFC Finance Mortgage Startup sourcing Loans/Credit Cards",
      category: "Finance",
      tags: ["NBFC", "Loans", "Credit Cards"],
      description: "Complete NBFC finance platform for mortgage startup sourcing loans and credit cards with comprehensive financial management.",
      status: "71 Sales",
      price: "$625 – $1,250",
      slug: "properloan-nbfc-finance-mortgage-startup-sourcing-loans-credit-cards",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "InvestDrive - HYIP Crypto Investment Management Platform",
      category: "Finance",
      tags: ["Crypto", "Investment", "HYIP"],
      description: "High Yield Investment Program (HYIP) crypto investment management platform with advanced trading and portfolio management features.",
      status: "70 Sales",
      price: "$625 – $1,250",
      slug: "investdrive-hyip-crypto-investment-management-platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Quotora - Live Trading, Market Analysis, Portfolio, Watching List, Subscriptions",
      category: "Finance",
      tags: ["Trading", "Market Analysis", "Portfolio"],
      description: "Comprehensive live trading platform with market analysis, portfolio management, watch lists, and subscription-based premium features.",
      status: "41 Sales",
      price: "$625 – $1,250",
      slug: "quotora-live-trading-market-analysis-portfolio-watching-list-subscriptions",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Bankovia - Online Banking With DPS & Loan",
      category: "Finance",
      tags: ["Online Banking", "DPS", "Loans"],
      description: "Complete online banking platform with Deposit Pension Scheme (DPS) and loan management features for modern banking operations.",
      status: "32 Sales",
      price: "$625 – $1,250",
      slug: "bankovia-online-banking-with-dps-loan",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "PayoutCard - Complete Virtual Credit Card Solution",
      category: "Finance",
      tags: ["Virtual Cards", "Credit Cards"],
      description: "Complete virtual credit card solution with advanced security features, instant issuance, and comprehensive card management.",
      status: "15 Sales",
      price: "$625 – $1,250",
      slug: "payoutcard-complete-virtual-credit-card-solution",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "CapturePay - Start your own Secure Online Payment Gateway",
      category: "Finance",
      tags: ["Payment Gateway", "Secure Payments"],
      description: "Complete secure online payment gateway solution allowing businesses to start their own payment processing platform.",
      status: "12 Sales",
      price: "$875 – $1,500",
      slug: "capturepay-start-your-own-secure-online-payment-gateway",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Bighitter - Wallet & Online Banking Online Investment Platform",
      category: "Finance",
      tags: ["Wallet", "Online Banking", "Investment"],
      description: "Comprehensive wallet and online banking platform with integrated investment features for modern financial management.",
      status: "10 Sales",
      price: "$625 – $1,250",
      slug: "bighitter-wallet-online-banking-online-investment-platform",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "VirtuLoan - Complete Loan Management System",
      category: "Finance",
      tags: ["Loan Management", "Lending"],
      description: "Complete loan management system with automated processing, risk assessment, and comprehensive lending operations.",
      status: "6 Sales",
      price: "$625 – $1,250",
      slug: "virtuloan-complete-loan-management-system",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "SwipeBank - Online Internet Banking With Account, Loans, DSP for NBFC & Banks",
      category: "Finance",
      tags: ["Internet Banking", "NBFC", "Banks"],
      description: "Complete online internet banking solution with account management, loans, and DSP features for NBFC and banks like ICICI, HDFC.",
      status: "1 Sale",
      price: "$1,750 – $2,500",
      slug: "swipebank-online-internet-banking-with-account-loans-dsp-nbfc-banks",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "NFTLyfe - NFT Buy/Sell Marketplace",
      category: "Finance",
      tags: ["NFT", "Marketplace"],
      description: "Complete NFT buy/sell marketplace platform with advanced trading features, auctions, and digital asset management.",
      status: "1 Sale",
      price: "$625 – $1,250",
      slug: "nftlyfe-nft-buy-sell-marketplace",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "SyncPay Orchestra - Complete Payment Gateway, Wallet & QR System",
      category: "Finance",
      tags: ["Payment Gateway", "Wallet", "QR System"],
      description: "Complete payment gateway solution with integrated wallet functionality and QR code payment system for modern transactions.",
      status: "Available",
      price: "$1,750 – $2,500",
      slug: "syncpay-orchestra-complete-payment-gateway-wallet-qr-system",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
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
    navigate(`/finance/${project.slug}`);
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