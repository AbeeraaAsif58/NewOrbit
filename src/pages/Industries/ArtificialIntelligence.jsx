import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    title: "SonicVox – Text to Speech as SaaS",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "Machine learning and Deep learning based text-to-speech solution with advanced features and analytics",
    status: "1 Sale",
    price: "$625 – $1,250",
    slug: "sonicvox-text-to-speech-as-saas",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Classifiable – Classified Buy and Sell Marketplace Platform",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI-powered classified marketplace platform for buying and selling with intelligent matching and recommendations",
    status: "Available",
    price: "$2,000 – $3,500",
    slug: "classifiable-classified-buy-sell-marketplace",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Inbitcoin – AI Prompt Buy Selling Marketplace",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "Multi-seller marketplace platform for AI prompts with intelligent pricing and automated trading features",
    status: "Available",
    price: "$2,000 – $3,500",
    slug: "inbitcoin-ai-prompt-buy-selling-marketplace",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "WriteTalent – SAAS OpenAI Content Generator",
    category: "Artificial Intelligence", 
    tags: ["SaaS", "Tools and Utilities"],
    description: "Complete AI solution for content, text, image, voice, chat, code, transcript, and video generation",
    status: "Available",
    price: "$2,000 – $3,500",
    slug: "writetalent-saas-openai-content-generator",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Writingo – AI Content Writer & Copyright Generator",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "Advanced AI-powered content writing and copyright generation tool with SAAS capabilities",
    status: "Available",
    price: "$750 – $1,375",
    slug: "writingo-ai-content-writer-copyright-generator",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Aitini – ChatGPT SaaS Writing Assistant",
    category: "Artificial Intelligence",
    tags: ["SaaS", "Tools and Utilities"],
    description: "AI writing assistant and content creator powered by ChatGPT technology",
    status: "Available",
    price: "$750 – $1,375",
    slug: "aitini-chatgpt-saas-writing-assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  }

];

export default function ArtificialIntelligence() {
  return (
    <OptimizedIndustryPage
      title="AI Marketplace Solutions"
      description="Discover verified and tested AI startups from our marketplace. Ready-to-launch SaaS solutions for text-to-speech, content generation, marketplace platforms, and AI-powered tools."
      projects={projects}
      basePath="/artificial-intelligence"
    />
  );
}