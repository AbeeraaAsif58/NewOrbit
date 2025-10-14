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
    "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
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