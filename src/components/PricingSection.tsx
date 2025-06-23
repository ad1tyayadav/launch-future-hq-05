
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
      tag: "NEURAL"
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
      tag: "CRYPTO"
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
      tag: "MOBILE"
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
      tag: "DESIGN"
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
      tag: "SYSTEM"
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
                {/* Data Module Card */}
                <div className="relative h-96 bg-gradient-to-b from-gray-900/50 to-black/80 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  
                  {/* Hex Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '30px 30px'
                    }}
                  />

                  {/* Circuit Lines */}
                  <div className="absolute top-4 left-4 w-16 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-cyan-400 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-60" />

                  {/* Default State - Minimalistic */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-500">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <IconComponent size={20} className="text-cyan-400" />
                      </div>
                      <div className="px-2 py-1 bg-cyan-500/20 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30">
                        {service.tag}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white font-orbitron mb-2">
                        {service.title}
                      </h3>
                      <div className="w-full h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
                    </div>
                  </div>

                  {/* Hover State - Expanded Data */}
                  <motion.div 
                    className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                  >
                    {/* Header with decrypt animation */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-xs font-mono text-white font-bold">
                        {service.tag} MODULE
                      </div>
                    </div>
                    
                    {/* Title with typing effect */}
                    <h3 className="text-xl font-bold text-white mb-4 font-orbitron">
                      {service.title}
                    </h3>
                    
                    {/* Features with stagger animation */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="text-sm text-cyan-100 flex items-center"
                        >
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Price with glow effect */}
                    <div className="mb-4">
                      <p className="text-xl font-bold text-cyan-400 font-orbitron glow-text">
                        {service.price}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] font-mono text-sm"
                    >
                      INITIATE PROTOCOL →
                    </motion.button>
                  </motion.div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60" />
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
