
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

  // Galaxy star tags data
  const starTags = [{
    text: "50+ Projects",
    icon: Target,
    gradient: "from-blue-400 via-purple-500 to-pink-500",
    orbitRadius: 150,
    orbitDuration: 20,
    glowColor: "rgba(59, 130, 246, 0.6)"
  }, {
    text: "3 Years Experience", 
    icon: Calendar,
    gradient: "from-orange-400 via-red-500 to-pink-500",
    orbitRadius: 200,
    orbitDuration: 25,
    glowColor: "rgba(249, 115, 22, 0.6)"
  }, {
    text: "24/7 Support",
    icon: Clock,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    orbitRadius: 120,
    orbitDuration: 18,
    glowColor: "rgba(245, 158, 11, 0.6)"
  }, {
    text: "100% Success Rate",
    icon: Trophy,
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    orbitRadius: 180,
    orbitDuration: 22,
    glowColor: "rgba(34, 197, 94, 0.6)"
  }, {
    text: "Global Reach",
    icon: Globe,
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
    orbitRadius: 160,
    orbitDuration: 24,
    glowColor: "rgba(6, 182, 212, 0.6)"
  }, {
    text: "Expert Team",
    icon: Users,
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    orbitRadius: 140,
    orbitDuration: 19,
    glowColor: "rgba(168, 85, 247, 0.6)"
  }];

  const devLaunchLetters = "DevLaunch".split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-cyber-purple/20 to-transparent rounded-full filter blur-3xl translate-y-1/2 translate-x-1/4" />
        
        {/* Starfield background */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
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
          transition={{ duration: 1 }}
        >
          {/* Animated DevLaunch Typography */}
          <div className="mb-8 px-0 py-[65px]">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white inline-flex"
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif"
              }}
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
          
          <p className="text-xl md:text-2xl text-white/80 font-sora max-w-4xl mx-auto leading-relaxed mb-12">
            Crafting the future of digital experiences with cutting-edge technology, 
            immersive design, and innovative solutions that push boundaries.
          </p>

          {/* Galaxy Star Tags - Orbital Animation */}
          <div className="relative h-96 md:h-[500px] mb-8">
            {starTags.map((tag, index) => {
              const IconComponent = tag.icon;
              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: tag.orbitDuration,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${tag.gradient} flex items-center justify-center cursor-pointer shadow-2xl`}
                    style={{
                      transform: `translateX(${tag.orbitRadius}px) translateY(-50%)`,
                      boxShadow: `0 0 30px ${tag.glowColor}, 0 0 60px ${tag.glowColor}`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        `0 0 20px ${tag.glowColor}, 0 0 40px ${tag.glowColor}`,
                        `0 0 40px ${tag.glowColor}, 0 0 80px ${tag.glowColor}`,
                        `0 0 20px ${tag.glowColor}, 0 0 40px ${tag.glowColor}`
                      ]
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Twinkling effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    >
                      <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-80"></div>
                      <div className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full opacity-60"></div>
                    </motion.div>

                    {/* Icon */}
                    <IconComponent size={24} className="text-white relative z-10" />
                    
                    {/* Tag text on hover */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        textShadow: "0 0 10px rgba(0, 0, 0, 0.8)"
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {tag.text}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Central galaxy core */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                rotate: 360,
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
              style={{
                boxShadow: "0 0 20px rgba(0, 245, 255, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-space to-transparent" />
    </section>
  );
};

export default HeroSection;
