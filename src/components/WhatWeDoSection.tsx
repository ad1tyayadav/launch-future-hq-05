
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Lightbulb, ArrowUp, ArrowDown, CirclePlus } from 'lucide-react';
import { Button } from './ui/button';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: <CirclePlus className="w-8 h-8" />,
      title: "Funding Support",
      description: "Connect with investors and secure the capital you need to grow."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tech Stack Solutions",
      description: "Build robust, scalable technology foundations for your startup."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create intuitive, beautiful user experiences that convert."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Pitch Deck Development",
      description: "Craft compelling presentations that win over investors."
    },
    {
      icon: <ArrowUp className="w-8 h-8" />,
      title: "Marketing Strategy",
      description: "Develop data-driven marketing plans that drive growth."
    },
    {
      icon: <ArrowDown className="w-8 h-8" />,
      title: "Strategic Consulting",
      description: "Navigate challenges with expert guidance and mentorship."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-dark-space to-space-gray">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle star field */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Glowing gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 245, 255, 0.5)',
                '0 0 20px rgba(0, 245, 255, 0.8)',
                '0 0 10px rgba(0, 245, 255, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            What We Do & How We Do It
          </motion.h2>
          
          <motion.p 
            className="text-xl text-cyber-blue mb-8 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fueling startups for liftoff—tech, funding, and everything in between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              At DevLaunch, we're a startup accelerator dedicated to helping early-stage companies reach the next level. 
              We provide comprehensive support including funding connections, cutting-edge tech solutions, innovative UI/UX design, 
              compelling pitch deck development, strategic marketing, and expert consulting. Our mission is to transform 
              ambitious ideas into successful, scalable businesses ready to conquer their markets.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-morphism p-8 h-full transition-all duration-300 hover:bg-white/10 hover:scale-105 relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ padding: '2px' }}>
                  <div className="bg-dark-space rounded-xl h-full w-full" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-2xl flex items-center justify-center mb-6 border border-cyber-blue/30 group-hover:border-cyber-blue/60 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-cyber-blue group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors duration-300" 
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300" 
                     style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {service.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyber-blue/60 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
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
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8" 
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Ready to launch your startup to the next orbit?
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="cyber-button text-lg px-12 py-6 bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span className="relative z-10">Let's Talk</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
