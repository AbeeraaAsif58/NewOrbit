import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "FuzeTube – Video Sharing Platform – YouTube Clone",
    "category": "Social",
    "tags": [
      "Social",
      "Video Sharing",
      "YouTube Clone",
      "Entertainment"
    ],
    "description": "Fast and secured complete video sharing platform with advanced features including video upload, import from YouTube/Dailymotion/Vimeo, auto-import functionality, high performance capabilities handling 1B+ videos, WoWonder integration, like/dislike system, comments, subscriptions, user channels, advertisement system, and SEO optimization.",
    "status": "Available",
    "slug": "fuzetube-video-sharing-platform-youtube-clone",
    "image": "https://ufg-lab-roan.vercel.app/projects/youtube-350x197.jpg",
    "liveUrl": "https://www.ufglab.com"
  },
  {
    "title": "Fantica – Premium Content Creators SaaS platform, Onlyfans Clone",
    "category": "Social",
    "tags": [
      "Social",
      "SaaS",
      "Content Creator",
      "Subscription"
    ],
    "description": "Fully-featured PHP platform for premium content-based social media. Features mobile-first design, dark/light themes, RTL support, advanced posts creation, bidirectional feed, search module, multiple payment providers (Stripe, PayPal, crypto), storage drivers (AWS S3, DigitalOcean), live messaging, user notifications, and comprehensive admin panel.",
    "status": "Available",
    "slug": "fantica-premium-content-creators-saas-platform-onlyfans-clone",
    "image": "https://ufg-lab-roan.vercel.app/projects/fans-banner-350x175.jpg",
    "liveUrl": "https://fantica.com"
  },
  {
    "title": "Friendza – Social Networking Platform – Facebook Clone",
    "category": "Social",
    "tags": [
      "Social",
      "Social Network",
      "Facebook Clone",
      "Community"
    ],
    "description": "Fast and secured complete social networking platform with high performance cache system, Wonder feature, RTL support, social login integration, user profiles, friends/follow system, news feed, timeline, pages, groups, games, video support, photo albums, privacy controls, notifications, hashtags, mentions, and live chat.",
    "status": "Available",
    "slug": "friendza-social-networking-platform-facebook-clone",
    "image": "https://ufg-lab-roan.vercel.app/projects/socialnetwork-350x223.png",
    "liveUrl": "https://www.ufglab.com"
  },
  {
    "title": "Nexagram – Instagram Clone – Image & Photo Sharing Social Network Platform",
    "category": "Social",
    "tags": [
      "Social",
      "Instagram Clone",
      "Photo Sharing",
      "Image Sharing"
    ],
    "description": "Best Instagram Clone website and application for photo-sharing. Features image/video upload, high performance capabilities, Facebook Clone integration, like system, comments, FFMPEG video processing, user profiles, SEO optimization, powerful admin panel, and beautiful modern design.",
    "status": "Available",
    "slug": "nexagram-instagram-clone-image-photo-sharing-social-network-platform",
    "image": "https://ufg-lab-roan.vercel.app/projects/instagram-clone-350x184.jpg",
    "liveUrl": "https://www.ufglab.com"
  },
  {
    "title": "Qwestions – Questions and answers platform like Quora",
    "category": "Social",
    "tags": [
      "Social",
      "Q&A Platform",
      "Quora Clone",
      "Forum"
    ],
    "description": "Simple and lightweight forum platform for questions and answers. Features unlimited users, topics, answers, votes, shares, comments, views, modern browser compatibility, powerful admin interface, clean UI, unlimited topics, profile management, upvote/downvote, social sharing, search system, live chat, multi-language support, and comprehensive admin features.",
    "status": "Available",
    "slug": "qwestions-questions-and-answers-platform-like-quora",
    "image": "https://ufg-lab-roan.vercel.app/projects/qa-quora-350x219.jpg",
    "liveUrl": "https://www.ufglab.com"
  },
  {
    "title": "Janoo – Dating Platform like Tinder/Badoo",
    "category": "Social",
    "tags": [
      "Social",
      "Dating",
      "Tinder Clone",
      "Matchmaking"
    ],
    "description": "Fast and secured dating social platform with image upload capabilities, high performance, like system for matching, user profiles, SEO optimization, powerful admin panel, beautiful UI, pro subscription system, and credit system for messages, gifts, and likes.",
    "status": "Available",
    "slug": "janoo-dating-platform-like-tinder-badoo",
    "image": "https://ufg-lab-roan.vercel.app/projects/social-dating-350x194.png",
    "liveUrl": "https://janoo.com"
  }
];

export default function Social() {
  return (
    <OptimizedIndustryPage
      title="Social Solutions"
      description="Social networking and community platforms enabling user interactions, content sharing, messaging, and social engagement features."
      projects={projects}
      basePath="/social"
    />
  );
}
