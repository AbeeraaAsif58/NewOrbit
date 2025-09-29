import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import TalkBanner from '../../components/TalkBanner';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const scrollRoot = useRef(null);

  // Project data matching UFG LAB style
  const projects = {
    'sonicvox-text-to-speech-as-saas': {
      title: "SonicVox – Text to Speech as SaaS",
      category: "Artificial Intelligence",
      tags: ["SaaS", "Tools and Utilities", "AI", "Machine Learning"],
      description: "Machine learning and Deep learning based text-to-speech solution with advanced features and analytics",
      status: "1 Sale",
      slug: "sonicvox-text-to-speech-as-saas",
      image: "https://picsum.photos/800/600?random=1",
      heroImage: "https://picsum.photos/1200/600?random=1",
      overview: "SonicVox is a cutting-edge Text-to-Speech (TTS) SaaS platform that leverages advanced machine learning and deep learning algorithms to deliver natural, human-like voice synthesis. Our platform offers enterprise-grade solutions for businesses looking to integrate high-quality voice generation into their applications.",
      features: [
        "Support for over 144 languages and dialects",
        "Over 909 different voices and accents", 
        "Natural sounding voices using Neural TTS",
        "Integration with leading cloud service providers",
        "Real-time voice generation",
        "Custom voice training",
        "API Integration",
        "Analytics Dashboard"
      ],
      technologies: [
        "Python", "TensorFlow", "PyTorch", "React", "Node.js", 
        "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"
      ],
      pricing: "Starting from $99/month",
      demoUrl: "https://launch.enroles.com/71/public/",
      githubUrl: "https://github.com/sonicvox",
      liveUrl: "https://sonicvox.com"
    }
  };

  const project = projects[projectSlug];

  useEffect(() => {
    if (!project) {
      navigate('/artificial-intelligence');
      return;
    }

    // Initialize Locomotive Scroll
    const loco = new LocomotiveScroll({
      el: scrollRoot.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      class: "is-revealed",
    });

    // Proxy
    ScrollTrigger.scrollerProxy(scrollRoot.current, {
      scrollTop(value) {
        return arguments.length
          ? loco.scrollTo(value, { duration: 0, disableLerp: true })
          : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: innerWidth, height: innerHeight };
      },
      pinType: scrollRoot.current.style.transform ? "transform" : "fixed",
    });

    const onScroll = () => ScrollTrigger.update();
    loco.on("scroll", onScroll);
    ScrollTrigger.addEventListener("refresh", loco.update);

    // Animations
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.2
      });

      // Reveal animations
      gsap.utils.toArray("[data-reveal]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, scroller: scrollRoot.current, start: "top 90%" },
        });
      });
    });

    return () => {
      ctx.revert();
      loco.destroy();
    };
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen text-white selection:bg-orange-500/20">
      {/* Smooth scroll container */}
      <div data-scroll-container ref={scrollRoot}>
        
        {/* Hero Section - UFG LAB Style */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8" data-reveal>
              <nav className="flex items-center space-x-2 text-sm text-gray-400">
                <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
                <span>/</span>
                <a href="/artificial-intelligence" className="hover:text-orange-400 transition-colors">Artificial Intelligence</a>
                <span>/</span>
                <span className="text-white">{project.title}</span>
              </nav>
            </div>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div data-reveal>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                    {project.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                  {project.title}
                </h1>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Status and Pricing */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-400 font-medium">{project.status}</span>
                  </div>
                  <div className="text-gray-300">{project.pricing}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-300 text-center"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-colors duration-300 text-center"
                  >
                    Live Website
                  </a>
                </div>
              </div>
              
              <div data-reveal className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Project Overview
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  data-reveal
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-white font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Technologies Used
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3" data-reveal>
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 text-white font-medium rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of this solution and transform your business today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-300"
              >
                Try Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-orange-500 hover:text-orange-400 transition-colors duration-300"
              >
                View Source
              </a>
            </div>
          </div>
        </section>

        {/* Talk Banner */}
        <TalkBanner />
      </div>
    </div>
  );
};

export default ProjectDetail;
