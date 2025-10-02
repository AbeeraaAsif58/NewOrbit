// Performance configuration for the entire application

export const PERFORMANCE_CONFIG = {
  // Animation settings
  ANIMATION: {
    REDUCED_MOTION: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    DEFAULT_DURATION: 0.3,
    HEAVY_DURATION: 0.6,
    EASING: 'power2.out',
    HEAVY_EASING: 'power3.out',
  },

  // Canvas/Background settings
  CANVAS: {
    MAX_NODES: 60,
    MIN_NODES: 20,
    MAX_LINK_DISTANCE: 100,
    MIN_LINK_DISTANCE: 80,
    TARGET_FPS: 30,
    MAX_DPR: 1.5,
  },

  // Image optimization
  IMAGES: {
    LAZY_LOADING: true,
    PRELOAD_CRITICAL: true,
    WEBP_SUPPORT: true,
    COMPRESSION_QUALITY: 0.8,
  },

  // Memory management
  MEMORY: {
    CLEANUP_INTERVAL: 30000, // 30 seconds
    MAX_CACHED_IMAGES: 50,
    GARBAGE_COLLECT_THRESHOLD: 100, // MB
  },

  // Device detection thresholds
  DEVICE: {
    LOW_END_MEMORY: 4, // GB
    LOW_END_CORES: 4,
    SLOW_CONNECTION_TYPES: ['slow-2g', '2g', '3g'],
  },

  // Feature flags based on performance
  FEATURES: {
    ENABLE_PARALLAX: true,
    ENABLE_BLUR_EFFECTS: true,
    ENABLE_SHADOWS: true,
    ENABLE_3D_TRANSFORMS: true,
    ENABLE_HEAVY_ANIMATIONS: true,
  }
};

// Dynamic performance adjustment based on device capabilities
export const getPerformanceConfig = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 4;
  
  const isLowEnd = memory < PERFORMANCE_CONFIG.DEVICE.LOW_END_MEMORY || 
                   cores < PERFORMANCE_CONFIG.DEVICE.LOW_END_CORES;
  
  const isSlowConnection = connection && 
    PERFORMANCE_CONFIG.DEVICE.SLOW_CONNECTION_TYPES.includes(connection.effectiveType);

  const shouldReducePerformance = isLowEnd || isSlowConnection || PERFORMANCE_CONFIG.ANIMATION.REDUCED_MOTION;

  return {
    ...PERFORMANCE_CONFIG,
    
    // Adjust canvas settings
    CANVAS: {
      ...PERFORMANCE_CONFIG.CANVAS,
      MAX_NODES: shouldReducePerformance ? PERFORMANCE_CONFIG.CANVAS.MIN_NODES : PERFORMANCE_CONFIG.CANVAS.MAX_NODES,
      MAX_LINK_DISTANCE: shouldReducePerformance ? PERFORMANCE_CONFIG.CANVAS.MIN_LINK_DISTANCE : PERFORMANCE_CONFIG.CANVAS.MAX_LINK_DISTANCE,
      TARGET_FPS: shouldReducePerformance ? 20 : PERFORMANCE_CONFIG.CANVAS.TARGET_FPS,
    },

    // Adjust animation settings
    ANIMATION: {
      ...PERFORMANCE_CONFIG.ANIMATION,
      DEFAULT_DURATION: shouldReducePerformance ? 0.2 : PERFORMANCE_CONFIG.ANIMATION.DEFAULT_DURATION,
      HEAVY_DURATION: shouldReducePerformance ? 0.3 : PERFORMANCE_CONFIG.ANIMATION.HEAVY_DURATION,
    },

    // Adjust features
    FEATURES: {
      ...PERFORMANCE_CONFIG.FEATURES,
      ENABLE_PARALLAX: !shouldReducePerformance,
      ENABLE_BLUR_EFFECTS: !shouldReducePerformance,
      ENABLE_SHADOWS: !shouldReducePerformance,
      ENABLE_3D_TRANSFORMS: !shouldReducePerformance,
      ENABLE_HEAVY_ANIMATIONS: !shouldReducePerformance,
    }
  };
};

// Performance monitoring utilities
export const performanceMonitor = {
  startTime: performance.now(),
  
  // Measure component render time
  measureRender: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    
    if (end - start > 16) { // More than one frame at 60fps
      console.warn(`${componentName} render took ${(end - start).toFixed(2)}ms`);
    }
    
    return result;
  },

  // Memory usage tracking
  getMemoryUsage: () => {
    if (performance.memory) {
      return {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576),
        total: Math.round(performance.memory.totalJSHeapSize / 1048576),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576),
      };
    }
    return null;
  },

  // FPS monitoring
  measureFPS: (callback) => {
    let frames = 0;
    let startTime = performance.now();
    
    const measure = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= startTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - startTime));
        callback(fps);
        frames = 0;
        startTime = currentTime;
      }
      
      requestAnimationFrame(measure);
    };
    
    requestAnimationFrame(measure);
  }
};
