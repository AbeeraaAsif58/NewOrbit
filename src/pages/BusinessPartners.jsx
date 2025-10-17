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

      {/* Benefits Content Section */}
      <div className="content-section py-20 px-4 sm:px-8 md:px-16 text-white" style={{ background: "linear-gradient(135deg, #1a5f7a 0%, #2a7c8a 50%, #0f4c75 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl shadow-lg border border-white/20" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-poppins">Mutual Growth</h3>
              <p className="text-gray-200">
                We believe in partnerships that drive mutual success and sustainable growth for all parties involved.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl shadow-lg border border-white/20" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-poppins">Innovation Focus</h3>
              <p className="text-gray-200">
                Together, we push the boundaries of technology and deliver cutting-edge solutions to our clients.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl shadow-lg border border-white/20" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white font-poppins">Global Reach</h3>
              <p className="text-gray-200">
                Our partnership network spans across continents, enabling us to serve clients worldwide.
              </p>
            </div>
          </div>
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

      {/* Our Partners Section */}
      <div className="content-section py-20 px-4 sm:px-8 md:px-16 text-white" style={{ background: "linear-gradient(135deg, #0f4c75 0%, #1a5f7a 50%, #2a7c8a 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Our Partners
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies that share our commitment to excellence and innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Business Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            {/* Visa */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/visa,logo.png" 
                     alt="Visa Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">Visa</h3>
              </div>
            </div>

            {/* MasterCard */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/master-card-logo2.png" 
                     alt="MasterCard Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">MasterCard</h3>
              </div>
            </div>

            {/* PayPal */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/paypal-logo.png" 
                     alt="PayPal Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">PayPal</h3>
              </div>
            </div>

            {/* Coin Payment */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/coin payment.logo.png" 
                     alt="CoinPayment Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">CoinPayment</h3>
              </div>
            </div>

            {/* Stripe */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/stripe-logo.png" 
                     alt="Stripe Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">Stripe</h3>
              </div>
            </div>

            {/* JS Bank */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/jsbank logo.png" 
                     alt="JS Bank Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">JS Bank</h3>
              </div>
            </div>

            {/* Al Ansari Exchange */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/Al Ansari Exchange- logo.png" 
                     alt="Al Ansari Exchange Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">Al Ansari Exchange</h3>
              </div>
            </div>

            {/* Peace Home */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/peace homes-logo.png" 
                     alt="Peace Home Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">Peace Home</h3>
              </div>
            </div>

            {/* Booking.com */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/Booking.com-logo.png" 
                     alt="Booking.com Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">Booking.com</h3>
              </div>
            </div>

            {/* IATA */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/iata-logo.png" 
                     alt="IATA Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">IATA</h3>
              </div>
            </div>

            {/* L Bank */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/lbank-logo.png" 
                     alt="L Bank Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">L Bank</h3>
              </div>
            </div>

            {/* NIB */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/NIB_Bank_Logo (2).png" 
                     alt="NIB Bank Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">NIB Bank</h3>
              </div>
            </div>

            {/* Bkash */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/bkash-logo.png" 
                     alt="Bkash Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">Bkash</h3>
              </div>
            </div>

            {/* PayTM */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/payTM-logo.png" 
                     alt="PayTM Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">PayTM</h3>
              </div>
            </div>

            {/* CBD */}
            <div className="group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="flex flex-col items-center justify-center h-32">
                 <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 p-3">
                   <img 
                     src="/CBD bank logo.png" 
                     alt="CBD Bank Logo" 
                     className="max-w-full max-h-full object-contain"
                     draggable={false}
                   />
                 </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">CBD</h3>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="rounded-3xl p-8 md:p-12 mb-16 border border-white/20" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                 <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                   50+
                 </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">Trusted Partners</div>
                <div className="text-sm text-gray-300">Leading companies across industries</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">Countries Served</div>
                <div className="text-sm text-gray-300">Global reach and impact</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">Client Satisfaction</div>
                <div className="text-sm text-gray-300">Proven track record</div>
              </div>
            </div>
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
