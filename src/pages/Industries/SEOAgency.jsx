import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "SEOAgency Solution",
    "category": "SEOAgency",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional seoagency solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "seoagency-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function SEOAgency() {
  return (
    <OptimizedIndustryPage
      title="SEOAgency Solutions"
      description="Professional seoagency services and solutions. Discover our verified and tested seoagency projects ready for deployment."
      projects={projects}
      basePath="/seoagency"
    />
  );
}