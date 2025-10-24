import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TalkBanner from "../components/TalkBanner";
import FooterOrbitMoonTech from "../components/FooterOrbit";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const projectsRef = useRef([]);

  // Projects Data
  const projects = [
    {
      id: 1,
      name: "Roots Wall",
      description: "Send, receive, deposit, request, invest and exchange money globally in multiple currencies easily, quickly and safely with great rates and low fees.",
      category: "Fintech",
      tags: ["Government", "Exchange", "Cash"],
      image: "/pro1.avif",
      url: "https://rootswall.com/"
    },
    {
      id: 2,
      name: "CareCash",
      description: "Next-gen financial and banking facilities featuring mortgages, lending/borrowing, and residency via investment.",
      category: "Banking",
      tags: ["Mortgage", "Investment"],
      image: "/pro2.avif",
      url: "https://www.cashcare.co/"
    },
    {
      id: 3,
      name: "Gamiverz",
      description: "Gamers and developers can transact to trade in-game assets while building a diverse gaming community.",
      category: "Gaming",
      tags: ["NFT", "Community"],
      image: "/pro3.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 4,
      name: "Ticks 'n Travel",
      description: "Merging the best of what the world offers for the discerning traveler. For leisure and business travel stays, air travel and charter flights",
      category: "Travel",
      tags: ["Booking", "Luxury"],
      image: "/pro4.avif",
      url: "https://ticksntravel.com/"
    },
    {
      id: 5,
      name: "Redchange",
      description: "A personified crypto trading experience for enthusiasts and novices, with an intuitive user interface and expanded coin listings.",
      category: "Crypto",
      tags: ["Trading", "Finance"],
      image: "/pro5.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 6,
      name: "WellPlex",
      description: "Bringing together healthcare professionals, hospitals and patients on one platform, with private, trackable health records and progress updates.",
      category: "Healthcare",
      tags: ["Records", "Privacy"],
      image: "/pro6.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 7,
      name: "Chain Homes",
      description: "Disrupting traditional real estate, using next-gen solutions to list and invest in properties, transacting directly with the owner.",
      category: "Real Estate",
      tags: ["Investment", "Blockchain"],
      image: "/pro7.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 8,
      name: "Insurizen",
      description: "Streamline and secure private insurance records across motor, home, health and travel insurance, centralizing policies, incident reports and claims.",
      category: "Insurance",
      tags: ["Claims", "Security"],
      image: "/pro8.webp",
      url: "https://orbitwalls.com"
    },
    {
      id: 9,
      name: "Coin Pulse",
      description: "A luxury experience through specialized ATM kiosks globally, allowing users to convert between fiat and crypto, and debit/credit cards.",
      category: "ATM",
      tags: ["Crypto", "Payments"],
      image: "/pro9.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 10,
      name: "Novasset",
      description: "Enabling individuals and businesses to manage multiple investments and portfolios, with the highest data security and investment opportunities.",
      category: "Investment",
      tags: ["Portfolio", "Security"],
      image: "/pro10.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 11,
      name: "Excluvio",
      description: "Premium services, experiences and amenities ranging from entertainment, exclusive networking events, social events, F & B and more.",
      category: "Luxury",
      tags: ["Events", "Networking"],
      image: "/pro12.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 12,
      name: "Coin Bazaar",
      description: "Changing the online shopping experience for shoppers and merchants, eliminating payment fraud, data breaches and exorbitant transaction fees.",
      category: "E-commerce",
      tags: ["Payments", "Security"],
      image: "/pro13.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 13,
      name: "Lotto Luck",
      description: "Raise the stakes the next-gen way. Purchase lotto's and win jackpots, and interact with other players.",
      category: "Lottery",
      tags: ["Gaming", "Blockchain"],
      image: "/pro14.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 14,
      name: "ZonNFT",
      description: "Gives the power back to artists together with a vibrant community of investors and collectors, where creators will be incentivized ethically.",
      category: "NFT",
      tags: ["Art", "Community"],
      image: "/pro15.avif",
      url: "https://orbitwalls.com"
    },
    {
      id: 15,
      name: "Bond Vortex",
      description: "Inclusivity and efficiency through crypto bonds, enabling governments, corporations and institutions to raise capital.",
      category: "Bonds",
      tags: ["Investment", "Institution"],
      image: "/pro16.avif",
      url: "https://orbitwalls.com"
    }
  ];

  // Performance optimization: Memoize projects data
  const memoizedProjects = useMemo(() => projects, []);
  
  // State management with performance optimization
  const [visibleCards, setVisibleCards] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Optimized button handler with debouncing
  const buttonhandle = useCallback(() => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards(prev => prev === 6 ? 15 : 6);
      setIsLoading(false);
    }, 300);
  }, [isLoading]);

  // Memoized visible projects to prevent unnecessary recalculations
  const visibleProjects = useMemo(() => memoizedProjects.slice(0, visibleCards), [memoizedProjects, visibleCards]);

  // Optimized entrance animation with reduced complexity
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8, // Reduced duration for faster loading
        ease: "power2.out", // Simpler easing for better performance
      });
    });
    return () => ctx.revert();
  }, []);

  // Optimized projects reveal animation with intersection observer
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate visible projects to improve performance
      visibleProjects.forEach((_, i) => {
        const el = projectsRef.current[i];
        if (!el) return;
        
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 }, // Reduced movement for smoother animation
          {
            y: 0,
            opacity: 1,
            duration: 0.6, // Faster animation
            ease: "power2.out",
            delay: i * 0.05, // Reduced delay for faster loading
            scrollTrigger: { 
              trigger: el, 
              start: "top 90%", // Earlier trigger for better UX
              toggleActions: "play none none reverse" // Optimized trigger actions
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, [visibleProjects]); // Re-run when visible projects change


  return (
    <div className="min-h-screen">
      <div ref={containerRef} className="flex flex-col h-auto">
        {/* Hero Section */}
        <section className="py-20 min-h-screen relative overflow-hidden">
          {/* Starfield provided globally */}

          {/* Animated Background Elements - Optimized for Performance */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Reduced floating elements for better performance */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-white/80 rounded-full opacity-40"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
            
            {/* Simplified orbital rings - reduced count */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-teal-700/30 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 border border-teal-600/25 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
            
            {/* Single central orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-teal-800/20 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          </div>

          {/* Simplified Ambient Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
              style={{
                background: "radial-gradient(closest-side, rgba(12,242,93,.25), rgba(37,99,235,0))",
                mixBlendMode: "screen",
              }}
            />
            <div 
              className="absolute right-1/4 bottom-1/3 translate-x-1/2 translate-y-1/2 w-[250px] h-[250px] rounded-full blur-3xl opacity-10"
              style={{
                background: "radial-gradient(closest-side, rgba(255,255,255,.18), rgba(255,255,255,0))",
                mixBlendMode: "screen",
              }}
            />
          </div>

          <div className="w-full relative z-10 px-4 sm:px-8 md:px-12 lg:px-16">
            {/* Hero Content */}
            <div className="mb-12 sm:mb-16 min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight text-white animate-text-grow">
              Transforming the Digital Future — One Project at a Time.
            </h1>
              <div className="mt-6 sm:mt-8 mb-16 sm:mb-24 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.18em] font-semibold uppercase text-gray-400">
                  
                  </div>

                </div>
                <div className="md:col-span-12 text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed text-center max-w-3xl mx-auto animate-text-grow">
                  Explore our portfolio of successful projects and digital transformations.
                </div>
          </div>
        </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-16 sm:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white">
              Our Projects
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70">
              Discover our innovative blockchain solutions transforming various industries
            </p>
          </div>

          {/* Projects Grid - Optimized with lazy loading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectsRef.current[index] = el)}
                className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/70 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden"
              >
                <div className="relative mb-6">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    loading="lazy" // Lazy loading for better performance
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500"
                    decoding="async" // Async decoding for better performance
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-teal-500 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">
                    {project.category}
                  </span>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Project
                </button>
              </div>
            ))}
          </div>

          {/* Load More Button - Optimized */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={buttonhandle}
              disabled={isLoading}
              className="border-[1px] border-primary px-6 sm:px-8 md:px-[1.2em] py-3 sm:py-4 md:py-[1.2em] rounded-full bg-transparent text-white font-semibold hover:bg-secondary hover:border-secondary transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </span>
              ) : (
                visibleCards === 6 ? "View More Projects" : "View Less Projects"
              )}
            </button>
          </div>
        </section>


        {/* Client Testimonials */}
        <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Afzal Iqbal",
                role: "CEO, Bluestream Shipping Services",
                quote: "The team transformed our business with their innovative solutions. Their team's expertise and dedication were exceptional."
              },
              {
                name: "Mohammed Zulfekhar Altaf",
                role: "CTO, Recaz Chemicals",
                quote: "Working with the team was a game-changer. They delivered beyond our expectations and provided outstanding support."
              },
              {
                name: "Bathula Jaya Teja",
                role: "Founder, Yrall Media",
                quote: "The team's attention to detail and technical expertise helped us launch our product ahead of schedule."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (projectsRef.current[projects.length + index] = el)}
                className="relative bg-gradient-to-br from-teal-900/60 to-teal-800/80 border border-teal-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-2xl shadow-lg">"</div>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-teal-600" />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - Updated Theme Colors */}
        <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 border border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-16 h-16 border border-primary rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/60 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 hover:text-primary transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(12,242,93,0.4)] cursor-pointer">
                  Ready to Launch Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital</span> <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Journey?</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join the cosmic revolution and let Orbit propel your business into the digital stratosphere. Our stellar team is ready to make your vision a reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-cyan-600 hover:to-blue-700">
                    <span className="group-hover:tracking-wider transition-all duration-300">Start Your Mission</span>
                  </button>
                  <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-transparent border-2 border-primary text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <TalkBanner />
      <FooterOrbitMoonTech />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(Projects);

