import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const controls = useAnimation();
  const animationRef = useRef<{ currentX: number; isPaused: boolean }>({ currentX: 200, isPaused: false });

  const services = [
    {
      title: 'AI-Powered Web Apps',
      description: 'Intelligent applications that learn and adapt to user behavior, powered by cutting-edge machine learning algorithms.',
      icon: '🤖',
      features: ['Machine Learning Integration', 'Adaptive User Interfaces', 'Predictive Analytics', 'Natural Language Processing']
    },
    {
      title: '3D Interactive Experiences',
      description: 'Immersive 3D interfaces and visualizations that captivate users and deliver unforgettable digital experiences.',
      icon: '🎮',
      features: ['WebGL Integration', 'Real-time Rendering', 'Interactive Animations', 'Cross-platform Support']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized applications and smart contracts that redefine trust in digital transactions.',
      icon: '⛓️',
      features: ['Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces', 'Wallet Integration']
    },
    {
      title: 'AR/VR Development',
      description: 'Next-generation augmented and virtual reality experiences that blur the line between digital and physical.',
      icon: '🥽',
      features: ['Immersive Experiences', 'Cross-platform VR', 'AR Mobile Apps', 'WebXR Development']
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable, resilient cloud infrastructure designed to handle tomorrow\'s digital demands today.',
      icon: '☁️',
      features: ['Auto-scaling Solutions', 'Microservices Architecture', 'DevOps Integration', 'Security by Design']
    },
    {
      title: 'IoT Integration',
      description: 'Smart device ecosystems that connect the physical world to your digital infrastructure seamlessly.',
      icon: '📡',
      features: ['Device Management', 'Real-time Data Processing', 'Edge Computing', 'Secure Connectivity']
    }
  ];

  // Create seamless loop by duplicating services multiple times
  const duplicatedServices = [...services, ...services, ...services];

  useEffect(() => {
    const startAnimation = () => {
      if (animationRef.current.isPaused || isManualScrolling || duplicatedServices.length === 0) return;
      
      const cardWidth = 360;
      const gap = 24; // 6 * 4 = 24px gap
      const totalCardWidth = cardWidth + gap;
      const singleSetWidth = services.length * totalCardWidth;
      
      // Start from current position and animate to one full set width to the left
      const startX = animationRef.current.currentX;
      const endX = startX - singleSetWidth;
      
      // Calculate duration based on remaining distance
      const distance = Math.abs(startX - endX);
      const duration = (distance / singleSetWidth) * 40; // 40 seconds for one full cycle
      
      controls.start({
        x: endX,
        transition: {
          duration,
          ease: "linear"
        }
      }).then(() => {
        // Reset position seamlessly when animation completes
        if (!animationRef.current.isPaused && !isManualScrolling) {
          animationRef.current.currentX = startX;
          controls.set({ x: startX });
          // Restart animation
          setTimeout(() => {
            if (!animationRef.current.isPaused && !isManualScrolling) {
              startAnimation();
            }
          }, 0);
        }
      });
    };

    if (!isHovered && !isManualScrolling && duplicatedServices.length > 0) {
      animationRef.current.isPaused = false;
      startAnimation();
    } else {
      animationRef.current.isPaused = true;
      controls.stop();
    }
  }, [isHovered, isManualScrolling, controls, duplicatedServices.length]);

  const handleMouseEnter = () => {
    // Get current position from the actual transform
    const element = scrollContainerRef.current;
    if (element) {
      const transform = window.getComputedStyle(element).transform;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(parseFloat);
          animationRef.current.currentX = values[4] || animationRef.current.currentX;
        }
      }
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollLeft = () => {
    setIsManualScrolling(true);
    const newX = Math.min(animationRef.current.currentX + 400, 200);
    animationRef.current.currentX = newX;
    
    controls.start({
      x: newX,
      transition: { duration: 0.5, ease: "easeOut" }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 1000);
    });
  };

  const scrollRight = () => {
    setIsManualScrolling(true);
    const cardWidth = 360;
    const gap = 24;
    const totalCardWidth = cardWidth + gap;
    const singleSetWidth = services.length * totalCardWidth;
    const minX = -(singleSetWidth * 2); // Allow scrolling through two sets
    const newX = Math.max(animationRef.current.currentX - 400, minX);
    animationRef.current.currentX = newX;
    
    controls.start({
      x: newX,
      transition: { duration: 0.5, ease: "easeOut" }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 1000);
    });
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Blended Background - matching main site */}
      <div className="absolute inset-0">
        {/* Seamless background blend */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6"
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 245, 255, 0.5)',
                '0 0 20px rgba(0, 245, 255, 0.8)',
                '0 0 10px rgba(0, 245, 255, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Services
          </motion.h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            We harness tomorrow's technologies today to build digital experiences 
            that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="w-full px-8 relative">
          <motion.button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            onClick={scrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="group-hover:text-cyan-400 transition-colors duration-300" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="group-hover:text-cyan-400 transition-colors duration-300" />
          </motion.button>

          <div className="relative h-[500px] w-full">
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-6 absolute left-0"
              animate={controls}
              style={{
                width: `${(duplicatedServices.length * 360) + (duplicatedServices.length * 24) + 400}px`
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-80 h-[480px] relative group cursor-pointer"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 6 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -20
                  }}
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl group-hover:bg-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      <motion.div 
                        className="mb-6 relative flex justify-center"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        
                        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                      </motion.div>

                      <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-white/70 font-sora text-sm leading-relaxed mb-6 flex-grow text-center group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          >
                            <div className="w-5 h-5 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20 transition-all duration-300 flex-shrink-0">
                              <Check size={12} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <span className="text-white/80 text-sm font-sora group-hover:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <motion.button
                          className="relative w-full py-3 px-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white font-sora text-sm font-medium overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300"
                          whileHover={{
                            scale: 1.02,
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                          
                          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                            Explore Solution →
                          </span>
                        </motion.button>
                      </div>
                    </div>

                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200" />
                  </div>

                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
