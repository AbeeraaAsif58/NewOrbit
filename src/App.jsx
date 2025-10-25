import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SidebarNavbar from "./components/SidebarNavbar";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BusinessPartners from "./pages/BusinessPartners";
import Cursor from "./components/Cursor";

// Lazy load industry pages for better performance
const ArtificialIntelligence = lazy(() => import("./pages/Industries/ArtificialIntelligence"));
const Automobile = lazy(() => import("./pages/Industries/Automobile"));
const Blockchain = lazy(() => import("./pages/Industries/Blockchain"));
const B2B = lazy(() => import("./pages/Industries/B2B"));
const Directory = lazy(() => import("./pages/Industries/Directory"));
const Matrimony = lazy(() => import("./pages/Industries/Matrimony"));
const NewsMedia = lazy(() => import("./pages/Industries/NewsMedia"));
const RealEstate = lazy(() => import("./pages/Industries/RealEstate"));
const Restaurant = lazy(() => import("./pages/Industries/Restaurant"));
const Ecommerce = lazy(() => import("./pages/Industries/Ecommerce"));
const Education = lazy(() => import("./pages/Industries/Education"));
const Entertainment = lazy(() => import("./pages/Industries/Entertainment"));
const Dating = lazy(() => import("./pages/Industries/Dating"));
const Finance = lazy(() => import("./pages/Industries/Finance"));
const Games = lazy(() => import("./pages/Industries/Games"));
const Grocery = lazy(() => import("./pages/Industries/Grocery"));
const Healthcare = lazy(() => import("./pages/Industries/Healthcare"));
const HumanResource = lazy(() => import("./pages/Industries/HumanResource"));
const ErpCrm = lazy(() => import("./pages/Industries/ErpCrm"));
const ToolsAndUtilities = lazy(() => import("./pages/Industries/ToolsAndUtilities"));
const BrandingAgency = lazy(() => import("./pages/Industries/BrandingAgency"));
const WebDesignAgency = lazy(() => import("./pages/Industries/WebDesignAgency"));
const SEOAgency = lazy(() => import("./pages/Industries/SEOAgency"));
const DesignStudio = lazy(() => import("./pages/Industries/DesignStudio"));
const VideoProduction = lazy(() => import("./pages/Industries/VideoProduction"));
const CreativeAgencyClassic = lazy(() => import("./pages/Industries/CreativeAgencyClassic"));
const MarketingAgency = lazy(() => import("./pages/Industries/MarketingAgency"));
const CorporateAgency = lazy(() => import("./pages/Industries/CorporateAgency"));
const StartupAgency = lazy(() => import("./pages/Industries/StartupAgency"));
const Freelancer = lazy(() => import("./pages/Industries/Freelancer"));
const Travel = lazy(() => import("./pages/Industries/Travel"));
const Social = lazy(() => import("./pages/Industries/Social"));
const SAAS = lazy(() => import("./pages/Industries/SAAS"));
const Fantasy = lazy(() => import("./pages/Industries/Fantasy"));
const MarketingConsultancyAgency = lazy(() => import("./pages/Industries/MarketingConsultancyAgency"));
const PersonalPortfolio = lazy(() => import("./pages/Industries/PersonalPortfolio"));
const ITConsultancyAgency = lazy(() => import("./pages/Industries/ITConsultancyAgency"));
const ProjectDetail = lazy(() => import("./pages/Industries/ProjectDetail"));


// import BackgroundAI from "./components/BackgroundAI";

export default function App() {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
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
          <SidebarNavbar />
        </header>

        <Cursor />
        
        {/* WhatsApp Button */}
        <WhatsAppButton />

        <main className="relative z-10 flex-1 px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 pt-20 sm:pt-24 md:pt-28">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div></div>}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/business-partners" element={<BusinessPartners />} />
            <Route path="/contact" element={<Contact />} />
            {/* Industry routes */}
            <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/artificial-intelligence/:projectSlug" element={<ProjectDetail />} />
            <Route path="/automobile" element={<Automobile />} />
            <Route path="/automobile/:projectSlug" element={<ProjectDetail />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/blockchain/:projectSlug" element={<ProjectDetail />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/b2b/:projectSlug" element={<ProjectDetail />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/directory/:projectSlug" element={<ProjectDetail />} />
            <Route path="/dating" element={<Dating />} />
            <Route path="/dating/:projectSlug" element={<ProjectDetail />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/ecommerce/:projectSlug" element={<ProjectDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/:projectSlug" element={<ProjectDetail />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/entertainment/:projectSlug" element={<ProjectDetail />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/finance/:projectSlug" element={<ProjectDetail />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:projectSlug" element={<ProjectDetail />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/grocery/:projectSlug" element={<ProjectDetail />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/healthcare/:projectSlug" element={<ProjectDetail />} />
            <Route path="/human-resource" element={<HumanResource />} />
            <Route path="/human-resource/:projectSlug" element={<ProjectDetail />} />
            <Route path="/erp-crm" element={<ErpCrm />} />
            <Route path="/erp-crm/:projectSlug" element={<ProjectDetail />} />
            <Route path="/tools-and-utilities" element={<ToolsAndUtilities />} />
            <Route path="/tools-and-utilities/:projectSlug" element={<ProjectDetail />} />
            <Route path="/matrimony" element={<Matrimony />} />
            <Route path="/matrimony/:projectSlug" element={<ProjectDetail />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/news-media/:projectSlug" element={<ProjectDetail />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/real-estate/:projectSlug" element={<ProjectDetail />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/restaurant/:projectSlug" element={<ProjectDetail />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/:projectSlug" element={<ProjectDetail />} />
            <Route path="/social" element={<Social />} />
            <Route path="/social/:projectSlug" element={<ProjectDetail />} />
            <Route path="/saas" element={<SAAS />} />
            <Route path="/saas/:projectSlug" element={<ProjectDetail />} />
            <Route path="/fantasy" element={<Fantasy />} />
            <Route path="/fantasy/:projectSlug" element={<ProjectDetail />} />
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
          </Suspense>
        </main>
        
           {/* Global footer (once) */}
        {/* <FooterOrbit /> */}
    
      </div>
      
    </>
  );
}
