import React, { useMemo, useCallback } from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen relative overflow-hidden">
      {/* Starfield provided globally in App.jsx */}

      {/* Optimized Background Elements - Reduced for Performance */}
      <div className="absolute inset-0 -z-[1] overflow-hidden">
        {/* Reduced floating elements for better performance */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-50"></div>
        
        {/* Simplified orbital rings - reduced count */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-primary/30 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 border border-primary/25 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        
        {/* Single central orbit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
      </div>

      {/* Simplified Ambient Glow Effects */}
      <div className="absolute inset-0 -z-[1] pointer-events-none">
        <div 
          className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(closest-side, rgba(12,242,93,.25), rgba(12,242,93,0))",
            mixBlendMode: "screen",
          }}
        />
        <div 
          className="absolute right-1/4 bottom-1/3 translate-x-1/2 translate-y-1/2 w-[250px] h-[250px] rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(closest-side, rgba(12,242,93,.2), rgba(12,242,93,0))",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Minimal headline section (replacing About Orbit) */}
        <div className="mb-16 min-h-[80vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-white animate-text-grow font-poppins">
            We are "Orbit" — WEB 3 Solution Provider company
          </h1>
          <div className="mt-8 mb-24 items-left">
            <div className="md:col-span-3">
             
              </div>
            <div className="md:col-span-12 text-gray-300 text-xl md:text-2xl leading-relaxed text-left animate-text-grow">
              Redefining finance innovation with decentralized Web 3 technologies <br /> and next generation fintech solution built for the digital era.
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          <div className="animate-slide-in-left">
             <h3 className="group relative text-5xl font-bold mb-10 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-300 hover:via-teal-400 hover:to-teal-300 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(12,242,93,0.4)] cursor-pointer font-poppins">
               Our Journey
               <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-500 group-hover:w-full"></span>
             </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{textAlign: 'left'}}>
             Orbit is redefining the digital landscape by combining innovation, technology, and creativity. We specialize in Web3 development, Fintech gateway solutions, and next generation gaming experience designed to accelerate digital transformation.
              </p>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{textAlign: 'left'}}>
             At Orbit, we believe the future belongs to those who innovate beyond boundaries. Our team blends blockchain expertise, decentralized systems, and financial technology to create seamless, secure, and scalable digital ecosystem.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center group hover:scale-110 transition-all duration-500 bg-teal-900/30 rounded-2xl p-6 border border-teal-700/50 hover:border-teal-400/50">
                <div className="text-5xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors duration-300">500+</div>
                <div className="text-gray-400 text-sm">Missions Completed</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-500 bg-teal-900/30 rounded-2xl p-6 border border-teal-700/50 hover:border-teal-400/50">
                <div className="text-5xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors duration-300">50+</div>
                <div className="text-gray-400 text-sm">Planets Explored</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-500 bg-teal-900/30 rounded-2xl p-6 border border-teal-700/50 hover:border-teal-400/50">
                <div className="text-5xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors duration-300">4+</div>
                <div className="text-gray-400 text-sm">Light Years Experience</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-500 bg-teal-900/30 rounded-2xl p-6 border border-teal-700/50 hover:border-teal-400/50">
                <div className="text-5xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors duration-300">24/7</div>
                <div className="text-gray-400 text-sm">Mission Control</div>
              </div>
            </div>
          </div>
          
          {/* Moon Image */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            <div className="group relative">
              <img 
                src="/mun.png" 
                alt="Moon" 
                loading="lazy"
                decoding="async"
                className="w-[80vw] h-[100vh] object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.7)] transition-all duration-500 ease-in-out"
              />
              {/* Additional glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-60 blur-3xl scale-150"></div>
              {/* Hover glow enhancement */}
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-200"></div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <div className="text-center mb-20 animate-fade-in">
             <h3 className="group relative text-5xl font-bold mb-8 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-300 hover:via-cyan-400 hover:to-blue-500 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer">
               Why Choose Orbit?
               <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-sky-300 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
             </h3>
            <p className="text-2xl text-gray-400">What makes us the perfect launch partner for your cosmic journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:scale-105 transition-all duration-700 bg-gray-800/40 rounded-3xl p-10 border border-gray-700/50 hover:border-teal-400/70 hover:shadow-2xl hover:shadow-teal-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-teal-500/30">
                <span className="text-4xl">🚀</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-teal-400 transition-colors duration-300">Innovation</h4>
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                We stay ahead of the cosmic curve with cutting-edge technologies and 
                innovative approaches that push the boundaries of what's possible in the digital universe.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-700 bg-gray-800/40 rounded-3xl p-10 border border-gray-700/50 hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/30">
                <span className="text-4xl">🎯</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">Precision</h4>
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                Every mission is executed with stellar precision and the highest standards 
                of quality, ensuring your success in the digital universe.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-700 bg-gray-800/40 rounded-3xl p-10 border border-gray-700/50 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                <span className="text-4xl">🤝</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">Partnership</h4>
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                We work closely with our clients as co-pilots on this cosmic journey, 
                ensuring their success is our shared mission across the galaxy.
              </p>
            </div>
          </div>
        </div>

        {/* Full-Width Image Section */}
        <div className="mt-32 mb-32">
          <div className="relative h-[80vh] rounded-3xl overflow-hidden">
            <img 
              src="/busi1.jpg" 
              alt="Our Workspace" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
              <h3 className="text-5xl font-bold mb-6">Our Creative Workspace</h3>
              <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed text-justify">
                Where innovation meets creativity, our team collaborates to bring your digital dreams to life in an environment designed for stellar success.
              </p>
            </div>
          </div>
        </div>


        {/* Company Values Section */}
        <div className="mt-32">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="group relative text-5xl font-bold mb-8 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-300 hover:via-cyan-400 hover:to-blue-500 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer">
              Our Core Values
              <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-sky-300 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-2xl text-gray-400">The principles that guide our cosmic journey</p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-emerald-400/70 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden">
              <div className="relative mb-6">
                  <img 
                    src="/busi2.jpg" 
                    alt="Excellence" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500"
                  />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">Excellence</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                We strive for stellar excellence in every project, delivering solutions that exceed expectations and push the boundaries of innovation. Our commitment to quality ensures that every digital mission we undertake reaches new heights of success.
              </p>
              <p className="text-gray-400 text-base leading-relaxed text-justify">
                From initial concept to final deployment, we maintain the highest standards of excellence, ensuring that our clients receive solutions that not only meet their requirements but surpass their wildest expectations in the digital cosmos.
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-teal-400/70 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
              <div className="relative mb-6">
                  <img 
                    src="/busi3.jpg" 
                    alt="Innovation" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-teal-500/30 transition-all duration-500"
                  />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-2xl">🌌</span>
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">Innovation</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                We embrace cutting-edge technologies and creative thinking to solve complex challenges and explore new frontiers in the digital universe. Our innovative approach drives breakthrough solutions that transform industries.
              </p>
              <p className="text-gray-400 text-base leading-relaxed text-justify">
                By staying ahead of technological trends and constantly pushing the boundaries of what's possible, we help our clients navigate uncharted territories and achieve unprecedented success in their digital endeavors.
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="relative mb-6">
                  <img 
                    src="/busi4.jpg" 
                    alt="Collaboration" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500"
                  />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Collaboration</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve shared success across the galaxy. Our collaborative approach ensures that every project benefits from diverse perspectives and expertise.
              </p>
              <p className="text-gray-400 text-base leading-relaxed text-justify">
                Through open communication, shared vision, and mutual respect, we build lasting partnerships that extend beyond individual projects, creating a network of success that spans across multiple digital galaxies.
              </p>
            </div>
          </div>
        </div>


        {/* Statistics & Achievements Section */}
        <div className="mt-32">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="group relative text-5xl font-bold mb-8 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-300 hover:via-orange-400 hover:to-red-500 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] cursor-pointer">
              Our Achievements
              <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-2xl text-gray-400">Numbers that speak to our cosmic success</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                    <img 
                      src="/pro1.avif" 
                      alt="Projects Completed" 
                      loading="lazy"
                      decoding="async"
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-teal-500/30 transition-all duration-500 object-cover"
                    />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <span className="text-2xl font-bold text-white">150+</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">Projects Completed</h4>
                  <p className="text-teal-400 text-xl mb-6 font-semibold">Successfully Launched</p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                    We have successfully completed over 150 projects across various industries, each one carefully crafted and launched into the digital stratosphere with precision and excellence.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed text-justify">
                    From small startups to enterprise-level corporations, our projects span multiple galaxies, helping businesses achieve their digital transformation goals and reach new heights of success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                    <img 
                      src="/pro2.avif" 
                      alt="Client Satisfaction" 
                      loading="lazy"
                      decoding="async"
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500 object-cover"
                    />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-xl font-bold text-white">98%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">Client Satisfaction</h4>
                  <p className="text-emerald-400 text-xl mb-6 font-semibold">Happy Customers</p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                    Our commitment to excellence has resulted in a 98% client satisfaction rate, with customers across multiple galaxies praising our innovative solutions and stellar service delivery.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed text-justify">
                    We measure our success not just by project completion, but by the lasting relationships we build with our clients and their continued growth in the digital universe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                    <img 
                      src="/pro3.avif" 
                      alt="Years Experience" 
                      loading="lazy"
                      decoding="async"
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 object-cover"
                    />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-xl font-bold text-white">5+</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Years Experience</h4>
                  <p className="text-purple-400 text-xl mb-6 font-semibold">Digital Cosmos Navigation</p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                    With over 5 years of experience navigating the digital cosmos, our team has accumulated deep knowledge and expertise in cutting-edge technologies and innovative solutions.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed text-justify">
                    Our journey through the digital universe has taught us valuable lessons about what works, what doesn't, and how to consistently deliver exceptional results for our clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                    <img 
                      src="/pro4.avif" 
                      alt="24/7 Support" 
                      loading="lazy"
                      decoding="async"
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500 object-cover"
                    />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-sm font-bold text-white">24/7</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">Support Available</h4>
                  <p className="text-orange-400 text-xl mb-6 font-semibold">Mission Control Ready</p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                    Our mission control center operates 24/7, ensuring that our clients receive continuous support and assistance whenever they need it, regardless of their location in the digital galaxy.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed text-justify">
                    Whether it's a critical issue that needs immediate attention or a simple question about your digital journey, our dedicated support team is always ready to help you navigate any challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Call to Action Section - Updated Theme Colors */}
        <div className="mt-32 mb-20 text-center">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl p-16 border border-primary/30 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border border-primary rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/60 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-primary rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 hover:text-primary transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(12,242,93,0.4)] cursor-pointer">
                Ready to Launch Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital</span> <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Journey?</span>
              </h2>
              <p className="text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed text-justify">
                Join the cosmic revolution and let Orbit propel your business into the digital stratosphere. 
                Our stellar team is ready to make your vision a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                  <span className="group-hover:tracking-wider transition-all duration-300">Start Your Mission</span>
                </button>
                <button className="group px-12 py-6 bg-transparent border-2 border-primary text-white text-2xl font-bold rounded-full hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                  <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Optimized animations for better performance */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); /* Reduced movement */
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-50px); /* Reduced movement */
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(50px); /* Reduced movement */
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes text-grow {
          0% {
            opacity: 0;
            transform: scale(0.95); /* Reduced scale for smoother animation */
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Optimized animation classes with reduced duration */
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
          will-change: opacity; /* Optimize for GPU */
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          will-change: transform, opacity;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both; /* Reduced delay */
          will-change: transform, opacity;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.4s both; /* Faster animation */
          will-change: transform, opacity;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.6s both; /* Faster animation */
          will-change: transform, opacity;
        }
        
        .animate-text-grow {
          animation: text-grow 0.6s ease-out 0.1s both; /* Faster animation */
          will-change: transform, opacity;
        }

        /* Performance optimizations */
        .group:hover {
          will-change: transform; /* Optimize hover animations */
        }
        
        img {
          will-change: transform; /* Optimize image animations */
        }
      `}</style>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(About);