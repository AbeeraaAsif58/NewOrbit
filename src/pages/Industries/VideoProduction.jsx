import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "VideoProduction Solution",
    "category": "VideoProduction",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional videoproduction solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "videoproduction-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function VideoProduction() {
  return (
    <OptimizedIndustryPage
      title="VideoProduction Solutions"
      description="Professional videoproduction services and solutions. Discover our verified and tested videoproduction projects ready for deployment."
      projects={projects}
      basePath="/videoproduction"
    />
  );
}