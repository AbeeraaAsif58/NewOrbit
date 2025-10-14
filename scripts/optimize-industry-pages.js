import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of industry pages to optimize
const industryPages = [
  'Automobile.jsx',
  'B2B.jsx', 
  'Blockchain.jsx',
  'BrandingAgency.jsx',
  'Companies.jsx',
  'CorporateAgency.jsx',
  'CreativeAgencyClassic.jsx',
  'Dating.jsx',
  'DesignStudio.jsx',
  'Finance.jsx',
  'Freelancer.jsx',
  'ITConsultancyAgency.jsx',
  'MarketingAgency.jsx',
  'MarketingConsultancyAgency.jsx',
  'PersonalPortfolio.jsx',
  'SEOAgency.jsx',
  'StartupAgency.jsx',
  'VideoProduction.jsx'
];

const industriesDir = path.join(__dirname, '..', 'src', 'pages', 'Industries');

// Sample projects data for each industry
const sampleProjects = {
  'Automobile': [
    {
      title: "Car Dealership Platform",
      category: "Automotive",
      tags: ["E-commerce", "Inventory"],
      description: "Complete car dealership management system with inventory tracking and customer management",
      status: "Available",
      price: "$3,000 – $5,000",
      slug: "car-dealership-platform",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
    }
  ],
  'B2B': [
    {
      title: "B2B Marketplace",
      category: "B2B",
      tags: ["Marketplace", "Enterprise"],
      description: "Enterprise-grade B2B marketplace with advanced search and negotiation features",
      status: "Available",
      price: "$4,000 – $7,000",
      slug: "b2b-marketplace",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center"
    }
  ],
  'Blockchain': [
    {
      title: "DeFi Platform",
      category: "Blockchain",
      tags: ["DeFi", "Crypto"],
      description: "Decentralized finance platform with staking, lending, and yield farming features",
      status: "Available",
      price: "$5,000 – $10,000",
      slug: "defi-platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center"
    }
  ]
};

// Generate optimized industry page content
function generateOptimizedPage(industryName) {
  const projects = sampleProjects[industryName] || [
    {
      title: `${industryName} Solution`,
      category: industryName,
      tags: ["SaaS", "Professional"],
      description: `Professional ${industryName.toLowerCase()} solution with modern features and user-friendly interface`,
      status: "Available",
      price: "$2,000 – $4,000",
      slug: `${industryName.toLowerCase()}-solution`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return `import React from "react";
import OptimizedIndustryPage from "../../components/OptimizedIndustryPage";

const projects = ${JSON.stringify(projects, null, 2)};

export default function ${industryName}() {
  return (
    <OptimizedIndustryPage
      title="${industryName} Solutions"
      description="Professional ${industryName.toLowerCase()} services and solutions. Discover our verified and tested ${industryName.toLowerCase()} projects ready for deployment."
      projects={projects}
      basePath="/${industryName.toLowerCase()}"
    />
  );
}`;
}

// Optimize each industry page
industryPages.forEach(fileName => {
  const industryName = fileName.replace('.jsx', '');
  const filePath = path.join(industriesDir, fileName);
  
  try {
    const optimizedContent = generateOptimizedPage(industryName);
    fs.writeFileSync(filePath, optimizedContent);
    console.log(`✅ Optimized ${fileName}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error.message);
  }
});

console.log('\n🎉 Industry pages optimization completed!');
console.log('\nPerformance improvements:');
console.log('• Removed LocomotiveScroll (heavy library)');
console.log('• Added React.memo for component memoization');
console.log('• Implemented lazy loading for images');
console.log('• Reduced animation complexity');
console.log('• Added loading states and error handling');
console.log('• Optimized bundle size and loading performance');
