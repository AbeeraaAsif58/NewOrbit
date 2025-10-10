import React, { useEffect, useState } from 'react';

const BundleAnalyzer = ({ enabled = false }) => {
  const [bundleInfo, setBundleInfo] = useState({
    totalSize: 0,
    chunkCount: 0,
    largestChunks: [],
    loadTime: 0,
  });

  useEffect(() => {
    if (!enabled) return;

    const analyzeBundle = () => {
      const startTime = performance.now();
      
      // Get resource timing information
      const resources = performance.getEntriesByType('resource');
      const scripts = resources.filter(resource => 
        resource.name.includes('.js') && 
        !resource.name.includes('node_modules')
      );

      const totalSize = scripts.reduce((total, script) => total + script.transferSize, 0);
      const chunkCount = scripts.length;
      
      const largestChunks = scripts
        .map(script => ({
          name: script.name.split('/').pop(),
          size: script.transferSize,
          loadTime: script.duration,
        }))
        .sort((a, b) => b.size - a.size)
        .slice(0, 5);

      const loadTime = performance.now() - startTime;

      setBundleInfo({
        totalSize: Math.round(totalSize / 1024), // Convert to KB
        chunkCount,
        largestChunks,
        loadTime: Math.round(loadTime),
      });
    };

    // Analyze after a short delay to ensure all resources are loaded
    const timeout = setTimeout(analyzeBundle, 1000);

    return () => clearTimeout(timeout);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-sm font-mono z-50 border border-gray-700 max-w-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-400">Bundle Analyzer</span>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span>Total Size:</span>
          <span className="text-green-400">{bundleInfo.totalSize}KB</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Chunks:</span>
          <span className="text-blue-400">{bundleInfo.chunkCount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Analysis:</span>
          <span className="text-purple-400">{bundleInfo.loadTime}ms</span>
        </div>
      </div>
      
      {bundleInfo.largestChunks.length > 0 && (
        <div className="mt-3 pt-2 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Largest Chunks:</div>
          <div className="space-y-1">
            {bundleInfo.largestChunks.map((chunk, index) => (
              <div key={index} className="flex justify-between items-center text-xs">
                <span className="truncate max-w-24">{chunk.name}</span>
                <span className="text-yellow-400">{Math.round(chunk.size / 1024)}KB</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BundleAnalyzer;

