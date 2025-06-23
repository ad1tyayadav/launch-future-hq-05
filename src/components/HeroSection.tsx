

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate distance between cursor and element
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Tech elements data with positions
  const techElements = [
    { id: 1, x: 10, y: 15, type: 'node', content: 'API_NODE_01' },
    { id: 2, x: 85, y: 20, type: 'panel', content: 'DATA_STREAM' },
    { id: 3, x: 15, y: 70, type: 'circuit', content: '[CIRCUIT_BOARD]' },
    { id: 4, x: 75, y: 80, type: 'databox', content: 'STATUS: ONLINE' },
    { id: 5, x: 50, y: 10, type: 'node', content: 'CORE_SYSTEM' },
    { id: 6, x: 5, y: 45, type: 'panel', content: 'NETWORK_HUB' },
    { id: 7, x: 90, y: 50, type: 'circuit', content: '{QUANTUM_LINK}' },
    { id: 8, x: 25, y: 25, type: 'databox', content: 'UPTIME: 99.9%' },
    { id: 9, x: 60, y: 85, type: 'node', content: 'BACKUP_NODE' },
    { id: 10, x: 35, y: 60, type: 'panel', content: 'FIREWALL_ACTIVE' },
  ];

  // Animation variants for individual letters
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -8,
      rotateZ: Math.random() * 10 - 5,
      scale: 1.1,
      color: "#00f5ff",
      textShadow: "0 0 20px rgba(0, 245, 255, 0.8)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10
      }
    },
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const devLaunchLetters = "DevLaunch".split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced cursor-following glow effect */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, rgba(139, 92, 246, 0.15) 25%, rgba(255, 0, 128, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Tech-themed UI elements that reveal on proximity */}
      {techElements.map((element) => {
        const elementX = (element.x / 100) * window.innerWidth;
        const elementY = (element.y / 100) * window.innerHeight;
        const distance = getDistance(mousePosition.x, mousePosition.y, elementX, elementY);
        const isNear = distance < 150;
        const opacity = isNear ? Math.max(0.1, 1 - distance / 150) : 0;

        return (
          <motion.div
            key={element.id}
            className="fixed pointer-events-none z-5"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              opacity: opacity,
              scale: isNear ? 1 : 0.8,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <div
              className={`
                ${element.type === 'node' ? 'w-16 h-16 border-2 border-cyber-blue rounded-full flex items-center justify-center' : ''}
                ${element.type === 'panel' ? 'w-24 h-12 border border-cyber-purple rounded bg-cyber-purple/10' : ''}
                ${element.type === 'circuit' ? 'w-20 h-8 border border-cyber-pink rounded-sm bg-cyber-pink/5' : ''}
                ${element.type === 'databox' ? 'w-28 h-10 border border-cyber-blue rounded bg-cyber-blue/10' : ''}
                backdrop-blur-sm
              `}
              style={{
                boxShadow: isNear ? `0 0 20px rgba(0, 245, 255, ${opacity * 0.5})` : 'none',
              }}
            >
              <span className="text-xs font-mono text-white/80 px-2 truncate">
                {element.content}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-cyber-purple/20 to-transparent rounded-full filter blur-3xl translate-y-1/2 translate-x-1/4" />
        
        {/* Enhanced starfield background */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              background: Math.random() > 0.5 ? '#00f5ff' : '#8b5cf6'
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated DevLaunch Typography with floating effect */}
          <div className="mb-8 px-0 mx-0 my-0 py-0">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white inline-flex"
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif"
              }}
              animate="floating"
              variants={letterVariants}
            >
              {devLaunchLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate={["visible", "floating"]}
                  whileHover="hover"
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }}
                  className="inline-block cursor-pointer"
                  style={{
                    textShadow: "0 0 20px rgba(0, 245, 255, 0.5)",
                    filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Enhanced subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where innovation meets execution. Transform your ideas into powerful digital solutions.
          </motion.p>

          {/* Enhanced CTA Buttons with glowing hover effect */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:bg-gradient-to-r hover:from-cyber-purple hover:to-cyber-pink border-0"
              >
                Get Started
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-cyber-blue text-cyber-blue px-8 py-4 text-lg font-semibold rounded-lg bg-transparent hover:bg-cyber-blue/10 hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

