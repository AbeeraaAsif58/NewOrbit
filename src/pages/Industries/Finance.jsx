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
    "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1742308518213-c28192d056d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
  },
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