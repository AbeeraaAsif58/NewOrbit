import React from "react";
import TalkBanner from "../../components/TalkBanner";

const Dating = () => {
  const Hero = () => (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Dating & Matrimony Solutions
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Connect hearts and build meaningful relationships with our comprehensive dating and matrimony platform solutions.
        </p>
      </div>
    </div>
  );

  const ProjectsGrid = () => {
    const projects = [
      {
        slug: "futureshaadi-matrimony-platform",
        title: "Futureshaadi - Matrimony Platform",
        description: "Complete matrimony platform with advanced matching algorithms and secure communication features.",
        category: "Dating & Matrimony",
        status: "Live",
        tags: ["React", "Node.js", "MongoDB", "AI Matching"]
      },
      {
        slug: "loveconnect-dating-app",
        title: "LoveConnect - Dating App",
        description: "Modern dating application with video calls, location-based matching, and premium features.",
        category: "Dating & Matrimony",
        status: "Live",
        tags: ["React Native", "Firebase", "WebRTC", "Geolocation"]
      },
      {
        slug: "soulmate-matrimony-service",
        title: "SoulMate - Matrimony Service",
        description: "Premium matrimony service with verified profiles and personalized matchmaking assistance.",
        category: "Dating & Matrimony",
        status: "Live",
        tags: ["Vue.js", "Laravel", "MySQL", "Payment Gateway"]
      },
      {
        slug: "couplezone-social-platform",
        title: "CoupleZone - Social Platform",
        description: "Social platform for couples to share moments, plan dates, and connect with other couples.",
        category: "Dating & Matrimony",
        status: "Live",
        tags: ["Angular", "Express.js", "PostgreSQL", "Real-time Chat"]
      },
      {
        slug: "weddingplanner-matrimony",
        title: "WeddingPlanner - Matrimony",
        description: "Comprehensive wedding planning platform integrated with matrimony services.",
        category: "Dating & Matrimony",
        status: "Live",
        tags: ["Next.js", "Prisma", "Stripe", "Calendar Integration"]
      },
      {
        slug: "familyconnect-matrimony",
        title: "FamilyConnect - Matrimony",
        description: "Family-oriented matrimony platform with detailed family profiles and compatibility matching.",
        category: "Dating & Matrimony",
        status: "Live",
        tags: ["React", "Django", "Redis", "Machine Learning"]
      }
    ];

    return (
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
      {/* Card Header with Icon */}
      <div className="mb-6">
        <div className="bg-gradient-to-b from-orange-100 to-orange-200 rounded-xl p-4 mb-4">
          {/* Project Image */}
          <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
            <img 
              src={`https://picsum.photos/400/200?random=${Math.floor(Math.random() * 1000)}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Category Tag */}
      <div className="mb-4">
        <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </span>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Status */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-white text-sm font-medium">
            Status: <span className="text-green-400">{project.status}</span>
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-700/50 text-gray-300 border border-gray-600/50 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ProjectsGrid />
      <TalkBanner />
    </div>
  );
};

export default Dating;
