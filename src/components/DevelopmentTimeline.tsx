
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Brain, Code, Rocket, TestTube, Users, Sparkles } from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  illustration: string;
  duration: string;
  deliverables: string[];
  color: string;
}

const DevelopmentTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineSteps: TimelineStep[] = [
    {
      id: 0,
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      description: "We dive deep into your requirements, analyze user needs, and create a comprehensive roadmap. Our team conducts thorough market research and defines the technical architecture that will bring your vision to life.",
      icon: <Brain className="w-6 h-6" />,
      illustration: "https://images.unsplash.com/photo-1553028826-f4804151e04b?w=800&h=600&fit=crop",
      duration: "1-2 weeks",
      deliverables: ["User Research", "Technical Specs", "Project Roadmap"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      title: "Design & Prototyping",
      subtitle: "Crafting the Experience",
      description: "Our designers create intuitive user interfaces and seamless user experiences. We build interactive prototypes that allow you to visualize and test the application before development begins.",
      icon: <Sparkles className="w-6 h-6" />,
      illustration: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=600&fit=crop",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Design", "Interactive Prototypes", "Design System"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Development",
      subtitle: "Building Your Application",
      description: "Our development team brings the designs to life using cutting-edge technologies. We follow agile methodology with regular check-ins and iterative improvements throughout the process.",
      icon: <Code className="w-6 h-6" />,
      illustration: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      duration: "4-8 weeks",
      deliverables: ["Frontend Development", "Backend APIs", "Database Design"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Testing & Quality",
      subtitle: "Ensuring Excellence",
      description: "Comprehensive testing across all devices and platforms ensures your application performs flawlessly. We conduct user acceptance testing and optimize for performance and security.",
      icon: <TestTube className="w-6 h-6" />,
      illustration: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      duration: "1-2 weeks",
      deliverables: ["Quality Assurance", "Performance Testing", "Security Audit"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Launch & Support",
      subtitle: "Going Live Successfully",
      description: "We deploy your application to production with zero-downtime deployment strategies. Our team provides ongoing support and monitoring to ensure everything runs smoothly.",
      icon: <Rocket className="w-6 h-6" />,
      illustration: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      duration: "1 week",
      deliverables: ["Production Deployment", "Monitoring Setup", "Documentation"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top / (rect.height - window.innerHeight);
      const stepIndex = Math.floor(scrolled * timelineSteps.length);
      
      if (stepIndex >= 0 && stepIndex < timelineSteps.length) {
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timelineSteps.length]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      <motion.div 
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Your App's Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial concept to successful launch, we guide you through every step of the development process
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="max-w-7xl mx-auto">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative mb-32 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center gap-16`}
            >
              {/* Step Number & Line */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 md:block hidden">
                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.2 : 1,
                    backgroundColor: activeStep === index ? '#3B82F6' : '#E5E7EB'
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </motion.div>
                
                {index < timelineSteps.length - 1 && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gray-200" />
                )}
              </div>

              {/* Content */}
              <motion.div
                animate={{
                  x: activeStep === index ? 0 : (index % 2 === 0 ? -20 : 20),
                  opacity: activeStep === index ? 1 : 0.6
                }}
                transition={{ duration: 0.5 }}
                className="flex-1 md:w-1/2"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, delIndex) => (
                        <span
                          key={delIndex}
                          className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Illustration */}
              <motion.div
                animate={{
                  scale: activeStep === index ? 1.05 : 1,
                  opacity: activeStep === index ? 1 : 0.8
                }}
                transition={{ duration: 0.5 }}
                className="flex-1 md:w-1/2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3" />
                  <img
                    src={step.illustration}
                    alt={step.title}
                    className="relative w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-10 rounded-3xl`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
          <div className="space-y-3">
            {timelineSteps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const element = document.getElementById(`step-${index}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                animate={{
                  scale: activeStep === index ? 1.2 : 1,
                  backgroundColor: activeStep === index ? '#3B82F6' : '#E5E7EB'
                }}
                className="w-3 h-3 rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimeline;
