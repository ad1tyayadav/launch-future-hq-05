import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Calendar, Clock, Trophy, Globe, Target } from 'lucide-react';
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

  // Animation variants for individual letters
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55],
        // easeOutBack
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      y: -8,
      rotateZ: Math.random() * 10 - 5,
      scale: 1.1,
      color: "#00f5ff",
      textShadow: "0 0 20px rgba(0, 245, 255, 0.8)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Floating stats data
  const floatingStats = [{
    text: "50+ Projects",
    icon: Target,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    delay: 0
  }, {
    text: "3 Years Experience",
    icon: Calendar,
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    delay: 0.5
  }, {
    text: "24/7 Support",
    icon: Clock,
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    delay: 1
  }, {
    text: "100% Success Rate",
    icon: Trophy,
    color: "bg-gradient-to-r from-green-500 to-teal-500",
    delay: 1.5
  }, {
    text: "Global Reach",
    icon: Globe,
    color: "bg-gradient-to-r from-blue-500 to-purple-500",
    delay: 2
  }, {
    text: "Expert Team",
    icon: Users,
    color: "bg-gradient-to-r from-pink-500 to-purple-500",
    delay: 2.5
  }];
  const devLaunchLetters = "DevLaunch".split("");
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
          {/* Animated DevLaunch Typography */}
          <div className="mb-8 px-0 py-[65px]">
            <motion.h1 className="text-6xl md:text-8xl font-bold text-white inline-flex" style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif"
          }} onHoverStart={() => {}}>
              {devLaunchLetters.map((letter, index) => <motion.span key={index} custom={index} variants={letterVariants} initial="hidden" animate="visible" whileHover="hover" className="inline-block cursor-pointer" style={{
              textShadow: "0 0 20px rgba(0, 245, 255, 0.5)",
              filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))"
            }}>
                  {letter}
                </motion.span>)}
            </motion.h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/80 font-sora max-w-4xl mx-auto leading-relaxed mb-12">
            Crafting the future of digital experiences with cutting-edge technology, 
            immersive design, and innovative solutions that push boundaries.
          </p>

          {/* Floating Animated Stats Boxes */}
          <div className="relative h-64 md:h-80 mb-8">
            {floatingStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return <motion.div key={index} className={`absolute ${stat.color} rounded-full px-6 py-3 text-white font-bold text-sm md:text-base shadow-lg cursor-pointer`} initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 400 - 200,
              y: Math.random() * 200 - 100
            }} animate={{
              opacity: 1,
              scale: 1,
              x: [Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200, Math.random() * 400 - 200],
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
              rotate: [0, 360]
            }} transition={{
              opacity: {
                delay: stat.delay,
                duration: 0.6
              },
              scale: {
                delay: stat.delay,
                duration: 0.6,
                type: "spring"
              },
              x: {
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: stat.delay
              },
              y: {
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: stat.delay
              },
              rotate: {
                duration: 30 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
                delay: stat.delay
              }
            }} whileHover={{
              scale: 1.2,
              zIndex: 50,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transition: {
                duration: 0.3
              }
            }} style={{
              left: `${20 + index * 15 % 60}%`,
              top: `${20 + index * 20 % 60}%`
            }}>
                  <div className="flex items-center space-x-2">
                    <IconComponent size={16} />
                    <span>{stat.text}</span>
                  </div>
                </motion.div>;
          })}
          </div>

          {/* Call to Action */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 3,
          duration: 0.8
        }} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/lets-talk">
              
            </Link>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={scrollToProjects} className="group px-8 py-4 border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space rounded-xl font-semibold text-lg transition-all duration-300">
              <div className="flex items-center space-x-3">
                <span>Explore Our Galaxy</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-space to-transparent" />
    </section>;
};
export default HeroSection;