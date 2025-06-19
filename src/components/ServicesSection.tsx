
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'AI-Powered Web Apps',
      description: 'Intelligent applications that learn and adapt to user behavior, powered by cutting-edge machine learning algorithms.',
      icon: '🤖',
      color: 'from-cyber-blue to-cyber-purple'
    },
    {
      title: '3D Interactive Experiences',
      description: 'Immersive 3D interfaces and visualizations that captivate users and deliver unforgettable digital experiences.',
      icon: '🎮',
      color: 'from-cyber-purple to-cyber-pink'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized applications and smart contracts that redefine trust in digital transactions.',
      icon: '⛓️',
      color: 'from-cyber-pink to-neon-green'
    },
    {
      title: 'AR/VR Development',
      description: 'Next-generation augmented and virtual reality experiences that blur the line between digital and physical.',
      icon: '🥽',
      color: 'from-neon-green to-cyber-blue'
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable, resilient cloud infrastructure designed to handle tomorrow\'s digital demands today.',
      icon: '☁️',
      color: 'from-cyber-blue to-electric-blue'
    },
    {
      title: 'IoT Integration',
      description: 'Smart device ecosystems that connect the physical world to your digital infrastructure seamlessly.',
      icon: '📡',
      color: 'from-electric-blue to-cyber-purple'
    }
  ];

  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...services, ...services];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Galaxy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-space-gray to-dark-space">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">
            Services
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            We harness tomorrow's technologies today to build digital experiences 
            that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Horizontal scrolling cards container */}
        <div className="relative h-80 overflow-hidden">
          <motion.div
            className="flex gap-8 absolute"
            animate={{
              x: [-100, -50 * duplicatedServices.length + 'vw']
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${duplicatedServices.length * 400}px`
            }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                className="flex-shrink-0 w-80 h-64 glass-morphism p-6 group cursor-pointer relative"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Glowing border effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`}
                />
                
                {/* Neon glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(0,245,255,0.5)]" />

                {/* Service icon with glow */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 relative">
                    <div className="absolute inset-0 blur-md bg-cyber-blue/30 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{service.icon}</span>
                  </div>

                  {/* Service title */}
                  <h3 className="text-xl font-orbitron font-semibold text-white mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service description */}
                  <p className="text-white/70 font-sora text-sm leading-relaxed mb-4 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Learn more indicator */}
                  <motion.div
                    className="text-cyber-blue font-semibold text-sm flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-cyber-blue to-transparent opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-l from-cyber-purple to-transparent opacity-10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ServicesSection;
