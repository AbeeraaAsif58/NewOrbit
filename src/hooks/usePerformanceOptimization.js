import { useEffect, useRef, useCallback } from 'react';
import { throttle, debounce, requestIdleCallback, cancelIdleCallback } from '../utils/performance';

// Custom hook for performance optimizations
export const usePerformanceOptimization = (options = {}) => {
  const {
    enableThrottling = true,
    enableDebouncing = true,
    throttleDelay = 16, // ~60fps
    debounceDelay = 100,
    enableIdleCallback = true,
    enableMemoryCleanup = true,
  } = options;

  const cleanupFunctions = useRef([]);
  const idleCallbacks = useRef([]);

  // Memory cleanup utility
  const cleanupMemory = useCallback(() => {
    if (performance.memory && performance.memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
      // Force garbage collection if available
      if (window.gc) {
        window.gc();
      }
    }
  }, []);

  // Throttled scroll handler
  const useThrottledScroll = useCallback((callback, delay = throttleDelay) => {
    const throttledCallback = throttle(callback, delay);
    
    useEffect(() => {
      const handler = throttledCallback;
      window.addEventListener('scroll', handler, { passive: true });
      
      const cleanup = () => {
        window.removeEventListener('scroll', handler);
      };
      
      cleanupFunctions.current.push(cleanup);
      return cleanup;
    }, [throttledCallback]);
  }, [throttleDelay]);

  // Debounced resize handler
  const useDebouncedResize = useCallback((callback, delay = debounceDelay) => {
    const debouncedCallback = debounce(callback, delay);
    
    useEffect(() => {
      const handler = debouncedCallback;
      window.addEventListener('resize', handler, { passive: true });
      
      const cleanup = () => {
        window.removeEventListener('resize', handler);
      };
      
      cleanupFunctions.current.push(cleanup);
      return cleanup;
    }, [debouncedCallback]);
  }, [debounceDelay]);

  // Idle callback utility
  const useIdleCallback = useCallback((callback, options = {}) => {
    useEffect(() => {
      const id = requestIdleCallback(callback, options);
      idleCallbacks.current.push(id);
      
      return () => {
        cancelIdleCallback(id);
        const index = idleCallbacks.current.indexOf(id);
        if (index > -1) {
          idleCallbacks.current.splice(index, 1);
        }
      };
    }, [callback, options]);
  }, []);

  // Performance monitoring
  const usePerformanceMonitoring = useCallback((callback) => {
    useEffect(() => {
      let animationId;
      let lastTime = performance.now();
      let frameCount = 0;

      const measurePerformance = () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= lastTime + 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          const memory = performance.memory ? performance.memory.usedJSHeapSize / 1048576 : 0;
          
          callback({
            fps,
            memory: Math.round(memory),
            timestamp: currentTime,
          });
          
          frameCount = 0;
          lastTime = currentTime;
        }
        
        animationId = requestAnimationFrame(measurePerformance);
      };

      measurePerformance();

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }, [callback]);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clean up all registered cleanup functions
      cleanupFunctions.current.forEach(cleanup => cleanup());
      
      // Cancel all idle callbacks
      idleCallbacks.current.forEach(id => cancelIdleCallback(id));
      
      // Memory cleanup
      if (enableMemoryCleanup) {
        cleanupMemory();
      }
    };
  }, [enableMemoryCleanup, cleanupMemory]);

  // Periodic memory cleanup
  useEffect(() => {
    if (!enableMemoryCleanup) return;

    const interval = setInterval(cleanupMemory, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, [enableMemoryCleanup, cleanupMemory]);

  return {
    useThrottledScroll,
    useDebouncedResize,
    useIdleCallback,
    usePerformanceMonitoring,
    cleanupMemory,
  };
};

export default usePerformanceOptimization;

