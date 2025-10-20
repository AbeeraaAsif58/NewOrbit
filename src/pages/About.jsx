import React, { Suspense, lazy } from 'react';

// Lazy load heavy sections to improve initial load performance
const AboutComponent = lazy(() => import('../components/About'));
const TalkBanner = lazy(() => import('../components/TalkBanner'));
const FooterOrbitMoonTech = lazy(() => import('../components/FooterOrbit'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[160px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Existing rich content */}
      <Suspense fallback={<LoadingFallback />}>
        <AboutComponent />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TalkBanner />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FooterOrbitMoonTech />
      </Suspense>
    </div>
  );
};

export default About;