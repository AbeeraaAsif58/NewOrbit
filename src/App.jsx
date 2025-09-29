import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";
// import FooterOrbit from "./components/FooterOrbit";
// Industry pages
import ArtificialIntelligence from "./pages/Industries/ArtificialIntelligence";
import Automobile from "./pages/Industries/Automobile";
import Blockchain from "./pages/Industries/Blockchain";
import B2B from "./pages/Industries/B2B";
import Companies from "./pages/Industries/Companies";
import Dating from "./pages/Industries/Dating";
import Finance from "./pages/Industries/Finance";
import BrandingAgency from "./pages/Industries/BrandingAgency";
import WebDesignAgency from "./pages/Industries/WebDesignAgency";
import SEOAgency from "./pages/Industries/SEOAgency";
import DesignStudio from "./pages/Industries/DesignStudio";
import VideoProduction from "./pages/Industries/VideoProduction";
import CreativeAgencyClassic from "./pages/Industries/CreativeAgencyClassic";
import MarketingAgency from "./pages/Industries/MarketingAgency";
import CorporateAgency from "./pages/Industries/CorporateAgency";
import StartupAgency from "./pages/Industries/StartupAgency";
import Freelancer from "./pages/Industries/Freelancer";
import MarketingConsultancyAgency from "./pages/Industries/MarketingConsultancyAgency";
import PersonalPortfolio from "./pages/Industries/PersonalPortfolio";
import ITConsultancyAgency from "./pages/Industries/ITConsultancyAgency";
import ProjectDetail from "./pages/Industries/ProjectDetail";


// import BackgroundAI from "./components/BackgroundAI";

export default function App() {
  return (
    <>
      {/* Agar stars use karna chahte ho aur wo bhi scroll hon,
          unki CSS me position: absolute kar dena (fixed ki jagah). */}

      <div id="app-root" className="relative min-h-screen flex flex-col">
        {/* Global starfield (once for all pages) */}
        <div className="pointer-events-none absolute inset-0 -z-[1]">
          <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />
        </div>
      
         {/* <BackgroundAI mode="scroll" nodeCount={140} linkDistance={140} cursorLinkDistance={190} />  */}

    
        <header className="">
          <Navbar />
        </header>

        <Cursor />

        <main className="relative z-[1] flex-1 container-px py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Industry routes */}
            <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/artificial-intelligence/:projectSlug" element={<ProjectDetail />} />
            <Route path="/automobile" element={<Automobile />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/dating" element={<Dating />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/branding-agency" element={<BrandingAgency />} />
            <Route path="/web-design-agency" element={<WebDesignAgency />} />
            <Route path="/seo-agency" element={<SEOAgency />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/video-production" element={<VideoProduction />} />
            <Route path="/creative-agency-classic" element={<CreativeAgencyClassic />} />
            <Route path="/marketing-agency" element={<MarketingAgency />} />
            <Route path="/corporate-agency" element={<CorporateAgency />} />
            <Route path="/startup-agency" element={<StartupAgency />} />
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/marketing-consultancy-agency" element={<MarketingConsultancyAgency />} />
            <Route path="/personal-portfolio" element={<PersonalPortfolio />} />
            <Route path="/it-consultancy-agency" element={<ITConsultancyAgency />} />
          </Routes>
        </main>
       
           {/* Global footer (once) */}
        {/* <FooterOrbit /> */}
    
      </div>
    </>
  );
}
