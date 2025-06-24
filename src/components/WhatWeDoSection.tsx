
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Lightbulb, Target, Users, TrendingUp, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const WhatWeDoSection = () => {
  const journeySteps = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Idea Genesis",
      subtitle: "Your Vision Sparks",
      description: "Every great company starts with a brilliant idea floating in space",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop",
      position: "left"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Team Assembly", 
      subtitle: "Building Your Crew",
      description: "We help assemble the perfect team for your mission to success",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      position: "right"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Tech Launchpad",
      subtitle: "Power Systems Online", 
      description: "Building robust tech foundations that can handle orbital velocity",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      position: "left"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Mission Control",
      subtitle: "Strategic Navigation",
      description: "Expert guidance to navigate through asteroid fields of challenges",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      position: "right"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Orbital Success",
      subtitle: "Reaching New Heights",
      description: "Watch your startup achieve escape velocity and reach new markets",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      position: "center"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      {/* Floating cosmic elements */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header with Space Theme */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.h2 
              className="text-6xl md:text-7xl font-bold text-white mb-6 relative"
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
              className="absolute -top-8 -right-8 w-6 h-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-cyan-400/80" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-8 w-4 h-4"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-purple-400/80" />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-2xl text-cyan-300 mb-8 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Launching startups into <span className="text-pink-400 font-semibold">orbital success</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-morphism p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan-400/20">
              <p className="text-lg text-white/90 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Welcome to <span className="text-cyan-400 font-semibold">DevLaunch Mission Control</span> — where ambitious ideas transform into 
                thriving space-age companies. Our crew of experts navigates startups through every phase of their journey, 
                from initial concept to market domination.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Journey Timeline */}
        <div className="relative">
          {/* Central rocket trajectory line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-30" />
          
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: step.position === 'left' ? -100 : step.position === 'right' ? 100 : 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-24 ${
                step.position === 'center' ? 'flex justify-center' : 
                step.position === 'left' ? 'flex justify-start lg:justify-end lg:pr-20' : 
                'flex justify-start lg:justify-start lg:pl-20'
              }`}
            >
              <div className="group relative max-w-lg">
                {/* Mission stage card */}
                <div className="glass-morphism p-8 rounded-3xl backdrop-blur-xl bg-white/5 border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating particles inside card */}
                  {[...Array(8)].map((_, i) => (
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
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                  
                  <div className="relative z-10">
                    {/* Icon with orbital ring */}
                    <div className="relative w-20 h-20 mx-auto mb-6">
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
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-500">
                      {step.title}
                    </h3>
                    
                    <p className="text-cyan-300 text-sm font-semibold mb-4 opacity-80">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Trajectory connector */}
                <div className={`absolute top-1/2 ${
                  step.position === 'left' ? 'right-0 translate-x-full' : 
                  step.position === 'right' ? 'left-0 -translate-x-full' : 
                  'left-1/2 -translate-x-1/2'
                } w-8 h-8`}>
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Mission number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Launch Sequence CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready for Launch Sequence?
              </span>
            </h3>
            
            {/* Rocket trajectory */}
            <motion.div
              className="absolute -top-8 -right-12"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Rocket className="w-8 h-8 text-cyan-400/80" />
            </motion.div>
          </div>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join the ranks of successful space-age startups. Your mission to orbital success starts here.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="relative px-16 py-8 text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-purple-400 hover:to-pink-400 transition-all duration-500 rounded-2xl border-2 border-cyan-400/50 hover:border-purple-400/60 shadow-[0_0_40px_rgba(0,245,255,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] overflow-hidden group"
            >
              {/* Button plasma effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Button energy pulse */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center gap-3">
                Initiate Contact
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-6 h-6" />
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
