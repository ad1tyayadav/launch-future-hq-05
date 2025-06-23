
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DevelopmentTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineSteps = [
    {
      phase: "Discovery & Strategy",
      title: "Understanding Your Vision",
      description: "We dive deep into your business goals, target audience, and technical requirements. Through collaborative workshops and market research, we craft a comprehensive strategy.",
      deliverables: ["Market Research", "User Personas", "Technical Architecture", "Project Roadmap"],
      duration: "1-2 weeks",
      visual: "🎯"
    },
    {
      phase: "Design & Prototyping",
      title: "Bringing Ideas to Life",
      description: "Our designers create stunning interfaces in Figma, building interactive prototypes that showcase the user experience before a single line of code is written.",
      deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototypes", "Design System"],
      duration: "2-3 weeks",
      visual: "🎨"
    },
    {
      phase: "AI Model Selection",
      title: "Choosing the Right Intelligence",
      description: "For AI-powered apps, we analyze various models, conduct proof-of-concepts, and select the optimal solution whether it's OpenAI, Anthropic, or custom models.",
      deliverables: ["Model Comparison", "POC Development", "Performance Testing", "Cost Analysis"],
      duration: "1-2 weeks",
      visual: "🧠"
    },
    {
      phase: "Development Sprint",
      title: "Building Your Product",
      description: "Using modern frameworks like React and Next.js, we develop your application with clean, scalable code. Daily standups keep you informed of progress.",
      deliverables: ["Frontend Development", "Backend APIs", "Database Design", "Third-party Integrations"],
      duration: "4-8 weeks",
      visual: "⚡"
    },
    {
      phase: "Fine-tuning & Optimization",
      title: "Perfecting Performance",
      description: "We optimize your app for speed, fine-tune AI models on AWS/GCP, implement caching strategies, and ensure everything runs smoothly at scale.",
      deliverables: ["Performance Optimization", "Model Fine-tuning", "Load Testing", "Security Audit"],
      duration: "1-2 weeks",
      visual: "🚀"
    },
    {
      phase: "Launch & Support",
      title: "Going Live",
      description: "We handle deployment, monitor performance, and provide ongoing support. Your app goes live with confidence, backed by our expertise.",
      deliverables: ["Production Deployment", "Monitoring Setup", "Documentation", "Training & Support"],
      duration: "1 week + ongoing",
      visual: "🌟"
    }
  ];

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-space via-space-gray/20 to-dark-space" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
            Your App's Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From initial concept to market-ready product, we guide you through every step of the development process
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-cyber-blue/20 to-transparent">
            <motion.div
              className="w-full bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink rounded-full"
              style={{ height: `${lineProgress.get()}%` }}
            />
          </div>

          {/* Timeline Steps */}
          {timelineSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              className={`relative flex items-center mb-24 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full border-4 border-dark-space shadow-[0_0_20px_rgba(0,245,255,0.5)]"
                />
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  {/* Glass morphism card */}
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)] transition-all duration-500">
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    {/* Phase badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 rounded-full text-sm font-medium text-cyber-blue mb-4">
                      {step.phase}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyber-blue mb-3">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-cyber-blue/10 hover:border-cyber-blue/30 transition-all duration-300"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Duration:</span> {step.duration}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-2xl shadow-lg hover:shadow-[0_10px_30px_rgba(0,245,255,0.3)] transition-all duration-300"
          >
            <span>Start Your Journey</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentTimeline;
