import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "ExtraAcre – Real Estate Portal with Multiple Users with Android App",
    "category": "Real Estate",
    "tags": [
      "Real Estate",
      "Mobile App",
      "Multi-User"
    ],
    "description": "Comprehensive real estate portal supporting multiple user types with dedicated Android application for property management and transactions.",
    "status": "51 Sales",
    "slug": "extraacre-real-estate-portal-multiple-users-android-app",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "GigaBrick – Real Estate Portal Website",
    "category": "Real Estate",
    "tags": [
      "Real Estate",
      "Web Portal",
      "Property Management"
    ],
    "description": "Complete real estate portal website with property listings, search functionality, and comprehensive real estate management features.",
    "status": "45 Sales",
    "slug": "gigabrick-real-estate-portal-website",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Citysquid – Innovative Real Estate Investment Platform",
    "category": "Real Estate",
    "tags": [
      "Real Estate",
      "Investment",
      "Analytics"
    ],
    "description": "Innovative real estate investment platform with advanced analytics, property valuation, and investment management tools.",
    "status": "15 Sales",
    "slug": "citysquid-innovative-real-estate-investment-platform",
    "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "PropertyPlus – Society, Property, Tenant and Maintenance Management System",
    "category": "Real Estate",
    "tags": [
      "ERP & CRM",
      "Real Estate",
      "Tools and Utilities",
      "Property Management"
    ],
    "description": "Comprehensive property management system for societies, properties, tenants, and maintenance with ERP and CRM functionality.",
    "status": "4 Sales",
    "slug": "propertyplus-society-property-tenant-maintenance-management-system",
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "RealtorStack-Real Estate Property Buy-Rent-Sell Platform",
    "category": "Real Estate",
    "tags": [
      "Real Estate",
      "Buy-Rent-Sell",
      "Transaction Management"
    ],
    "description": "Complete real estate platform for buying, renting, and selling properties with comprehensive transaction management.",
    "status": "New",
    "slug": "realtorstack-real-estate-property-buy-rent-sell-platform",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center"
  }
];

export default function RealEstate() {
  return (
    <OptimizedIndustryPage
      title="Real Estate Solutions"
      description="Professional real estate services and solutions. Discover our verified and tested real estate projects ready for deployment."
      projects={projects}
      basePath="/real-estate"
    />
  );
}
