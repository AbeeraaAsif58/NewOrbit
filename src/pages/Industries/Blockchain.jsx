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
    "image": "https://www.ufglab.com/projects/ico-token.jpeg"
  },
  {
    title: "Cryptologia-Cryptocurrency Buy Sell Exchange with MLM System",
    category: "Blockchain",
    tags: ["Blockchain", "Exchange MLM"],
    description: "A complete cryptocurrency exchange platform with integrated MLM system.",
    status: "Available",
    price: "9 sales",
    slug: "cryptologia-cryptocurrency-buy-sell-exchange-mlm-system",
    image: "https://www.ufglab.com/projects/crypto-mlm.png"
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