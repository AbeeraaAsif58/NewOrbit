import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Carinian-Used Car Buy/Sell & Dealership",
    "category": "Automotive",
    "tags": [
      "Automobile",
      "Directory"
    ],
    "description": "A commprehensive platform for buying selling,and managing used cars with dealership integration",
    "status": "Available",
    "price": "$3,000 – $5,000",
    // "slug": "car-dealership-platform",
    "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
  },
  {
    "title": "Garagify - Garage/Vehicle Service Management",
    "category": "Automotive",
    "tags": [
      "E-commerce",
      "Inventory"
    ],
    "description": "Complete garage and vehicle service management system for modern automotive businesses.",
    "status": "Available",
    "price": "$3,000 – $5,000",
    // "slug": "car-dealership-platform",
    "image": "https://images.unsplash.com/photo-1576933765009-9f57f43910aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://plus.unsplash.com/premium_photo-1737631673428-7dc9ac9db616?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1662666902725-f897b42b65f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1576933765009-9f57f43910aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
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

export default function Automobile() {
  return (
    <OptimizedIndustryPage
      title="Automobile Solutions"
      description="Professional automobile services and solutions. Discover our verified and tested automobile projects ready for deployment."
      projects={projects}
      basePath="/automobile"
    />
  );
}