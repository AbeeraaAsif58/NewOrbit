import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen relative overflow-hidden">
      {/* Starfield provided globally in App.jsx */}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-[1] overflow-hidden">
        {/* Floating Stars */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-teal-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-teal-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-teal-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-teal-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></div>
        
        {/* Orbital Rings */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-teal-700/30 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-teal-500/20 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 border border-teal-600/25 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 border border-teal-500/15 rounded-full animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
        
        {/* Central Orbit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-teal-800/20 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-teal-400/10 rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-teal-500/15 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 -z-[1] pointer-events-none">
        <div 
          className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(closest-side, rgba(12,242,93,.25), rgba(12,242,93,0))",
            mixBlendMode: "screen",
          }}
        />
        <div 
          className="absolute right-1/4 bottom-1/3 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(closest-side, rgba(12,242,93,.2), rgba(12,242,93,0))",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        {/* Minimal headline section (replacing About Orbit) */}
        <div className="mb-16 min-h-[80vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-white animate-text-grow">
            We are “Orbit” — product and branding and creative agency
            based in California
          </h1>
          <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-3">
              <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] font-semibold uppercase text-gray-400">
                <span>01. About us</span>
                <span className="h-px w-14 bg-gray-600" />
              </div>
            </div>
            <div className="md:col-span-12 text-gray-300 text-xl md:text-2xl leading-relaxed text-center max-w-3xl mx-auto animate-text-grow">
              Unlocking creative horizons: the story behind “Orbit” — a digital
              agency crafting experiences, building brands, and shaping success.
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          <div className="animate-slide-in-left">
             <h3 className="group relative text-5xl font-bold mb-10 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-300 hover:via-teal-400 hover:to-teal-300 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(12,242,93,0.4)] cursor-pointer">
               Our Journey Through Space
               <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-500 group-hover:w-full"></span>
             </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded in 2020, Orbit has been navigating the digital cosmos, pushing boundaries 
              and exploring new frontiers in technology. We believe in the infinite potential 
              of digital innovation to connect worlds and transform realities.
            </p>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our team of space engineers combines cosmic creativity with stellar technical 
              excellence to deliver solutions that launch your business into the stratosphere 
              of success.
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
                className="w-[80vw] h-[100vh] object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] drop-shadow-[0_0_80px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_0_60px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_120px_rgba(255,255,255,0.5)] transition-all duration-500 ease-in-out"
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
              <p className="text-gray-400 text-lg leading-relaxed">
                We stay ahead of the cosmic curve with cutting-edge technologies and 
                innovative approaches that push the boundaries of what's possible in the digital universe.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-700 bg-gray-800/40 rounded-3xl p-10 border border-gray-700/50 hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/30">
                <span className="text-4xl">🎯</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">Precision</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every mission is executed with stellar precision and the highest standards 
                of quality, ensuring your success in the digital universe.
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-700 bg-gray-800/40 rounded-3xl p-10 border border-gray-700/50 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                <span className="text-4xl">🤝</span>
              </div>
              <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">Partnership</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
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
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Our Workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-16 text-white">
              <h3 className="text-5xl font-bold mb-6">Our Creative Workspace</h3>
              <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
                Where innovation meets creativity, our team collaborates to bring your digital dreams to life in an environment designed for stellar success.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Team Section */}
        <div className="mt-32">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="group relative text-5xl font-bold mb-8 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-300 hover:via-teal-400 hover:to-teal-300 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(12,242,93,0.4)] cursor-pointer">
              Our Quality Team
              <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-2xl text-gray-400">Meet the stellar minds behind our cosmic success</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Alex Johnson" 
                    className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-teal-500/30 transition-all duration-500 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">Alex Johnson</h4>
                  <p className="text-teal-400 text-xl mb-6 font-semibold">CEO & Founder</p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Visionary leader with over 10 years of experience in digital innovation and cosmic strategy. Alex founded Orbit with a mission to revolutionize how businesses navigate the digital universe.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Under his leadership, Orbit has successfully launched over 150 projects into the digital stratosphere, helping companies achieve stellar growth and cosmic success across multiple galaxies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Sarah Chen" 
                    className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Sarah Chen</h4>
                  <p className="text-blue-400 text-xl mb-6 font-semibold">Chief Technology Officer</p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Technical genius specializing in cutting-edge space technology solutions. Sarah leads our engineering team with unparalleled expertise in cosmic-scale applications and innovative digital architectures.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Her innovative approach to problem-solving has resulted in breakthrough technologies that have propelled our clients into new frontiers of digital excellence and stellar performance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Mike Rodriguez" 
                    className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Mike Rodriguez</h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Full-stack developer with exceptional expertise in cosmic-scale applications. Mike brings years of experience in building robust, scalable solutions that can handle the demands of intergalactic digital operations.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    His mastery of cutting-edge technologies and passion for clean, efficient code has been instrumental in delivering projects that exceed client expectations and push the boundaries of what's possible in the digital universe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Emily Davis" 
                    className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">Emily Davis</h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Creative designer crafting stellar user experiences across the galaxy. Emily combines artistic vision with user-centered design principles to create interfaces that are both beautiful and intuitive.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Her innovative design solutions have transformed complex digital experiences into seamless, engaging journeys that delight users and drive exceptional results for our clients across multiple planets and galaxies.
                  </p>
                </div>
              </div>
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Excellence" 
                  className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">Excellence</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We strive for stellar excellence in every project, delivering solutions that exceed expectations and push the boundaries of innovation. Our commitment to quality ensures that every digital mission we undertake reaches new heights of success.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                From initial concept to final deployment, we maintain the highest standards of excellence, ensuring that our clients receive solutions that not only meet their requirements but surpass their wildest expectations in the digital cosmos.
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-teal-400/70 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Innovation" 
                  className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-teal-500/30 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-2xl">🌌</span>
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">Innovation</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We embrace cutting-edge technologies and creative thinking to solve complex challenges and explore new frontiers in the digital universe. Our innovative approach drives breakthrough solutions that transform industries.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                By staying ahead of technological trends and constantly pushing the boundaries of what's possible, we help our clients navigate uncharted territories and achieve unprecedented success in their digital endeavors.
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Collaboration" 
                  className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Collaboration</h4>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve shared success across the galaxy. Our collaborative approach ensures that every project benefits from diverse perspectives and expertise.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Through open communication, shared vision, and mutual respect, we build lasting partnerships that extend beyond individual projects, creating a network of success that spans across multiple digital galaxies.
              </p>
            </div>
          </div>
        </div>

        {/* Client Testimonials Slider Section */}
        <div className="mt-32">
          <div className="text-center mb-20 animate-fade-in">
            <h3 className="group relative text-5xl font-bold mb-8 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-300 hover:via-purple-400 hover:to-pink-500 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.4)] cursor-pointer">
              Client Testimonials
              <span className="block mx-auto mt-2 h-[3px] w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-2xl text-gray-400">What our clients say about their cosmic journey with us</p>
          </div>
          
          {/* Testimonial Slider */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button 
              onClick={() => {
                const slider = document.getElementById('testimonial-slider');
                if (slider) {
                  slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                const slider = document.getElementById('testimonial-slider');
                if (slider) {
                  slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Content Container */}
            <div id="testimonial-slider" className="overflow-hidden rounded-3xl">
              <div className="flex transition-transform duration-500 ease-in-out">
                {/* Testimonial 1 */}
                <div className="w-full flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-3xl p-16 border border-white/10 relative">
                  <div className="absolute top-8 left-8 text-8xl text-white/20 font-bold">"</div>
                  <div className="text-center max-w-4xl mx-auto">
                    <p className="text-2xl text-white leading-relaxed mb-8 font-medium">
                      When we talk about Orbit, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Orbit our best ally for success!
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Mike David" 
                        className="w-16 h-16 rounded-full border-2 border-white/20"
                      />
                      <div className="text-left">
                        <div className="text-white text-xl font-semibold">Mike David</div>
                        <div className="text-gray-300">Developer</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-3xl p-16 border border-white/10 relative">
                  <div className="absolute top-8 left-8 text-8xl text-white/20 font-bold">"</div>
                  <div className="text-center max-w-4xl mx-auto">
                    <p className="text-2xl text-white leading-relaxed mb-8 font-medium">
                      Orbit transformed our digital presence completely. Their innovative approach and stellar execution helped us launch into new markets successfully. The precision and creativity of their team is unmatched.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Sarah Johnson" 
                        className="w-16 h-16 rounded-full border-2 border-white/20"
                      />
                      <div className="text-left">
                        <div className="text-white text-xl font-semibold">Sarah Johnson</div>
                        <div className="text-gray-300">CEO, TechCorp</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-3xl p-16 border border-white/10 relative">
                  <div className="absolute top-8 left-8 text-8xl text-white/20 font-bold">"</div>
                  <div className="text-center max-w-4xl mx-auto">
                    <p className="text-2xl text-white leading-relaxed mb-8 font-medium">
                      Working with Orbit was like having a rocket ship for our business. They launched us into the digital stratosphere with incredible results. Their team delivered our project ahead of schedule and exceeded all expectations.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                        alt="Emily Rodriguez" 
                        className="w-16 h-16 rounded-full border-2 border-white/20"
                      />
                      <div className="text-left">
                        <div className="text-white text-xl font-semibold">Emily Rodriguez</div>
                        <div className="text-gray-300">Founder, StartupX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              <button 
                onClick={() => {
                  const slider = document.getElementById('testimonial-slider');
                  if (slider) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className="w-3 h-3 bg-white rounded-full hover:scale-125 transition-all duration-300"
              ></button>
              <button 
                onClick={() => {
                  const slider = document.getElementById('testimonial-slider');
                  if (slider) {
                    slider.scrollTo({ left: slider.offsetWidth, behavior: 'smooth' });
                  }
                }}
                className="w-3 h-3 bg-white/30 rounded-full hover:scale-125 transition-all duration-300"
              ></button>
              <button 
                onClick={() => {
                  const slider = document.getElementById('testimonial-slider');
                  if (slider) {
                    slider.scrollTo({ left: slider.offsetWidth * 2, behavior: 'smooth' });
                  }
                }}
                className="w-3 h-3 bg-white/30 rounded-full hover:scale-125 transition-all duration-300"
              ></button>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Projects Completed" 
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
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    We have successfully completed over 150 projects across various industries, each one carefully crafted and launched into the digital stratosphere with precision and excellence.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    From small startups to enterprise-level corporations, our projects span multiple galaxies, helping businesses achieve their digital transformation goals and reach new heights of success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Client Satisfaction" 
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
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Our commitment to excellence has resulted in a 98% client satisfaction rate, with customers across multiple galaxies praising our innovative solutions and stellar service delivery.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We measure our success not just by project completion, but by the lasting relationships we build with our clients and their continued growth in the digital universe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Years Experience" 
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
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    With over 5 years of experience navigating the digital cosmos, our team has accumulated deep knowledge and expertise in cutting-edge technologies and innovative solutions.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Our journey through the digital universe has taught us valuable lessons about what works, what doesn't, and how to consistently deliver exceptional results for our clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="24/7 Support" 
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
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Our mission control center operates 24/7, ensuring that our clients receive continuous support and assistance whenever they need it, regardless of their location in the digital galaxy.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Whether it's a critical issue that needs immediate attention or a simple question about your digital journey, our dedicated support team is always ready to help you navigate any challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Team Image Section */}
        <div className="mt-32 mb-32">
          <div className="relative h-[70vh] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Our Team in Action" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center p-16 text-white max-w-2xl">
              <div>
                <h3 className="text-5xl font-bold mb-6">Meet Our Stellar Team</h3>
                <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                  Our diverse team of cosmic innovators brings together expertise from across the digital galaxy to deliver exceptional results.
                </p>
                <button className="group px-8 py-4 bg-white text-black text-xl font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="group-hover:tracking-wider transition-all duration-300">VIEW TEAM</span>
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Call to Action Section */}
        <div className="mt-32 mb-20 text-center">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-16 border border-gray-700/50 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border border-cyan-400 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 border border-emerald-400 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-purple-400 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer">
                Ready to Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Digital Journey?</span>
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join the cosmic revolution and let Orbit propel your business into the digital stratosphere. 
                Our stellar team is ready to make your vision a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30">
                  <span className="group-hover:tracking-wider transition-all duration-300">Start Your Mission</span>
                </button>
                <button className="group px-12 py-6 bg-transparent border-2 border-cyan-400 text-teal-400 text-2xl font-bold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30">
                  <span className="group-hover:tracking-wider transition-all duration-300">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-80px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(80px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1.2s ease-out 0.4s both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1.2s ease-out 0.6s both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1.2s ease-out 0.8s both;
        }

        @keyframes text-grow {
          0% {
            opacity: 0;
            transform: scale(0.92);
          }
          60% {
            opacity: 1;
            transform: scale(1.03);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-text-grow {
          animation: text-grow 900ms ease-out 300ms both;
        }
      `}</style>
    </section>
  );
};

export default About;