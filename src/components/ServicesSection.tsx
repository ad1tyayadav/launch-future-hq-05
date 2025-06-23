
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServicesSection = () => {
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

  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...services, ...services];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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

        {/* Enhanced horizontal scrolling cards container with frosted glass design */}
        <div className="w-full px-8">
          <div className="relative h-[500px] w-full">
            <motion.div
              className="flex gap-6 absolute left-0"
              animate={{
                x: [200, -((duplicatedServices.length * 360) - 200)]
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: `${(duplicatedServices.length * 360) + 400}px`
              }}
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
                  {/* Frosted Glass Card */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl group-hover:bg-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
                    {/* Soft frosted border glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    
                    {/* Inner content container */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Service Icon/Logo at top */}
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
                        
                        {/* Floating glow effect around icon */}
                        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                      </motion.div>

                      {/* Service Title */}
                      <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-white/70 font-sora text-sm leading-relaxed mb-6 flex-grow text-center group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Features with checkmarks */}
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

                      {/* CTA Button with glass blur and glow - positioned at bottom */}
                      <div className="mt-auto">
                        <motion.button
                          className="relative w-full py-3 px-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white font-sora text-sm font-medium overflow-hidden group-hover:border-cyan-400/50 transition-all duration-300"
                          whileHover={{
                            scale: 1.02,
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Button background glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Button border glow */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                          
                          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                            Explore Solution →
                          </span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Ambient light effects */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200" />
                  </div>

                  {/* Floating particles effect */}
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
