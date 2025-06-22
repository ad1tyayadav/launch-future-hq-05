
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
    }
  };

  const devLaunchLetters = "DevLaunch".split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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

        {/* Tech grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-blue to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-purple to-transparent" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated DevLaunch Typography */}
          <div className="mb-8 px-0 mx-0 my-0 py-0">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white inline-flex"
              style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
            >
              {devLaunchLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
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
                    filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Seamless transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-space/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
