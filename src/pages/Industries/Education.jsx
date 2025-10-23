import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "LMS - Learning Management System",
    "category": "Education",
    "tags": [
      "LMS",
      "E-learning",
      "Online Courses"
    ],
    "description": "A comprehensive Learning Management System with course creation, student management, progress tracking, and assessment tools for educational institutions.",
    "status": "Available",
    "price": "$2,000 – $4,500",
    "slug": "lms-learning-management-system",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Online Academy - Course Platform",
    "category": "Education",
    "tags": [
      "Online Academy",
      "Courses",
      "Video Learning"
    ],
    "description": "Complete online academy platform with video courses, quizzes, certificates, and student progress tracking for educational content creators.",
    "status": "Available",
    "price": "$1,800 – $3,500",
    "slug": "online-academy-course-platform",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "School Management System",
    "category": "Education",
    "tags": [
      "School Management",
      "Student Portal",
      "Administration"
    ],
    "description": "Complete school management solution with student enrollment, attendance tracking, grade management, and parent communication portal.",
    "status": "Available",
    "price": "$2,500 – $5,000",
    "slug": "school-management-system",
    "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Tutoring Platform - One-on-One Learning",
    "category": "Education",
    "tags": [
      "Tutoring",
      "Video Calls",
      "Scheduling"
    ],
    "description": "Online tutoring platform connecting students with tutors through video calls, scheduling system, and payment processing.",
    "status": "Available",
    "price": "$1,500 – $3,000",
    "slug": "tutoring-platform-one-on-one-learning",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "University Portal - Student Information System",
    "category": "Education",
    "tags": [
      "University",
      "Student Portal",
      "Information System"
    ],
    "description": "Comprehensive university portal with student registration, course enrollment, academic records, and faculty management system.",
    "status": "Available",
    "price": "$3,000 – $6,000",
    "slug": "university-portal-student-information-system",
    "image": "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center"
  },
  {
    "title": "Language Learning App - Duolingo Clone",
    "category": "Education",
    "tags": [
      "Language Learning",
      "Mobile App",
      "Gamification"
    ],
    "description": "Interactive language learning platform with gamified lessons, progress tracking, and multiple language support similar to Duolingo.",
    "status": "Available",
    "price": "$2,200 – $4,200",
    "slug": "language-learning-app-duolingo-clone",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center"
  }
];

export default function Education() {
  return (
    <OptimizedIndustryPage
      title="Education Solutions"
      description="Professional education services and solutions. Discover our verified and tested education projects ready for deployment."
      projects={projects}
      basePath="/education"
    />
  );
}
