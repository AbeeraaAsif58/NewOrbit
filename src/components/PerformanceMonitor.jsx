import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    imageLoadTime: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
    });

    // Monitor memory usage
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = performance.memory;
        setMetrics(prev => ({ 
          ...prev, 
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) 
        }));
      };
      
      updateMemoryUsage();
      const memoryInterval = setInterval(updateMemoryUsage, 5000);
      
      return () => clearInterval(memoryInterval);
    }

    // Monitor image loading performance
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;
    
    if (totalImages > 0) {
      const imageLoadStart = performance.now();
      
      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              const imageLoadTime = performance.now() - imageLoadStart;
              setMetrics(prev => ({ ...prev, imageLoadTime }));
            }
          });
        }
      });
      
      if (loadedImages === totalImages) {
        const imageLoadTime = performance.now() - imageLoadStart;
        setMetrics(prev => ({ ...prev, imageLoadTime }));
      }
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 backdrop-blur-sm">
      <div className="mb-2 font-bold text-green-400">Performance Monitor</div>
      <div>Load Time: <span className="text-yellow-400">{metrics.loadTime.toFixed(0)}ms</span></div>
      <div>Memory: <span className="text-blue-400">{metrics.memoryUsage}MB</span></div>
      <div>Images: <span className="text-purple-400">{metrics.imageLoadTime.toFixed(0)}ms</span></div>
      <div className="mt-2 text-green-300 text-[10px]">
        Optimized Industry Pages
      </div>
    </div>
  );
};

export default PerformanceMonitor;