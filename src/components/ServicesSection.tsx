
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { Check } from 'lucide-react';

const ServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const controls = useAnimation();

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

  useEffect(() => {
    const updateConstraints = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const containerWidth = container.offsetWidth;
        const scrollWidth = container.scrollWidth;
        const maxScroll = scrollWidth - containerWidth;
        
        setDragConstraints({
          left: -maxScroll,
          right: 0
        });
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, [services.length]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    
    // Add momentum based on velocity
    const velocity = info.velocity.x;
    const currentX = info.point.x;
    
    if (Math.abs(velocity) > 500) {
      const momentumDistance = velocity * 0.3;
      const newX = Math.max(dragConstraints.left, Math.min(dragConstraints.right, currentX + momentumDistance));
      
      controls.start({
        x: newX,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300
        }
      });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollContainerRef.current && !isDragging) {
      const currentTransform = scrollContainerRef.current.style.transform;
      const currentX = currentTransform ? parseFloat(currentTransform.match(/translateX\(([^)]+)px\)/)?.[1] || '0') : 0;
      const deltaX = e.deltaY * 2; // Increase sensitivity
      const newX = Math.max(dragConstraints.left, Math.min(dragConstraints.right, currentX - deltaX));
      
      controls.start({
        x: newX,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 400
        }
      });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-br from-dark-space via-slate-900 to-dark-space">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
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
            Our Services
          </motion.h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto mb-8">
            Discover our cutting-edge solutions that push the boundaries of digital innovation
          </p>
          <p className="text-sm text-cyan-400/70 font-sora">
            Drag to explore • Use scroll wheel • Touch to navigate
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onWheel={handleWheel}
        >
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-8 pb-8"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{
              width: `${services.length * 400 + (services.length - 1) * 32}px`
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex-shrink-0 w-96 h-[500px] relative group cursor-pointer select-none"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", damping: 15, stiffness: 300 }
                }}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl group-hover:bg-white/10 group-hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
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
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  
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
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
                        <span className="text-4xl">{service.icon}</span>
                      </div>
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-2xl font-orbitron font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-white/70 font-sora text-sm leading-relaxed mb-6 flex-grow text-center group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
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
                          <span className="text-white/80 text-xs font-sora group-hover:text-white transition-colors duration-300">
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
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                        Explore Solution →
                      </span>
                    </motion.button>
                  </div>

                  {/* Corner glow effects */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <div className="flex space-x-2">
                {services.map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
