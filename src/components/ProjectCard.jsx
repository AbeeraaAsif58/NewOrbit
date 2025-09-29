import React from "react";
import { useState } from "react";


const cardsData = [
  { id: 1,
    title: "Generative AI",
    image: "/6746cd1fd5d31e9286475e66_GenAi3.webp" },
  { id: 2,
    title: "Dynamics 365",
    image: "/6746cd3786ddb52478d995d1_MS D365 ERP .webp" },
  { id: 3,
    title: "Mobile App Development",
    image: "/6746ccf546a2ad2c80d6df83_web and app.webp" },
  { id: 4,
    title: "Staf Augmentation",
    image: "/6746ce0fb9160e7c31f33a55_Staff Augmentation.webp" },
  { id: 5,
    title: "Data Analytics & Insights",
    image: "/6746cc482db1606ad0aab120_Data Analytics.webp" },
  { id: 6,
    title: "Web Development",
    image: "/6746cca947f72f4be4c576ef_Web & App dev.webp" },
  { id: 7,
    title: "Cybersecurity",
    image: "/6746ccb5852804634ccbdcd0_Cyber Security  copy.webp" },
  { id: 8,
    title: "UI/UX Design",
    image: "/6746ccfe797228be2c253ec9_UI_UX.webp" },
  { id: 9,
    title: "Cloud Application",
    image: "/6746cd6f18df7367c4bfe810_cloud application.webp" },
  { id: 10,
    title: "Power Apps", 
    image: "/6746cd60afa41380cb28c55d_Power Apps.webp" },
  { id: 11,
    title: "Cloud Maintenance & Integration",
    image: "/6746cd80bbd823d4a8b89c59_Cloud maintenance & integration.webp" },
  { id: 12,
    title: "DevOps",
    image: "/6746cd081fcad6db7e6e9a4e_DevOps.webp" },
  { id: 13,
    title: "MS D365 CRM",
    image: "/6746cd49289bf06f07412563_MS D365 CRM.webp" },
  { id: 14,
    title: "Metaverse",
    image: "/6746cd95078adf7543546d09_Metaverse 2.webp" },
  { id: 15,
    title: "Augmented Reality",
    image: "/6746cda23ce467ab05d4006f_Augmented reality.webp" },
  { id: 16,
    title: "Blochchain & Cryptography",
    image: "/6746cdb586ddb52478da1c7f_Blockchain & Cryptography .webp" },
  { id: 17,
    title: "Game Development",
    image: "/6746cdc74b9b2aacdbf10606_game development.webp" },
  { id: 18,
    title: "Web3 Gaming",
    image: "/6746cddd2db1606ad0ac573e_Web3 - Gaming .webp" },
  { id: 19,
    title: "AR/VR/XR Gaming",
    image: "/6746cdef46a2ad2c80d7d88e_AR_VR_MV - Gaming .webp" },
  { id: 20,
    title: "Gaming Art & Design",
    image: "/6746cdfc081682b328fe072e_art and design.webp" },
  { id: 21,
    title: "Cloud Migration & Cloud Ops",
    image: "/676427212c412610f82ce9f3_Hero -p-1080.jpg" },
  { id: 22,
    title: "Quality Assurance",
    image: "/6746ce1f6f855821383d1c14_Quality Assurance .webp" },
  { id: 23,
    title: "SaaS",
    image: "/6746ce2de7c668dd873f6ef6_SaaS.webp" },
  { id: 24,
    title: "Custom Software Development",
    image: "/67888ffd8c2d8315d6d77a67_overview -p-1080.jpg" },
  
];

  function Card() {
  const [visibleCards, setVisibleCards] = useState(4);

  const buttonhandle = () => {
    setVisibleCards((prev) => (prev === 4 ? 24 : 4));
  };

  return (
    <div className="h-auto w-full p-5">
    <div className="pl-[8vh] pr-[8vh] image-container flex flex-wrap justify-between gap-[2vh]">
      {cardsData.slice(0, visibleCards).map((card) => (
        <div
          key={card.id}
          className="h-[50vh] w-[43vh] rounded-[10px] relative  overflow-hidden group"
        >
          <img
            className="h-full w-full rounded-[10px] object-cover transition-transform duration-300 group-hover:translate-y-[-2vh]"
            src={card.image}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b to-[#0006] from-transparent opacity-0 group-hover:opacity-100 group-hover:to-transparent group-hover:from-[#0006] transition-opacity duration-500"
          ></div>
          <div className="text-white font-bold text-[3.5vh] absolute top-[5vh] left-5">
            {card.title}
          </div>
        </div>
      ))}
    </div>
  
    <div className="mt-[8.5vh] text-center justify-center flex items-center">
      <button
        onClick={buttonhandle}
        className="flex gap-4 border-[1px] border-primary px-[1.2em] py-[1.2em] rounded-[100em] bg-transparent text-white font-semibold hover:bg-secondary hover:border-secondary"
      >
      <img
      className="rotate-90"
       src="/67330872fcc18762b4703730_right arrow (1).svg" alt="My Icon" style={{ width: "20px", height: "20px" }} />
      {visibleCards === 4 ? "View More Services" : "View Less"}
      </button>
    </div>
  </div>
  
);
}

export default Card