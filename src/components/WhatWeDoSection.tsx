
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Lightbulb, Target, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '../hooks/use-mobile';

const WhatWeDoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Idea Genesis",
      subtitle: "From Vision to Reality",
      description: "Transform innovative ideas into validated business concepts with comprehensive market research and strategic planning.",
      features: ["Market Validation", "Business Strategy", "Competitive Analysis"],
      gradient: "from-blue-600/10 via-cyan-500/5 to-blue-400/10",
      accentColor: "cyan-400",
      id: "idea-genesis"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Assembly", 
      subtitle: "Elite Crew Building",
      description: "Build world-class teams with talent acquisition expertise, ensuring perfect cultural fit and technical excellence.",
      features: ["Talent Acquisition", "Team Dynamics", "Culture Building"],
      gradient: "from-purple-600/10 via-pink-500/5 to-purple-400/10",
      accentColor: "purple-400",
      id: "team-assembly"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tech Launchpad",
      subtitle: "Advanced Systems", 
      description: "Architect cutting-edge technology infrastructure that scales from startup to enterprise with modern frameworks.",
      features: ["Cloud Architecture", "Scalable Tech", "DevOps Excellence"],
      gradient: "from-emerald-600/10 via-teal-500/5 to-emerald-400/10",
      accentColor: "emerald-400",
      id: "tech-launchpad"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission Control",
      subtitle: "Strategic Guidance",
      description: "Navigate complex challenges with expert mentorship and strategic guidance from industry veterans.",
      features: ["Strategic Planning", "Expert Mentorship", "Risk Management"],
      gradient: "from-orange-600/10 via-red-500/5 to-orange-400/10",
      accentColor: "orange-400",
      id: "mission-control"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth Engine",
      subtitle: "Scale & Success",
      description: "Achieve sustainable growth and market leadership through data-driven strategies and proven methodologies.",
      features: ["Growth Hacking", "Market Expansion", "Performance Analytics"],
      gradient: "from-pink-600/10 via-rose-500/5 to-pink-400/10",
      accentColor: "pink-400",
      id: "growth-engine"
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
    setCurrentIndex((prev) => (prev + 1) % (services.length - (isMobile ? 0 : 2)));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (services.length - (isMobile ? 0 : 2))) % (services.length - (isMobile ? 0 : 2)));
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return [currentIndex];
    }
    return [currentIndex, currentIndex + 1, currentIndex + 2];
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black/95">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What We Do
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transforming ideas into reality through cutting-edge solutions and strategic expertise
          </motion.p>
        </motion.div>

        {/* Navigation Controls */}
        {!isMobile && (
          <div className="flex justify-center gap-3 mb-12">
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              disabled={currentIndex >= services.length - 3}
              className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}

        {/* Cards Container */}
        <div className="relative">
          <div className={`flex ${isMobile ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide' : 'justify-center'} gap-6 pb-4`}>
            {getVisibleCards().map((cardIndex) => {
              if (cardIndex >= services.length) return null;
              
              const service = services[cardIndex];
              const isFlipped = flippedCards.has(cardIndex);
              
              return (
                <motion.div
                  key={cardIndex}
                  className={`relative ${isMobile ? 'min-w-[320px] snap-center' : 'w-80'} h-[400px] cursor-pointer`}
                  style={{ perspective: '1200px' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: cardIndex * 0.1 }}
                  onClick={() => handleCardFlip(cardIndex)}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Card Container with 3D transform */}
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Card Header */}
                      <div className="p-8 h-full flex flex-col">
                        {/* Icon Container */}
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-${service.accentColor}/10 border border-${service.accentColor}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className={`text-${service.accentColor}`}>
                            {service.icon}
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                            {service.title}
                          </h3>
                          
                          <p className={`text-${service.accentColor} text-sm font-medium mb-6`}>
                            {service.subtitle}
                          </p>

                          <div className="mt-auto">
                            <motion.div
                              className="inline-flex items-center gap-2 text-white/40 text-sm group"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              Tap to explore
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Subtle accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${service.accentColor}/30 to-transparent`} />
                      </div>
                    </div>

                    {/* Back Face */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl`}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <div className={`w-12 h-px bg-${service.accentColor}/50 mx-auto`} />
                        </div>

                        {/* Description */}
                        <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          <h4 className={`text-${service.accentColor} font-semibold text-xs uppercase tracking-wider`}>
                            Key Features
                          </h4>
                          {service.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-1.5 h-1.5 bg-${service.accentColor} rounded-full`} />
                              <span className="text-white/60 text-xs">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                          className={`w-full bg-${service.accentColor}/10 border border-${service.accentColor}/20 text-${service.accentColor} hover:bg-${service.accentColor}/20 hover:border-${service.accentColor}/40 transition-all duration-300 rounded-xl py-3`}
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

        {/* Mobile indicators */}
        {isMobile && (
          <div className="flex justify-center mt-8 gap-2">
            {services.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/20'
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
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
