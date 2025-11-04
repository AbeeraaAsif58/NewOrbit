// src/components/ProfessionalPartners.jsx
import React from "react";
import DIFCLogo from "./DIFC_Logo.png";
import { useNavigate } from "react-router-dom";

/* Selected Partners Only */
const ALL_PARTNERS = [
  { name: "", logo: "/visa,logo.png" },
  { name: "", logo: "/master-card-logo2.png" },
  { name: "", logo: "/slider5.png" },
  { name: "", logo: "/slider1.png" },
  { name: "", logo: "/slider3.png" },
  { name: "", logo: "/jsbank logo.png" },
  { name: "", logo: "/slider7.png" },
  { name: "", logo: DIFCLogo },
  { name: "", logo: "/slider6.png" },
  { name: "", logo: "/iata-logo.png" },
  { name: "", logo: "/lbank-logo.png" },
  { name: "", logo: "/bkash-logo.png" },
  { name: "", logo: "/payTM-logo.png" },
  { name: "", logo: "/slider4.png" }
];

/* Clean Partner Logo Component */
const PartnerLogo = ({ partner }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-1 sm:p-2">
      {/* Logo Container */}
      <div className="
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3 sm:mb-4 
        flex items-center justify-center
        hover:scale-105 transition-all duration-300 ease-out
      ">
        <img 
          src={partner.logo} 
          alt={`${partner.name} Logo`}
          className="max-w-full max-h-full object-contain"
          draggable={false}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      {/* Company Name */}
      <h3 className="
        text-sm font-semibold text-gray-700
        transition-colors duration-300
      ">
        {partner.name}
      </h3>
    </div>
  );
};

/* Main Professional Partners Component */
export default function ProfessionalPartners() {
  const navigate = useNavigate();

  const handleViewAllPartners = () => {
    navigate('/business-partners');
  };

  return (
    <div className="relative w-screen -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8 py-10 sm:py-16 bg-white/80 z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-8">
          {ALL_PARTNERS.map((partner, index) => (
            <PartnerLogo 
              key={`partner-${index}`} 
              partner={partner} 
            />
          ))}
        </div>

        {/* View All Partners Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleViewAllPartners}
            className="
              px-8 py-3 text-white font-semibold rounded-lg
              bg-gradient-to-r from-teal-500 to-teal-600
              hover:from-teal-600 hover:to-teal-700 hover:scale-105 hover:shadow-lg
              transition-all duration-300 ease-in-out
            "
          >
            View All Partners
            <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}