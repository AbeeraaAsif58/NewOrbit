// Script to update all remaining industry pages with UFG Lab's content structure
// This script provides the content patterns to apply to each industry page

const UFG_LAB_CONTENT = {
  // Hero section patterns
  hero: {
    tag: "Custom Solutions • Innovation • Technology",
    title: "Transform Your Business with <span className=\"text-cyan-200\">Cutting-Edge Solutions</span>",
    description: "We develop bespoke solutions focused on your target audience's needs. Own your technology and add new features as necessary with our innovative approach.",
    placeholder: "Search: custom solutions, innovation, technology…"
  },

  // KPI metrics patterns
  kpis: [
    { k: "200+", l: "Solutions Delivered" },
    { k: "99%", l: "Client Satisfaction" },
    { k: "3x", l: "Performance Boost" },
    { k: "24/7", l: "Technical Support" }
  ],

  // Trust marquee logos
  logos: ["Custom Development", "Innovation", "Technology", "Integration", "Data Management", "Process Automation"],

  // Services patterns
  services: [
    {
      tag: "Featured",
      title: "Custom Application Development",
      desc: "Develop bespoke solutions tailored to your target audience's needs. Own the code and add new features as necessary.",
      tech: ["Custom Development", "Full-Stack", "Innovation"]
    },
    {
      tag: "New", 
      title: "Financial Data Management",
      desc: "Capture, process, store, and analyze data streams from various channels with advanced visualizations and executive dashboards.",
      tech: ["Data Analytics", "Visualization", "Dashboards"]
    },
    {
      tag: "Popular",
      title: "UI/UX Design",
      desc: "Create personalized customer experiences and interfaces that exemplify superior design and best software engineering practices.",
      tech: ["UI/UX Design", "User Experience", "Interface Design"]
    }
  ],

  // Projects patterns
  projects: [
    "Roots Wall Platform",
    "CashCare Web App", 
    "Gamiverz Dashboard",
    "Fintech Portal",
    "Banking Interface",
    "Blockchain Explorer",
    "Data Analytics",
    "API Integration",
    "Process Automation"
  ],

  projectDescriptions: [
    "Global money transfer platform with multi-currency support and secure transactions.",
    "Next-generation financial services application with mortgage and investment features.",
    "Gaming community platform where developers and gamers transact in-game assets.",
    "Secure financial tools portal with cybersecurity and compliance features.",
    "Modern banking interface with lending, borrowing, and investment services.",
    "Blockchain solution platform for innovative financial technology applications.",
    "Data-driven analytics application with advanced visualizations and reporting.",
    "Third-party service integration and API development for financial platforms.",
    "Automated business process solutions for financial operations and compliance."
  ],

  // Testimonial patterns
  testimonial: {
    quote: "UFG LAB delivered a solution that not only looks amazing but also <span className=\"text-cyan-200\">performs exceptionally well</span>. Our performance increased by 200% and user engagement tripled.",
    author: "— CTO, Financial Services Inc."
  },

  // CTA patterns
  cta: {
    title: "Ready to Transform Your Digital Presence?",
    description: "Let's work together to bring your vision to life. Our team of experts is ready to help you create something extraordinary with cutting-edge solutions.",
    primaryButton: "Start Your Project",
    secondaryButton: "Schedule a Call"
  }
};

// Industry-specific adaptations
const INDUSTRY_ADAPTATIONS = {
  "branding-agency": {
    tag: "Custom Branding • Strategy • Design",
    title: "Transform Your Business with <span className=\"text-cyan-200\">Cutting-Edge Branding Solutions</span>",
    description: "We develop bespoke branding solutions focused on your target audience's needs. Own your brand identity and add new features as necessary with our innovative approach.",
    placeholder: "Search: custom branding, brand strategy, visual identity…",
    logos: ["Custom Branding", "Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines", "Digital Assets"]
  },
  
  "web-design-agency": {
    tag: "Web Development • UI/UX • Integration", 
    title: "Transform Your Business with <span className=\"text-cyan-200\">Cutting-Edge Web Solutions</span>",
    description: "We develop bespoke web applications focused on your target audience's needs. Own your code and add new features as necessary with our innovative approach.",
    placeholder: "Search: custom web development, UI/UX design, integration…",
    logos: ["Custom Development", "Web Applications", "UI/UX Design", "API Integration", "Data Management", "Process Automation"]
  },

  "seo-agency": {
    tag: "Data Analytics • SEO • Process Automation",
    title: "Transform Your Business with <span className=\"text-cyan-200\">Cutting-Edge Analytics Solutions</span>",
    description: "We develop bespoke analytics solutions focused on your target audience's needs. Own your data and add new features as necessary with our innovative approach.",
    placeholder: "Search: data analytics, SEO optimization, process automation…",
    logos: ["Data Analytics", "Process Automation", "Financial Data", "Executive Dashboards", "Data Visualization", "Business Intelligence"]
  },

  "design-studio": {
    tag: "UI/UX Design • Creative Solutions • Brand Systems",
    title: "Transform Your Business with <span className=\"text-cyan-200\">Cutting-Edge Design Solutions</span>",
    description: "We develop bespoke design solutions focused on your target audience's needs. Own your design system and add new features as necessary with our innovative approach.",
    placeholder: "Search: UI/UX design, creative solutions, brand systems…",
    logos: ["UI/UX Design", "Creative Solutions", "Brand Systems", "Design Systems", "User Experience", "Interface Design"]
  },

  "video-production": {
    tag: "Video Solutions • Motion Graphics • Process Automation",
    title: "Transform Your Business with <span className=\"text-cyan-200\">Cutting-Edge Video Solutions</span>",
    description: "We develop bespoke video solutions focused on your target audience's needs. Own your content and add new features as necessary with our innovative approach.",
    placeholder: "Search: video solutions, motion graphics, process automation…",
    logos: ["Video Solutions", "Motion Graphics", "Process Automation", "Content Creation", "Video Analytics", "Digital Media"]
  }
};

console.log("UFG Lab content structure ready for application to industry pages");
console.log("Key patterns:", Object.keys(UFG_LAB_CONTENT));
console.log("Industry adaptations:", Object.keys(INDUSTRY_ADAPTATIONS));
