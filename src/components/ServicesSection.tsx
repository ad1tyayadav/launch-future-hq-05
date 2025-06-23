
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const ServicesSection = () => {
  const [api1, setApi1] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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

  const scrollPrev = useCallback(() => {
    if (api1 && api2) {
      api1.scrollPrev();
      api2.scrollPrev();
    }
  }, [api1, api2]);

  const scrollNext = useCallback(() => {
    if (api1 && api2) {
      api1.scrollNext();
      api2.scrollNext();
    }
  }, [api1, api2]);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api1) return;
    onSelect(api1);
    api1.on("select", onSelect);
    return () => api1?.off("select", onSelect);
  }, [api1, onSelect]);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />

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

        {/* Double Slider Section */}
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center mb-8 gap-4">
            <motion.button
              onClick={scrollPrev}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.button>

            <motion.button
              onClick={scrollNext}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} className="group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8 gap-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* First Slider - Main Services */}
          <div className="mb-16">
            <Carousel 
              setApi={setApi1}
              className="w-full max-w-6xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="h-full group cursor-pointer"
                      whileHover={{ scale: 1.02, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-[400px] relative">
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
                            </motion.div>

                            <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300">
                              {service.title}
                            </h3>

                            <p className="text-white/70 font-sora text-sm leading-relaxed mb-6 flex-grow text-center group-hover:text-white/90 transition-colors duration-300">
                              {service.description}
                            </p>

                            <div className="mt-auto">
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
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Second Slider - Features List */}
          <div>
            <Carousel 
              setApi={setApi2}
              className="w-full max-w-4xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                    <motion.div
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-[300px] group hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-lg font-orbitron font-bold text-white mb-6 text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {service.title} Features
                      </h4>
                      
                      <div className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          >
                            <div className="w-6 h-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20 transition-all duration-300 flex-shrink-0">
                              <Check size={14} className="text-cyan-400" />
                            </div>
                            <span className="text-white/80 text-sm font-sora group-hover:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
