
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const devLaunchLetters = "DevLaunch".split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Simplified background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-cyber-purple/10 to-transparent rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Simplified DevLaunch Typography */}
          <div className="mb-8">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white inline-flex"
              style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
            >
              {devLaunchLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 20px rgba(0, 245, 255, 0.5)",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/80 font-sora max-w-4xl mx-auto mb-8"
          >
            Transform your vision into cutting-edge digital reality with our innovative development solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="cyber-button text-lg py-4 px-8">
              <span>Start Your Project →</span>
            </button>
            <button className="glass-morphism px-8 py-4 text-white border border-white/20 rounded-lg hover:border-cyber-blue transition-colors duration-300">
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
