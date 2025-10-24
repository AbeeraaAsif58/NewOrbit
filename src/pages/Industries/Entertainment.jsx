import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Juqe – Adult Video Platform",
    "category": "Entertainment",
    "tags": [
      "Entertainment",
      "Video Platform",
      "Adult Content",
      "Streaming"
    ],
    "description": "This is Flexible, Powerful and Reliable video/photo gallery sharing & hosting platform, you can now easily create Highly Profitable adult tube websites.",
    "status": "Available",
    "slug": "juqe-adult-video-platform",
    "image": "https://www.ufglab.com/projects/adult-350x166.png"
  },
  {
    "title": "Tokito – Android & iOS Media App Creating, Sharing, Short Videos TikTok MoJ Clone",
    "category": "Entertainment",
    "tags": [
      "Entertainment",
      "Short Videos",
      "TikTok Clone",
      "Social Media"
    ],
    "description": "Android & iOS media app for creating and sharing short videos, similar to TikTok with all modern features for content creation and social interaction.",
    "status": "Available",
    "slug": "tokito-android-ios-media-app-creating-sharing-short-videos-tiktok-moj-clone",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Janoo – Dating Platform like Tinder/Badoo",
    "category": "Entertainment",
    "tags": [
      "Entertainment",
      "Dating",
      "Social Platform",
      "Mobile App"
    ],
    "description": "Complete dating platform similar to Tinder and Badoo with advanced matching algorithms, chat features, and social interaction capabilities.",
    "status": "Available",
    "slug": "janoo-dating-platform-like-tinder-badoo",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "PixelPear OOT Platform – Netflix Clone – Live TV & Movies Streaming Platform",
    "category": "Entertainment",
    "tags": [
      "Entertainment",
      "Streaming",
      "Netflix Clone",
      "Video Platform"
    ],
    "description": "Complete Netflix clone with live TV and movies streaming platform. It is a complete system with all the features of any modern Netflix clone.",
    "status": "Available",
    "slug": "pixelpear-oot-platform-netflix-clone-live-tv-movies-streaming-platform",
    "image": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop&crop=center"
  }

];

export default function Entertainment() {
  return (
    <OptimizedIndustryPage
      title="Entertainment Solutions"
      description="Professional entertainment services and solutions. Discover our verified and tested entertainment projects ready for deployment."
      projects={projects}
      basePath="/entertainment"
    />
  );
}
