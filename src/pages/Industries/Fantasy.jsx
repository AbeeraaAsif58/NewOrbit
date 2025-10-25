import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Aviator – Real Money Aviator Game",
    "category": "Fantasy",
    "tags": [
      "Fantasy",
      "Games",
      "Real Money",
      "Casino"
    ],
    "description": "Aviator is not just a game; it's an experience. This unique game combines elements of risk and reward, offering players an immersive journey. Features multiplier levels, risk management, bonus rounds, interactive gameplay, tournaments, community engagement, and seamless desktop and mobile experience.",
    "status": "Available",
    "slug": "aviator-real-money-aviator-game",
    "image": "https://ufg-lab-roan.vercel.app/projects/aviator-banner-350x175.png"
  },
  {
    "title": "Color IQ – Real Money Colour Prediction Game",
    "category": "Fantasy",
    "tags": [
      "Fantasy",
      "Games",
      "Prediction",
      "Real Money"
    ],
    "description": "Color game is an exciting and popular predicting game that has been gaining traction. Players have three minutes to correctly predict the color of a given image, with successful prediction leading to victory. Features admin panel, user management, betting records, deposit/withdrawal management, referral system, and wallet management.",
    "status": "Available",
    "price": "$2,500 – $6,000",
    "slug": "color-iq-real-money-colour-prediction-game",
    "image": "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop&crop=center"
  },
  {
    "title": "Byte Lottery – Live Online Lottery Application with MLM",
    "category": "Fantasy",
    "tags": [
      "Fantasy",
      "Games",
      "Lottery",
      "MLM"
    ],
    "description": "A Lottery Platform that will take your excitement to the next level! Features dynamic lottery system, auto phase creation, multi-level referral system, user-friendly interface, responsive design, two-factor authentication, lottery management, report manager, and comprehensive admin features.",
    "status": "Available",
    "price": "$4,000 – $10,000",
    "slug": "byte-lottery-live-online-lottery-application-with-mlm",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center"
  },
  {
    "title": "Lottery Whale – Live Lottery Betting Application",
    "category": "Fantasy",
    "tags": [
      "Fantasy",
      "Games",
      "Lottery",
      "Betting"
    ],
    "description": "Live Lottery platform that enables a great opportunity to start your own lottery website. Features premium design, responsive & cross-browser compatibility, automatic & manual payment gateway, referral bonus with level system, full dynamic lottery system, easy documentation, GDPR policy, and comprehensive user and admin features.",
    "status": "Available",
    "price": "$3,500 – $9,000",
    "slug": "lottery-whale-live-lottery-betting-application",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
  }
];

export default function Fantasy() {
  return (
    <OptimizedIndustryPage
      title="Fantasy Solutions"
      description="Gaming and entertainment platforms focused on fantasy sports, role-playing games, and virtual world experiences with user engagement features."
      projects={projects}
      basePath="/fantasy"
    />
  );
}
