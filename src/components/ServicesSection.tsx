
import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create smooth spring animation for horizontal scroll
  const springScrollX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -2400]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  );

  const services = [
    {
      title: 'AI-Powered Web Apps',
      description: 'Intelligent applications that learn and adapt to user behavior, powered by cutting-edge machine learning algorithms.',
      icon: '🤖',
      features: ['Machine Learning Integration', 'Adaptive User Interfaces', 'Predictive Analytics']
    },
    {
      title: '3D Interactive Experiences',
      description: 'Immersive 3D interfaces and visualizations that captivate users and deliver unforgettable digital experiences.',
      icon: '🎮',
      features: ['WebGL Integration', 'Real-time Rendering', 'Interactive Animations']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized applications and smart contracts that redefine trust in digital transactions.',
      icon: '⛓️',
      features: ['Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces']
    },
    {
      title: 'AR/VR Development',
      description: 'Next-generation augmented and virtual reality experiences that blur the line between digital and physical.',
      icon: '🥽',
      features: ['Immersive Experiences', 'Cross-platform VR', 'AR Mobile Apps']
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable, resilient cloud infrastructure designed to handle tomorrow\'s digital demands today.',
      icon: '☁️',
      features: ['Auto-scaling Solutions', 'Microservices Architecture', 'DevOps Integration']
    },
    {
      title: 'IoT Integration',
      description: 'Smart device ecosystems that connect the physical world to your digital infrastructure seamlessly.',
      icon: '📡',
      features: ['Device Management', 'Real-time Data Processing', 'Edge Computing']
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="services" ref={containerRef} className="relative h-[300vh] bg-gradient-to-br from-dark-space via-purple-900/20 to-dark-space overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Sticky container for horizontal scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
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

          {/* Horizontal scrolling cards */}
          <div className="relative h-[500px] w-full overflow-hidden">
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-8 h-full"
              style={{ 
                x: isMobile ? 0 : springScrollX,
                width: `${services.length * 400 + (services.length - 1) * 32}px`
              }}
              drag={isMobile ? "x" : false}
              dragConstraints={isMobile ? {
                left: -(services.length * 400 + (services.length - 1) * 32 - window.innerWidth + 48),
                right: 0
              } : undefined}
              dragElastic={0.1}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex-shrink-0 w-96 h-full relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Card background with glass effect */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl group-hover:bg-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-cyan-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20 transition-all duration-500" />
                    
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div 
                        className="mb-6 relative flex justify-center"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-300">
                          <span className="text-4xl">{service.icon}</span>
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                      </motion.div>

                      {/* Title */}
                      <motion.h3 
                        className="text-2xl font-orbitron font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-white/70 font-sora text-sm leading-relaxed mb-6 flex-grow text-center group-hover:text-white/90 transition-colors duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 + featureIndex * 0.1 }}
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

                      {/* CTA Button */}
                      <motion.button
                        className="relative w-full py-3 px-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white font-sora text-sm font-medium overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                          Explore Solution →
                        </span>
                      </motion.button>
                    </div>

                    {/* Floating particles on hover */}
                    {[...Array(3)].map((_, i) => (
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
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator for desktop */}
          {!isMobile && (
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-white/60 text-sm font-sora">
                Scroll down to explore our services
              </p>
              <motion.div 
                className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mx-auto mt-2"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleY: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}

          {/* Swipe indicator for mobile */}
          {isMobile && (
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-white/60 text-sm font-sora">
                Swipe left to explore our services
              </p>
              <motion.div 
                className="flex justify-center items-center mt-2"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-cyan-400 text-2xl">→</span>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
