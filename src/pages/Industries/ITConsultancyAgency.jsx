import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "ITConsultancyAgency Solution",
    "category": "ITConsultancyAgency",
    "tags": [
      "SaaS",
      "Professional"
    ],
    "description": "Professional itconsultancyagency solution with modern features and user-friendly interface",
    "status": "Available",
    "price": "$2,000 – $4,000",
    "slug": "itconsultancyagency-solution",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }
];

export default function ITConsultancyAgency() {
  return (
    <OptimizedIndustryPage
      title="ITConsultancyAgency Solutions"
      description="Professional itconsultancyagency services and solutions. Discover our verified and tested itconsultancyagency projects ready for deployment."
      projects={projects}
      basePath="/itconsultancyagency"
    />
  );
}