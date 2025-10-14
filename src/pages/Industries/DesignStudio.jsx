import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "DesignStudio Solution",
    "category": "DesignStudio",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional designstudio solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "designstudio-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function DesignStudio() {
  return (
    <OptimizedIndustryPage
      title="DesignStudio Solutions"
      description="Professional designstudio services and solutions. Discover our verified and tested designstudio projects ready for deployment."
      projects={projects}
      basePath="/designstudio"
    />
  );
}