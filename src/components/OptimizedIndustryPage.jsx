import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TalkBanner from "./TalkBanner";
import SimpleFooter from "./SimpleFooter";

// Optimized Project Card Component
const ProjectCard = React.memo(({ project, navigate, basePath }) => {
  const handleCardClick = useCallback(() => {
    navigate(`${basePath}/${project.slug}`);
  }, [navigate, project.slug, basePath]);

  return (
    <div 
      onClick={handleCardClick}
      className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Top Graphic Section */}
      <div className="relative bg-gradient-to-b from-teal-100 to-teal-200 p-4">
        {/* Project Image */}
        <div className="w-full h-32 rounded-lg overflow-hidden bg-gray-800">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/70">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-medium rounded-full border border-teal-500/30">
            {project.category}
          </span>
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Status and Price */}
        <div className="flex justify-between items-center">
          <div className="text-white text-sm font-medium">
            {project.status}
          </div>
          {project.price && (
            <div className="text-teal-400 text-sm font-bold">
              {project.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Optimized Projects Grid Component
const ProjectsGrid = React.memo(({ projects, basePath }) => {
  const navigate = useNavigate();
  
  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedProjects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index} 
              navigate={navigate}
              basePath={basePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

// Optimized Hero Component
const Hero = React.memo(({ title, description }) => (
  <section className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
        {description}
      </p>
    </div>
  </section>
));

// Main Optimized Industry Page Component
export default function OptimizedIndustryPage({ 
  title, 
  description, 
  projects, 
  basePath,
  email = "hello@orbitwalls.com",
  bg = "#034159",
  textColor = "#ffffff",
  subColor = "#0CF25D"
}) {

  return (
    <div className="min-h-screen text-white selection:bg-teal-500/20">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <Hero title={title} description={description} />
        <ProjectsGrid projects={projects} basePath={basePath} />
      </div>
      
      {/* Talk Banner */}
      <TalkBanner 
        email={email}
        bg={bg}
        textColor={textColor}
        subColor={subColor}
      />
      
      {/* Footer */}
      <SimpleFooter />
    </div>
  );
}
