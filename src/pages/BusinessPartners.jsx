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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
            Business Partners
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto drop-shadow-lg">
            Discover our trusted network of business partners who help us deliver exceptional solutions and drive innovation across industries.
          </p>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="content-section py-20 px-4 sm:px-8 md:px-16 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our partnership opportunities and how we can work together to achieve mutual success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
            <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            Why Partner With Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            We believe in partnerships that drive mutual success and sustainable growth for all parties involved.
          </p>
        </div>
      </div>

      {/* Benefits Content Section */}
      <div className="content-section py-20 px-4 sm:px-8 md:px-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mutual Growth</h3>
              <p className="text-gray-600">
                We believe in partnerships that drive mutual success and sustainable growth for all parties involved.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Together, we push the boundaries of technology and deliver cutting-edge solutions to our clients.
              </p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
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
      <div className="content-section py-20 px-4 sm:px-8 md:px-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600 bg-clip-text text-transparent">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies that share our commitment to excellence and innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Business Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            {/* Visa */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">VISA</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Visa</h3>
              </div>
            </div>

            {/* MasterCard */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">MC</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">MasterCard</h3>
              </div>
            </div>

            {/* PayPal */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">PayPal</h3>
              </div>
            </div>

            {/* Coin Payment */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">₿</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Coin Payment</h3>
              </div>
            </div>

            {/* Stripe */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Stripe</h3>
              </div>
            </div>

            {/* JS Bank */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">JS</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">JS Bank</h3>
              </div>
            </div>

            {/* Al Ansari Exchange */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">AA</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Al Ansari Exchange</h3>
              </div>
            </div>

            {/* Peace Home */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-pink-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">PH</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">Peace Home</h3>
              </div>
            </div>

            {/* Booking.com */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Booking.com</h3>
              </div>
            </div>

            {/* IATA */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">IATA</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">IATA</h3>
              </div>
            </div>

            {/* L Bank */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">LB</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">L Bank</h3>
              </div>
            </div>

            {/* NIB */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">NIB</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">NIB</h3>
              </div>
            </div>

            {/* Bkash */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">BK</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Bkash</h3>
              </div>
            </div>

            {/* PayTM */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">PT</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">PayTM</h3>
              </div>
            </div>

            {/* CBD */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100 hover:border-teal-200">
              <div className="flex flex-col items-center justify-center h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xs">CBD</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">CBD</h3>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">Trusted Partners</div>
                <div className="text-sm text-gray-600">Leading companies across industries</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">Countries Served</div>
                <div className="text-sm text-gray-600">Global reach and impact</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-teal-700 mb-2 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">Client Satisfaction</div>
                <div className="text-sm text-gray-600">Proven track record</div>
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
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
