import React, { useEffect, useMemo, useRef, useState, Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
// Lazy load heavy sections to speed up initial render
const TalkBanner = lazy(() => import('../components/TalkBanner'));
const FooterOrbitMoonTech = lazy(() => import('../components/FooterOrbit'));
import { motion, useInView } from 'framer-motion';

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[160px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
  </div>
);

function useCounter(target, start = 0, durationMs = 1600, when = true) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!when) return;
    let raf = 0;
    const t0 = performance.now();
    const animate = (now) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(Math.floor(start + (target - start) * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, start, durationMs, when]);
  return value;
}

const Services = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  const fadeUp = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }), []);

  const fade = useMemo(() => ({
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  }), []);

  const scaleIn = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }), []);

  const staggerChildren = useMemo(() => ({
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }), []);

  return (
    <div className="min-h-screen">

      
      <section id="services" className="py-20 min-h-screen relative overflow-hidden">
        {/* Starfield provided globally */}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Stars */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/80 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/70 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/70 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-teal-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></div>
          
          {/* Orbital Rings */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-teal-700/30 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-teal-500/20 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 border border-teal-600/25 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 border border-white/15 rounded-full animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
          
          {/* Central Orbit */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-teal-800/20 rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-teal-400/15 rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/15 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(closest-side, rgba(12,242,93,.25), rgba(37,99,235,0))",
              mixBlendMode: "screen",
            }}
          />
          <div 
            className="absolute right-1/4 bottom-1/3 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(closest-side, rgba(255,255,255,.18), rgba(255,255,255,0))",
              mixBlendMode: "screen",
            }}
          />
        </div>

        <div ref={containerRef} className="w-full relative z-10">
          {/* Hero Section - Matching About Page Design */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="mb-12 sm:mb-16 min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-tight text-white animate-text-grow"
            >
              Innovating beyond boundaries- derivering future ready fintech & Web3 solutions
          
            </motion.h1>
            <div className="mt-6 sm:mt-8 mb-16 sm:mb-24 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
              <div className="md:col-span-3">
         
              </div>
              <div className="md:col-span-12 text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed text-center text-justify max-w-3xl mx-auto animate-text-grow">
                Build powerful software solutions with cutting-edge <br /> technologies crafted to match Orbit's expertise and propel your business into the digital stratosphere.
              </div>
            </div>
          </motion.div>

          {/* Core Services Section */}
          <div className="mb-24 sm:mb-32 px-4 sm:px-8 md:px-12 lg:px-16">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-center mb-16 sm:mb-20"
            >
              <motion.h3 variants={fadeUp} className="group relative text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white hover:text-teal-500 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(12,242,93,0.4)] cursor-pointer">
                Core Services
                <span className="block mx-auto mt-2 h-[2px] sm:h-[3px] w-0 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-500 group-hover:w-full"></span>
              </motion.h3>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-white/70">Essential services that power your digital journey</motion.p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
            >
              {/* FinTech */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/70 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="FinTech" 
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-teal-500 transition-colors duration-300">FinTech</h4>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-justify">
                  Revolutionary financial technology solutions that transform how businesses handle payments, transactions, and financial operations. We build secure, scalable fintech platforms that drive digital transformation.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed text-justify">
                  From payment gateways and digital wallets to blockchain-based financial systems, we deliver cutting-edge fintech solutions that enhance user experience and ensure regulatory compliance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Blockchain</span>
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Payments</span>
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Security</span>
                </div>
              </motion.div>

              {/* Gaming */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/70 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Gaming" 
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-emerald-500/30 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <span className="text-2xl">🎮</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-teal-500 transition-colors duration-300">Gaming</h4>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-justify">
                  Immersive gaming experiences that captivate players and drive engagement. We develop high-performance games with stunning graphics, smooth gameplay, and innovative mechanics across multiple platforms.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed text-justify">
                  From mobile games and web-based gaming to VR/AR experiences, we create interactive entertainment solutions that push the boundaries of what's possible in the gaming industry.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Unity</span>
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Unreal</span>
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">VR/AR</span>
                </div>
              </motion.div>

              {/* Web3 */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/70 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="relative mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Web3" 
                    className="w-full h-48 rounded-2xl object-cover shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <span className="text-2xl">🌐</span>
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-teal-500 transition-colors duration-300">Web3</h4>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-justify">
                  Next-generation decentralized applications that revolutionize how we interact with the internet. We build Web3 solutions that empower users with true digital ownership and decentralized control.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed text-justify">
                  From DeFi protocols and NFT marketplaces to DAOs and smart contracts, we create innovative Web3 applications that shape the future of the decentralized web.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Ethereum</span>
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">Smart Contracts</span>
                  <span className="px-3 py-1 bg-teal-500/15 text-teal-300 rounded-full text-sm">DeFi</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Full-Width Image Section */}
          <div className="mt-24 sm:mt-32 mb-24 sm:mb-32 px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="Our Development Process" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-16 text-white">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Development Process</h3>
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed text-justify">
                  We follow a systematic approach to ensure every project launches successfully into the digital stratosphere with precision and excellence.
                </p>
              </div>
            </div>

          </div>

          {/* Advanced Services Section */}
          <div className="mb-24 sm:mb-32 px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-16 sm:mb-20 animate-fade-in">
              <h3 className="group relative text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white hover:text-teal-500 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(12,242,93,0.4)] cursor-pointer">
                Advanced Services
                <span className="block mx-auto mt-2 h-[2px] sm:h-[3px] w-0 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-500 group-hover:w-full"></span>
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70">Specialized solutions for complex digital challenges</p>
            </div>
            
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
            >
              {/* Cloud Solutions */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Cloud Solutions" 
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <span className="text-2xl">☁️</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">Cloud Solutions</h4>
                    <p className="text-teal-500 text-xl mb-6 font-semibold">Scalable Infrastructure</p>
                    <p className="text-white/80 text-lg leading-relaxed mb-4 text-justify">
                      Comprehensive cloud infrastructure solutions that scale with your business. We design, deploy, and manage cloud environments that ensure optimal performance and reliability.
                    </p>
                    <p className="text-white/70 text-base leading-relaxed text-justify">
                      From AWS and Azure to Google Cloud, we help you migrate to the cloud and optimize your infrastructure for maximum efficiency and cost-effectiveness.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI & Machine Learning */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="AI & Machine Learning" 
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-indigo-500/30 transition-all duration-500 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <span className="text-2xl">🤖</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">AI & Machine Learning</h4>
                    <p className="text-teal-500 text-xl mb-6 font-semibold">Intelligent Solutions</p>
                    <p className="text-white/80 text-lg leading-relaxed mb-4 text-justify">
                      Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that adapt and learn from user behavior.
                    </p>
                    <p className="text-white/70 text-base leading-relaxed text-justify">
                      From chatbots and recommendation engines to predictive analytics and computer vision, we implement AI solutions that transform your business operations.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* E-commerce Solutions */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="E-commerce Solutions" 
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-green-500/30 transition-all duration-500 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <span className="text-2xl">🛒</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">E-commerce Solutions</h4>
                    <p className="text-teal-500 text-xl mb-6 font-semibold">Digital Storefronts</p>
                    <p className="text-white/80 text-lg leading-relaxed mb-4 text-justify">
                      Complete e-commerce platforms that drive sales and provide exceptional shopping experiences. We build online stores that convert visitors into loyal customers.
                    </p>
                    <p className="text-white/70 text-base leading-relaxed text-justify">
                      From Shopify and WooCommerce to custom solutions, we create secure, scalable e-commerce platforms with integrated payment processing and inventory management.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Digital Marketing */}
              <motion.div variants={scaleIn} className="group hover:scale-105 transition-all duration-700 bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal-700/50 hover:border-teal-500/60 hover:shadow-2xl hover:shadow-teal-500/20 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Digital Marketing" 
                      className="w-48 h-48 rounded-2xl mx-auto md:mx-0 shadow-2xl group-hover:shadow-pink-500/30 transition-all duration-500 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-teal-500 transition-colors duration-300">Digital Marketing</h4>
                    <p className="text-teal-500 text-xl mb-6 font-semibold">Growth Strategies</p>
                    <p className="text-white/80 text-lg leading-relaxed mb-4 text-justify">
                      Comprehensive digital marketing strategies that increase brand visibility, drive traffic, and generate qualified leads for your business.
                    </p>
                    <p className="text-white/70 text-base leading-relaxed text-justify">
                      From SEO and social media marketing to PPC campaigns and content strategy, we help you reach your target audience and achieve your business goals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>


          {/* Testimonials */}
          <div className="mb-24 sm:mb-32 px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-10 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">What Clients Say</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1,2,3].map((i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-120px' }}
                  className="relative bg-gradient-to-br from-teal-900/60 to-teal-800/80 border border-teal-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8"
                >
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-2xl shadow-lg">“</div>
                  <p className="mt-4 text-white/80 leading-relaxed text-justify">
                    Orbit Walls transformed our product experience. Ship velocity improved and metrics followed.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-teal-600" />
                    <div>
                      <div className="text-white font-semibold">Alex Carter</div>
                      <div className="text-white/60 text-sm">Product Lead, StellarCorp</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>



          {/* Call to Action Section */}
          <div className="mt-24 sm:mt-32 mb-16 sm:mb-20 text-center px-4 sm:px-8 md:px-12 lg:px-16">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 border border-teal-700/50 relative overflow-hidden"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-16 h-16 border border-teal-400 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/60 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-teal-400/70 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 hover:text-teal-500 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(12,242,93,0.4)] cursor-pointer">
                  Ready to Launch Your <span className="text-teal-500">Digital Project?</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-justify">
                  Let's discuss your project requirements and create a custom solution that propels your business into the digital stratosphere. 
                  Our team is ready to make your vision a reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-teal-600 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-teal-700">
                    <span className="group-hover:tracking-wider transition-all duration-300">Start Your Project</span>
                  </button>
                  <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-transparent border-2 border-teal-400 text-teal-500 text-lg sm:text-xl md:text-2xl font-bold rounded-full hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="group-hover:tracking-wider transition-all duration-300">View Portfolio</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
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

          .animate-text-grow {
            animation: text-grow 900ms ease-out 300ms both;
          }
        `}</style>
      </section>
      
      <Suspense fallback={<LoadingFallback />}>
        <TalkBanner />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FooterOrbitMoonTech />
      </Suspense>
    </div>
  );
};

export default Services;

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-gray-900/30 hover:bg-gray-900/50 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-lg">{title}</span>
        <span className={`transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-white/80 leading-relaxed text-justify">{children}</div>
      </motion.div>
    </div>
  );
}

function StatCard({ label, value, suffix }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '-80px' });
  const v = useCounter(value, 0, 1400, seen);
  return (
    <motion.div
      ref={ref}
      variants={
        {
          hidden: { opacity: 0, scale: 0.94 },
          show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
        }
      }
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-teal-900/60 to-teal-800/80 rounded-2xl p-8 border border-teal-700/50 text-center"
    >
      <div className="text-5xl font-extrabold text-teal-500 drop-shadow-[0_0_12px_rgba(12,242,93,.35)]">{v}{suffix || ''}</div>
      <div className="mt-2 text-white/70">{label}</div>
    </motion.div>
  );
}