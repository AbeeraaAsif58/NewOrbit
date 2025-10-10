import React from "react";
import { useState } from "react";


const cardsData = [
  { id: 1,
    title: "Generative AI",
    image: "/pro1.avif" },
  { id: 2,
    title: "Dynamics 365",
    image: "/pro2.avif" },
  { id: 3,
    title: "Mobile App Development",
    image: "/pro3.avif" },
  { id: 4,
    title: "Staf Augmentation",
    image: "/pro4.avif" },
  { id: 5,
    title: "Data Analytics & Insights",
    image: "/pro5.avif" },
  { id: 6,
    title: "Web Development",
    image: "/pro6.avif" },
  { id: 7,
    title: "Cybersecurity",
    image: "/pro7.avif" },
  { id: 8,
    title: "UI/UX Design",
    image: "/pro8.webp" },
  { id: 9,
    title: "Cloud Application",
    image: "/pro9.avif" },
  { id: 10,
    title: "Power Apps", 
    image: "/pro10.avif" },
  { id: 11,
    title: "Cloud Maintenance & Integration",
    image: "/pro 31.avif" },
  { id: 12,
    title: "DevOps",
    image: "/pro12.avif" },
  { id: 13,
    title: "MS D365 CRM",
    image: "/pro13.avif" },
  { id: 14,
    title: "Metaverse",
    image: "/pro14.avif" },
  { id: 15,
    title: "Augmented Reality",
    image: "/pro15.avif" },
  { id: 16,
    title: "Blochchain & Cryptography",
    image: "/pro16.avif" },
  { id: 17,
    title: "Game Development",
    image: "/pro17.avif" },
  { id: 18,
    title: "Web3 Gaming",
    image: "/pro1.avif" },
  { id: 19,
    title: "AR/VR/XR Gaming",
    image: "/pro19.avif" },
  { id: 20,
    title: "Gaming Art & Design",
    image: "/pro20.avif" },
  { id: 21,
    title: "Cloud Migration & Cloud Ops",
    image: "/pro21.avif" },
  { id: 22,
    title: "Quality Assurance",
    image: "/pro22.avif" },
  { id: 23,
    title: "SaaS",
    image: "/pro23.avif" },
  { id: 24,
    title: "Custom Software Development",
    image: "/pro24.avif" },
  { id: 25,
    title: "Data Analytics & Insights",
    image: "/pro25.avif" },
 
    
  
];

  function Card() {
  const [visibleCards, setVisibleCards] = useState(4);

  const buttonhandle = () => {
    setVisibleCards((prev) => (prev === 4 ? 24 : 4));
    
    // Smooth scroll to show more cards
    setTimeout(() => {
      const element = document.querySelector('.image-container');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>
      
    <div className="h-auto w-full p-3 sm:p-4 md:p-5 smooth-scroll">
    <div className="px-4 sm:px-6 md:px-[8vh] image-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-[2vh]">
      {cardsData.slice(0, visibleCards).map((card) => (
        <div
          key={card.id}
          className="h-[40vh] sm:h-[45vh] md:h-[50vh] w-full sm:w-auto rounded-lg sm:rounded-xl md:rounded-[10px] relative overflow-hidden group transition-all duration-500 ease-in-out transform"
          style={{
            animation: card.id > 4 ? 'fadeInUp 0.6s ease-out forwards' : 'none',
            animationDelay: card.id > 4 ? `${(card.id - 5) * 0.1}s` : '0s'
          }}
        >
          <img
            className="h-full w-full rounded-lg sm:rounded-xl md:rounded-[10px] object-cover transition-transform duration-300 group-hover:translate-y-[-2vh]"
            src={card.image}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b to-[#0006] from-transparent opacity-0 group-hover:opacity-100 group-hover:to-transparent group-hover:from-[#0006] transition-opacity duration-500"
          ></div>
          <div className="text-white font-bold text-lg sm:text-xl md:text-[3.5vh] absolute top-4 sm:top-[3vh] md:top-[5vh] left-3 sm:left-4 md:left-5">
            {card.title}
          </div>
        </div>
      ))}
    </div>
  
    <div className="mt-8 sm:mt-12 md:mt-[8.5vh] text-center justify-center flex items-center">
      <button
        onClick={buttonhandle}
        className="border-[1px] border-primary px-6 sm:px-8 md:px-[1.2em] py-3 sm:py-4 md:py-[1.2em] rounded-full bg-transparent text-white font-semibold hover:bg-secondary hover:border-secondary transition-all duration-300 text-sm sm:text-base"
      >
      {visibleCards === 4 ? "View More Services" : "View Less"}
      </button>
    </div>
  </div>
  </>
);
}

export default Card