import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Grocery Space – Grocery Multi-Store with Customer, Store and Driver apps – BigBasket Clone",
    "category": "eCommerce",
    "tags": [
      "eCommerce",
      "Grocery",
      "Mobile Apps",
      "Multi-Store"
    ],
    "description": "Complete grocery delivery platform with customer, store, and driver apps - BigBasket clone with multi-store management capabilities.",
    "status": "120 Sales",
    "slug": "grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Buyyu – Fashion & Lifestyle eCommerce Platform with Mobileapp",
    "category": "eCommerce",
    "tags": [
      "eCommerce",
      "Fashion",
      "Lifestyle",
      "Mobile App"
    ],
    "description": "Comprehensive fashion and lifestyle eCommerce platform with mobile app support for modern retail businesses.",
    "status": "95 Sales",
    "slug": "buyyu-fashion-lifestyle-ecommerce-platform-mobileapp",
    "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Bunnpay – Complete eCommerce Platform",
    "category": "eCommerce",
    "tags": [
      "eCommerce",
      "Payment",
      "WordPress",
      "CMS"
    ],
    "description": "All-in-one eCommerce platform with advanced features for online retail businesses.",
    "status": "75 Sales",
    "slug": "bunnpay-complete-ecommerce",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Skillsly – Ultimate E-learning Website",
    "category": "eCommerce",
    "tags": [
      "eCommerce",
      "E-learning",
      "Education",
      "LMS"
    ],
    "description": "Enterprise-grade learning management system with advanced features for online learning businesses.",
    "status": "85 Sales",
    "slug": "skillsly-ultimate-elearning-website",
    "image": "https://www.ufglab.com/projects/lms-350x247.jpg"
  },
  {
    "title": "Skillbuzz – Udemy Clone - Online Courses and Learning Management System",
    "category": "eCommerce",
    "tags": [
      "eCommerce",
      "E-learning",
      "Courses",
      "Marketplace"
    ],
    "description": "Marketplace for online courses and learning management system similar to Udemy.",
    "status": "65 Sales",
    "slug": "skillbuzz-udemy-clone-online-courses-learning-management-system",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Bona Kart – Multi-vendor eCommerce Platform with Android & iOS apps",
    "category": "eCommerce",
    "tags": [
      "eCommerce",
      "Multi-vendor",
      "Marketplace",
      "Mobile Apps"
    ],
    "description": "Multi-vendor eCommerce platform with Android and iOS apps built on Bootstrap and Laravel.",
    "status": "55 Sales",
    "slug": "bona-kart-multivendor-ecommerce-platform-android-ios-apps",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
  }
];

export default function Ecommerce() {
  return (
    <OptimizedIndustryPage
      title="E-commerce Solutions"
      description="Professional e-commerce services and solutions. Discover our verified and tested e-commerce projects ready for deployment."
      projects={projects}
      basePath="/ecommerce"
    />
  );
}
