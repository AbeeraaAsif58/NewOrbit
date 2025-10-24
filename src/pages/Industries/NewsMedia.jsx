import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Newsshelf – News Portal with Android and iOS Mobile Apps",
    "category": "News & Media",
    "tags": [
      "News & Media",
      "Mobile Apps",
      "News Portal"
    ],
    "description": "Complete news portal platform with dedicated Android and iOS mobile applications featuring real-time news updates and multimedia content.",
    "status": "71 Sales",
    "slug": "newsshelf-news-portal-android-ios-mobile-apps",
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Indie News – Newspaper, Blog Multilingual News Portal (with AI Writer, Content Generator)",
    "category": "News & Media",
    "tags": [
      "News & Media",
      "AI",
      "Multilingual",
      "Content Generation"
    ],
    "description": "Multilingual news portal with AI-powered content generation, newspaper and blog functionality, and comprehensive media management.",
    "status": "New",
    "slug": "indie-news-newspaper-blog-multilingual-news-portal-ai-writer-content-generator",
    "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Shortnews – Short News App – Inshorts Clone",
    "category": "News & Media",
    "tags": [
      "News & Media",
      "Mobile App",
      "Inshorts Clone"
    ],
    "description": "Complete Inshorts clone application featuring short-form news content, quick updates, and mobile-optimized news consumption.",
    "status": "New",
    "slug": "shortnews-short-news-app-inshorts-clone",
    "image": "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?w=800&h=600&fit=crop&crop=center"
  }
];

export default function NewsMedia() {
  return (
    <OptimizedIndustryPage
      title="News & Media Solutions"
      description="Professional news and media services and solutions. Discover our verified and tested news & media projects ready for deployment."
      projects={projects}
      basePath="/news-media"
    />
  );
}
