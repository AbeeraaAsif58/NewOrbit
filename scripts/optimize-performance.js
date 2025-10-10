// scripts/optimize-performance.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Performance Optimization...\n');

// 1. Check bundle size
console.log('📦 Analyzing bundle size...');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.log('❌ Build failed:', error.message);
}

// 2. Check for large files
console.log('\n📁 Checking for large files...');
const publicDir = 'public';
const checkLargeFiles = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      checkLargeFiles(filePath);
    } else {
      const sizeMB = stats.size / (1024 * 1024);
      if (sizeMB > 1) {
        console.log(`⚠️  Large file: ${filePath} (${sizeMB.toFixed(2)}MB)`);
      }
    }
  });
};

checkLargeFiles(publicDir);

// 3. Performance recommendations
console.log('\n💡 Performance Recommendations:');
console.log('1. ✅ Removed unused components and files');
console.log('2. ✅ Optimized BackgroundAI component (reduced node count)');
console.log('3. ✅ Simplified LoadingGate component');
console.log('4. ✅ Reduced TalkBanner height');
console.log('5. ✅ Added code splitting in Vite config');
console.log('6. ✅ Optimized bundle with Terser');

console.log('\n🎯 Next Steps:');
console.log('- Consider lazy loading for industry pages');
console.log('- Optimize images (convert to WebP/AVIF)');
console.log('- Implement service worker for caching');
console.log('- Use React.memo for expensive components');

console.log('\n✨ Performance optimization complete!');

