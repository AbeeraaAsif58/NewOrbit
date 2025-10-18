// src/components/ProfessionalPartners.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

/* Selected Partners Only */
const ALL_PARTNERS = [
  { name: "Visa", category: "Payment Processing", logo: "/visa,logo.png" },
  { name: "Mastercard", category: "Payment Processing", logo: "/master-card-logo2.png" },
  { name: "PayPal", category: "Digital Payments", logo: "/paypal-logo.png" },
  { name: "Coin Payment", category: "Cryptocurrency", logo: "/coin payment.logo.png" },
  { name: "Stripe", category: "Payment Gateway", logo: "/stripe-logo.png" },
  { name: "JS Bank", category: "Banking", logo: "/jsbank logo.png" },
  { name: "Al Ansari Exchange", category: "Money Exchange", logo: "/Al Ansari Exchange- logo.png" },
  { name: "Peace Homes", category: "Real Estate", logo: "/peace homes-logo.png" },
  { name: "Booking.com", category: "Travel Platform", logo: "/Booking.com-logo.png" },
  { name: "Tata", category: "Conglomerate", logo: "/tata-logo.png" },
  { name: "LBank", category: "Financial Services", logo: "/lbank-logo.png" },
  { name: "bKash", category: "Mobile Banking", logo: "/bkash-logo.png" },
  { name: "Paytm", category: "Digital Wallet", logo: "/payTM-logo.png" },
  { name: "CBD", category: "Banking", logo: "/CBD bank logo.png" }
];

/* Professional Partner Card Component */
const PartnerCard = ({ partner }) => {
  return (
    <div className="
      group relative p-6 rounded-xl border backdrop-blur-sm
      bg-gradient-to-br from-green-500/10 to-green-600/5 
      border-green-500/30 hover:border-green-400/50 
      hover:bg-green-500/20 text-green-300 hover:text-green-200
      transition-all duration-300 hover:scale-105 hover:shadow-xl
      hover:shadow-green-500/20
    ">
      <div className="text-center">
        {/* Logo Container */}
        <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
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
        <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300">
          {partner.name}
        </h3>
        
        {/* Category */}
        <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {partner.category}
          </p>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    <div className="relative w-full py-2 sm:py-4 md:py-6">
      {/* Professional Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
          {ALL_PARTNERS.map((partner, index) => (
            <PartnerCard 
              key={`partner-${index}`} 
              partner={partner} 
            />
          ))}
      </div>

        {/* View All Partners Button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleViewAllPartners}
            className="
              px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 
              text-white font-semibold text-lg rounded-xl
              hover:from-green-600 hover:to-green-700 
              hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30
              transition-all duration-300 ease-in-out
              border border-green-400/30
            "
          >
            View All Partners
            <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}