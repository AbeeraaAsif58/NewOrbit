import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Futureshaadi- Matrimony Web Application with Android and iOS app",
    "category": "Matrimony",
    "tags": [
      "Dating",
      "Matrimony",
      "Web App",
      "Mobile Apps"
    ],
    "description": "Complete matrimony web application with dedicated Android and iOS apps featuring advanced matching algorithms and secure communication.",
    "status": "Available",
    "slug": "futureshaadi-matrimony-web-application-android-ios-app",
    "image": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Rishtey – Shaadi Clone Matrimony Android & iOS app",
    "category": "Matrimony",
    "tags": [
      "Dating",
      "Matrimony",
      "Mobile Apps",
      "Shaadi Clone"
    ],
    "description": "A feature-packed Shaadi Clone Matrimonial Mobile Application to seamlessly manage your Users, Preferences, Membership, Payments, Promotions and more. This app is for providing matrimonial services to users. In this app, a user creates account securely of his/her own or anyone relative to his/her. This app is best for matchmaking of couples and it is an online dating app.",
    "status": "Available",
    "slug": "rishtey-shaadi-clone-matrimony-android-ios-app",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop&crop=center"
  }
];

export default function Matrimony() {
  return (
    <OptimizedIndustryPage
      title="Matrimony Solutions"
      description="Professional matrimony services and solutions. Discover our verified and tested matrimony projects ready for deployment."
      projects={projects}
      basePath="/matrimony"
    />
  );
}
