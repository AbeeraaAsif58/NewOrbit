import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Janoo-Dating Platform like Tinder/Badoo",
    "category": "Dating",
    "tags": [
      "Dating",
      "Entertainment"
    ],
    "description": "Fast and secured Dating social platform User Features Upload Images: Upload any image from your device and share it online with other users High performance & Capability: it handles advanced matching algorithms.",
    "status": "Available",
    "price": "$750 – $1,500",
    "slug": "janoo-dating-platform-like-tinder-badoo",
    "image": "https://www.ufglab.com/projects/social-dating-350x194.png"
  },
];

export default function Dating() {
  return (
    <OptimizedIndustryPage
      title="Dating Solutions"
      description="Professional dating services and solutions. Discover our verified and tested dating projects ready for deployment."
      projects={projects}
      basePath="/dating"
    />
  );
}