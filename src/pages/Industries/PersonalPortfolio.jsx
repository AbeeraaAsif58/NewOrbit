import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "PersonalPortfolio Solution",
    "category": "PersonalPortfolio",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional personalportfolio solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "personalportfolio-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function PersonalPortfolio() {
  return (
    <OptimizedIndustryPage
      title="PersonalPortfolio Solutions"
      description="Professional personalportfolio services and solutions. Discover our verified and tested personalportfolio projects ready for deployment."
      projects={projects}
      basePath="/personalportfolio"
    />
  );
}