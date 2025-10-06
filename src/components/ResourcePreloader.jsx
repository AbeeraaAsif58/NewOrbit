import React, { useEffect, useState } from 'react';

const ResourcePreloader = ({ 
  criticalImages = [],
  criticalScripts = [],
  onComplete = () => {},
  enabled = true 
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadedResources, setLoadedResources] = useState([]);

  useEffect(() => {
    if (!enabled) return;

    const preloadResources = async () => {
      const allResources = [...criticalImages, ...criticalScripts];
      const totalResources = allResources.length;
      let loadedCount = 0;

      const loadResource = (url) => {
        return new Promise((resolve, reject) => {
          const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
          const isScript = /\.(js)$/i.test(url);

          if (isImage) {
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setLoadedResources(prev => [...prev, url]);
              setLoadingProgress((loadedCount / totalResources) * 100);
              resolve(url);
            };
            img.onerror = () => {
              loadedCount++;
              setLoadingProgress((loadedCount / totalResources) * 100);
              reject(url);
            };
            img.src = url;
          } else if (isScript) {
            const script = document.createElement('script');
            script.onload = () => {
              loadedCount++;
              setLoadedResources(prev => [...prev, url]);
              setLoadingProgress((loadedCount / totalResources) * 100);
              resolve(url);
            };
            script.onerror = () => {
              loadedCount++;
              setLoadingProgress((loadedCount / totalResources) * 100);
              reject(url);
            };
            script.src = url;
            document.head.appendChild(script);
          } else {
            // For other resources, just count them as loaded
            loadedCount++;
            setLoadingProgress((loadedCount / totalResources) * 100);
            resolve(url);
          }
        });
      };

      try {
        await Promise.allSettled(allResources.map(loadResource));
        setIsComplete(true);
        onComplete();
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setIsComplete(true);
        onComplete();
      }
    };

    preloadResources();
  }, [criticalImages, criticalScripts, onComplete, enabled]);

  if (!enabled || isComplete) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        
        <div className="text-lg font-semibold mb-2">Loading Resources...</div>
        
        <div className="w-64 bg-gray-700 rounded-full h-2 mb-2">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        
        <div className="text-sm text-gray-400">
          {Math.round(loadingProgress)}% Complete
        </div>
        
        {loadedResources.length > 0 && (
          <div className="mt-4 text-xs text-gray-500 max-w-md">
            <div>Loaded: {loadedResources.length} resources</div>
            <div className="truncate">
              Latest: {loadedResources[loadedResources.length - 1]?.split('/').pop()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePreloader;

