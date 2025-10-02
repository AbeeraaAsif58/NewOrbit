// Performance optimization utilities

// Debounce function for scroll and resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for high-frequency events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport (for lazy loading)
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Preload critical images
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    })
  );
};

// Reduce motion for users who prefer it
export const respectsReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get optimal device pixel ratio
export const getOptimalDPR = () => {
  const dpr = window.devicePixelRatio || 1;
  // Cap DPR to reduce canvas load on high-DPI displays
  return Math.min(dpr, 2);
};

// Memory cleanup utility
export const cleanupAnimations = (animations) => {
  animations.forEach(animation => {
    if (animation && typeof animation.kill === 'function') {
      animation.kill();
    }
  });
};

// Check if device has limited resources
export const isLowEndDevice = () => {
  // Check for various indicators of low-end devices
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
  const limitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
  const limitedCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return slowConnection || limitedMemory || limitedCores;
};

// Adaptive quality settings based on device capabilities
export const getAdaptiveSettings = () => {
  const isLowEnd = isLowEndDevice();
  const prefersReducedMotion = respectsReducedMotion();
  
  return {
    // Animation settings
    enableHeavyAnimations: !isLowEnd && !prefersReducedMotion,
    animationDuration: prefersReducedMotion ? 0 : (isLowEnd ? 0.3 : 0.6),
    
    // Canvas settings
    nodeCount: isLowEnd ? 20 : 60,
    linkDistance: isLowEnd ? 80 : 100,
    frameRate: isLowEnd ? 20 : 30,
    
    // Image settings
    imageQuality: isLowEnd ? 'low' : 'high',
    enableLazyLoading: true,
    
    // General performance
    enableParallax: !isLowEnd,
    enableBlur: !isLowEnd,
    enableShadows: !isLowEnd
  };
};
