// src/pages/Industries/ErpCrm.jsx
import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const ErpCrm = () => {
  const projects = [
    {
      "title": "Zyial- Salon Booking Management System",
      "category": "ERP & CRM",
      "tags": [
        "ERP & CRM",
        "Salon Management",
        "Booking System",
        "Appointment Management"
      ],
      "description": "Salon Booking Management System can book their appointments easily. You can book Appointments with your favorite Agent. Cash By hand, Stripe and PayPal Payment Method Added.",
      "status": "Available",
      "slug": "zyial-salon-booking-management-system",
      "image": "https://ufg-lab-roan.vercel.app/projects/salon-business-350x184.png"
    },
    {
      "title": "HeyText – Bulk SMS Application For Marketing",
      "category": "ERP & CRM",
      "tags": [
        "ERP & CRM",
        "Digital Marketing",
        "Bulk SMS",
        "Marketing Automation"
      ],
      "description": "This is a powerful, flexible, and User-friendly Bulk SMS Marketing Application. It's also an all-in-one solution for your SMS marketing. It's easy to use.",
      "status": "Available",
      "slug": "heytext-bulk-sms-application-marketing",
      "image": "https://ufg-lab-roan.vercel.app/projects/bulk-sms-banner-350x165.jpg"
    },
    {
      "title": "Delivery Dart – Bulk Email And SMS Marketing Software",
      "category": "ERP & CRM",
      "tags": [
        "ERP & CRM",
        "Email Marketing",
        "SMS Marketing",
        "Bulk Marketing"
      ],
      "description": "Complete bulk email and SMS marketing software with client management, campaign builder, and comprehensive reporting features.",
      "status": "Available",
      "slug": "delivery-dart-bulk-email-sms-marketing-software",
      "image": "https://ufg-lab-roan.vercel.app/projects/sms-app-350x197.png"
    }
  ];

  return (
    <OptimizedIndustryPage 
      projects={projects} 
      basePath="/erp-crm"
      title="ERP & CRM Solutions"
      description="Enterprise Resource Planning and Customer Relationship Management systems that integrate core business processes and customer data management."
    />
  );
};

export default ErpCrm;