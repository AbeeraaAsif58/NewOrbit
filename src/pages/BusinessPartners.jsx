// src/pages/BusinessPartners.jsx
import React from "react";
import FooterOrbit from "../components/FooterOrbit";
import TalkBanner from "../components/TalkBanner";

export default function BusinessPartners() {
  return (
    <div className="min-h-screen -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8 -my-6 sm:-my-8 md:-my-10 -mt-20 sm:-mt-24 md:-mt-28">
      {/* Parallax Hero Section */}
      <div 
        className="parallax-section h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/busi1.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl font-poppins">
            Business Partners
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow-lg">
            Discover our trusted network of business partners who help us deliver exceptional solutions and drive innovation across industries.
          </p>
        </div>
      </div>

      {/* Our Partners Section - Exact Copy from Home Page */}
      <div className="relative w-screen -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8 py-16 bg-white/80 z-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Partners
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 sm:gap-10">
            {/* Visa */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/visa,logo.png" 
                  alt="Visa Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">Visa</h3>
            </div>

            {/* MasterCard */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/master-card-logo2.png" 
                  alt="MasterCard Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">MasterCard</h3>
            </div>

            {/* PayPal */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/paypal-logo.png" 
                  alt="PayPal Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">PayPal</h3>
            </div>

            {/* CoinPayment */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/coin payment.logo.png" 
                  alt="CoinPayment Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">CoinPayment</h3>
            </div>

            {/* Stripe */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/stripe-logo.png" 
                  alt="Stripe Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">Stripe</h3>
            </div>

            {/* JS Bank */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/jsbank logo.png" 
                  alt="JS Bank Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">JS Bank</h3>
            </div>

            {/* Al Ansari Exchange */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/Al Ansari Exchange- logo.png" 
                  alt="Al Ansari Exchange Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">Al Ansari Exchange</h3>
            </div>

            {/* Peace Home */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/peace homes-logo.png" 
                  alt="Peace Home Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">Peace Home</h3>
            </div>

            {/* Booking.com */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/Booking.com-logo.png" 
                  alt="Booking.com Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">Booking.com</h3>
            </div>

            {/* IATA */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/iata-logo.png" 
                  alt="IATA Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">IATA</h3>
            </div>

            {/* L Bank */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/lbank-logo.png" 
                  alt="L Bank Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">L Bank</h3>
            </div>

            {/* Bkash */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/bkash-logo.png" 
                  alt="Bkash Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">Bkash</h3>
            </div>

            {/* PayTM */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/payTM-logo.png" 
                  alt="PayTM Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">PayTM</h3>
            </div>

            {/* CBD */}
            <div className="flex flex-col items-center justify-center text-center p-2">
              <div className="w-32 h-32 mb-4 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-out">
                <img 
                  src="/CBD bank logo.png" 
                  alt="CBD Bank Logo"
                  className="max-w-full max-h-full object-contain"
                  draggable={false}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 transition-colors duration-300">CBD</h3>
            </div>
          </div>
        </div>
      </div>


      {/* Second Parallax Section */}
      <div 
        className="parallax-section h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/busi2.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-center z-10 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl font-poppins">
            Why Partner With Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            We believe in partnerships that drive mutual success and sustainable growth for all parties involved.
          </p>
        </div>
      </div>


      {/* Third Parallax Section */}
      <div 
        className="parallax-section h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/busi3.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-center z-10 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl font-poppins">
            Interested in Partnership?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Join our network of trusted partners and help us deliver exceptional solutions to clients worldwide.
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 text-lg">
            Become a Partner
          </button>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="content-section py-20 px-4 sm:px-8 md:px-16 text-white" style={{ background: "linear-gradient(135deg, #0f4c75 0%, #1a5f7a 50%, #2a7c8a 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white font-poppins">
            Ready to Get Started?
            </h2>
          <p className="text-lg text-gray-200 mb-8">
            Contact us today to learn more about our partnership opportunities and how we can work together to achieve mutual success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-teal-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 font-poppins">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 font-poppins">
              Learn More
            </button>
              </div>
            </div>
          </div>

      {/* Fourth Parallax Section */}
      <div 
        className="parallax-section h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/busi4.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="text-center z-10 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl font-poppins">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Partner with us and be part of the future of technology innovation.
          </p>
        </div>
      </div>

      {/* Talk Banner */}
      <TalkBanner />

      {/* Footer */}
      <FooterOrbit />
    </div>
  );
}
