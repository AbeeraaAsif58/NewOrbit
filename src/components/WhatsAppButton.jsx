import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // WhatsApp number - replace with your actual WhatsApp number
  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number (include country code, no + sign)
  
  // Default message that will be pre-filled
  const defaultMessage = "Hello! I'm interested in your services. Can you help me?";
  
  // Function to open WhatsApp
  const openWhatsApp = () => {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(defaultMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  // Show button after a short delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="relative">
        {/* Floating animation container */}
        <div className="animate-bounce">
          <button
            onClick={openWhatsApp}
            className="group relative overflow-hidden bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white rounded-full p-5 shadow-2xl hover:shadow-green-500/50 transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300/50 backdrop-blur-sm border border-green-300/20"
            aria-label="Contact us on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* WhatsApp Icon with enhanced styling */}
            <svg
              className="w-7 h-7 relative z-10 drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            
            {/* Multiple pulse rings for enhanced effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 animation-delay-1000"></div>
            <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-10 animation-delay-2000"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-green-400/50 blur-xl group-hover:bg-green-300/70 transition-colors duration-500"></div>
          </button>
        </div>
        
        {/* Enhanced Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap pointer-events-none shadow-2xl border border-gray-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="font-medium">Chat with us!</span>
          </div>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-6 border-transparent border-l-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
