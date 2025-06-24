
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Lightbulb, Target, Users, TrendingUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

const WhatWeDoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const services = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Idea Genesis",
      subtitle: "Vision to Reality",
      description: "Transform your innovative ideas into validated business concepts with our comprehensive market research and strategic planning approach.",
      features: ["Market Validation", "Business Strategy", "Competitive Analysis"],
      gradient: "from-cyan-400/20 via-blue-500/20 to-purple-600/20",
      glowColor: "cyan"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Team Assembly", 
      subtitle: "Elite Crew Building",
      description: "Build world-class teams with our talent acquisition expertise, ensuring perfect cultural fit and technical excellence for your mission.",
      features: ["Talent Acquisition", "Team Dynamics", "Culture Building"],
      gradient: "from-purple-400/20 via-pink-500/20 to-red-600/20",
      glowColor: "purple"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Tech Launchpad",
      subtitle: "Advanced Systems", 
      description: "Architect cutting-edge technology infrastructure that scales from startup to enterprise with modern frameworks and cloud solutions.",
      features: ["Cloud Architecture", "Scalable Tech", "DevOps Excellence"],
      gradient: "from-emerald-400/20 via-teal-500/20 to-blue-600/20",
      glowColor: "emerald"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Mission Control",
      subtitle: "Strategic Guidance",
      description: "Navigate complex business challenges with expert mentorship and strategic guidance from industry veterans and thought leaders.",
      features: ["Strategic Planning", "Expert Mentorship", "Risk Management"],
      gradient: "from-orange-400/20 via-red-500/20 to-pink-600/20",
      glowColor: "orange"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Orbital Success",
      subtitle: "Growth & Scale",
      description: "Achieve sustainable growth and market leadership through data-driven strategies and proven methodologies for long-term success.",
      features: ["Growth Hacking", "Market Expansion", "Performance Analytics"],
      gradient: "from-yellow-400/20 via-orange-500/20 to-red-600/20",
      glowColor: "yellow"
    }
  ];

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (services.length - 2)) % (services.length - 2));
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return [currentIndex];
    }
    return [currentIndex, currentIndex + 1, currentIndex + 2];
  };

  const getGlowClass = (color: string) => {
    const glowMap = {
      cyan: 'shadow-[0_0_30px_rgba(0,245,255,0.3)]',
      purple: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
      emerald: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      orange: 'shadow-[0_0_30px_rgba(249,115,22,0.3)]',
      yellow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]'
    };
    return glowMap[color as keyof typeof glowMap] || glowMap.cyan;
  };

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            animate={{
              textShadow: [
                '0 0 20px rgba(0, 245, 255, 0.6)',
                '0 0 40px rgba(139, 92, 246, 0.6)',
                '0 0 20px rgba(0, 245, 255, 0.6)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Transforming ideas into <span className="text-cyan-400 font-semibold">orbital success</span> through cutting-edge solutions
          </motion.p>
        </motion.div>

        {/* Navigation Controls */}
        {!isMobile && (
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-white/20 hover:border-cyan-400/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              disabled={currentIndex >= services.length - 3}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-white/20 hover:border-cyan-400/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        )}

        {/* 3D Flip Cards Container */}
        <div className="relative">
          <div className={`flex ${isMobile ? 'overflow-x-auto scrollbar-hide' : 'justify-center'} gap-8 pb-4`}>
            {getVisibleCards().map((cardIndex) => {
              if (cardIndex >= services.length) return null;
              
              const service = services[cardIndex];
              const isFlipped = flippedCards.has(cardIndex);
              
              return (
                <motion.div
                  key={cardIndex}
                  className={`relative ${isMobile ? 'min-w-[300px]' : 'w-80'} h-96 cursor-pointer perspective-1000`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: cardIndex * 0.1 }}
                  onClick={() => handleCardFlip(cardIndex)}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: isFlipped ? 180 : 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Card Container with 3D transform */}
                  <motion.div
                    className="relative w-full h-full preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.23, 1, 0.32, 1] // Custom easing for smooth iPhone-like transition
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <div 
                      className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border-2 border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden ${getGlowClass(service.glowColor)}`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-32 h-32 border border-white/10 rounded-full"
                            style={{
                              left: `${20 + i * 30}%`,
                              top: `${20 + i * 20}%`,
                            }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                        {/* Icon with glow effect */}
                        <motion.div
                          className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6"
                          animate={{
                            boxShadow: [
                              `0 0 20px rgba(0, 245, 255, 0.4)`,
                              `0 0 40px rgba(139, 92, 246, 0.4)`,
                              `0 0 20px rgba(0, 245, 255, 0.4)`
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        
                        <p className="text-cyan-300 font-semibold text-sm mb-4">
                          {service.subtitle}
                        </p>

                        <div className="mt-auto">
                          <motion.div
                            className="inline-flex items-center gap-2 text-white/60 text-sm"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Tap to explore
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div 
                      className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border-2 border-white/10 overflow-hidden ${getGlowClass(service.glowColor)}`}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="relative z-10 p-8 h-full flex flex-col">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
                        </div>

                        <p className="text-white/80 text-sm leading-relaxed mb-6 flex-1">
                          {service.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <h4 className="text-cyan-300 font-semibold text-sm">
                            Key Features:
                          </h4>
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              <span className="text-white/70 text-xs">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile swipe indicator */}
        {isMobile && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: services.length }, (_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection;
