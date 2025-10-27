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
    "image": "https://www.ufglab.com/projects/tiktok-350x197.jpg"
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
    "image": "https://www.ufglab.com/projects/social-dating-350x194.png"
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
    "image": "https://www.ufglab.com/projects/video-tv-app-1-350x230.png"
  },
  {
    "title": "Nexagram – Instagram Clone – Image & Photo Sharing Social Network Platform",
    "category": "Entertainment",
    "tags": [
      "Entertainment",
      "Social",
      "Instagram Clone",
      "Photo Sharing"
    ],
    "description": "Best Instagram Clone Website and application. The best way to start your own photo-sharing website!",
    "status": "Available",
    "slug": "nexagram-instagram-clone-image-photo-sharing-social-network-platform",
    "image": "https://www.ufglab.com/projects/instagram-clone-350x184.jpg"
  },

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
