
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Zap, Network } from 'lucide-react';

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

  // Tech floating elements data
  const techElements = [{
    icon: Cpu,
    label: "AI Core",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    glowColor: "rgba(6, 182, 212, 0.8)",
    position: {
      top: "10%",
      left: "8%"
    },
    size: "w-20 h-20",
    pulseDelay: 0
  }, {
    icon: Database,
    label: "Neural Net",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    glowColor: "rgba(168, 85, 247, 0.8)",
    position: {
      top: "15%",
      right: "12%"
    },
    size: "w-16 h-16",
    pulseDelay: 0.5
  }, {
    icon: Code,
    label: "Code Gen",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    glowColor: "rgba(34, 197, 94, 0.8)",
    position: {
      top: "50%",
      left: "2%"
    },
    size: "w-24 h-24",
    pulseDelay: 1
  }, {
    icon: Zap,
    label: "Lightning",
    gradient: "from-yellow-400 via-orange-500 to-red-600",
    glowColor: "rgba(249, 115, 22, 0.8)",
    position: {
      top: "60%",
      right: "8%"
    },
    size: "w-18 h-18",
    pulseDelay: 1.5
  }, {
    icon: Network,
    label: "Quantum",
    gradient: "from-indigo-500 via-purple-600 to-pink-600",
    glowColor: "rgba(99, 102, 241, 0.8)",
    position: {
      bottom: "15%",
      left: "45%",
      transform: "translateX(-50%)"
    },
    size: "w-22 h-22",
    pulseDelay: 2
  }];

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

      {/* Floating Tech Elements */}
      {techElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={element.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1 + index * 0.3,
              type: "spring",
              stiffness: 120
            }}
          >
            <motion.div
              className={`relative ${element.size} rounded-xl bg-gradient-to-br ${element.gradient} flex items-center justify-center cursor-pointer group overflow-hidden`}
              style={{
                boxShadow: `0 0 40px ${element.glowColor}, inset 0 0 20px rgba(255,255,255,0.1)`,
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 180, 360],
                scale: [1, 1.05, 1]
              }}
              transition={{
                y: {
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.pulseDelay
                },
                rotateY: {
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.pulseDelay
                }
              }}
              whileHover={{
                scale: 1.2,
                rotateZ: 15,
                boxShadow: `0 0 60px ${element.glowColor}, inset 0 0 30px rgba(255,255,255,0.2)`,
                transition: { duration: 0.3 }
              }}
            >
              {/* Circuit pattern overlay */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.3) 50%, transparent 51%),
                    linear-gradient(0deg, transparent 49%, rgba(255,255,255,0.3) 50%, transparent 51%)
                  `,
                  backgroundSize: '8px 8px'
                }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: element.pulseDelay
                }}
              />

              {/* Glitch effect lines */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  background: `linear-gradient(45deg, transparent 48%, ${element.glowColor.replace('0.8', '0.3')} 49%, ${element.glowColor.replace('0.8', '0.3')} 51%, transparent 52%)`,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  rotateX: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: element.pulseDelay
                }}
              >
                <IconComponent size={element.size.includes('24') ? 28 : element.size.includes('22') ? 26 : element.size.includes('20') ? 24 : element.size.includes('18') ? 22 : 20} className="text-white drop-shadow-lg" />
              </motion.div>
              
              {/* Floating particles */}
              {[...Array(3)].map((_, particleIndex) => (
                <motion.div
                  key={particleIndex}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, -25, -10],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2 + element.pulseDelay
                  }}
                />
              ))}

              {/* Tech label on hover */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold font-orbitron whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-black/50 rounded backdrop-blur-sm"
                style={{ 
                  textShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
                  boxShadow: `0 0 10px ${element.glowColor}`
                }}
              >
                {element.label}
              </motion.div>
            </motion.div>

            {/* Collision detection rings */}
            <motion.div
              className="absolute inset-0 rounded-xl border border-white/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: element.pulseDelay + 1
              }}
              style={{
                boxShadow: `0 0 20px ${element.glowColor}`
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-space to-transparent" />
    </section>
  );
};

export default HeroSection;
