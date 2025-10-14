import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "B2B Marketplace",
    "category": "B2B",
    "tags": [
      "Marketplace",
      "Enterprise"
    ],
    "description": "Enterprise-grade B2B marketplace with advanced search and negotiation features",
    "status": "Available",
    "price": "$4,000 – $7,000",
    "slug": "b2b-marketplace",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
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