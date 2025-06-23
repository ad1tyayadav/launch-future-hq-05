
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesCarousel = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const services = [
    {
      title: 'AI-POWERED WEB APPS',
      description: 'Intelligent applications that learn and adapt to user behavior through advanced machine learning.',
      timeline: [
        {
          phase: 'Discovery & Planning',
          description: 'Understanding your business needs and defining AI requirements',
          details: 'We analyze your data, identify patterns, and plan the AI architecture'
        },
        {
          phase: 'Model Selection',
          description: 'Choosing the right AI models for your specific use case',
          details: 'From GPT models to custom neural networks, we select the best fit'
        },
        {
          phase: 'Development & Training',
          description: 'Building and training your custom AI solutions',
          details: 'Fine-tuning models on AWS, creating intelligent interfaces'
        },
        {
          phase: 'Integration & Testing',
          description: 'Seamlessly integrating AI into your application',
          details: 'API integration, performance optimization, and comprehensive testing'
        },
        {
          phase: 'Deployment & Monitoring',
          description: 'Launching your AI-powered application',
          details: 'Cloud deployment, monitoring, and continuous improvement'
        }
      ]
    },
    {
      title: '3D INTERACTIVE EXPERIENCES',
      description: 'Immersive 3D interfaces and visualizations that captivate and engage users.',
      timeline: [
        {
          phase: 'Concept Design',
          description: 'Creating the vision for your 3D experience',
          details: 'Wireframes, user journey mapping, and visual concepts'
        },
        {
          phase: '3D Modeling',
          description: 'Building detailed 3D assets and environments',
          details: 'High-quality models, textures, and animations'
        },
        {
          phase: 'WebGL Development',
          description: 'Implementing interactive 3D functionality',
          details: 'Three.js integration, real-time rendering, physics simulation'
        },
        {
          phase: 'Performance Optimization',
          description: 'Ensuring smooth performance across devices',
          details: 'LOD systems, efficient rendering, mobile optimization'
        }
      ]
    },
    {
      title: 'BLOCKCHAIN SOLUTIONS',
      description: 'Secure, decentralized applications and smart contracts for the future of web.',
      timeline: [
        {
          phase: 'Blockchain Architecture',
          description: 'Designing your decentralized system',
          details: 'Network selection, consensus mechanisms, security protocols'
        },
        {
          phase: 'Smart Contract Development',
          description: 'Building secure and efficient smart contracts',
          details: 'Solidity development, security audits, gas optimization'
        },
        {
          phase: 'DApp Frontend',
          description: 'Creating user-friendly decentralized interfaces',
          details: 'Web3 integration, wallet connections, transaction handling'
        },
        {
          phase: 'Testing & Deployment',
          description: 'Comprehensive testing and mainnet deployment',
          details: 'Testnet deployment, security testing, mainnet launch'
        },
        {
          phase: 'Maintenance & Updates',
          description: 'Ongoing support and feature updates',
          details: 'Bug fixes, feature additions, security updates'
        }
      ]
    },
    {
      title: 'AR/VR DEVELOPMENT',
      description: 'Next-generation augmented and virtual reality experiences that blur digital boundaries.',
      timeline: [
        {
          phase: 'Experience Design',
          description: 'Crafting immersive user experiences',
          details: 'UX/UI for VR/AR, interaction design, user testing'
        },
        {
          phase: 'Platform Development',
          description: 'Building for multiple XR platforms',
          details: 'WebXR, mobile AR, VR headsets, cross-platform compatibility'
        },
        {
          phase: '3D Content Creation',
          description: 'Developing immersive 3D content',
          details: 'Environment design, character modeling, spatial audio'
        },
        {
          phase: 'Integration & Testing',
          description: 'Platform testing and optimization',
          details: 'Device testing, performance optimization, user acceptance testing'
        }
      ]
    }
  ];

  // Auto-advance cards within current service
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % services[currentService].timeline.length);
    }, 4000);

    return () => clearInterval(cardInterval);
  }, [currentService, services]);

  const nextService = () => {
    setCurrentService(prev => (prev + 1) % services.length);
    setCurrentCard(0);
  };

  const prevService = () => {
    setCurrentService(prev => prev === 0 ? services.length - 1 : prev - 1);
    setCurrentCard(0);
  };

  const currentServiceData = services[currentService];

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-dark-space/95 to-dark-space" />
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
        {/* Main Service Display */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center mb-12"
            >
              <motion.h2 
                className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 tracking-wider"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0, 245, 255, 0.3)',
                    '0 0 40px rgba(0, 245, 255, 0.6)',
                    '0 0 20px rgba(0, 245, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {currentServiceData.title}
              </motion.h2>
              <p className="text-xl text-white/70 font-sora max-w-3xl mx-auto leading-relaxed">
                {currentServiceData.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Timeline Cards */}
          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentService}-${currentCard}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                  {/* Progress indicator */}
                  <div className="flex justify-center mb-8">
                    <div className="flex space-x-2">
                      {currentServiceData.timeline.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            index === currentCard
                              ? 'w-12 bg-gradient-to-r from-cyan-400 to-purple-500'
                              : index < currentCard
                              ? 'w-6 bg-cyan-400/50'
                              : 'w-6 bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <motion.div
                      className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full mb-6"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-cyan-300 font-orbitron font-semibold text-sm tracking-wider">
                        PHASE {currentCard + 1}
                      </span>
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
                      {currentServiceData.timeline[currentCard].phase}
                    </h3>
                    
                    <p className="text-xl text-white/80 font-sora mb-6 max-w-2xl mx-auto">
                      {currentServiceData.timeline[currentCard].description}
                    </p>
                    
                    <p className="text-white/60 font-sora max-w-3xl mx-auto leading-relaxed">
                      {currentServiceData.timeline[currentCard].details}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={prevService}
            className="group flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-4 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
          </button>

          {/* Service indicators */}
          <div className="flex space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentService(index);
                  setCurrentCard(0);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentService
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextService}
            className="group flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-4 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        {/* Bottom preview cards */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-4 max-w-4xl overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  index === currentService
                    ? 'opacity-0 scale-0'
                    : 'opacity-60 hover:opacity-100 scale-75 hover:scale-80'
                }`}
                onClick={() => {
                  setCurrentService(index);
                  setCurrentCard(0);
                }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-48">
                  <h4 className="text-sm font-orbitron font-semibold text-white mb-2 truncate">
                    {service.title}
                  </h4>
                  <div className="flex space-x-1">
                    {service.timeline.map((_, cardIndex) => (
                      <div
                        key={cardIndex}
                        className="h-1 w-4 bg-white/20 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
};

export default ServicesCarousel;
