#!/usr/bin/env node

/**
 * Script to add FooterOrbit to all industry pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const industriesDir = path.join(__dirname, '..', 'src', 'pages', 'Industries');

// List of industry files to update
const industryFiles = [
  'AIStartup.jsx',
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
  'ProjectDetail.jsx',
  'SEOAgency.jsx',
  'StartupAgency.jsx',
  'VideoProduction.jsx',
  'WebDesignAgency.jsx'
];

function updateIndustryFile(fileName) {
  const filePath = path.join(industriesDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${fileName}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if FooterOrbit is already imported
  if (content.includes('import FooterOrbit')) {
    console.log(`✅ ${fileName} already has FooterOrbit`);
    return;
  }

  // Add FooterOrbit import after TalkBanner import
  if (content.includes('import TalkBanner')) {
    content = content.replace(
      /import TalkBanner from "\.\.\/\.\.\/components\/TalkBanner";/,
      'import TalkBanner from "../../components/TalkBanner";\nimport FooterOrbit from "../../components/FooterOrbit";'
    );
  }

  // Update the main return statement to include flex layout and footer
  // Pattern 1: Standard industry page structure
  const pattern1 = /return \(\s*<div className="min-h-screen[^"]*">\s*{.*?}<div data-scroll-container ref={scrollRoot}>\s*(.*?)\s*<\/div>\s*<\/div>\s*\);/s;
  
  if (pattern1.test(content)) {
    content = content.replace(
      pattern1,
      (match, innerContent) => {
        return `return (
    <div className="min-h-screen flex flex-col text-white selection:bg-orange-500/20">
      {/* Smooth scroll container */}
      <div data-scroll-container ref={scrollRoot} className="flex-1">
        ${innerContent.trim()}
      </div>
      
      {/* Footer */}
      <FooterOrbit />
    </div>
  );`;
      }
    );
  }

  // Pattern 2: Different structure variations
  const pattern2 = /return \(\s*<div className="min-h-screen[^"]*">\s*(.*?)\s*<\/div>\s*\);/s;
  
  if (pattern2.test(content) && !content.includes('flex flex-col')) {
    content = content.replace(
      pattern2,
      (match, innerContent) => {
        return `return (
    <div className="min-h-screen flex flex-col text-white selection:bg-orange-500/20">
      ${innerContent.trim()}
      
      {/* Footer */}
      <FooterOrbit />
    </div>
  );`;
      }
    );
  }

  // Write the updated content
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated ${fileName}`);
}

// Update all industry files
console.log('🚀 Adding FooterOrbit to all industry pages...\n');

industryFiles.forEach(fileName => {
  updateIndustryFile(fileName);
});

console.log('\n✨ All industry pages updated!');

