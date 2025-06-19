import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-cyber-purple/20 to-transparent rounded-full filter blur-3xl translate-y-1/2 translate-x-1/4" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1
      }}>
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-white glow-text mb-8 px-0 py-[65px]">
            DevLaunch
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-sora max-w-4xl mx-auto leading-relaxed mb-12">
            Crafting the future of digital experiences with cutting-edge technology, 
            immersive design, and innovative solutions that push boundaries.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/lets-talk">
              <motion.button whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"
            }} whileTap={{
              scale: 0.95
            }} className="group relative px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-xl text-white font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative flex items-center space-x-3">
                  <Rocket size={24} />
                  <span>Launch Your Project</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </Link>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={scrollToProjects} className="group px-8 py-4 border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space rounded-xl font-semibold text-lg transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span>View Our Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-space to-transparent" />
    </section>;
};
export default HeroSection;