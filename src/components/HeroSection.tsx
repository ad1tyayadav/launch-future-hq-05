
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Launching Your Digital Future";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main heading with typewriter effect */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-white glow-text mb-4">
              DevLaunch
            </h1>
            <div className="text-2xl md:text-4xl font-sora text-cyber-blue h-16">
              {displayText}
              <span className="animate-blink">|</span>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-xl md:text-2xl text-white/80 font-sora max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We craft cutting-edge digital experiences that propel your business into the future. 
            From AI-powered web apps to immersive 3D interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button text-lg px-12 py-6 animate-glow-pulse"
            >
              <span>Launch Your Project</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-morphism neon-border px-12 py-6 text-white font-semibold text-lg rounded-lg transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg opacity-20 animate-rotate-slow"></div>
          </div>
          <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-neon-green rounded-full opacity-30 animate-rotate-slow"></div>
          </div>
          <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-8 h-8 bg-gradient-to-r from-cyber-pink to-cyber-blue rounded-full opacity-25 animate-rotate-slow"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
