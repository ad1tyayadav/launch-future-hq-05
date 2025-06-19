
import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Globe, Calendar, Settings } from 'lucide-react';

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

  // Floating stat bubbles data
  const statBubbles = [
    {
      icon: Users,
      label: "Clients",
      count: "+120",
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      glowColor: "rgba(59, 130, 246, 0.6)",
      position: { top: "20%", left: "15%" }
    },
    {
      icon: DollarSign,
      label: "Total Budget", 
      count: "$2.3M",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      glowColor: "rgba(34, 197, 94, 0.6)",
      position: { top: "25%", right: "20%" }
    },
    {
      icon: Globe,
      label: "Community",
      count: "+8K members",
      gradient: "from-cyan-400 via-blue-500 to-purple-500",
      glowColor: "rgba(6, 182, 212, 0.6)",
      position: { top: "45%", left: "10%" }
    },
    {
      icon: Calendar,
      label: "Projects",
      count: "300+",
      gradient: "from-orange-400 via-red-500 to-pink-500",
      glowColor: "rgba(249, 115, 22, 0.6)",
      position: { top: "50%", right: "15%" }
    },
    {
      icon: Settings,
      label: "Ongoing",
      count: "25",
      gradient: "from-purple-400 via-pink-500 to-rose-500",
      glowColor: "rgba(168, 85, 247, 0.6)",
      position: { bottom: "30%", left: "50%", transform: "translateX(-50%)" }
    }
  ];

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
        </motion.div>
      </div>

      {/* Floating Stat Bubbles */}
      {statBubbles.map((bubble, index) => {
        const IconComponent = bubble.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={bubble.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5 + index * 0.2,
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.div
              className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${bubble.gradient} flex flex-col items-center justify-center cursor-pointer shadow-2xl group`}
              style={{
                boxShadow: `0 0 30px ${bubble.glowColor}, 0 0 60px ${bubble.glowColor}`,
              }}
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                y: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 40px ${bubble.glowColor}, 0 0 80px ${bubble.glowColor}`,
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
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-80"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full opacity-60"></div>
              </motion.div>

              {/* Icon */}
              <IconComponent size={20} className="text-white mb-1 relative z-10" />
              
              {/* Count */}
              <motion.div 
                className="text-white text-sm font-bold font-orbitron relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                {bubble.count}
              </motion.div>
              
              {/* Label on hover */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  textShadow: "0 0 10px rgba(0, 0, 0, 0.8)"
                }}
              >
                {bubble.label}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-space to-transparent" />
    </section>
  );
};

export default HeroSection;
