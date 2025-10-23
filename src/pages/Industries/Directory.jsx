import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Directory Solution",
    "category": "Directory",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional directory solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "directory-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function Directory() {
  return (
    <OptimizedIndustryPage
      title="Directory Solutions"
      description="Professional directory services and solutions. Discover our verified and tested directory projects ready for deployment."
      projects={projects}
      basePath="/directory"
    />
  );
}
