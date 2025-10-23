import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Vyapaar-Complete SAAS Business for Stock Management, POS & Invoicing",
    "category": "B2B",
    "tags": [
      "Marketplace",
      "Enterprise"
    ],
    "description": "This is a SAAS based Startup provides a CRM with some amazing features suitable for all businesses. With this application, you are assured to save time-consuming process of bookkeeping accounting and inventory information.",
    "status": "Available",
    "price": "$4,000 – $7,000",
    "slug": "b2b-marketplace",
    "image": "https://plus.unsplash.com/premium_photo-1661544641499-e12fd5efeea4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
  },
  {
    title: "Cloud Prospects-Lead Management System and Sales CRM",
    tags: ["B2B", "ERP & CRM"],
    description: "This is a lead management system and sales CRM designed to streamline business processes, track prospects, and manage customer relationships effectively with advanced automation and analytics.",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Hospitalcore-Complete SAAS Hospital management system",
    // category: "Artificial Intelligence",
    tags: ["SaaS", "Healthcare , SaaS"],
    description: "Complete SaaS-based hospital management system with cloud-based deployment and comprehensive healthcare management features.",
    status: "Available",
    price: "$750 – $1,375",
    // slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1115"
  },
  {
    title: "Business Brawn-Complete SAAS Business Management ",
    // category: "Artificial Intelligence",
    tags: ["SaaS", "B2B"],
    description: "Complete SAAS business management solution with comprehensive tools for operations, finance, HR, and project management in one unified platform.",
    status: "Available",
    price: "$750 – $1,375",
    // slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Account Tap-KhataBook Clone Android application",
    // category: "Artificial Intelligence",
    tags: ["SaaS", "Fiance "],
    description: "khata Book (ledger management system) clone for Android application with advanced features for small and medium businesses.",
    status: "Available",
    price: "$750 – $1,375",
    // slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Close Sourcing - B2B eCommerce with Bulk Discount, B2B User-AliExpress, IndiaMart Clone ",
    // category: "Artificial Intelligence",
    tags: ["B2B", "eCommerce"],
    description: "The complete solution for running a wholesale, B2B, hybrid B2B+B2C, or private Membership store. we takes care of everything, from basic aspects such as hiding prices for guest users, to....",
    status: "Available",
    price: "$750 – $1,375",
    // slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1115"
  }
];

export default function B2B() {
  return (
    <OptimizedIndustryPage
      title="B2B Solutions"
      description="Professional b2b services and solutions. Discover our verified and tested b2b projects ready for deployment."
      projects={projects}
      basePath="/b2b"
    />
  );
}