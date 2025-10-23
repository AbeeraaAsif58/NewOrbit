import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Cryptouiver-ICO/STO Token Sale Management/ ICO Admin",
    "category": "Blockchain",
    "tags": [
      "BlackChain",
      "ICO",
      "STO"
    ],
    "description":"A comprehensive ICO/STO Token sale management platform with advanced admin features.",
    "status": "Available",
    "price": "69 sales",
    "slug": "cryptoquiver-ico-sto-token-sale-management-ico-admin",
    "image": "https://images.unsplash.com/photo-1631864032970-68d79f6b7158?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331"
  },
  {
    title: "Cryptologia-Cryptocurrency Buy Sell Exchange with MLM System",
    category: "Blockchain",
    tags: ["Blockchain", "Exchange MLM"],
    description: "A complete cryptocurrency exchange platform with integrated MLM system.",
    status: "Available",
    price: "9 sales",
    slug: "cryptologia-cryptocurrency-buy-sell-exchange-mlm-system",
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