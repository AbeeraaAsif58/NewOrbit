import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Practova – Appointment Booking With Time-slot app – Practo clone",
    "category": "Directory",
    "tags": [
      "Directory",
      "Healthcare",
      "Mobile Apps",
      "Appointment Booking"
    ],
    "description": "This is an Appointment Booking With Time-slot app in Flutter is a complete medical solution for users. You can find nearby doctors with complete profile details of doctor.",
    "status": "66 Sales",
    "slug": "practova-appointment-booking-with-time-slot-app-practo-clone",
    "image": "https://www.ufglab.com/projects/practo-clone-350x183.png"
  },
  {
    "title": "Urban Better – Home Services, Business Listing, Handyman Booking App",
    "category": "Directory",
    "tags": [
      "Directory",
      "eCommerce",
      "Home Services",
      "Booking"
    ],
    "description": "Complete home services platform with business listings and handyman booking functionality for various home improvement services.",
    "status": "30 Sales",
    "slug": "urban-better-home-services-business-listing-handyman-booking-app",
    "image": "https://www.ufglab.com/projects/home-service-350x184.jpg"
  },
  {
    "title": "Binnic – Business Suite",
    "category": "Directory",
    "tags": [
      "Directory",
      "eCommerce",
      "Business Management"
    ],
    "description": "Comprehensive business suite platform providing directory services and eCommerce solutions for businesses of all sizes.",
    "status": "25 Sales",
    "slug": "binnic-business-suite",
    "image": "https://www.ufglab.com/projects/business-suite-350x183.jpg"
  },
  {
    "title": "CouponLife – Affiliate & Submitting Coupons Application",
    "category": "Directory",
    "tags": [
      "Directory",
      "eCommerce",
      "Coupon Management"
    ],
    "description": "This application is designed to serve coupons either submitted by your users or imported via XML/CSV file from the affiliate network or both. It is designed to be super fast and not to add any stress to queries",
    "status": "25 Sales",
    "slug": "couponlife-affiliate-submitting-coupons-application",
    "image": "https://www.ufglab.com/projects/coupon-350x197.jpg"
  }
];

export default function Directory() {
  return (
    <OptimizedIndustryPage
      title="Directory Solutions"
      description="Professional directory services and solutions. Discover our verified and tested directory projects ready for deployment."
      projects={projects}
      basePath="/directory"
    />
  );
}
