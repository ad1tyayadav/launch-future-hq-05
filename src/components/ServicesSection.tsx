
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'AI-Powered Web Apps',
      description: 'Intelligent applications that learn and adapt to user behavior, powered by cutting-edge machine learning algorithms.',
      icon: '🤖',
      color: 'from-cyber-blue to-cyber-purple',
      accentColor: 'cyber-blue'
    },
    {
      title: '3D Interactive Experiences',
      description: 'Immersive 3D interfaces and visualizations that captivate users and deliver unforgettable digital experiences.',
      icon: '🎮',
      color: 'from-cyber-purple to-cyber-pink',
      accentColor: 'cyber-purple'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized applications and smart contracts that redefine trust in digital transactions.',
      icon: '⛓️',
      color: 'from-cyber-pink to-neon-green',
      accentColor: 'cyber-pink'
    },
    {
      title: 'AR/VR Development',
      description: 'Next-generation augmented and virtual reality experiences that blur the line between digital and physical.',
      icon: '🥽',
      color: 'from-neon-green to-cyber-blue',
      accentColor: 'neon-green'
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable, resilient cloud infrastructure designed to handle tomorrow\'s digital demands today.',
      icon: '☁️',
      color: 'from-cyber-blue to-electric-blue',
      accentColor: 'electric-blue'
    },
    {
      title: 'IoT Integration',
      description: 'Smart device ecosystems that connect the physical world to your digital infrastructure seamlessly.',
      icon: '📡',
      color: 'from-electric-blue to-cyber-purple',
      accentColor: 'cyber-blue'
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

        {/* Enhanced horizontal scrolling cards container with proper spacing */}
        <div className="w-full px-8">
          <div className="relative h-[480px] w-full">
            <motion.div
              className="flex gap-12 absolute left-0"
              animate={{
                x: [200, -((duplicatedServices.length * 440) - 200)]
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: `${(duplicatedServices.length * 440) + 400}px`
              }}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-96 h-80 relative group cursor-pointer overflow-hidden rounded-2xl"
                  animate={{
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 8,
                    z: 50
                  }}
                >
                  {/* Enhanced neon glow outline - always visible */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-cyber-blue/40"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2), inset 0 0 20px rgba(0, 245, 255, 0.1)'
                    }}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2)',
                        '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
                        '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgba(0, 245, 255, 0.4)',
                        'rgba(139, 92, 246, 0.5)',
                        'rgba(0, 245, 255, 0.4)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Enhanced neon glow on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 border-2 border-cyber-purple/60"
                    style={{
                      boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.2)'
                    }}
                  />

                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl" />
                  
                  {/* Holographic glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2))',
                      boxShadow: '0 0 50px rgba(0, 245, 255, 0.4), inset 0 0 50px rgba(139, 92, 246, 0.2)'
                    }}
                  />
                  
                  {/* Subtle grid pattern overlay */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div 
                      className="w-full h-full rounded-2xl"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(0, 245, 255, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Enhanced service icon */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="text-5xl mb-4 relative"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -10, 10, 0] 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Icon holographic glow */}
                        <div className="absolute inset-0 blur-xl bg-cyber-blue/30 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Floating particles around icon */}
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-0 group-hover:opacity-100"
                            style={{
                              left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 30}px`,
                              top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}px`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                        
                        <span className="relative z-10">{service.icon}</span>
                      </motion.div>
                    </div>

                    {/* Enhanced service title */}
                    <motion.h3 
                      className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all duration-500"
                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Enhanced service description */}
                    <p className="text-white/70 font-sora text-sm leading-relaxed mb-6 flex-grow group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Enhanced CTA with holographic elements */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300" />
                      <div className="relative flex items-center justify-between p-3 border border-white/10 rounded-lg group-hover:border-cyber-blue/50 transition-all duration-300 backdrop-blur-sm">
                        <span className="text-cyber-blue font-semibold text-sm group-hover:text-white transition-colors duration-300">Explore Solution</span>
                        <motion.div
                          animate={{ 
                            x: [0, 5, 0],
                            rotate: [0, 90, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          className="text-cyber-blue group-hover:text-white transition-colors duration-300"
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Holographic scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: [-100, 400],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    style={{
                      width: '2px',
                      height: '100%',
                    }}
                  />

                  {/* Additional holographic effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl">
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(0, 245, 255, 0.2), transparent, rgba(139, 92, 246, 0.2), transparent)',
                        filter: 'blur(20px)'
                      }}
                    />
                  </div>
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
