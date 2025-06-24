import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Lightbulb, Target, Users, TrendingUp, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const WhatWeDoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const journeySteps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Idea Genesis",
      subtitle: "Your Vision Sparks",
      description: "Every great company starts with a brilliant idea floating in space",
      detailedDescription: "We help you refine and validate your initial concept through market research, competitive analysis, and feasibility studies. Our team transforms your vision into a concrete business strategy with clear objectives and measurable goals.",
      features: ["Market Research", "Competitive Analysis", "Feasibility Studies", "Business Strategy"],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      color: "from-cyan-400/20 to-blue-400/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Assembly", 
      subtitle: "Building Your Crew",
      description: "We help assemble the perfect team for your mission to success",
      detailedDescription: "Our recruitment experts identify and onboard top talent that aligns with your company culture and technical requirements. We build diverse, high-performing teams that can execute your vision effectively.",
      features: ["Talent Acquisition", "Team Building", "Culture Alignment", "Skills Assessment"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-purple-400/20 to-pink-400/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tech Launchpad",
      subtitle: "Power Systems Online", 
      description: "Building robust tech foundations that can handle orbital velocity",
      detailedDescription: "We architect and implement scalable technology infrastructure using cutting-edge frameworks and cloud solutions. Our tech stack ensures your platform can grow from startup to enterprise scale seamlessly.",
      features: ["Cloud Architecture", "Scalable Infrastructure", "Modern Frameworks", "DevOps Integration"],
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      color: "from-emerald-400/20 to-teal-400/20"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission Control",
      subtitle: "Strategic Navigation",
      description: "Expert guidance to navigate through asteroid fields of challenges",
      detailedDescription: "Our strategic advisors provide ongoing mentorship and guidance through every phase of your journey. We help you navigate market challenges, regulatory requirements, and growth opportunities with precision.",
      features: ["Strategic Planning", "Risk Management", "Regulatory Compliance", "Growth Optimization"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      color: "from-orange-400/20 to-red-400/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Orbital Success",
      subtitle: "Reaching New Heights",
      description: "Watch your startup achieve escape velocity and reach new markets",
      detailedDescription: "We support your expansion into new markets and revenue streams through data-driven strategies and proven growth methodologies. Our success metrics ensure sustainable long-term growth and market leadership.",
      features: ["Market Expansion", "Revenue Growth", "Performance Analytics", "Sustainable Scaling"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      color: "from-yellow-400/20 to-orange-400/20"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'transparent', opacity: 1 }}>
      {/* Floating cosmic elements */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6 relative"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 245, 255, 0.8)',
                  '0 0 40px rgba(139, 92, 246, 0.8)',
                  '0 0 20px rgba(0, 245, 255, 0.8)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mission Control
              </span>
            </motion.h2>
            
            {/* Orbiting elements around title */}
            <motion.div
              className="absolute -top-6 -right-6 w-4 h-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-cyan-400/80" />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-xl text-cyan-300 mb-8 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Launching startups into <span className="text-pink-400 font-semibold">orbital success</span>
          </motion.p>
        </motion.div>

        {/* Horizontal Journey with Shuttle */}
        <div className="relative mb-20">
          {/* Trajectory Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/30 via-purple-400/50 to-pink-400/30 transform -translate-y-1/2 z-0" />
          
          {/* Animated Space Shuttle */}
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 z-20"
            animate={{
              x: `${currentStage * 20}%`,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <Rocket className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_20px_rgba(0,245,255,0.8)]" />
              {/* Shuttle exhaust */}
              <motion.div
                className="absolute -left-8 top-1/2 transform -translate-y-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <div className="w-6 h-2 bg-gradient-to-l from-orange-400 via-yellow-400 to-transparent rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Journey Stages Accordion */}
          <div className="flex gap-4 h-96">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className={`group relative cursor-pointer transition-all duration-500 ease-out ${
                  hoveredCard === index 
                    ? 'flex-[2] opacity-100' 
                    : hoveredCard !== null 
                      ? 'flex-[0.5] opacity-70' 
                      : 'flex-1 opacity-100'
                }`}
                onMouseEnter={() => {
                  setHoveredCard(index);
                  setCurrentStage(index);
                }}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Stage Card */}
                <div className="glass-morphism h-full w-full p-6 rounded-3xl backdrop-blur-xl bg-white/5 border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Floating particles inside card */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon with orbital ring */}
                    <div className="relative w-16 h-16 mx-auto mb-6">
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center border-2 border-cyan-400/40"
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          boxShadow: [
                            '0 0 20px rgba(0, 245, 255, 0.4)',
                            '0 0 40px rgba(139, 92, 246, 0.4)',
                            '0 0 20px rgba(0, 245, 255, 0.4)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="text-cyan-400 group-hover:text-white transition-colors duration-500">
                          {step.icon}
                        </div>
                      </motion.div>
                      
                      {/* Orbital ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <div className="flex-1 flex flex-col text-center">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-500">
                        {step.title}
                      </h3>
                      
                      <p className="text-cyan-300 text-sm font-semibold mb-4 opacity-80">
                        {step.subtitle}
                      </p>
                      
                      <p className="text-white/80 leading-relaxed text-sm mb-4">
                        {step.description}
                      </p>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {hoveredCard === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="mt-4 border-t border-cyan-400/20 pt-4"
                          >
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: 20, opacity: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <p className="text-white/70 text-xs leading-relaxed mb-4">
                                {step.detailedDescription}
                              </p>
                              
                              <div className="space-y-2">
                                <h4 className="text-cyan-300 font-semibold text-xs mb-2">
                                  Key Features:
                                </h4>
                                {step.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: featureIndex * 0.05 }}
                                    className="flex items-center text-xs text-white/60"
                                  >
                                    <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                                    {feature}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mission number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Launch Sequence CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready for Launch Sequence?
              </span>
            </h3>
          </div>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Join the ranks of successful space-age startups. Your mission to orbital success starts here.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="relative px-12 py-6 text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 transition-all duration-500 rounded-2xl border-2 border-cyan-400/50 hover:border-purple-400/60 shadow-[0_0_40px_rgba(0,245,255,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] overflow-hidden group"
            >
              {/* Button plasma effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10 flex items-center gap-3">
                Initiate Contact
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
