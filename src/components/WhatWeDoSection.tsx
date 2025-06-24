
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
    <section className="py-20 relative overflow-hidden bg-dark-space">
      {/* Background matching main site */}
      <div className="absolute inset-0 bg-dark-space">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)'
          }}
        />
        
        {/* Enhanced star field */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Glowing gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyber-pink/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '4s' }} />
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

        {/* Enhanced Services Grid */}
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
              {/* Enhanced card with multiple layers */}
              <div className="relative h-full">
                {/* Animated outer glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-100 transition-all duration-500 animate-border-flow">
                  <div className="bg-dark-space/90 rounded-xl h-full w-full" />
                </div>
                
                {/* Main card */}
                <div className="glass-morphism p-8 h-full transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-cyber-blue/30 group-hover:border-cyber-blue/60 transition-all duration-500 relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {/* Icon glow background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="text-cyber-blue group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]">
                        {service.icon}
                      </div>
                      
                      {/* Rotating ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-cyber-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" 
                           style={{ animationDuration: '3s' }} />
                    </motion.div>

                    {/* Enhanced Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-all duration-500 relative" 
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <span className="group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]">
                        {service.title}
                      </span>
                    </h3>

                    {/* Enhanced Description */}
                    <p className="text-white/70 group-hover:text-white/90 transition-all duration-500 leading-relaxed" 
                       style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Floating particles */}
                  {[...Array(5)].map((_, i) => (
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
                        y: [0, -30, -60],
                        x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyber-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyber-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8" 
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              Ready to launch your startup to the next orbit?
            </span>
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-500 rounded-xl border-2 border-cyber-blue/30 hover:border-cyber-blue/60 shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] overflow-hidden group"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative z-10">Let's Talk</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
