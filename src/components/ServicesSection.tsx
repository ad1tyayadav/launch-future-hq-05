
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      title: 'AI-Powered Web Apps',
      description: 'Intelligent applications that learn and adapt to user behavior, powered by cutting-edge machine learning algorithms.',
      icon: '🤖',
      features: ['Machine Learning Integration', 'Adaptive User Interfaces', 'Predictive Analytics', 'Natural Language Processing'],
      gradient: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20'
    },
    {
      title: '3D Interactive Experiences',
      description: 'Immersive 3D interfaces and visualizations that captivate users and deliver unforgettable digital experiences.',
      icon: '🎮',
      features: ['WebGL Integration', 'Real-time Rendering', 'Interactive Animations', 'Cross-platform Support'],
      gradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized applications and smart contracts that redefine trust in digital transactions.',
      icon: '⛓️',
      features: ['Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces', 'Wallet Integration'],
      gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20'
    },
    {
      title: 'AR/VR Development',
      description: 'Next-generation augmented and virtual reality experiences that blur the line between digital and physical.',
      icon: '🥽',
      features: ['Immersive Experiences', 'Cross-platform VR', 'AR Mobile Apps', 'WebXR Development'],
      gradient: 'from-orange-500/20 via-yellow-500/20 to-red-500/20'
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable, resilient cloud infrastructure designed to handle tomorrow\'s digital demands today.',
      icon: '☁️',
      features: ['Auto-scaling Solutions', 'Microservices Architecture', 'DevOps Integration', 'Security by Design'],
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20'
    },
    {
      title: 'IoT Integration',
      description: 'Smart device ecosystems that connect the physical world to your digital infrastructure seamlessly.',
      icon: '📡',
      features: ['Device Management', 'Real-time Data Processing', 'Edge Computing', 'Secure Connectivity'],
      gradient: 'from-teal-500/20 via-cyan-500/20 to-blue-500/20'
    }
  ];

  return (
    <section id="services" className="relative min-h-[600vh] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-0" />
      
      {/* Header - Fixed at top */}
      <div className="sticky top-0 z-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
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
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto px-6">
            We harness tomorrow's technologies today to build digital experiences 
            that push the boundaries of what's possible.
          </p>
          
          {/* Scroll indicator */}
          <motion.div 
            className="mt-8 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-cyan-400/70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative">
        {services.map((service, index) => {
          const cardProgress = useTransform(
            scrollYProgress,
            [index / services.length, (index + 1) / services.length],
            [0, 1]
          );
          
          const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
          const rotateX = useTransform(cardProgress, [0, 0.5, 1], [15, 0, -15]);
          const opacity = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
          const y = useTransform(cardProgress, [0, 0.5, 1], [100, 0, -100]);

          return (
            <div
              key={service.title}
              className="sticky top-1/2 -translate-y-1/2 h-screen flex items-center justify-center px-6"
              style={{ zIndex: services.length - index }}
            >
              <motion.div
                style={{
                  scale,
                  rotateX,
                  opacity,
                  y,
                  transformPerspective: 1000
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <div className={`relative group cursor-pointer bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700`}>
                  
                  {/* Background overlay with parallax effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      y: useTransform(cardProgress, [0, 1], [-20, 20])
                    }}
                  />
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Content Side */}
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-center space-x-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
                          <span className="text-3xl">{service.icon}</span>
                        </div>
                        <div className="absolute w-16 h-16 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>

                      <div>
                        <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-white/80 font-sora text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>

                      <motion.button
                        className="relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white font-sora font-medium overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                          Explore Solution →
                        </span>
                      </motion.button>
                    </div>

                    {/* Features Side */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20 transition-all duration-300 flex-shrink-0">
                            <Check size={14} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <span className="text-white/80 font-sora group-hover:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  {[...Array(8)].map((_, i) => (
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
                        y: [0, -30, -60],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}

                  {/* Ambient lighting effects */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <motion.div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-30 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {services.map((_, index) => (
          <motion.div
            key={index}
            className="w-1 h-8 bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full origin-top"
              style={{
                scaleY: useTransform(
                  scrollYProgress,
                  [index / services.length, (index + 1) / services.length],
                  [0, 1]
                )
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
