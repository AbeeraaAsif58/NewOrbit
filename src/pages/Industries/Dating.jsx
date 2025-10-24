import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Futureshaadi-Matrimony Web Application with Android and iOS app",
    "category": "Dating",
    "tags": [
      "Dating",
      "Matrimony"
    ],
    "description": "Futureshaadi- Matrimony Web Application with Android and IOS app",
    "status": "Available",
    "price": "$750 – $1,500",
    "slug": "futureshaadi-matrimony-web-application-android-ios-app",
    "image": "https://www.ufglab.com/projects/matrimonial-portal-350x190.jpg"
  },
  {
    "title": "Rishtey-Shaadi Clone Matrimony Android & iOS app",
    "category": "Dating",
    "tags": [
      "Dating",
      "Matrimony"
    ],
    "description": "A feature-packed Shaadi Clone Matrimonial Mobile Application to seamlessly manage your Users, Preference, Membership, Payments, Promotion and more. Mobile App Features this app is for matrimonial services.",
    "status": "Available",
    "price": "$750 – $1,500",
    "slug": "rishtey-shaadi-clone-matrimony-android-ios-app",
    "image": "https://www.ufglab.com/projects/rishtey-350x202.jpg"
  },
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