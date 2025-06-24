import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesCarousel = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const services = [
    {
      title: 'AI-POWERED WEB APPS',
      subtitle: 'Intelligent Applications That Learn & Adapt',
      description: 'Transform your business with cutting-edge AI solutions that understand user behavior, predict outcomes, and continuously improve through machine learning algorithms.',
      techWords: ['GPT-4', 'Neural Networks', 'TensorFlow', 'PyTorch', 'OpenAI', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'MLOps'],
      timeline: [
        {
          phase: 'AI Strategy & Discovery',
          duration: '1-2 weeks',
          description: 'Deep dive into your business needs and identify AI opportunities that drive real value',
          details: 'We conduct comprehensive data audits, analyze your current workflows, identify bottlenecks, and map out AI integration points. Our team evaluates your data quality, volume, and structure to determine the most effective AI models for your specific use case.',
          deliverables: ['AI Readiness Assessment', 'Data Architecture Review', 'Custom AI Strategy Document', 'ROI Projections']
        },
        {
          phase: 'Model Architecture & Selection',
          duration: '2-3 weeks',
          description: 'Design and select the optimal AI models tailored to your specific requirements',
          details: 'From GPT models for natural language processing to custom neural networks for specialized tasks, we architect the perfect AI solution. We evaluate different model architectures, performance metrics, and computational requirements.',
          deliverables: ['Model Architecture Diagrams', 'Performance Benchmarks', 'Technology Stack Selection', 'Scalability Plans']
        },
        {
          phase: 'Development & Training',
          duration: '4-6 weeks',
          description: 'Build, train, and fine-tune your custom AI solutions with precision',
          details: 'Our expert team develops custom AI models, implements fine-tuning processes, and creates intelligent interfaces. We use advanced techniques like transfer learning, data augmentation, and hyperparameter optimization.',
          deliverables: ['Trained AI Models', 'API Integration', 'Custom Algorithms', 'Testing Protocols']
        },
        {
          phase: 'Integration & Optimization',
          duration: '2-3 weeks',
          description: 'Seamlessly integrate AI capabilities into your existing systems',
          details: 'We ensure smooth API integration, optimize performance for real-world usage, and implement comprehensive testing protocols. Our team handles data pipelines, model versioning, and continuous monitoring.',
          deliverables: ['Production Integration', 'Performance Optimization', 'Monitoring Dashboard', 'Documentation']
        },
        {
          phase: 'Deployment & Monitoring',
          duration: '1-2 weeks',
          description: 'Launch your AI-powered application with continuous improvement systems',
          details: 'Cloud deployment with auto-scaling, real-time monitoring, and continuous learning capabilities. We implement feedback loops for model improvement and provide ongoing support.',
          deliverables: ['Production Deployment', 'Monitoring Systems', 'Maintenance Plan', 'Training Materials']
        }
      ]
    },
    {
      title: '3D INTERACTIVE EXPERIENCES',
      subtitle: 'Immersive Digital Worlds That Captivate',
      description: 'Create stunning 3D experiences that push the boundaries of web technology, from product visualizations to interactive virtual environments.',
      techWords: ['Three.js', 'WebGL', 'GLSL', 'Blender', '3D Modeling', 'WebXR', 'Raytracing', 'Shaders', 'Animations', 'Real-time Rendering'],
      timeline: [
        {
          phase: 'Creative Concept & Design',
          duration: '2-3 weeks',
          description: 'Develop the creative vision and user experience for your 3D application',
          details: 'We collaborate with you to create compelling 3D experiences, from initial wireframes to detailed storyboards. Our team designs user journeys, interaction patterns, and visual aesthetics that align with your brand.',
          deliverables: ['3D Concept Art', 'User Journey Maps', 'Interactive Prototypes', 'Technical Specifications']
        },
        {
          phase: '3D Asset Creation',
          duration: '3-4 weeks',
          description: 'Build high-quality 3D models, textures, and animations',
          details: 'Our 3D artists create detailed models, realistic textures, and smooth animations using industry-standard tools. We optimize assets for web performance while maintaining visual quality.',
          deliverables: ['3D Models', 'Texture Libraries', 'Animation Sequences', 'Asset Documentation']
        },
        {
          phase: 'WebGL Development',
          duration: '4-5 weeks',
          description: 'Implement cutting-edge 3D functionality using WebGL and Three.js',
          details: 'We develop custom shaders, implement physics simulations, and create interactive 3D interfaces. Our team optimizes rendering performance and ensures cross-platform compatibility.',
          deliverables: ['Interactive 3D Scenes', 'Custom Shaders', 'Physics Integration', 'Cross-platform Testing']
        },
        {
          phase: 'Performance Optimization',
          duration: '1-2 weeks',
          description: 'Ensure smooth performance across all devices and browsers',
          details: 'We implement LOD systems, optimize draw calls, and ensure your 3D experience runs smoothly on mobile devices. Performance testing across different hardware configurations.',
          deliverables: ['Performance Benchmarks', 'Mobile Optimization', 'Browser Compatibility', 'Loading Optimization']
        }
      ]
    },
    {
      title: 'BLOCKCHAIN SOLUTIONS',
      subtitle: 'Decentralized Applications for the Future',
      description: 'Build secure, transparent, and decentralized applications using cutting-edge blockchain technology and smart contracts.',
      techWords: ['Solidity', 'Web3', 'Ethereum', 'Smart Contracts', 'DeFi', 'NFTs', 'IPFS', 'MetaMask', 'Polygon', 'Hardhat'],
      timeline: [
        {
          phase: 'Blockchain Architecture',
          duration: '2-3 weeks',
          description: 'Design robust decentralized system architecture',
          details: 'We analyze your requirements and design the optimal blockchain architecture, selecting the right network, consensus mechanisms, and security protocols. Our team evaluates gas costs, scalability needs, and integration requirements.',
          deliverables: ['Architecture Diagrams', 'Network Selection', 'Security Protocols', 'Cost Analysis']
        },
        {
          phase: 'Smart Contract Development',
          duration: '3-4 weeks',
          description: 'Build secure and efficient smart contracts',
          details: 'Our blockchain developers write secure Solidity code, implement comprehensive testing, and conduct security audits. We optimize for gas efficiency and implement best practices for smart contract security.',
          deliverables: ['Smart Contracts', 'Security Audits', 'Gas Optimization', 'Test Coverage Reports']
        },
        {
          phase: 'DApp Frontend Development',
          duration: '3-4 weeks',
          description: 'Create intuitive decentralized application interfaces',
          details: 'We develop user-friendly Web3 interfaces, integrate wallet connections, and handle transaction flows. Our team ensures seamless interaction between users and smart contracts.',
          deliverables: ['Web3 Integration', 'Wallet Connections', 'Transaction Handling', 'User Interface']
        },
        {
          phase: 'Testing & Security',
          duration: '2-3 weeks',
          description: 'Comprehensive testing and security validation',
          details: 'Extensive testing on testnets, security audits, and vulnerability assessments. We simulate various attack scenarios and ensure your application is production-ready.',
          deliverables: ['Security Audit Report', 'Testnet Deployment', 'Vulnerability Assessment', 'Bug Fixes']
        },
        {
          phase: 'Mainnet Deployment',
          duration: '1-2 weeks',
          description: 'Launch your decentralized application on the mainnet',
          details: 'We handle mainnet deployment, monitor initial transactions, and provide ongoing support. Our team ensures smooth launch and helps with community onboarding.',
          deliverables: ['Mainnet Deployment', 'Monitoring Setup', 'Documentation', 'Community Support']
        }
      ]
    },
    {
      title: 'AR/VR DEVELOPMENT',
      subtitle: 'Next-Generation Extended Reality',
      description: 'Create immersive augmented and virtual reality experiences that blur the lines between digital and physical worlds.',
      techWords: ['WebXR', 'Unity', 'Unreal Engine', 'ARCore', 'ARKit', 'Oculus', 'Spatial Computing', '8th Wall', 'A-Frame', 'Hand Tracking'],
      timeline: [
        {
          phase: 'XR Experience Design',
          duration: '2-3 weeks',
          description: 'Design immersive user experiences for AR/VR platforms',
          details: 'We create compelling XR experiences by understanding spatial interactions, user comfort, and immersion principles. Our team designs for various XR platforms and devices.',
          deliverables: ['XR Storyboards', 'Interaction Design', 'User Testing Plans', 'Platform Strategy']
        },
        {
          phase: 'Platform Development',
          duration: '4-5 weeks',
          description: 'Build for multiple XR platforms and devices',
          details: 'Development for WebXR, mobile AR, VR headsets, and cross-platform compatibility. We optimize for different hardware capabilities and ensure consistent experiences.',
          deliverables: ['Multi-platform Apps', 'Device Optimization', 'Performance Testing', 'Cross-platform SDKs']
        },
        {
          phase: '3D Content & Environments',
          duration: '3-4 weeks',
          description: 'Create immersive 3D content and virtual environments',
          details: 'Our team develops detailed 3D environments, character models, and spatial audio experiences. We focus on creating believable virtual worlds that enhance user engagement.',
          deliverables: ['3D Environments', 'Character Models', 'Spatial Audio', 'Lighting Systems']
        },
        {
          phase: 'Testing & Optimization',
          duration: '2-3 weeks',
          description: 'Comprehensive testing across XR devices and platforms',
          details: 'We conduct extensive device testing, user acceptance testing, and performance optimization. Our team ensures comfort, reduces motion sickness, and optimizes frame rates.',
          deliverables: ['Device Testing Reports', 'Performance Optimization', 'User Comfort Analysis', 'Final Optimization']
        }
      ]
    }
  ];

  // Auto-advance cards within current service
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % services[currentService].timeline.length);
    }, 4000);

    return () => clearInterval(cardInterval);
  }, [currentService, services]);

  const currentServiceData = services[currentService];

  return (
    <section className="py-12 relative overflow-hidden bg-transparent">      
      <div className="container mx-auto px-6 relative z-10 h-screen flex flex-col">
        {/* Floating Tech Words */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {currentServiceData.techWords.map((word, index) => (
            <motion.div
              key={`${currentService}-${word}-${index}`}
              className="absolute text-white/10 font-mono font-bold select-none"
              style={{
                left: `${15 + (index * 12) % 70}%`,
                top: `${10 + (index * 8) % 80}%`,
                fontSize: `${12 + (index % 4) * 4}px`,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: [0, 0.3, 0.1],
                scale: [0.5, 1.2, 1],
                rotate: [0, 360, 180],
                x: [0, Math.sin(index) * 20, 0],
                y: [0, Math.cos(index) * 15, 0]
              }}
              transition={{
                duration: 8 + (index % 3) * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Main Service Display - Reduced spacing */}
        <div className="flex-1 flex flex-col justify-center pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center mb-6"
            >
              <motion.div
                className="inline-block px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-4"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(0, 245, 255, 0.2)',
                    '0 0 40px rgba(139, 92, 246, 0.4)',
                    '0 0 20px rgba(0, 245, 255, 0.2)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-cyan-300 font-mono font-medium text-base tracking-wider">
                  {currentServiceData.subtitle}
                </span>
              </motion.div>

              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white mb-4 tracking-tight"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0, 245, 255, 0.3)',
                    '0 0 40px rgba(0, 245, 255, 0.6)',
                    '0 0 20px rgba(0, 245, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {currentServiceData.title}
              </motion.h2>
              <motion.p 
                className="text-base text-white/70 font-sans max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {currentServiceData.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Timeline Cards - Significantly reduced size */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentService}-${currentCard}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <motion.div 
                  className="relative bg-black/20 backdrop-blur-2xl border-0 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.05))'
                  }}
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Animated Rainbow Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, #ff0080, #00f5ff, #8b5cf6, #39ff14, #ff0080)',
                      backgroundSize: '400% 400%',
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Progress indicator - Smaller */}
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-2">
                      {currentServiceData.timeline.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            index === currentCard
                              ? 'w-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
                              : index < currentCard
                              ? 'w-6 bg-gradient-to-r from-cyan-400 to-purple-400'
                              : 'w-6 bg-white/20'
                          }`}
                          animate={index === currentCard ? {
                            boxShadow: [
                              '0 0 10px rgba(0, 245, 255, 0.5)',
                              '0 0 20px rgba(139, 92, 246, 0.7)',
                              '0 0 10px rgba(0, 245, 255, 0.5)'
                            ]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <motion.div
                      className="inline-flex items-center space-x-4 px-6 py-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 rounded-full mb-4"
                      animate={{ 
                        scale: [1, 1.02, 1],
                        boxShadow: [
                          '0 0 20px rgba(0, 245, 255, 0.3)',
                          '0 0 30px rgba(139, 92, 246, 0.5)',
                          '0 0 20px rgba(0, 245, 255, 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-cyan-300 font-mono font-semibold text-sm tracking-wider">
                        PHASE {currentCard + 1}
                      </span>
                      <div className="w-px h-4 bg-white/30" />
                      <span className="text-purple-300 font-sans text-sm">
                        {currentServiceData.timeline[currentCard].duration}
                      </span>
                    </motion.div>

                    <motion.h3 
                      className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {currentServiceData.timeline[currentCard].phase}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-base md:text-lg text-white/80 font-sans mb-4 max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentServiceData.timeline[currentCard].description}
                    </motion.p>
                    
                    <motion.p 
                      className="text-sm text-white/60 font-sans max-w-3xl mx-auto leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentServiceData.timeline[currentCard].details}
                    </motion.p>

                    {/* Deliverables Section - Smaller */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 max-w-3xl mx-auto"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <h4 className="text-base font-mono font-semibold text-cyan-300 mb-3">Key Deliverables</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {currentServiceData.timeline[currentCard].deliverables.map((deliverable, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0" />
                            <span className="text-white/80 font-sans text-sm">{deliverable}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced decorative elements */}
                  <motion.div 
                    className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Preview Cards - Reduced margin-top */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex space-x-4 max-w-5xl overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-700 ${
                  index === currentService
                    ? 'opacity-100 scale-100 ring-2 ring-cyan-400/40'
                    : 'opacity-70 hover:opacity-100 scale-90 hover:scale-95'
                }`}
                onClick={() => {
                  setCurrentService(index);
                  setCurrentCard(0);
                }}
                whileHover={{ y: -6, rotateY: 6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-xl p-4 w-48">
                  <h4 className="text-sm font-mono font-semibold text-white mb-2 truncate">
                    {service.title}
                  </h4>
                  <p className="text-xs text-white/60 mb-3 line-clamp-2">
                    {service.subtitle}
                  </p>
                  <div className="flex space-x-1">
                    {service.timeline.map((_, cardIndex) => (
                      <div
                        key={cardIndex}
                        className={`h-1.5 flex-1 rounded-full ${
                          index === currentService && cardIndex <= currentCard
                            ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00f5ff' : i % 3 === 1 ? '#8b5cf6' : '#ff0080'
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.9, 0],
            y: [0, -200],
            x: [0, Math.sin(i) * 60]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut"
          }}
        />
      ))}
    </section>
  );
};

export default ServicesCarousel;
