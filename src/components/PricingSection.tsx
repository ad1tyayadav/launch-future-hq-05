import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Blocks, Smartphone, Palette, Settings } from 'lucide-react';

const PricingSection = () => {
  const services = [
    {
      title: "AI Solutions",
      icon: Bot,
      features: [
        "Custom AI model integration",
        "Data automation workflows", 
        "Chatbot or NLP setup",
        "Ongoing support"
      ],
      price: "Starting from $999",
      tag: "NEURAL",
      polygon: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" // Octagon
    },
    {
      title: "Blockchain Development",
      icon: Blocks,
      features: [
        "Smart contract development",
        "DeFi protocol creation",
        "NFT marketplace setup",
        "Web3 integration"
      ],
      price: "Starting from $1,499",
      tag: "CRYPTO",
      polygon: "polygon(30% 0%, 70% 0%, 100% 30%, 70% 100%, 30% 100%, 0% 70%)" // Hexagon
    },
    {
      title: "App & Website Development",
      icon: Smartphone,
      features: [
        "Responsive web applications",
        "Mobile app development",
        "E-commerce platforms",
        "Progressive web apps"
      ],
      price: "Starting from $799",
      tag: "MOBILE",
      polygon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" // Pentagon
    },
    {
      title: "UI/UX Designing",
      icon: Palette,
      features: [
        "User interface design",
        "User experience optimization",
        "Prototyping & wireframing",
        "Design system creation"
      ],
      price: "Starting from $599",
      tag: "DESIGN",
      polygon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" // Hexagon (different orientation)
    },
    {
      title: "Custom Software",
      icon: Settings,
      features: [
        "Enterprise software solutions",
        "API development & integration",
        "Database architecture",
        "Cloud deployment"
      ],
      price: "Starting from $1,299",
      tag: "SYSTEM",
      polygon: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)" // Heptagon
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyber-blue/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-cyber-purple/10 to-transparent rounded-full filter blur-3xl" />
        
        {/* Starfield */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron glow-text">
            Our Pricing
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Transparent pricing tailored for your unique digital journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Data Module Card with Polygon Shape */}
                <div 
                  className="relative h-96 bg-gradient-to-b from-gray-900/50 to-black/80 backdrop-blur-sm border border-cyan-500/20 overflow-hidden transition-all duration-700 ease-out group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  style={{
                    clipPath: service.polygon,
                    transform: 'scale(0.95)',
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.clipPath = service.polygon;
                  }}
                >
                  
                  {/* Hex Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '30px 30px'
                    }}
                  />

                  {/* Animated Circuit Lines */}
                  <motion.div 
                    className="absolute top-4 left-4 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-60"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '40%' }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4 h-px bg-gradient-to-l from-cyan-400 to-transparent opacity-60"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '20%' }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-60"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '30%' }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  />

                  {/* Default State - Minimalistic */}
                  <motion.div 
                    className="absolute inset-0 p-6 flex flex-col justify-between group-hover:opacity-0 transition-all duration-700 ease-out"
                    initial={{ opacity: 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent size={20} className="text-cyan-400" />
                      </motion.div>
                      <motion.div 
                        className="px-2 py-1 bg-cyan-500/20 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {service.tag}
                      </motion.div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white font-orbitron mb-2">
                        {service.title}
                      </h3>
                      <motion.div 
                        className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </motion.div>

                  {/* Hover State - Expanded Data with Smoother Animation */}
                  <motion.div 
                    className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.6 }
                    }}
                  >
                    {/* Header with smoother decrypt animation */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                        initial={{ rotate: 0, scale: 0.8 }}
                        whileHover={{ rotate: 360, scale: 1 }}
                        transition={{ 
                          duration: 0.8,
                          ease: "easeInOut"
                        }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      <motion.div 
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-xs font-mono text-white font-bold"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {service.tag} MODULE
                      </motion.div>
                    </div>
                    
                    {/* Title with smooth typing effect */}
                    <motion.h3 
                      className="text-xl font-bold text-white mb-4 font-orbitron"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    {/* Features with smoother stagger animation */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -30, scale: 0.9 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.5,
                            delay: featureIndex * 0.1 + 0.3,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="text-sm text-cyan-100 flex items-center"
                        >
                          <motion.div 
                            className="w-1 h-1 bg-cyan-400 rounded-full mr-3"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                              duration: 0.3,
                              delay: featureIndex * 0.1 + 0.4
                            }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Price with enhanced glow effect */}
                    <motion.div 
                      className="mb-4"
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <p className="text-xl font-bold text-cyan-400 font-orbitron glow-text">
                        {service.price}
                      </p>
                    </motion.div>
                    
                    {/* CTA Button with smoother hover effect */}
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(6,182,212,0.6)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        duration: 0.4,
                        delay: 0.7
                      }}
                      className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded border border-cyan-400/50 hover:border-cyan-300 transition-all duration-400 font-mono text-sm"
                    >
                      INITIATE PROTOCOL →
                    </motion.button>
                  </motion.div>

                  {/* Corner decorations with animation */}
                  <motion.div 
                    className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                  <motion.div 
                    className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
