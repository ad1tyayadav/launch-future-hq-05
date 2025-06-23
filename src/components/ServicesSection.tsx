
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Globe, Eye, Cloud, Wifi } from 'lucide-react';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activePanel, setActivePanel] = useState(0);

  const services = [
    {
      title: 'AI-Powered Web Apps',
      description: 'Intelligent applications that learn and adapt to user behavior, powered by cutting-edge machine learning algorithms.',
      icon: Sparkles,
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      features: ['Machine Learning Integration', 'Adaptive User Interfaces', 'Predictive Analytics', 'Natural Language Processing']
    },
    {
      title: '3D Interactive Experiences',
      description: 'Immersive 3D interfaces and visualizations that captivate users and deliver unforgettable digital experiences.',
      icon: Eye,
      color: 'from-purple-400 to-pink-600',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      features: ['WebGL Integration', 'Real-time Rendering', 'Interactive Animations', 'Cross-platform Support']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized applications and smart contracts that redefine trust in digital transactions.',
      icon: Zap,
      color: 'from-amber-400 to-orange-600',
      bgColor: 'from-amber-900/20 to-orange-900/20',
      features: ['Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces', 'Wallet Integration']
    },
    {
      title: 'AR/VR Development',
      description: 'Next-generation augmented and virtual reality experiences that blur the line between digital and physical.',
      icon: Globe,
      color: 'from-emerald-400 to-teal-600',
      bgColor: 'from-emerald-900/20 to-teal-900/20',
      features: ['Immersive Experiences', 'Cross-platform VR', 'AR Mobile Apps', 'WebXR Development']
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable, resilient cloud infrastructure designed to handle tomorrow\'s digital demands today.',
      icon: Cloud,
      color: 'from-indigo-400 to-purple-600',
      bgColor: 'from-indigo-900/20 to-purple-900/20',
      features: ['Auto-scaling Solutions', 'Microservices Architecture', 'DevOps Integration', 'Security by Design']
    },
    {
      title: 'IoT Integration',
      description: 'Smart device ecosystems that connect the physical world to your digital infrastructure seamlessly.',
      icon: Wifi,
      color: 'from-rose-400 to-red-600',
      bgColor: 'from-rose-900/20 to-red-900/20',
      features: ['Device Management', 'Real-time Data Processing', 'Edge Computing', 'Secure Connectivity']
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const panelIndex = Math.min(Math.floor(latest * services.length), services.length - 1);
      if (panelIndex !== activePanel) {
        setActivePanel(panelIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, activePanel, services.length]);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative"
      style={{ height: `${services.length * 100}vh` }}
    >
      {/* Fixed Content Container */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full h-full relative overflow-hidden">
          {services.map((service, index) => {
            const isActive = index === activePanel;
            const progress = useTransform(scrollYProgress, 
              [index / services.length, (index + 1) / services.length], 
              [0, 1]
            );
            
            const springProgress = useSpring(progress, { 
              stiffness: 100, 
              damping: 30, 
              mass: 1 
            });

            const scale = useTransform(springProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
            const opacity = useTransform(springProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
            const x = useTransform(springProgress, [0, 0.5, 1], [-100, 0, 100]);
            const rotateY = useTransform(springProgress, [0, 0.5, 1], [-15, 0, 15]);

            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor}`} />
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Left Content */}
                    <motion.div
                      style={{
                        x,
                        scale,
                        opacity,
                        rotateY
                      }}
                      className="space-y-8"
                    >
                      {/* Icon with Animation */}
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <IconComponent size={40} className="text-white" />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-50 animate-pulse`} />
                      </motion.div>

                      {/* Title with Stagger Animation */}
                      <motion.h2 
                        className="text-6xl md:text-7xl font-orbitron font-bold text-white leading-tight"
                        initial={{ y: 100, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {service.title.split(' ').map((word, wordIndex) => (
                          <motion.span
                            key={wordIndex}
                            className={`inline-block bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + wordIndex * 0.1 }}
                          >
                            {word}&nbsp;
                          </motion.span>
                        ))}
                      </motion.h2>

                      {/* Description */}
                      <motion.p 
                        className="text-xl text-white/80 font-sora leading-relaxed max-w-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.button
                        className={`group relative px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-2xl overflow-hidden`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative z-10 flex items-center space-x-2">
                          <span>Explore Solution</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </motion.button>
                    </motion.div>

                    {/* Right Content - Features */}
                    <motion.div
                      style={{
                        x: useTransform(x, (value) => -value),
                        scale,
                        opacity
                      }}
                      className="space-y-6"
                    >
                      <motion.h3 
                        className="text-2xl font-orbitron font-bold text-white mb-8"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isActive ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        Key Features
                      </motion.h3>

                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl"
                            initial={{ x: 100, opacity: 0 }}
                            animate={isActive ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + featureIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.02,
                              backgroundColor: "rgba(255,255,255,0.1)",
                              transition: { duration: 0.2 }
                            }}
                          >
                            <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Check size={16} className="text-white" />
                            </div>
                            <span className="text-white font-sora font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Progress Indicator */}
                      <motion.div 
                        className="mt-12 pt-8 border-t border-white/10"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                      >
                        <div className="flex items-center justify-between text-white/60 text-sm font-sora mb-4">
                          <span>Service {index + 1} of {services.length}</span>
                          <span>Scroll to continue</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${service.color} rounded-full`}
                            style={{
                              width: useTransform(scrollYProgress, 
                                [0, 1], 
                                [`${(index / services.length) * 100}%`, `${((index + 1) / services.length) * 100}%`]
                              )
                            }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
