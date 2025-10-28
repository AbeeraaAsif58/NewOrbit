import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = [
  {
    "title": "HeyText – Bulk SMS Application For Marketing",
    "category": "Digital Marketing",
    "tags": ["Bulk SMS", "Marketing", "SMS Gateway", "Campaign Management"],
    "description": "This is a powerful, flexible, and User-friendly Bulk SMS Marketing Application. It's also an all-in-one solution for your SMS marketing. It's easy to use.",
    "status": "Available",
    "slug": "heytext-bulk-sms-application-for-marketing",
    "image": "https://www.ufglab.com/projects/bulk-sms-banner-350x165.jpg"
  },
  {
    "title": "Order vCard – Portfolio/vCard Builder SAAS / Multi-User Profile",
    "category": "Digital Marketing",
    "tags": ["Portfolio Builder", "vCard", "SaaS", "Multi-User", "Profile Builder"],
    "description": "You can use this application to build a multiuser profile website. The business website is Multi-lingual & also RTL supported You can create unlimited monthly / yearly / lifetime packages, control features for that packages.",
    "status": "Available",
    "slug": "order-vcard-portfolio-vcard-builder-saas-multi-user-profile",
    "image": "https://www.ufglab.com/projects/vcard-banner-350x170.png"
  },
  {
    "title": "Sendnova – Bulk Email, SMS and WhatsApp Messaging Application",
    "category": "Digital Marketing",
    "tags": ["Bulk Email", "SMS", "WhatsApp", "Messaging", "Marketing"],
    "description": "The Web Application sends bulk Emails through SMTP, PHP Mailer, Send Grid API, and also sends mass SMS via Android device using SIM and SMS API Gateway. Also, You can send mass WhatsApp(QR/CloudAPI) messaging, SMS and Email as a promotional campaign or others.",
    "status": "Available",
    "slug": "sendnova-bulk-email-sms-and-whatsapp-messaging-application",
    "image": "https://www.ufglab.com/projects/Sendnova-banner-350x197.jpg"
  },
  {
    "title": "MailMill- Bulk Email Marketing Software Application",
    "category": "Digital Marketing",
    "tags": ["Bulk Email", "Email Marketing", "Laravel", "Open Source"],
    "description": "This is a self hosted, open-source, full-featured, and easy-to-use Email Marketing Web Application written in PHP / Laravel that lets you send high-volume marketing emails via your own server or through other email service (SMTP) providers.",
    "status": "Available",
    "slug": "mailmill-bulk-email-marketing-software-application",
    "image": "https://www.ufglab.com/projects/email-banner-350x201.png"
  },
  {
    "title": "Inboxer – Bulk Email Marketing SAAS Application",
    "category": "Digital Marketing",
    "tags": ["Bulk Email", "Email Marketing", "SAAS", "Email Service Provider"],
    "description": "Become an Email Service Provider for your customers, since this integrates easily with payment gateways and it offers all the needed tools to create pricing plans, promotional codes and to manage orders and transactions created by your customers.",
    "status": "Available",
    "slug": "inboxer-bulk-email-marketing-saas-application",
    "image": "https://www.ufglab.com/projects/email-mar-banner-350x197.jpg"
  },
  
  
  
];

export default function DigitalMarketing() {
  return (
    <OptimizedIndustryPage
      title="Digital Marketing Solutions"
      description="Marketing technology solutions for campaign management, analytics, SEO, social media marketing, and digital advertising."
      projects={projects}
      basePath="/digital-marketing"
    />
  );
}
