import React from 'react';
import Navigation from '../components/Navigation';
import AboutComponent from '../components/About';
import TalkBanner from '../components/TalkBanner';
import FooterOrbitMoonTech from '../components/FooterOrbit';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Existing rich content */}
      <AboutComponent />
      <TalkBanner />
      <FooterOrbitMoonTech />
    </div>
  );
};

export default About;