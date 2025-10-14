import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

// Sample projects data - replace with actual data for each industry
const projects = [
  {
    title: "Sample Project 1",
    category: "Industry Name",
    tags: ["SaaS", "Tools and Utilities"],
    description: "Sample project description",
    status: "Available",
    price: "$1,000 – $2,000",
    slug: "sample-project-1",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Sample Project 2",
    category: "Industry Name",
    tags: ["SaaS", "Tools and Utilities"],
    description: "Sample project description",
    status: "Available",
    price: "$1,500 – $2,500",
    slug: "sample-project-2",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
  }
];

export default function IndustryTemplate() {
  return (
    <OptimizedIndustryPage
      title="Industry Title"
      description="Industry description"
      projects={projects}
      basePath="/industry-path"
    />
  );
}
