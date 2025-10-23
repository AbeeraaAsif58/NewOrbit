import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "DeFi Platform",
    "category": "Blockchain",
    "tags": [
      "DeFi",
      "Crypto"
    ],
    "description": "Decentralized finance platform with staking, lending, and yield farming features",
    "status": "Available",
    "price": "$5,000 – $10,000",
    "slug": "defi-platform",
    "image": "https://images.unsplash.com/photo-1631864032970-68d79f6b7158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1651130535991-17513bf59fc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  }
];

export default function Blockchain() {
  return (
    <OptimizedIndustryPage
      title="Blockchain Solutions"
      description="Professional blockchain services and solutions. Discover our verified and tested blockchain projects ready for deployment."
      projects={projects}
      basePath="/blockchain"
    />
  );
}