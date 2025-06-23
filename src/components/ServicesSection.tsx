
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ArrowRight, Zap, Brain, Code, Rocket } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      title: 'AI-Powered Web Apps',
      subtitle: 'From Concept to Intelligent Application',
      icon: '🤖',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      story: {
        overview: 'Transform your ideas into intelligent applications that learn, adapt, and evolve with your users. Our AI development journey combines cutting-edge machine learning with intuitive user experiences.',
        stages: [
          {
            phase: 'Discovery & Planning',
            icon: <Brain className="w-5 h-5" />,
            title: 'Understanding Your Vision',
            description: 'We dive deep into your requirements, analyzing user needs and defining the AI capabilities that will make your application truly intelligent.',
            deliverables: ['User Journey Mapping', 'AI Requirements Analysis', 'Technical Architecture Planning'],
            duration: '1-2 weeks'
          },
          {
            phase: 'Model Selection & Design',
            icon: <Zap className="w-5 h-5" />,
            title: 'Choosing the Right AI Brain',
            description: 'From GPT models to custom neural networks, we select and design the perfect AI architecture for your specific use case.',
            deliverables: ['Model Architecture Design', 'Performance Benchmarking', 'Cost Optimization Strategy'],
            duration: '2-3 weeks'
          },
          {
            phase: 'Fine-tuning & Training',
            icon: <Code className="w-5 h-5" />,
            title: 'Teaching Your AI',
            description: 'Using AWS SageMaker and advanced training techniques, we fine-tune models with your specific data to achieve optimal performance.',
            deliverables: ['Custom Dataset Preparation', 'Model Fine-tuning', 'Performance Validation'],
            duration: '3-4 weeks'
          },
          {
            phase: 'Integration & Deployment',
            icon: <Rocket className="w-5 h-5" />,
            title: 'Bringing It All Together',
            description: 'We integrate the AI models into beautiful, responsive web applications with real-time capabilities and scalable infrastructure.',
            deliverables: ['Full Stack Integration', 'API Development', 'Cloud Deployment'],
            duration: '2-3 weeks'
          }
        ],
        technologies: ['OpenAI GPT', 'AWS SageMaker', 'TensorFlow', 'React', 'Node.js', 'WebSockets']
      }
    },
    {
      title: 'Blockchain Solutions',
      subtitle: 'Decentralized Innovation Journey',
      icon: '⛓️',
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      story: {
        overview: 'Build the future of decentralized applications with secure, transparent, and trustless blockchain solutions that revolutionize how users interact with digital assets.',
        stages: [
          {
            phase: 'Blockchain Strategy',
            icon: <Brain className="w-5 h-5" />,
            title: 'Defining Your DeFi Vision',
            description: 'We analyze your business model and design a blockchain strategy that aligns with your goals, from tokenomics to governance structures.',
            deliverables: ['Tokenomics Design', 'Smart Contract Architecture', 'Security Audit Plan'],
            duration: '2-3 weeks'
          },
          {
            phase: 'Smart Contract Development',
            icon: <Code className="w-5 h-5" />,
            title: 'Building Trustless Logic',
            description: 'Develop robust smart contracts using Solidity, with comprehensive testing and security best practices to ensure bulletproof execution.',
            deliverables: ['Smart Contract Code', 'Unit Testing Suite', 'Gas Optimization'],
            duration: '4-6 weeks'
          },
          {
            phase: 'DApp Frontend',
            icon: <Zap className="w-5 h-5" />,
            title: 'Crafting User Experience',
            description: 'Create intuitive web interfaces that make blockchain interactions feel seamless, with wallet integration and real-time transaction feedback.',
            deliverables: ['Web3 Integration', 'Wallet Connectivity', 'Transaction UI/UX'],
            duration: '3-4 weeks'
          },
          {
            phase: 'Launch & Governance',
            icon: <Rocket className="w-5 h-5" />,
            title: 'Going Live Securely',
            description: 'Deploy to mainnet with comprehensive security audits, community governance setup, and ongoing monitoring systems.',
            deliverables: ['Mainnet Deployment', 'Security Audit Report', 'Governance Setup'],
            duration: '2-3 weeks'
          }
        ],
        technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'OpenZeppelin', 'IPFS']
      }
    },
    {
      title: '3D Interactive Experiences',
      subtitle: 'Immersive Digital Worlds',
      icon: '🎮',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      story: {
        overview: 'Create breathtaking 3D web experiences that captivate users with immersive visualizations, interactive elements, and cutting-edge WebGL technology.',
        stages: [
          {
            phase: 'Concept & Storyboarding',
            icon: <Brain className="w-5 h-5" />,
            title: 'Visualizing the Experience',
            description: 'We collaborate with you to design the user journey, create detailed storyboards, and plan interactive elements that will make your 3D experience unforgettable.',
            deliverables: ['3D Concept Art', 'User Flow Design', 'Interactive Wireframes'],
            duration: '1-2 weeks'
          },
          {
            phase: '3D Modeling & Animation',
            icon: <Code className="w-5 h-5" />,
            title: 'Crafting Digital Assets',
            description: 'Our 3D artists create stunning models, textures, and animations optimized for web performance while maintaining visual excellence.',
            deliverables: ['3D Models & Textures', 'Animation Sequences', 'Performance Optimization'],
            duration: '3-5 weeks'
          },
          {
            phase: 'WebGL Integration',
            icon: <Zap className="w-5 h-5" />,
            title: 'Bringing 3D to the Web',
            description: 'Using Three.js and advanced WebGL techniques, we integrate 3D elements seamlessly into responsive web applications with smooth performance.',
            deliverables: ['WebGL Implementation', 'Cross-browser Testing', 'Mobile Optimization'],
            duration: '3-4 weeks'
          },
          {
            phase: 'Interactive Polish',
            icon: <Rocket className="w-5 h-5" />,
            title: 'Adding Magic Touches',
            description: 'Fine-tune interactions, add particle effects, implement physics, and optimize for different devices to create a truly immersive experience.',
            deliverables: ['Physics Integration', 'Particle Systems', 'Performance Tuning'],
            duration: '2-3 weeks'
          }
        ],
        technologies: ['Three.js', 'WebGL', 'Blender', 'React Three Fiber', 'GSAP', 'Cannon.js']
      }
    }
  ];

  const currentService = services[activeService];

  return (
    <section id="services" className="py-20 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-orbitron font-bold text-white glow-text mb-6"
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 245, 255, 0.5)',
                '0 0 20px rgba(0, 245, 255, 0.8)',
                '0 0 10px rgba(0, 245, 255, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Development Journey
          </motion.h2>
          <p className="text-lg text-white/80 font-sora max-w-3xl mx-auto mb-8">
            Every great application has a story. Discover how we transform your vision into reality through our proven development process.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveService(index)}
              className={`
                relative px-6 py-3 rounded-2xl transition-all duration-300 border backdrop-blur-xl
                ${activeService === index 
                  ? `bg-gradient-to-r ${service.color} ${service.borderColor} text-white shadow-lg`
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl mr-2">{service.icon}</span>
              <span className="font-orbitron font-medium text-sm">{service.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Service Story */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Service Header */}
            <div className={`bg-gradient-to-r ${currentService.color} backdrop-blur-xl border ${currentService.borderColor} rounded-3xl p-8 mb-8`}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                  <span className="text-4xl">{currentService.icon}</span>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                    {currentService.title}
                  </h3>
                  <p className="text-xl text-white/80 font-sora">
                    {currentService.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-white/90 font-sora text-lg leading-relaxed">
                {currentService.story.overview}
              </p>
            </div>

            {/* Development Stages */}
            <div className="grid gap-6">
              {currentService.story.stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      {/* Stage Number & Icon */}
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-12 h-12 bg-gradient-to-r ${currentService.color} border ${currentService.borderColor} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {stage.icon}
                        </div>
                        <span className="text-xs text-white/50 font-orbitron">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Stage Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="text-xl font-orbitron font-bold text-white mb-1">
                              {stage.title}
                            </h4>
                            <span className="text-sm text-cyan-400 font-sora">{stage.phase}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
                              {stage.duration}
                            </span>
                          </div>
                        </div>

                        <p className="text-white/80 font-sora mb-4 leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Deliverables */}
                        <div className="space-y-2">
                          <h5 className="text-sm font-orbitron font-semibold text-white/90 mb-2">
                            Key Deliverables:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {stage.deliverables.map((deliverable, delIndex) => (
                              <span
                                key={delIndex}
                                className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector Arrow */}
                  {index < currentService.story.stages.length - 1 && (
                    <div className="flex justify-center py-4">
                      <ChevronRight className="w-6 h-6 text-cyan-400/60" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <h4 className="text-xl font-orbitron font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Technologies We Use
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentService.story.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-2 bg-gradient-to-r ${currentService.color} border ${currentService.borderColor} rounded-xl text-white font-sora text-sm font-medium`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-12"
            >
              <motion.button
                className={`px-8 py-4 bg-gradient-to-r ${currentService.color} border ${currentService.borderColor} rounded-2xl text-white font-orbitron font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your {currentService.title} Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
