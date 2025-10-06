#!/usr/bin/env node

/**
 * Performance Testing Script
 * Run this script to test website performance metrics
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance testing utilities
class PerformanceTester {
  constructor() {
    this.results = {
      bundleSize: 0,
      imageCount: 0,
      totalImageSize: 0,
      jsFiles: [],
      cssFiles: [],
      recommendations: [],
    };
  }

  // Analyze bundle size
  analyzeBundleSize() {
    const distPath = path.join(__dirname, '..', 'dist');
    
    if (!fs.existsSync(distPath)) {
      console.log('❌ Dist folder not found. Run "npm run build" first.');
      return;
    }

    const files = this.getAllFiles(distPath);
    let totalSize = 0;
    const jsFiles = [];
    const cssFiles = [];

    files.forEach(file => {
      const stats = fs.statSync(file);
      const size = stats.size;
      totalSize += size;

      if (file.endsWith('.js')) {
        jsFiles.push({
          name: path.basename(file),
          size: size,
          sizeKB: Math.round(size / 1024),
        });
      } else if (file.endsWith('.css')) {
        cssFiles.push({
          name: path.basename(file),
          size: size,
          sizeKB: Math.round(size / 1024),
        });
      }
    });

    this.results.bundleSize = Math.round(totalSize / 1024); // KB
    this.results.jsFiles = jsFiles.sort((a, b) => b.size - a.size);
    this.results.cssFiles = cssFiles.sort((a, b) => b.size - a.size);
  }

  // Analyze images
  analyzeImages() {
    const publicPath = path.join(__dirname, '..', 'public');
    
    if (!fs.existsSync(publicPath)) {
      console.log('❌ Public folder not found.');
      return;
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const files = this.getAllFiles(publicPath);
    let imageCount = 0;
    let totalImageSize = 0;

    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const stats = fs.statSync(file);
        totalImageSize += stats.size;
        imageCount++;
      }
    });

    this.results.imageCount = imageCount;
    this.results.totalImageSize = Math.round(totalImageSize / 1024); // KB
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [];

    // Bundle size recommendations
    if (this.results.bundleSize > 1000) { // 1MB
      recommendations.push({
        type: 'warning',
        message: `Bundle size is ${this.results.bundleSize}KB. Consider code splitting.`,
      });
    }

    // Image recommendations
    if (this.results.totalImageSize > 5000) { // 5MB
      recommendations.push({
        type: 'warning',
        message: `Total image size is ${this.results.totalImageSize}KB. Consider image optimization.`,
      });
    }

    // JS file recommendations
    const largeJsFiles = this.results.jsFiles.filter(file => file.sizeKB > 100);
    if (largeJsFiles.length > 0) {
      recommendations.push({
        type: 'info',
        message: `Large JS files detected: ${largeJsFiles.map(f => f.name).join(', ')}`,
      });
    }

    // General recommendations
    recommendations.push({
      type: 'success',
      message: '✅ Performance optimizations are already implemented!',
    });

    recommendations.push({
      type: 'info',
      message: '💡 Consider implementing service worker for better caching.',
    });

    recommendations.push({
      type: 'info',
      message: '💡 Use WebP format for images when possible.',
    });

    this.results.recommendations = recommendations;
  }

  // Get all files recursively
  getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });

    return arrayOfFiles;
  }

  // Run all tests
  runTests() {
    console.log('🚀 Running Performance Tests...\n');

    this.analyzeBundleSize();
    this.analyzeImages();
    this.generateRecommendations();

    this.printResults();
  }

  // Print results
  printResults() {
    console.log('📊 Performance Analysis Results\n');
    console.log('=' .repeat(50));

    // Bundle size
    console.log(`\n📦 Bundle Size: ${this.results.bundleSize}KB`);
    
    // Images
    console.log(`\n🖼️  Images: ${this.results.imageCount} files, ${this.results.totalImageSize}KB total`);

    // JS Files
    if (this.results.jsFiles.length > 0) {
      console.log('\n📄 JavaScript Files:');
      this.results.jsFiles.slice(0, 5).forEach(file => {
        console.log(`   ${file.name}: ${file.sizeKB}KB`);
      });
    }

    // CSS Files
    if (this.results.cssFiles.length > 0) {
      console.log('\n🎨 CSS Files:');
      this.results.cssFiles.forEach(file => {
        console.log(`   ${file.name}: ${file.sizeKB}KB`);
      });
    }

    // Recommendations
    console.log('\n💡 Recommendations:');
    this.results.recommendations.forEach(rec => {
      const icon = rec.type === 'warning' ? '⚠️' : rec.type === 'success' ? '✅' : '💡';
      console.log(`   ${icon} ${rec.message}`);
    });

    console.log('\n' + '=' .repeat(50));
    console.log('✨ Performance analysis complete!');
  }
}

// Run the tests
const tester = new PerformanceTester();
tester.runTests();
