import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Store original scroll behavior
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const originalHtmlScrollBehavior = htmlElement.style.scrollBehavior;
    const originalBodyScrollBehavior = bodyElement.style.scrollBehavior;
    
    // Disable smooth scrolling temporarily
    htmlElement.style.scrollBehavior = 'auto';
    bodyElement.style.scrollBehavior = 'auto';
    
    // Force scroll to top with multiple methods
    const forceScrollToTop = () => {
      // Method 1: window.scrollTo with instant behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Method 2: Direct property setting
      htmlElement.scrollTop = 0;
      htmlElement.scrollLeft = 0;
      bodyElement.scrollTop = 0;
      bodyElement.scrollLeft = 0;
      
      // Method 3: Try scrolling the main container
      const appRoot = document.getElementById('app-root');
      if (appRoot) {
        appRoot.scrollTop = 0;
        appRoot.scrollLeft = 0;
      }
      
      // Method 4: Try scrolling the main element
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
        mainElement.scrollLeft = 0;
      }
      
      // Method 5: Force scroll on any scrollable elements
      const scrollableElements = document.querySelectorAll('*');
      scrollableElements.forEach(el => {
        if (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) {
          el.scrollTop = 0;
          el.scrollLeft = 0;
        }
      });
    };

    // Execute immediately
    forceScrollToTop();
    
    // Execute with delays to handle async rendering
    const timers = [
      setTimeout(forceScrollToTop, 0),
      setTimeout(forceScrollToTop, 10),
      setTimeout(forceScrollToTop, 50),
      setTimeout(forceScrollToTop, 100),
      setTimeout(forceScrollToTop, 200)
    ];
    
    // Restore original scroll behavior after all attempts
    const restoreTimer = setTimeout(() => {
      htmlElement.style.scrollBehavior = originalHtmlScrollBehavior;
      bodyElement.style.scrollBehavior = originalBodyScrollBehavior;
    }, 300);
    
    return () => {
      // Cleanup all timers
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(restoreTimer);
      
      // Restore original scroll behavior
      htmlElement.style.scrollBehavior = originalHtmlScrollBehavior;
      bodyElement.style.scrollBehavior = originalBodyScrollBehavior;
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
