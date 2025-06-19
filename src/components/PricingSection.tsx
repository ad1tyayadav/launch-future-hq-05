
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Blocks, Smartphone, Palette, Code, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const pricingCards = [
    {
      title: "AI Solutions",
      icon: Bot,
      price: "Starting from $999",
      gradient: "from-blue-500 via-purple-600 to-pink-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
      features: [
        "Custom AI model integration",
        "Data automation workflows", 
        "Chatbot or NLP setup",
        "Ongoing support & maintenance",
        "Performance analytics"
      ]
    },
    {
      title: "Blockchain Development",
      icon: Blocks,
      price: "Starting from $1,499",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
      features: [
        "Smart contract development",
        "DeFi protocol creation",
        "NFT marketplace setup",
        "Web3 integration",
        "Security auditing"
      ]
    },
    {
      title: "App & Website Development",
      icon: Smartphone,
      price: "Starting from $799",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
      features: [
        "Responsive web applications",
        "Mobile app development",
        "Cross-platform solutions",
        "API integrations",
        "Performance optimization"
      ]
    },
    {
      title: "UI/UX Designing",
      icon: Palette,
      price: "Starting from $599",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
      features: [
        "User experience research",
        "Interactive prototypes",
        "Design system creation",
        "Accessibility compliance",
        "Usability testing"
      ]
    },
    {
      title: "Custom Software",
      icon: Code,
      price: "Starting from $1,299",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      glowColor: "rgba(6, 182, 212, 0.4)",
      features: [
        "Enterprise software solutions",
        "System integrations",
        "Database architecture",
        "Cloud deployment",
        "Scalable infrastructure"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Galaxy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-space-gray to-dark-space">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="cyan" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">
            Flexible Plans for Every Vision
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Transparent pricing tailored for your unique digital journey
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  y: {
                    duration: 3 + (index % 2),
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Card container */}
                <div 
                  className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 h-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${card.glowColor}`
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `0 0 30px ${card.glowColor}, 0 0 60px ${card.glowColor}`
                    }}
                  />

                  {/* Card content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 mx-auto`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{
                        boxShadow: `0 0 20px ${card.glowColor}`
                      }}
                    >
                      <IconComponent size={28} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {card.title}
                    </h3>

                    {/* Price */}
                    <p className="text-lg text-cyber-blue font-semibold mb-6 text-center">
                      {card.price}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {card.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="text-white/80 font-sora text-sm flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        >
                          <span className="text-cyber-blue mr-3 mt-1">✦</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-4 rounded-xl bg-gradient-to-r ${card.gradient} text-white font-semibold relative overflow-hidden group/btn`}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 10px 30px ${card.glowColor}`
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Get Quote</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Background decorations */}
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-cyber-blue to-transparent opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-l from-cyber-purple to-transparent opacity-20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default PricingSection;
