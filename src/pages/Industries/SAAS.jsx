import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Vyapaar – Complete SAAS Business for Stock Management, POS & Invoicing",
    "category": "SAAS",
    "tags": [
      "SAAS",
      "B2B",
      "ERP & CRM",
      "Stock Management"
    ],
    "description": "Complete SAAS business solution for stock management, POS, and invoicing. Features multiple business/shops setup, inventory & accounting, location management, user & role management, contacts management, products management, purchases, sales, expenses, reports, HRM features, and comprehensive SAAS functionality.",
    "status": "Available",
    "price": "$5,000 – $15,000",
    "slug": "vyapaar-complete-saas-business-stock-management-pos-invoicing",
    "image": "https://ufg-lab-roan.vercel.app/projects/salepose-banner-350x241.jpg"
  },
  {
    "title": "Recruitrabbit – SAAS Human Resource Management",
    "category": "SAAS",
    "tags": [
      "SAAS",
      "Human Resource",
      "HRM",
      "Management"
    ],
    "description": "Comprehensive SAAS Human Resource Management system featuring employees management, department organization, awards system, expense tracking, holidays management, attendance monitoring, leave applications, leave types, and notice board functionality.",
    "status": "Available",
    "price": "$3,000 – $8,000",
    "slug": "recruitrabbit-saas-human-resource-management",
    "image": "https://ufg-lab-roan.vercel.app/projects/hr-350x197.jpg"
  },
  {
    "title": "Resumesy – Complete SAAS Resume Builder",
    "category": "SAAS",
    "tags": [
      "SAAS",
      "Human Resource",
      "Resume Builder",
      "Recruitment"
    ],
    "description": "Complete SAAS Recruitment Manager and Resume Builder. Web application to manage recruitment process with job seekers applying directly on website, admin panel management, recurring payments, cover letter builder, multiple resume templates, PDF export, Google captcha, social login, analytics, multi-language support, and SEO optimization.",
    "status": "Available",
    "price": "$2,500 – $6,000",
    "slug": "resumesy-complete-saas-resume-builder",
    "image": "https://ufg-lab-roan.vercel.app/projects/Top-Resume-Builders-350x197.png"
  },
  {
    "title": "FoodDeck – SaaS Contactless Multi-restaurant QR Menu Maker",
    "category": "SAAS",
    "tags": [
      "SAAS",
      "ERP & CRM",
      "Restaurant",
      "QR Menu"
    ],
    "description": "Contactless Multi-restaurant QR Menu Maker SAAS solution. Start a contactless restaurant menu business within 5 minutes. Features QR code scanning, digital menu display, restaurant admin panel, order notifications, table management, subscription plans, store settings, waiter call options, and comprehensive restaurant management tools.",
    "status": "Available",
    "price": "$2,000 – $5,000",
    "slug": "fooddeck-saas-contactless-multi-restaurant-qr-menu-maker",
    "image": "https://ufg-lab-roan.vercel.app/projects/qr-menu-banner-350x187.jpeg"
  },
  
  {
    "title": "Ultreno – SAAS Project Management System",
    "category": "SAAS",
    "tags": [
      "SAAS",
      "ERP & CRM",
      "Project Management",
      "Collaboration"
    ],
    "description": "Comprehensive SAAS Project Management System for team collaboration and real-time work. Features customer and lead management, client project tracking, employee management, attendance tracking, contract management with e-signatures, project progress tracking, Kanban taskboard, Gantt charts, invoice management, and comprehensive reporting.",
    "status": "Available",
    "price": "$4,000 – $10,000",
    "slug": "ultreno-saas-project-management-system",
    "image": "https://ufg-lab-roan.vercel.app/projects/banner-2-350x270.png"
  }
];

export default function SAAS() {
  return (
    <OptimizedIndustryPage
      title="SAAS Solutions"
      description="Software-as-a-Service solutions that provide cloud-based applications and services for businesses across various industries with subscription-based pricing models."
      projects={projects}
      basePath="/saas"
    />
  );
}