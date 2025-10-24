import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "Healthy Web – Hospital Management System",
    "category": "Healthcare",
    "tags": [
      "Healthcare",
      "Hospital Management",
      "ERP & CRM",
      "Medical System"
    ],
    "description": "The best and number one Hospital Management System Software with Website. It has 40+ Features what you need to manage Hospital. Here has Insurance, Modern Billing System and SMS Gateway also.",
    "status": "Available",
    "slug": "healthy-web-hospital-management-system",
    "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Phroma – Pharmacy Management System",
    "category": "Healthcare",
    "tags": [
      "Healthcare",
      "Pharmacy Management",
      "ERP & CRM",
      "Medical Store"
    ],
    "description": "It is designed and developed for pharmacy, medicine stores, departmental stores and medicine shop. Handle all of your pharmacy data easily. Here you can handle all of your pharmacy account management, invoice create, user and data analysis, stock management, store management, purchase history, income history, pos and many more.",
    "status": "Available",
    "slug": "phroma-pharmacy-management-system",
    "image": "https://images.unsplash.com/photo-1587854692152-cbe660db9348?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Doctor Corps- Hospital Management System",
    "category": "Healthcare",
    "tags": [
      "Healthcare",
      "Hospital Management",
      "ERP & CRM",
      "Medical Center"
    ],
    "description": "Hospital Management System is the most complete and multi-functional hospital or medical center management system. It collaborates admin, patients, doctors, nurses, laboratorists, pharmacists, receptionist, accountants so that all the paperworks and manual tiresome works can be automated easily and efficiently.",
    "status": "Available",
    "slug": "doctor-corps-hospital-management-system",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Hospitalcore – Complete SAAS Hospital management system",
    "category": "Healthcare",
    "tags": [
      "Healthcare",
      "SAAS",
      "Hospital Management",
      "B2B"
    ],
    "description": "Complete SAAS Business of Hospital Management Software Platform for all hospitals in a community. Different hospitals owned by different people can be managed by our single application. Create an account for a hospital and give the login details to that hospital. thats it!",
    "status": "Available",
    "slug": "hospitalcore-complete-saas-hospital-management-system",
    "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "All Healed – Diagnostic/Pathology lab Management System",
    "category": "Healthcare",
    "tags": [
      "Healthcare",
      "Diagnostic",
      "Pathology Lab",
      "ERP & CRM"
    ],
    "description": "This is a secured, modern and responsive diagnostic billing and doctor appointment management system. It is developed by PHP and CodeIgniter framework. It is designed and developed by thinking of diagnostics and online doctor appointments. The complete diagnostic management automation web application with website.",
    "status": "Available",
    "slug": "all-healed-diagnostic-pathology-lab-management-system",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba0ef8d?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Hospiva- Hospital Management System",
    "category": "Healthcare",
    "tags": [
      "Healthcare",
      "Hospital Management",
      "ERP & CRM",
      "Patient Management"
    ],
    "description": "Hospital management system is online patient management and Appointment, Scheduler application software for getting an appointment very easily over the internet. This application is built upon PHP with Codeigniter Framework Hospital can take the online patient appointment and patient can take doctor schedule from anywhere in the world.",
    "status": "Available",
    "slug": "hospiva-hospital-management-system",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center"
  }
];

export default function Healthcare() {
  return (
    <OptimizedIndustryPage
      title="Healthcare Solutions"
      description="Professional healthcare services and solutions. Discover our verified and tested healthcare projects ready for deployment."
      projects={projects}
      basePath="/healthcare"
    />
  );
}

