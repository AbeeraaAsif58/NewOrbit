import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Grocery Space – Grocery Multi-Store with Customer, Store and Driver apps – BigBasket Clone",
    "category": "Grocery",
    "tags": [
      "Grocery",
      "Multi-Store",
      "BigBasket Clone",
      "Mobile Apps",
      "Delivery"
    ],
    "description": "Complete grocery delivery platform with customer, store, and driver apps - BigBasket clone with multi-store management capabilities. What's included: 1. Customer Android App Source Code 2. Store Manager Android Source Code App 3. Delivery Boy Android App Source Code 4. Admin Panel PHP Script Source Code 5. WordPress website with source code",
    "status": "120 Sales",
    "slug": "grocery-space-grocery-multi-store-customer-store-driver-apps-bigbasket-clone",
    "image": "https://www.ufglab.com/projects/product-banner-350x178.png"
  },
  {
    "title": "Farm Grocery- Ecommerce for Grocery, Food, Pharmacy with Android Apps",
    "category": "Grocery",
    "tags": [
      "Grocery",
      "Ecommerce",
      "Food",
      "Pharmacy",
      "Android Apps"
    ],
    "description": "The Complete Grocery eCommerce Platform for Grocery, Food, Pharmacy with Android Apps.",
    "status": "Available",
    "slug": "farm-grocery-ecommerce-grocery-food-pharmacy-android-apps",
    "image": "https://www.ufglab.com/projects/grocery-online-350x262.jpg"
  },
  {
    "title": "DixieDaily- Dunzo Clone – Multivendor Food, Grocery, eCommerce, Parcel, Pharmacy Delivery Website & 3 Mobile apps (Customer, Store, Driver apps)",
    "category": "Grocery",
    "tags": [
      "Grocery",
      "Dunzo Clone",
      "Multivendor",
      "Food Delivery",
      "Mobile Apps"
    ],
    "description": "Dunzo Clone – Multivendor Food, Grocery, eCommerce, Parcel, Pharmacy Delivery Website & 3 Mobile apps (Customer, Store, Driver apps).",
    "status": "Available",
    "slug": "dixiedaily-dunzo-clone-multivendor-food-grocery-ecommerce-parcel-pharmacy-delivery-website-3-mobile-apps-customer-store-driver-apps",
    "image": "https://www.ufglab.com/projects/dunzo-clone-350x184.jpg"
  }

];

export default function Grocery() {
  return (
    <OptimizedIndustryPage
      title="Grocery Solutions"
      description="Professional grocery services and solutions. Discover our verified and tested grocery projects ready for deployment."
      projects={projects}
      basePath="/grocery"
    />
  );
}
