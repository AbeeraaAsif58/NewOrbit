import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Finance Solution",
    "category": "Finance",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional finance solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "finance-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function Finance() {
  return (
    <OptimizedIndustryPage
      title="Finance Solutions"
      description="Professional finance services and solutions. Discover our verified and tested finance projects ready for deployment."
      projects={projects}
      basePath="/finance"
    />
  );
}