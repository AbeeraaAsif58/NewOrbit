import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import TalkBanner from '../../components/TalkBanner';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const scrollRoot = useRef(null);

  // Project data matching Heloix marketplace style
  const projects = {
    'sonicvox-text-to-speech-as-saas': {
      title: "SonicVox – Text to Speech as SaaS",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "AI", "Machine Learning"],
      description: "Machine learning and Deep learning based text-to-speech solution with advanced features and analytics",
      status: "1 Sale",
      price: "$625 – $1,250",
      slug: "sonicvox-text-to-speech-as-saas",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",
      overview: "SonicVox is a cutting-edge Text-to-Speech (TTS) SaaS platform that leverages advanced machine learning and deep learning algorithms to deliver natural, human-like voice synthesis. Our platform offers enterprise-grade solutions for businesses looking to integrate high-quality voice generation into their applications.",
      features: [
        "Support for over 144 languages and dialects",
        "Over 909 different voices and accents", 
        "Natural sounding voices using Neural TTS",
        "Integration with leading cloud service providers",
        "Real-time voice generation",
        "Custom voice training",
        "API Integration",
        "Analytics Dashboard"
      ],
      technologies: [
        "Python", "TensorFlow", "PyTorch", "React", "Node.js", 
        "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://launch.enroles.com/71/public/",
      githubUrl: "https://github.com/sonicvox",
      liveUrl: "https://sonicvox.com"
    },
    'classifiable-classified-buy-sell-marketplace': {
      title: "Classifiable – Classified Buy and Sell Marketplace Platform",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "Marketplace", "AI"],
      description: "AI-powered classified marketplace platform for buying and selling with intelligent matching and recommendations",
      status: "Available",
      price: "$2,000 – $3,500",
      slug: "classifiable-classified-buy-sell-marketplace",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "Classifiable is an advanced AI-powered classified marketplace platform that revolutionizes the way people buy and sell goods online. Our intelligent matching system uses machine learning algorithms to connect buyers with the most relevant sellers and products, creating a seamless marketplace experience.",
      features: [
        "AI-powered product matching and recommendations",
        "Advanced search with natural language processing",
        "Smart pricing suggestions based on market data",
        "Automated fraud detection and prevention",
        "Real-time chat system with AI assistance",
        "Mobile-responsive design",
        "Multi-language support",
        "Advanced analytics dashboard"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "TensorFlow", "Python",
        "AWS", "Redis", "Socket.io", "Stripe", "Docker"
      ],
      pricing: "$2,000 – $3,500",
      demoUrl: "https://demo.classifiable.com",
      githubUrl: "https://github.com/classifiable",
      liveUrl: "https://classifiable.com"
    },
    'inbitcoin-ai-prompt-buy-selling-marketplace': {
      title: "Inbitcoin – AI Prompt Buy Selling Marketplace",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "Marketplace", "AI Prompts"],
      description: "Multi-seller marketplace platform for AI prompts with intelligent pricing and automated trading features",
      status: "Available",
      price: "$2,000 – $3,500",
      slug: "inbitcoin-ai-prompt-buy-selling-marketplace",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",
      overview: "Inbitcoin is a revolutionary marketplace platform specifically designed for AI prompts trading. Our platform enables creators to monetize their AI prompts while providing buyers with access to high-quality, tested prompts for various AI models and applications.",
      features: [
        "Multi-seller marketplace for AI prompts",
        "Intelligent pricing algorithms",
        "Automated trading and escrow system",
        "Prompt testing and validation tools",
        "Category-based organization",
        "Rating and review system",
        "API integration for developers",
        "Real-time analytics and reporting"
      ],
      technologies: [
        "Vue.js", "Express.js", "PostgreSQL", "Redis", "Python",
        "OpenAI API", "Stripe", "AWS", "Docker", "Kubernetes"
      ],
      pricing: "$2,000 – $3,500",
      demoUrl: "https://demo.inbitcoin.com",
      githubUrl: "https://github.com/inbitcoin",
      liveUrl: "https://inbitcoin.com"
    },
    'writetalent-saas-openai-content-generator': {
      title: "WriteTalent – SAAS OpenAI Content Generator",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "Content Generation", "OpenAI"],
      description: "Complete AI solution for content, text, image, voice, chat, code, transcript, and video generation",
      status: "Available",
      price: "$2,000 – $3,500",
      slug: "writetalent-saas-openai-content-generator",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",
      overview: "WriteTalent is a comprehensive AI-powered content generation platform that leverages OpenAI's advanced models to create high-quality content across multiple formats. From text and images to voice and video, our platform provides everything needed for modern content creation.",
      features: [
        "Multi-format content generation (text, image, voice, video)",
        "OpenAI GPT integration",
        "Custom AI model training",
        "Batch processing capabilities",
        "Content optimization and SEO tools",
        "Collaborative workspace",
        "API access for developers",
        "Advanced analytics and reporting"
      ],
      technologies: [
        "React", "Node.js", "OpenAI API", "Python", "PostgreSQL",
        "AWS", "Docker", "TensorFlow", "FFmpeg", "WebRTC"
      ],
      pricing: "$2,000 – $3,500",
      demoUrl: "https://demo.writetalent.com",
      githubUrl: "https://github.com/writetalent",
      liveUrl: "https://writetalent.com"
    },
    'writingo-ai-content-writer-copyright-generator': {
      title: "Writingo – AI Content Writer & Copyright Generator",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "Content Writing", "Copyright"],
      description: "Advanced AI-powered content writing and copyright generation tool with SAAS capabilities",
      status: "Available",
      price: "$750 – $1,375",
      slug: "writingo-ai-content-writer-copyright-generator",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop&crop=center",
      overview: "Writingo is an advanced AI-powered content writing platform that specializes in creating high-quality, original content while ensuring copyright compliance. Our platform combines natural language processing with legal compliance tools to deliver content that's both engaging and legally sound.",
      features: [
        "AI-powered content writing",
        "Copyright detection and compliance",
        "Plagiarism checking",
        "Multiple content formats support",
        "SEO optimization tools",
        "Content scheduling and publishing",
        "Team collaboration features",
        "Analytics and performance tracking"
      ],
      technologies: [
        "Angular", "Node.js", "MongoDB", "Python", "NLP Libraries",
        "AWS", "Redis", "Elasticsearch", "Docker", "Kubernetes"
      ],
      pricing: "$750 – $1,375",
      demoUrl: "https://demo.writingo.com",
      githubUrl: "https://github.com/writingo",
      liveUrl: "https://writingo.com"
    },
    'aitini-chatgpt-saas-writing-assistant': {
      title: "Aitini – ChatGPT SaaS Writing Assistant",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "ChatGPT", "Writing Assistant"],
      description: "AI writing assistant and content creator powered by ChatGPT technology",
      status: "Available",
      price: "$750 – $1,375",
      slug: "aitini-chatgpt-saas-writing-assistant",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",
      overview: "Aitini is a powerful ChatGPT-powered SaaS platform designed to assist writers, content creators, and businesses in generating high-quality content. Our platform provides an intuitive interface for interacting with ChatGPT while offering advanced features for content management and collaboration.",
      features: [
        "ChatGPT integration and optimization",
        "Multiple conversation templates",
        "Content export in various formats",
        "Team collaboration tools",
        "Usage analytics and tracking",
        "Custom prompt library",
        "API access for developers",
        "Mobile-responsive interface"
      ],
      technologies: [
        "React", "Node.js", "ChatGPT API", "PostgreSQL", "Redis",
        "AWS", "Socket.io", "Docker", "Kubernetes", "Stripe"
      ],
      pricing: "$750 – $1,375",
      demoUrl: "https://demo.aitini.com",
      githubUrl: "https://github.com/aitini",
      liveUrl: "https://aitini.com"
    },
    // Automobile Products
    'carinian-used-car-buy-sell-dealership-website-apps': {
      title: "Carinian - Used Car Buy/Sell & Dealership Website & Apps",
      category: "Automobile",
      tags: ["Directory", "Mobile Apps", "Dealership"],
      description: "A comprehensive platform for buying, selling, and managing used cars with dealership integration and mobile apps.",
      status: "38 Sales",
      price: "$625 – $1,125",
      slug: "carinian-used-car-buy-sell-dealership-website-apps",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=600&fit=crop&crop=center",
      overview: "Carinian is a comprehensive used car marketplace platform that connects buyers, sellers, and dealerships in one seamless ecosystem. Our platform offers advanced features for vehicle listing, search, comparison, and transaction management with dedicated mobile applications for both iOS and Android.",
      features: [
        "Advanced vehicle search and filtering",
        "Dealership management dashboard",
        "Mobile apps for iOS and Android",
        "Vehicle inspection and certification",
        "Financing and insurance integration",
        "Real-time chat and messaging",
        "Vehicle history reports",
        "Payment processing and escrow"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express.js",
        "AWS", "Stripe", "Twilio", "Redis", "Docker"
      ],
      pricing: "$625 – $1,125",
      demoUrl: "https://demo.carinian.com",
      githubUrl: "https://github.com/carinian",
      liveUrl: "https://carinian.com"
    },
    'garagify-garage-vehicle-service-management-system': {
      title: "Garagify - Garage/Vehicle Service Management System",
      category: "Automobile",
      tags: ["ERP & CRM", "Service Management", "Automotive"],
      description: "Complete garage and vehicle service management system for modern automotive businesses with comprehensive CRM features.",
      status: "14 Sales",
      price: "$625 – $1,250",
      slug: "garagify-garage-vehicle-service-management-system",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop&crop=center",
      overview: "Garagify is a comprehensive garage and vehicle service management system designed to streamline operations for automotive service centers, garages, and repair shops. Our platform integrates customer management, service scheduling, inventory tracking, and financial reporting in one unified solution.",
      features: [
        "Customer relationship management (CRM)",
        "Service appointment scheduling",
        "Vehicle maintenance tracking",
        "Inventory and parts management",
        "Invoice generation and payment processing",
        "Technician management and work orders",
        "Customer communication tools",
        "Analytics and reporting dashboard"
      ],
      technologies: [
        "Vue.js", "Laravel", "MySQL", "PHP", "Bootstrap",
        "AWS", "PayPal", "SendGrid", "Redis", "Docker"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.garagify.com",
      githubUrl: "https://github.com/garagify",
      liveUrl: "https://garagify.com"
    },
    'carenting-car-bike-scooter-vehicle-rental-platform': {
      title: "Carenting - Car/Bike/Scooter Vehicle Rental Platform",
      category: "Automobile",
      tags: ["Directory", "Vehicle Rental", "Booking System"],
      description: "Advanced car, bike, and scooter rental platform with complete booking management - Zoomcar/Revv Clone with modern features.",
      status: "Available",
      price: "$750 – $1,500",
      slug: "carenting-car-bike-scooter-vehicle-rental-platform",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&crop=center",
      overview: "Carenting is a comprehensive vehicle rental platform that enables users to rent cars, bikes, and scooters on-demand. Our platform provides a seamless booking experience with real-time availability, GPS tracking, and automated payment processing, similar to popular services like Zoomcar and Revv.",
      features: [
        "Multi-vehicle type support (cars, bikes, scooters)",
        "Real-time vehicle availability",
        "GPS tracking and navigation",
        "Automated booking and payment",
        "Driver verification and insurance",
        "Route optimization",
        "Customer support chat",
        "Mobile app for iOS and Android"
      ],
      technologies: [
        "React", "React Native", "Node.js", "PostgreSQL", "Express.js",
        "Google Maps API", "Stripe", "AWS", "Socket.io", "Redis"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.carenting.com",
      githubUrl: "https://github.com/carenting",
      liveUrl: "https://carenting.com"
    },
    'trackingbit-fleet-management-system-live-gps-tracking': {
      title: "TrackingBit - Fleet Management System With Live GPS Tracking",
      category: "Automobile",
      tags: ["ERP & CRM", "Fleet Management", "GPS Tracking"],
      description: "Advanced fleet management system with live GPS tracking, comprehensive reporting, and real-time monitoring capabilities.",
      status: "Available",
      price: "$625 – $1,250",
      slug: "trackingbit-fleet-management-system-live-gps-tracking",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&crop=center",
      overview: "TrackingBit is a comprehensive fleet management system that provides real-time GPS tracking, vehicle monitoring, and fleet optimization tools. Our platform helps businesses manage their vehicle fleets efficiently with advanced analytics, route optimization, and maintenance scheduling.",
      features: [
        "Real-time GPS tracking and monitoring",
        "Route optimization and planning",
        "Driver behavior analytics",
        "Vehicle maintenance scheduling",
        "Fuel consumption tracking",
        "Geofencing and alerts",
        "Comprehensive reporting dashboard",
        "Mobile app for drivers and managers"
      ],
      technologies: [
        "Angular", "Node.js", "MongoDB", "Express.js", "Socket.io",
        "Google Maps API", "AWS", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.trackingbit.com",
      githubUrl: "https://github.com/trackingbit",
      liveUrl: "https://trackingbit.com"
    },
    'parkingrabbit-saas-vehicle-parking-management-system': {
      title: "ParkingRabbit - SaaS Vehicle Parking Management System",
      category: "Automobile",
      tags: ["ERP & CRM", "SaaS", "Parking Management"],
      description: "Complete SaaS-based parking management solution for modern parking facilities with smart space allocation and payment processing.",
      status: "Available",
      price: "$625 – $1,250",
      slug: "parkingrabbit-saas-vehicle-parking-management-system",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&crop=center",
      overview: "ParkingRabbit is a comprehensive SaaS-based parking management system designed for modern parking facilities, shopping centers, and office buildings. Our platform provides smart space allocation, automated payment processing, and real-time occupancy monitoring to optimize parking operations.",
      features: [
        "Smart parking space allocation",
        "Real-time occupancy monitoring",
        "Automated payment processing",
        "Mobile app for users",
        "Parking reservation system",
        "Revenue analytics and reporting",
        "Multi-location management",
        "Integration with access control systems"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express.js", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.parkingrabbit.com",
      githubUrl: "https://github.com/parkingrabbit",
      liveUrl: "https://parkingrabbit.com"
    },
    // Blockchain Products
    'cryptoquiver-ico-sto-token-sale-management-ico-admin': {
      title: "Cryptoquiver – ICO / STO Token Sale Management / ICO Admin",
      category: "Blockchain",
      tags: ["ICO", "STO", "Token Sale", "Admin Panel"],
      description: "Cryptoquiver is a comprehensive ICO/STO token sale management platform that provides advanced features for managing token sales, user investments, and administrative tasks.",
      status: "69 Sales",
      price: "$625 – $1,250",
      slug: "cryptoquiver-ico-sto-token-sale-management-ico-admin",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",
      overview: "Cryptoquiver is a comprehensive platform designed for managing Initial Coin Offerings (ICO) and Security Token Offerings (STO). Our platform provides complete token sale management with advanced admin features, investor management, and automated compliance tools for blockchain-based fundraising campaigns.",
      features: [
        "Complete ICO/STO token sale management",
        "Advanced admin dashboard and controls",
        "Investor registration and KYC verification",
        "Automated token distribution",
        "Multi-currency payment processing",
        "Real-time analytics and reporting",
        "Smart contract integration",
        "Compliance and regulatory tools"
      ],
      technologies: [
        "React", "Node.js", "Solidity", "Web3.js", "Ethereum",
        "AWS", "PostgreSQL", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.cryptoquiver.com",
      githubUrl: "https://github.com/cryptoquiver",
      liveUrl: "https://cryptoquiver.com"
    },
    'cryptologia-cryptocurrency-buy-sell-exchange-mlm-system': {
      title: "Cryptologia – Cryptocurrency Buy Sell Exchange with MLM System",
      category: "Blockchain",
      tags: ["Cryptocurrency", "Exchange", "MLM", "Trading"],
      description: "Advanced cryptocurrency exchange platform with integrated MLM (Multi-Level Marketing) system for comprehensive trading and referral management.",
      status: "9 Sales",
      price: "$625 – $1,250",
      slug: "cryptologia-cryptocurrency-buy-sell-exchange-mlm-system",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=600&fit=crop&crop=center",
      overview: "Cryptologia is a comprehensive cryptocurrency exchange platform that combines traditional trading features with an integrated Multi-Level Marketing (MLM) system. Our platform enables users to trade cryptocurrencies while participating in a structured referral program with automated commission tracking and payout management.",
      features: [
        "Multi-cryptocurrency trading platform",
        "Integrated MLM referral system",
        "Automated commission calculations",
        "Real-time trading charts and analysis",
        "Secure wallet integration",
        "Advanced order management",
        "Referral tracking and analytics",
        "Automated payout system"
      ],
      technologies: [
        "Vue.js", "Node.js", "MongoDB", "Express.js", "WebSocket",
        "AWS", "Redis", "Docker", "Kubernetes", "Stripe"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.cryptologia.com",
      githubUrl: "https://github.com/cryptologia",
      liveUrl: "https://cryptologia.com"
    },
    // B2B Products
    'vyapaar-complete-saas-business-for-stock-management-pos-invoicing': {
      title: "Vyapaar – Complete SAAS Business for Stock Management, POS & Invoicing",
      category: "B2B",
      tags: ["ERP & CRM", "SAAS", "POS", "Inventory"],
      description: "This is a SAAS based Startup provides a CRM with some amazing features suitable for all businesses. With this application, you are assured to save time-consuming process of bookkeeping accounting and inventory information.",
      status: "164 Sales",
      price: "$750 – $1,375",
      slug: "vyapaar-complete-saas-business-for-stock-management-pos-invoicing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "Vyapaar is a comprehensive SAAS-based business management platform that provides complete solutions for stock management, point-of-sale (POS) operations, and invoicing. Our platform is designed to streamline business operations and eliminate time-consuming manual processes.",
      features: [
        "Complete stock management system",
        "Advanced POS functionality",
        "Automated invoicing and billing",
        "Customer relationship management",
        "Inventory tracking and alerts",
        "Financial reporting and analytics",
        "Multi-location support",
        "Mobile app for on-the-go management"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express.js", "React Native",
        "AWS", "Stripe", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$750 – $1,375",
      demoUrl: "https://demo.vyapaar.com",
      githubUrl: "https://github.com/vyapaar",
      liveUrl: "https://vyapaar.com"
    },
    'cloud-prospects-lead-management-system-and-sales-crm': {
      title: "Cloud Prospects – Lead Management System and Sales CRM",
      category: "B2B",
      tags: ["ERP & CRM", "Lead Management", "Sales"],
      description: "Advanced lead management system and sales CRM designed to streamline business processes, track prospects, and manage customer relationships effectively.",
      status: "72 Sales",
      price: "$625 – $1,250",
      slug: "cloud-prospects-lead-management-system-and-sales-crm",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",
      overview: "Cloud Prospects is a comprehensive lead management system and sales CRM designed to help businesses streamline their sales processes, track prospects effectively, and manage customer relationships with advanced automation and analytics.",
      features: [
        "Advanced lead tracking and scoring",
        "Sales pipeline management",
        "Customer relationship management",
        "Automated email campaigns",
        "Sales analytics and reporting",
        "Integration with marketing tools",
        "Mobile app for sales teams",
        "Customizable workflows"
      ],
      technologies: [
        "Vue.js", "Laravel", "MySQL", "PHP", "Bootstrap",
        "AWS", "SendGrid", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.cloudprospects.com",
      githubUrl: "https://github.com/cloudprospects",
      liveUrl: "https://cloudprospects.com"
    },
    'hospitalcore-complete-saas-hospital-management-system': {
      title: "Hospitalcore – Complete SAAS Hospital management system",
      category: "B2B",
      tags: ["HealthCare", "SAAS", "Hospital Management"],
      description: "Comprehensive SAAS-based hospital management system with patient records, appointment scheduling, billing, and complete healthcare facility management.",
      status: "51 Sales",
      price: "$625 – $1,250",
      slug: "hospitalcore-complete-saas-hospital-management-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center",
      overview: "Hospitalcore is a comprehensive SAAS-based hospital management system designed to streamline healthcare operations. Our platform provides complete solutions for patient management, appointment scheduling, billing, and administrative tasks for healthcare facilities.",
      features: [
        "Patient records management",
        "Appointment scheduling system",
        "Billing and insurance processing",
        "Doctor and staff management",
        "Pharmacy management",
        "Laboratory management",
        "Financial reporting",
        "HIPAA compliance features"
      ],
      technologies: [
        "Angular", "Node.js", "PostgreSQL", "Express.js", "TypeScript",
        "AWS", "Redis", "Docker", "Kubernetes", "Stripe"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.hospitalcore.com",
      githubUrl: "https://github.com/hospitalcore",
      liveUrl: "https://hospitalcore.com"
    },
    'business-brawn-complete-saas-business-management': {
      title: "Business Brawn – Complete SAAS Business Management",
      category: "B2B",
      tags: ["SAAS", "Business Management"],
      description: "Complete SAAS business management solution with comprehensive tools for operations, finance, HR, and project management in one unified platform.",
      status: "14 Sales",
      price: "$625 – $1,250",
      slug: "business-brawn-complete-saas-business-management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center",
      overview: "Business Brawn is a comprehensive SAAS business management platform that provides all the tools needed to run a successful business. Our unified platform combines operations, finance, HR, and project management in one seamless solution.",
      features: [
        "Complete business operations management",
        "Financial management and accounting",
        "Human resources management",
        "Project management tools",
        "Customer relationship management",
        "Inventory and supply chain management",
        "Analytics and reporting dashboard",
        "Multi-user collaboration tools"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express.js", "Socket.io",
        "AWS", "Redis", "Docker", "Kubernetes", "Stripe"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.businessbrawn.com",
      githubUrl: "https://github.com/businessbrawn",
      liveUrl: "https://businessbrawn.com"
    },
    'account-tap-khatabook-clone-android-application': {
      title: "Account Tap – KhataBook Clone Android application",
      category: "B2B",
      tags: ["Finance", "Android App", "Accounting"],
      description: "Android application clone of KhataBook for digital ledger management, accounting, and financial tracking for small and medium businesses.",
      status: "8 Sales",
      price: "$625 – $1,250",
      slug: "account-tap-khatabook-clone-android-application",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",
      overview: "Account Tap is a comprehensive Android application that replicates the functionality of KhataBook for digital ledger management. Our app provides small and medium businesses with an easy-to-use platform for accounting and financial tracking.",
      features: [
        "Digital ledger management",
        "Customer and vendor tracking",
        "Payment reminders and notifications",
        "Financial reporting and analytics",
        "Offline functionality",
        "Data backup and sync",
        "Multi-language support",
        "GST compliance features"
      ],
      technologies: [
        "Android", "Java", "Kotlin", "Firebase", "SQLite",
        "AWS", "Google Play Services", "Retrofit", "Room Database"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.accounttap.com",
      githubUrl: "https://github.com/accounttap",
      liveUrl: "https://accounttap.com"
    },
    // Dating Products
    'futureshaadi-matrimony-web-application-android-ios-app': {
      title: "Futureshaadi - Matrimony Web Application with Android and iOS app",
      category: "Dating",
      tags: ["Matrimony", "Web App", "Mobile Apps"],
      description: "Complete matrimony web application with dedicated Android and iOS apps featuring advanced matching algorithms and secure communication.",
      status: "73 Sales",
      price: "$750 – $1,500",
      slug: "futureshaadi-matrimony-web-application-android-ios-app",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",
      overview: "Futureshaadi is a comprehensive matrimony platform that combines web application with dedicated Android and iOS mobile apps. Our platform provides advanced matching algorithms, secure communication features, and comprehensive profile management for serious matrimonial connections.",
      features: [
        "Advanced matching algorithms",
        "Secure messaging and video calls",
        "Profile verification system",
        "Family background matching",
        "Horoscope compatibility",
        "Privacy and security controls",
        "Mobile apps for iOS and Android",
        "Premium membership features"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express.js",
        "AWS", "Socket.io", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.futureshaadi.com",
      githubUrl: "https://github.com/futureshaadi",
      liveUrl: "https://futureshaadi.com"
    },
    'rishtey-shaadi-clone-matrimony-android-ios-app': {
      title: "Rishtey - Shaadi Clone Matrimony Android & iOS app",
      category: "Dating",
      tags: ["Matrimony", "Mobile Apps", "Clone"],
      description: "Complete Shaadi clone matrimony platform with Android and iOS applications featuring comprehensive profile management and matchmaking.",
      status: "53 Sales",
      price: "$1,250 – $2,000",
      slug: "rishtey-shaadi-clone-matrimony-android-ios-app",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",
      overview: "Rishtey is a complete Shaadi clone matrimony platform that replicates the functionality of the popular matrimonial website. Our platform includes comprehensive profile management, advanced search filters, and dedicated mobile applications for both Android and iOS platforms.",
      features: [
        "Complete profile management system",
        "Advanced search and filter options",
        "Photo and document verification",
        "Interest and contact management",
        "Premium membership tiers",
        "Mobile apps for Android and iOS",
        "Real-time notifications",
        "Privacy and security features"
      ],
      technologies: [
        "Vue.js", "React Native", "Laravel", "MySQL", "PHP",
        "AWS", "Firebase", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$1,250 – $2,000",
      demoUrl: "https://demo.rishtey.com",
      githubUrl: "https://github.com/rishtey",
      liveUrl: "https://rishtey.com"
    },
    'janoo-dating-platform-like-tinder-badoo': {
      title: "Janoo - Dating Platform like Tinder/Badoo",
      category: "Dating",
      tags: ["Entertainment", "Social", "Dating App"],
      description: "Modern dating platform similar to Tinder and Badoo with swipe functionality, location-based matching, and premium features.",
      status: "11 Sales",
      price: "$625 – $1,250",
      slug: "janoo-dating-platform-like-tinder-badoo",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",
      overview: "Janoo is a modern dating platform inspired by popular apps like Tinder and Badoo. Our platform features intuitive swipe functionality, location-based matching, and premium features designed to help users find meaningful connections in their area.",
      features: [
        "Swipe-based matching system",
        "Location-based discovery",
        "Photo and video sharing",
        "Real-time messaging",
        "Premium subscription features",
        "Advanced privacy controls",
        "Social media integration",
        "Mobile app optimization"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express.js", "Socket.io",
        "AWS", "Firebase", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.janoo.com",
      githubUrl: "https://github.com/janoo",
      liveUrl: "https://janoo.com"
    },
    // Finance Products
    'properloan-nbfc-finance-mortgage-startup-sourcing-loans-credit-cards': {
      title: "ProperLoan - NBFC Finance Mortgage Startup sourcing Loans/Credit Cards",
      category: "Finance",
      tags: ["NBFC", "Loans", "Credit Cards", "Mortgage"],
      description: "Complete NBFC finance platform for mortgage startup sourcing loans and credit cards with comprehensive financial management.",
      status: "71 Sales",
      price: "$625 – $1,250",
      slug: "properloan-nbfc-finance-mortgage-startup-sourcing-loans-credit-cards",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",
      overview: "ProperLoan is a comprehensive NBFC (Non-Banking Financial Company) finance platform designed for mortgage startups. Our platform provides complete loan sourcing, credit card management, and financial operations for modern lending institutions.",
      features: [
        "Complete loan sourcing and management",
        "Credit card application processing",
        "Mortgage loan origination",
        "Risk assessment and credit scoring",
        "Customer relationship management",
        "Financial reporting and analytics",
        "Compliance and regulatory tools",
        "Multi-channel application processing"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express.js", "Redis",
        "AWS", "Stripe", "Docker", "Kubernetes", "MongoDB"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.properloan.com",
      githubUrl: "https://github.com/properloan",
      liveUrl: "https://properloan.com"
    },
    'investdrive-hyip-crypto-investment-management-platform': {
      title: "InvestDrive - HYIP Crypto Investment Management Platform",
      category: "Finance",
      tags: ["Crypto", "Investment", "HYIP", "Trading"],
      description: "High Yield Investment Program (HYIP) crypto investment management platform with advanced trading and portfolio management features.",
      status: "70 Sales",
      price: "$625 – $1,250",
      slug: "investdrive-hyip-crypto-investment-management-platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",
      overview: "InvestDrive is a comprehensive HYIP (High Yield Investment Program) crypto investment management platform. Our platform provides advanced trading features, portfolio management, and automated investment strategies for cryptocurrency markets.",
      features: [
        "Cryptocurrency trading platform",
        "Automated investment strategies",
        "Portfolio management and tracking",
        "Real-time market analysis",
        "Risk management tools",
        "Multi-exchange integration",
        "Advanced charting and analytics",
        "Mobile trading applications"
      ],
      technologies: [
        "Vue.js", "Node.js", "MongoDB", "Express.js", "WebSocket",
        "AWS", "Redis", "Docker", "Kubernetes", "Binance API"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.investdrive.com",
      githubUrl: "https://github.com/investdrive",
      liveUrl: "https://investdrive.com"
    },
    'quotora-live-trading-market-analysis-portfolio-watching-list-subscriptions': {
      title: "Quotora - Live Trading, Market Analysis, Portfolio, Watching List, Subscriptions",
      category: "Finance",
      tags: ["Trading", "Market Analysis", "Portfolio", "Subscriptions"],
      description: "Comprehensive live trading platform with market analysis, portfolio management, watch lists, and subscription-based premium features.",
      status: "41 Sales",
      price: "$625 – $1,250",
      slug: "quotora-live-trading-market-analysis-portfolio-watching-list-subscriptions",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop&crop=center",
      overview: "Quotora is a comprehensive live trading platform that combines real-time market analysis, portfolio management, and advanced watch list functionality. Our platform offers subscription-based premium features for serious traders and investors.",
      features: [
        "Live trading and execution",
        "Real-time market analysis",
        "Advanced portfolio management",
        "Custom watch lists and alerts",
        "Subscription-based premium features",
        "Advanced charting tools",
        "Risk management and stop-loss",
        "Multi-asset trading support"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express.js", "Socket.io",
        "AWS", "Redis", "Docker", "Kubernetes", "Trading APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.quotora.com",
      githubUrl: "https://github.com/quotora",
      liveUrl: "https://quotora.com"
    },
    'capturepay-start-your-own-secure-online-payment-gateway': {
      title: "CapturePay - Start your own Secure Online Payment Gateway",
      category: "Finance",
      tags: ["Payment Gateway", "Secure Payments", "PCI Compliance"],
      description: "Complete secure online payment gateway solution allowing businesses to start their own payment processing platform.",
      status: "12 Sales",
      price: "$875 – $1,500",
      slug: "capturepay-start-your-own-secure-online-payment-gateway",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "CapturePay is a complete secure online payment gateway solution that enables businesses to start their own payment processing platform. Our solution provides PCI-compliant payment processing with advanced security features and comprehensive merchant tools.",
      features: [
        "PCI DSS compliant payment processing",
        "Multi-currency support",
        "Advanced fraud detection",
        "Merchant dashboard and analytics",
        "API integration and SDKs",
        "Recurring payment support",
        "Mobile payment processing",
        "Real-time transaction monitoring"
      ],
      technologies: [
        "Angular", "Node.js", "PostgreSQL", "Express.js", "TypeScript",
        "AWS", "Redis", "Docker", "Kubernetes", "Stripe API"
      ],
      pricing: "$875 – $1,500",
      demoUrl: "https://demo.capturepay.com",
      githubUrl: "https://github.com/capturepay",
      liveUrl: "https://capturepay.com"
    },
    'swipebank-online-internet-banking-with-account-loans-dsp-nbfc-banks': {
      title: "SwipeBank - Online Internet Banking With Account, Loans, DSP for NBFC & Banks",
      category: "Finance",
      tags: ["Internet Banking", "NBFC", "Banks", "DSP"],
      description: "Complete online internet banking solution with account management, loans, and DSP features for NBFC and banks like ICICI, HDFC.",
      status: "1 Sale",
      price: "$1,750 – $2,500",
      slug: "swipebank-online-internet-banking-with-account-loans-dsp-nbfc-banks",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",
      overview: "SwipeBank is a comprehensive online internet banking solution designed for NBFCs and banks. Our platform provides complete account management, loan processing, and DSP (Deposit Pension Scheme) features similar to major banks like ICICI and HDFC.",
      features: [
        "Complete internet banking platform",
        "Account management and transactions",
        "Loan application and processing",
        "DSP (Deposit Pension Scheme) management",
        "Multi-bank integration support",
        "Advanced security and authentication",
        "Mobile banking applications",
        "Real-time transaction processing"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express.js", "Microservices",
        "AWS", "Redis", "Docker", "Kubernetes", "Banking APIs"
      ],
      pricing: "$1,750 – $2,500",
      demoUrl: "https://demo.swipebank.com",
      githubUrl: "https://github.com/swipebank",
      liveUrl: "https://swipebank.com"
    },
    // Directory/Companies Products
    'city-listing-classified-ads-website-mobile-app-olx-quikr-craigslist-clone': {
      title: "City Listing – Classified Ads Website and Mobile app – OLX, Quikr, Craigslist Clone",
      category: "Directory",
      tags: ["Directory", "eCommerce", "Classified Ads", "Mobile Apps"],
      description: "A comprehensive classified ads platform similar to OLX, Quikr, and Craigslist with website and mobile app functionality for buying and selling various items.",
      status: "66 Sales",
      price: "$875 – $1,125",
      slug: "city-listing-classified-ads-website-mobile-app-olx-quikr-craigslist-clone",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "City Listing is a comprehensive classified ads platform that replicates the functionality of popular platforms like OLX, Quikr, and Craigslist. Our platform provides a seamless marketplace experience for buying and selling various items with advanced search, filtering, and mobile app support.",
      features: [
        "Advanced search and filtering system",
        "Mobile apps for iOS and Android",
        "User verification and rating system",
        "Real-time chat and messaging",
        "Photo and video upload support",
        "Location-based listings",
        "Payment integration and escrow",
        "Admin dashboard and analytics"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express.js",
        "AWS", "Socket.io", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$875 – $1,125",
      demoUrl: "https://demo.citylisting.com",
      githubUrl: "https://github.com/citylisting",
      liveUrl: "https://citylisting.com"
    },
    'fantica-premium-content-creators-saas-platform-onlyfans-clone': {
      title: "Fantica – Premium Content Creators SaaS platform, Onlyfans Clone",
      category: "Directory",
      tags: ["Digital Marketing", "Directory", "SAAS", "Social"],
      description: "Premium content creators SaaS platform similar to Onlyfans with subscription-based content monetization and creator management tools.",
      status: "56 Sales",
      price: "$625 – $1,250",
      slug: "fantica-premium-content-creators-saas-platform-onlyfans-clone",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&crop=center",
      overview: "Fantica is a comprehensive SaaS platform designed for premium content creators, similar to Onlyfans. Our platform enables creators to monetize their content through subscriptions, tips, and exclusive content while providing advanced management tools and analytics.",
      features: [
        "Subscription-based content monetization",
        "Creator dashboard and analytics",
        "Payment processing and payout management",
        "Content management and scheduling",
        "Fan interaction and messaging",
        "Live streaming capabilities",
        "Content protection and DRM",
        "Multi-platform content distribution"
      ],
      technologies: [
        "Vue.js", "Node.js", "MongoDB", "Express.js", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.fantica.com",
      githubUrl: "https://github.com/fantica",
      liveUrl: "https://fantica.com"
    },
    'urban-better-home-services-business-listing-handyman-booking-app': {
      title: "Urban Better – Home Services, Business Listing, Handyman Booking App",
      category: "Directory",
      tags: ["Directory", "eCommerce", "Home Services", "Booking"],
      description: "Complete home services platform with business listings and handyman booking functionality for various home improvement services.",
      status: "30 Sales",
      price: "$700 – $1,875",
      slug: "urban-better-home-services-business-listing-handyman-booking-app",
      image: "https://images.unsplash.com/photo-1581578731548-c6d0f3e4e94f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1581578731548-c6d0f3e4e94f?w=1200&h=600&fit=crop&crop=center",
      overview: "Urban Better is a comprehensive home services platform that connects homeowners with trusted service providers. Our platform offers business listings, booking management, and service tracking for various home improvement and maintenance services.",
      features: [
        "Service provider business listings",
        "Online booking and scheduling",
        "Real-time service tracking",
        "Customer reviews and ratings",
        "Payment processing and invoicing",
        "Service provider verification",
        "Mobile app for customers and providers",
        "Service history and management"
      ],
      technologies: [
        "React", "React Native", "Node.js", "PostgreSQL", "Express.js",
        "AWS", "Stripe", "Google Maps API", "Redis", "Docker"
      ],
      pricing: "$700 – $1,875",
      demoUrl: "https://demo.urbanbetter.com",
      githubUrl: "https://github.com/urbanbetter",
      liveUrl: "https://urbanbetter.com"
    },
    'binnic-business-suite': {
      title: "Binnic – Business Suite",
      category: "Directory",
      tags: ["Directory", "eCommerce", "Business Management"],
      description: "Comprehensive business suite platform providing directory services and eCommerce solutions for businesses of all sizes.",
      status: "25 Sales",
      price: "$625 – $1,250",
      slug: "binnic-business-suite",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "Binnic is a comprehensive business suite platform that provides directory services and eCommerce solutions for businesses of all sizes. Our platform combines business listing, customer management, and eCommerce functionality in one unified solution.",
      features: [
        "Business directory and listing management",
        "eCommerce storefront creation",
        "Customer relationship management",
        "Inventory and order management",
        "Payment processing integration",
        "Analytics and reporting dashboard",
        "Multi-vendor marketplace support",
        "Mobile-responsive design"
      ],
      technologies: [
        "Angular", "Node.js", "MongoDB", "Express.js", "TypeScript",
        "AWS", "Stripe", "Redis", "Docker", "Kubernetes"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.binnic.com",
      githubUrl: "https://github.com/binnic",
      liveUrl: "https://binnic.com"
    },
    // eCommerce Products
    'grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone': {
      title: "Grocery Space – Grocery Multi-Store with Customer, Store and Driver apps – BigBasket Clone",
      category: "eCommerce",
      tags: ["eCommerce", "Grocery", "Mobile Apps", "Multi-Store"],
      description: "Complete grocery delivery platform with customer, store, and driver apps - BigBasket clone with multi-store management capabilities.",
      status: "120 Sales",
      price: "$1,125 – $1,875",
      slug: "grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",
      overview: "Grocery Space is a comprehensive grocery delivery platform that replicates the functionality of BigBasket. It features separate applications for customers, store owners, and delivery drivers, enabling a complete multi-store grocery ecosystem with real-time inventory management and efficient delivery tracking.",
      features: [
        "Multi-store management system",
        "Customer mobile app with ordering",
        "Store owner dashboard",
        "Driver delivery app",
        "Real-time inventory tracking",
        "Payment gateway integration",
        "Order tracking and notifications",
        "Admin panel for management"
      ],
      technologies: [
        "React Native", "Node.js", "Express", "MongoDB", "Firebase",
        "Stripe", "Google Maps API", "AWS", "Docker", "Redis"
      ],
      pricing: "$1,125 – $1,875",
      demoUrl: "https://demo.groceryspace.com",
      githubUrl: "https://github.com/groceryspace",
      liveUrl: "https://groceryspace.com"
    },
    'buyyu-fashion-lifestyle-ecommerce-platform-mobileapp': {
      title: "Buyyu – Fashion & Lifestyle eCommerce Platform with Mobileapp",
      category: "eCommerce",
      tags: ["eCommerce", "Fashion", "Lifestyle", "Mobile App"],
      description: "Comprehensive fashion and lifestyle eCommerce platform with mobile app support for modern retail businesses.",
      status: "95 Sales",
      price: "$750 – $1,500",
      slug: "buyyu-fashion-lifestyle-ecommerce-platform-mobileapp",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&crop=center",
      overview: "Buyyu is a modern fashion and lifestyle eCommerce platform designed for contemporary retail businesses. It offers a seamless shopping experience with advanced features like virtual try-ons, size recommendations, and social shopping integration.",
      features: [
        "Advanced product catalog",
        "Mobile app for iOS and Android",
        "Virtual try-on features",
        "Size recommendation engine",
        "Social shopping integration",
        "Multi-vendor support",
        "Advanced search and filters",
        "Wishlist and favorites"
      ],
      technologies: [
        "React", "React Native", "Node.js", "PostgreSQL", "Redis",
        "AWS S3", "Stripe", "Firebase", "Docker", "Kubernetes"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.buyyu.com",
      githubUrl: "https://github.com/buyyu",
      liveUrl: "https://buyyu.com"
    },
    'bunnypay-complete-ecommerce': {
      title: "Bunnypay – Complete eCommerce",
      category: "eCommerce",
      tags: ["eCommerce", "Payment Gateway", "Complete Solution"],
      description: "Complete eCommerce solution with comprehensive features for online retail businesses.",
      status: "90 Sales",
      price: "$625 – $1,250",
      slug: "bunnypay-complete-ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "Bunnypay is a comprehensive eCommerce platform that provides everything needed to start and run an online business. It includes advanced payment processing, inventory management, order tracking, and customer relationship management tools.",
      features: [
        "Integrated payment processing",
        "Inventory management system",
        "Order tracking and fulfillment",
        "Customer management",
        "Analytics and reporting",
        "Multi-currency support",
        "Tax calculation",
        "Shipping integration"
      ],
      technologies: [
        "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap",
        "PayPal", "Stripe", "AWS", "Redis", "Elasticsearch"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.bunnypay.com",
      githubUrl: "https://github.com/bunnypay",
      liveUrl: "https://bunnypay.com"
    },
    'skillsly-ultimate-elearning-website': {
      title: "SkillSly – Ultimate eLearning Website",
      category: "eCommerce",
      tags: ["eCommerce", "Education", "eLearning", "LMS"],
      description: "Comprehensive eLearning platform with course management, student tracking, and educational content delivery.",
      status: "82 Sales",
      price: "$500 – $1,125",
      slug: "skillsly-ultimate-elearning-website",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",
      overview: "SkillSly is an advanced eLearning platform that provides comprehensive tools for creating, managing, and delivering online courses. It features interactive content, progress tracking, and certification management.",
      features: [
        "Course creation and management",
        "Interactive video lessons",
        "Progress tracking",
        "Certification system",
        "Discussion forums",
        "Assignment submission",
        "Quiz and assessment tools",
        "Instructor dashboard"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS S3", "FFmpeg", "Docker", "Redis", "Elasticsearch"
      ],
      pricing: "$500 – $1,125",
      demoUrl: "https://demo.skillsly.com",
      githubUrl: "https://github.com/skillsly",
      liveUrl: "https://skillsly.com"
    },
    'skillbuzz-udemy-clone-online-courses-learning-management-system': {
      title: "Skillbuzz – Udemy Clone – Online Courses and Learning Management System",
      category: "eCommerce",
      tags: ["eCommerce", "Education", "Udemy Clone", "LMS"],
      description: "Complete Udemy clone with online course management, instructor dashboard, and learning management system.",
      status: "72 Sales",
      price: "$750 – $1,500",
      slug: "skillbuzz-udemy-clone-online-courses-learning-management-system",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",
      overview: "Skillbuzz is a comprehensive Udemy clone that replicates all the core functionality of the popular online learning platform. It includes course creation tools, instructor dashboards, student progress tracking, and monetization features.",
      features: [
        "Course creation and publishing",
        "Instructor dashboard",
        "Student progress tracking",
        "Video streaming platform",
        "Payment and revenue sharing",
        "Course reviews and ratings",
        "Discussion forums",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "AWS",
        "Stripe", "FFmpeg", "Docker", "Redis", "Elasticsearch"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.skillbuzz.com",
      githubUrl: "https://github.com/skillbuzz",
      liveUrl: "https://skillbuzz.com"
    },
    // Education Products
    'school-silo-multi-school-management-system': {
      title: "School Silo – Multi-School Management System",
      category: "Education",
      tags: ["Education", "ERP & CRM", "Multi-School", "Management"],
      description: "Comprehensive multi-school management system with advanced features for managing multiple educational institutions from a single platform.",
      status: "89 Sales",
      price: "$625 – $1,250",
      slug: "school-silo-multi-school-management-system",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&crop=center",
      overview: "School Silo is a comprehensive multi-school management system designed to handle the complex needs of educational institutions. It provides centralized management for multiple schools, allowing administrators to oversee operations, track performance, and manage resources efficiently across different campuses.",
      features: [
        "Multi-school dashboard management",
        "Student enrollment and records",
        "Teacher and staff management",
        "Academic calendar and scheduling",
        "Fee management and billing",
        "Library management integration",
        "Transport management",
        "Parent communication portal"
      ],
      technologies: [
        "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap",
        "jQuery", "Chart.js", "AWS", "Redis", "Elasticsearch"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.schoolsilo.com",
      githubUrl: "https://github.com/schoolsilo",
      liveUrl: "https://schoolsilo.com"
    },
    'hostelstead-hostel-room-management-system': {
      title: "Hostelstead – Hostel/Room Management System",
      category: "Education",
      tags: ["Education", "ERP & CRM", "Hostel Management", "Room Booking"],
      description: "Complete hostel and room management system for educational institutions with booking, payment, and maintenance features.",
      status: "76 Sales",
      price: "$625 – $1,250",
      slug: "hostelstead-hostel-room-management-system",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop&crop=center",
      overview: "Hostelstead is a specialized hostel and room management system designed for educational institutions. It streamlines the entire process of hostel management, from room allocation and booking to maintenance tracking and resident management.",
      features: [
        "Room allocation and booking",
        "Resident management system",
        "Payment and fee collection",
        "Maintenance request tracking",
        "Visitor management",
        "Mess and meal management",
        "Security and access control",
        "Reporting and analytics"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "Stripe", "AWS", "Docker", "Redis", "Elasticsearch"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.hostelstead.com",
      githubUrl: "https://github.com/hostelstead",
      liveUrl: "https://hostelstead.com"
    },
    'libraxo-library-management-system-website': {
      title: "Libraxo – Library Management System with Website",
      category: "Education",
      tags: ["Education", "ERP & CRM", "Library Management", "Digital Resources"],
      description: "Advanced library management system with integrated website for book cataloging, borrowing, and digital resource management.",
      status: "73 Sales",
      price: "$625 – $1,250",
      slug: "libraxo-library-management-system-website",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop&crop=center",
      overview: "Libraxo is a comprehensive library management system that combines traditional library operations with modern digital features. It provides complete book cataloging, borrowing management, and digital resource access for educational institutions.",
      features: [
        "Book cataloging and inventory",
        "Borrowing and return management",
        "Digital resource access",
        "Member management system",
        "Fine calculation and collection",
        "Search and discovery tools",
        "Reporting and analytics",
        "Mobile app integration"
      ],
      technologies: [
        "PHP", "Laravel", "MySQL", "JavaScript", "Vue.js",
        "Elasticsearch", "AWS S3", "Redis", "Docker", "API Integration"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.libraxo.com",
      githubUrl: "https://github.com/libraxo",
      liveUrl: "https://libraxo.com"
    },
    'quizmatics-real-money-quiz-game-app': {
      title: "QuizMatics – Real Money Quiz Game/App",
      category: "Education",
      tags: ["Education", "Games", "Quiz App", "Real Money Rewards"],
      description: "Interactive quiz game application with real money rewards, educational content, and gamified learning experience.",
      status: "71 Sales",
      price: "$625 – $1,250",
      slug: "quizmatics-real-money-quiz-game-app",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=600&fit=crop&crop=center",
      overview: "QuizMatics is an innovative quiz game application that combines education with entertainment through real money rewards. It offers a gamified learning experience where users can earn money by answering educational questions correctly.",
      features: [
        "Real money quiz competitions",
        "Educational content categories",
        "Leaderboard and rankings",
        "Daily challenges and rewards",
        "Social sharing features",
        "Payment integration",
        "Admin dashboard",
        "Analytics and reporting"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Socket.io",
        "Stripe", "Firebase", "AWS", "Redis", "Push Notifications"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.quizmatics.com",
      githubUrl: "https://github.com/quizmatics",
      liveUrl: "https://quizmatics.com"
    },
    'schoolroster-school-management-system': {
      title: "SchoolRoster – School Management System",
      category: "Education",
      tags: ["Education", "ERP & CRM", "School Management", "Student Tracking"],
      description: "Comprehensive school management system with student enrollment, academic tracking, and administrative tools.",
      status: "69 Sales",
      price: "$625 – $1,000",
      slug: "schoolroster-school-management-system",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&crop=center",
      overview: "SchoolRoster is a comprehensive school management system designed to streamline administrative processes and enhance educational delivery. It provides complete student lifecycle management from enrollment to graduation.",
      features: [
        "Student enrollment and records",
        "Academic progress tracking",
        "Teacher and staff management",
        "Attendance monitoring",
        "Grade and report card generation",
        "Parent portal access",
        "Fee management system",
        "Communication tools"
      ],
      technologies: [
        "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap",
        "Chart.js", "AWS", "Redis", "Docker", "API Integration"
      ],
      pricing: "$625 – $1,000",
      demoUrl: "https://demo.schoolroster.com",
      githubUrl: "https://github.com/schoolroster",
      liveUrl: "https://schoolroster.com"
    },
    // Entertainment Products
    'juqe-adult-video-platform': {
      title: "Juqe – Adult Video Platform",
      category: "Entertainment",
      tags: ["Entertainment", "Video Platform", "Content Management"],
      description: "Comprehensive adult video platform with advanced features for content creators and viewers with secure payment processing.",
      status: "67 Sales",
      price: "$625 – $1,250",
      slug: "juqe-adult-video-platform",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&crop=center",
      overview: "Juqe is a comprehensive adult video platform designed for content creators and viewers. It provides secure payment processing, content management tools, and advanced features for monetizing adult content with privacy and security as top priorities.",
      features: [
        "Secure payment processing",
        "Content creator dashboard",
        "Video streaming platform",
        "Subscription management",
        "Privacy and security features",
        "Content moderation tools",
        "Analytics and reporting",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "AWS",
        "Stripe", "CloudFront", "Redis", "Docker", "SSL"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.juqe.com",
      githubUrl: "https://github.com/juqe",
      liveUrl: "https://juqe.com"
    },
    'tokito-android-ios-media-app-creating-sharing-short-videos-tiktok-moj-clone': {
      title: "Tokito – Android & iOS media app for creating and sharing short videos – Tiktok, Moj Clone",
      category: "Entertainment",
      tags: ["Entertainment", "Social Media", "Mobile Apps", "Video Creation"],
      description: "Complete TikTok and Moj clone with Android and iOS apps for creating, editing, and sharing short videos with social features.",
      status: "66 Sales",
      price: "$625 – $1,375",
      slug: "tokito-android-ios-media-app-creating-sharing-short-videos-tiktok-moj-clone",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",
      overview: "Tokito is a complete TikTok and Moj clone that replicates all the core functionality of these popular short video platforms. It includes video creation tools, editing features, social interactions, and comprehensive mobile applications for both Android and iOS.",
      features: [
        "Video creation and editing tools",
        "Android and iOS mobile apps",
        "Social sharing and interaction",
        "Algorithm-based content discovery",
        "Live streaming capabilities",
        "Music and sound integration",
        "Filters and effects",
        "User profiles and following system"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "AWS",
        "FFmpeg", "Socket.io", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$625 – $1,375",
      demoUrl: "https://demo.tokito.com",
      githubUrl: "https://github.com/tokito",
      liveUrl: "https://tokito.com"
    },
    'nexagram-instagram-clone-image-photo-sharing-social-network-platform': {
      title: "Nexagram – Instagram Clone – Image & Photo Sharing Social Network Platform",
      category: "Entertainment",
      tags: ["Entertainment", "Social", "Image Sharing", "Photo Platform"],
      description: "Complete Instagram clone with image and photo sharing capabilities, stories, reels, and social networking features.",
      status: "38 Sales",
      price: "$750 – $1,500",
      slug: "nexagram-instagram-clone-image-photo-sharing-social-network-platform",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",
      overview: "Nexagram is a comprehensive Instagram clone that replicates all the core features of the popular photo-sharing platform. It includes image sharing, stories, reels, direct messaging, and all the social networking features that make Instagram successful.",
      features: [
        "Photo and image sharing",
        "Stories and reels functionality",
        "Direct messaging system",
        "User profiles and following",
        "Hashtag and discovery features",
        "Live streaming capabilities",
        "Shopping integration",
        "Mobile app support"
      ],
      technologies: [
        "React", "React Native", "Node.js", "PostgreSQL", "AWS S3",
        "Socket.io", "Redis", "Docker", "Elasticsearch", "Push Notifications"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.nexagram.com",
      githubUrl: "https://github.com/nexagram",
      liveUrl: "https://nexagram.com"
    },
    'janoo-dating-platform-like-tinder-badoo': {
      title: "Janoo – Dating Platform like Tinder/Badoo",
      category: "Entertainment",
      tags: ["Dating", "Entertainment", "Social", "Mobile Apps"],
      description: "Modern dating platform similar to Tinder and Badoo with advanced matching algorithms and social features.",
      status: "11 Sales",
      price: "$625 – $1,250",
      slug: "janoo-dating-platform-like-tinder-badoo",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",
      overview: "Janoo is a modern dating platform that combines the best features of Tinder and Badoo. It offers advanced matching algorithms, social features, and comprehensive mobile applications for connecting people worldwide.",
      features: [
        "Advanced matching algorithms",
        "Swipe-based interface",
        "Profile verification system",
        "Chat and messaging features",
        "Location-based matching",
        "Premium subscription features",
        "Safety and security tools",
        "Mobile app for iOS and Android"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.janoo.com",
      githubUrl: "https://github.com/janoo",
      liveUrl: "https://janoo.com"
    },
    'bubblejug-tiktok-clone-short-video-app-live-streaming-app-complete-solution': {
      title: "BubbleJug – Tiktok Clone – Short Video App Live streaming App Complete Solution",
      category: "Entertainment",
      tags: ["Entertainment", "Social", "Video Platform", "Live Streaming"],
      description: "Complete TikTok clone with short video creation, live streaming capabilities, and comprehensive social features.",
      status: "New",
      price: "$750 – $1,500",
      slug: "bubblejug-tiktok-clone-short-video-app-live-streaming-app-complete-solution",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",
      overview: "BubbleJug is a comprehensive TikTok clone that includes all the features of the popular short video platform plus advanced live streaming capabilities. It provides a complete solution for creating, sharing, and monetizing short video content.",
      features: [
        "Short video creation and editing",
        "Live streaming platform",
        "Social interaction features",
        "Content discovery algorithm",
        "Monetization tools",
        "Music and sound integration",
        "Filters and effects library",
        "Mobile app development"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "WebRTC",
        "FFmpeg", "Socket.io", "AWS", "Redis", "Docker"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.bubblejug.com",
      githubUrl: "https://github.com/bubblejug",
      liveUrl: "https://bubblejug.com"
    },
    // Games Products
    'hpl11-dream-11-clone-fantasy-app': {
      title: "HPL11- Dream 11 Clone Fantasy App",
      category: "Games",
      tags: ["Games", "Fantasy Sports", "Mobile Apps"],
      description: "Complete Dream11 clone fantasy sports platform with team creation, contests, and real money rewards.",
      status: "42 Sales",
      price: "$1,250 – $1,500",
      slug: "hpl11-dream-11-clone-fantasy-app",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center",
      overview: "HPL11 is a comprehensive Dream11 clone that replicates all the core functionality of the popular fantasy sports platform. It includes team creation, player selection, contests, real money rewards, and comprehensive mobile applications for both Android and iOS.",
      features: [
        "Fantasy team creation",
        "Player selection and management",
        "Multiple contest types",
        "Real money rewards system",
        "Live score updates",
        "Leaderboard and rankings",
        "Payment integration",
        "Mobile app for iOS and Android"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$1,250 – $1,500",
      demoUrl: "https://demo.hpl11.com",
      githubUrl: "https://github.com/hpl11",
      liveUrl: "https://hpl11.com"
    },
    'ludo-hg-ludo-tournament-betting': {
      title: "Ludo HG – Ludo Tournament Betting",
      category: "Games",
      tags: ["Games", "Tournament", "Betting", "Multiplayer"],
      description: "Ludo tournament platform with betting features, multiplayer gameplay, and tournament management system.",
      status: "26 Sales",
      price: "$1,000 – $1,750",
      slug: "ludo-hg-ludo-tournament-betting",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=600&fit=crop&crop=center",
      overview: "Ludo HG is a comprehensive Ludo tournament platform that combines classic Ludo gameplay with modern betting features. It offers multiplayer tournaments, real money betting, and advanced tournament management capabilities.",
      features: [
        "Multiplayer Ludo gameplay",
        "Tournament management system",
        "Real money betting features",
        "Player ranking system",
        "Live game streaming",
        "Payment integration",
        "Admin dashboard",
        "Mobile app support"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Socket.io",
        "WebRTC", "Stripe", "AWS", "Redis", "Docker"
      ],
      pricing: "$1,000 – $1,750",
      demoUrl: "https://demo.ludohg.com",
      githubUrl: "https://github.com/ludohg",
      liveUrl: "https://ludohg.com"
    },
    'fortunefantasy-online-betting-platform-1xbet-clone': {
      title: "FortuneFantasy – Online Betting Platform – 1xBet Clone",
      category: "Games",
      tags: ["Games", "Betting Platform", "Sports Betting", "Casino"],
      description: "Complete 1xBet clone online betting platform with sports betting, casino games, and comprehensive betting features.",
      status: "4 Sales",
      price: "$1,000 – $1,250",
      slug: "fortunefantasy-online-betting-platform-1xbet-clone",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center",
      overview: "FortuneFantasy is a comprehensive 1xBet clone that replicates all the core functionality of the popular online betting platform. It includes sports betting, casino games, live betting, and comprehensive user management features.",
      features: [
        "Sports betting platform",
        "Live betting features",
        "Casino games integration",
        "User account management",
        "Payment and withdrawal system",
        "Live streaming integration",
        "Mobile app support",
        "Admin panel for management"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "WebRTC"
      ],
      pricing: "$1,000 – $1,250",
      demoUrl: "https://demo.fortunefantasy.com",
      githubUrl: "https://github.com/fortunefantasy",
      liveUrl: "https://fortunefantasy.com"
    },
    'online-rival-online-competition-platform': {
      title: "Online Rival-Online Competition Platform",
      category: "Games",
      tags: ["Games", "Competition", "Tournament", "Leaderboard"],
      description: "Comprehensive online competition platform with tournaments, leaderboards, and competitive gaming features.",
      status: "New",
      price: "$1,000 – $1,750",
      slug: "online-rival-online-competition-platform",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=600&fit=crop&crop=center",
      overview: "Online Rival is a comprehensive competition platform that enables users to participate in various online tournaments and competitions. It features advanced leaderboard systems, tournament management, and competitive gaming features.",
      features: [
        "Tournament creation and management",
        "Leaderboard and ranking system",
        "Competition categories",
        "Real-time scoring",
        "User profiles and achievements",
        "Prize distribution system",
        "Mobile app support",
        "Admin dashboard"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Redis", "Docker", "Elasticsearch", "Push Notifications"
      ],
      pricing: "$1,000 – $1,750",
      demoUrl: "https://demo.onlinerival.com",
      githubUrl: "https://github.com/onlinerival",
      liveUrl: "https://onlinerival.com"
    },
    'quizzity-ai-powered-quiz-generator': {
      title: "Quizzity – AI Powered Quiz Generator",
      category: "Games",
      tags: ["Education", "Games", "AI", "Quiz Generation"],
      description: "AI-powered quiz generation platform with automated question creation and intelligent quiz management.",
      status: "New",
      price: "$625 – $1,250",
      slug: "quizzity-ai-powered-quiz-generator",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=600&fit=crop&crop=center",
      overview: "Quizzity is an innovative AI-powered quiz generation platform that automatically creates engaging quizzes using artificial intelligence. It features intelligent question generation, adaptive difficulty levels, and comprehensive quiz management tools.",
      features: [
        "AI-powered question generation",
        "Adaptive difficulty levels",
        "Multiple quiz formats",
        "Content categorization",
        "Performance analytics",
        "User progress tracking",
        "Mobile app support",
        "Admin dashboard"
      ],
      technologies: [
        "React", "Node.js", "Python", "TensorFlow", "MongoDB",
        "Express", "AWS", "Redis", "Docker", "Machine Learning APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.quizzity.com",
      githubUrl: "https://github.com/quizzity",
      liveUrl: "https://quizzity.com"
    },
    // Grocery Products
    'farm-grocery-ecommerce-grocery-food-pharmacy-android-apps': {
      title: "Farm Grocery- Ecommerce for Grocery, Food, Pharmacy with Android Apps",
      category: "Grocery",
      tags: ["eCommerce", "Grocery", "Food", "Pharmacy", "Mobile Apps"],
      description: "Complete grocery eCommerce platform for food, pharmacy, and grocery items with dedicated Android applications.",
      status: "59 Sales",
      price: "$1,125 – $1,375",
      slug: "farm-grocery-ecommerce-grocery-food-pharmacy-android-apps",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",
      overview: "Farm Grocery is a comprehensive eCommerce platform specifically designed for grocery, food, and pharmacy items. It features dedicated Android applications for customers and store owners, providing a complete solution for online grocery shopping and delivery.",
      features: [
        "Grocery and food catalog management",
        "Pharmacy integration",
        "Android mobile applications",
        "Real-time inventory tracking",
        "Delivery management system",
        "Payment gateway integration",
        "Customer order tracking",
        "Store owner dashboard"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Android SDK",
        "Stripe", "AWS", "Redis", "Docker", "Google Maps API"
      ],
      pricing: "$1,125 – $1,375",
      demoUrl: "https://demo.farmgrocery.com",
      githubUrl: "https://github.com/farmgrocery",
      liveUrl: "https://farmgrocery.com"
    },
    'berrydairy-grocery-daily-milk-delivery-mobile-app-subscription-customer-delivery-app': {
      title: "BerryDairy – Grocery, Daily Milk Delivery Mobile App with Subscription | Customer & Delivery App",
      category: "Grocery",
      tags: ["eCommerce", "Grocery", "Dairy", "Subscription", "Mobile Apps"],
      description: "Specialized dairy delivery platform with subscription-based milk delivery, customer and delivery apps for daily grocery needs.",
      status: "New",
      price: "$1,125 – $1,875",
      slug: "berrydairy-grocery-daily-milk-delivery-mobile-app-subscription-customer-delivery-app",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",
      overview: "BerryDairy is a specialized dairy delivery platform that focuses on daily milk delivery with subscription-based services. It provides customer and delivery apps for managing daily grocery needs, particularly dairy products, with automated delivery scheduling.",
      features: [
        "Daily milk delivery system",
        "Subscription management",
        "Customer mobile app",
        "Delivery driver app",
        "Automated scheduling",
        "Payment and billing system",
        "Quality tracking",
        "Customer support system"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Firebase",
        "Stripe", "AWS", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$1,125 – $1,875",
      demoUrl: "https://demo.berrydairy.com",
      githubUrl: "https://github.com/berrydairy",
      liveUrl: "https://berrydairy.com"
    },
    'dixiedaily-dunzo-clone-multivendor-food-grocery-ecommerce-parcel-pharmacy-delivery-website-3-mobile-apps-customer-store-driver-apps': {
      title: "DixieDaily- Dunzo Clone – Multivendor Food, Grocery, eCommerce, Parcel, Pharmacy Delivery Website & 3 Mobile apps (Customer, Store, Driver apps)",
      category: "Grocery",
      tags: ["Directory", "eCommerce", "Grocery", "Restaurant", "Multivendor"],
      description: "Complete Dunzo clone with multivendor support for food, grocery, eCommerce, parcel, and pharmacy delivery with dedicated mobile apps.",
      status: "New",
      price: "$1,125 – $1,875",
      slug: "dixiedaily-dunzo-clone-multivendor-food-grocery-ecommerce-parcel-pharmacy-delivery-website-3-mobile-apps-customer-store-driver-apps",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",
      overview: "DixieDaily is a comprehensive Dunzo clone that provides multivendor support for food, grocery, eCommerce, parcel, and pharmacy delivery services. It includes a complete website and three dedicated mobile applications for customers, stores, and delivery drivers.",
      features: [
        "Multivendor marketplace platform",
        "Food and grocery delivery",
        "Parcel and pharmacy delivery",
        "Customer mobile app",
        "Store owner mobile app",
        "Driver delivery app",
        "Real-time tracking system",
        "Payment integration"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express",
        "Socket.io", "AWS", "Stripe", "Redis", "Docker"
      ],
      pricing: "$1,125 – $1,875",
      demoUrl: "https://demo.dixiedaily.com",
      githubUrl: "https://github.com/dixiedaily",
      liveUrl: "https://dixiedaily.com"
    },
    // HealthCare Products
    'healthy-web-hospital-management-system': {
      title: "Healthy Web – Hospital Management System",
      category: "HealthCare",
      tags: ["ERP & CRM", "HealthCare", "Hospital Management"],
      description: "Comprehensive hospital management system with patient records, appointment scheduling, billing, and administrative tools.",
      status: "96 Sales",
      price: "$625 – $1,250",
      slug: "healthy-web-hospital-management-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center",
      overview: "Healthy Web is a comprehensive hospital management system designed to streamline healthcare operations. It provides complete patient management, appointment scheduling, billing systems, and administrative tools for modern healthcare facilities.",
      features: [
        "Patient record management",
        "Appointment scheduling system",
        "Billing and payment processing",
        "Staff management",
        "Inventory tracking",
        "Medical history tracking",
        "Report generation",
        "Multi-department support"
      ],
      technologies: [
        "PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap",
        "Chart.js", "AWS", "Redis", "Docker", "API Integration"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.healthyweb.com",
      githubUrl: "https://github.com/healthyweb",
      liveUrl: "https://healthyweb.com"
    },
    'phroma-pharmacy-management-system': {
      title: "Phroma – Pharmacy Management System",
      category: "HealthCare",
      tags: ["ERP & CRM", "HealthCare", "Pharmacy Management"],
      description: "Complete pharmacy management system with inventory tracking, prescription management, and customer billing.",
      status: "55 Sales",
      price: "$625 – $1,250",
      slug: "phroma-pharmacy-management-system",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=600&fit=crop&crop=center",
      overview: "Phroma is a comprehensive pharmacy management system designed to handle all aspects of pharmacy operations. It includes inventory management, prescription processing, customer billing, and regulatory compliance features.",
      features: [
        "Inventory management system",
        "Prescription processing",
        "Customer billing and payments",
        "Drug interaction checking",
        "Expiry date tracking",
        "Supplier management",
        "Sales reporting",
        "Regulatory compliance"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "Stripe", "AWS", "Redis", "Docker", "Pharmacy APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.phroma.com",
      githubUrl: "https://github.com/phroma",
      liveUrl: "https://phroma.com"
    },
    'doctor-corps-hospital-management-system': {
      title: "Doctor Corps- Hospital Management System",
      category: "HealthCare",
      tags: ["ERP & CRM", "HealthCare", "Hospital Management"],
      description: "Advanced hospital management system with doctor scheduling, patient management, and comprehensive healthcare administration.",
      status: "52 Sales",
      price: "$625 – $1,250",
      slug: "doctor-corps-hospital-management-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center",
      overview: "Doctor Corps is an advanced hospital management system specifically designed for comprehensive healthcare administration. It provides doctor scheduling, patient management, and complete healthcare facility management capabilities.",
      features: [
        "Doctor scheduling and management",
        "Patient admission and discharge",
        "Medical record management",
        "Billing and insurance processing",
        "Staff scheduling",
        "Equipment management",
        "Emergency room management",
        "Analytics and reporting"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Healthcare APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.doctorcorps.com",
      githubUrl: "https://github.com/doctorcorps",
      liveUrl: "https://doctorcorps.com"
    },
    'hospitalcore-complete-saas-hospital-management-system': {
      title: "Hospitalcore – Complete SAAS Hospital management system",
      category: "HealthCare",
      tags: ["B2B", "HealthCare", "SAAS", "Hospital Management"],
      description: "Complete SaaS-based hospital management system with cloud-based deployment and comprehensive healthcare management features.",
      status: "51 Sales",
      price: "$625 – $1,250",
      slug: "hospitalcore-complete-saas-hospital-management-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center",
      overview: "Hospitalcore is a complete SaaS-based hospital management system that provides cloud-based deployment and comprehensive healthcare management features. It offers scalable solutions for healthcare organizations of all sizes.",
      features: [
        "Cloud-based deployment",
        "Multi-tenant architecture",
        "Patient management system",
        "Electronic health records",
        "Billing and revenue management",
        "Staff management",
        "Mobile app support",
        "API integration"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "AWS",
        "Docker", "Kubernetes", "Redis", "Microservices", "Healthcare APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.hospitalcore.com",
      githubUrl: "https://github.com/hospitalcore",
      liveUrl: "https://hospitalcore.com"
    },
    'all-healed-diagnostic-pathology-lab-management-system': {
      title: "All Healed – Diagnostic/Pathology lab Management System",
      category: "HealthCare",
      tags: ["ERP & CRM", "HealthCare", "Lab Management"],
      description: "Specialized diagnostic and pathology lab management system with test tracking, report generation, and patient management.",
      status: "38 Sales",
      price: "$625 – $1,250",
      slug: "all-healed-diagnostic-pathology-lab-management-system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center",
      overview: "All Healed is a specialized diagnostic and pathology lab management system designed to streamline laboratory operations. It provides comprehensive test tracking, automated report generation, and patient management capabilities.",
      features: [
        "Test sample tracking",
        "Automated report generation",
        "Patient management",
        "Lab equipment management",
        "Quality control tracking",
        "Billing and invoicing",
        "Integration with hospital systems",
        "Mobile app for technicians"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Python",
        "AWS", "Redis", "Docker", "Lab Equipment APIs", "Report Generation"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.allhealed.com",
      githubUrl: "https://github.com/allhealed",
      liveUrl: "https://allhealed.com"
    },
    // Human Resource Products
    'hr-logics-hrm-payroll-project-management': {
      title: "HR Logics – HRM, Payroll & Project Management",
      category: "Human Resource",
      tags: ["ERP & CRM", "Human Resource", "Payroll", "Project Management"],
      description: "Comprehensive HR management system with payroll processing, project management, and employee administration tools.",
      status: "86 Sales",
      price: "$750 – $1,375",
      slug: "hr-logics-hrm-payroll-project-management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      overview: "HR Logics is a comprehensive human resource management system that combines HRM, payroll processing, and project management capabilities. It provides complete employee lifecycle management, automated payroll processing, and project tracking tools for modern organizations.",
      features: [
        "Employee management system",
        "Automated payroll processing",
        "Project management tools",
        "Time and attendance tracking",
        "Performance management",
        "Leave management",
        "Benefits administration",
        "Reporting and analytics"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Payroll APIs"
      ],
      pricing: "$750 – $1,375",
      demoUrl: "https://demo.hrlogics.com",
      githubUrl: "https://github.com/hrlogics",
      liveUrl: "https://hrlogics.com"
    },
    'bold-jobs-freelancer-job-board-system': {
      title: "Bold Jobs – Freelancer Job Board System",
      category: "Human Resource",
      tags: ["Human Resource", "Job Board", "Freelancing"],
      description: "Complete freelancer job board system connecting employers with skilled freelancers across various industries.",
      status: "73 Sales",
      price: "$625 – $1,250",
      slug: "bold-jobs-freelancer-job-board-system",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      overview: "Bold Jobs is a comprehensive freelancer job board system designed to connect employers with skilled freelancers across various industries. It provides advanced matching algorithms, project management tools, and secure payment processing.",
      features: [
        "Job posting and management",
        "Freelancer profiles and portfolios",
        "Advanced search and filtering",
        "Project management tools",
        "Secure payment processing",
        "Rating and review system",
        "Communication tools",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Search APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.boldjobs.com",
      githubUrl: "https://github.com/boldjobs",
      liveUrl: "https://boldjobs.com"
    },
    'recruitrabbit-saas-human-resource-management': {
      title: "Recruitrabbit – SAAS Human Resource Management",
      category: "Human Resource",
      tags: ["Human Resource", "SAAS", "Cloud HR"],
      description: "SaaS-based human resource management platform with cloud deployment and comprehensive HR tools.",
      status: "71 Sales",
      price: "$625 – $1,250",
      slug: "recruitrabbit-saas-human-resource-management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      overview: "Recruitrabbit is a modern SaaS-based human resource management platform that provides cloud deployment and comprehensive HR tools. It offers scalable solutions for organizations of all sizes with advanced recruitment and employee management features.",
      features: [
        "Cloud-based deployment",
        "Employee database management",
        "Recruitment and hiring tools",
        "Performance management",
        "Payroll integration",
        "Time tracking",
        "Mobile app support",
        "API integration"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "AWS",
        "Docker", "Kubernetes", "Redis", "Microservices", "HR APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.recruitrabbit.com",
      githubUrl: "https://github.com/recruitrabbit",
      liveUrl: "https://recruitrabbit.com"
    },
    'resumesy-complete-saas-resume-builder': {
      title: "Resumesy – Complete SAAS Resume Builder",
      category: "Human Resource",
      tags: ["Human Resource", "SAAS", "Resume Builder"],
      description: "Complete SaaS resume builder platform with professional templates, ATS optimization, and career tools.",
      status: "58 Sales",
      price: "$625 – $1,250",
      slug: "resumesy-complete-saas-resume-builder",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      overview: "Resumesy is a comprehensive SaaS resume builder platform that provides professional templates, ATS optimization, and career development tools. It helps job seekers create compelling resumes that pass through applicant tracking systems.",
      features: [
        "Professional resume templates",
        "ATS optimization",
        "Real-time editing",
        "Multiple format exports",
        "Cover letter builder",
        "Career advice tools",
        "Portfolio integration",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "PDF Generation",
        "AWS", "Redis", "Docker", "Template Engine", "ATS APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.resumesy.com",
      githubUrl: "https://github.com/resumesy",
      liveUrl: "https://resumesy.com"
    },
    'freelance-mall-freelancing-marketplace-platform-upwork-fiverr-clone': {
      title: "Freelance Mall – Freelancing Marketplace Platform – Upwork, Fiverr Clone",
      category: "Human Resource",
      tags: ["Human Resource", "Marketplace", "Freelancing"],
      description: "Complete freelancing marketplace platform similar to Upwork and Fiverr with project management and payment systems.",
      status: "38 Sales",
      price: "$625 – $1,250",
      slug: "freelance-mall-freelancing-marketplace-platform-upwork-fiverr-clone",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&crop=center",
      overview: "Freelance Mall is a comprehensive freelancing marketplace platform that replicates the functionality of Upwork and Fiverr. It provides project management tools, secure payment processing, and advanced matching algorithms for connecting clients with freelancers.",
      features: [
        "Project posting and bidding",
        "Freelancer profiles and portfolios",
        "Secure payment escrow",
        "Project management tools",
        "Communication system",
        "Dispute resolution",
        "Rating and review system",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Payment APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.freelancemall.com",
      githubUrl: "https://github.com/freelancemall",
      liveUrl: "https://freelancemall.com"
    },
    // Matrimony Products
    'futureshaadi-matrimony-web-application-android-ios-app': {
      title: "Futureshaadi- Matrimony Web Application with Android and iOS app",
      category: "Matrimony",
      tags: ["Dating", "Matrimony", "Web App", "Mobile Apps"],
      description: "Complete matrimony web application with dedicated Android and iOS apps featuring advanced matching algorithms and secure communication.",
      status: "73 Sales",
      price: "$750 – $1,500",
      slug: "futureshaadi-matrimony-web-application-android-ios-app",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",
      overview: "Futureshaadi is a comprehensive matrimony web application with dedicated Android and iOS apps. It features advanced matching algorithms, secure communication tools, and comprehensive profile management for modern matrimonial services.",
      features: [
        "Advanced matching algorithms",
        "Secure messaging system",
        "Profile verification",
        "Photo and video sharing",
        "Family integration",
        "Horoscope matching",
        "Privacy controls",
        "Mobile app support"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express",
        "Socket.io", "AWS", "Stripe", "Redis", "Push Notifications"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.futureshaadi.com",
      githubUrl: "https://github.com/futureshaadi",
      liveUrl: "https://futureshaadi.com"
    },
    'rishtey-shaadi-clone-matrimony-android-ios-app': {
      title: "Rishtey – Shaadi Clone Matrimony Android & iOS app",
      category: "Matrimony",
      tags: ["Dating", "Matrimony", "Mobile Apps", "Shaadi Clone"],
      description: "Complete Shaadi clone matrimony platform with Android and iOS applications featuring comprehensive matchmaking and family integration.",
      status: "53 Sales",
      price: "$1,250 – $2,000",
      slug: "rishtey-shaadi-clone-matrimony-android-ios-app",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",
      overview: "Rishtey is a complete Shaadi clone matrimony platform with dedicated Android and iOS applications. It replicates the functionality of popular matrimonial sites with comprehensive matchmaking, family integration, and advanced search features.",
      features: [
        "Comprehensive profile creation",
        "Advanced search filters",
        "Family member profiles",
        "Horoscope compatibility",
        "Photo and document upload",
        "Secure communication",
        "Premium membership features",
        "Mobile app optimization"
      ],
      technologies: [
        "React Native", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$1,250 – $2,000",
      demoUrl: "https://demo.rishtey.com",
      githubUrl: "https://github.com/rishtey",
      liveUrl: "https://rishtey.com"
    },
    // News & Media Products
    'newsshelf-news-portal-android-ios-mobile-apps': {
      title: "Newsshelf – News Portal with Android and iOS Mobile Apps",
      category: "News & Media",
      tags: ["News & Media", "Mobile Apps", "News Portal"],
      description: "Complete news portal platform with dedicated Android and iOS mobile applications featuring real-time news updates and multimedia content.",
      status: "71 Sales",
      price: "$875 – $1,625",
      slug: "newsshelf-news-portal-android-ios-mobile-apps",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&crop=center",
      overview: "Newsshelf is a comprehensive news portal platform with dedicated Android and iOS mobile applications. It provides real-time news updates, multimedia content management, and advanced news distribution capabilities for modern media organizations.",
      features: [
        "Real-time news updates",
        "Multimedia content support",
        "Mobile app optimization",
        "Push notifications",
        "Content categorization",
        "Search functionality",
        "Social media integration",
        "Analytics dashboard"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express",
        "Socket.io", "AWS", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$875 – $1,625",
      demoUrl: "https://demo.newsshelf.com",
      githubUrl: "https://github.com/newsshelf",
      liveUrl: "https://newsshelf.com"
    },
    'indie-news-newspaper-blog-multilingual-news-portal-ai-writer-content-generator': {
      title: "Indie News – Newspaper, Blog Multilingual News Portal (with AI Writer, Content Generator)",
      category: "News & Media",
      tags: ["News & Media", "AI", "Multilingual", "Content Generation"],
      description: "Multilingual news portal with AI-powered content generation, newspaper and blog functionality, and comprehensive media management.",
      status: "New",
      price: "$875 – $1,625",
      slug: "indie-news-newspaper-blog-multilingual-news-portal-ai-writer-content-generator",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&crop=center",
      overview: "Indie News is an innovative multilingual news portal that combines traditional newspaper and blog functionality with AI-powered content generation. It supports multiple languages and provides automated content creation capabilities for modern media organizations.",
      features: [
        "AI-powered content generation",
        "Multilingual support",
        "Newspaper layout design",
        "Blog management system",
        "Content scheduling",
        "SEO optimization",
        "Social media integration",
        "Analytics and reporting"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "AI/ML APIs",
        "AWS", "Docker", "Redis", "Translation APIs", "Content Management"
      ],
      pricing: "$875 – $1,625",
      demoUrl: "https://demo.indienews.com",
      githubUrl: "https://github.com/indienews",
      liveUrl: "https://indienews.com"
    },
    'shortnews-short-news-app-inshorts-clone': {
      title: "Shortnews – Short News App – Inshorts Clone",
      category: "News & Media",
      tags: ["News & Media", "Mobile App", "Inshorts Clone"],
      description: "Complete Inshorts clone application featuring short-form news content, quick updates, and mobile-optimized news consumption.",
      status: "New",
      price: "$875 – $1,625",
      slug: "shortnews-short-news-app-inshorts-clone",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&crop=center",
      overview: "Shortnews is a complete Inshorts clone application that provides short-form news content optimized for mobile consumption. It features quick news updates, swipeable content, and efficient news delivery for busy users who want to stay informed quickly.",
      features: [
        "Short-form news content",
        "Swipeable interface",
        "Quick news updates",
        "Mobile optimization",
        "Category filtering",
        "Bookmark functionality",
        "Social sharing",
        "Push notifications"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Redis", "Docker", "Push Notifications", "Content APIs"
      ],
      pricing: "$875 – $1,625",
      demoUrl: "https://demo.shortnews.com",
      githubUrl: "https://github.com/shortnews",
      liveUrl: "https://shortnews.com"
    },
    // Real Estate Products
    'extraacre-real-estate-portal-multiple-users-android-app': {
      title: "ExtraAcre – Real Estate Portal with Multiple Users with Android App",
      category: "Real Estate",
      tags: ["Real Estate", "Mobile App", "Multi-User"],
      description: "Comprehensive real estate portal supporting multiple user types with dedicated Android application for property management and transactions.",
      status: "51 Sales",
      price: "$375 – $1,000",
      slug: "extraacre-real-estate-portal-multiple-users-android-app",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",
      overview: "ExtraAcre is a comprehensive real estate portal that supports multiple user types including buyers, sellers, agents, and property managers. It features a dedicated Android application for seamless property management and transaction processing.",
      features: [
        "Multi-user role management",
        "Property listing management",
        "Advanced search filters",
        "Android mobile app",
        "Transaction management",
        "Document management",
        "Communication tools",
        "Analytics dashboard"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express",
        "AWS", "Stripe", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$375 – $1,000",
      demoUrl: "https://demo.extraacre.com",
      githubUrl: "https://github.com/extraacre",
      liveUrl: "https://extraacre.com"
    },
    'gigabrick-real-estate-portal-website': {
      title: "GigaBrick – Real Estate Portal Website",
      category: "Real Estate",
      tags: ["Real Estate", "Web Portal", "Property Management"],
      description: "Complete real estate portal website with property listings, search functionality, and comprehensive real estate management features.",
      status: "45 Sales",
      price: "$500 – $1,125",
      slug: "gigabrick-real-estate-portal-website",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",
      overview: "GigaBrick is a complete real estate portal website that provides comprehensive property management features. It includes advanced search functionality, property listings, and complete real estate transaction management.",
      features: [
        "Property listing system",
        "Advanced search and filters",
        "User registration and profiles",
        "Property comparison tools",
        "Virtual tour integration",
        "Mortgage calculator",
        "Contact management",
        "SEO optimization"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Search APIs"
      ],
      pricing: "$500 – $1,125",
      demoUrl: "https://demo.gigabrick.com",
      githubUrl: "https://github.com/gigabrick",
      liveUrl: "https://gigabrick.com"
    },
    'citysquid-innovative-real-estate-investment-platform': {
      title: "Citysquid – Innovative Real Estate Investment Platform",
      category: "Real Estate",
      tags: ["Real Estate", "Investment", "Analytics"],
      description: "Innovative real estate investment platform with advanced analytics, property valuation, and investment management tools.",
      status: "15 Sales",
      price: "$750 – $1,500",
      slug: "citysquid-innovative-real-estate-investment-platform",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",
      overview: "Citysquid is an innovative real estate investment platform that provides advanced analytics, property valuation tools, and comprehensive investment management capabilities for real estate investors.",
      features: [
        "Property valuation tools",
        "Investment analytics",
        "Market trend analysis",
        "Portfolio management",
        "Risk assessment",
        "ROI calculations",
        "Investment recommendations",
        "Financial reporting"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Python",
        "AWS", "Machine Learning", "Redis", "Docker", "Analytics APIs"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.citysquid.com",
      githubUrl: "https://github.com/citysquid",
      liveUrl: "https://citysquid.com"
    },
    'propertyplus-society-property-tenant-maintenance-management-system': {
      title: "PropertyPlus – Society, Property, Tenant and Maintenance Management System",
      category: "Real Estate",
      tags: ["ERP & CRM", "Real Estate", "Tools and Utilities", "Property Management"],
      description: "Comprehensive property management system for societies, properties, tenants, and maintenance with ERP and CRM functionality.",
      status: "4 Sales",
      price: "$625 – $1,250",
      slug: "propertyplus-society-property-tenant-maintenance-management-system",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",
      overview: "PropertyPlus is a comprehensive property management system designed for societies, properties, tenants, and maintenance management. It combines ERP and CRM functionality to provide complete property administration capabilities.",
      features: [
        "Society management",
        "Tenant management",
        "Maintenance tracking",
        "Financial management",
        "Document management",
        "Communication tools",
        "Reporting and analytics",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Property Management APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.propertyplus.com",
      githubUrl: "https://github.com/propertyplus",
      liveUrl: "https://propertyplus.com"
    },
    'realtorstack-real-estate-property-buy-rent-sell-platform': {
      title: "RealtorStack-Real Estate Property Buy-Rent-Sell Platform",
      category: "Real Estate",
      tags: ["Real Estate", "Buy-Rent-Sell", "Transaction Management"],
      description: "Complete real estate platform for buying, renting, and selling properties with comprehensive transaction management.",
      status: "New",
      price: "$750 – $1,500",
      slug: "realtorstack-real-estate-property-buy-rent-sell-platform",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",
      overview: "RealtorStack is a complete real estate platform that facilitates buying, renting, and selling properties. It provides comprehensive transaction management, property listings, and complete real estate operations support.",
      features: [
        "Property buying system",
        "Rental management",
        "Property selling tools",
        "Transaction management",
        "Document processing",
        "Payment integration",
        "Legal compliance",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Real Estate APIs"
      ],
      pricing: "$750 – $1,500",
      demoUrl: "https://demo.realtorstack.com",
      githubUrl: "https://github.com/realtorstack",
      liveUrl: "https://realtorstack.com"
    },
    // Restaurant Products
    'mexicata-complete-restaurant-pos': {
      title: "Mexicata – Complete Restaurant POS",
      category: "Restaurant",
      tags: ["ERP & CRM", "Restaurant", "POS System"],
      description: "Complete restaurant point-of-sale system with comprehensive order management, payment processing, and restaurant operations.",
      status: "64 Sales",
      price: "$625 – $1,250",
      slug: "mexicata-complete-restaurant-pos",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center",
      overview: "Mexicata is a complete restaurant point-of-sale system designed to streamline restaurant operations. It provides comprehensive order management, payment processing, inventory tracking, and complete restaurant management capabilities.",
      features: [
        "Point-of-sale system",
        "Order management",
        "Payment processing",
        "Inventory tracking",
        "Table management",
        "Staff management",
        "Reporting and analytics",
        "Multi-location support"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "POS Hardware Integration"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.mexicata.com",
      githubUrl: "https://github.com/mexicata",
      liveUrl: "https://mexicata.com"
    },
    'food-desk-restaurant-management-software-website': {
      title: "Food Desk – Restaurant Management Software with Website",
      category: "Restaurant",
      tags: ["eCommerce", "Restaurant", "Management Software"],
      description: "Comprehensive restaurant management software with integrated website for online ordering, table management, and restaurant operations.",
      status: "23 Sales",
      price: "$625 – $1,250",
      slug: "food-desk-restaurant-management-software-website",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center",
      overview: "Food Desk is a comprehensive restaurant management software that combines backend operations with an integrated website for online ordering. It provides complete restaurant management including table management, order processing, and customer relations.",
      features: [
        "Restaurant management software",
        "Integrated website",
        "Online ordering system",
        "Table management",
        "Menu management",
        "Customer management",
        "Order tracking",
        "Payment integration"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Restaurant APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.fooddesk.com",
      githubUrl: "https://github.com/fooddesk",
      liveUrl: "https://fooddesk.com"
    },
    'foodinga-zomato-clone-multiple-restaurant-food-ordering-website-customer-merchant-driver-android-ios-apps': {
      title: "Foodinga – Zomato Clone – Multiple Restaurant Food ordering Website with Customer, Merchant and Driver Android and iOS apps",
      category: "Restaurant",
      tags: ["eCommerce", "Restaurant", "Zomato Clone", "Mobile Apps"],
      description: "Complete Zomato clone with multiple restaurant food ordering website and dedicated Android and iOS apps for customers, merchants, and drivers.",
      status: "23 Sales",
      price: "$1,125 – $1,875",
      slug: "foodinga-zomato-clone-multiple-restaurant-food-ordering-website-customer-merchant-driver-android-ios-apps",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center",
      overview: "Foodinga is a complete Zomato clone that replicates the functionality of the popular food delivery platform. It includes a comprehensive website and dedicated Android and iOS apps for customers, restaurant merchants, and delivery drivers.",
      features: [
        "Multi-restaurant platform",
        "Customer mobile app",
        "Merchant management app",
        "Driver delivery app",
        "Real-time order tracking",
        "Payment processing",
        "Restaurant management",
        "Delivery tracking"
      ],
      technologies: [
        "React", "React Native", "Node.js", "MongoDB", "Express",
        "Socket.io", "AWS", "Stripe", "Redis", "Docker", "Push Notifications"
      ],
      pricing: "$1,125 – $1,875",
      demoUrl: "https://demo.foodinga.com",
      githubUrl: "https://github.com/foodinga",
      liveUrl: "https://foodinga.com"
    },
    'trackala-complete-saas-restaurant-management-solution': {
      title: "TrackAla- The Complete SaaS Restaurant Management Solution",
      category: "Restaurant",
      tags: ["ERP & CRM", "Restaurant", "SAAS", "Management Solution"],
      description: "Complete SaaS restaurant management solution with comprehensive features for operations, analytics, and customer management.",
      status: "New",
      price: "$875 – $1,625",
      slug: "trackala-complete-saas-restaurant-management-solution",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center",
      overview: "TrackAla is a complete SaaS restaurant management solution that provides comprehensive features for restaurant operations, analytics, and customer management. It offers cloud-based deployment with scalable solutions for restaurants of all sizes.",
      features: [
        "SaaS cloud deployment",
        "Restaurant operations management",
        "Customer relationship management",
        "Analytics and reporting",
        "Inventory management",
        "Staff scheduling",
        "Multi-location support",
        "API integration"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "AWS",
        "Docker", "Kubernetes", "Redis", "Microservices", "Restaurant APIs"
      ],
      pricing: "$875 – $1,625",
      demoUrl: "https://demo.trackala.com",
      githubUrl: "https://github.com/trackala",
      liveUrl: "https://trackala.com"
    },
    'ordercreator-saas-restaurant-qr-menu-whatsapp-online-ordering-reservation-system': {
      title: "OrderCreator – SaaS Restaurant / QR Menu / WhatsApp Online ordering / Reservation system",
      category: "Restaurant",
      tags: ["ERP & CRM", "Restaurant", "SAAS", "QR Menu", "WhatsApp"],
      description: "SaaS restaurant solution with QR menu, WhatsApp online ordering, and reservation system for modern restaurant operations.",
      status: "New",
      price: "$875 – $1,625",
      slug: "ordercreator-saas-restaurant-qr-menu-whatsapp-online-ordering-reservation-system",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center",
      overview: "OrderCreator is an innovative SaaS restaurant solution that combines QR menu technology, WhatsApp online ordering, and reservation systems. It provides modern, contactless dining experiences with comprehensive restaurant management capabilities.",
      features: [
        "QR code menu system",
        "WhatsApp integration",
        "Online ordering system",
        "Table reservation system",
        "Contactless dining",
        "Order management",
        "Payment processing",
        "Customer notifications"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "WhatsApp API",
        "QR Code Generation", "AWS", "Stripe", "Redis", "Docker"
      ],
      pricing: "$875 – $1,625",
      demoUrl: "https://demo.ordercreator.com",
      githubUrl: "https://github.com/ordercreator",
      liveUrl: "https://ordercreator.com"
    },
    // Travel Products
    'travoila-book-hotels-tours-flights-activities-cabs-complete-travel-portal': {
      title: "Travoila – Book Hotels, Tours, Flights, Activities, Cabs – Complete Travel Portal",
      category: "Travel",
      tags: ["Travel", "Booking Portal", "Multi-Service"],
      description: "Complete travel portal for booking hotels, tours, flights, activities, and cabs with comprehensive travel management features.",
      status: "133 Sales",
      price: "$500 – $1,125",
      slug: "travoila-book-hotels-tours-flights-activities-cabs-complete-travel-portal",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center",
      overview: "Travoila is a comprehensive travel portal that provides complete booking services for hotels, tours, flights, activities, and cabs. It offers a one-stop solution for all travel needs with advanced booking management and customer service features.",
      features: [
        "Hotel booking system",
        "Flight reservation",
        "Tour package booking",
        "Activity booking",
        "Cab booking service",
        "Payment processing",
        "Customer management",
        "Booking management"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Travel APIs"
      ],
      pricing: "$500 – $1,125",
      demoUrl: "https://demo.travoila.com",
      githubUrl: "https://github.com/travoila",
      liveUrl: "https://travoila.com"
    },
    'cargosilo-complete-courier-management-system-domestic-international': {
      title: "CargoSilo- Complete Courier Management System – Domestic and International",
      category: "Travel",
      tags: ["ERP & CRM", "Travel", "Courier Management", "Logistics"],
      description: "Complete courier management system for domestic and international shipping with comprehensive logistics and tracking features.",
      status: "46 Sales",
      price: "$625 – $1,250",
      slug: "cargosilo-complete-courier-management-system-domestic-international",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center",
      overview: "CargoSilo is a comprehensive courier management system designed for both domestic and international shipping operations. It provides complete logistics management, package tracking, and courier operations with advanced features for shipping companies.",
      features: [
        "Domestic shipping management",
        "International shipping",
        "Package tracking system",
        "Route optimization",
        "Delivery management",
        "Customer notifications",
        "Payment processing",
        "Analytics and reporting"
      ],
      technologies: [
        "React", "Node.js", "MongoDB", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Logistics APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.cargosilo.com",
      githubUrl: "https://github.com/cargosilo",
      liveUrl: "https://cargosilo.com"
    },
    'secretbus-bus-reservation-system': {
      title: "SecretBus- Bus Reservation System",
      category: "Travel",
      tags: ["ERP & CRM", "Travel", "Bus Reservation", "Transportation"],
      description: "Complete bus reservation system with seat booking, route management, and comprehensive bus travel operations.",
      status: "34 Sales",
      price: "$625 – $1,250",
      slug: "secretbus-bus-reservation-system",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center",
      overview: "SecretBus is a comprehensive bus reservation system that provides complete bus travel management including seat booking, route management, and bus operations. It offers advanced features for bus operators and passengers.",
      features: [
        "Bus seat booking",
        "Route management",
        "Schedule management",
        "Passenger management",
        "Payment processing",
        "Ticket generation",
        "Bus operator dashboard",
        "Mobile app support"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Transportation APIs"
      ],
      pricing: "$625 – $1,250",
      demoUrl: "https://demo.secretbus.com",
      githubUrl: "https://github.com/secretbus",
      liveUrl: "https://secretbus.com"
    },
    'workcab-complete-taxi-app-taxi-booking-solution': {
      title: "WorkCab- Complete Taxi app | Taxi Booking Solution",
      category: "Travel",
      tags: ["Travel", "Taxi Booking", "Mobile App", "Transportation"],
      description: "Complete taxi booking solution with mobile app for passengers and drivers, real-time tracking, and payment processing.",
      status: "New",
      price: "$1,125 – $1,875",
      slug: "workcab-complete-taxi-app-taxi-booking-solution",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center",
      overview: "WorkCab is a complete taxi booking solution that provides mobile apps for both passengers and drivers. It features real-time tracking, payment processing, and comprehensive taxi management capabilities similar to Uber or Lyft.",
      features: [
        "Passenger mobile app",
        "Driver mobile app",
        "Real-time GPS tracking",
        "Fare calculation",
        "Payment processing",
        "Driver management",
        "Route optimization",
        "Rating and review system"
      ],
      technologies: [
        "React Native", "Node.js", "MongoDB", "Express", "Socket.io",
        "Google Maps API", "AWS", "Stripe", "Redis", "Docker"
      ],
      pricing: "$1,125 – $1,875",
      demoUrl: "https://demo.workcab.com",
      githubUrl: "https://github.com/workcab",
      liveUrl: "https://workcab.com"
    },
    'hotelfelf-hotel-management-system': {
      title: "HotelElf – Hotel Management System",
      category: "Travel",
      tags: ["ERP & CRM", "Travel", "Hotel Management", "Hospitality"],
      description: "Complete hotel management system with room booking, guest management, billing, and comprehensive hotel operations.",
      status: "New",
      price: "$500 – $1,125",
      slug: "hotelfelf-hotel-management-system",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center",
      overview: "HotelElf is a comprehensive hotel management system designed to streamline hotel operations. It provides complete room booking management, guest services, billing systems, and comprehensive hotel administration capabilities.",
      features: [
        "Room booking management",
        "Guest management",
        "Billing and invoicing",
        "Housekeeping management",
        "Staff scheduling",
        "Inventory management",
        "Reporting and analytics",
        "Customer service tools"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Hotel Management APIs"
      ],
      pricing: "$500 – $1,125",
      demoUrl: "https://demo.hotelfelf.com",
      githubUrl: "https://github.com/hotelfelf",
      liveUrl: "https://hotelfelf.com"
    }
  };

  const project = projects[projectSlug];

  useEffect(() => {
    if (!project) {
      navigate('/artificial-intelligence');
      return;
    }

    // Initialize Locomotive Scroll
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
      // Hero section animation
      gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.2
      });

      // Reveal animations
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
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen text-white selection:bg-orange-500/20">
      {/* Smooth scroll container */}
      <div data-scroll-container ref={scrollRoot}>
        
        {/* Hero Section - UFG LAB Style */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8" data-reveal>
              <nav className="flex items-center space-x-2 text-sm text-gray-400">
                <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
                <span>/</span>
                <a href={`/${project.category.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`} className="hover:text-orange-400 transition-colors">{project.category}</a>
                <span>/</span>
                <span className="text-white">{project.title}</span>
              </nav>
            </div>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div data-reveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                    {project.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  {project.title}
                </h1>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Status and Pricing */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-400 font-medium">{project.status}</span>
                  </div>
                  <div className="text-orange-400 font-bold">{project.price}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-300 text-center"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-colors duration-300 text-center"
                  >
                    Live Website
                  </a>
                </div>
              </div>
              
              <div data-reveal className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Project Overview
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  data-reveal
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-white font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Technologies Used
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3" data-reveal>
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 text-white font-medium rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of this solution and transform your business today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-300"
              >
                Try Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-orange-500 hover:text-orange-400 transition-colors duration-300"
              >
                View Source
              </a>
            </div>
          </div>
        </section>

        {/* Talk Banner */}
        <TalkBanner />
      </div>
    </div>
  );
};

export default ProjectDetail;
