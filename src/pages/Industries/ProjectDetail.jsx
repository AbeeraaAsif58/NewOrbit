import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TalkBanner from '../../components/TalkBanner';



const ProjectDetail = () => {

  const { projectSlug } = useParams();

  const navigate = useNavigate();



  // Project data matching Heloix marketplace style

  const projects = {

    'sonicvox-text-to-speech-as-saas': {

      title: "SonicVox – Text to Speech as SaaS",

      category: "Artificial Intelligence",

      tags: ["SaaS", "Tools and Utilities", "AI", "Machine Learning"],

      description: "Create your own business which allows to turn any text into lifelike speech, allowing you to create various media content such as audio books, podcasts, voice contents and also applications that talk, and build entirely new categories of speech-enabled products.",

      status: "1 Sale",


      slug: "sonicvox-text-to-speech-as-saas",

      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",

      overview: "SonicVox is a comprehensive Text-to-Speech (TTS) service that uses advanced deep learning technologies of leading cloud service providers such as Amazon Web Services, Microsoft Azure, Google Cloud Platform and IBM Cloud to synthesize natural sounding human speech. With over 909 different lifelike voices across more than 144 languages and dialects, you can build speech-enabled applications that work in many different countries.",

      features: [

        "Support for over 144+ Languages and Dialects",

        "Support for over 909+ Different Voices and Accents",

        "Natural sounding voices (Neural TTS)",

        "Google WaveNet Voices",

        "Various Combination of Voice Effects for Standard Voices",

        "Various Combination of Voice Effects for Neural Voices",

        "Powerful Sound Studio",

        "Use any of +909 voices in a single Text Synthesize Task",

        "Mix up to 20 voices in a single Text Synthesize Task",

        "Process up to 60000 characters in a single Text Synthesize Task",

        "Multiple Audio Output Formats",

        "Store & redistribute speech easily via social media",

        "Near Real-time text synthesize",

        "Customize & control speech output",

        "Optimize Your Streaming Audio",

        "Adjust Speaking Styles (For Neural Voices)",

        "Adjust Speech Rate, Pitch, and Loudness",

        "Adjust Speaking Emphasis",

        "Pronounce digits/dates/words/abbreviations properly",

        "Add work/phrase replacement effect",

        "Mute/Beep Out any part of text/sentence",

        "Synthesize Large Text directly to your Amazon S3 Bucket",

        "Full Affiliate/Referral system",

        "Fully Responsive Interface",

        "Create Monthly Subscription Plan easily",

        "Create Various Prepaid Plans easily",

        "Create Coupons/Promocodes for Prepaid Plans",

        "Google Adsense Support"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java", "AWS", 

        "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"

      ],


      demoUrl: "https://demo.sonicvox.com",

      githubUrl: "https://github.com/sonicvox",

      liveUrl: "https://sonicvox.com"

    },

    'classifiable-classified-buy-sell-marketplace': {

      title: "Classifiable – Classified Buy and Sell Marketplace Platform",

      category: "Artificial Intelligence",

      tags: ["SaaS", "Tools and Utilities", "Marketplace", "AI"],

      description: "AI-powered classified marketplace platform for buying and selling with intelligent matching and recommendations",

      status: "Available",


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


      demoUrl: "https://demo.aitini.com",

      githubUrl: "https://github.com/aitini",

      liveUrl: "https://aitini.com"

    },

    // Automobile Products

    'carinian-used-car-buy-sell-dealership-website-apps': {

      title: "Carinian - Used Car Buy/Sell & Dealership Website & Apps",

      category: "Automobile",

      tags: ["Directory", "Mobile Apps", "Dealership", "Marketplace", "PHP", "WordPress"],

      description: "We have developed most advanced and comprehensive auto dealer Website with all ad posting features including comparison, search filter, modern gallery, Review System, default layout, Bump up Ads & much more. To maximize your business sales, Website comes up with exceptional ad features. It includes an effective vehicle search functionality & car comparison feature that makes it perfect for buyers to look after various Cars or Vehicle Models available.",

      status: "Available",


      slug: "carinian-used-car-buy-sell-dealership-website-apps",

      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=600&fit=crop&crop=center",

      overview: "Carinian is a comprehensive auto dealer platform that revolutionizes the used car marketplace with advanced features including radius search with Google integration, detailed car review system, car comparison functionality, and bidding modules. The platform offers both web and mobile applications with extensive features for buyers, sellers, and dealerships including targeted advertisements, membership plans, and comprehensive messaging systems.",

      features: [

        "Radius search with Google - Advanced location-based search functionality",

        "Car Detailed Review System - Comprehensive review and rating system for vehicles",

        "Car Comparison - Side-by-side comparison of different car models",

        "Category Base Form Fields - Dynamic form fields based on vehicle categories",

        "Category Base Search - Advanced search filters by vehicle categories",

        "Bump Up Ads - Feature to promote listings for better visibility",

        "Category Base Pricing - Flexible pricing based on vehicle categories",

        "Live Search With Suggestions - Real-time search with intelligent suggestions",

        "Bidding Module - Complete auction system for vehicle sales",

        "Seller Rating & Seller Badges - Trust and reputation system for sellers",

        "Two Type Of Communication Modes - Multiple communication options",

        "Complete Messaging Module - Full messaging system between buyers and sellers",

        "Water Mark On Ad Images - Image protection and branding",

        "Email Templates - Customizable email notification templates",

        "YouTube Video Option - Video integration for vehicle listings",

        "Bad Word Filter - Content moderation and filtering system",

        "Targeted Advertisement Slots - Strategic ad placement options",

        "Location Base Search - Geographic search functionality",

        "Pricing Plan Paid and Free both available - Flexible membership options",

        "Turn ON/OFF Featured Ads Option - Control over featured listings",

        "Working Contact form - Functional contact and inquiry forms",

        "Cross Browser support - Compatibility across all major browsers",

        "Social media icons - Social media integration",

        "SEO optimized - Search engine optimization features",

        "Membership Plans - Tiered membership system",

        "Front End Listing Submission - User-friendly listing creation",

        "Language translation supported - Multi-language support",

        "Social Share for Posts - Social media sharing functionality",

        "Well commented code - Clean and documented codebase",

        "Google Recapcha Integrated - Security and spam protection",

        "Fully Responsive - Mobile-friendly design",

        "Review and rating system - Comprehensive feedback system",

        "Email notification - Automated email alerts",

        "Add to favorite option - Save favorite listings",

        "Mail Chimp Integrated - Email marketing integration",

        "Google maps integrated - Interactive mapping features",

        "Google location support - Advanced location services",

        "Web Application - Full-featured web-based platform",

        "Webview Android Application - Native Android app with webview integration",

        "Webview iOS Application - Native iOS app with webview integration",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "PHP", "MySQL", "WordPress", "Java", "Android", "JavaScript",

        "HTML5", "CSS3", "jQuery", "Bootstrap", "Google Maps API",

        "Google reCAPTCHA", "MailChimp", "YouTube API", "Cloud Linux"

      ],


      demoUrl: "https://carinian.enroles.com",

      githubUrl: "https://github.com/carinian",

      liveUrl: "https://carinian.com"

    },

    'garagify-garage-vehicle-service-management-system': {

      title: "Garagify - Garage/Vehicle Service Management System",

      category: "Automobile",

      tags: ["ERP & CRM", "Service Management", "Automotive", "Mobile Apps", "Laravel"],

      description: "Comprehensive garage and vehicle service management system with web and mobile applications, designed to streamline automotive business operations.",

      status: "Available",


      slug: "garagify-garage-vehicle-service-management-system",

      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop&crop=center",

      overview: "Garagify is a comprehensive garage and vehicle service management system designed to streamline automotive business operations. The platform provides advanced features for managing service requests, inventory, customer relationships, and administrative tasks. The system includes features for service tracking, inventory management, customer management, and detailed reporting. It's designed to handle both small workshops and large service centers, making it a versatile choice for automotive businesses of all sizes with complete web and mobile applications.",

      features: [

        "Web application with responsive design",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100+ Reviews & Downloads)",

        "Complete rebranding options",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play Store",

        "Complete Source Code delivery",

        "1 Year comprehensive support",

        "Service Request Management system",

        "Advanced Inventory Management",

        "Customer Management (CRM)",

        "Billing and Invoicing system",

        "Staff Management and scheduling",

        "Service History Tracking",

        "Appointment Scheduling system",

        "Real-time Notifications",

        "Comprehensive Reporting and Analytics",

        "Multi-branch Support",

        "Payment Gateway Integration",

        "Email Notifications system",

        "Mobile Responsive Design",

        "Multi-language Support",

        "Backup and Recovery system",

        "Complete API Documentation",

        "Technician management and work orders",

        "Customer communication tools",

        "Analytics and reporting dashboard",

        "Vehicle maintenance tracking",

        "Parts and inventory tracking",

        "Financial reporting and analytics",

        "Service quality management",

        "Customer feedback system",

        "Automated reminders and notifications",

        "Integration with external systems",

        "Customizable workflows",

        "Role-based access control",

        "Data export and import capabilities"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Android Studio", "Java",

        "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery",

        "RESTful API", "Cloud Linux", "Unlimited Hosting Space"

      ],


      demoUrl: "https://demo.garagify.com",

      githubUrl: "https://github.com/garagify",

      liveUrl: "https://garagify.com"

    },

    'carenting-car-bike-scooter-vehicle-rental-platform': {

      title: "Carenting - Car/Bike/Scooter Vehicle Rental Platform",

      category: "Automobile",

      tags: ["Directory", "Vehicle Rental", "Booking System", "Laravel", "Mobile Apps"],

      description: "Advanced car, bike, and scooter rental platform with complete booking management - Zoomcar/Revv Clone with comprehensive management features.",

      status: "Available",


      slug: "carenting-car-bike-scooter-vehicle-rental-platform",

      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop&crop=center",

      overview: "Carenting is an advanced car, bike, and scooter rental platform with complete booking management system - a comprehensive Zoomcar/Revv Clone. The platform offers extensive vehicle management, rental management, store management, and complete administrative features for running a successful vehicle rental business with multi-language support, payment gateways, and mobile applications.",

      features: [

        "Manage Vehicles with detailed specifications",

        "Manage Rental bookings and scheduling",

        "Manage Stores and locations",

        "Ongoing Rental Management system",

        "Rented History tracking",

        "Reviews Management system",

        "Payment History and tracking",

        "Withdraw Management for earnings",

        "Support Ticket Desk",

        "Transactions Management",

        "Profile Management for users",

        "2FA Security Management",

        "KYC Verification Included",

        "Multi-Language Facility",

        "Email Notifications system",

        "SMS Notifications",

        "Social Login System Included",

        "LiveChat and Secure ReCaptcha",

        "Vehicle Types Management",

        "Vehicle Classes Management",

        "Zones Management",

        "Brand Management",

        "Payment Gateways Management",

        "Payments Management",

        "Withdrawals Management",

        "Support Ticket Management",

        "General Setting configuration",

        "Social Credentials Management",

        "System Configuration",

        "Extensions Management",

        "Language Management",

        "SEO Manager",

        "KYC Setting",

        "Notification Setting",

        "Manage Pages",

        "Manage Section",

        "Policy Pages Management",

        "Social Icons Management",

        "Maintenance Mode Management",

        "GDPR Cookie Management",

        "System Management",

        "Custom CSS Management",

        "Real-time vehicle availability",

        "GPS tracking and navigation",

        "Automated booking and payment",

        "Driver verification and insurance",

        "Route optimization",

        "Customer support chat",

        "Mobile app for iOS and Android",

        "Multi-vehicle type support (cars, bikes, scooters)",

        "Advanced search and filtering",

        "Booking calendar and scheduling",

        "Vehicle inspection and maintenance",

        "Insurance and documentation management",

        "Customer feedback and rating system",

        "Analytics and reporting dashboard",

        "Inventory management",

        "Staff management and roles",

        "Financial reporting",

        "API integration capabilities"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "Java", "Android",

        "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery",

        "RESTful API", "Cloud Linux", "Unlimited Hosting Space"

      ],


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


      demoUrl: "https://demo.trackingbit.com",

      githubUrl: "https://github.com/trackingbit",

      liveUrl: "https://trackingbit.com"

    },

    'parkingrabbit-saas-vehicle-parking-management-system': {

      title: "ParkingRabbit – SaaS Vehicle Parking Management System",

      category: "Automobile",

      tags: ["ERP & CRM", "Parking Management", "SaaS", "Laravel"],

      description: "A comprehensive Vehicle Parking Management System designed to streamline and optimize parking operations with automated entry/exit systems, real-time tracking, and secure payment processing.",

      status: "Available",


      slug: "parkingrabbit-saas-vehicle-parking-management-system",

      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&crop=center",

      overview: "A Vehicle Parking Management System is a comprehensive solution designed to streamline and optimize parking operations in various settings, such as commercial facilities, residential complexes, and public spaces. This system integrates technology to efficiently manage parking spaces, enhance user experience, and enforce rules and regulations. Key features often include automated entry and exit systems, real-time space availability tracking, secure payment processing, and user-friendly interfaces for both administrators and parkers. The primary goals are to reduce congestion, improve accessibility, and provide a seamless parking experience through effective utilization of space and advanced technology.",

      features: [

        "Informative Dashboard",

        "User Management system",

        "User Roles and Permissions",

        "Parking Rate Management",

        "Parking Zone & Floor Management",

        "Vehicle Type Management",

        "Parking Slot Management",

        "RFID Vehicle Management",

        "Parked Vehicle Management",

        "Support System",

        "Contact Management",

        "Support / Notes Management",

        "Company Settings",

        "Account Settings",

        "Application Settings",

        "Email Settings",

        "Multi Languages support",

        "Payment Settings",

        "Manage Transaction",

        "Subscription Packages Management",

        "Subscription Coupon & Coupon History Management",

        "Landing Page Enable/Disable Option",

        "Register Page Enable/Disable Option",

        "Multi Theme Colors",

        "RTL/LTR Theme",

        "Site SEO Setting",

        "Google Recaptcha Setting",

        "Web application with responsive design",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100+ Reviews & Downloads)",

        "Complete rebranding options",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play Store",

        "Complete Source Code delivery",

        "1 Year comprehensive support",

        "Automated entry and exit systems",

        "Real-time space availability tracking",

        "Secure payment processing",

        "User-friendly interfaces for administrators and parkers",

        "Reduce congestion and improve accessibility",

        "Seamless parking experience",

        "Effective utilization of space",

        "Advanced technology integration",

        "Commercial facilities support",

        "Residential complexes support",

        "Public spaces support",

        "Rules and regulations enforcement",

        "Enhanced user experience",

        "Optimized parking operations",

        "Comprehensive parking management",

        "Real-time monitoring",

        "Automated notifications",

        "Financial reporting",

        "Analytics and insights",

        "Multi-location support",

        "Customizable settings",

        "Data export capabilities",

        "Integration capabilities",

        "Scalable solution",

        "Cloud-based deployment",

        "Mobile responsiveness",

        "Cross-platform compatibility"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Android Studio", "Java",

        "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery",

        "RESTful API", "Cloud Linux", "Unlimited Hosting Space"

      ],


      demoUrl: "https://demo.parkingrabbit.com",

      githubUrl: "https://github.com/parkingrabbit",

      liveUrl: "https://parkingrabbit.com"

    },

    // Blockchain Products

    'cryptoquiver-ico-sto-token-sale-management-ico-admin': {

      title: "Cryptoquiver – ICO / STO Token Sale Management / ICO Admin",

      category: "Blockchain",

      tags: ["ICO", "STO", "Token Sale", "Admin Panel", "Blockchain"],

      description: "Cryptoquiver is a comprehensive ICO/STO token sale management platform that provides advanced features for managing token sales, user investments, and administrative tasks with security and scalability in mind.",

      status: "69 Sales",


      slug: "cryptoquiver-ico-sto-token-sale-management-ico-admin",

      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",

      overview: "Cryptoquiver is a comprehensive ICO/STO token sale management platform that provides advanced features for managing token sales, user investments, and administrative tasks. The platform is built with security and scalability in mind, offering a robust solution for blockchain-based fundraising. The platform includes features for KYC verification, multi-currency support, referral systems, and detailed analytics. It's designed to handle both Initial Coin Offerings (ICO) and Security Token Offerings (STO), making it a versatile choice for different types of token sales.",

      features: [

        "Multi-currency support (ETH, BTC, LTC, etc.)",

        "KYC/AML verification system",

        "Referral and bonus system",

        "Token sale stages management",

        "Investment tracking and analytics",

        "Admin dashboard with detailed reports",

        "Secure wallet integration",

        "Smart contract deployment tools",

        "Automated token distribution",

        "Email notification system",

        "User management system",

        "Multi-language support",

        "Responsive design",

        "API integration",

        "Security features (2FA, encryption)",

        "Documentation included",

        "Complete ICO/STO token sale management",

        "Advanced admin dashboard and controls",

        "Investor registration and KYC verification",

        "Multi-currency payment processing",

        "Real-time analytics and reporting",

        "Smart contract integration",

        "Compliance and regulatory tools",

        "Blockchain-based fundraising",

        "Robust security measures",

        "Scalable platform architecture",

        "Advanced reporting capabilities",

        "Automated compliance tools",

        "Investor management system",

        "Token sale campaign management",

        "Multi-stage token sales",

        "Investment tracking",

        "Wallet management",

        "Transaction monitoring",

        "Regulatory compliance",

        "Audit trail functionality",

        "Customizable token sale parameters",

        "White-label solutions",

        "Integration with external wallets",

        "Advanced analytics dashboard",

        "Risk management tools",

        "Automated notifications",

        "Multi-tier referral system",

        "Token vesting schedules",

        "Investor communication tools",

        "Campaign performance metrics",

        "Security audit features",

        "Compliance reporting",

        "Token economics management",

        "Investor onboarding automation",

        "Real-time transaction monitoring",

        "Advanced security protocols",

        "Scalable infrastructure",

        "Multi-platform support",

        "Custom branding options",

        "API documentation",

        "Technical support",

        "Regular updates and maintenance"

      ],

      technologies: [

        "Laravel", "Web3.js", "Solidity", "PHP", "MySQL",

        "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery",

        "Linux", "Node.js", "Unlimited Hosting Space"

      ],


      demoUrl: "https://www.ufglab.com/industries/blockchain/cryptoquiver-ico-sto-token-sale-management-ico-admin",

      githubUrl: "https://github.com/cryptoquiver",

      liveUrl: "https://cryptoquiver.com"

    },

    'cryptologia-cryptocurrency-buy-sell-exchange-mlm-system': {

      title: "Cryptologia – Cryptocurrency Buy Sell Exchange with MLM System",

      category: "Blockchain",

      tags: ["Cryptocurrency", "Exchange", "MLM", "Trading"],

      description: "Advanced cryptocurrency exchange platform with integrated MLM (Multi-Level Marketing) system for comprehensive trading and referral management.",

      status: "9 Sales",


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


      demoUrl: "https://demo.cryptologia.com",

      githubUrl: "https://github.com/cryptologia",

      liveUrl: "https://cryptologia.com"

    },

    // B2B Products

    'vyapaar-complete-saas-business-for-stock-management-pos-invoicing': {

      title: "Vyapaar – Complete SAAS Business for Stock Management, POS & Invoicing",

      category: "B2B",

      tags: ["ERP & CRM", "SAAS", "POS", "Inventory"],

      description: "This is a SAAS based Startup provides a CRM with some amazing features suitable for all businesses. With this application, you are assured to save time-consuming process of bookkeeping accounting and inventory information. Also, you will have all the required information for a detailed analysis of your business.",

      status: "164 Sales",


      slug: "vyapaar-complete-saas-business-for-stock-management-pos-invoicing",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "Vyapaar is a comprehensive SAAS-based business management platform that provides complete solutions for stock management, point-of-sale (POS) operations, and invoicing. Our platform is designed to streamline business operations and eliminate time-consuming manual processes.",

      features: [

        "Multiple Business/Shops Management - Set up unlimited businesses with separate inventory & accounting",

        "Add Location/Storefronts/Warehouse - Create multiple locations with separate stock tracking",

        "User & Role Management - Powerful user system with predefined Admin & Cashier roles",

        "Contacts Management - Mark contacts as customer/supplier with transaction history",

        "Products Management - Single & Variable products with SKU, brands, categories, and stock alerts",

        "Purchases Management - Add purchases for different locations with due date notifications",

        "Sell Management - Simplified POS interface with Ajax-based selling screen",

        "Expense Management - Categorize and track business expenses with detailed reports",

        "Comprehensive Reports - Purchase, Sale, Tax, Contact, Stock, Expense, and Trending reports",

        "Essential HRM Features - Leave management, Attendance, Payroll, Holidays, ToDo lists",

        "Document Storage & Sharing - Cloud document storage with user/role sharing permissions",

        "Messaging System - Send messages to everyone or specific locations with role permissions",

        "SAAS Features - Unlimited subscription packages with payment gateways (Stripe, PayPal, Razorpay)",

        "WooCommerce Synchronization - Sync categories, products, and orders between POS and WooCommerce",

        "Repair Module - Configurable repair status, device management, and technician assignment",

        "Manufacturing Module - Recipe management, production planning, cost calculations, and lot tracking",

        "Other Features - Currency settings, translation ready, barcode stickers, offline support"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://vyapaar.online",

      githubUrl: "https://github.com/vyapaar",

      liveUrl: "https://vyapaar.com"

    },

    'cloud-prospects-lead-management-system-and-sales-crm': {

      title: "Cloud Prospects – Lead Management System and Sales CRM",

      category: "B2B",

      tags: ["ERP & CRM", "Lead Management", "Sales"],

      description: "This is a lead management system & sales crm for organise leads, deals, task,contacts,files. Open Source software for convert leads to sales and make profit.",

      status: "72 Sales",


      slug: "cloud-prospects-lead-management-system-and-sales-crm",

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",

      overview: "Cloud Prospects is a comprehensive lead management system and sales CRM designed to help businesses streamline their sales processes, track prospects effectively, and manage customer relationships with advanced automation and analytics.",

      features: [

        "Deals/Leads Management - Complete lead tracking and conversion system",

        "To-do/Task Management - Organize and track tasks and activities",

        "Contact Management - Comprehensive contact database and management",

        "Company Management - Company profiles and relationship tracking",

        "Invoices - Generate and manage invoices directly from the system",

        "Group Management - Organize users and permissions by groups",

        "Roles Permissions - Advanced role-based access control system",

        "Custom Fields - Customizable fields for Deal, Contact & Company records",

        "Reports & Analytics - Pie Chart & Table reports for business insights",

        "Export Functionality - Export Deals, Contacts & Company data",

        "Deal Activity History - Complete audit trail of all deal activities",

        "Pipeline & Kanban Board - Visual pipeline management with drag-and-drop interface",

        "Multi-Language Support - Available in 13 languages (Dutch, English, French, German, Italian, Russian, Spanish, Chinese, Greek, Japanese, Norwegian, Portuguese, Polish)"

      ],

      technologies: [

        "PHP", "CodeIgniter", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://demo.cloudprospects.com",

      githubUrl: "https://github.com/cloudprospects",

      liveUrl: "https://cloudprospects.com"

    },

    'hospitalcore-complete-saas-hospital-management-system': {

      title: "Hospitalcore – Complete SAAS Hospital management system",

      category: "B2B",

      tags: ["HealthCare", "SAAS", "Hospital Management"],

      description: "Complete SAAS Business of Hospital Management Software. Platform for all hospitals in a community. Different hospitals owned by different people can be managed by our single application. Create an account for a hospital and give the login details to that hospital. thats it! Ultimate solution for any kind of Hospital, Diagnostic Center, Clinic, Nursing Home.",

      status: "51 Sales",


      slug: "hospitalcore-complete-saas-hospital-management-system",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

      overview: "Hospitalcore is a comprehensive SAAS-based hospital management system designed to streamline healthcare operations. Our platform provides complete solutions for patient management, appointment scheduling, billing, and administrative tasks for healthcare facilities.",

      features: [

        "Doctor Database - Comprehensive doctor information and credentials management",

        "Prescription Management - Digital prescription creation and management system",

        "Appointment Management - Complete appointment scheduling and tracking system",

        "Human Resource Database - Staff and employee management system",

        "9 Types Of Login Access - Super Admin, Admin, Doctor, Patient, Nurse, Accountant, Pharmacist, Laboratorist, Receptionist",

        "Hospital Accounting - Complete financial accounting and bookkeeping system",

        "Financial Reporting - Comprehensive financial reports and analytics",

        "Invoicing - Automated billing and invoice generation system",

        "Pharmacy Management - Complete pharmacy operations and inventory management",

        "SMS Management - SMS notifications and communication system",

        "Dynamic Language - Multi-language support with dynamic language switching",

        "Multi Language Support - English, French, Italian, Portuguese, Spanish",

        "Frontend Website - Patient-facing website for appointments and information",

        "Schedule Management for Doctors - Doctor availability and scheduling system",

        "Payment Gateway - Integrated payment processing with Stripe gateway",

        "Email Module - Automated email notifications and communications",

        "Notice Module - Internal notice and announcement system",

        "Quantity in POS - Point of sale with quantity management",

        "Dynamic Medicine Selection - Smart medicine selection during prescription creation",

        "New Dashboard - Modern, responsive dashboard interface",

        "Patient Timeline - Complete patient history and timeline tracking",

        "Template for Lab Report Creation - Pre-built lab report templates",

        "Easy Process to Translate Into any Language - Simple translation management",

        "Patient Medical History - Comprehensive medical history tracking",

        "Patient Medical Files Archive - Digital file storage and management",

        "Prescription - Digital prescription system with templates",

        "Patient Payment History - Complete payment tracking and history",

        "User Activity Report - Detailed user activity and audit logs",

        "Doctor's Commission Calculator - Commission calculation for diagnosis reference",

        "Stripe Payment Gateway - Secure payment processing integration",

        "Twilio SMS Gateway - Advanced SMS communication system",

        "Table Responsiveness - Mobile-responsive tables for all devices",

        "Server Side Tables - Optimized server-side processing for appointments and prescriptions",

        "Auto Email and SMS Template - Automated communication templates",

        "Prescription Re-design - Modern prescription interface",

        "Popup Patient History - Quick patient history access from calendar appointments"

      ],

      technologies: [

        "PHP", "MySQL", "CodeIgniter", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://aunch.enroles.com/128/",

      githubUrl: "https://github.com/hospitalcore",

      liveUrl: "https://hospitalcore.com"

    },

    'business-brawn-complete-saas-business-management': {

      title: "Business Brawn – Complete SAAS Business Management",

      category: "B2B",

      tags: ["SAAS", "Business Management"],

      description: "Complete SAAS Business Management. A Web application with tons of features to manage different types of small businesses.",

      status: "14 Sales",


      slug: "business-brawn-complete-saas-business-management",

      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center",

      overview: "Business Brawn is a comprehensive SAAS business management platform that provides all the tools needed to run a successful business. Our unified platform combines operations, finance, HR, and project management in one seamless solution.",

      features: [

        "Web Application - Full-featured web-based business management platform",

        "Webview Android Application - Native Android app with webview integration",

        "Webview iOS Application - Native iOS app with webview integration",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance",

        "Multi-Business Management - Manage different types of small businesses",

        "Comprehensive Business Tools - Tons of features for complete business management",

        "Cloud-Based SAAS Platform - Scalable and secure cloud infrastructure",

        "Cross-Platform Compatibility - Works on web, Android, and iOS devices",

        "Professional Setup Service - Expert installation and configuration",

        "Ongoing Support - 1 year of technical support and updates"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "Android", "Native Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://businessbrawn.online",

      githubUrl: "https://github.com/businessbrawn",

      liveUrl: "https://businessbrawn.com"

    },

    'account-tap-khatabook-clone-android-application': {

      title: "Account Tap – KhataBook Clone Android application",

      category: "B2B",

      tags: ["Finance", "Android App", "Accounting"],

      description: "Khata Book (Ledger Account Book) – Replace your traditional Udhar bahi khata by new digital ledger cash book. It is 100% Free, Safe and Secure for all types of businesses to maintain their customers' accounts. It is Tally for mobile. Shop owners can use the app to record credit (Jama) and debit (Udhaar) transactions for their trusted customers. Number #1 app to replace your offline Udhar Bahi Khata and transform it into a digital ledger Cash Book with a lot of great features.",

      status: "8 Sales",


      slug: "account-tap-khatabook-clone-android-application",

      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",

      overview: "Account Tap is a comprehensive Android application that replicates the functionality of KhataBook for digital ledger management. Our app provides small and medium businesses with an easy-to-use platform for accounting and financial tracking.",

      features: [

        "Beautiful UI - Modern and intuitive user interface design",

        "High Quality - Premium quality app with professional standards",

        "Money Making App - Revenue-generating features for business growth",

        "ONESIGNAL Notification - Advanced push notification system",

        "Admob Ads Integrated - Built-in advertising monetization",

        "GDPR Compliant - European Union's General Data Protection Regulation compliance",

        "RTL Support - Right-to-left language support for international markets",

        "Top Quality Clean Code - Well-structured and maintainable codebase",

        "Easy Configuration - Simple setup and customization options",

        "Well Documented - Comprehensive documentation and guides",

        "Free Support - Ongoing technical support and assistance",

        "Web Application - Full-featured web-based platform",

        "Webview Android Application - Native Android app with webview integration",

        "Webview iOS Application - Native iOS app with webview integration",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://demo.accounttap.com",

      githubUrl: "https://github.com/accounttap",

      liveUrl: "https://accounttap.com"

    },

    'close-sourcing-b2b-ecommerce-bulk-discount': {

      title: "Close Sourcing – B2B eCommerce with Bulk Discount, B2B User-AliExpress, IndiaMart Clone",

      category: "B2B",

      tags: ["B2B", "eCommerce", "Wholesale", "Marketplace"],

      description: "The complete solution for running a Wholesale, B2B, hybrid B2B+B2C, or Private Membership store. We takes care of everything, from basic aspects such as hiding prices for guest users, to complex features such as tiered pricing structures, tax exemptions, TAX handling, and multiple buyers on account. From an extended business registration and separate B2B/B2C registration forms, to custom billing fields, an invoice payment gateway and negotiated price offers, It does it all.",

      status: "12 Sales",


      slug: "close-sourcing-b2b-ecommerce-bulk-discount",

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",

      overview: "Close Sourcing is a comprehensive B2B eCommerce platform that enables businesses to run wholesale, B2B, hybrid B2B+B2C, or private membership stores. Our platform provides advanced features for bulk discount management, B2B user authentication, and seamless integration with existing business processes.",

      features: [

        "Hide Prices for Guests - Guest user price visibility control",

        "Wholesale Order Form with 3 Options - Multiple order form configurations",

        "Business Registration and Approval - Separate B2B/B2C Registration",

        "Wholesale Prices and Tiered Pricing - Different Prices for Different Users",

        "Product Visibility Control - Group-based product access management",

        "Minimum Order Quantity and Value - Order validation and restrictions",

        "Tax Exemptions - VAT Nr. Validation - EU VAT & VIES compliance",

        "Quote Requests & Convert Quotes to Offers - Complete quote management system",

        "Manage Custom Quote Fields with 9 Field Types - Flexible quote customization",

        "Quick Orders via CSV Upload - Bulk order processing capabilities",

        "Dynamic Pricing, Discount and Order Rules - Advanced pricing automation",

        "Shipping and Payment Methods Control - Flexible payment and shipping options",

        "Min / Max / Step Quantities on Product Pages - Product quantity controls",

        "Hide Entire Website - Hide Shop - Complete website access control",

        "Product Bundles and Personalized / Negotiated Offers - Advanced product management",

        "Purchase Lists - Buyers can Re-order and Replenish Stock - Customer convenience features",

        "Conversations and Messaging - Built-in communication system",

        "Automatic Tiered Pricing Table - Dynamic pricing display",

        "Tiered Price Rules - Create Tiered Percentage Discounts in Bulk - Bulk discount management",

        "Minimum / Maximum Order Value to Use a Payment Method - Payment method restrictions",

        "Shortcode to Show Different Content to Different Users - Content personalization",

        "Coupon Usage Restriction for B2B or B2C - Targeted coupon system",

        "Product Information Table for details such as Minimum Order Quantity - Product detail management",

        "Custom Taxes and Withholding Tax - Advanced tax handling",

        "Multiple Buyers on One Account - Multi-user account management",

        "Display prices including or excluding tax differently for B2C and B2B users - Flexible pricing display",

        "Invoice Payment Gateway - Professional invoicing system",

        "Purchase Order Gateway - B2B order processing",

        "Payment Method Discounts and Surcharges - Dynamic payment pricing",

        "Buy X Get 1 Free Discounts - Advanced promotional features",

        "Download Purchase Lists as CSV - Data export capabilities",

        "Send Quotes / Offers by Email - Email integration for quotes",

        "Offer PDFs with Company Logo - Professional document generation",

        "Change Group based on Total Purchase Value - Customer tier management",

        "Different Coupon Values for B2B User Groups - Group-specific promotions",

        "Separate Inventory for B2B & B2C - Dual inventory management",

        "Company Order Approval - Business account order review system",

        "Reports & Analytics - Comprehensive business intelligence",

        "Web Application - Full-featured web-based platform",

        "Android Application - Native Android app",

        "iOS Application - Native iOS app",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "PHP", "MySQL", "WordPress", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://buyyu.online",

      githubUrl: "https://github.com/closesourcing",

      liveUrl: "https://closesourcing.com"

    },

    // Dating Products

    'futureshaadi-matrimony-web-application-android-ios-app': {

      title: "Futureshaadi - Matrimony Web Application with Android and iOS app",

      category: "Dating",

      tags: ["Matrimony", "Web App", "Mobile Apps"],

      description: "Complete matrimony web application with dedicated Android and iOS apps featuring advanced matching algorithms and secure communication.",

      status: "73 Sales",


      slug: "futureshaadi-matrimony-web-application-android-ios-app",

      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",

      overview: "Futureshaadi is a comprehensive matrimony platform that combines web application with dedicated Android and iOS mobile apps. Our platform provides advanced matching algorithms, secure communication features, and comprehensive profile management for serious matrimonial connections.",

      features: [

        "Web Application - Full-featured web-based matrimony platform",

        "Webview Android Application - Native Android app with webview integration",

        "Webview iOS Application - Native iOS app with webview integration",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "PHP", "MySQL", "CodeIgniter", "Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://futureshaadi.online",

      githubUrl: "https://github.com/futureshaadi",

      liveUrl: "https://futureshaadi.com"

    },

    'rishtey-shaadi-clone-matrimony-android-ios-app': {

      title: "Rishtey - Shaadi Clone Matrimony Android & iOS app",

      category: "Dating",

      tags: ["Matrimony", "Mobile Apps", "Clone"],

      description: "A feature-packed Shaadi Clone Matrimonial Mobile Application to seamlessly manage your Users, Preferences, Membership, Payments, Promotions and more. This app is for providing matrimonial services to users. In this app, a user creates account securely of his/her own or anyone relative to his/her. This app is best for matchmaking of couples and it is an online dating app. It also provides to shortlist profile and send an invitation to them.it also creates biodata and help to share this on other social media.",

      status: "53 Sales",


      slug: "rishtey-shaadi-clone-matrimony-android-ios-app",

      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop&crop=center",

      overview: "Rishtey is a complete Shaadi clone matrimony platform that replicates the functionality of the popular matrimonial website. Our platform includes comprehensive profile management, advanced search filters, and dedicated mobile applications for both Android and iOS platforms.",

      features: [

        "Perfect Matches - Advanced matching algorithm for compatible profiles",

        "Just Join - Quick and easy registration process",

        "Shortlisted - Save and manage favorite profiles",

        "Profile Visitors - Track who viewed your profile",

        "Send Interest - Express interest in potential matches",

        "Received Interest - View and manage received interests",

        "Live Chat with your Future Partner - Real-time messaging system",

        "Video/Audio Call Feature - Direct communication with matches",

        "Detailed Profile of His/Her - Comprehensive profile information",

        "Admin Send Message to All Users by NewsLetter - Admin communication system",

        "Membership - Premium membership tiers and benefits",

        "Unique Design - Modern and intuitive user interface",

        "Easily create your profile and start receiving interest from other members",

        "Find exactly the kind of people who you are looking for by personal information",

        "View full profiles and photos of members and scroll to see next and previous profiles",

        "Express Interest to people you like",

        "Edit your profile and update your personal information",

        "Search your Desired Partner Profile to specify the kind of person you are looking for",

        "Get instant notifications about Interests and Accepts sent to you",

        "Real time Chat - Instant messaging with matches",

        "Video/Audio Call Feature - Direct communication capabilities",

        "Services provider details like Photographer, Event manager, Hotels, Gardens etc",

        "Admin Web application - Complete admin panel for management",

        "Android application - Native Android mobile app",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "Core PHP", "MySQL", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://demo.rishtey.com",

      githubUrl: "https://github.com/rishtey",

      liveUrl: "https://rishtey.com"

    },

    'janoo-dating-platform-like-tinder-badoo': {

      title: "Janoo - Dating Platform like Tinder/Badoo",

      category: "Dating",

      tags: ["Entertainment", "Social", "Dating App"],

      description: "Fast and secured Dating social platform",

      status: "11 Sales",


      slug: "janoo-dating-platform-like-tinder-badoo",

      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",

      overview: "Janoo is a modern dating platform inspired by popular apps like Tinder and Badoo. Our platform features intuitive swipe functionality, location-based matching, and premium features designed to help users find meaningful connections in their area.",

      features: [

        "Upload Images - Upload any image from your device and share it online with other users",

        "High Performance & Capability - It handle any amount of videos / images easily, with a very high performance and speed",

        "Like - User can like users in find match page",

        "User Profile - User can create his own profile and upload unlimited images",

        "SEO friendly - SEO friendly links, and HTML code that Google will love",

        "Powerful Admin panel - Manage settings, videos, design, and a lot more easily from our admin panel",

        "Powerful UI - Beautiful and modern design",

        "Pro System - User can get top features by subscribing to one of the script pro packages",

        "Credit System - User should purchase credit to use it on messages, gifts, likes. etc",

        "Web Application - Full-featured web-based dating platform",

        "Webview Android Application - Native Android app with webview integration",

        "Webview iOS Application - Native iOS app with webview integration",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "PHP", "MySQL", "Android Studio", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://janoo.online",

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

        "React", "Node.js", "PostgreSQL", "Express", "AWS",

        "Docker", "Kubernetes", "Redis", "Microservices", "Restaurant APIs"

      ],


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
      demoUrl: "https://demo.ordercreator.com",
      githubUrl: "https://github.com/ordercreator",
      liveUrl: "https://ordercreator.com"
    },
    // Travel Products
    'travoila-complete-travel-portal': {
      title: "Travoila – Book Hotels, Tours, Flights, Activities, Cabs – Complete Travel Portal",
      category: "Travel",
      tags: ["Travel", "Booking", "Portal"],
      description: "A Complete Travel Booking website and Marketplace for Travel Agency, Tour Operator, Car Transfer, Activity/Event, Hotel Booking, Room Bnb, Villa Rental, Resort Rental, Flight Booking, Make Affiliate Travel website. Easy to turn On/Off any service you would like to use for your purpose.",
      status: "Available",
      slug: "travoila-complete-travel-portal",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&crop=center",
      overview: "Travoila is a comprehensive travel portal that provides complete booking services for hotels, tours, flights, activities, and cabs. It offers a one-stop solution for all travel needs with advanced booking management and customer service features. The platform works as a marketplace, allowing partners and vendors to upload listings for free or paid, with multi-items booking checkout and membership functions.",
      features: [
        "Best optimized UI/UX and get in touch with travel trending in the world",
        "Works as Marketplace, allows Partner/Vendor can upload listing for free or paid",
        "Multi-items booking with checkout",
        "Support Membership functions build-ins, allows Partner/Vendor can buy by a package for upload listing by Free, Paid",
        "With strongly filterable, sortable and searchable booking list that you can configure the way you want",
        "Add Attribute unlimited for each service like make a Category for Hotel, Tour, Car, Rental, Activity, Flight, Hotel, Room",
        "Advanced Search very easy to make searchable stronger",
        "Support Location type for build location structure by your way. Included lat&longtidule of google map",
        "Many services you can use for site and can make On, Off by config: Hotel, Room (Accommodation), Tour, Rental, Car, Flight",
        "Works as a Marketplace system or single site for all services above",
        "Friendly Dashboard for Partner/Vendor, Admin and Buyer",
        "Built-in analytics with booking statistics with the chart, in balance, income",
        "Invoice manage, system automatic make to Invoice attach to notification email for each booking process",
        "Vendor, Partner can communication with the buyer via Inbox function before booking",
        "Booking history with show status of booking like pending, canceled, completed",
        "Refund manager for Admin and Partner/Vendor. Support Refund workflow between Buyer and Vendor / Partner and site Owner",
        "Automatical detect currency by language with option to change language and assign currency for each language system used",
        "Flexible to make various email templates for notifications",
        "Support many major OTA Calendar syncs (ICal) like Google Calendar, TripAdvisor Calendar, Airbnb Calendar, HomeAway Calendar",
        "Can control everything with pricing by date on the calendar",
        "Can make Tour Package by including Flight, Accommodation, Car.. all in one for client select to book",
        "Support weather API to display weather info on each location",
        "Set Discount by date from one to all services on site",
        "Flexible to make extra pricing for each service on-site. Like add more people, laundry, more beds.. any kind of extra price setting you can use, can set required or optional",
        "Make Coupon for one service or all services for competition with business",
        "Multi-language support",
        "Affiliate system to start earning for Blogger, Affiliater with some OTA we checked: Travelpayouts.com, HotelCombined, Booking.com, Expedia.com, Skyscanner.com",
        "Integrated by built-ins with Google, Facebook login. Difference register form for normal user and Partner / Vendor user",
        "Make a review for all services, with some options, allows required booked or no need can make reviews. Each review user can press Like/Unlike for more helpful for visitor",
        "Multi-currency supported, set one Currency as Primary then with other one make exchange rate with Primary Currency",
        "Inventory for Hotel/Room to manage and get an overview of booking for all rooms in one place",
        "Configuration Booking Fee on-site by can turn On, Off for match with your purpose",
        "Wishlist to save all services interested in by buyer ready supported"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Travel APIs", "Google Maps API",
        "Payment Gateway", "Email Services", "Calendar Integration"
      ],
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


      demoUrl: "https://demo.properloan.com",

      githubUrl: "https://github.com/properloan",

      liveUrl: "https://properloan.com"

    },

    'investdrive-hyip-crypto-investment-management-platform': {

      title: "InvestDrive – HYIP Crypto Investment Management Platform",

      category: "Finance",

      tags: ["Finance", "Crypto Investment", "HYIP", "Investment Management", "Cryptocurrency", "Trading"],

      description: "With this Application, which is an ultimate solution for managing your HYIP Investment Platform. You can set up your investment platform with an hours without programing knowledge. It provide most powerful setting panel, where from you can manage every settings very easily.",

      status: "70 Sales",


      slug: "investdrive-hyip-crypto-investment-management-platform",

      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",

      overview: "InvestDrive is an ultimate solution for managing your HYIP Investment Platform. You can set up your investment platform with an hours without programing knowledge. It provide most powerful setting panel, where from you can manage every settings very easily. It supports major & most popular cryptocurrencies (BTC, ETH, BNB, USDT, USDC and more) and fiat currencies (USD, EUR, TRY, RUB, INR and more) that gives flexibility to your investors to deposit and invest their fund.",

      features: [

        "Ultimate solution for managing HYIP Investment Platform",

        "Set up your investment platform with hours without programming knowledge",

        "Most powerful setting panel",

        "Manage every settings very easily",

        "Supports major & most popular cryptocurrencies",

        "BTC, ETH, BNB, USDT, USDC and more",

        "Fiat currencies USD, EUR, TRY, RUB, INR and more",

        "Flexibility to your investors to deposit and invest their fund",

        "Manage which currency will be accepted or not",

        "Set system as base currency",

        "Complete solution for a HYIP investment platform",

        "Admin and user profile management with advanced control",

        "Accounting system to maintain user account balance separately",

        "Deposit, withdraw & investment feature for investors",

        "Manage investment scheme with various option",

        "Unlimited schemes adding option with update locking feature",

        "Investment Restriction on each scheme/plan by user or total count",

        "Built-in Referral tracking (one level) with commission system",

        "Rewards options on deposit and new signup",

        "Most popular currencies and automatic and live exchange rate",

        "Multiple payment method such as PayPal, Bank Transfer, Crypto Wallet",

        "Advanced settings for Application management",

        "Advanced search and filter option for listing",

        "Add charge or bonus to user accounts",

        "Manually review and approve transactions",

        "Integrated Google reCaptcha v3, Tawk Live Chat",

        "Two-Factor Authentication (2FA) for all users",

        "Pre-build welcome / intro Page for website",

        "Complete management of pages and email templates",

        "Quick setup wizard for application setup",

        "Clean, modern, premium looking UI interface",

        "Dashboard customization with color skins",

        "Regular update, introducing new features and bug fixing",

        "Fully responsive website and optimized layout",

        "Supports modern browser and cross browser compatibility",

        "Free premium support for 6 months and quick response",

        "More than 25+ currencies supported",

        "Fiat Currencies: US Dollar (USD), Euro (EUR), Pound Sterling (GBP)",

        "Canadian Dollar (CAD), Australian Dollar (AUD), Turkish Lira (TRY)",

        "Russian Ruble (RUB), Indian Rupee (INR), Brazilian Real (BRL)",

        "Nigerian Naira (NGN), Pakistani Rupee (PKR), Vietnamese đồng (VND)",

        "Tanzanian Shilling (TZS), Saudi Riyal (SAR), Mexican Peso (MXN)",

        "Ghanaian Cedi (GHS), Kenyan Shilling (KES)",

        "Crypto Currencies: Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC)",

        "Bitcoin Cash (BCH), Binance Coin (BNB), USD Coin (USDC)",

        "Tether (USDT), TRON (TRX), Cardano (ADA), Ripple (XRP)",

        "User friendly investment interface",

        "Key statistics and links are presented for easy investing",

        "Multi scheme investment supports",

        "Users can invest in multiple investment plans at the same or different time",

        "Multiple currencies for deposit & withdraw system",

        "Users can deposit in different currencies & allow to withdraw funds into account",

        "Transaction history - Transaction list & details specific to the user",

        "Profile management - User have full rights to control his own account",

        "Activity log - Application will save login activities for security purpose",

        "Two Factor Authentication - User allow enable 2FA to add another layer of security",

        "Infographic Overview - Offers weekly + monthly deposit & withdraw insights",

        "Recent transaction & order activities, total stats and more",

        "Dedicated Investment Dashboard - Contains investment overview",

        "Graphical insights for active and top investment schemes",

        "Recent investment histories and more",

        "Investment Scheme Management - Schemes can be updated, activated/inactivated",

        "Can be archived, easily update investment amount, interest rate",

        "Interest period, term duration etc",

        "Investment Statement - All investment transactions, investment payout histories",

        "Profit settlements, profit/interest logs are available",

        "Deposit & Withdrawal - Admin allow to see deposit & withdrawal list & details",

        "Approve or reject them, make a direct deposit, bonus or charge against user account",

        "Multiple Currency Management - Manage system and supported currencies",

        "Extensive Payment Settings - Settings like amount limit, choose currency",

        "Enable or disable new deposit/withdrawal, configuring payment methods",

        "User Management - Users listing, manually add user from backend",

        "Multiple operation support like suspend user, password reset",

        "Send email to a specific user etc, bulk actions are allow to suspend, activating",

        "Website Settings - Site information, social media links, time zone settings",

        "Email configuration, maintenance and more settings can be managed easily",

        "Language Management - You can add language as many as you want",

        "Translation using json file, control default language for application",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://investdrive.online",

      githubUrl: "https://github.com/investdrive",

      liveUrl: "https://investdrive.online"

    },

    'quotora-live-trading-market-analysis-portfolio-watching-list-subscriptions': {

      title: "Quotora – Live Trading, Market Analysis, Portfolio, Watching List, Subscriptions",

      category: "Finance",

      tags: ["Finance", "Trading", "Market Analysis", "Portfolio Management", "Cryptocurrency", "Subscriptions"],

      description: "Features More Than 2100+ Crypto Currencies & Tokens, Live Trading, Market Analysis, Portfolio Management, Watching List, Subscriptions",

      status: "41 Sales",


      slug: "quotora-live-trading-market-analysis-portfolio-watching-list-subscriptions",

      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop&crop=center",

      overview: "Quotora is a comprehensive live trading platform featuring more than 2100+ cryptocurrencies and tokens with 85 currencies supported. It offers live trading, market analysis, portfolio management, watching list, and subscription-based premium features. The platform provides advanced trading tools, technical indicators, real-time data, and comprehensive market analysis for serious traders and investors.",

      features: [

        "More than 2100+ Cryptocurrencies available",

        "85 Currencies supported",

        "Live trading",

        "Get your wallet balance",

        "Buy / Sell Crypto (Bitcoin, Ethereum, Litecoin) with Market & Limit Mode",

        "Advanced coin page",

        "Depth Graph",

        "Order book",

        "Private Blockfolio",

        "Advanced trader chart candlesticks",

        "Technical indicators fully customizable",

        "10 technical indicators",

        "Technical indicators fully customizable (parameters, color, line)",

        "Coins history data from 1 minute to 5 months",

        "Live data",

        "Live trending on chart",

        "Detailed Market analysis",

        "News & Social",

        "Watching list",

        "Heatmap",

        "Top movers",

        "Live market (sell/buy) with market balancing",

        "Calculator (Cryptocurrency <==> Currencies)",

        "Up to 6 charts on the dashboard",

        "9 types of dashboards available",

        "Notifications on Mobile, Browser, Windows",

        "Add notifications easy by double clicking on chart",

        "Notifications center in Krypto",

        "Subscriptions",

        "Credit card payment gateway (Stripe)",

        "Paypal payment",

        "Customize plans",

        "Free trial time configuration",

        "Fully responsive (Mobile, Tablet) and optimized look-alike application on mobile",

        "Advanced Admin panel",

        "Google Analytics easy setup",

        "Multilanguages ready",

        "6 Languages already translated (English, French, Russian, Chinese, Latvian, German)",

        "SHA512 Security encryption",

        "Google Authenticator",

        "Google OAuth Login & Signup",

        "Password user reset",

        "Welcome & Password changed email notifications",

        "Email template easily customizable",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Android Studio", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://cryptolla.online",

      githubUrl: "https://github.com/quotora",

      liveUrl: "https://cryptolla.online"

    },

    'capturepay-start-your-own-secure-online-payment-gateway': {

      title: "CapturePay – Start your own Secure Online Payment Gateway",

      category: "Finance",

      tags: ["Finance", "Payment Gateway", "Secure Payments", "Online Payments", "Fintech", "Payment Processing"],

      description: "This is an online payment gateway that ensures smooth and secure transactions. It will help to keep your account more secure & reliable. Enjoy safe online payments through it. This system is similar to larger payment services like PayPal or Stripe.",

      status: "12 Sales",


      slug: "capturepay-start-your-own-secure-online-payment-gateway",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "CapturePay is an online payment gateway that ensures smooth and secure transactions. It will help to keep your account more secure & reliable. Enjoy safe online payments through it. This system is similar to larger payment services like PayPal or Stripe. You can deposit money in a few minutes with multiple currencies and multiple payment gateways like PayPal, Stripe, CoinPayments and much more. The main features include Deposit, Payout, Transfer, Exchange, Request Payment, Ticketing system, Revenues, Merchants, Merchant Payment etc.",

      features: [

        "Online payment gateway that ensures smooth and secure transactions",

        "Help to keep your account more secure & reliable",

        "Enjoy safe online payments through it",

        "System is similar to larger payment services like PayPal or Stripe",

        "Deposit money in a few minutes with multiple currencies",

        "Multiple payment gateways like PayPal, Stripe, CoinPayments and much more",

        "Deposit, Payout, Transfer, Exchange, Request Payment",

        "Ticketing system, Revenues, Merchants, Merchant Payment",

        "If user has any claim against any payment, he/she can claim to the defendant using Dispute",

        "Deposits - Registered users can make deposit into it",

        "With our system payment methods, user can do deposit",

        "User can select in which Wallet they want to deposit the amount",

        "Transfer Amount - It is possible transfer money to any registered or unregistered users",

        "Unregistered users can see their money once they signup",

        "Admin can block, refund for any illegal issues",

        "Request Amount - Registered users can request money to any Registered or Unregistered users",

        "Request receiver has the option to approve the request or cancel it",

        "Currency Exchange - By pay Money, user can exchange any currency 'From wallet' to 'To wallet'",

        "Can set exchange type as Local/API",

        "Based on each currency exchange rate, amount will be converted and added on user wallets",

        "Admin can see details about exchange in Currency Exchange",

        "Payment Methods - Currently, we have 7 payment methods to deposit money",

        "PayPal, Stripe, 2Checkout, PayUMoney, Coin Payments, Bank & Payeer",

        "From Currencies->Payment method, admin can activate/deactivate payment methods",

        "Payouts / Withdrawals - Money can be easily withdrawn from wallets",

        "PayPal/Bank, how do you want to withdraw your money",

        "To withdraw money, you must first enter your bank details in the withdrawal settings",

        "If it is PayPal, simply enter your PayPal email address",

        "Withdrawal, on the other hand, is a manual process in this",

        "Following the withdrawal request, admin will manually send the funds to the bank or paypal email address",

        "Revenues - Fixed amount charge & charge percentage is revenue in this system",

        "For transaction types each currency, admin can set few amount of charges from fees",

        "That will separately show in Revenues in admin panel",

        "Only admin can see revenues",

        "Roles & permissions - As owner of this site you can add other user as admin",

        "Providing permission to specific role",

        "User Group - Admin can add default group for site users",

        "For group users, admin gives specific permission to each group",

        "For example, Users may apply to be Merchant and admin can change his group to Merchant providing extra permission",

        "Preferences - From settings-> preferences, admin can set Time zone, Date format, Money symbol, Thousands separator",

        "Activity Logs - Admin can see each users login activity from activity logs",

        "Fees & Limits - Fees & Limits are the combination of currency and payment methods",

        "Deposit, Transfer, Payout, Request payment & Exchange",

        "Fees are applicable as charge percentage & charge fixed where limit is the combination of minimum limit & maximum limit",

        "Merchants - User can create merchants via this system",

        "We have two types of merchant- Standard & Express",

        "In Standard type user can create merchant and generate merchant payment form",

        "By this form user will get the pay now option & do payment to merchant",

        "Express Checkout gives your buyers a simplified and secure checkout experience using API",

        "That keeps them local to your website or mobile app throughout the payment process",

        "Disputes - User can contact with merchant through Dispute option",

        "If user have any claim about their product",

        "Administration can take action (Approved or Reject) discussion on both parties",

        "Create Tickets - Ticket system is better way to dealing with customer about their issues",

        "Where user can report or ask questions on various issues",

        "If you have trouble with the site or program, you can use this option as help",

        "Email Templates & settings - To send mail we have dynamic email template which is changeable too",

        "If you want you can change the template",

        "It also supports multiple languages",

        "We have two E-mail sending protocols",

        "You can send email via SMTP and another one is default, send mail option",

        "2-Factor Authentication - 2FA is an extra layer of security used to make sure that people trying to gain access to an online account are who they say they are",

        "It is used to control access to systems and data from hackers",

        "2FA is allowed for By email, By Phone & By Google Authentication",

        "By email & phone: When you verify for email, a 6-digits code will be send to your email to verified your email address",

        "By phone, verification process is same as email processing system",

        "By Google Authentication: Set up google authenticator app into your mobile phone before continuing",

        "Otherwise you will be unable to verify",

        "Then scan QR code from your systems via phone & enter the 6-digit OTP from your app",

        "Email/Phone verification - Email verification services help you to protect your account",

        "This process is helpful to confirming that an email address is valid or not",

        "System automatically send a verification code to the email address used to sign up for the account",

        "Manual Deposits & Payouts/Withdrawals - The system allows for manual deposits and withdrawals",

        "For every specific user, the administrator can manually deposit and withdraw funds",

        "Additionally, a user can manually deposit money via bank and withdraw funds to a bank or PayPal account",

        "Know your customer (KYC) - It is the process of knowing your customers",

        "It helps to verify the identity of any clients either before or during the time you start the business with them",

        "KYC allows companies to protect themselves by ensuring that they are doing business legally or not",

        "And it also protects the individuals who might otherwise be harmed by financial crime",

        "There are two types of verifications- Address verifications & Identity verifications",

        "Address verifications: Go to user profile and upload appropriate file for address verification",

        "If admin approves it, it will display 'Address verified' in users list in admin panel and also in user profile in user panel",

        "Identity verifications: At first, from user panel select the identity type & provide your necessary credentials",

        "When admin approves the user identity, it will show 'Identity Verified' in users list in admin panel and also as in user profile",

        "Notification Settings - During each transaction admin will get email as transaction notification",

        "Admin will be able to set individual admin email for individual transactions types",

        "Deposit, Send, Request, Payout, Exchange, Payment",

        "To receive email notifications, admin must configure the notification settings from notification settings option",

        "Admin can assign anyone (set email) for each transaction type",

        "User Status Change: Admin can change user status to Active/Inactive/Suspend",

        "Active: Users can do all types of activities from his/her panel",

        "Inactive: Users can't login to the system",

        "While going to login into the system a message will appear to the user that he/she is inactivated",

        "Suspend: Users will be able to login to the system, but they can't do any type of transactions",

        "Deposit, Send Money, Request payment, Exchange, Payout, Merchant payment",

        "Send/Request Money via Phone number - User can Send/Request money via user phone number",

        "Registered or unregistered users",

        "While transferred amount or send request to user phone number, user get sms on their mobile number",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://capturepay.online",

      githubUrl: "https://github.com/capturepay",

      liveUrl: "https://capturepay.online"

    },

    'swipebank-online-internet-banking-with-account-loans-dsp-nbfc-banks': {

      title: "SwipeBank - Online Internet Banking With Account, Loans, DSP for NBFC & Banks",

      category: "Finance",

      tags: ["Internet Banking", "NBFC", "Banks", "DSP"],

      description: "Complete online internet banking solution with account management, loans, and DSP features for NBFC and banks like ICICI, HDFC.",

      status: "1 Sale",


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


      demoUrl: "https://demo.citylisting.com",

      githubUrl: "https://github.com/citylisting",

      liveUrl: "https://citylisting.com"

    },

    'fantica-premium-content-creators-saas-platform-onlyfans-clone': {

      title: "Fantica – Premium Content Creators SaaS platform, Onlyfans Clone",

      category: "Directory",

      tags: ["Digital Marketing", "Directory", "SAAS", "Social"],

      description: "This is a fully-featured PHP platform that allows you to start your own premium content-based social media platform in no time. The experience is powered by a mobile-first, clean and easy-to-use design, with Dark and Light mode themes, RTL, and localization capabilities. It allows your creators to sell their premium content via monthly subscriptions, offers, bundles, tips, and pay to unlock posts.",

      status: "56 Sales",


      slug: "fantica-premium-content-creators-saas-platform-onlyfans-clone",

      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&crop=center",

      overview: "Fantica is a comprehensive SaaS platform designed for premium content creators, similar to Onlyfans. Our platform enables creators to monetize their content through subscriptions, tips, and exclusive content while providing advanced management tools and analytics.",

      features: [

        "Advanced Posts Creation Module - Multiple file upload, Chunked files uploads, Uploaded file previews, Post draft save, Video conversion via ffmpeg, Watermarking for images & videos",

        "Advanced Feed Module - Bidirectional feed module with swippable gallery and full-screen view, Media galleries with support for audio, video and image files, Post comments, reactions & comments reactions",

        "Search Module - Posts & Users search, Top, Latest, Photo, Video filters",

        "Multiple Payments Providers - Stripe & Paypal payment processors, Coinbase & NowPayments processors for crypto payments",

        "Monetization Options - Monthly/Biannual/Annual subscriptions, Time-limited user subscriptions offer, Post & User tips, Pay to unlock posts, Ad spots, Free profiles",

        "Multiple Storage Drivers - Locally hosted files, AWS S3 stored files (CDN & Presigned URLs support), Wasabi stored files, DigitalOcean spaces stored files",

        "User Notifications - Email & on-site, live notifications",

        "Live User Messenger - With file upload capability",

        "User Bookmarks - Allow users to save content for later",

        "User Lists - Allow users to store users into custom lists",

        "Multiple Emailing Drivers - Log/Mailgun/SMTP",

        "Identity Verification - Ability to enforce creator's identity verification",

        "Content Protection - Ability to disable right click on user posts",

        "Printable Invoices - For each transaction",

        "User Settings - Profile settings, Account, Wallet settings, Payments settings, Rates settings, Subscriptions settings, Notifications settings, Privacy settings, Verify identity settings",

        "Fluent Mobile-First Design - PWA App included",

        "Light & Dark Themes - Easy to rebrand via SCSS vars",

        "RTL/LTR & Translatable Ready - Multi-language support",

        "Advanced Admin Panel - Over 100 different settings",

        "Strong SEO Practices - Sitemap, schema.org, Social media meta",

        "GDPR & Cookies Policy Banner - Compliance features",

        "Unique Hand-Drawn Vector Illustrations - Custom design elements",

        "Social Logins - Facebook, Twitter & Google",

        "Email-Based 2FA Logins - Security features",

        "Web Application - Full-featured web-based platform",

        "Webview Android Application - Native Android app with webview integration",

        "Webview iOS Application - Native iOS app with webview integration",

        "Google Play Marketing - 100 Reviews + Downloads promotion package",

        "Rebranding - Complete brand customization and white-label solution",

        "Setup Web and Mobile Apps - Professional installation and configuration",

        "Publishing Apps on Google Play - Complete app store publishing service",

        "Complete Source Code - Full access to all source code and documentation",

        "1 Year Support - Comprehensive technical support and maintenance"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


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


      demoUrl: "https://demo.urbanbetter.com",

      githubUrl: "https://github.com/urbanbetter",

      liveUrl: "https://urbanbetter.com"

    },

    'binnic-business-suite': {

      title: "Binnic – Business Suite",

      category: "Directory",

      tags: ["Directory", "eCommerce", "Business Management", "CRM", "Accounting"],

      description: "The business suite comes with every suite of components to run and grow your business. It has everything from managing your business finance, managing sales, keeping relations with customers, and helping them when they need you.",

      status: "25 Sales",


      slug: "binnic-business-suite",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "The Business Suite is an exclusive item, which is only available on our website. It's unique in many ways. The Business Suite is highly customizable. If you open it using a text editor, you know what to do, how it works. Install, and develop it on localhost, upload it on your domain. Or change the domain name when you need it, without any restrictions. A modern futuristic user interface tuned for the best performance. It comes with an infinite layout option. Top menu, side menu, no menu, black, white, pink, no matter what you love, what your brand color is, customize it the way you want. Customize it like no others. Make it yours!",

      features: [

        "Business Accounting with insights that guide and motivate you to do better",

        "Easy to use accounting software",

        "Natively connected with Sales, Invoicing, Projects",

        "Advanced reports & business analytics",

        "The Ultimate Relationship Management",

        "Record every interaction of your customers",

        "Built-in customer dashboard",

        "View interactions in a timeline",

        "Share files with customers",

        "Sell with Confidence - Invoices, Quotes & Orders Management",

        "Shareable Invoice Link",

        "Supports both online and offline payments",

        "Customizable PDF Template",

        "Send SMS Notifications",

        "Provide Customer Support",

        "Support Ticketing System",

        "Canned Responses",

        "Knowledgebase",

        "Tasks management",

        "Email & SMS Marketing",

        "Send Group Email & SMS",

        "SMS & Email Templates",

        "Create Leads & Customers via API",

        "Import & Export Customers",

        "API Support - The possibilities are limitless",

        "Connect with third-party systems",

        "Create custom integrations",

        "Manage your Products & Services",

        "Create Invoice from Products",

        "POS Interface",

        "Track Sales",

        "Sell Services",

        "Built in Flexibility",

        "Customize and adapt to your business needs",

        "Scale-up, adopt new business models",

        "Enable what you need and disable everything else",

        "On/Off any Feature",

        "Extend Features using Plugins",

        "100% White Label",

        "Theme Options",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://binnic.com",

      githubUrl: "https://github.com/binnic",

      liveUrl: "https://binnic.com"

    },

    // eCommerce Products

    'grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone': {

      title: "Grocery Space – Grocery Multi-Store with Customer, Store and Driver apps – BigBasket Clone",

      category: "eCommerce",

      tags: ["eCommerce", "Grocery", "Mobile Apps", "Multi-Store", "BigBasket Clone"],

      description: "Complete grocery delivery platform with customer, store, and driver apps - BigBasket clone with multi-store management capabilities. What's included: 1. Customer Android App Source Code 2. Store Manager Android Source Code App 3. Delivery Boy Android App Source Code 4. Admin Panel PHP Script Source Code 5. WordPress website with source code",

      status: "120 Sales",


      slug: "grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone",

      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",

      overview: "Grocery Space is a comprehensive grocery delivery platform that replicates the functionality of BigBasket. It features separate applications for customers, store owners, and delivery drivers, enabling a complete multi-store grocery ecosystem with real-time inventory management and efficient delivery tracking. The platform includes a premium WordPress website with app landing page, download links, and blog features for SEO.",

      features: [

        "Customer Android App Source Code",

        "Store Manager Android Source Code App",

        "Delivery Boy Android App Source Code",

        "Admin Panel PHP Script Source Code",

        "WordPress website with source code",

        "App landing page on premium WordPress theme",

        "Download links to all applications",

        "Blog feature for SEO blogs and content",

        "Admin Control Features",

        "App User management - Admin can see total registered users",

        "Categories & Sub-Categories - Create unlimited categories with custom icons",

        "Products - Upload/add unlimited products with images & details",

        "Society - Mention delivery areas and set delivery charges",

        "Delivery Schedule Hours - Set delivery timings and time slots",

        "Stock Update - Update product stock levels",

        "Orders - View all store orders details",

        "Pages - Inner pages for app (about us, contact us, etc.)",

        "Rewards Value - Set per reward point value",

        "Notification - Notify customers about new offers",

        "Sliders - Set banners in 3 locations in the app",

        "Coupons - Create discount/promo codes",

        "Deal Product - Set special deals with 24hr discounts",

        "Customer App Features",

        "Rewards / Loyalty on every order",

        "Wallet Option - Load cash for easy checkout",

        "Delivery Convenience - Choose Date & Time",

        "Multiple Payment Options - Store Pickup, COD, Cards, PayTM",

        "Share & review the app",

        "Reach stores via call, WhatsApp & email",

        "Current order statuses & past orders",

        "Redeem rewards points to wallet",

        "Store Manager App Features",

        "Manage orders and change order statuses",

        "Assign orders to Delivery boy",

        "Delivery Boy App features",

        "View order details",

        "Call customers via app",

        "Mark orders delivered with customer signature",

        "Admin Web application",

        "Landing Page",

        "Android application",

        "iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://groceryspace.online",

      githubUrl: "https://github.com/groceryspace",

      liveUrl: "https://groceryspace.online"

    },

    'buyyu-fashion-lifestyle-ecommerce-platform-mobileapp': {

      title: "Buyyu – Fashion & Lifestyle eCommerce Platform with Mobileapp",

      category: "eCommerce",

      tags: ["eCommerce", "Fashion", "Lifestyle", "Mobile App", "WordPress", "Multi-Vendor"],

      description: "Powerful eCommerce platform with advanced features for fashion and lifestyle businesses. Features include Ajax search, compare functionality, wish list, off canvas cart, buy together recommendations, size guide, offer text, service text, and fully supported multi-vendor capabilities.",

      status: "95 Sales",


      slug: "buyyu-fashion-lifestyle-ecommerce-platform-mobileapp",

      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&crop=center",

      overview: "Buyyu is a comprehensive fashion and lifestyle eCommerce platform built with WordPress, featuring a clean and modern design with drag & drop builder, advance mega menu, instant ajax search, and high performance optimization. The platform includes mobile app support for both Android and iOS, multi-vendor capabilities, and advanced eCommerce features designed for modern retail businesses.",

      features: [

        "Powerful Ecommerce Features",

        "Ajax search - Enter keyword to find tagged items",

        "Compare - Put different items together for detailed comparison",

        "Add to wish list - Add items to favorite wish list",

        "Off canvas cart - Cart positioned off canvas to save space",

        "Buy Together - Increase sales with personalized recommendations",

        "Size Guide - Size Guide Option for all products",

        "Offer Text - Add special offers for products",

        "Service Text - Add special services for products",

        "Multi-Vendor - Fully supported multi vendor platform",

        "Advance Review style",

        "Product Video support",

        "Main Features",

        "Clean and Modern design",

        "Drag & Drop Builder",

        "Advance Mega Menu",

        "Advanced Shop functionality",

        "Instant ajax Search",

        "Shop List/Grid view",

        "Frequently Bought Together",

        "Quick Buy Button",

        "Multi-Vendor support",

        "Quickview Popup",

        "Catalog mode",

        "Wishlist functionality",

        "AJAX add to cart",

        "High Performance - Optimized for speed and SEO",

        "Build with HTML5 and CSS3",

        "100% Fully Responsive design",

        "Typography Control",

        "Google Font included",

        "Typkit Fonts integration",

        "Custom font option",

        "RTL support",

        "Retina ready",

        "Advance Portfolio Styles",

        "Unlimited Colors - Change whole website color with color picker",

        "Custom Widgets",

        "Posts List widget",

        "Tab Posts widget",

        "Recent Posts widget",

        "Recent Comments widget",

        "Portfolios widget",

        "About Us widget",

        "Author widget",

        "Newsletter widget",

        "Social Links widget",

        "Instagram widget",

        "Twitter widget",

        "Facebook Page widget",

        "Flickr widget",

        "Products widget",

        "Products Tab widget",

        "Recent Viewed Products widget",

        "Attributes Filter widget",

        "Product Brands widget",

        "Product Sorting widget",

        "Price Filter List widget",

        "Translation Ready - Fully prepared for translation to any language",

        "SEO Ready compatible",

        "Advance Blog Options",

        "Many Useful Views",

        "Products Grid Or Carousel",

        "Products With Banner",

        "Products Tabs",

        "Products And Categories Box",

        "Hot Deal Products",

        "Product Categories",

        "Product Categories Thumbnail",

        "Products Recently View",

        "Products Brands",

        "Products Widgets",

        "Vertical/Categories Menu",

        "Blog functionality",

        "Blog Carousel",

        "Portfolio",

        "Portfolio Carousel",

        "Button components",

        "Menu Block",

        "List components",

        "Heading components",

        "Banner",

        "Banner Carousel",

        "Image Gallery",

        "Testimonials",

        "Team section",

        "Info Box",

        "Counter",

        "Countdown Timer",

        "Social Button",

        "Instagram integration",

        "Twitter integration",

        "Video Player",

        "Newsletter",

        "Contact Us",

        "Progress Bar",

        "Tabs",

        "Tour",

        "Accordion",

        "Advanced Options Panel",

        "Contact Form",

        "Modern Cross Browser Supports",

        "Social Sharing",

        "Multilingual support",

        "Mobile App Features",

        "Engages consumers to constitute Loyalty",

        "Sharp design and features for online shop",

        "Multi-Vendor Features",

        "Web application",

        "Android application",

        "iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "WordPress", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://buyyu.online",

      githubUrl: "https://github.com/buyyu",

      liveUrl: "https://buyyu.online"

    },

    'bunnypay-complete-ecommerce': {

      title: "Bunnypay – Complete eCommerce",

      category: "eCommerce",

      tags: ["eCommerce", "All-in-One", "Multi-Product", "12 Payment Gateways", "Complete Solution"],

      description: "All in One eCommerce Shopping Platform. If you have planned to buy a single vendor eCommerce shopping platform. You can choose this as the most suitable platform for single vendor eCommerce. Perfect for Man & Women Fashion Shop, Electronics & Computers Shop, Toys & Kids Shop, Food & Grocery Shop, Tools & Parts Shop, Beauty & Health Shop, Watch & Jewelry Shop, Home & Furniture Shop, Sports & Outdoors Shop, Digital Marketplace, Digital Product Shop, Affiliate Product Shop, Software Licence key Shop, etc.",

      status: "90 Sales",


      slug: "bunnypay-complete-ecommerce",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "Bunnypay is an all-in-one eCommerce shopping platform designed for single vendor eCommerce businesses. It supports unlimited categories, brands, products, attributes, coupons, and orders. The platform comes with 12 payment gateways, full content management system, SEO optimization, order tracking system, and comprehensive features for various business types including fashion, electronics, toys, food, tools, beauty, jewelry, furniture, sports, digital products, affiliate products, and software license keys.",

      features: [

        "Physical Product Sell - Sell any kind of physical product with attributes",

        "Digital Product Sell - Sell digital products (web themes, templates, code, video, audio, graphics, photos, 3D files) without license code",

        "Affiliate Product Sell - Sell affiliate products using affiliate links from Amazon, Shopify, eBay, Alibaba, etc.",

        "Software License key Sell - Sell software or games license keys with unique license key generation",

        "Product Attribute Option - Fully functional attribute management system",

        "Unlimited product attributes and attribute options",

        "Attribute wise product price and stock management",

        "CSV Product Upload - Upload products via CSV with sample file structure",

        "Clean and Modern Frontend & Admin Interface",

        "100% Responsive Design",

        "4 Home Page layouts",

        "Multi Currency Support",

        "12 Payment Method integration",

        "Guest Checkout Option",

        "State-wise Tax calculation",

        "Currency/Price Separator option with Dot and Comma",

        "Ajax Product Load",

        "CSV Product Export",

        "CSV Order Export",

        "CSV Transactions Export",

        "Bulk Delete Option",

        "Image Lazy Load",

        "Sitemap Generator",

        "Google Adsense integration",

        "Google Analytics integration",

        "Google reCAPTCHA",

        "Facebook Pixel",

        "Facebook Messenger",

        "Database Backup System",

        "System Backup System",

        "Currency Left Or Right Show option",

        "Sale Analytics",

        "Coupon Management",

        "Product Variants",

        "RTL Support",

        "Email Notification",

        "SMS Notification",

        "Product Wishlist",

        "Product Compare",

        "Campaign Offer",

        "Flash Deal",

        "Unlimited Color Option",

        "Tax Module",

        "Shipping Module",

        "Maintenance Module",

        "Custom CSS Settings",

        "GDPR Cookie Alert",

        "Translate Frontend & Admin Dashboard",

        "Announcement & Popup Module",

        "Support Modern Browser and Cross-browser Compatibility",

        "Video Tutorials",

        "Regular Updates Facilities",

        "Lifetime Free Update",

        "Premium and Quick Support",

        "12 Payment Method Support",

        "Paypal payment gateway",

        "Stripe payment gateway",

        "Paytm payment gateway",

        "Paystack payment gateway",

        "Mercadopago payment gateway",

        "Authorize.Net payment gateway",

        "Mollie payment gateway",

        "Razorpay payment gateway",

        "Flutterwave payment gateway",

        "SSLcommerz payment gateway",

        "Cash On Delivery",

        "Bank Transfer",

        "Admin Features",

        "100% Secure Admin Dashboard",

        "Categories Management",

        "Product Management",

        "Product Brands Management",

        "Product Attribute Management",

        "Product Create Management",

        "Product Campaign Management",

        "Product CSV Import & Export Management",

        "Product Reviews Management",

        "Product Order Management",

        "Transaction Management",

        "Coupon Management",

        "Shipping Management",

        "Tax Management",

        "Currency Management",

        "Payment Gateway Management",

        "Customer Management",

        "Ticket Management",

        "General Settings Management",

        "Home Page Management",

        "Slider Management",

        "SEO Management",

        "Service Management",

        "Dynamic Color Management",

        "Banner Management",

        "Page Visibility (On/Off section) Management",

        "Social Login Management",

        "Email Management",

        "SMS Management",

        "Announcement Popup Management",

        "Cookie Alert Management",

        "Maintenance Mode Management",

        "Sitemap Management",

        "Language Management",

        "FAQ Management",

        "Blog Management",

        "Dynamic Page Management",

        "Subscribers Management",

        "User Role Permission Management",

        "User Features",

        "Clean User Interface",

        "Dashboard Manager",

        "Profile Manager",

        "Tickets Manager",

        "Order Log",

        "Address Manager",

        "Wishlist Manager",

        "Delete Account Option",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://bunnypay.online",

      githubUrl: "https://github.com/bunnypay",

      liveUrl: "https://bunnypay.online"

    },

    'skillsly-ultimate-elearning-website': {

      title: "SkillSly – Ultimate eLearning Website",

      category: "eCommerce",

      tags: ["eCommerce", "Education", "eLearning", "LMS", "Enterprise Grade", "JEE NEET"],

      description: "It is an Enterprise grade Learning management system Website for Class 9th to 12th, JEE, NEET, and other exams. It is a complete system with all the features of any modern LMS. It provides the best of Social and eCommerce sites. Best for Instructors, Educational Training Centres, Corporate trainings, Coaching centres, Course tutors, College, Academy, University, School and MOOC platform.",

      status: "82 Sales",


      slug: "skillsly-ultimate-elearning-website",

      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",

      overview: "SkillSly is an Enterprise grade Learning Management System designed for Class 9th to 12th, JEE, NEET, and other competitive exams. It's a complete system with all the features of any modern LMS, providing the best of Social and eCommerce sites. Perfect for Instructors, Educational Training Centres, Corporate trainings, Coaching centres, Course tutors, College, Academy, University, School and MOOC platform.",

      features: [

        "Learning Management System",

        "Manage Students and Instructors",

        "Categorise Types, students, departments and Instructors",

        "Filterable Members Directory - Filter by any property, from birth date to country",

        "Custom Member Profiles - Different profile layouts for different member types",

        "Filter members based on location with Google map",

        "Manage Courses",

        "Manage Quizzes - Independent Quizzes & Management",

        "Custom Course directories",

        "Subjects, Classes management",

        "Parents with Student Claim option",

        "Attendance with ID card",

        "Instructor appointments",

        "Integration with BBB Conferencing",

        "Course Creation and Management",

        "Create and Sell Courses",

        "Create and upload custom badges and certificates",

        "Free Units for Course Preview",

        "Supports Audio/Video and Attachments in Units",

        "Course Curriculum and Course Timeline",

        "Course Reviews & Ratings",

        "Exclusive Course Groups & Forums",

        "Front End Functions",

        "Course Manual Evaluation",

        "Remove reset Courses for Students",

        "Overall Course Stats",

        "Students Course Stats",

        "Course Result",

        "Auto Messages & Notifications",

        "Bulk Messaging",

        "Live status in Course Timeline",

        "Set Course Status, award marks for course",

        "Award Certificates, Badges",

        "Extend subscriptions",

        "Course Section",

        "Displays Courses ordered by # students, # ratings, #reviews, date",

        "Displays Courses in Single Items, Course lists and Course Carousels",

        "Course Search Section",

        "Search in Courses",

        "Select Instructor, Course Category or Course levels to search in",

        "Course Reviews Section",

        "Displays Courses reviews",

        "Displays course reviews in Single Items, lists and Carousels",

        "Site Stats Section",

        "Displays Site wide stats",

        "Displays # Instructors, #students, #courses, #units etc..",

        "Course Instructor Section",

        "Displays Instructor of the Single Course",

        "Displays other courses taken by Instructor",

        "Quizzes",

        "Question Bank",

        "Auto Evaluation",

        "Quiz Timer",

        "Quiz Timeline",

        "Question Types - Multiple Choice, Multiple Correct, Fill in the Blank, Sort, Match, Select dropdown, Small text & Essay Type",

        "Detailed Result",

        "Auto Messaging & Notifications",

        "Quiz Automatic/Manual Evaluation",

        "Reset Quiz for Student",

        "Quiz Auto Submit on timer expire",

        "In Course vs Stand alone quiz",

        "One Question per frame or Multi Question per frame",

        "Live status in Quiz Timeline",

        "Quiz support Audio, Video, Latex",

        "Quiz Stats, download student scores",

        "Dynamic Question, create quiz from pool of questions",

        "Share / Print result",

        "Assignments",

        "Assignments similar to HomeWork, Timer (in Days), Auto submit",

        "Multiple Assignment Upload",

        "Essay type assignment",

        "Include assignment in Course, Unit, Event",

        "Detailed Result with instructor remarks",

        "Auto Messaging & Notifications",

        "Assignment Manual Evaluation",

        "Reset Assignment for Student",

        "Assignment Auto Submit on timer expire",

        "Remarks from Instructor",

        "Message, Notification or Email",

        "Statistics",

        "Detailed Statistics",

        "Full Course Stats",

        "Quiz Stats",

        "Assignment Stats",

        "Instructor Stats (Front End)",

        "Full Course Stats",

        "Student Wise Stats",

        "Admin Stats",

        "Overview - Total Students, instructors, courses, # students courses graphs",

        "Course-wise stats - Each Course with # students, Average marks, # badges, #certificates",

        "Instructor-wise stats - Each Instructor with # students, Average marks, # badges, #certificates",

        "Bulk Import/Export",

        "Export CSV",

        "Import & create Course, Quiz, Questions, Assignments",

        "Import & create Users",

        "Connect users with courses, quizzes, assignments with marks",

        "Import CSV",

        "Shop",

        "Multiple Course in single product",

        "Enable/Disable Subscriptions",

        "Custom Subscription duration for each Product",

        "Private Course Groups",

        "Private Course Forums",

        "Privacy Options",

        "Enable/Disable Activity Access to Students, Instructors, Admin or All",

        "Enable/Disable Groups Access to Students, Instructors, Admin or All",

        "Enable/Disable Group creation to Students, Instructors, Admin",

        "Show/hide Single user Profile Activity",

        "Show/hide Single user Profile Groups",

        "Show/hide Single user Profile Forums",

        "Responsive and RetinaReady",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "WordPress", "Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://skillsly.tech",

      githubUrl: "https://github.com/skillsly",

      liveUrl: "https://skillsly.tech"

    },

    'skillbuzz-udemy-clone-online-courses-learning-management-system': {

      title: "Skillbuzz – Udemy Clone – Online Courses and Learning Management System",

      category: "Education",

      tags: ["Education", "Udemy Clone", "Online Learning", "Course Marketplace", "LMS"],

      description: "This Startup is a marketplace for online learning. Here students and teachers are combined together for sharing knowledge through a structured course based system. Teachers or instructors can create unlimited number of courses, upload videos and documents according to their expertise and students can enroll to these courses and make themselves skilled anytime and from anywhere. So start selling your courses and make your online business today.",

      status: "72 Sales",


      slug: "skillbuzz-udemy-clone-online-courses-learning-management-system",

      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",

      overview: "Skillbuzz is a marketplace for online learning where students and teachers are combined together for sharing knowledge through a structured course based system. Teachers or instructors can create unlimited number of courses, upload videos and documents according to their expertise and students can enroll to these courses and make themselves skilled anytime and from anywhere. So start selling your courses and make your online business today.",

      features: [

        "Marketplace for online learning",

        "Students and teachers combined together",

        "Sharing knowledge through structured course based system",

        "Teachers or instructors can create unlimited number of courses",

        "Upload videos and documents according to their expertise",

        "Students can enroll to these courses",

        "Make themselves skilled anytime and from anywhere",

        "Start selling your courses",

        "Make your online business today",

        "Course creation and publishing",

        "Instructor dashboard",

        "Student progress tracking",

        "Video streaming platform",

        "Payment and revenue sharing",

        "Course reviews and ratings",

        "Discussion forums",

        "Mobile app support",

        "Web application",

        "Android application",

        "iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "CodeIgniter", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://skillbuzz.online",

      githubUrl: "https://github.com/skillbuzz",

      liveUrl: "https://skillbuzz.online"

    },

    'bona-kart-multivendor-ecommerce-platform-android-ios-apps': {

      title: "Bona Kart: Multi-Vendor eCommerce Platform with Android & iOS app",

      category: "eCommerce",

      tags: ["eCommerce", "Multi-Vendor", "WordPress", "Bootstrap", "Mobile Apps"],

      description: "Multi-vendor eCommerce platform with Android and iOS apps built on Bootstrap 4. Features include advanced products live search, 3 different layouts for single product pages, advanced reviews, specifications tab, accessories for products like Amazon, catalog mode, shop page, wishlist and compare, brands carousel, products carousel, and custom product comparison page.",

      status: "55 Sales",


      slug: "bona-kart-multivendor-ecommerce-platform-android-ios-apps",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "Bona Kart is a comprehensive multi-vendor eCommerce platform built on Bootstrap 4 with cross-browser compatibility and SASS support. The platform features a responsive megamenu, various post formats, advertisement management with subscription, affiliate management system, and advanced eCommerce features designed for modern online marketplaces.",

      features: [

        "Website Features",

        "Built on Bootstrap 4",

        "Cross-browser compatible",

        "Built with SASS - All SASS files included",

        "Responsive Megamenu",

        "Supports various post formats and post thumbnails feature",

        "Advertisement management with subscription",

        "Affiliate management system",

        "Ecommerce Features",

        "Advanced Products Live Search",

        "3 Different layouts for Single Product Pages",

        "Advanced Reviews",

        "Advanced Specifications tab",

        "Accessories for Products like in Amazon",

        "Catalog Mode available",

        "Shop Page",

        "Wishlist and Compare",

        "Brands Carousel",

        "Products Carousel",

        "Ability to display products in 2, 3, 4, 5, 6, 7 and 8 columns",

        "Custom Product Comparison page",

        "Blog Options",

        "3 Different types of layout - Classic, List View, Grid View",

        "Choose from Right Sidebar, Left Sidebar or Full-width layouts",

        "Enable placeholder images",

        "Other Customization Options",

        "Integrated with Google Fonts",

        "Can choose from FontAwesome icons",

        "Integrated with Social Media",

        "Can paste custom CSS easily",

        "Import/Export customization options",

        "Mobile App Features",

        "Engages consumers to constitute Loyalty with sharp design and features which makes sense for the online shop",

        "Multi-Vendor Features",

        "Web application",

        "Android application",

        "iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "WordPress", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://bonakart.online",

      githubUrl: "https://github.com/bonakart",

      liveUrl: "https://bonakart.online"

    },

    // Education Products

    'school-silo-multi-school-management-system': {

      title: "School Silo – Multi-School Management System",

      category: "Education",

      tags: ["Education", "ERP & CRM", "Multi-School", "Management", "School Administration"],

      description: "Comprehensive multi-school management system with advanced features for managing multiple educational institutions from a single platform. Complete ERP solution for schools with student management, teacher administration, academic planning, fee collection, and parent communication.",

      status: "89 Sales",


      slug: "school-silo-multi-school-management-system",

      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&crop=center",

      overview: "School Silo is a comprehensive multi-school management system designed to handle the complex needs of educational institutions. It provides centralized management for multiple schools, allowing administrators to oversee operations, track performance, and manage resources efficiently across different campuses. The system includes complete ERP functionality for student management, teacher administration, academic planning, fee collection, library management, transport coordination, and parent communication.",

      features: [

        "Multi-school dashboard management",

        "Student enrollment and records management",

        "Teacher and staff management system",

        "Academic calendar and scheduling",

        "Fee management and billing system",

        "Library management integration",

        "Transport management and tracking",

        "Parent communication portal",

        "Student attendance tracking",

        "Grade and assessment management",

        "Timetable and class scheduling",

        "Examination management",

        "Report card generation",

        "Financial management and accounting",

        "Inventory management",

        "Communication system",

        "Document management",

        "User role and permission management",

        "Data backup and security",

        "Mobile app access",

        "Real-time notifications",

        "Analytics and reporting",

        "Multi-language support",

        "Customizable dashboards",

        "Integration with external systems",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://schoolsilo.online",

      githubUrl: "https://github.com/schoolsilo",

      liveUrl: "https://schoolsilo.online"

    },

    'hostelstead-hostel-room-management-system': {

      title: "Hostelstead – Hostel/Room Management System",

      category: "Education",

      tags: ["Education", "ERP & CRM", "Hostel Management", "Room Booking", "Tenancy Management"],

      description: "Built with 3 years of dedicated customer research. We surveyed & interviewed hostel owners, hotel administrators and room renters around the globe and created a comprehensive tool for management of any tenancy based business. We must save time, money & hassle for the managers, staff & renters so that their accommodation experience would be easy & friendly.",

      status: "76 Sales",


      slug: "hostelstead-hostel-room-management-system",

      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop&crop=center",

      overview: "Hostelstead is a comprehensive hostel and room management system built with 3 years of dedicated customer research. We surveyed and interviewed hostel owners, hotel administrators and room renters around the globe to create a comprehensive tool for management of any tenancy based business. The system is designed to save time, money & hassle for managers, staff & renters so that their accommodation experience would be easy & friendly.",

      features: [

        "Built with 3 years of dedicated customer research",

        "Surveyed & interviewed hostel owners, hotel administrators and room renters around the globe",

        "Comprehensive tool for management of any tenancy based business",

        "Save time, money & hassle for managers, staff & renters",

        "Easy & friendly accommodation experience",

        "Benefits of using this system",

        "Customizable roles & permissions allows easy access control for multiple users",

        "Unlimited resources (Room, Tenant & Staff) can be added, viewed, edited & removed ensuring a scalable solution",

        "Summarized information can be accessed instantly in the dashboard",

        "Error & hassle free money management regarding utility, expense, invoice (rent) & salary",

        "Easily upgradable and advanced engineering to ensure security & user friendliness",

        "Room allocation and booking system",

        "Resident management system",

        "Payment and fee collection",

        "Maintenance request tracking",

        "Visitor management",

        "Mess and meal management",

        "Security and access control",

        "Reporting and analytics",

        "Utility management",

        "Expense tracking",

        "Invoice and rent management",

        "Salary management",

        "Dashboard with summarized information",

        "Scalable solution for unlimited resources",

        "Advanced security features",

        "User-friendly interface",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://hostelstead.online",

      githubUrl: "https://github.com/hostelstead",

      liveUrl: "https://hostelstead.online"

    },

    'libraxo-library-management-system-website': {

      title: "Libraxo – Library Management System with Website",

      category: "Education",

      tags: ["Education", "ERP & CRM", "Library Management", "Digital Resources", "Book Management"],

      description: "Library management system where you can easily manage your library. It has a 25+ feature module and a 6+ report module. It's a web-based application where you can easily add, edit, update books also you can be issued books easily. you can easily manage to be fined and payment system. At last, Using the all-powerful report module you can get all the information in your library. If you are looking for the best library management tool I hope this is best.",

      status: "73 Sales",


      slug: "libraxo-library-management-system-website",

      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop&crop=center",

      overview: "Libraxo is a comprehensive library management system with 25+ feature modules and 6+ report modules. It's a web-based application where you can easily add, edit, update books and issue books easily. You can easily manage fines and payment system. Using the all-powerful report module you can get all the information in your library. If you are looking for the best library management tool, this is the best solution.",

      features: [

        "25+ Feature Module",

        "6+ Report Module",

        "Web-based application",

        "Easily add, edit, update books",

        "Issue books easily",

        "Manage fines and payment system",

        "All-powerful report module",

        "Get all information in your library",

        "Best library management tool",

        "Easily configure your library",

        "Manage Library Book Issue, Return, Fine And Payment",

        "Multi Theme Support",

        "Frontend Features",

        "Front Page",

        "Ebook",

        "Shop",

        "Book Details",

        "Contact Page",

        "Feature Module",

        "Dashboard (Income/Expense) Management",

        "Book Issue (Fine/Renew/Payment/Return) Management",

        "Member Management",

        "Ebook Management",

        "Book Management",

        "Book Barcode Management",

        "Rack Management",

        "Book Category Management",

        "Request Book Management",

        "Store Book Management",

        "Store Book Category Management",

        "Order Management",

        "Email/Notification Management",

        "Income Management",

        "Expense Management",

        "Rlie Management",

        "Email Template Management",

        "Permission Management",

        "Permissionlog Management",

        "Setting Management",

        "Email Setting Management",

        "Library Configure Management",

        "Report Module",

        "Book Report",

        "Book Issue Report",

        "Member Report",

        "ID Card Report",

        "Transaction Report",

        "Book Barcode Report",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://libraxo.online",

      githubUrl: "https://github.com/libraxo",

      liveUrl: "https://libraxo.online"

    },

    'quizmatics-real-money-quiz-game-app': {

      title: "QuizMatics – Real Money Quiz Game/App",

      category: "Games",

      tags: ["Games", "Quiz Game", "Real Money", "Gamification", "Mobile App", "Trivia", "Contests"],

      description: "With more fun, more advanced security, more advanced design, more lucrative price with the most innovative online trivia quiz where you can participate in live trivia quizzes, battle quizzes & contests + many more which you have to answer correctly to win the cash prize.",

      status: "58 Sales",


      slug: "quizmatics-real-money-quiz-game-app",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "QuizMatics is the most innovative online trivia quiz where you can participate in live trivia quizzes, battle quizzes & contests. With more fun, more advanced security, more advanced design, and more lucrative prizes, users can answer correctly to win cash prizes. The app features beautiful & well-designed layout with key principles of effective UI design, Lottie animation, shimmer effect & material component theme.",

      features: [

        "Live trivia quizzes",

        "Battle quizzes & contests",

        "Answer correctly to win cash prizes",

        "Beautiful & well designed layout",

        "Key principles of effective UI design",

        "Lottie animation",

        "Shimmer effect & material component theme",

        "Wallet feature with transactions history",

        "All transitions history of coin or activity",

        "Pick up taking a quiz where you left off",

        "Showing progress with subcategories about attempted questions",

        "Displaying in-completed quiz list on home page with progress",

        "Quiz result update with the attempted question",

        "Quiz Zone - access to all questions",

        "Filtered by category and subcategory",

        "Contest Zone - earn more coins by taking part in quiz contests",

        "Answer questions on one or more topics",

        "Battle Zone - beat opponents and win more coins",

        "Coins can be converted into cash",

        "Play Zone - choose any favorite topic to Earn Coins",

        "Daily Quiz, Random Quiz, True / False, or Self-Challenge",

        "Transaction History - checkout coin Transactions History",

        "Dashing Leaderboard - see how you rank and what your score is",

        "Motivate to become the top player",

        "Coin Zone - try luck with direct coin rewards on daily basis",

        "Refer & Earn - best & free marketing strategy",

        "Rewarding customer is a great way of saying thank you",

        "User Statistics - analytics and usage statistics",

        "Valuable information about user usage or performance",

        "Powerful Admin Panel - manage all zones questions",

        "User data analysis & facts",

        "Activity tracker by Users - watch and track each activity",

        "Track every small activity related to earning coins",

        "Manage payment Requests - complete, pending, & wrong details status",

        "System setting for the app",

        "App Version Control",

        "Force Update",

        "Maintenance Mode",

        "True Answer Display",

        "Language Mode",

        "Option E Mode",

        "Quiz Control",

        "Advertisement Control",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://quizmatics.online",

      githubUrl: "https://github.com/quizmatics",

      liveUrl: "https://quizmatics.online"

    },

    'schoolroster-school-management-system': {

      title: "SchoolRoster – School Management System",

      category: "Education",

      tags: ["Education", "ERP & CRM", "School Management", "Student Tracking"],

      description: "Comprehensive school management system with student enrollment, academic tracking, and administrative tools.",

      status: "69 Sales",


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


      demoUrl: "https://demo.juqe.com",

      githubUrl: "https://github.com/juqe",

      liveUrl: "https://juqe.com"

    },

    'tokito-android-ios-media-app-creating-sharing-short-videos-tiktok-moj-clone': {

      title: "Tokito – Android & iOS media app for creating and sharing short videos – Tiktok, Moj Clone",

      category: "Entertainment",

      tags: ["Entertainment", "Short Videos", "TikTok Clone", "Social Media", "Video Creation", "Mobile Apps"],

      description: "App for creating and sharing short videos. Trending video sharing platform with video dubbing features, various filters & social media integrations & more.",

      status: "66 Sales",


      slug: "tokito-android-ios-media-app-creating-sharing-short-videos-tiktok-moj-clone",

      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",

      overview: "Tokito is a Native Short Video App for creating and sharing short videos. It's a trending video sharing platform with video dubbing features, various filters & social media integrations & more. Users can create custom music-dubbed video selfie posts, record performances, and become mini internet stars themselves.",

      features: [

        "Native Short Video App",

        "App for creating and sharing short videos",

        "Trending video sharing platform",

        "Video dubbing features",

        "Various filters & social media integrations",

        "Login / Signup - users can use phone number, email address or social media accounts",

        "Register themselves with the app",

        "Credentials can be used for logging into the app",

        "Newsfeed - Based on user's followers & following",

        "News feed constantly updated to showcase latest posts",

        "Top viewed posts in the area",

        "Designed for maximum user engagement rate",

        "Song Audio Selection - Select favorite tracks or upload own from admin panel",

        "Custom video dubbed post with own song or audio selection",

        "Dubbing and Video Selfie - Record custom music-dubbed video selfie posts",

        "Record performances - Multiple options to help users become mini internet stars",

        "Video-Sharing - Share dubbed video or media with other users",

        "Share on other social channels as well on the app",

        "View and Like Your Favourite Video - Users can view videos of various users",

        "Like, comment, and share posts also on the app",

        "Live Streaming - Going live is easier on live video streaming solution",

        "Friends are notified and can watch live stream in real-time",

        "Multiple Media Attachment Chat Options - Social video dubbing & sharing script",

        "Integrated with in-app chat module",

        "Wide variety of multimedia sharing options",

        "Users can attach images or share videos",

        "Send voice messages",

        "Video Discovery - Videos shared by other users can be searched",

        "Search via hashtags or by specifically typing video title",

        "Video Posting - Videos created can be posted by users",

        "Post along with hashtags, descriptions, etc",

        "Other app users can also be tagged in the videos",

        "Video Filters - Various available filters can be applied to videos",

        "Filters enhance visual effects of videos",

        "Make videos look more professional",

        "Video Comments - Other users can comment on your video and vice versa",

        "Helps in improving video content",

        "Users come to know what others feel about their work",

        "In-app Push notifications - Notifications inform users",

        "Notify when users follow other users or send message or do live streaming",

        "Favorite Sounds - Interesting soundtracks can be saved by users",

        "Saved in their profiles and used for video creation in future",

        "View User Profile - Both profiles and videos of other users can be viewed",

        "Users can like, share, and follow profiles they find entertaining",

        "Privacy Settings - Privacy settings can be changed as per requirements",

        "Uploaded video can be shared only with himself or for general public",

        "Users can do a duet or not",

        "User Reporting - Report other users or posts for number of reasons",

        "Helps maintain high content quality standards on the app",

        "Admin Web application",

        "Android application",

        "iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "Core PHP", "MySQL", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://tokito.online",

      githubUrl: "https://github.com/tokito",

      liveUrl: "https://tokito.online"

    },

    'nexagram-instagram-clone-image-photo-sharing-social-network-platform': {

      title: "Nexagram – Instagram Clone – Image & Photo Sharing Social Network Platform",

      category: "Entertainment",

      tags: ["Entertainment", "Social", "Image Sharing", "Photo Platform"],

      description: "Complete Instagram clone with image and photo sharing capabilities, stories, reels, and social networking features.",

      status: "38 Sales",


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


      demoUrl: "https://demo.nexagram.com",

      githubUrl: "https://github.com/nexagram",

      liveUrl: "https://nexagram.com"

    },

    'janoo-dating-platform-like-tinder-badoo-v2': {

      title: "Janoo – Dating Platform like Tinder/Badoo",

      category: "Entertainment",

      tags: ["Dating", "Entertainment", "Social", "Mobile Apps"],

      description: "Modern dating platform similar to Tinder and Badoo with advanced matching algorithms and social features.",

      status: "11 Sales",


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


      demoUrl: "https://janoo.online",

      githubUrl: "https://github.com/janoo",

      liveUrl: "https://janoo.com"

    },

    'fuzetube-video-sharing-platform-youtube-clone': {

      title: "FuzeTube – Video Sharing Platform – YouTube Clone",

      category: "Social",

      tags: ["Social", "Video Sharing", "YouTube Clone", "Entertainment"],

      description: "Fast and secured complete video sharing platform with advanced features including video upload, import from YouTube/Dailymotion/Vimeo, auto-import functionality, high performance capabilities handling 1B+ videos, WoWonder integration, like/dislike system, comments, subscriptions, user channels, advertisement system, and SEO optimization.",

      status: "Available",

      price: "$3,000 – $8,000",

      slug: "fuzetube-video-sharing-platform-youtube-clone",

      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",

      overview: "FuzeTube is a comprehensive video sharing platform that replicates all the core features of YouTube. It provides a complete solution for creating your own video sharing website with advanced features like auto-import from multiple platforms, high-performance video handling, and comprehensive social features.",

      features: [
        "Upload Videos: Upload any video from your device and share it online",
        "Import Videos: Import videos easily from YouTube, Dailymotion, and Vimeo",
        "Auto Import Videos: Choose keywords and import thousands of videos automatically",
        "High Performance: Handle more than 1B videos with high performance and speed",
        "WoWonder Integration: One-click login using WoWonder Social Network",
        "Like & Dislike: Users can like or dislike videos",
        "Comments System: Users can comment on videos",
        "Subscriptions: Subscribe to channels and manage subscriptions",
        "History & Watch Later: Track viewing history and save videos for later",
        "User Channels: Create unlimited channels and upload unlimited videos",
        "Advertisement System: Full advertisement system for admin and users",
        "SiteMap Generator: Generate powerful sitemaps and ping to Google/Bing",
        "SEO Friendly: SEO optimized links and HTML code",
        "Powerful Admin Panel: Manage settings, videos, design, and more",
        "Modern UI: Beautiful and modern design"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "FFMPEG",
        "AWS S3",
        "Redis",
        "Elasticsearch"
      ],

      demoUrl: "https://demo.fuzetube.com",

      githubUrl: "https://github.com/fuzetube",

      liveUrl: "https://fuzetube.com"

    },

    'friendza-social-networking-platform-facebook-clone': {

      title: "Friendza – Social Networking Platform – Facebook Clone",

      category: "Social",

      tags: ["Social", "Social Network", "Facebook Clone", "Community"],

      description: "Fast and secured complete social networking platform with high performance cache system, Wonder feature, RTL support, social login integration, user profiles, friends/follow system, news feed, timeline, pages, groups, games, video support, photo albums, privacy controls, notifications, hashtags, mentions, and live chat.",

      status: "Available",

      price: "$4,000 – $10,000",

      slug: "friendza-social-networking-platform-facebook-clone",

      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&crop=center",

      overview: "Friendza is a comprehensive social networking platform that replicates all the core features of Facebook. It includes advanced caching systems, social features, and comprehensive management tools for creating your own social network.",

      features: [
        "High Performance Cache System: Handle more than 1 Million users",
        "Wonder Feature: Users can wonder posts, photos, videos",
        "RTL Support: Supports right to left languages",
        "Social Login: Login via Facebook, Twitter, Google+, LinkedIn, VK, Instagram",
        "Easy URL System: Users, Pages, Groups all in one tiny URL",
        "User Last Seen: Displays user's last seen/online status",
        "Profile Visit Notification: Receive notifications from profile visitors",
        "Friends & Follow System: Supports both friends and follow systems",
        "Home/News Feed: Displays posts, photos, files, videos, and maps",
        "User Timeline: Displays user profile with posts, photos, videos",
        "Pages: Create unlimited pages and invite friends to like them",
        "Groups: Create unlimited groups and invite/add friends",
        "Games: Play unlimited flash games",
        "Social Videos Support: Share videos from YouTube, Dailymotion, Vimeo",
        "Photo Album: Create unlimited photo albums",
        "Cover Picture: Dynamic cover for users",
        "Profile Picture: Dynamic profile picture for users",
        "User Privacy: Control who can message you, post on timeline, follow you",
        "Notifications: Receive notifications for likes, comments, shares, etc.",
        "Hashtags: Display trending and related topics",
        "Mentions: Use @username to tag people",
        "Post Publisher: Status, SoundCloud, YouTube, Vine, Google Maps, Videos, Files, Photos",
        "Delete & Edit Posts: Users can delete and edit their own posts",
        "Save Posts: Save posts to view them later",
        "User Events: Share events like feelings, traveling, watching, playing",
        "Recent Search: Save recent searches with ability to clear them",
        "Post Privacy: Choose post privacy (Only me, Everyone, etc.)",
        "Likes: Like or unlike posts, view list of people who liked",
        "Dislike: Dislike posts, view list of people who disliked",
        "Comments & Replies: Comment on posts, reply to comments",
        "Search: Search for people and hashtags with filtered search",
        "Reports: Report posts to be checked by administrators",
        "Live Chat: Real-time live chat system with online/offline status",
        "Messages: Send and receive private messages and share files",
        "API: Retrieve user data, user posts, search for users via API",
        "Activities: Display user's latest activities",
        "Multi Languages: Support for Arabic, English, Russian, Turkish",
        "Verified Profiles/Pages: Support for verified accounts",
        "Fully Responsive: Works on all devices and browsers",
        "Password Recovery: Password recovery by email",
        "Online User Counter: Display online users on admin and home page",
        "Comment Auto Detector: Auto-detect emoticons in comments"
      ],

      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Redis",
        "Elasticsearch",
        "AWS S3",
        "WebRTC",
        "Socket.io"
      ],

      demoUrl: "https://demo.friendza.com",

      githubUrl: "https://github.com/friendza",

      liveUrl: "https://friendza.com"

    },

    'qwestions-questions-and-answers-platform-like-quora': {

      title: "Qwestions – Questions and answers platform like Quora",

      category: "Social",

      tags: ["Social", "Q&A Platform", "Quora Clone", "Forum"],

      description: "Simple and lightweight forum platform for questions and answers. Features unlimited users, topics, answers, votes, shares, comments, views, modern browser compatibility, powerful admin interface, clean UI, unlimited topics, profile management, upvote/downvote, social sharing, search system, live chat, multi-language support, and comprehensive admin features.",

      status: "Available",

      price: "$2,000 – $5,000",

      slug: "qwestions-questions-and-answers-platform-like-quora",

      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop&crop=center",

      overview: "Qwestions is a comprehensive Q&A platform inspired by Quora. It provides a complete solution for creating your own question and answer website with advanced features like voting, social sharing, and comprehensive moderation tools.",

      features: [
        "Modern Browser Compatibility: Support for modern browsers and cross-browser compatibility",
        "Powerful Admin Interface: Strong and powerful admin interface",
        "Clean UI: Clean and modern user interface",
        "Unlimited Topics: Create unlimited topics",
        "Vote System: UP Vote / Down Vote facility",
        "Forum Categories: Forum / Category & Sub-category support",
        "Social Share: Social share facility",
        "User Profile: Forum-based user profile",
        "User Bio: User bio and activity details",
        "Views Counter: Views and comments counter",
        "Search System: Tags and topic-based search system",
        "Live Chat: Live chat with security captcha",
        "Multi Language: Multi-language features",
        "User Privacy: User privacy & TOS",
        "Email Notification: Email notification & verification",
        "SMS Notification: SMS notification & verification",
        "2FA Security: Two-factor authentication security",
        "Password Change: Change password functionality",
        "Support Ticket: Support ticket system",
        "Forum Management: Forum management",
        "Category Management: Category and sub-category management",
        "Topics Management: Topics management",
        "Advertisements Management: Advertisements management",
        "User Management: Manage users",
        "Support Ticket Management: Support ticket management",
        "General Settings: General settings",
        "Logo & Favicon Management: Logo & favicon management",
        "Extensions Management: Extensions management",
        "Language Management: Language management",
        "SEO Manager: SEO manager",
        "Email Manager: Email manager",
        "SMS Manager: SMS manager",
        "Frontend Manager: Frontend manager",
        "Template Management: Manage templates",
        "Section Management: Manage sections",
        "Contact Management: Contact us management",
        "Policy Pages Management: Policy pages management",
        "Social Icons Management: Social icons management",
        "GDPR Cookie Management: GDPR cookie management",
        "Custom CSS Management: Custom CSS management"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Redis",
        "Elasticsearch",
        "AWS S3",
        "WebRTC"
      ],

      demoUrl: "https://demo.qwestions.com",

      githubUrl: "https://github.com/qwestions",

      liveUrl: "https://qwestions.com"

    },

    'vyapaar-complete-saas-business-stock-management-pos-invoicing': {

      title: "Vyapaar – Complete SAAS Business for Stock Management, POS & Invoicing",

      category: "SAAS",

      tags: ["SAAS", "B2B", "ERP & CRM", "Stock Management"],

      description: "Complete SAAS business solution for stock management, POS, and invoicing. Features multiple business/shops setup, inventory & accounting, location management, user & role management, contacts management, products management, purchases, sales, expenses, reports, HRM features, and comprehensive SAAS functionality.",

      status: "Available",

      price: "$5,000 – $15,000",

      slug: "vyapaar-complete-saas-business-stock-management-pos-invoicing",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "Vyapaar is a comprehensive SAAS business solution designed for stock management, POS, and invoicing. It provides a complete business management platform with advanced features for inventory management, accounting, location management, and comprehensive reporting.",

      features: [
        "Multiple Business/Shops: Set up multiple businesses with no restrictions",
        "Location Management: Add multiple locations, storefronts, and warehouses",
        "User & Role Management: Powerful user and role management system",
        "Contacts Management: Manage customers and suppliers with transaction history",
        "Products Management: Manage single and variable products with SKU generation",
        "Purchases Management: Easily add purchases with location tracking",
        "Sales Management: Simplified POS interface with walk-in customer support",
        "Expenses Management: Categorize and analyze business expenses",
        "Comprehensive Reports: Purchase, sale, tax, contact, stock, and expense reports",
        "HRM Features: Leave management, attendance tracking, payroll management",
        "Document Storage: Cloud document storage and sharing",
        "Messaging System: Internal messaging and reminders",
        "SAAS Features: Unlimited subscription packages with trial days",
        "Payment Gateways: Stripe, PayPal, Razorpay, and offline payments",
        "WooCommerce Integration: Synchronize products, orders, and categories",
        "Manufacturing Module: Recipe management and production tracking",
        "Repair Module: Device management and repair tracking"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Redis",
        "Elasticsearch",
        "AWS S3",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.vyapaar.com",

      githubUrl: "https://github.com/vyapaar",

      liveUrl: "https://vyapaar.com"

    },

    'recruitrabbit-saas-human-resource-management': {

      title: "Recruitrabbit – SAAS Human Resource Management",

      category: "SAAS",

      tags: ["SAAS", "Human Resource", "HRM", "Management"],

      description: "Comprehensive SAAS Human Resource Management system featuring employees management, department organization, awards system, expense tracking, holidays management, attendance monitoring, leave applications, leave types, and notice board functionality.",

      status: "Available",

      price: "$3,000 – $8,000",

      slug: "recruitrabbit-saas-human-resource-management",

      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop&crop=center",

      overview: "Recruitrabbit is a comprehensive SAAS Human Resource Management system designed to streamline HR operations. It provides complete employee management, attendance tracking, leave management, and organizational tools for modern businesses.",

      features: [
        "Employee Management: Complete employee database and profile management",
        "Department Organization: Organize employees by departments and roles",
        "Awards System: Track and manage employee awards and recognition",
        "Expense Tracking: Monitor and categorize employee expenses",
        "Holidays Management: Manage company holidays and vacation schedules",
        "Attendance Monitoring: Track employee attendance and working hours",
        "Leave Applications: Handle leave requests and approvals",
        "Leave Types: Configure different types of leave (sick, vacation, personal)",
        "Notice Board: Internal communication and announcements",
        "Payroll Integration: Integrated payroll management system",
        "Performance Tracking: Monitor employee performance and goals",
        "Document Management: Store and manage HR documents",
        "Reporting: Comprehensive HR reports and analytics",
        "Multi-tenant SAAS: Support for multiple organizations",
        "Role-based Access: Different access levels for HR staff",
        "Mobile App: Mobile application for employees and managers"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "Redis",
        "AWS S3",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.recruitrabbit.com",

      githubUrl: "https://github.com/recruitrabbit",

      liveUrl: "https://recruitrabbit.com"

    },

    'resumesy-complete-saas-resume-builder': {

      title: "Resumesy – Complete SAAS Resume Builder",

      category: "SAAS",

      tags: ["SAAS", "Human Resource", "Resume Builder", "Recruitment"],

      description: "Complete SAAS Recruitment Manager and Resume Builder. Web application to manage recruitment process with job seekers applying directly on website, admin panel management, recurring payments, cover letter builder, multiple resume templates, PDF export, Google captcha, social login, analytics, multi-language support, and SEO optimization.",

      status: "Available",

      price: "$2,500 – $6,000",

      slug: "resumesy-complete-saas-resume-builder",

      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop&crop=center",

      overview: "Resumesy is a comprehensive SAAS Recruitment Manager and Resume Builder platform. It provides complete recruitment management with job posting, applicant tracking, resume building, and comprehensive admin tools for modern recruitment processes.",

      features: [
        "SAAS-based Solution: Complete software-as-a-service recruitment platform",
        "Recurring Payments: Day, week, month, or year recurring payments",
        "Cover Letter Builder: Advanced cover letter creation tools",
        "Resume Templates: Multiple professional resume templates",
        "Free Samples: Free cover letter and resume samples",
        "PDF Export: Export resumes and cover letters as PDF",
        "Google Captcha: Security with Google captcha integration",
        "Social Login: Login with Facebook and Google",
        "Google Analytics: Comprehensive analytics and tracking",
        "User Management: Multi-user management system",
        "Multi-language: Support for multiple languages",
        "Multi Landing Pages: Multiple landing page options",
        "SEO Optimized: Search engine optimized pages",
        "Job Posting: Create and manage job postings",
        "Applicant Tracking: Track job applicants and their progress",
        "Interview Scheduling: Schedule and manage interviews",
        "Email Notifications: Automated email notifications",
        "Mobile Responsive: Fully responsive design for all devices"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "PDF Generator",
        "Google APIs",
        "Stripe API",
        "AWS S3"
      ],

      demoUrl: "https://demo.resumesy.com",

      githubUrl: "https://github.com/resumesy",

      liveUrl: "https://resumesy.com"

    },

    'fooddeck-saas-contactless-multi-restaurant-qr-menu-maker': {

      title: "FoodDeck – SaaS Contactless Multi-restaurant QR Menu Maker",

      category: "SAAS",

      tags: ["SAAS", "ERP & CRM", "Restaurant", "QR Menu"],

      description: "Contactless Multi-restaurant QR Menu Maker SAAS solution. Start a contactless restaurant menu business within 5 minutes. Features QR code scanning, digital menu display, restaurant admin panel, order notifications, table management, subscription plans, store settings, waiter call options, and comprehensive restaurant management tools.",

      status: "Available",

      price: "$2,000 – $5,000",

      slug: "fooddeck-saas-contactless-multi-restaurant-qr-menu-maker",

      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop&crop=center",

      overview: "FoodDeck is a comprehensive SAAS solution for contactless restaurant menu management. It enables restaurants to create digital menus accessible via QR codes, providing a modern, contactless dining experience with comprehensive order management and restaurant administration tools.",

      features: [
        "QR Code Menu: Contactless menu access via QR code scanning",
        "Digital Menu Display: Beautiful digital menu interface",
        "Restaurant Admin Panel: Complete restaurant management dashboard",
        "Order Notifications: Real-time order notifications with sound",
        "Order Management: View, accept, reject, and update orders",
        "Print Orders: Print order receipts and kitchen orders",
        "Promo Banners: Display promotional banners and offers",
        "Table Management: Manage restaurant tables and seating",
        "Subscription Plans: Flexible subscription plans for restaurants",
        "Store Settings: Comprehensive store configuration options",
        "Ordering Options: Enable/disable ordering functionality",
        "Waiter Call Option: Call waiter functionality for customers",
        "Order Status Screen: Real-time order status tracking",
        "Print QR Code: Generate and print QR codes for tables",
        "Customer List: Manage customer database and history",
        "Service Charge: Configure service charges and fees",
        "Multi-currency: Store-wise currency support",
        "Tax Management: Comprehensive tax configuration",
        "Security Features: JWT authentication, CSRF protection, SQL injection protection",
        "Secure Password Hashing: Bcrypt password hashing for security"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "QR Code Generator",
        "WebRTC",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.fooddeck.com",

      githubUrl: "https://github.com/fooddeck",

      liveUrl: "https://fooddeck.com"

    },

    'cloudflow-complete-saas-business-management-platform': {

      title: "CloudFlow – Complete SAAS Business Management Platform",

      category: "SAAS",

      tags: ["SAAS", "Business Management", "Cloud Platform", "Automation"],

      description: "Complete SAAS business management platform with comprehensive features including customer management, project tracking, team collaboration, billing and invoicing, analytics dashboard, multi-tenant architecture, API integration, and customizable workflows for modern businesses.",

      status: "Available",

      price: "$4,500 – $12,000",

      slug: "cloudflow-complete-saas-business-management-platform",

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",

      overview: "CloudFlow is a comprehensive SAAS business management platform designed to streamline business operations. It provides complete business management tools with advanced features for customer management, project tracking, team collaboration, and comprehensive analytics.",

      features: [
        "Customer Management: Complete customer database and relationship management",
        "Project Tracking: Monitor projects from start to finish with real-time updates",
        "Team Collaboration: Advanced collaboration tools for team members",
        "Billing & Invoicing: Automated billing and invoicing system",
        "Analytics Dashboard: Comprehensive analytics and reporting dashboard",
        "Multi-tenant Architecture: Support for multiple organizations",
        "API Integration: RESTful API for third-party integrations",
        "Customizable Workflows: Create custom business workflows",
        "Document Management: Store and manage business documents",
        "Task Management: Create and assign tasks to team members",
        "Time Tracking: Track time spent on projects and tasks",
        "Expense Management: Track and categorize business expenses",
        "Reporting: Generate comprehensive business reports",
        "User Management: Role-based access control and user management",
        "Mobile App: Mobile application for on-the-go management",
        "Security: Enterprise-grade security with data encryption",
        "Backup & Recovery: Automated backup and disaster recovery",
        "Scalability: Cloud-based scalable infrastructure"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "Redis",
        "AWS S3",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.cloudflow.com",

      githubUrl: "https://github.com/cloudflow",

      liveUrl: "https://cloudflow.com"

    },

    'ultreno-saas-project-management-system': {

      title: "Ultreno – SAAS Project Management System",

      category: "SAAS",

      tags: ["SAAS", "ERP & CRM", "Project Management", "Collaboration"],

      description: "Comprehensive SAAS Project Management System for team collaboration and real-time work. Features customer and lead management, client project tracking, employee management, attendance tracking, contract management with e-signatures, project progress tracking, Kanban taskboard, Gantt charts, invoice management, and comprehensive reporting.",

      status: "Available",

      price: "$4,000 – $10,000",

      slug: "ultreno-saas-project-management-system",

      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&crop=center",

      overview: "Ultreno is a comprehensive SAAS Project Management System designed for team collaboration and real-time project tracking. It provides complete project lifecycle management with advanced features for task management, team collaboration, and comprehensive reporting.",

      features: [
        "Customer & Lead Management: Track customers and leads effectively",
        "Client Project Tracking: Monitor client projects and progress",
        "Invoice & Proposal Management: Create and manage invoices and proposals",
        "Employee Management: Add employees and track their performance",
        "Attendance Tracking: Monitor employee attendance and working hours",
        "Leave Management: Manage employee leaves and time-off requests",
        "Contract Management: Create contracts with e-signature support",
        "Project Management: Create projects and add project members",
        "Progress Tracking: Track project progress, expenses, and earnings",
        "Time Logs: Track time spent on projects and tasks",
        "Task Management: Create and assign tasks to team members",
        "Milestone Tracking: Set and track project milestones",
        "Kanban Taskboard: Visualize work and tasks with Kanban boards",
        "Gantt Charts: Plan project schedules with Gantt charts",
        "Credit Notes: Convert invoices to credit notes",
        "Product Management: Create products for invoices and purchases",
        "Ticket System: Raise and manage support tickets",
        "Internal Messaging: Team communication and chat system",
        "Real-time Notifications: Slack, Pusher, and OneSignal integration",
        "Theme Customization: Customize app appearance to reflect brand",
        "Payment Gateways: PayPal, Stripe, and Razorpay integration",
        "Custom Roles: Create custom roles with custom permissions",
        "Comprehensive Reports: Task, timelog, finance, attendance, and leave reports",
        "Configurable Options: Tons of configurable options for customization"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "WebRTC",
        "Stripe API",
        "PayPal API",
        "OneSignal API"
      ],

      demoUrl: "https://demo.ultreno.com",

      githubUrl: "https://github.com/ultreno",

      liveUrl: "https://ultreno.com"

    },

    'aviator-real-money-aviator-game': {

      title: "Aviator – Real Money Aviator Game",

      category: "Fantasy",

      tags: ["Fantasy", "Games", "Real Money", "Casino"],

      description: "Aviator is not just a game; it's an experience. This unique game combines elements of risk and reward, offering players an immersive journey. Features multiplier levels, risk management, bonus rounds, interactive gameplay, tournaments, community engagement, and seamless desktop and mobile experience.",

      status: "Available",

      price: "$3,000 – $8,000",

      slug: "aviator-real-money-aviator-game",

      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=600&fit=crop&crop=center",

      overview: "Aviator is a unique aviation-themed casino game that combines elements of risk and reward for an exhilarating gaming experience. Players embark on a journey where multiplier levels, risk management, and bonus rounds play a crucial role in determining their success.",

      features: [
        "Multiplier Levels: Unique system of multiplier levels that increase as you progress",
        "Risk and Reward: Core philosophy revolving around risk and reward mechanics",
        "Interactive Gameplay: Dynamic visuals and engaging sound effects",
        "Bonus Rounds: Enticing bonus rounds offering additional winning opportunities",
        "Tournament System: Participate in tournaments with exclusive rewards",
        "Community Engagement: Connect with fellow players and share strategies",
        "Desktop Experience: Full visual splendor with detailed aviation-themed graphics",
        "Mobile Flexibility: Same excitement and features on mobile devices",
        "User-Friendly Interface: Optimized navigation for all platforms",
        "Real-time Updates: Live game updates and instant results",
        "Security Features: Secure gaming environment with encrypted transactions",
        "Payment Integration: Multiple payment methods for deposits and withdrawals",
        "Customer Support: 24/7 customer support for all players",
        "Responsive Design: Seamless experience across all devices",
        "Game Analytics: Track your gaming performance and statistics",
        "Social Features: Share achievements and compete with friends"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "WebRTC",
        "Stripe API",
        "PayPal API",
        "Redis"
      ],

      demoUrl: "https://demo.aviator.com",

      githubUrl: "https://github.com/aviator",

      liveUrl: "https://aviator.com"

    },

    'color-iq-real-money-colour-prediction-game': {

      title: "Color IQ – Real Money Colour Prediction Game",

      category: "Fantasy",

      tags: ["Fantasy", "Games", "Prediction", "Real Money"],

      description: "Color game is an exciting and popular predicting game that has been gaining traction. Players have three minutes to correctly predict the color of a given image, with successful prediction leading to victory. Features admin panel, user management, betting records, deposit/withdrawal management, referral system, and wallet management.",

      status: "Available",

      price: "$2,500 – $6,000",

      slug: "color-iq-real-money-colour-prediction-game",

      image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=600&fit=crop&crop=center",

      overview: "Color IQ is an exciting and popular predicting game that has been gaining traction in recent days. Players have three minutes to correctly predict the color of a given image, with successful prediction leading to victory. This platform provides users the opportunity to make money while enjoying themselves.",

      features: [
        "Color Prediction Game: Three-minute color prediction gameplay",
        "Real Money Gaming: Opportunity to make money through gameplay",
        "Admin Panel: Complete admin dashboard for game management",
        "User Management: Manage all registered users (edit, delete, update)",
        "Betting Records: Monitor all betting records of the game",
        "Deposit Management: Monitor all deposit records of users",
        "Bank Records: Manage all bank records for withdrawals",
        "Withdrawal System: Monitor and process withdrawal requests",
        "Payment Processing: Send payments to users automatically",
        "Referral System: Monitor referral records and commissions",
        "Wallet Management: Manage wallet balance records",
        "Game Rules: Update rules of the game dynamically",
        "Privacy Policy: Update privacy policy and terms and conditions",
        "Profit Monitoring: Monitor all profit records",
        "User Authentication: Login with valid mobile number and password",
        "Password Recovery: Forget password with security verification",
        "Profile Management: Update user profile and password",
        "Bank Integration: Update bank records for withdrawal",
        "Referral Bonus: Earn money from referral program (20rs default bonus)"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "Stripe API",
        "PayPal API",
        "SMS Gateway",
        "Redis"
      ],

      demoUrl: "https://demo.coloriq.com",

      githubUrl: "https://github.com/coloriq",

      liveUrl: "https://coloriq.com"

    },

    'byte-lottery-live-online-lottery-application-with-mlm': {

      title: "Byte Lottery – Live Online Lottery Application with MLM",

      category: "Fantasy",

      tags: ["Fantasy", "Games", "Lottery", "MLM"],

      description: "A Lottery Platform that will take your excitement to the next level! Features dynamic lottery system, auto phase creation, multi-level referral system, user-friendly interface, responsive design, two-factor authentication, lottery management, report manager, and comprehensive admin features.",

      status: "Available",

      price: "$4,000 – $10,000",

      slug: "byte-lottery-live-online-lottery-application-with-mlm",

      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop&crop=center",

      overview: "Byte Lottery is a cutting-edge lottery platform that brings you the ultimate thrill of winning. Our platform boasts a dynamic and ever-evolving lottery system that keeps the excitement alive with surprises waiting at every turn.",

      features: [
        "Dynamic Lottery System: Ever-evolving lottery system with unique phases",
        "Auto Phase Creation: Seamless transition from one exciting phase to another",
        "Multi-Level Referral System: Share excitement and multiply rewards",
        "User-Friendly Interface: Easy navigation and responsive design",
        "Two-Factor Authentication: Advanced security system for account protection",
        "Lottery Management: Complete lottery management system",
        "Report Manager: Comprehensive reporting and analytics",
        "Extension Management: Manage platform extensions and plugins",
        "Language Management: Multi-language system support",
        "Content Management: Dynamic content management system",
        "SEO Manager: Search engine optimization tools",
        "Page Builder: Custom page builder for lottery pages",
        "Support Ticket Management: Customer support ticket system",
        "System Settings: Complete system configuration",
        "Email Notification System: Automated email notifications",
        "SMS Notification System: SMS notifications and alerts",
        "User Verification: Email & SMS verification system",
        "Cross-Browser Compatibility: Support for modern browsers",
        "Dynamic CRON Settings: Automated task scheduling",
        "System Update Manager: Regular system updates"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "Redis",
        "AWS S3",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.bytelottery.com",

      githubUrl: "https://github.com/bytelottery",

      liveUrl: "https://bytelottery.com"

    },

    'lottery-whale-live-lottery-betting-application': {

      title: "Lottery Whale – Live Lottery Betting Application",

      category: "Fantasy",

      tags: ["Fantasy", "Games", "Lottery", "Betting"],

      description: "Live Lottery platform that enables a great opportunity to start your own lottery website. Features premium design, responsive & cross-browser compatibility, automatic & manual payment gateway, referral bonus with level system, full dynamic lottery system, easy documentation, GDPR policy, and comprehensive user and admin features.",

      status: "Available",

      price: "$3,500 – $9,000",

      slug: "lottery-whale-live-lottery-betting-application",

      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center",

      overview: "Lottery Whale is a live lottery platform that enables a great opportunity to start your own lottery website. This unique lottery platform allows you to play real-time lottery whenever and wherever you like, accessible from PC and mobile devices.",

      features: [
        "Premium Design: High-quality, responsive design with cross-browser compatibility",
        "Payment Gateway: Automatic & manual payment gateway & currency setup",
        "Referral System: Referral bonus with level system for user growth",
        "Dynamic Lottery System: Full dynamic lottery system with phase facility",
        "Documentation: Easy documentation and GDPR policy compliance",
        "Regular Updates: Regular updates facilities and feature request system",
        "Admin Interface: Latest and powerful admin interface",
        "User Interface: Clean and modern user interface",
        "User Dashboard: Lotteries list, deposit manager, withdrawal manager",
        "Transaction Manager: Complete transaction management system",
        "Support System: Support ticket desk and live chat",
        "Referral System: Referral system & commission logs",
        "Profile Management: Complete user profile management",
        "2FA Security: Two-factor authentication security",
        "Win Tracking: Total win list and lottery list tracking",
        "Notifications: Email and SMS notification & verification",
        "GDPR Compliance: GDPR policy and privacy compliance",
        "Multi-language: Multi-language features support",
        "User Privacy: User privacy & terms of service",
        "Admin Features: Referral commissions, lottery management, phase management",
        "Payment Management: Payment gateways, deposits, and withdrawals management",
        "Report System: Comprehensive reporting and logs system",
        "System Settings: General settings, logo & favicon management",
        "Content Management: Extensions, language, SEO, email, SMS management",
        "Frontend Manager: Template, page, and section management",
        "Custom CSS: Custom CSS management and cache clearing"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "Redis",
        "AWS S3",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.lotterywhale.com",

      githubUrl: "https://github.com/lotterywhale",

      liveUrl: "https://lotterywhale.com"

    },

    'fantasy-sports-pro-complete-fantasy-sports-platform': {

      title: "Fantasy Sports Pro – Complete Fantasy Sports Platform",

      category: "Fantasy",

      tags: ["Fantasy", "Sports", "Games", "Platform"],

      description: "Complete fantasy sports platform with comprehensive features including player management, team creation, live scoring, tournaments, leagues, prize pools, user profiles, social features, mobile app, real-time updates, and comprehensive admin panel for managing all aspects of fantasy sports.",

      status: "Available",

      price: "$5,000 – $15,000",

      slug: "fantasy-sports-pro-complete-fantasy-sports-platform",

      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=600&fit=crop&crop=center",

      overview: "Fantasy Sports Pro is a comprehensive fantasy sports platform designed to provide the ultimate fantasy sports experience. It includes all the features needed to create and manage fantasy sports leagues, tournaments, and competitions.",

      features: [
        "Player Management: Complete player database and statistics management",
        "Team Creation: Create and manage fantasy teams with player selection",
        "Live Scoring: Real-time scoring system with live updates",
        "Tournament System: Create and manage tournaments and competitions",
        "League Management: Multiple league formats and management tools",
        "Prize Pools: Set up prize pools and payout systems",
        "User Profiles: Comprehensive user profile management",
        "Social Features: Social interaction and community features",
        "Mobile App: Native mobile application for iOS and Android",
        "Real-time Updates: Live updates and notifications",
        "Admin Panel: Comprehensive admin panel for platform management",
        "Payment Integration: Secure payment processing for entry fees and prizes",
        "Statistics Tracking: Detailed statistics and performance tracking",
        "Draft System: Automated and manual draft systems",
        "Waiver System: Player waiver and free agent systems",
        "Trade System: Player trade management and approval system",
        "Chat System: In-app messaging and communication",
        "Leaderboards: Real-time leaderboards and rankings",
        "Analytics: Comprehensive analytics and reporting",
        "API Integration: RESTful API for third-party integrations"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "React Native",
        "Vue.js",
        "Bootstrap",
        "Redis",
        "AWS S3",
        "Stripe API"
      ],

      demoUrl: "https://demo.fantasysportspro.com",

      githubUrl: "https://github.com/fantasysportspro",

      liveUrl: "https://fantasysportspro.com"

    },

    'virtual-casino-suite-complete-casino-gaming-platform': {

      title: "Virtual Casino Suite – Complete Casino Gaming Platform",

      category: "Fantasy",

      tags: ["Fantasy", "Games", "Casino", "Gaming"],

      description: "Complete casino gaming platform with multiple games including slots, poker, blackjack, roulette, and live dealer games. Features user management, payment processing, game management, tournament system, loyalty program, mobile app, and comprehensive admin panel for managing all casino operations.",

      status: "Available",

      price: "$6,000 – $18,000",

      slug: "virtual-casino-suite-complete-casino-gaming-platform",

      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1200&h=600&fit=crop&crop=center",

      overview: "Virtual Casino Suite is a comprehensive casino gaming platform that provides a complete solution for online casino operations. It includes multiple casino games, user management, payment processing, and all the tools needed to run a successful online casino.",

      features: [
        "Multiple Games: Slots, poker, blackjack, roulette, and live dealer games",
        "User Management: Complete user registration and account management",
        "Payment Processing: Secure payment processing for deposits and withdrawals",
        "Game Management: Comprehensive game management and configuration",
        "Tournament System: Casino tournaments and competitions",
        "Loyalty Program: Player loyalty and rewards program",
        "Mobile App: Native mobile application for casino gaming",
        "Admin Panel: Complete admin panel for casino management",
        "Live Dealer Games: Real-time live dealer gaming experience",
        "Security Features: Advanced security and fraud prevention",
        "Responsive Design: Mobile-optimized design for all devices",
        "Multi-language: Support for multiple languages",
        "Currency Support: Multiple currency support",
        "Bonus System: Welcome bonuses and promotional offers",
        "Customer Support: 24/7 customer support system",
        "Analytics: Comprehensive analytics and reporting",
        "API Integration: RESTful API for third-party integrations",
        "Game Statistics: Detailed game statistics and player analytics",
        "Compliance: Regulatory compliance and licensing support",
        "Backup System: Automated backup and disaster recovery"
      ],

      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "React Native",
        "Vue.js",
        "Bootstrap",
        "WebRTC",
        "Redis",
        "AWS S3",
        "Stripe API",
        "PayPal API"
      ],

      demoUrl: "https://demo.virtualcasino.com",

      githubUrl: "https://github.com/virtualcasino",

      liveUrl: "https://virtualcasino.com"

    },

    'bubblejug-tiktok-clone-short-video-app-live-streaming-app-complete-solution': {

      title: "BubbleJug – Tiktok Clone – Short Video App Live streaming App Complete Solution",

      category: "Entertainment",

      tags: ["Entertainment", "Social", "Video Platform", "Live Streaming"],

      description: "Complete TikTok clone with short video creation, live streaming capabilities, and comprehensive social features.",

      status: "New",


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


      demoUrl: "https://demo.bubblejug.com",

      githubUrl: "https://github.com/bubblejug",

      liveUrl: "https://bubblejug.com"

    },

    // Games Products

    'hpl11-dream-11-clone-fantasy-app': {

      title: "HPL11- Dream 11 Clone Fantasy App",

      category: "Games",

      tags: ["Games", "Fantasy Sports", "Dream 11 Clone", "Cricket Tournament", "Mobile App", "Fantasy App"],

      description: "This is an easy-to-use app for Fantasy Cricket Tournament. It lets you effectively manage and track the app, maintenance, and users. The app also helps you calculate the earnings of your app based on the quantity of the Tournament Players.",

      status: "42 Sales",


      slug: "hpl11-dream-11-clone-fantasy-app",

      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center",

      overview: "HPL11 is an easy-to-use app for Fantasy Cricket Tournament. It lets you effectively manage and track the app, maintenance, and users. The app also helps you calculate the earnings of your app based on the quantity of the Tournament Players. This is a complete Dream11 clone fantasy sports platform with all the features of any modern fantasy sports application.",

      features: [

        "Easy-to-use app for Fantasy Cricket Tournament",

        "Effectively manage and track the app",

        "App maintenance and user management",

        "Calculate the earnings of your app based on the quantity of the Tournament Players",

        "Fantasy team creation and management",

        "Player selection and management",

        "Multiple contest types and formats",

        "Real money rewards system",

        "Live score updates and real-time statistics",

        "Leaderboard and rankings system",

        "Payment integration and secure transactions",

        "User registration and authentication",

        "Tournament management system",

        "Player statistics and performance tracking",

        "Contest creation and management",

        "Prize distribution system",

        "Admin panel for complete control",

        "User dashboard and profile management",

        "Notification system for updates",

        "Social features and sharing",

        "Responsive design for all devices",

        "Admin Web application",

        "Android application",

        "iOS application support",

        "Rebranding capabilities",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support",

        "Google Play Marketing (100 Reviews + Downloads)"

      ],

      technologies: [

        "Core PHP", "MySQL", "Java", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://hpl11.online",

      githubUrl: "https://github.com/hpl11",

      liveUrl: "https://hpl11.online"

    },

    'ludo-hg-ludo-tournament-betting': {

      title: "Ludo HG – Ludo Tournament Betting",

      category: "Games",

      tags: ["Games", "Tournament", "Betting", "Multiplayer"],

      description: "Ludo tournament platform with betting features, multiplayer gameplay, and tournament management system.",

      status: "26 Sales",


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


      demoUrl: "https://demo.ludohg.com",

      githubUrl: "https://github.com/ludohg",

      liveUrl: "https://ludohg.com"

    },

    'fortunefantasy-online-betting-platform-1xbet-clone': {

      title: "FortuneFantasy – Online Betting Platform – 1xBet Clone",

      category: "Games",

      tags: ["Games", "Betting Platform", "1xBet Clone", "Sports Betting", "Prediction", "Tournament"],

      description: "This is a betting management system. It can be used to guess the result of WorldCup / Tournament matches in a kind of prediction. The players compete in guessing the correct result of some kind of match. Soccer, Cricket, Baseball, Basketball, or even Yes/No questions like: will Brazil win the next WorldCup.",

      status: "4 Sales",


      slug: "fortunefantasy-online-betting-platform-1xbet-clone",

      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=center",

      overview: "FortuneFantasy is a betting management system that can be used to guess the result of WorldCup / Tournament matches in a kind of prediction. The players compete in guessing the correct result of some kind of match. Soccer, Cricket, Baseball, Basketball, or even Yes/No questions like: will Brazil win the next WorldCup. At first User need to deposit for predicting. User will get interest followed by ratio. Admin can control match lock/unlock, ratio update, question, option add instantly where user doesn't need to website reload.",

      features: [

        "Betting management system for tournament predictions",

        "Guess the result of WorldCup / Tournament matches",

        "Prediction-based competition system",

        "Players compete in guessing the correct result of matches",

        "Support for Soccer, Cricket, Baseball, Basketball",

        "Yes/No questions like: will Brazil win the next WorldCup",

        "User need to deposit for predicting",

        "User will get interest followed by ratio",

        "Admin can control match lock/unlock",

        "Ratio update functionality",

        "Question and option add instantly",

        "User doesn't need to website reload",

        "Bet History - complete betting transaction history",

        "36+ automated payment method",

        "7+ automated withdrawal method",

        "Transaction Log - detailed transaction tracking",

        "Deposit Money - secure deposit system",

        "Deposit Log - complete deposit history",

        "Withdraw/Payout History - withdrawal tracking",

        "Email + SMS + Push Notification - multi-channel notifications",

        "Profile & Password Update - user account management",

        "Referral Commission - referral reward system",

        "Support Ticket - customer support system",

        "Financial Statistics & Information - comprehensive financial reports",

        "KYC Management - identity verification system",

        "Role Permission Management - user role and permission control",

        "Manage Game Category - game category management",

        "Manage Game Tournament - tournament management",

        "Manage Team - team management system",

        "Manage Match - match management",

        "Real Time Match, question, option Add / Update",

        "Real Time Match, question lock/ Unlock",

        "Prediction Result Manage - result management system",

        "Make winner - winner selection system",

        "Refund Prediction Amount - refund management",

        "User Management - comprehensive user administration",

        "User Statistics & Reports - detailed user analytics",

        "36+ Automated Payment Method - multiple payment options",

        "Manual Payment/ Bank deposit System Added",

        "Complete Payment History - full payment tracking",

        "Withdraw Request Log - withdrawal request management",

        "Withdraw Report - withdrawal reporting",

        "Support Ticket - customer support management",

        "Website Basic Controls - website configuration",

        "Email Configuration - email settings",

        "Email Template Management - email template customization",

        "SMS Configuration - SMS settings",

        "SMS Template Management - SMS template customization",

        "Push Notification - mobile push notifications",

        "Logo & SEO Management - branding and SEO",

        "All Content Management - content management system",

        "Profile & Password Update - admin profile management",

        "Admin Web application",

        "Android application",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support",

        "Google Play Marketing (100 Reviews + Downloads)"

      ],

      technologies: [

        "Laravel", "MySQL", "Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://fortunefantasy.online",

      githubUrl: "https://github.com/fortunefantasy",

      liveUrl: "https://fortunefantasy.online"

    },

    'online-rival-online-competition-platform': {

      title: "Online Rival-Online Competition Platform",

      category: "Games",

      tags: ["Games", "Competition", "Tournament", "Leaderboard"],

      description: "Comprehensive online competition platform with tournaments, leaderboards, and competitive gaming features.",

      status: "New",


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


      demoUrl: "https://demo.onlinerival.com",

      githubUrl: "https://github.com/onlinerival",

      liveUrl: "https://onlinerival.com"

    },

    'aviator-real-money-aviator-game': {

      title: "Aviator – Real Money Aviator Game",

      category: "Games",

      tags: ["Games", "Aviator", "Real Money", "Casino Game", "Aviation", "Multiplier"],

      description: "Aviator is not just a game; it's an experience. This unique game combines elements of risk and reward, offering players an immersive journey. Whether you're a seasoned player or a newcomer, Aviator provides a gaming adventure that transcends traditional casino games.",

      status: "Available",


      slug: "aviator-real-money-aviator-game",

      image: "https://images.unsplash.com/photo-1592478411213-6153e4c4a8bd?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1592478411213-6153e4c4a8bd?w=1200&h=600&fit=crop&crop=center",

      overview: "Aviator is not just a game; it's an experience. This unique game combines elements of risk and reward, offering players an immersive journey. Whether you're a seasoned player or a newcomer, Aviator provides a gaming adventure that transcends traditional casino games. Aviator takes inspiration from the aviation world, combining elements of risk and reward for an exhilarating gaming experience. Players embark on a journey where multiplier levels, risk management, and bonus rounds play a crucial role in determining their success.",

      features: [

        "Aviator is not just a game; it's an experience",

        "Unique game combines elements of risk and reward",

        "Offering players an immersive journey",

        "Whether you're a seasoned player or a newcomer",

        "Aviator provides a gaming adventure that transcends traditional casino games",

        "Introduction to the Concept: Aviator takes inspiration from the aviation world",

        "Combining elements of risk and reward for an exhilarating gaming experience",

        "How the Game Works: Players embark on a journey where multiplier levels, risk management, and bonus rounds play a crucial role",

        "Determining their success",

        "Accessibility: Aviator is available both on desktop and mobile platforms",

        "Ensuring that players can enjoy the game anytime, anywhere",

        "Multiplier Levels: Aviator introduces players to a unique system of multiplier levels",

        "As you progress in the game, the multiplier increases",

        "Enhancing the potential winnings",

        "Risk and Reward: The game's core philosophy revolves around risk and reward",

        "Players have the freedom to tailor their strategies",

        "Making each session unique and exciting",

        "Interactive Gameplay: Aviator goes beyond the standard casino game interface",

        "Providing an interactive experience with dynamic visuals",

        "Engaging sound effects",

        "Bonus Rounds: For an extra dose of excitement, Aviator features enticing bonus rounds",

        "That offer additional opportunities to boost your winnings",

        "Understanding Multiplier Levels: Each multiplier level comes with its own set of challenges and rewards",

        "Familiarize yourself with them to optimize your strategy",

        "Effective Risk Management: Balancing risk and reward is key",

        "Gradually increase your risk as you gain confidence in your understanding of the game",

        "Strategic Use of Bonus Rounds: Bonus rounds are your chance to soar to new heights",

        "Use them strategically to enhance your overall gaming experience",

        "Tournaments: Participate in Aviator tournaments for a chance to compete against other players",

        "Tournaments often come with exclusive rewards and leaderboard recognition",

        "Community Engagement: Connect with fellow Aviator enthusiasts through the casino's community features",

        "Share strategies, discuss experiences, and revel in the shared excitement of the game",

        "Desktop Experience: When playing Aviator on your desktop, you can immerse yourself in the full visual splendor of the game",

        "The larger screen offers a detailed and expansive view of the aviation-themed graphics",

        "Enhancing your overall gaming experience",

        "The user interface is optimized for desktop navigation",

        "Providing easy access to all the features and controls",

        "Mobile Flexibility: For those who prefer gaming on the go, Aviator's mobile version delivers the same excitement and features",

        "Whether you're using a smartphone or tablet, Aviator maintains its captivating gameplay",

        "Ensuring that you can enjoy the thrill of aviation-themed gaming wherever you are",

        "The mobile interface is crafted for touch-screen convenience",

        "Allowing for smooth and responsive navigation",

        "Aviator's commitment to providing a consistent and enjoyable experience on both desktop and mobile platforms",

        "Reflects its dedication to accessibility and player convenience",

        "Whether you're at home or on the move, Aviator lets you explore the skies",

        "Engage in the excitement of this unique casino game",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://aviator.online",

      githubUrl: "https://github.com/aviator",

      liveUrl: "https://aviator.online"

    },

    'color-iq-real-money-colour-prediction-game': {

      title: "Color IQ – Real Money Colour Prediction Game",

      category: "Games",

      tags: ["Games", "Color Prediction", "Real Money", "Prediction Game", "Color Game", "Mobile App"],

      description: "Color game is an exciting and popular predicting game that has been gaining traction in recent days. Players have three minutes to correctly predict the color of a given image, with a successful prediction leading to victory. This platform also provides users the opportunity to make money by playing this fun and engaging game.",

      status: "Available",


      slug: "color-iq-real-money-colour-prediction-game",

      image: "https://images.unsplash.com/photo-1592478411213-6153e4c4a8bd?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1592478411213-6153e4c4a8bd?w=1200&h=600&fit=crop&crop=center",

      overview: "Color IQ is an exciting and popular predicting game that has been gaining traction in recent days. Players have three minutes to correctly predict the color of a given image, with a successful prediction leading to victory. This platform also provides users the opportunity to make money by playing this fun and engaging game. Color Game offers players an entertaining way of making money while enjoying themselves at the same time!",

      features: [

        "Color game is an exciting and popular predicting game",

        "Has been gaining traction in recent days",

        "Players have three minutes to correctly predict the color of a given image",

        "Successful prediction leading to victory",

        "This platform also provides users the opportunity to make money",

        "By playing this fun and engaging game",

        "Color Game offers players an entertaining way of making money",

        "While enjoying themselves at the same time",

        "Application Roles: Admin and User",

        "Admin Login - secure admin authentication",

        "Manage all registered users (edit, delete, update)",

        "Monitor all betting records of the game",

        "Monitor all Deposit records of users",

        "Manage all bank records of users provided for withdrawal",

        "Monitor withdrawal request form users",

        "Send payment to users",

        "Update payment withdrawal request",

        "Monitor withdrawal records of users",

        "Monitor referral records of users",

        "Manage wallet balance records",

        "Update rules of the game",

        "Update privacy policy and terms and conditions",

        "Monitor all profit records",

        "User Login and Register",

        "Login with valid mobile number and password",

        "Forget their password after Providing Some Correct Information",

        "Update their Profile",

        "Update their Password",

        "Play color prediction game",

        "Make money through color prediction game",

        "Update their bank records for withdrawal",

        "Manage their wallet",

        "Monitor all betting records",

        "Monitor all deposit records",

        "Monitor all withdrawal records",

        "Send withdrawal request to admin",

        "Earn money from referral program",

        "Referral Features: Any User register with referral code that user get 20.rs by default",

        "Admin can change referral bonus value",

        "If Any User Register with without referral code that user get 0.rs by default",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "Core PHP", "MySQL", "Laravel", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://coloriq.online",

      githubUrl: "https://github.com/coloriq",

      liveUrl: "https://coloriq.online"

    },

    'quizzity-ai-powered-quiz-generator': {

      title: "Quizzity – AI Powered Quiz Generator",

      category: "Games",

      tags: ["Education", "Games", "AI", "Quiz Generation"],

      description: "AI-powered quiz generation platform with automated question creation and intelligent quiz management.",

      status: "New",


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


      demoUrl: "https://demo.quizzity.com",

      githubUrl: "https://github.com/quizzity",

      liveUrl: "https://quizzity.com"

    },

    // Grocery Products

    'farm-grocery-ecommerce-grocery-food-pharmacy-android-apps': {

      title: "Farm Grocery- Ecommerce for Grocery, Food, Pharmacy with Android Apps",

      category: "Grocery",

      tags: ["Grocery", "eCommerce", "Food", "Pharmacy", "Android Apps", "Laravel", "Multi-Store"],

      description: "The complete ecommerce solution for grocery, medical, fashion, electronics and any kind of store. It have complete laravel website, android native customer application for playstore, android native delivery boy application and powerfull admin panel to manage everything from on single backend.",

      status: "59 Sales",


      slug: "farm-grocery-ecommerce-grocery-food-pharmacy-android-apps",

      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",

      overview: "Farm Grocery is the complete ecommerce solution for grocery, medical, fashion, electronics and any kind of store. It have complete laravel website, android native customer application for playstore, android native delivery boy application and powerfull admin panel to manage everything from on single backend. This comprehensive platform provides everything needed to run a successful online store with advanced features and mobile applications.",

      features: [

        "The complete ecommerce solution for grocery, medical, fashion, electronics and any kind of store",

        "Complete laravel website with advanced features",

        "Android native customer application for playstore",

        "Android native delivery boy application",

        "Powerful admin panel to manage everything from single backend",

        "Laravel Website Features",

        "Website Home Page Builder to Achieve Any Look",

        "Multiple Home Page Sections with drag drop feature to achieve any look and feel",

        "Multiple Home Page Sliders",

        "Multiple Home Page Banners Styles",

        "Multiple Website Headers",

        "Multiple Website Footers",

        "Multiple Product Pages",

        "Multiple Shop Pages",

        "Multiple Cart Pages",

        "Multiple Animations",

        "Sticky Website Header",

        "Multiple Product Card Styles",

        "Multi Language – Fully Supported RTL",

        "Multi Currency",

        "Multiple Payment Methods(Paypal, Stripe, Braintree, COD, HyperPay, InstaMojo, RazorPay, Paytm etc…)",

        "One Signal Push Notification",

        "Google Customer Location Map For Accurate Delivery",

        "Flash Sale Section",

        "Product Share",

        "Dynamic Website Menu",

        "Login via Social Accounts",

        "Product Popup with Quickview Button",

        "Ajax Based Cart System",

        "Product Wishlist",

        "Product Compare",

        "Product Rating & Reviews",

        "Top Selling of the week",

        "Prallax Banners",

        "MailChimp Newsletter",

        "Top News",

        "News/Blog Pages",

        "User Control Panel",

        "Orders Management",

        "Cancel Order Feature",

        "User Address Management",

        "Product Card Tags",

        "Built With Sass",

        "Bootstrap 4",

        "And Many More Features…",

        "Native Android Customer Mobile Application Features",

        "Application Settings to Achieve Any Look and Feel of Customer Application",

        "Multiple Home Sections",

        "Multiple Home Sliders",

        "Multiple Home Page Banners Styles",

        "20+ Product Card Styles",

        "Multi Language – Fully Supported RTL",

        "Multi Currency",

        "Multiple Payment Methods(Paypal, Stripe, Braintree, COD, HyperPay, InstaMojo, RazorPay, Paytm etc…)",

        "One Signal Push Notification",

        "Google Customer Location Map For Accurate Delivery",

        "Flash Sale Section",

        "Product Share",

        "Login via Social Accounts",

        "Product Wishlist",

        "Product Compare",

        "Product Rating & Reviews",

        "Top Selling Section",

        "Deals Section",

        "News/Blog Pages",

        "User Control Panel",

        "Orders Management",

        "Cancel Order Feature",

        "User Address Management",

        "Product Card Tags",

        "And Many More Features…",

        "Native Android Delivery Boy Mobile Application Features",

        "Login with PinCode",

        "OTP Firebase Authentication",

        "GPS Tracking",

        "Map Navigation",

        "Online/Offline Feature",

        "Payouts",

        "Floating Cash",

        "Work History",

        "And Many More Features…",

        "Laravel Advance CMS Features",

        "Products Management",

        "Customers Management",

        "Delivery Team Management",

        "Orders Management",

        "Payment Gateways Management",

        "Advance Coupons Management",

        "Tax Management",

        "Media Management",

        "Languages Management",

        "Currency Management",

        "Multi Admin and Admin Roles",

        "Web application",

        "Android application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Android Studio", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://farmgrocery.online",

      githubUrl: "https://github.com/farmgrocery",

      liveUrl: "https://farmgrocery.online"

    },

    'berrydairy-grocery-daily-milk-delivery-mobile-app-subscription-customer-delivery-app': {

      title: "BerryDairy – Grocery, Daily Milk Delivery Mobile App with Subscription | Customer & Delivery App",

      category: "Grocery",

      tags: ["eCommerce", "Grocery", "Dairy", "Subscription", "Mobile Apps"],

      description: "Specialized dairy delivery platform with subscription-based milk delivery, customer and delivery apps for daily grocery needs.",

      status: "New",


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


      demoUrl: "https://demo.berrydairy.com",

      githubUrl: "https://github.com/berrydairy",

      liveUrl: "https://berrydairy.com"

    },

    'dixiedaily-dunzo-clone-multivendor-food-grocery-ecommerce-parcel-pharmacy-delivery-website-3-mobile-apps-customer-store-driver-apps': {

      title: "DixieDaily- Dunzo Clone – Multivendor Food, Grocery, eCommerce, Parcel, Pharmacy Delivery Website & 3 Mobile apps (Customer, Store, Driver apps)",

      category: "Grocery",

      tags: ["Grocery", "Dunzo Clone", "Multivendor", "Food Delivery", "Mobile Apps", "eCommerce", "Parcel Delivery", "Pharmacy"],

      description: "This is a complete Multi-vendor Food, Grocery, eCommerce, Parcel, Pharmacy, or any kind of products delivery system developed using Laravel and Flutter Framework. It's Powerful admin panel will help you to control your business smartly.",

      status: "New",


      slug: "dixiedaily-dunzo-clone-multivendor-food-grocery-ecommerce-parcel-pharmacy-delivery-website-3-mobile-apps-customer-store-driver-apps",

      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",

      overview: "DixieDaily is a complete Multi-vendor Food, Grocery, eCommerce, Parcel, Pharmacy, or any kind of products delivery system developed using Laravel and Flutter Framework. It's Powerful admin panel will help you to control your business smartly. It comprises of 3 Mobile Applications, 2 Web Panel, and 1 website with comprehensive order flow management and advanced features.",

      features: [

        "This is a complete Multi-vendor Food, Grocery, eCommerce, Parcel, Pharmacy, or any kind of products delivery system",

        "Developed using Laravel and Flutter Framework",

        "Powerful admin panel will help you to control your business smartly",

        "Comprises of 3 Mobile Applications, 2 Web Panel, and 1 website",

        "Customer application for Android, iOS, and web developed using Flutter",

        "Delivery Boy application for Android developed using Flutter",

        "Store application for both Android and iOS developed using Flutter",

        "Super Admin web panel developed using Laravel",

        "Store web panel developed using Laravel",

        "Order Flow: The customer places an order from a store (can't place an order from multiple stores at a time)",

        "The delivery boys get that order in the order request section and accept it for delivery",

        "After the delivery man's confirmation (If turn on the delivery confirmation model), the store owner gets the order on their dashboard",

        "Store owner starts processing or cooking, and handover the items to the delivery boy",

        "If the order is digitally paid the order will directly go into the confirmed status",

        "The store gets the order on their dashboard (will not depend on the delivery boy's confirmation)",

        "If the admin turn on the store's confirmation model then for both case no need the delivery man's confirmation",

        "After stores, confirmation delivery men will get the order for acceptance",

        "The Delivery Guy accepts the order, confirms the order (if COD), picks up the order, and delivers the order to the Customer",

        "If self-pickup orders, the stores will manage all the steps",

        "For schedule orders, all the operations will start before 15 minutes of scheduled delivery time",

        "Top Features",

        "Draw accurate coverage area on the map: In the admin panel, you can manage multiple zones for your business coverage area",

        "The map drawing tool will help you to draw your coverage accurately",

        "Stores can be added to these zones",

        "Only the users who are in coverage can order",

        "System Modules: It is designed for all types of delivery but we categorize it as a system module",

        "Multiple Stores: It is a multi-vendor-supported system",

        "So you can add an unlimited number of stores and manage those from the admin panel easily",

        "SMS OTP integrated: It comes with a bunch of integrated SMS Gateways",

        "All of them are popular and you can verify your users in a smarter way",

        "Item Management: You can control the whole Item section by managing categories and subcategories",

        "Attributes, Addons, Units, and more",

        "You can add items to any store",

        "And the Stores panel also will get an item management feature",

        "Advanced Order Management: The item order management feature will help the admin and the store manager to manage every order very efficiently",

        "Dispatch Management: Dispatch Management will help you to identify quickly which orders are ongoing and which orders are waiting for a delivery man",

        "Delivery Men Apps: You can create an unlimited number of delivery men",

        "By Delivery men apps they can easily accept an order, deliver an order and earn money",

        "You can set Freelancer delivery man option or Salaried delivery man option from the admin panel",

        "Manual assign delivery man: It's admin panel will provide you another important feature for your business",

        "You can directly assign an available delivery man in order",

        "Marketing Section: It's Admin will provide you with a very rich admin panel where you can control all the major things for marketing",

        "Campaigns, banners, Coupons and Push notifications features will help you to grow your business very fast",

        "Accounts section: You can view stores and delivery men's earnings, process withdrawals, collect cash manually and have lots of staff",

        "Reporting and Statistics: Full of statistics and reporting will help you identify your business cash flow and all the financial conditions",

        "In the dashboard, You will get very rich statistical data and you can explore those by zone and time",

        "Employee Section: Admin and Store panel both have employee sections",

        "Where you can create a new employee role and access your employee to your portal easily",

        "Business Setting: Business Settings will help you to set up your business as you wish",

        "You will get lots of configurations to make your business unique",

        "Complete Featured User App and Web: You will get the mobile app and web source code with this bundle",

        "We developed this by flutter so the app can be usable by both android and iOS",

        "Multiple Payment Gateways: It comes with a bunch of integrated payment gateway",

        "All of them are popular and you can start your business immediately",

        "Web application",

        "Android application",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support",

        "Google Play Marketing (100 Reviews + Downloads)",

        "iOS application"

      ],

      technologies: [

        "PHP", "MySQL", "CodeIgniter", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://dixiedaily.online",

      githubUrl: "https://github.com/dixiedaily",

      liveUrl: "https://dixiedaily.online"

    },

    // HealthCare Products

    'healthy-web-hospital-management-system': {

      title: "Healthy Web – Hospital Management System",

      category: "HealthCare",

      tags: ["ERP & CRM", "HealthCare", "Hospital Management"],

      description: "Comprehensive hospital management system with patient records, appointment scheduling, billing, and administrative tools.",

      status: "96 Sales",


      slug: "healthy-web-hospital-management-system",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

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


      demoUrl: "https://demo.phroma.com",

      githubUrl: "https://github.com/phroma",

      liveUrl: "https://phroma.com"

    },

    'doctor-corps-hospital-management-system': {

      title: "Doctor Corps- Hospital Management System",

      category: "HealthCare",

      tags: ["ERP & CRM", "HealthCare", "Hospital Management"],

      description: "Hospital Management System is the most complete and multi-functional hospital or medical center management system. It collaborates admin, patients, doctors, nurses, laboratorists, pharmacists, receptionist, accountants so that all the paperworks and manual tiresome works can be automated easily and efficiently.",

      status: "Available",


      slug: "doctor-corps-hospital-management-system",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

      overview: "Doctor Corps Hospital Management System is the most complete and multi-functional hospital or medical center management system. It collaborates admin, patients, doctors, nurses, laboratorists, pharmacists, receptionist, accountants so that all the paperworks and manual tiresome works can be automated easily and efficiently. This comprehensive system provides hundreds of automation features with 8 types of user accounts for complete healthcare facility management.",

      features: [

        "Hundreds of automation features",

        "8 type of user accounts",

        "Easiest appointment booking system",

        "Private communication with doctors",

        "Easiest management of hospital accommodations",

        "Tracking of medicines",

        "Records of blood donors",

        "Records of diagnostics and reports",

        "Payroll management",

        "User friendly accounting",

        "Patient Management - Ability to request appointment with a doctor",

        "Keep records of patient's prescriptions and medications",

        "Keep track of patient's payments",

        "See all diagnostics",

        "Manage operation reports",

        "Private communication between doctor and patient",

        "Manage Doctors - Searchable doctor's list with full profile",

        "Categorize doctors according to departments",

        "Hospital management - Manage blood bank",

        "Keep records of blood donors",

        "Allotment of beds and cabins",

        "Keep records of medicines",

        "Ability to save reports",

        "Payslip generation for hospital staffs",

        "Take care of tiresome paperworks",

        "Ability to add receptionists to take appointments",

        "Add pharmacists to take care of medicines",

        "Add nurses to look after patients' informations",

        "Automated generation of diagnostic reports",

        "Automated generation of prescriptions",

        "Easiest billing system",

        "Create your own website with your contents",

        "Ability to set emergency contacts, opening/closing hours",

        "Manage the services you provide",

        "Ability for patients to request appointments from website",

        "Simple yet convenient blog",

        "Expose your hospital to the world",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support",

        "Complete hospital management solution",

        "Multi-functional medical center management",

        "Admin, patients, doctors, nurses collaboration",

        "Laboratorists, pharmacists, receptionist, accountants integration",

        "Automated paperwork and manual tasks",

        "Efficient healthcare operations",

        "Comprehensive user account management",

        "Advanced appointment booking",

        "Doctor-patient communication",

        "Hospital accommodation management",

        "Medicine tracking system",

        "Blood donor records management",

        "Diagnostic reports management",

        "Payroll and accounting system",

        "Patient payment tracking",

        "Operation reports management",

        "Doctor profile management",

        "Department categorization",

        "Blood bank management",

        "Bed and cabin allocation",

        "Medicine records management",

        "Report generation and saving",

        "Staff payslip generation",

        "Receptionist management",

        "Pharmacist management",

        "Nurse management",

        "Automated diagnostic reports",

        "Automated prescription generation",

        "Billing system automation",

        "Website creation capabilities",

        "Emergency contact management",

        "Service management",

        "Patient appointment requests",

        "Blog functionality",

        "Hospital exposure and marketing",

        "Mobile app support",

        "Google Play Store integration",

        "Complete source code access",

        "Technical support"

      ],

      technologies: [

        "PHP", "MySQL", "Native Android", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://demo.doctorcorps.com",

      githubUrl: "https://github.com/doctorcorps",

      liveUrl: "https://doctorcorps.com"

    },

    'hospitalcore-complete-saas-hospital-management-system-v2': {

      title: "Hospitalcore – Complete SAAS Hospital management system",

      category: "HealthCare",

      tags: ["B2B", "HealthCare", "SAAS", "Hospital Management"],

      description: "Complete SaaS-based hospital management system with cloud-based deployment and comprehensive healthcare management features.",

      status: "51 Sales",


      slug: "hospitalcore-complete-saas-hospital-management-system",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

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


      demoUrl: "https://aunch.enroles.com/128/",

      githubUrl: "https://github.com/hospitalcore",

      liveUrl: "https://hospitalcore.com"

    },

    'all-healed-diagnostic-pathology-lab-management-system': {

      title: "All Healed – Diagnostic/Pathology lab Management System",

      category: "HealthCare",

      tags: ["ERP & CRM", "HealthCare", "Lab Management"],

      description: "Specialized diagnostic and pathology lab management system with test tracking, report generation, and patient management.",

      status: "38 Sales",


      slug: "all-healed-diagnostic-pathology-lab-management-system",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

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


      demoUrl: "https://demo.allhealed.com",

      githubUrl: "https://github.com/allhealed",

      liveUrl: "https://allhealed.com"

    },

    'hospiva-hospital-management-system': {

      title: "Hospiva- Hospital Management System",

      category: "HealthCare",

      tags: ["ERP & CRM", "HealthCare", "Hospital Management", "Patient Management"],

      description: "Hospital management system is online patient management and Appointment, Scheduler application software for getting an appointment very easily over the internet. This application is built upon PHP with Codeigniter Framework Hospital can take the online patient appointment and patient can take doctor schedule from anywhere in the world.",

      status: "Available",


      slug: "hospiva-hospital-management-system",

      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center",

      overview: "Hospiva is a comprehensive hospital management system designed for online patient management and appointment scheduling. This application is built upon PHP with Codeigniter Framework, allowing hospitals to take online patient appointments and patients to schedule doctor appointments from anywhere in the world. It provides a complete solution for modern healthcare management.",

      features: [

        "Online Appointment System",

        "User Level-wise Report",

        "Doctors Time Off Management",

        "Doctors Scheduling Management",

        "Patients Management",

        "Bootstrap Based Design",

        "Fresh and Clean Code",

        "Modern Website integration",

        "All Browser Support",

        "Fully Responsive",

        "Billing System is integrated",

        "Insurance system is integrated",

        "Online patient management",

        "Appointment, Scheduler application software",

        "Getting an appointment very easily over the internet",

        "Built upon PHP with Codeigniter Framework",

        "Hospital can take the online patient appointment",

        "Patient can take doctor schedule from anywhere in the world",

        "Complete hospital management solution",

        "Patient records management",

        "Doctor scheduling and management",

        "Appointment booking system",

        "Billing and insurance integration",

        "Responsive design for all devices",

        "Modern web interface",

        "Cross-browser compatibility",

        "Clean and maintainable code",

        "Website integration capabilities"

      ],

      technologies: [

        "PHP", "CodeIgniter", "MySQL", "Bootstrap", "JavaScript",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://hospiva.online",

      githubUrl: "https://github.com/hospiva",

      liveUrl: "https://hospiva.online"

    },

    // Human Resource Products

    'hr-logics-hrm-payroll-project-management': {

      title: "HR Logics – HRM, Payroll & Project Management",

      category: "Human Resource",

      tags: ["ERP & CRM", "Human Resource", "Payroll", "Project Management"],

      description: "Comprehensive HR management system with payroll processing, project management, and employee administration tools.",

      status: "86 Sales",


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


      demoUrl: "https://demo.freelancemall.com",

      githubUrl: "https://github.com/freelancemall",

      liveUrl: "https://freelancemall.com"

    },

    'recruitpool-complete-saas-recruitment-manager-ats-application-tracking-system': {

      title: "Recruitpool:- Complete SAAS Recruitment Manager with ATS (Application Tracking System)",

      category: "Human Resource",

      tags: ["Human Resource", "SAAS", "Recruitment Manager", "ATS", "Application Tracking System"],

      description: "Complete SAAS Recruitment Manager A Web application to manage the recruitment process of a company. If you are a company that need an application through which job seekers can apply directly on your website and you can manage those job applicants from an admin panel then this is the app you need.",

      status: "Available",


      slug: "recruitpool-complete-saas-recruitment-manager-ats-application-tracking-system",

      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",

      overview: "Recruitpool is a complete SAAS Recruitment Manager with ATS (Application Tracking System). It's a comprehensive web application designed to manage the entire recruitment process of a company. If you are a company that needs an application through which job seekers can apply directly on your website and you can manage those job applicants from an admin panel, then this is the perfect solution for you.",

      features: [

        "Add multiple companies",

        "Front site for candidates to apply for job",

        "Job Categories",

        "Job Skills",

        "Kanban board to manage job applications",

        "Manage Job Openings",

        "Email notifications",

        "Team Member's Roles & Permissions",

        "Theme Settings",

        "Multi Languages",

        "Auto update",

        "Custom Job Questions",

        "Interview Scheduling",

        "Job Onboarding",

        "Complete SAAS Recruitment Manager",

        "ATS (Application Tracking System)",

        "Web application to manage recruitment process",

        "Job seekers can apply directly on website",

        "Manage job applicants from admin panel",

        "Multiple company support",

        "Front-end candidate application system",

        "Comprehensive job categorization",

        "Advanced skill management",

        "Visual job application management with Kanban board",

        "Complete job opening management",

        "Automated email notification system",

        "Role-based team member permissions",

        "Customizable theme settings",

        "Multi-language support",

        "Automatic system updates",

        "Custom job question creation",

        "Interview scheduling system",

        "Complete job onboarding process"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://recruitpool.online",

      githubUrl: "https://github.com/recruitpool",

      liveUrl: "https://recruitpool.online"

    },

    // Matrimony Products

    'futureshaadi-matrimony-web-application-android-ios-app-v2': {

      title: "Futureshaadi- Matrimony Web Application with Android and iOS app",

      category: "Matrimony",

      tags: ["Dating", "Matrimony", "Web App", "Mobile Apps"],

      description: "Complete matrimony web application with dedicated Android and iOS apps featuring advanced matching algorithms and secure communication.",

      status: "73 Sales",


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


      demoUrl: "https://futureshaadi.online",

      githubUrl: "https://github.com/futureshaadi",

      liveUrl: "https://futureshaadi.com"

    },

    'rishtey-shaadi-clone-matrimony-android-ios-app-v2': {

      title: "Rishtey – Shaadi Clone Matrimony Android & iOS app",

      category: "Matrimony",

      tags: ["Dating", "Matrimony", "Mobile Apps", "Shaadi Clone"],

      description: "Complete Shaadi clone matrimony platform with Android and iOS applications featuring comprehensive matchmaking and family integration.",

      status: "53 Sales",


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


      demoUrl: "https://demo.realtorstack.com",

      githubUrl: "https://github.com/realtorstack",

      liveUrl: "https://realtorstack.com"

    },

    'smartcitizens-property-management-system-tenant-maintenance': {

      title: "SmartCitizens – Property Management System with Tenant & Maintenance",

      category: "Real Estate",

      tags: ["ERP & CRM", "Real Estate", "Tools and Utilities", "Property Management"],

      description: "Property management refers to the administration, operation, and oversight of real estate properties on behalf of property owners. It involves various tasks such as marketing rental properties, finding tenants, collecting rent and ensuring legal compliance.",

      status: "Available",


      slug: "smartcitizens-property-management-system-tenant-maintenance",

      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=600&fit=crop&crop=center",

      overview: "SmartCitizens is a comprehensive property management system designed for the administration, operation, and oversight of real estate properties on behalf of property owners. It involves various tasks such as marketing rental properties, finding tenants, collecting rent and ensuring legal compliance. Property managers maintain accurate financial records, including income and expense tracking, budgeting, and providing owners with regular financial reports.",

      features: [

        "Informative Dashboard",

        "User Management",

        "User Roles and Permissions",

        "Property Management",

        "Tenant Management",

        "Property Unit Management",

        "Maintainer Management",

        "Maintenance Request Management",

        "Support System",

        "Contact Management",

        "Income / Expense Management",

        "Company Settings",

        "Account Settings",

        "Application Settings",

        "Email Settings",

        "Multi Languages",

        "Payment Settings",

        "Manage Transaction",

        "Subscription Packages Management",

        "Subscription Coupon & Coupon History Management",

        "Landing Page Enable/Disable Option",

        "Register Page Enable/Disable Option",

        "Multi Theme Colors",

        "RTL/LTR Theme",

        "Site SEO Setting",

        "Google Recaptcha Setting",

        "Property administration and operation",

        "Real estate property oversight",

        "Marketing rental properties",

        "Finding tenants",

        "Collecting rent",

        "Ensuring legal compliance",

        "Accurate financial records",

        "Income and expense tracking",

        "Budgeting",

        "Regular financial reports",

        "Property owner management",

        "Tenant relationship management",

        "Maintenance coordination",

        "Financial reporting",

        "Legal compliance tracking",

        "Multi-language support",

        "Theme customization",

        "SEO optimization",

        "Security features"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://smartcitizens.online",

      githubUrl: "https://github.com/smartcitizens",

      liveUrl: "https://smartcitizens.online"

    },

    'brickwick-real-estate-portal-multilingual': {

      title: "Brickwick – Real Estate Portal (Multilingual)",

      category: "Real Estate",

      tags: ["Real Estate", "Multilingual", "Property Portal", "Web Portal"],

      description: "This Startup has hundreds of unique features that makes it out of box. It is one of the most sleek and beautiful real estate design. Key Features Page, blog, menu, contact, real estate.. modules are provided with the use of components to avoid boilerplate code.",

      status: "Available",


      slug: "brickwick-real-estate-portal-multilingual",

      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",

      overview: "Brickwick is a comprehensive real estate portal with multilingual support that offers hundreds of unique features making it stand out from the box. It features one of the most sleek and beautiful real estate designs with key features including page, blog, menu, contact, and real estate modules provided with the use of components to avoid boilerplate code.",

      features: [

        "RSS feeds for posts",

        "Agency panel with credit system to post their properties",

        "Support payment methods: PayPal, Stripe, Razorpay, and Paystack to buy credits",

        "Powerful media system, also support Amazon S3, DigitalOcean Spaces",

        "SEO & sitemap support: access sitemap to see more",

        "RESTful API using Laravel Sanctum",

        "Multi language support",

        "Unlimited number of languages",

        "Google Analytics: display analytics data in admin panel",

        "Translation tool: easy to translate front theme and admin panel to your language",

        "Beautiful theme is ready to use",

        "Powerful Permission System: Manage user, team, role by permissions",

        "Easy to manage user by permissions",

        "Admin template comes with color schemes to match your taste",

        "Fully Responsive: Compatible with all screen resolutions",

        "Coding Standard: All code follow coding standards PSR-2 and best practices",

        "Hundreds of unique features",

        "Sleek and beautiful real estate design",

        "Page, blog, menu, contact, real estate modules",

        "Components to avoid boilerplate code",

        "Agency credit system",

        "Multiple payment gateway support",

        "Media system with cloud storage",

        "SEO and sitemap optimization",

        "RESTful API integration",

        "Multi-language support",

        "Analytics integration",

        "Translation management",

        "Permission-based user management",

        "Responsive design",

        "PSR-2 coding standards"

      ],

      technologies: [

        "Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript",

        "Amazon S3", "DigitalOcean Spaces", "PayPal", "Stripe", "Razorpay", "Paystack",

        "Google Analytics", "Laravel Sanctum", "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://brickwick.online",

      githubUrl: "https://github.com/brickwick",

      liveUrl: "https://brickwick.online"

    },

    // Restaurant Products

    'mexicata-complete-restaurant-pos': {

      title: "Mexicata – Complete Restaurant POS",

      category: "Restaurant",

      tags: ["ERP & CRM", "Restaurant", "POS System"],

      description: "Complete restaurant point-of-sale system with comprehensive order management, payment processing, and restaurant operations.",

      status: "64 Sales",


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


      demoUrl: "https://demo.hotelfelf.com",

      githubUrl: "https://github.com/hotelfelf",

      liveUrl: "https://hotelfelf.com"

    },
    'cargosilo-courier-management-system': {
      title: "CargoSilo- Complete Courier Management System – Domestic and International",
      category: "Travel",
      tags: ["ERP & CRM", "Travel", "Courier"],
      description: "It is a software designed for companies that handle packages to monitor the logistics of storage and cargo handling to their final destination and managing employees and drivers so you can track all of your company. This system is based on Laravel, the advantage of this software is that it is a web system, allowing it to be accessed from a PC, Tablet or Smartphone possessing an Internet connection and a webservices api's ready. The client have the ability to login and request or track his packages.",
      status: "Available",
      slug: "cargosilo-courier-management-system",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      overview: "CargoSilo is a comprehensive courier management system designed for companies that handle packages to monitor logistics of storage and cargo handling to their final destination. It manages employees and drivers so you can track all of your company operations. The system is based on Laravel and is a web system, allowing access from PC, Tablet or Smartphone with Internet connection and webservices APIs ready.",
      features: [
        "SMS Notifications: ready to be integrated with your account on clickatell directly to send sms for whatever you needs",
        "Dynamic Workflow: in every step you can choose which one will receive the notification and what he can do too",
        "Multilingual System: you can add any language you need and have the ability to translate it directly from your dashboard",
        "Multi Currency: you can add any currency you need directly from your dashboard",
        "Package tracking system",
        "Route optimization",
        "Delivery management",
        "Customer notifications",
        "Payment processing",
        "Analytics and reporting"
      ],
      technologies: [
        "Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap",
        "AWS", "SMS Gateway", "Payment Gateway", "API Integration"
      ],
      demoUrl: "https://demo.cargosilo.com",
      githubUrl: "https://github.com/cargosilo",
      liveUrl: "https://cargosilo.com"
    },
    'secretbus-bus-reservation-system': {
      title: "SecretBus- Bus Reservation System",
      category: "Travel",
      tags: ["ERP & CRM", "Travel", "Bus"],
      description: "Bus Reservation System is a very wonderful Bus and fleet Booking System. It is mostly useful for any Bus, Fleet and Ticket Selling Company. It has a variety of features on Bus ticket Management.",
      status: "Available",
      slug: "secretbus-bus-reservation-system",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&crop=center",
      overview: "SecretBus is a comprehensive bus reservation system that provides complete bus travel management including seat booking, route management, and bus operations. It offers advanced features for bus operators and passengers with a variety of features on bus ticket management.",
      features: [
        "Bus seat booking system",
        "Route management",
        "Schedule management",
        "Passenger management",
        "Payment processing",
        "Ticket generation",
        "Bus operator dashboard",
        "Mobile app support",
        "Fleet management",
        "Ticket selling management"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Transportation APIs"
      ],
      demoUrl: "https://demo.secretbus.com",
      githubUrl: "https://github.com/secretbus",
      liveUrl: "https://secretbus.com"
    },
    'travelray-complete-travel-booking-portal': {
      title: "Travelray – Book Hotels, Tours, Flights, Activities, Cabs – Complete Travel Booking Portal",
      category: "Travel",
      tags: ["Travel", "Booking", "Portal"],
      description: "A Complete Travel Booking website and Marketplace for Travel Agency, Tour Operator, Car Transfer, Activity/Event, Hotel Booking, Room Bnb, Villa Rental, Resort Rental, Flight Booking, Make Affiliate Travel website. Easy to turn On/Off any service you would like to use for your purpose.",
      status: "Available",
      slug: "travelray-complete-travel-booking-portal",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop&crop=center",
      overview: "Travelray is a comprehensive travel booking portal that provides complete booking services for hotels, tours, flights, activities, and cabs. It offers a one-stop solution for all travel needs with advanced booking management and customer service features. The platform works as a marketplace, allowing partners and vendors to upload listings for free or paid, with multi-items booking checkout and membership functions.",
      features: [
        "Best optimized UI/UX and get in touch with travel trending in the world",
        "Works as Marketplace, allows Partner/Vendor can upload listing for free or paid",
        "Multi-items booking with checkout",
        "Support Membership functions build-ins, allows Partner/Vendor can buy by a package for upload listing by Free, Paid",
        "With strongly filterable, sortable and searchable booking list that you can configure the way you want",
        "Add Attribute unlimited for each service like make a Category for Hotel, Tour, Car, Rental, Activity, Flight, Hotel, Room",
        "Advanced Search very easy to make searchable stronger",
        "Support Location type for build location structure by your way. Included lat&longtidule of google map",
        "Many services you can use for site and can make On, Off by config: Hotel, Room (Accommodation), Tour, Rental, Car, Flight",
        "Works as a Marketplace system or single site for all services above",
        "Friendly Dashboard for Partner/Vendor, Admin and Buyer",
        "Built-in analytics with booking statistics with the chart, in balance, income",
        "Invoice manage, system automatic make to Invoice attach to notification email for each booking process",
        "Vendor, Partner can communication with the buyer via Inbox function before booking",
        "Booking history with show status of booking like pending, canceled, completed",
        "Refund manager for Admin and Partner/Vendor. Support Refund workflow between Buyer and Vendor / Partner and site Owner",
        "Automatical detect currency by language with option to change language and assign currency for each language system used",
        "Flexible to make various email templates for notifications",
        "Support many major OTA Calendar syncs (ICal) like Google Calendar, TripAdvisor Calendar, Airbnb Calendar, HomeAway Calendar",
        "Can control everything with pricing by date on the calendar",
        "Can make Tour Package by including Flight, Accommodation, Car.. all in one for client select to book",
        "Support weather API to display weather info on each location",
        "Set Discount by date from one to all services on site",
        "Flexible to make extra pricing for each service on-site. Like add more people, laundry, more beds.. any kind of extra price setting you can use, can set required or optional",
        "Make Coupon for one service or all services for competition with business",
        "Multi-language support",
        "Affiliate system to start earning for Blogger, Affiliater with some OTA we checked: Travelpayouts.com, HotelCombined, Booking.com, Expedia.com, Skyscanner.com",
        "Integrated by built-ins with Google, Facebook login. Difference register form for normal user and Partner / Vendor user",
        "Make a review for all services, with some options, allows required booked or no need can make reviews. Each review user can press Like/Unlike for more helpful for visitor",
        "Multi-currency supported, set one Currency as Primary then with other one make exchange rate with Primary Currency",
        "Inventory for Hotel/Room to manage and get an overview of booking for all rooms in one place",
        "Configuration Booking Fee on-site by can turn On, Off for match with your purpose",
        "Wishlist to save all services interested in by buyer ready supported"
      ],
      technologies: [
        "React", "Node.js", "PostgreSQL", "Express", "Socket.io",
        "AWS", "Stripe", "Redis", "Docker", "Travel APIs", "Google Maps API",
        "Payment Gateway", "Email Services", "Calendar Integration"
      ],
      demoUrl: "https://demo.travelray.com",
      githubUrl: "https://github.com/travelray",
      liveUrl: "https://travelray.com"
    },
    'hoteltitan-hotel-resort-booking-application': {
      title: "HotelTitan – Hotel & Resort Booking Application",
      category: "Travel",
      tags: ["Travel", "Hotel", "Booking"],
      description: "This is a clean, premium, and modern booking system. It is responsive on literally any screen size, this way you can worry less about the interface, and focus on what is important. It is made with currently best features where you can get details about a hotel facilities including rooms and suits details with booking process. You can also get latest blogs and gallery features about hotels. This include with 5 wonderfully designed home pages and attractive 10+ inner pages. It is powered by HTML5 with CSS and using Bootstrap5 framework. The code structure of this template is completely clean and very well organized so anyone can easily customize it. It is also fully responsive and W3 Validation markup.",
      status: "Available",
      slug: "hoteltitan-hotel-resort-booking-application",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop&crop=center",
      overview: "HotelTitan is a clean, premium, and modern booking system that is responsive on literally any screen size. It is made with currently best features where you can get details about hotel facilities including rooms and suits details with booking process. You can also get latest blogs and gallery features about hotels. It includes 5 wonderfully designed home pages and attractive 10+ inner pages.",
      features: [
        "5 different homepages to give you the best selections in customization",
        "Full Room Booking integration",
        "Fully responsive layout",
        "Powerful admin panel, all things can be changed from the admin panel, no hardcode",
        "Nice and clean design from our designer expert",
        "Multi-language & multi-currency support",
        "Right To Left (RTL) language support",
        "Hotel facilities details",
        "Rooms and suites details with booking process",
        "Latest blogs and gallery features about hotels",
        "Clean and well organized code structure",
        "Fully responsive and W3 Validation markup"
      ],
      technologies: [
        "HTML5", "CSS3", "Bootstrap5", "JavaScript", "jQuery",
        "PHP", "MySQL", "Payment Gateway", "Responsive Design"
      ],
      demoUrl: "https://demo.hoteltitan.com",
      githubUrl: "https://github.com/hoteltitan",
      liveUrl: "https://hoteltitan.com"
    },
    'hotelnerd-hotel-resort-booking-system': {
      title: "HotelNerd – Hotel & Resort Booking System",
      category: "Travel",
      tags: ["Travel", "Hotel", "Booking"],
      description: "This is a Laravel Hotel and Resort Booking system. It is a clean, premium, and modern booking system. It is responsive on literally any screen size, this way you can worry less about the interface, and focus on what is important. Features Multi-language, unlimited languages. Full Room Booking integration Page, blog, menu, contact… modules are provided with the use of components to avoid boilerplate code. Powerful media system, also support Amazon S3, DigitalOcean Spaces SEO & sitemap support: access sitemap.xml to see more. Google Analytics: display analytics data in admin panel. Translation tool: easy to translate front theme and admin panel to your language. Beautiful theme is ready to use. Powerful Permission System: Manage user, team, role by permissions. Easy to manage user by permissions. Admin template comes with color schemes to match your taste. Fully Responsive: Compatible with all screen resolutions. Coding Standard: All code follow coding standards PSR-2 and best practices.",
      status: "Available",
      slug: "hotelnerd-hotel-resort-booking-system",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&crop=center",
      overview: "HotelNerd is a Laravel Hotel and Resort Booking system that is clean, premium, and modern. It is responsive on literally any screen size, allowing you to worry less about the interface and focus on what is important. The system features multi-language support, unlimited languages, full room booking integration, and comprehensive modules for page, blog, menu, contact management.",
      features: [
        "Multi-language, unlimited languages",
        "Full Room Booking integration",
        "Page, blog, menu, contact… modules are provided with the use of components to avoid boilerplate code",
        "Powerful media system, also support Amazon S3, DigitalOcean Spaces",
        "SEO & sitemap support: access sitemap.xml to see more",
        "Google Analytics: display analytics data in admin panel",
        "Translation tool: easy to translate front theme and admin panel to your language",
        "Beautiful theme is ready to use",
        "Powerful Permission System: Manage user, team, role by permissions",
        "Easy to manage user by permissions",
        "Admin template comes with color schemes to match your taste",
        "Fully Responsive: Compatible with all screen resolutions",
        "Coding Standard: All code follow coding standards PSR-2 and best practices"
      ],
      technologies: [
        "Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript",
        "Amazon S3", "DigitalOcean Spaces", "Google Analytics", "SEO Tools"
      ],
      demoUrl: "https://demo.hotelnerd.com",
      githubUrl: "https://github.com/hotelnerd",
      liveUrl: "https://hotelnerd.com"

    },

    // E-commerce Products

    'shopify-clone-complete-ecommerce-platform': {

      title: "Shopify Clone – Complete E-commerce Platform",

      category: "E-commerce",

      tags: ["E-commerce", "Online Store", "Shopping Cart"],

      description: "A comprehensive e-commerce platform with advanced features including product management, inventory tracking, payment processing, and customer management.",

      status: "Available",


      slug: "shopify-clone-complete-ecommerce-platform",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "Shopify Clone is a comprehensive e-commerce platform that replicates the functionality of popular e-commerce solutions. Our platform provides advanced features for product management, inventory tracking, payment processing, and customer management, making it perfect for online businesses of all sizes.",

      features: [

        "Product catalog management",

        "Inventory tracking and alerts",

        "Shopping cart and checkout",

        "Payment gateway integration",

        "Customer account management",

        "Order management system",

        "Admin dashboard",

        "Multi-vendor support",

        "SEO optimization",

        "Mobile responsive design",

        "Analytics and reporting",

        "Email notifications"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "PayPal", "AWS", "Docker", "Redis", "Elasticsearch"

      ],


      demoUrl: "https://demo.shopifyclone.com",

      githubUrl: "https://github.com/shopifyclone",

      liveUrl: "https://shopifyclone.com"

    },

    'amazon-clone-multi-vendor-marketplace': {

      title: "Amazon Clone – Multi-vendor Marketplace",

      category: "E-commerce",

      tags: ["Marketplace", "Multi-vendor", "E-commerce"],

      description: "A complete multi-vendor marketplace platform similar to Amazon with vendor management, product listings, order processing, and commission tracking.",

      status: "Available",


      slug: "amazon-clone-multi-vendor-marketplace",

      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop&crop=center",

      overview: "Amazon Clone is a complete multi-vendor marketplace platform that replicates the functionality of popular e-commerce marketplaces. Our platform enables multiple vendors to sell their products through a single platform with advanced features for vendor management, product listings, order processing, and commission tracking.",

      features: [

        "Multi-vendor registration",

        "Vendor dashboard and management",

        "Product listing and categorization",

        "Advanced search and filtering",

        "Order processing system",

        "Commission tracking",

        "Payment splitting",

        "Review and rating system",

        "Inventory management",

        "Shipping integration",

        "Analytics dashboard",

        "Mobile app support"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Elasticsearch", "Socket.io"

      ],


      demoUrl: "https://demo.amazonclone.com",

      githubUrl: "https://github.com/amazonclone",

      liveUrl: "https://amazonclone.com"

    },

    'woocommerce-alternative-wordpress-ecommerce': {

      title: "WooCommerce Alternative – WordPress E-commerce",

      category: "E-commerce",

      tags: ["WordPress", "E-commerce", "CMS"],

      description: "A powerful WordPress-based e-commerce solution with custom themes, payment gateways, and advanced product management features.",

      status: "Available",


      slug: "woocommerce-alternative-wordpress-ecommerce",

      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",

      overview: "WooCommerce Alternative is a powerful WordPress-based e-commerce solution that provides custom themes, payment gateways, and advanced product management features. Our platform offers a flexible and scalable solution for businesses looking to build their online store on WordPress.",

      features: [

        "WordPress integration",

        "Custom e-commerce themes",

        "Multiple payment gateways",

        "Product variations and attributes",

        "Inventory management",

        "Order tracking",

        "Customer accounts",

        "Coupon and discount system",

        "SEO optimization",

        "Mobile responsive design",

        "Plugin ecosystem",

        "Analytics integration"

      ],

      technologies: [

        "WordPress", "PHP", "MySQL", "WooCommerce", "Stripe", 

        "PayPal", "Bootstrap", "jQuery", "REST API", "SSL"

      ],


      demoUrl: "https://demo.woocommercealt.com",

      githubUrl: "https://github.com/woocommercealt",

      liveUrl: "https://woocommercealt.com"

    },

    'food-delivery-app-restaurant-ecommerce': {

      title: "Food Delivery App – Restaurant E-commerce",

      category: "E-commerce",

      tags: ["Food Delivery", "Restaurant", "Mobile App"],

      description: "Complete food delivery platform with restaurant management, order tracking, payment integration, and delivery management system.",

      status: "Available",


      slug: "food-delivery-app-restaurant-ecommerce",

      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&h=600&fit=crop&crop=center",

      overview: "Food Delivery App is a complete food delivery platform designed for restaurants and food businesses. Our platform provides comprehensive restaurant management, order tracking, payment integration, and delivery management system to help food businesses reach more customers and increase sales.",

      features: [

        "Restaurant management system",

        "Menu management and customization",

        "Order tracking and notifications",

        "Payment gateway integration",

        "Delivery management",

        "Customer mobile app",

        "Restaurant admin panel",

        "Real-time order updates",

        "Review and rating system",

        "Promotional campaigns",

        "Analytics and reporting",

        "Multi-restaurant support"

      ],

      technologies: [

        "React Native", "Node.js", "Express", "MongoDB", "Stripe", 

        "Firebase", "Google Maps API", "Socket.io", "AWS", "Redis"

      ],


      demoUrl: "https://demo.fooddeliveryapp.com",

      githubUrl: "https://github.com/fooddeliveryapp",

      liveUrl: "https://fooddeliveryapp.com"

    },

    'digital-products-store-saas-ecommerce': {

      title: "Digital Products Store – SaaS E-commerce",

      category: "E-commerce",

      tags: ["Digital Products", "SaaS", "Downloads"],

      description: "Specialized e-commerce platform for digital products with instant downloads, license management, and automated delivery system.",

      status: "Available",


      slug: "digital-products-store-saas-ecommerce",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "Digital Products Store is a specialized e-commerce platform designed specifically for digital products. Our platform provides instant downloads, license management, and automated delivery system, making it perfect for software companies, digital content creators, and online course providers.",

      features: [

        "Instant digital delivery",

        "License key management",

        "Automated download links",

        "Digital product catalog",

        "Subscription management",

        "Customer account portal",

        "Download history tracking",

        "License validation system",

        "Payment processing",

        "Email automation",

        "Analytics dashboard",

        "API integration"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS S3", "Docker", "Redis", "JWT", "EmailJS"

      ],


      demoUrl: "https://demo.digitalproductsstore.com",

      githubUrl: "https://github.com/digitalproductsstore",

      liveUrl: "https://digitalproductsstore.com"

    },

    // Education Products

    'lms-learning-management-system': {

      title: "LMS - Learning Management System",

      category: "Education",

      tags: ["LMS", "E-learning", "Online Courses"],

      description: "A comprehensive Learning Management System with course creation, student management, progress tracking, and assessment tools for educational institutions.",

      status: "Available",


      slug: "lms-learning-management-system",

      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",

      overview: "LMS - Learning Management System is a comprehensive platform designed for educational institutions to manage courses, students, and learning activities. Our system provides advanced features for course creation, student management, progress tracking, and assessment tools, making it perfect for schools, universities, and training organizations.",

      features: [

        "Course creation and management",

        "Student enrollment and management",

        "Progress tracking and analytics",

        "Assessment and quiz tools",

        "Video and multimedia content",

        "Discussion forums and chat",

        "Grade book and reporting",

        "Certificate generation",

        "Mobile app support",

        "Integration with payment gateways",

        "Multi-language support",

        "Admin dashboard and controls"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "Socket.io", "JWT"

      ],


      demoUrl: "https://demo.lmsplatform.com",

      githubUrl: "https://github.com/lmsplatform",

      liveUrl: "https://lmsplatform.com"

    },

    'online-academy-course-platform': {

      title: "Online Academy - Course Platform",

      category: "Education",

      tags: ["Online Academy", "Courses", "Video Learning"],

      description: "Complete online academy platform with video courses, quizzes, certificates, and student progress tracking for educational content creators.",

      status: "Available",


      slug: "online-academy-course-platform",

      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop&crop=center",

      overview: "Online Academy is a complete course platform designed for educational content creators and instructors. Our platform provides video courses, quizzes, certificates, and student progress tracking, making it perfect for online educators, trainers, and educational businesses.",

      features: [

        "Video course creation",

        "Interactive quizzes and assessments",

        "Certificate generation",

        "Student progress tracking",

        "Course marketplace",

        "Instructor dashboard",

        "Payment processing",

        "Student community features",

        "Mobile learning app",

        "Analytics and reporting",

        "Multi-course bundles",

        "Live streaming integration"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS S3", "Docker", "Redis", "WebRTC", "FFmpeg"

      ],


      demoUrl: "https://demo.onlineacademy.com",

      githubUrl: "https://github.com/onlineacademy",

      liveUrl: "https://onlineacademy.com"

    },

    'school-management-system': {

      title: "School Management System",

      category: "Education",

      tags: ["School Management", "Student Portal", "Administration"],

      description: "Complete school management solution with student enrollment, attendance tracking, grade management, and parent communication portal.",

      status: "Available",


      slug: "school-management-system",

      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop&crop=center",

      overview: "School Management System is a comprehensive solution designed for educational institutions to manage all aspects of school operations. Our system provides student enrollment, attendance tracking, grade management, and parent communication portal, making it perfect for schools and educational organizations.",

      features: [

        "Student enrollment and registration",

        "Attendance tracking and management",

        "Grade book and report cards",

        "Parent communication portal",

        "Teacher management system",

        "Class scheduling and timetables",

        "Fee management and billing",

        "Library management",

        "Transportation tracking",

        "Exam management",

        "Staff payroll system",

        "Mobile app for parents and students"

      ],

      technologies: [

        "Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", 

        "Stripe", "AWS", "Docker", "Redis", "REST API"

      ],


      demoUrl: "https://demo.schoolmanagement.com",

      githubUrl: "https://github.com/schoolmanagement",

      liveUrl: "https://schoolmanagement.com"

    },

    'tutoring-platform-one-on-one-learning': {

      title: "Tutoring Platform - One-on-One Learning",

      category: "Education",

      tags: ["Tutoring", "Video Calls", "Scheduling"],

      description: "Online tutoring platform connecting students with tutors through video calls, scheduling system, and payment processing.",

      status: "Available",


      slug: "tutoring-platform-one-on-one-learning",

      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop&crop=center",

      overview: "Tutoring Platform is an online platform that connects students with qualified tutors for one-on-one learning sessions. Our platform provides video calls, scheduling system, and payment processing, making it perfect for tutoring businesses and educational service providers.",

      features: [

        "Tutor-student matching",

        "Video call integration",

        "Scheduling and calendar system",

        "Payment processing",

        "Session recording and playback",

        "Whiteboard and screen sharing",

        "Tutor rating and reviews",

        "Subject-based categorization",

        "Mobile app support",

        "Real-time messaging",

        "Progress tracking",

        "Automated reminders"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "WebRTC", "Socket.io", "AWS", "Docker", "Redis"

      ],


      demoUrl: "https://demo.tutoringplatform.com",

      githubUrl: "https://github.com/tutoringplatform",

      liveUrl: "https://tutoringplatform.com"

    },

    'university-portal-student-information-system': {

      title: "University Portal - Student Information System",

      category: "Education",

      tags: ["University", "Student Portal", "Information System"],

      description: "Comprehensive university portal with student registration, course enrollment, academic records, and faculty management system.",

      status: "Available",


      slug: "university-portal-student-information-system",

      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop&crop=center",

      overview: "University Portal is a comprehensive student information system designed for universities and higher education institutions. Our portal provides student registration, course enrollment, academic records, and faculty management system, making it perfect for universities and colleges.",

      features: [

        "Student registration and enrollment",

        "Course catalog and enrollment",

        "Academic records management",

        "Faculty management system",

        "Grade management and transcripts",

        "Financial aid and billing",

        "Library management",

        "Campus events and announcements",

        "Student housing management",

        "Research project tracking",

        "Alumni management",

        "Mobile app for students and faculty"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Elasticsearch", "REST API"

      ],


      demoUrl: "https://demo.universityportal.com",

      githubUrl: "https://github.com/universityportal",

      liveUrl: "https://universityportal.com"

    },

    'language-learning-app-duolingo-clone': {

      title: "Language Learning App - Duolingo Clone",

      category: "Education",

      tags: ["Language Learning", "Mobile App", "Gamification"],

      description: "Interactive language learning platform with gamified lessons, progress tracking, and multiple language support similar to Duolingo.",

      status: "Available",


      slug: "language-learning-app-duolingo-clone",

      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop&crop=center",

      overview: "Language Learning App is an interactive platform designed for language learning with gamified lessons, progress tracking, and multiple language support. Our app provides a Duolingo-like experience with engaging lessons, making it perfect for language learners and educational apps.",

      features: [

        "Gamified lesson system",

        "Multiple language support",

        "Progress tracking and streaks",

        "Interactive exercises and quizzes",

        "Speech recognition and pronunciation",

        "Offline learning capability",

        "Social features and leaderboards",

        "Achievement system and badges",

        "Personalized learning paths",

        "Mobile app for iOS and Android",

        "Subscription management",

        "Analytics and progress reports"

      ],

      technologies: [

        "React Native", "Node.js", "Express", "MongoDB", "Stripe", 

        "Firebase", "AWS", "Docker", "Redis", "Speech Recognition API"

      ],


      demoUrl: "https://demo.languagelearningapp.com",

      githubUrl: "https://github.com/languagelearningapp",

      liveUrl: "https://languagelearningapp.com"

    },

    // Entertainment Products

    'streaming-platform-netflix-clone': {

      title: "Streaming Platform - Netflix Clone",

      category: "Entertainment",

      tags: ["Streaming", "Video Platform", "Subscription"],

      description: "Complete video streaming platform with user profiles, content management, subscription billing, and recommendation engine.",

      status: "Available",


      slug: "streaming-platform-netflix-clone",

      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=600&fit=crop&crop=center",

      overview: "Streaming Platform is a complete video streaming platform that replicates the functionality of popular streaming services like Netflix. Our platform provides user profiles, content management, subscription billing, and recommendation engine, making it perfect for entertainment businesses and content creators.",

      features: [

        "Video streaming and playback",

        "User profiles and preferences",

        "Content management system",

        "Subscription billing and payments",

        "Recommendation engine",

        "Search and filtering",

        "Watchlist and favorites",

        "Multi-device support",

        "Offline downloads",

        "Parental controls",

        "Analytics and reporting",

        "Mobile app support"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS S3", "Docker", "Redis", "FFmpeg", "WebRTC"

      ],


      demoUrl: "https://demo.streamingplatform.com",

      githubUrl: "https://github.com/streamingplatform",

      liveUrl: "https://streamingplatform.com"

    },

    'music-streaming-app-spotify-clone': {

      title: "Music Streaming App - Spotify Clone",

      category: "Entertainment",

      tags: ["Music Streaming", "Audio Player", "Playlists"],

      description: "Music streaming application with playlist management, audio streaming, user profiles, and premium subscription features.",

      status: "Available",


      slug: "music-streaming-app-spotify-clone",

      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop&crop=center",

      overview: "Music Streaming App is a complete music streaming application that replicates the functionality of popular music streaming services like Spotify. Our platform provides playlist management, audio streaming, user profiles, and premium subscription features, making it perfect for music businesses and audio content creators.",

      features: [

        "Audio streaming and playback",

        "Playlist creation and management",

        "User profiles and preferences",

        "Music library management",

        "Search and discovery",

        "Social features and sharing",

        "Premium subscription features",

        "Offline downloads",

        "Cross-platform sync",

        "Music recommendations",

        "Artist and album pages",

        "Mobile app for iOS and Android"

      ],

      technologies: [

        "React Native", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS S3", "Docker", "Redis", "Web Audio API", "JWT"

      ],


      demoUrl: "https://demo.musicstreamingapp.com",

      githubUrl: "https://github.com/musicstreamingapp",

      liveUrl: "https://musicstreamingapp.com"

    },

    'event-management-platform': {

      title: "Event Management Platform",

      category: "Entertainment",

      tags: ["Event Management", "Ticketing", "Booking"],

      description: "Complete event management system with ticket sales, event creation, venue management, and attendee tracking.",

      status: "Available",


      slug: "event-management-platform",

      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop&crop=center",

      overview: "Event Management Platform is a comprehensive system designed for event organizers to manage all aspects of their events. Our platform provides ticket sales, event creation, venue management, and attendee tracking, making it perfect for event companies, venues, and entertainment businesses.",

      features: [

        "Event creation and management",

        "Ticket sales and pricing",

        "Venue management system",

        "Attendee registration and tracking",

        "Payment processing",

        "Event calendar and scheduling",

        "Email notifications and reminders",

        "QR code ticketing",

        "Event analytics and reporting",

        "Mobile app for attendees",

        "Social media integration",

        "Multi-language support"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Socket.io", "QR Code API"

      ],


      demoUrl: "https://demo.eventmanagement.com",

      githubUrl: "https://github.com/eventmanagement",

      liveUrl: "https://eventmanagement.com"

    },

    'social-media-platform-instagram-clone': {

      title: "Social Media Platform - Instagram Clone",

      category: "Entertainment",

      tags: ["Social Media", "Photo Sharing", "Stories"],

      description: "Social media platform with photo sharing, stories, direct messaging, and social networking features.",

      status: "Available",


      slug: "social-media-platform-instagram-clone",

      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",

      overview: "Social Media Platform is a complete social networking application that replicates the functionality of popular social media platforms like Instagram. Our platform provides photo sharing, stories, direct messaging, and social networking features, making it perfect for social media businesses and content creators.",

      features: [

        "Photo and video sharing",

        "Stories and temporary content",

        "Direct messaging system",

        "User profiles and bios",

        "Follow and follower system",

        "Like and comment features",

        "Hashtag and discovery",

        "Live streaming capabilities",

        "Story highlights",

        "Explore and search",

        "Push notifications",

        "Mobile app for iOS and Android"

      ],

      technologies: [

        "React Native", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS S3", "Docker", "Redis", "Socket.io", "WebRTC"

      ],


      demoUrl: "https://demo.socialmediaplatform.com",

      githubUrl: "https://github.com/socialmediaplatform",

      liveUrl: "https://socialmediaplatform.com"

    },

    // Finance Products

    'banking-management-system': {

      title: "Banking Management System",

      category: "Finance",

      tags: ["Banking", "Financial Management", "Core Banking"],

      description: "Complete banking management system with account management, transactions, loans, and customer portal for financial institutions.",

      status: "Available",


      slug: "banking-management-system",

      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",

      overview: "Banking Management System is a comprehensive core banking solution designed for financial institutions to manage all aspects of banking operations. Our system provides account management, transactions, loans, and customer portal, making it perfect for banks, credit unions, and financial service providers.",

      features: [

        "Account management and creation",

        "Transaction processing and history",

        "Loan management system",

        "Customer portal and self-service",

        "Multi-currency support",

        "Interest calculation and processing",

        "Credit and debit card management",

        "Online banking features",

        "Mobile banking app",

        "Fraud detection and security",

        "Regulatory compliance tools",

        "Advanced reporting and analytics"

      ],

      technologies: [

        "Java", "Spring Boot", "PostgreSQL", "Redis", "Stripe", 

        "AWS", "Docker", "Kubernetes", "Microservices", "REST API"

      ],


      demoUrl: "https://demo.bankingmanagement.com",

      githubUrl: "https://github.com/bankingmanagement",

      liveUrl: "https://bankingmanagement.com"

    },

    'payment-gateway-solution': {

      title: "Payment Gateway Solution",

      category: "Finance",

      tags: ["Payment Gateway", "Fintech", "Payment Processing"],

      description: "Secure payment gateway with multiple payment methods, fraud detection, and merchant dashboard for online businesses.",

      status: "Available",


      slug: "payment-gateway-solution",

      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",

      overview: "Payment Gateway Solution is a secure and comprehensive payment processing platform designed for online businesses. Our gateway provides multiple payment methods, fraud detection, and merchant dashboard, making it perfect for e-commerce businesses, SaaS companies, and online service providers.",

      features: [

        "Multiple payment methods support",

        "Credit and debit card processing",

        "Digital wallet integration",

        "Bank transfer and ACH processing",

        "Cryptocurrency payment support",

        "Fraud detection and prevention",

        "Merchant dashboard and analytics",

        "Recurring payment management",

        "Refund and chargeback handling",

        "Multi-currency support",

        "PCI DSS compliance",

        "API integration and documentation"

      ],

      technologies: [

        "Node.js", "Express", "MongoDB", "Stripe", "PayPal", 

        "AWS", "Docker", "Redis", "JWT", "SSL/TLS"

      ],


      demoUrl: "https://demo.paymentgateway.com",

      githubUrl: "https://github.com/paymentgateway",

      liveUrl: "https://paymentgateway.com"

    },

    'investment-portfolio-tracker': {

      title: "Investment Portfolio Tracker",

      category: "Finance",

      tags: ["Investment", "Portfolio Management", "Financial Analytics"],

      description: "Comprehensive investment portfolio tracker with real-time market data, performance analytics, and risk assessment tools.",

      status: "Available",


      slug: "investment-portfolio-tracker",

      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop&crop=center",

      overview: "Investment Portfolio Tracker is a comprehensive platform designed for investors to manage and track their investment portfolios. Our platform provides real-time market data, performance analytics, and risk assessment tools, making it perfect for individual investors, financial advisors, and investment firms.",

      features: [

        "Portfolio creation and management",

        "Real-time market data integration",

        "Performance analytics and reporting",

        "Risk assessment and analysis",

        "Asset allocation tracking",

        "Dividend and income tracking",

        "Tax optimization tools",

        "Goal setting and tracking",

        "Mobile app for iOS and Android",

        "Alerts and notifications",

        "Historical performance analysis",

        "Export and reporting features"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Market Data API", "Chart.js"

      ],


      demoUrl: "https://demo.investmenttracker.com",

      githubUrl: "https://github.com/investmenttracker",

      liveUrl: "https://investmenttracker.com"

    },

    'cryptocurrency-exchange-platform': {

      title: "Cryptocurrency Exchange Platform",

      category: "Finance",

      tags: ["Cryptocurrency", "Trading", "Blockchain"],

      description: "Complete cryptocurrency exchange platform with trading, wallet management, security features, and admin dashboard.",

      status: "Available",


      slug: "cryptocurrency-exchange-platform",

      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",

      overview: "Cryptocurrency Exchange Platform is a complete trading platform designed for cryptocurrency exchanges and trading businesses. Our platform provides trading functionality, wallet management, security features, and admin dashboard, making it perfect for crypto exchanges, trading platforms, and blockchain businesses.",

      features: [

        "Cryptocurrency trading engine",

        "Order book and matching engine",

        "Digital wallet management",

        "Multi-currency support",

        "Advanced trading features",

        "Security and fraud prevention",

        "KYC and AML compliance",

        "Admin dashboard and management",

        "Mobile trading app",

        "API for third-party integration",

        "Real-time market data",

        "Withdrawal and deposit management"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Blockchain", 

        "AWS", "Docker", "Redis", "WebSocket", "Security APIs"

      ],


      demoUrl: "https://demo.cryptoexchange.com",

      githubUrl: "https://github.com/cryptoexchange",

      liveUrl: "https://cryptoexchange.com"

    },

    'personal-finance-manager': {

      title: "Personal Finance Manager",

      category: "Finance",

      tags: ["Personal Finance", "Budgeting", "Expense Tracking"],

      description: "Personal finance management app with budgeting tools, expense tracking, bill reminders, and financial goal setting.",

      status: "Available",


      slug: "personal-finance-manager",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "Personal Finance Manager is a comprehensive personal finance application designed for individuals to manage their finances effectively. Our app provides budgeting tools, expense tracking, bill reminders, and financial goal setting, making it perfect for personal finance management and financial planning.",

      features: [

        "Expense tracking and categorization",

        "Budget creation and management",

        "Bill reminders and notifications",

        "Financial goal setting and tracking",

        "Income and expense analytics",

        "Bank account integration",

        "Investment tracking",

        "Debt management tools",

        "Mobile app for iOS and Android",

        "Data export and reporting",

        "Security and privacy protection",

        "Multi-currency support"

      ],

      technologies: [

        "React Native", "Node.js", "Express", "MongoDB", "Stripe", 

        "Firebase", "AWS", "Docker", "Redis", "Banking APIs"

      ],


      demoUrl: "https://demo.personalfinance.com",

      githubUrl: "https://github.com/personalfinance",

      liveUrl: "https://personalfinance.com"

    },

    'insurance-management-system': {

      title: "Insurance Management System",

      category: "Finance",

      tags: ["Insurance", "Policy Management", "Claims Processing"],

      description: "Complete insurance management system with policy creation, claims processing, customer portal, and agent dashboard.",

      status: "Available",


      slug: "insurance-management-system",

      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&crop=center",

      overview: "Insurance Management System is a comprehensive platform designed for insurance companies to manage all aspects of their business operations. Our system provides policy creation, claims processing, customer portal, and agent dashboard, making it perfect for insurance companies, brokers, and agents.",

      features: [

        "Policy creation and management",

        "Claims processing and tracking",

        "Customer portal and self-service",

        "Agent dashboard and tools",

        "Premium calculation and billing",

        "Document management system",

        "Underwriting tools",

        "Renewal and renewal tracking",

        "Commission management",

        "Reporting and analytics",

        "Mobile app for agents and customers",

        "Integration with external systems"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Document Management", "PDF APIs"

      ],


      demoUrl: "https://demo.insurancemanagement.com",

      githubUrl: "https://github.com/insurancemanagement",

      liveUrl: "https://insurancemanagement.com"

    },

    // Games Products

    'mobile-game-development-platform': {

      title: "Mobile Game Development Platform",

      category: "Games",

      tags: ["Mobile Games", "Game Development", "Unity"],

      description: "Complete mobile game development platform with Unity integration, multiplayer support, and in-app purchases.",

      status: "Available",


      slug: "mobile-game-development-platform",

      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1200&h=600&fit=crop&crop=center",

      overview: "Mobile Game Development Platform is a comprehensive solution designed for game developers to create, publish, and monetize mobile games. Our platform provides Unity integration, multiplayer support, and in-app purchases, making it perfect for indie developers, game studios, and mobile game publishers.",

      features: [

        "Unity game engine integration",

        "Cross-platform game development",

        "Multiplayer networking support",

        "In-app purchase system",

        "Game analytics and tracking",

        "Player progression system",

        "Social features and leaderboards",

        "Push notifications",

        "Ad integration and monetization",

        "Game asset management",

        "Version control and deployment",

        "Performance optimization tools"

      ],

      technologies: [

        "Unity", "C#", "Node.js", "Express", "MongoDB", 

        "AWS", "Docker", "Redis", "Socket.io", "Firebase"

      ],


      demoUrl: "https://demo.mobilegameplatform.com",

      githubUrl: "https://github.com/mobilegameplatform",

      liveUrl: "https://mobilegameplatform.com"

    },

    'online-casino-platform': {

      title: "Online Casino Platform",

      category: "Games",

      tags: ["Casino Games", "Gambling", "Payment Integration"],

      description: "Complete online casino platform with slot games, poker, roulette, and secure payment processing.",

      status: "Available",


      slug: "online-casino-platform",

      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1200&h=600&fit=crop&crop=center",

      overview: "Online Casino Platform is a comprehensive gambling platform designed for casino operators to provide a complete gaming experience. Our platform includes slot games, poker, roulette, and secure payment processing, making it perfect for online casinos, gaming operators, and gambling businesses.",

      features: [

        "Slot machine games",

        "Poker and card games",

        "Roulette and table games",

        "Live dealer games",

        "Secure payment processing",

        "Player account management",

        "Bonus and promotion system",

        "Responsible gambling tools",

        "Mobile casino app",

        "Admin dashboard and analytics",

        "Multi-language support",

        "Regulatory compliance features"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "WebSocket", "Game APIs"

      ],


      demoUrl: "https://demo.onlinecasino.com",

      githubUrl: "https://github.com/onlinecasino",

      liveUrl: "https://onlinecasino.com"

    },

    'gaming-tournament-platform': {

      title: "Gaming Tournament Platform",

      category: "Games",

      tags: ["Tournaments", "Esports", "Competitive Gaming"],

      description: "Gaming tournament platform with bracket management, live streaming, and prize distribution system.",

      status: "Available",


      slug: "gaming-tournament-platform",

      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop&crop=center",

      overview: "Gaming Tournament Platform is a comprehensive esports platform designed for tournament organizers and gaming communities. Our platform provides bracket management, live streaming, and prize distribution system, making it perfect for esports organizations, gaming communities, and tournament operators.",

      features: [

        "Tournament bracket management",

        "Player registration and management",

        "Live streaming integration",

        "Prize pool management",

        "Match scheduling and tracking",

        "Real-time score updates",

        "Spectator features",

        "Team and player profiles",

        "Social features and chat",

        "Mobile app for players and spectators",

        "Analytics and reporting",

        "Sponsorship and advertising tools"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "WebRTC", "Socket.io"

      ],


      demoUrl: "https://demo.gamingtournament.com",

      githubUrl: "https://github.com/gamingtournament",

      liveUrl: "https://gamingtournament.com"

    },

    'ar-vr-game-development': {

      title: "AR/VR Game Development",

      category: "Games",

      tags: ["AR/VR", "Immersive Gaming", "3D Development"],

      description: "Augmented and Virtual Reality game development with immersive 3D environments and interactive gameplay.",

      status: "Available",


      slug: "ar-vr-game-development",

      image: "https://images.unsplash.com/photo-1592478411213-6153e4c4a8bd?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1592478411213-6153e4c4a8bd?w=1200&h=600&fit=crop&crop=center",

      overview: "AR/VR Game Development is a cutting-edge solution designed for creating immersive augmented and virtual reality gaming experiences. Our platform provides 3D environments and interactive gameplay, making it perfect for VR game developers, AR application creators, and immersive technology companies.",

      features: [

        "Virtual Reality game development",

        "Augmented Reality applications",

        "3D environment creation",

        "Interactive gameplay mechanics",

        "Hand tracking and gesture recognition",

        "Spatial audio integration",

        "Multiplayer VR experiences",

        "Cross-platform VR support",

        "Performance optimization",

        "VR/AR analytics and tracking",

        "Asset management system",

        "Deployment and distribution tools"

      ],

      technologies: [

        "Unity", "Unreal Engine", "C#", "C++", "WebXR", 

        "AWS", "Docker", "OpenVR", "ARCore", "ARKit"

      ],


      demoUrl: "https://demo.arvrdevelopment.com",

      githubUrl: "https://github.com/arvrdevelopment",

      liveUrl: "https://arvrdevelopment.com"

    },

    // Grocery Products

    'online-grocery-store-instacart-clone': {

      title: "Online Grocery Store - Instacart Clone",

      category: "Grocery",

      tags: ["Grocery Delivery", "Online Shopping", "Food Delivery"],

      description: "Complete online grocery platform with product catalog, shopping cart, delivery scheduling, and payment processing.",

      status: "Available",


      slug: "online-grocery-store-instacart-clone",

      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop&crop=center",

      overview: "Online Grocery Store is a comprehensive grocery delivery platform that replicates the functionality of popular grocery delivery services like Instacart. Our platform provides product catalog, shopping cart, delivery scheduling, and payment processing, making it perfect for grocery businesses and food delivery services.",

      features: [

        "Product catalog and search",

        "Shopping cart and checkout",

        "Delivery scheduling and tracking",

        "Payment processing integration",

        "Customer account management",

        "Order history and tracking",

        "Inventory management",

        "Driver assignment and tracking",

        "Mobile app for customers",

        "Admin dashboard for management",

        "Real-time notifications",

        "Multi-store support"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "Google Maps API", "Firebase"

      ],


      demoUrl: "https://demo.onlinegrocery.com",

      githubUrl: "https://github.com/onlinegrocery",

      liveUrl: "https://onlinegrocery.com"

    },

    'grocery-management-system': {

      title: "Grocery Management System",

      category: "Grocery",

      tags: ["Inventory Management", "POS System", "Grocery Store"],

      description: "Complete grocery store management system with inventory tracking, POS integration, and supplier management.",

      status: "Available",


      slug: "grocery-management-system",

      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop&crop=center",

      overview: "Grocery Management System is a comprehensive solution designed for grocery stores to manage all aspects of their business operations. Our system provides inventory tracking, POS integration, and supplier management, making it perfect for grocery stores, supermarkets, and retail food businesses.",

      features: [

        "Inventory tracking and management",

        "POS system integration",

        "Supplier management",

        "Product catalog management",

        "Sales reporting and analytics",

        "Customer management",

        "Staff management and scheduling",

        "Barcode scanning support",

        "Expiry date tracking",

        "Automated reordering",

        "Multi-location support",

        "Mobile app for staff"

      ],

      technologies: [

        "Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", 

        "Stripe", "AWS", "Docker", "Redis", "Barcode API"

      ],


      demoUrl: "https://demo.grocerymanagement.com",

      githubUrl: "https://github.com/grocerymanagement",

      liveUrl: "https://grocerymanagement.com"

    },

    'fresh-produce-marketplace': {

      title: "Fresh Produce Marketplace",

      category: "Grocery",

      tags: ["Fresh Produce", "Farmers Market", "Organic Food"],

      description: "Marketplace connecting farmers with consumers for fresh produce, organic food, and local farm products.",

      status: "Available",


      slug: "fresh-produce-marketplace",

      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop&crop=center",

      overview: "Fresh Produce Marketplace is a specialized platform designed to connect farmers with consumers for fresh produce and organic food. Our marketplace provides a direct connection between local farmers and customers, making it perfect for farmers markets, organic food businesses, and local food communities.",

      features: [

        "Farmer and vendor registration",

        "Product listing and catalog",

        "Order management system",

        "Payment processing",

        "Delivery scheduling",

        "Customer reviews and ratings",

        "Seasonal product tracking",

        "Organic certification display",

        "Local pickup options",

        "Subscription box services",

        "Mobile app for customers",

        "Analytics and reporting"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Google Maps API", "EmailJS"

      ],


      demoUrl: "https://demo.freshproduce.com",

      githubUrl: "https://github.com/freshproduce",

      liveUrl: "https://freshproduce.com"

    },

    'bulk-food-ordering-platform': {

      title: "Bulk Food Ordering Platform",

      category: "Grocery",

      tags: ["Bulk Orders", "Wholesale", "Restaurant Supply"],

      description: "Platform for bulk food ordering with wholesale pricing, restaurant supply management, and automated ordering.",

      status: "Available",


      slug: "bulk-food-ordering-platform",

      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop&crop=center",

      overview: "Bulk Food Ordering Platform is a specialized solution designed for restaurants, cafes, and food service businesses to manage their bulk food ordering needs. Our platform provides wholesale pricing, restaurant supply management, and automated ordering, making it perfect for food service businesses and wholesale suppliers.",

      features: [

        "Bulk ordering system",

        "Wholesale pricing management",

        "Restaurant supply catalog",

        "Automated reordering",

        "Supplier management",

        "Inventory tracking",

        "Cost analysis and reporting",

        "Multi-location support",

        "Approval workflow",

        "Mobile app for managers",

        "Integration with POS systems",

        "Delivery scheduling"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "REST API", "WebSocket"

      ],


      demoUrl: "https://demo.bulkfoodordering.com",

      githubUrl: "https://github.com/bulkfoodordering",

      liveUrl: "https://bulkfoodordering.com"

    },

    // Healthcare Products

    'hospital-management-system': {

      title: "Hospital Management System",

      category: "Healthcare",

      tags: ["Hospital Management", "Patient Records", "Medical System"],

      description: "Complete hospital management system with patient records, appointment scheduling, billing, and staff management.",

      status: "Available",


      slug: "hospital-management-system",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

      overview: "Hospital Management System is a comprehensive healthcare solution designed for hospitals and medical facilities to manage all aspects of patient care and hospital operations. Our system provides patient records, appointment scheduling, billing, and staff management, making it perfect for hospitals, clinics, and healthcare facilities.",

      features: [

        "Patient records management",

        "Appointment scheduling system",

        "Medical billing and invoicing",

        "Staff management and scheduling",

        "Doctor and specialist management",

        "Ward and bed management",

        "Pharmacy integration",

        "Laboratory management",

        "Insurance claim processing",

        "Medical history tracking",

        "Emergency patient handling",

        "Reporting and analytics"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "HL7 FHIR", "HIPAA Compliance"

      ],


      demoUrl: "https://demo.hospitalmanagement.com",

      githubUrl: "https://github.com/hospitalmanagement",

      liveUrl: "https://hospitalmanagement.com"

    },

    'telemedicine-platform': {

      title: "Telemedicine Platform",

      category: "Healthcare",

      tags: ["Telemedicine", "Video Consultations", "Remote Healthcare"],

      description: "Complete telemedicine platform with video consultations, patient management, prescription management, and billing.",

      status: "Available",


      slug: "telemedicine-platform",

      image: "https://images.unsplash.com/photo-1576091160550-2173dba0ef8d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba0ef8d?w=1200&h=600&fit=crop&crop=center",

      overview: "Telemedicine Platform is a comprehensive remote healthcare solution designed for healthcare providers to offer virtual consultations and remote patient care. Our platform provides video consultations, patient management, prescription management, and billing, making it perfect for healthcare providers, clinics, and telemedicine services.",

      features: [

        "Video consultation system",

        "Patient management portal",

        "Appointment scheduling",

        "Prescription management",

        "Medical records access",

        "Payment processing",

        "Multi-language support",

        "Mobile app for patients and doctors",

        "Secure messaging system",

        "File sharing and document upload",

        "Insurance integration",

        "Analytics and reporting"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "WebRTC", "AWS", "Docker", "Redis", "Socket.io"

      ],


      demoUrl: "https://demo.telemedicine.com",

      githubUrl: "https://github.com/telemedicine",

      liveUrl: "https://telemedicine.com"

    },

    'pharmacy-management-system': {

      title: "Pharmacy Management System",

      category: "Healthcare",

      tags: ["Pharmacy", "Inventory Management", "Prescription Management"],

      description: "Complete pharmacy management system with inventory tracking, prescription management, and customer portal.",

      status: "Available",


      slug: "pharmacy-management-system",

      image: "https://images.unsplash.com/photo-1587854692152-cbe660db9348?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1587854692152-cbe660db9348?w=1200&h=600&fit=crop&crop=center",

      overview: "Pharmacy Management System is a comprehensive solution designed for pharmacies to manage all aspects of their operations. Our system provides inventory tracking, prescription management, and customer portal, making it perfect for pharmacies, drug stores, and pharmaceutical businesses.",

      features: [

        "Inventory tracking and management",

        "Prescription management system",

        "Customer portal and profiles",

        "Drug interaction checking",

        "Insurance claim processing",

        "Automated refill reminders",

        "Staff management",

        "Sales reporting and analytics",

        "Multi-location support",

        "Mobile app for customers",

        "Barcode scanning support",

        "Expiry date tracking"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Drug Database API", "Barcode Scanner"

      ],


      demoUrl: "https://demo.pharmacymanagement.com",

      githubUrl: "https://github.com/pharmacymanagement",

      liveUrl: "https://pharmacymanagement.com"

    },

    'medical-records-management': {

      title: "Medical Records Management",

      category: "Healthcare",

      tags: ["Electronic Health Records", "Patient Data", "Medical Records"],

      description: "Electronic health records system with patient data management, medical history tracking, and secure data storage.",

      status: "Available",


      slug: "medical-records-management",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

      overview: "Medical Records Management is a comprehensive electronic health records system designed for healthcare providers to manage patient data securely and efficiently. Our system provides patient data management, medical history tracking, and secure data storage, making it perfect for healthcare facilities, clinics, and medical practices.",

      features: [

        "Electronic health records",

        "Patient data management",

        "Medical history tracking",

        "Secure data storage and encryption",

        "Access control and permissions",

        "Medical imaging integration",

        "Lab results management",

        "Prescription history",

        "Allergy and medication tracking",

        "Audit trail and compliance",

        "Data backup and recovery",

        "Integration with other systems"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "AWS S3", 

        "Docker", "Redis", "Encryption", "HL7 FHIR", "HIPAA Compliance"

      ],


      demoUrl: "https://demo.medicalrecords.com",

      githubUrl: "https://github.com/medicalrecords",

      liveUrl: "https://medicalrecords.com"

    },

    'healthcare-appointment-booking': {

      title: "Healthcare Appointment Booking",

      category: "Healthcare",

      tags: ["Appointment Booking", "Scheduling", "Patient Portal"],

      description: "Healthcare appointment booking system with online scheduling, patient portal, and automated reminders.",

      status: "Available",


      slug: "healthcare-appointment-booking",

      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",

      overview: "Healthcare Appointment Booking is a specialized system designed for healthcare providers to manage patient appointments efficiently. Our system provides online scheduling, patient portal, and automated reminders, making it perfect for medical practices, clinics, and healthcare facilities.",

      features: [

        "Online appointment scheduling",

        "Patient portal access",

        "Automated reminders and notifications",

        "Doctor availability management",

        "Appointment rescheduling",

        "Waitlist management",

        "Multi-provider support",

        "Mobile app for patients",

        "Calendar integration",

        "Payment processing",

        "Insurance verification",

        "Reporting and analytics"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "EmailJS", "Calendar API"

      ],


      demoUrl: "https://demo.healthcarebooking.com",

      githubUrl: "https://github.com/healthcarebooking",

      liveUrl: "https://healthcarebooking.com"

    },

    'mental-health-support-platform': {

      title: "Mental Health Support Platform",

      category: "Healthcare",

      tags: ["Mental Health", "Counseling", "Wellness"],

      description: "Mental health support platform with counseling sessions, wellness tracking, and mental health resources.",

      status: "Available",


      slug: "mental-health-support-platform",

      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop&crop=center",

      overview: "Mental Health Support Platform is a comprehensive solution designed for mental health professionals and wellness organizations to provide support and care to individuals. Our platform provides counseling sessions, wellness tracking, and mental health resources, making it perfect for therapists, counselors, and mental health organizations.",

      features: [

        "Counseling session management",

        "Wellness tracking and monitoring",

        "Mental health resources library",

        "Patient progress tracking",

        "Secure messaging system",

        "Appointment scheduling",

        "Crisis intervention tools",

        "Group therapy support",

        "Mobile app for patients",

        "Privacy and confidentiality features",

        "Integration with healthcare providers",

        "Analytics and reporting"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "WebRTC", "Encryption"

      ],


      demoUrl: "https://demo.mentalhealth.com",

      githubUrl: "https://github.com/mentalhealth",

      liveUrl: "https://mentalhealth.com"

    },

    // Human Resource Products

    'hr-management-system': {

      title: "HR Management System",

      category: "Human Resource",

      tags: ["HR Management", "Employee Management", "Payroll System"],

      description: "Complete HR management system with employee records, payroll processing, attendance tracking, and performance management.",

      status: "Available",


      slug: "hr-management-system",

      image: "https://images.unsplash.com/photo-1521791136064-7986b292a6ed?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1521791136064-7986b292a6ed?w=1200&h=600&fit=crop&crop=center",

      overview: "HR Management System is a comprehensive human resource management solution designed for organizations to manage all aspects of their workforce. Our system provides employee records, payroll processing, attendance tracking, and performance management, making it perfect for businesses, HR departments, and organizations of all sizes.",

      features: [

        "Employee records and profiles",

        "Payroll processing and management",

        "Attendance tracking and management",

        "Performance management system",

        "Leave management and approval",

        "Benefits administration",

        "Organizational chart management",

        "Document management system",

        "Reporting and analytics",

        "Multi-location support",

        "Mobile app for employees and HR",

        "Integration with other systems"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "JWT", "PDF Generation"

      ],


      demoUrl: "https://demo.hrmanagement.com",

      githubUrl: "https://github.com/hrmanagement",

      liveUrl: "https://hrmanagement.com"

    },

    'employee-self-service-portal': {

      title: "Employee Self-Service Portal",

      category: "Human Resource",

      tags: ["Employee Portal", "Self-Service", "HR Portal"],

      description: "Employee self-service portal with leave management, payslip access, profile updates, and HR requests.",

      status: "Available",


      slug: "employee-self-service-portal",

      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&crop=center",

      overview: "Employee Self-Service Portal is a comprehensive solution designed for employees to manage their own HR-related tasks and information. Our portal provides leave management, payslip access, profile updates, and HR requests, making it perfect for organizations looking to empower their employees with self-service capabilities.",

      features: [

        "Leave request and management",

        "Payslip access and download",

        "Profile and personal information updates",

        "HR request submission",

        "Company directory and contacts",

        "Announcements and notifications",

        "Document access and download",

        "Time tracking and timesheet",

        "Benefits enrollment",

        "Training and development tracking",

        "Mobile app for employees",

        "Multi-language support"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "EmailJS", "PDF Generation"

      ],


      demoUrl: "https://demo.employeeselfservice.com",

      githubUrl: "https://github.com/employeeselfservice",

      liveUrl: "https://employeeselfservice.com"

    },

    'recruitment-management-system': {

      title: "Recruitment Management System",

      category: "Human Resource",

      tags: ["Recruitment", "Hiring", "Job Portal"],

      description: "Complete recruitment management system with job posting, candidate tracking, interview scheduling, and onboarding.",

      status: "Available",


      slug: "recruitment-management-system",

      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop&crop=center",

      overview: "Recruitment Management System is a comprehensive solution designed for HR departments and recruitment agencies to manage the entire hiring process. Our system provides job posting, candidate tracking, interview scheduling, and onboarding, making it perfect for organizations looking to streamline their recruitment process.",

      features: [

        "Job posting and management",

        "Candidate application tracking",

        "Resume parsing and screening",

        "Interview scheduling and management",

        "Candidate communication tools",

        "Reference checking system",

        "Onboarding workflow",

        "Recruitment analytics and reporting",

        "Integration with job boards",

        "Mobile app for recruiters",

        "Collaborative hiring tools",

        "Background check integration"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "EmailJS", "Calendar API"

      ],


      demoUrl: "https://demo.recruitmentmanagement.com",

      githubUrl: "https://github.com/recruitmentmanagement",

      liveUrl: "https://recruitmentmanagement.com"

    },

    'performance-management-system': {

      title: "Performance Management System",

      category: "Human Resource",

      tags: ["Performance Management", "Reviews", "Goal Setting"],

      description: "Performance management system with goal setting, performance reviews, 360-degree feedback, and career development.",

      status: "Available",


      slug: "performance-management-system",

      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=center",

      overview: "Performance Management System is a comprehensive solution designed for organizations to manage employee performance effectively. Our system provides goal setting, performance reviews, 360-degree feedback, and career development, making it perfect for HR departments and managers looking to improve employee performance and development.",

      features: [

        "Goal setting and tracking",

        "Performance review management",

        "360-degree feedback system",

        "Career development planning",

        "Performance rating and scoring",

        "Feedback collection and analysis",

        "Performance improvement plans",

        "Recognition and rewards system",

        "Manager dashboard and tools",

        "Employee self-assessment",

        "Performance analytics and reporting",

        "Integration with HR systems"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "Chart.js", "PDF Generation"

      ],


      demoUrl: "https://demo.performancemanagement.com",

      githubUrl: "https://github.com/performancemanagement",

      liveUrl: "https://performancemanagement.com"

    },

    'attendance-management-system': {

      title: "Attendance Management System",

      category: "Human Resource",

      tags: ["Attendance", "Time Tracking", "Shift Management"],

      description: "Attendance management system with time tracking, shift scheduling, overtime calculation, and biometric integration.",

      status: "Available",


      slug: "attendance-management-system",

      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",

      overview: "Attendance Management System is a comprehensive solution designed for organizations to track and manage employee attendance effectively. Our system provides time tracking, shift scheduling, overtime calculation, and biometric integration, making it perfect for businesses with shift-based work and strict attendance requirements.",

      features: [

        "Time tracking and clock in/out",

        "Shift scheduling and management",

        "Overtime calculation and tracking",

        "Biometric device integration",

        "Leave balance tracking",

        "Attendance reports and analytics",

        "Geolocation-based attendance",

        "Mobile app for employees",

        "Manager approval workflows",

        "Integration with payroll systems",

        "Automated attendance alerts",

        "Multi-location support"

      ],

      technologies: [

        "React", "Node.js", "Express", "PostgreSQL", "Stripe", 

        "AWS", "Docker", "Redis", "Biometric API", "GPS Tracking"

      ],


      demoUrl: "https://demo.attendancemanagement.com",

      githubUrl: "https://github.com/attendancemanagement",

      liveUrl: "https://attendancemanagement.com"

    },

    'learning-management-system-lms': {

      title: "Learning Management System (LMS)",

      category: "Human Resource",

      tags: ["Learning Management", "Training", "Employee Development"],

      description: "Learning management system for employee training, course management, skill development, and certification tracking.",

      status: "Available",


      slug: "learning-management-system-lms",

      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center",

      overview: "Learning Management System (LMS) is a comprehensive solution designed for organizations to manage employee training and development. Our system provides course management, skill development, and certification tracking, making it perfect for HR departments and training organizations looking to enhance employee skills and knowledge.",

      features: [

        "Course creation and management",

        "Employee enrollment and tracking",

        "Skill development pathways",

        "Certification and compliance tracking",

        "Progress monitoring and analytics",

        "Interactive learning content",

        "Assessment and quiz tools",

        "Certificate generation",

        "Learning path customization",

        "Mobile learning support",

        "Integration with HR systems",

        "Reporting and analytics"

      ],

      technologies: [

        "React", "Node.js", "Express", "MongoDB", "Stripe", 

        "AWS", "Docker", "Redis", "Video Streaming", "PDF Generation"

      ],


      demoUrl: "https://demo.lmshr.com",

      githubUrl: "https://github.com/lmshr",

      liveUrl: "https://lmshr.com"

    },

    'juqe-adult-video-platform': {

      title: "Juqe – Adult Video Platform",

      category: "Entertainment",

      tags: ["Entertainment", "Video Platform", "Adult Content", "Streaming", "Video Sharing"],

      description: "This is Flexible, Powerful and Reliable video/photo gallery sharing & hosting platform, you can now easily create Highly Profitable adult tube websites.",

      status: "Available",


      slug: "juqe-adult-video-platform",

      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=600&fit=crop&crop=center",

      overview: "Juqe is a Flexible, Powerful and Reliable video/photo gallery sharing & hosting platform that allows you to easily create Highly Profitable adult tube websites. It features responsive template, video conversion queue, chunked uploads, nested comments, video thumbnails, tags section, and comprehensive admin panel.",

      features: [

        "Flexible, Powerful and Reliable platform",

        "Video/photo gallery sharing & hosting",

        "Create Highly Profitable adult tube websites",

        "Responsive Template - Completely Responsive Template based on Bootstrap 4",

        "Configurable number of thumbnail columns (small / large thumbnails)",

        "Predictive Search",

        "Comprehensive dropdown menu",

        "Redesigned subscription feed page",

        "Video Conversion Queue - optimize server CPU resources",

        "Upload videos placed in conversion queue for transcoding",

        "Chunked Uploads - fast and reliable way to upload large videos",

        "Bypass Cloudflare's 100MB upload limit",

        "Bypass hosting companies' max file size upload limits",

        "Nested Comments - all comments sections have nested comments with replies",

        "Likes and sorting options",

        "Improve social networking side of website",

        "Video Thumbnails - play video preview sequences on mouse hover",

        "Tags Section - helps users find desired content",

        "Search engine optimization of the website",

        "Videos + Photos + Blogs - all in one website",

        "Search Engine Optimized - new Search Engine Friendly URLs",

        "Better indexing and ranking in search engines",

        "Responsive Template - adapts for any screen",

        "Perfect experience on desktops, laptops, tablets and smartphones",

        "Premium Membership System - convert visitors into free members",

        "Convert free members into paying (premium) members",

        "Configure permissions and limits for each user level",

        "HD and Mobile Videos - Video Conversion Engine",

        "Uploaded videos converted to web-ready and mobile-ready formats",

        "Multiple resolutions and qualities",

        "Configurable from Admin Panel",

        "Multi-Language System using language files",

        "Visitors can use website in their choice language",

        "Reflect the global nature of the Internet",

        "Facebook / Google Signup - signup / login directly",

        "Simplify registration / login process",

        "Pull all info automatically",

        "HTML5 Video Player - enjoy video playback on any device",

        "No Adobe Flash support required (tablets, smartphones, etc)",

        "Resolution switch, in-player ads, logo watermark",

        "Timeline preview",

        "Highly Customizable - Smarty Template Engine",

        "Bootstrap CSS for easy customization",

        "Modify template files or integrate with existing design",

        "Unencoded source code access",

        "Fully customize functionality",

        "Add new features or integrate with other scripts",

        "Multi-Server System - Multi-Server Architecture",

        "High Scalability, Reliability and Performance",

        "Store and stream videos from unlimited number of secondary servers",

        "Load balancing website and optimizing traffic",

        "20+ Video Formats supported - wide range of video formats",

        "AVI, WMV, QuickTime, DIVX, MPEG, 3GP, FLV and many more",

        "Monetization Options - several advertising areas",

        "Place banners throughout the site",

        "Text, flash, image and video ads in Player",

        "Real-Time Video Conversion - convert on-the-fly",

        "Web-ready and mobile-ready format in multiple resolutions",

        "Stream videos using HTML5 video player on any device",

        "Videos streamed by web server and browser",

        "No expensive server-streaming software required",

        "Extensive Member Profiles - display personal info",

        "Friends, subscribers, latest videos, photos",

        "Latest blog entries, comments on profile",

        "Favorite videos, playlist, etc",

        "Many ways to interact with member and member profile",

        "Commenting and Rating - using AJAX technology",

        "Instantly rate and comment videos, photos, blogs and profiles",

        "Rotating Thumbnails - short animations with 20 different frames",

        "Grab Videos from 20 Websites - automatically grab videos",

        "Top adult video sites: redtube, pornhub, tube8, youporn, wanktube",

        "snizzshare, nudevibes, boysfood, haporn, and more",

        "Manually by entering video URL",

        "Full Unicode Support - full utf-8 in all areas",

        "Video/audio/image titles, description, tags, comments",

        "Run website in any possible language",

        "Upload Progress Bar - live progress bar with statistics",

        "Percent, File Size, Downloaded KBytes, Elapsed Time",

        "Estimated Time Left, Estimated Speed (KB/sec)",

        "Messaging System - built-in messaging system",

        "Members communicate with each other",

        "Compose messages and send to network of friends",

        "Advanced Meta-Tag Support - each page has own title and meta tags",

        "HTML output uses meta title, meta keywords and meta description",

        "Tags defined from posting video / audio / image",

        "Meta-tag support for user profile pages and Channel home-pages",

        "Background Video Conversion - performed in background server process",

        "Member redirected back to website after upload",

        "Video converted in background and appears when ready",

        "Solves timeout problems while uploading/converting big files",

        "Comprehensive Admin Panel - configure and manage every aspect",

        "RSS Feeds - several RSS feeds for categorized groups",

        "Most recent, top rated, most discussed, etc",

        "File Approval - administrator can choose to Approve Files",

        "Files appear on website after approval",

        "Function can be turned on or off",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "Android Studio", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://juqe.fun",

      githubUrl: "https://github.com/juqe",

      liveUrl: "https://juqe.fun"

    },

    'pixelpear-oot-platform-netflix-clone-live-tv-movies-streaming-platform': {

      title: "PixelPear OOT Platform – Netflix Clone – Live TV & Movies Streaming Platform",

      category: "Entertainment",

      tags: ["Entertainment", "Streaming", "Netflix Clone", "Live TV", "Movies", "OTT Platform"],

      description: "This is a powerful, flexible and User friendly Live TV & Movie Portal and Android application with advance video contents management system. It has been created to provide a unique experience to movie lover & movie site owner.",

      status: "Available",


      slug: "pixelpear-oot-platform-netflix-clone-live-tv-movies-streaming-platform",

      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&h=600&fit=crop&crop=center",

      overview: "PixelPear OTT Platform is a powerful, flexible and User friendly Live TV & Movie Portal and Android application with advance video contents management system. It has been created to provide a unique experience to movie lover & movie site owner. This application was built with advanced modules and many more powerful features for a complete video website management. You will able to maintain all of your changes easily by using this dashboard. It's will give the best experience in entertainment as an author of IPTV or Movie application/site owner. It's a smart application with an easy tools setting. You watch movie and live TV on Android devices without any hassle.",

      features: [

        "Powerful, flexible and User friendly Live TV & Movie Portal",

        "Android application with advance video contents management system",

        "Provide unique experience to movie lover & movie site owner",

        "Built with advanced modules and many more powerful features",

        "Complete video website management",

        "Maintain all changes easily by using dashboard",

        "Best experience in entertainment as author of IPTV or Movie application/site owner",

        "Smart application with easy tools setting",

        "Watch movie and live TV on Android devices without any hassle",

        "Core Features - Live TV, Movie, Series",

        "Share Movie, Series, Live TV",

        "Subscription with Trail Option",

        "Online Payment Gateway",

        "Custom Price Plan & Validity",

        "Free & Paid Content Features",

        "Billing Functionality",

        "Advertisement system",

        "Easy Documentation & Video",

        "Mp4, WebM, MKV, HLS, RTMP & Subtitle support",

        "Powerful OpenSource Video Player",

        "Video.js that is open source HTML5 & Flash video player",

        "YouTube and Vimeo support",

        "Skin with Tube Style",

        "Retina Ready & Fully Responsive",

        "HTML5 & CSS3",

        "Live TV streaming",

        "Light dark version UI",

        "Subtitle Support",

        "Instant search with auto-complete",

        "Tube skin for movie/tv player",

        "Movie scrapper - Simple type movie name to get all information from online",

        "Auto Import movie from TMDb easily",

        "Upload Video from your device to local server and share it",

        "VideoJS is world #1 video player",

        "Can protect you website/content security",

        "Fetch Stars - Easily fetch actor/director/writer image and info from tmdb",

        "Seasons & Episodes - Create unlimited Seasons & Episodes for TV-series",

        "Blog - Publish News & post by Build-in Blog System",

        "Create & Manage custom page",

        "Ad management system",

        "Multiple Video Source for single movie/episodes",

        "Build-in newsletter HTML Newsletter for user/admin",

        "Admin control panel - Powerful Admin control panel is made easier to manage website",

        "Player watermark",

        "Player share",

        "Player volume remember",

        "Player seek button",

        "Player playback rate",

        "Amazing UI",

        "Lazy image loading",

        "HLS/m3u8 support",

        "MP4 from URL support",

        "WebM from URL support",

        "M3U8 from URL support",

        "Movie/tv-series search on admin dashboard",

        "All embed video supported",

        "HTML5 Video player",

        "Star Rating",

        "Social like, share (AddThis) Integrated",

        "Popular & Most View",

        "Unlimited Movies & Category",

        "Unlimited Blog Post & Category",

        "Informative Dashboard",

        "User Login, Registration",

        "Genre wish movie Management",

        "Country wish movie Management",

        "Fully Ajax Based User Login System",

        "Fully Ajax Based contact System",

        "Ajax base subscription",

        "Movie Request features",

        "Multi User-Based System",

        "Smart User Management System for Admin",

        "Super Smart Theme Management System",

        "Unlimited Theme Color for Dashboard",

        "Smart User Profile",

        "Easy User Profile Management",

        "Informative Administrator Dashboard",

        "Support keyboard shortcuts",

        "Single click get movie information",

        "Ajax Login",

        "SweetAlert Notification",

        "Instant Search Result",

        "Easy Data Sorting System",

        "Eye Catching Design",

        "Responsive Layout",

        "Cloud Based Application",

        "Web application",

        "Android application",

        "iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "CodeIgniter", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://pixelpear.online",

      githubUrl: "https://github.com/pixelpear",

      liveUrl: "https://pixelpear.online"

    },

    'properloan-nbfc-finance-mortgage-startup-sourcing-loans-credit-cards': {

      title: "ProperLoan- NBFC Finance Mortgage Startup sourcing Loans/Credit Cards",

      category: "Finance",

      tags: ["Finance", "NBFC", "Loans", "Credit Cards", "Mortgage", "Financial Services"],

      description: "The world's first neutral online marketplace for instant customized rate quotes on loans and credit cards. Shop for loans & cards just like you buy everything else now – online.",

      status: "Available",


      slug: "properloan-nbfc-finance-mortgage-startup-sourcing-loans-credit-cards",

      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&crop=center",

      overview: "ProperLoan is the world's first neutral online marketplace for instant customized rate quotes on loans and credit cards. Shop for loans & cards just like you buy everything else now – online. Provides the following services directly and from other banks: Home Loan, Personal Loan, Car Loan, Used Car Loan, Credit Card. The platform generates leads for loans, provides DSA income by referring customers to banks, and allows lending money directly to customers on high-interest rates.",

      features: [

        "World's first neutral online marketplace",

        "Instant customized rate quotes on loans and credit cards",

        "Shop for loans & cards just like you buy everything else now – online",

        "Home Loan services",

        "Personal Loan services",

        "Car Loan services",

        "Used Car Loan services",

        "Credit Card services",

        "Generate leads for Loans on the website",

        "Get DSA income by referring customers to bank",

        "Lend money directly to the customers on high-interest rate",

        "Friendly User Interface",

        "Manage Borrowers Personal/Financial information",

        "Add/Remove or search borrower fast",

        "Can upload Borrower's photo",

        "Can import/upload Borrower(s) from CSV/Excel",

        "Manage different kinds of Loans",

        "Can set terms, interest rate, schedule of payments etc.",

        "Loan servicing - Add new loan application",

        "Search loans fast",

        "Automatically determines matured and overdue Debts",

        "Print Payment Schedule in PDF format",

        "Print Disclosure in PDF format",

        "Support Multiple loans for one borrower",

        "Manage and Receive Payments",

        "Simple and easy to add new payments",

        "Can check borrower's debt balance instantly",

        "Manage Employees access level and information",

        "Add/remove employee",

        "Can upload employee photo",

        "Easy to manage using Webview Android app",

        "Multi currency support",

        "Email Templating",

        "Email Messaging support",

        "Support different timezone",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "MySQL", "WordPress", "CodeIgniter", "Native Java", "Android",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://properloan.enroles.com",

      githubUrl: "https://github.com/properloan",

      liveUrl: "https://properloan.enroles.com"

    },

    'bankovia-online-banking-with-dps-loan': {

      title: "Bankovia – Online Banking With DPS & Loan",

      category: "Finance",

      tags: ["Finance", "Online Banking", "DPS", "Loan Management", "Banking System", "Investment"],

      description: "This is a Complete Banking system comes with Investment DPS & Loan Management system. Its Built to be beautiful, fast and powerful. It comes with minimum banking features like account account statements, branchs, DPS, Loan, Complete User Management system, Credit/Debit Facility and more.",

      status: "Available",


      slug: "bankovia-online-banking-with-dps-loan",

      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",

      overview: "Bankovia is a Complete Banking system that comes with Investment DPS & Loan Management system. It's built to be beautiful, fast and powerful. It comes with minimum banking features like account statements, branches, DPS, Loan, Complete User Management system, Credit/Debit Facility and more. The system includes comprehensive user features for banking operations and advanced admin features for complete management.",

      features: [

        "Complete Banking system with Investment DPS & Loan Management",

        "Built to be beautiful, fast and powerful",

        "Minimum banking features like account statements",

        "Branches, DPS, Loan management",

        "Complete User Management system",

        "Credit/Debit Facility and more",

        "6 Cross Browser Optimized Design",

        "Latest News, FAQ, Contact",

        "Easy Signup / Signin",

        "Secure User Dashboard",

        "Own bank Transfer",

        "Others bank transfer",

        "E-currency Methods",

        "Fixed Deposit Package (DPS)",

        "Fixed Deposit History",

        "Loan Package",

        "Loan History",

        "E-Deposit Facility",

        "Complete Account Statement",

        "Automated Deposit Method",

        "Account Setting",

        "Multiple Branches",

        "Secure Admin Dashboard",

        "Branch Management",

        "Other banks Management",

        "Loan Management System",

        "Loan Package",

        "Loan Request Management",

        "Investment / DPS Package",

        "Investment History",

        "Min/Max DPS Feature",

        "User Balance Debit Facility",

        "User Balance Credit Facility",

        "Website Settings",

        "General Settings",

        "Charge Settings",

        "Email Settings",

        "SMS Settings",

        "Facebook API Management",

        "Deposit Management",

        "Latest News Management",

        "Transaction Management",

        "Withdraw Management",

        "User Management",

        "Interface Control",

        "Newsletter Management",

        "Advertisement Management",

        "Language Management",

        "Secure Database that uses prepared statements so no SQL Injection",

        "Protects against CSRF attacks",

        "HTML Filter to protect against XSS attacks",

        "Built using the latest Strong LARAVEL Framework",

        "Passwords are encrypted By bcrypt encryption",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Android Studio", "Java",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://bankovia.online",

      githubUrl: "https://github.com/bankovia",

      liveUrl: "https://bankovia.online"

    },

    'payoutcard-complete-virtual-credit-card-solution': {

      title: "PayoutCard – Complete Virtual Credit Card Solution",

      category: "Finance",

      tags: ["Finance", "Virtual Credit Card", "Payment Solution", "Fintech", "Secure Transactions", "Online Payments"],

      description: "Trusted virtual credit card solution for secure online transactions, endorsed by major platforms like AliExpress, Netflix, Facebook-Google Advertising, Amazon, and more. In today's digital age, It simplifies online payments with one-time-use virtual cards, prioritizing your security and data protection.",

      status: "Available",


      slug: "payoutcard-complete-virtual-credit-card-solution",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "PayoutCard is a trusted virtual credit card solution for secure online transactions, endorsed by major platforms like AliExpress, Netflix, Facebook-Google Advertising, Amazon, and more. In today's digital age, it simplifies online payments with one-time-use virtual cards, prioritizing your security and data protection. Our user-friendly platform is accessible anytime, anywhere, making it perfect for both entrepreneurs and users. StripCard has maximum security measures, which is a very important feature for protecting users' information. Due to this security system, users can easily input their information without any hesitation.",

      features: [

        "Trusted virtual credit card solution for secure online transactions",

        "Endorsed by major platforms like AliExpress, Netflix, Facebook-Google Advertising, Amazon, and more",

        "Simplifies online payments with one-time-use virtual cards",

        "Prioritizing your security and data protection",

        "User-friendly platform accessible anytime, anywhere",

        "Perfect for both entrepreneurs and users",

        "StripCard has maximum security measures",

        "Very important feature for protecting users' information",

        "Users can easily input their information without any hesitation",

        "Buy Virtual Credit Cards",

        "Add Money",

        "Money Transfer",

        "Strong Auth Section",

        "Realtime Statement",

        "Multiple Payment Gateway",

        "Fast and Secure Transactions",

        "Automatic and Manual Payment Gateway",

        "Paypal Payment Gateway",

        "Stripe Payment Gateway",

        "User Profile",

        "Push Notification",

        "Support Ticket (for web)",

        "Live Chat using twak.to",

        "Admin Role Management",

        "Flutter",

        "Laravel",

        "PHP",

        "JavaScript",

        "Dart",

        "Java/Kotlin",

        "Objective-C/Swift",

        "Web application",

        "Webview Android application",

        "Webview iOS application",

        "Google Play Marketing (100 Reviews + Downloads)",

        "Rebranding",

        "Setup Web and Mobile Apps",

        "Publishing Apps on Google Play",

        "Complete Source Code",

        "1 Year Support"

      ],

      technologies: [

        "PHP", "Laravel", "MySQL", "Flutter", "Android", "iOS",

        "Cloud Linux", "Unlimited Hosting Space", "SEO Optimized"

      ],


      demoUrl: "https://payoutcard.online",

      githubUrl: "https://github.com/payoutcard",

      liveUrl: "https://payoutcard.online"

    },

    'vyapaar-complete-saas-business-stock-management-pos-invoicing': {

      title: "Vyapaar – Complete SAAS Business for Stock Management, POS & Invoicing",

      category: "ERP & CRM",

      tags: ["ERP & CRM", "SAAS", "Stock Management", "POS System", "B2B"],

      description: "This is a SAAS based Startup provides a CRM with some amazing features suitable for all businesses. With this application, you are assured to save time-consuming process of bookkeeping accounting and inventory information.",

      status: "Available",


      slug: "vyapaar-complete-saas-business-stock-management-pos-invoicing",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "Vyapaar is a comprehensive SAAS business solution for stock management, POS, and invoicing. This powerful CRM system provides amazing features suitable for all businesses, helping you save time on bookkeeping, accounting, and inventory management while providing detailed business analysis.",

      features: [

        "Multiple Business/Shops Management",

        "Location/Storefront/Warehouse Management",

        "Customize invoice layout and scheme",

        "User & Role Management System",

        "Predefined roles - Admin & Cashier",

        "Create unlimited users with different roles",

        "Contacts (Customer & Suppliers) Management",

        "Mark contact as customer or supplier or both",

        "View transaction details with contacts",

        "Credit/Debit balance tracking",

        "Payment terms and due date alerts",

        "Product Management - Single & Variable products",

        "Brand, Category, Sub-Category classification",

        "SKU number management with auto-generation",

        "Stock alerts on low stock",

        "Auto-calculate selling price based on purchase price and profit margin",

        "Variation templates for variable products",

        "Purchase Management",

        "Add purchases for different locations",

        "Manage Paid/Due purchases",

        "Due purchase notifications",

        "Discounts & Taxes management",

        "Simplified selling interface",

        "Walk-In-Customer automatically added",

        "Add new customer from POS screen",

        "Ajax based selling screen",

        "Draft or final invoice options",

        "Multiple payment options",

        "Expense Management",

        "Add business expenses",

        "Categorize expenses",

        "Expense analysis by category and location",

        "Comprehensive Reports",

        "Purchase & Sale reports",

        "Tax Reports",

        "Contact Reports",

        "Stock Reports",

        "Expense Reports",

        "Trending Products analysis",

        "Cash Register Report",

        "Sales Representative report",

        "HRM Features",

        "Leave management system",

        "Leave types and maximum counts",

        "Leave status tracking",

        "Attendance management",

        "Clock-In/Clock-Out functionality",

        "Payroll based on attendance",

        "Allowances and deductions",

        "Holiday management",

        "ToDo List functionality",

        "Document Storage & Sharing",

        "Cloud document storage",

        "Share documents with users",

        "Download and delete documents",

        "Memo system",

        "Reminder system with calendar view",

        "Messaging system",

        "SAAS Features",

        "Unlimited subscription packages",

        "Trial days and free packages",

        "Daily/Monthly/Yearly intervals",

        "Location and user limits",

        "Business management",

        "Payment gateways integration",

        "WooCommerce synchronization",

        "API settings and configuration",

        "Multi-language support",

        "Currency and timezone settings",

        "Barcode sticker settings",

        "Stock adjustment",

        "Express checkout",

        "Repair module",

        "Manufacturing module",

        "Recipe management",

        "Production tracking",

        "Cost calculations",

        "Wastage calculations",

        "Lot number management",

        "Expiration date tracking"

      ],

      technologies: [

        "PHP", "MySQL", "Laravel", "JavaScript", "Bootstrap",

        "Stripe", "PayPal", "Razorpay", "WooCommerce API", "Cloud Hosting"

      ],


      demoUrl: "https://vyapaar.online",

      githubUrl: "https://github.com/vyapaar",

      liveUrl: "https://vyapaar.online"

    },

    'zyial-salon-booking-management-system': {

      title: "Zyial- Salon Booking Management System",

      category: "ERP & CRM",

      tags: ["ERP & CRM", "Salon Management", "Booking System", "Appointment Management"],

      description: "Salon Booking Management System can book their appointments easily. You can book Appointments with your favorite Agent. Cash By hand, Stripe and PayPal Payment Method Added.",

      status: "Available",


      slug: "zyial-salon-booking-management-system",

      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=600&fit=crop&crop=center",

      overview: "Zyial is a comprehensive salon booking management system that allows customers to book appointments easily with their favorite agents. The system supports multiple payment methods including cash, Stripe, and PayPal, with a powerful admin panel for complete salon management.",

      features: [

        "Twilio Messaging System",

        "User blocking from admin panel",

        "Agent selection with booking",

        "PayPal and Stripe payment integration",

        "Weekend selection from admin",

        "Client account management",

        "Social login with Google & Facebook",

        "Booking management system",

        "Gallery image management",

        "Top, Bottom & Pop ads support",

        "Google reCAPTCHA integration",

        "Blog support system",

        "SMTP email support",

        "Built-in contact form",

        "Powerful admin panel",

        "100% responsive design",

        "AJAX based functionality",

        "SEO ready",

        "100% penetration tested security",

        "Appointment scheduling",

        "Agent management",

        "Payment processing",

        "Client management",

        "Service management",

        "Booking history",

        "Invoice generation",

        "Print invoice functionality",

        "Website customization",

        "Blog post management",

        "Comment system integration",

        "Social media integration",

        "Analytics integration",

        "Meta tags management",

        "Email settings",

        "Banner ads management",

        "Gallery management",

        "Service management",

        "Booking management",

        "User authentication",

        "Role-based access control",

        "Multi-language support",

        "Mobile responsive design"

      ],

      technologies: [

        "PHP", "MySQL", "Bootstrap 4", "jQuery", "JavaScript",

        "Stripe", "PayPal", "Twilio", "Google API", "Facebook API"

      ],


      demoUrl: "https://zyial.com",

      githubUrl: "https://github.com/zyial",

      liveUrl: "https://zyial.com"

    },

    'heytext-bulk-sms-application-marketing': {

      title: "HeyText – Bulk SMS Application For Marketing",

      category: "ERP & CRM",

      tags: ["ERP & CRM", "Digital Marketing", "Bulk SMS", "Marketing Automation"],

      description: "This is a powerful, flexible, and User-friendly Bulk SMS Marketing Application. It's also an all-in-one solution for your SMS marketing. It's easy to use.",

      status: "Available",


      slug: "heytext-bulk-sms-application-marketing",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "HeyText is a powerful and flexible bulk SMS marketing application designed for businesses of all sizes. With integration to 50+ SMS gateways and comprehensive marketing features, it provides an all-in-one solution for SMS marketing campaigns.",

      features: [

        "Client Management System",

        "Campaign Builder",

        "Contact Groups management",

        "CSV file upload support",

        "Scheduled SMS functionality",

        "Recurring SMS campaigns",

        "Two-way SMS communication",

        "Clean SMS reports",

        "Custom SMS templates",

        "Contacts Groups/Contact List",

        "Opt-in and opt-out keywords",

        "Sender ID management",

        "Dynamic SMS sender ID",

        "Anti-Fraud message system",

        "50+ SMS Gateway integrations",

        "Build Your Own API",

        "Price Plan management",

        "Unlimited role management",

        "Multi-language support",

        "Popular payment gateways",

        "PayPal and Stripe integration",

        "Manual payment gateway",

        "Easy customization",

        "Twilio integration",

        "Clickatel integration",

        "Route Mobile integration",

        "Plivo integration",

        "Vonage (Nexmo) integration",

        "Infobip integration",

        "MessageBird integration",

        "Amazon SNS integration",

        "WhatsApp Chat API",

        "SignalWire integration",

        "Telnyx integration",

        "Bandwidth integration",

        "Text Local integration",

        "SMS Global integration",

        "Routee.net integration",

        "Hutch.lk integration",

        "Teletopia SMS integration",

        "Broadcaster Mobile integration",

        "Solutions4Mobiles integration",

        "Beem Africa integration",

        "Bulk SMS Online integration",

        "Flowroute integration",

        "Elitbuzz BD integration",

        "Greenweb BD integration",

        "Hablame integration",

        "Zamtel integration",

        "Cellcast integration",

        "Africa's Talking integration",

        "Caihcom integration",

        "KeccelSMS integration",

        "Johnson Connect integration",

        "SMSala integration",

        "Speedamobile integration",

        "Text2World integration",

        "EnableX integration",

        "SpoofSend integration",

        "Haj SMS integration",

        "Sendroid Ultimate integration",

        "RealSMS integration",

        "Callr integration",

        "Skyetel integration",

        "SMS LRT integration",

        "Bulk SMS Plans integration",

        "Sinch integration",

        "D7Networks integration",

        "CMCOM integration",

        "PitchWink integration",

        "Wavy Global integration",

        "Solucoes Digitais integration",

        "SMS Marketing AE integration",

        "Zipcom integration",

        "GlobalSMSCN integration",

        "Web2SMS integration",

        "BongaTech integration",

        "FloatSMS integration",

        "YooAPI integration",

        "MaisSMS integration",

        "EasySMS integration",

        "Sozuri integration",

        "Expert Texting integration",

        "Ejoin integration",

        "Bulk SMS Nigeria integration",

        "SendSMS Gate integration",

        "Gateway360 integration",

        "Ajura Tech integration",

        "SMS Cloud integration",

        "Lifetime SMS integration"

      ],

      technologies: [

        "PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery",

        "Twilio", "Plivo", "Vonage", "Infobip", "MessageBird", "Amazon SNS", "WhatsApp API", "SignalWire", "Telnyx", "Bandwidth"

      ],


      demoUrl: "https://heytext.com",

      githubUrl: "https://github.com/heytext",

      liveUrl: "https://heytext.com"

    },

    'delivery-dart-bulk-email-sms-marketing-software': {

      title: "Delivery Dart – Bulk Email And SMS Marketing Software",

      category: "ERP & CRM",

      tags: ["ERP & CRM", "Email Marketing", "SMS Marketing", "Bulk Marketing"],

      description: "Complete bulk email and SMS marketing software with client management, campaign builder, and comprehensive reporting features.",

      status: "Available",


      slug: "delivery-dart-bulk-email-sms-marketing-software",

      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",

      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",

      overview: "Delivery Dart is a comprehensive bulk email and SMS marketing software that provides complete client management, campaign building, and detailed reporting features. It's designed for businesses looking to streamline their marketing efforts with powerful automation tools.",

      features: [

        "Client Management System",

        "Add new clients",

        "Client management interface",

        "Set SMS or Email quota for specific clients",

        "Clients Group management",

        "All groups overview",

        "Add new groups",

        "Invoice management",

        "All invoices tracking",

        "Create new invoices",

        "Bulk Email functionality",

        "Send bulk emails",

        "Send email from file",

        "Email history tracking",

        "Email providers integration",

        "Bulk SMS functionality",

        "Send bulk SMS",

        "Send SMS from file",

        "Send scheduled SMS",

        "Send scheduled SMS from file",

        "SMS history tracking",

        "11+ SMS Gateways integration",

        "Set different prices for different SMS gateways",

        "SMS Price Plan management",

        "Create SMS price plans",

        "Add SMS price plan features",

        "Support Tickets Management System",

        "Create new tickets",

        "Create support departments",

        "Support ticket management",

        "Support department management",

        "Message replay between administrator and clients",

        "Upload and download related support ticket files",

        "Change support department",

        "Change ticket status",

        "Settings management",

        "Add new administrators",

        "Administrator management",

        "Administrator role management",

        "4 Payment Gateways integration",

        "Email templates management",

        "Customize company information",

        "Translate application to any language",

        "Language handler functionality",

        "Disable SMS or Email options for specific clients",

        "Disable SMS or Email options for full systems",

        "Email notifications",

        "Different panel for clients",

        "Send email or SMS from client panel",

        "Request for Email or SMS quota using payment gateways",

        "Responsive design",

        "Advanced reporting",

        "Campaign analytics",

        "Delivery tracking",

        "Open rate tracking",

        "Click rate tracking",

        "Bounce rate tracking",

        "Unsubscribe management",

        "List segmentation",

        "Automated campaigns",

        "A/B testing",

        "Template builder",

        "Drag and drop editor",

        "Mobile optimization",

        "API integration",

        "Webhook support",

        "White-label solution",

        "Multi-tenant architecture",

        "Scalable infrastructure",

        "Real-time analytics",

        "Custom fields",

        "Import/Export functionality",

        "Scheduled campaigns",

        "Recurring campaigns",

        "Trigger-based campaigns",

        "Advanced segmentation",

        "Personalization features",

        "Dynamic content",

        "Landing page builder",

        "Form builder",

        "Lead scoring",

        "CRM integration",

        "Third-party integrations",

        "Advanced security",

        "GDPR compliance",

        "Data encryption",

        "Backup and recovery",

        "Performance monitoring",

        "Uptime monitoring",

        "Customer support",

        "Documentation",

        "Training materials",

        "Video tutorials",

        "Community forum",

        "Regular updates",

        "Bug fixes",

        "Feature requests",

        "Custom development",

        "Migration support",

        "Onboarding assistance"

      ],

      technologies: [

        "PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery",

        "Stripe", "PayPal", "Razorpay", "SMS Gateways", "Email Providers", "API Integration"

      ],


      demoUrl: "https://deliverydart.com",

      githubUrl: "https://github.com/deliverydart",

      liveUrl: "https://deliverydart.com"

    },

    'jiffymeet-video-conference-app-and-website-for-live-class-meeting-webinar-online-training': {
      title: "JiffyMeet – Video Conference App and Website for Live Class, Meeting, Webinar, Online Training",
      category: "Tools and Utilities",
      tags: ["Video Conference", "Webinar", "Live Class", "Meeting"],
      description: "Complete video meeting system with powerful admin panel for manage meeting, history, notification, analytics, app configuration and many more.",
      status: "Available",
      slug: "jiffymeet-video-conference-app-and-website-for-live-class-meeting-webinar-online-training",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&h=600&fit=crop&crop=center",
      overview: "JiffyMeet is a complete video meeting system with powerful admin panel for managing meetings, history, notifications, analytics, app configuration and many more. Mobile apps are built with Flutter and compatible with both Android and iOS systems.",
      features: [
        "Free video and audio conference call",
        "Social login (Facebook, Google, Phone)",
        "Create Meeting and share code to join others",
        "Join Meeting without login",
        "Live Streaming to YouTube",
        "Lock-protected rooms with password control",
        "Schedule Meeting with calendar integration",
        "Meeting History and rejoin functionality",
        "Chat during meetings",
        "High quality audio and video with Opus and VP8",
        "Record Meetings",
        "Secure and encrypted calls",
        "Unlimited participants",
        "Push Notifications",
        "Brand New UI",
        "Meeting App for Android and iOS",
        "Host & Join Meeting From Web",
        "Highly Configurable",
        "Mandatory Login Enable/Disable",
        "Unauthorized Meeting ID Protection",
        "Flutter Based Mobile Platform",
        "World Best SDK Used (Jitsi)",
        "Rest API Based Application",
        "Full GDPR Complaint",
        "OneSignal Notification",
        "Easy Monetize Your App by AdMob",
        "Powerful Admin Panel (PHP+ CodeIgniter)"
      ],
      technologies: [
        "Flutter",
        "Dart",
        "PHP",
        "CodeIgniter",
        "Jitsi SDK",
        "OneSignal",
        "AdMob",
        "MySQL",
        "REST API",
        "WebRTC"
      ],
      demoUrl: "https://jiffymeet.com",
      githubUrl: "https://github.com/jiffymeet",
      liveUrl: "https://jiffymeet.com"
    },

    'propertyplus-society-property-tenant-and-maintenance-management-system': {
      title: "PropertyPlus – Society, Property, Tenant and Maintenance Management System",
      category: "Tools and Utilities",
      tags: ["Property Management", "Society Management", "Tenant Management", "Maintenance"],
      description: "Complete Property management software streamlines the day-to-day operations of property owners and managers with features like online rent payments, maintenance requests, and lease tracking.",
      status: "Available",
      slug: "propertyplus-society-property-tenant-and-maintenance-management-system",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop&crop=center",
      overview: "PropertyPlus is a complete property management software that streamlines the day-to-day operations of property owners and managers. The website has three different panels – Owner, Maintainer, and Tenant.",
      features: [
        "Built with Laravel & Bootstrap",
        "Multiple Property manage",
        "Multiple Tenant manage",
        "Multiple Maintainer manage",
        "Billing & Invoice",
        "Expense manage",
        "All Document manage",
        "All Information manage",
        "Support Ticket System",
        "All popular payment gateway",
        "Multi Language",
        "Change theme color option",
        "Change password",
        "8 Popular Payment Methods",
        "XSS: Protection from cross-site scripting",
        "Secure Bcrypt password hashing",
        "SMTP Support",
        "Easy translation",
        "Maintenance Mode",
        "Advanced Report",
        "Mobile Responsive",
        "RTL Support",
        "Cookies Settings"
      ],
      technologies: [
        "Laravel",
        "Bootstrap",
        "PHP",
        "MySQL",
        "JavaScript",
        "CSS3",
        "HTML5",
        "jQuery",
        "Ajax",
        "REST API"
      ],
      demoUrl: "https://propertyplus.com",
      githubUrl: "https://github.com/propertyplus",
      liveUrl: "https://propertyplus.com"
    },

    'smartcitizens-property-management-system-with-tenant-maintenance': {
      title: "SmartCitizens – Property Management System with Tenant & Maintenance",
      category: "Tools and Utilities",
      tags: ["Property Management", "Tenant Management", "Maintenance", "Real Estate"],
      description: "Property management refers to the administration, operation, and oversight of real estate properties on behalf of property owners with various tasks such as marketing rental properties, finding tenants, collecting rent and ensuring legal compliance.",
      status: "Available",
      slug: "smartcitizens-property-management-system-with-tenant-maintenance",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop&crop=center",
      overview: "SmartCitizens is a comprehensive property management system that handles the administration, operation, and oversight of real estate properties. Property managers maintain accurate financial records, including income and expense tracking, budgeting, and providing owners with regular financial reports.",
      features: [
        "Informative Dashboard",
        "User Management",
        "User Roles and Permissions",
        "Property Management",
        "Tenant Management",
        "Property Unit Management",
        "Maintainer Management",
        "Maintenance Request Management",
        "Support System",
        "Contact Management",
        "Income / Expense Management",
        "Company Settings",
        "Account Settings",
        "Application Settings",
        "Email Settings",
        "Multi Languages",
        "Payment Settings",
        "Manage Transaction",
        "Subscription Packages Management",
        "Subscription Coupon & Coupon History Management",
        "Landing Page Enable/Disable Option",
        "Register Page Enable/Disable Option",
        "Multi Theme Colors",
        "RTL/LTR Theme",
        "Site SEO Setting",
        "Google Recaptcha Setting"
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "REST API",
        "Ajax"
      ],
      demoUrl: "https://smartcitizens.com",
      githubUrl: "https://github.com/smartcitizens",
      liveUrl: "https://smartcitizens.com"
    },

    'writetalent-saas-openai-content-text-image-voice-chat-code-transcript-and-video-generator': {
      title: "WriteTalent – SAAS OpenAI Content, Text, Image, Voice, Chat, Code, Transcript, and Video Generator",
      category: "Tools and Utilities",
      tags: ["AI Content", "OpenAI", "SaaS", "Text Generator", "Image Generator"],
      description: "A powerful SaaS platform that allows create your AI SaaS Business in just minutes. Your subscribers will be able to use sophisticated OpenAI Artificial Intelligence technology to generate various Text Contents, Blog Posts, Long Articles, Ads, Media Content and so much more.",
      status: "Available",
      slug: "writetalent-saas-openai-content-text-image-voice-chat-code-transcript-and-video-generator",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop&crop=center",
      overview: "WriteTalent is a powerful SaaS platform that allows you to create your AI SaaS Business in just minutes. Your subscribers will be able to use sophisticated OpenAI Artificial Intelligence technology to generate various Text Contents, Blog Posts, Long Articles, Ads, Media Content and so much more in more than 53 languages using latest GPT-3.5-Turbo, GPT-4 models.",
      features: [
        "AI Content Generation",
        "Text Generation",
        "Image Generation",
        "Voice Generation",
        "Chat Functionality",
        "Code Generation",
        "Transcript Generation",
        "Video Generation",
        "Multi-language Support (53+ languages)",
        "GPT-3.5-Turbo Integration",
        "GPT-4 Integration",
        "DALL-E-2 Integration",
        "DALL-E-3 Integration",
        "Stable Diffusion Integration",
        "Advanced Dashboard",
        "User Management",
        "Subscription Plans",
        "Payment Gateway Integration",
        "Affiliate System",
        "Analytics and Reporting",
        "API Access",
        "Custom Templates",
        "Brand Voice Training",
        "Team Collaboration",
        "Cloud Storage Integration",
        "Security Features",
        "Mobile Responsive Design"
      ],
      technologies: [
        "OpenAI API",
        "GPT-3.5-Turbo",
        "GPT-4",
        "DALL-E-2",
        "DALL-E-3",
        "Stable Diffusion",
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "React",
        "Node.js",
        "AWS",
        "Stripe",
        "PayPal",
        "REST API"
      ],
      demoUrl: "https://writetalent.com",
      githubUrl: "https://github.com/writetalent",
      liveUrl: "https://writetalent.com"
    },

    'records-book-saas-digital-record-management-system': {
      title: "Records Book – SAAS Digital Record Management System",
      category: "Tools and Utilities",
      tags: ["Record Management", "Document Management", "SaaS", "Digital Records"],
      description: "Document and Records Management System software refers to the various features and functionalities that the software offers to help organizations manage their digital documents effectively.",
      status: "Available",
      slug: "records-book-saas-digital-record-management-system",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center",
      overview: "Records Book is a comprehensive Document and Records Management System software that offers various features and functionalities to help organizations manage their digital documents effectively. It provides a complete solution for document storage, organization, and retrieval.",
      features: [
        "Informative Dashboard",
        "User Management",
        "User Roles and Permissions",
        "Document Management",
        "Reminder Management",
        "Document Reminder Management",
        "Document Comment Management",
        "Share Document",
        "Support System",
        "Contact Management",
        "Category / Sub Category Management",
        "Company Settings",
        "Account Settings",
        "Application Settings",
        "Email Settings",
        "Multi Languages",
        "Payment Settings",
        "Manage Transaction",
        "Subscription Coupon & Coupon History Management",
        "Landing Page Enable/Disable Option",
        "Register Page Enable/Disable Option",
        "Multi Theme Colors",
        "RTL/LTR Theme",
        "Site SEO Setting",
        "Google Recaptcha Setting"
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "REST API",
        "Ajax",
        "File Storage",
        "Search Engine"
      ],
      demoUrl: "https://recordsbook.com",
      githubUrl: "https://github.com/recordsbook",
      liveUrl: "https://recordsbook.com"
    }

  };



  const project = projects[projectSlug];

  if (!project) {
    navigate('/artificial-intelligence');
    return null;
  }



  return (

    <div className="min-h-screen text-white selection:bg-teal-500/20">

        

        {/* Hero Section - UFG LAB Style */}

        <section className="relative py-20 px-6">

          <div className="max-w-6xl mx-auto">

            {/* Breadcrumb */}

            <div className="mb-8">

              <nav className="flex items-center space-x-2 text-sm text-gray-400">

                <a href="/" className="hover:text-teal-400 transition-colors">Home</a>

                <span>/</span>

                <a href={`/${project.category.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`} className="hover:text-teal-400 transition-colors">{project.category}</a>

                <span>/</span>

                <span className="text-white">{project.title}</span>

              </nav>

            </div>



            {/* Project Header */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

              <div>

                <div className="mb-6">

                  <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 text-sm font-medium rounded-full border border-teal-500/30">

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

                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>

                    <span className="text-teal-400 font-medium">{project.status}</span>

                  </div>

                  <div className="text-teal-400 font-bold">{project.price}</div>

                </div>



                {/* Action Buttons */}

                <div className="flex flex-col sm:flex-row gap-4">

                  <a 

                    href={project.demoUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors duration-300 text-center"

                  >

                    View Demo

                  </a>

                  <a 

                    href={project.liveUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="px-6 py-3 border border-teal-500 text-teal-400 font-semibold rounded-lg hover:bg-teal-500/10 transition-colors duration-300 text-center"

                  >

                    Live Website

                  </a>

                </div>

              </div>

              

              <div className="relative">

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

            <div className="text-center mb-12">

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

            <div className="text-center mb-12">

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">

                Key Features

              </h2>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {project.features.map((feature, index) => (

                <div 

                  key={index}

                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300"

                >

                  <div className="flex items-start gap-4">

                    <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">

                      <div className="w-4 h-4 bg-teal-500 rounded-full"></div>

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

            <div className="text-center mb-12">

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">

                Technologies Used

              </h2>

            </div>



            <div className="flex flex-wrap justify-center gap-3">

              {project.technologies.map((tech, index) => (

                <div 

                  key={index}

                  className="px-4 py-2 bg-gray-800/50 text-white font-medium rounded-lg border border-gray-700/50 hover:border-teal-500/50 transition-colors duration-300"

                >

                  {tech}

                </div>

              ))}

            </div>

          </div>

        </section>



        {/* CTA Section */}

        <section className="py-16 px-6">

          <div className="max-w-4xl mx-auto text-center">

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

                className="px-8 py-4 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors duration-300"

              >

                Try Demo

              </a>

              <a 

                href={project.githubUrl}

                target="_blank"

                rel="noopener noreferrer"

                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-teal-500 hover:text-teal-400 transition-colors duration-300"

              >

                View Source

              </a>

            </div>

          </div>

        </section>



        {/* Talk Banner */}

        <TalkBanner />

    </div>

  );

};



export default ProjectDetail;

