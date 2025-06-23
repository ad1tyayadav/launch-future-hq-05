
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
      cardNumber: "4127 8394 5621 7890",
      validThru: "12/27",
      size: "large" // Takes 2 columns
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
      cardNumber: "5532 1047 8293 4567",
      validThru: "10/28",
      size: "medium"
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
      cardNumber: "3784 5629 1037 842",
      validThru: "05/29",
      size: "medium"
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
      cardNumber: "6011 4578 9321 0456",
      validThru: "08/26",
      size: "small"
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
      cardNumber: "4532 7890 1234 5678",
      validThru: "03/30",
      size: "large" // Takes 2 columns
    }
  ];

  const getGridClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-1';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getCardHeight = (size) => {
    switch (size) {
      case 'large':
        return 'h-80';
      case 'medium':
        return 'h-96';
      case 'small':
        return 'h-72';
      default:
        return 'h-80';
    }
  };

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
            Service Cards
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Premium access to cutting-edge digital solutions
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-min">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${getGridClasses(service.size)}`}
              >
                {/* Futuristic ID Card */}
                <div 
                  className={`relative ${getCardHeight(service.size)} bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]`}
                >
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Circuit pattern background */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2306b6d4' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H18v2.5h2zm0-2.5v-2.5h-2V18h2zM18 18H15.5v2H18v-2zm-2.5 0h-2.5v2h2.5v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Card Header */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <div className="text-cyan-400 text-xs font-mono tracking-wider">SERVICE MODULE</div>
                        <div className="text-white font-orbitron font-bold text-sm">{service.tag}</div>
                      </div>
                    </div>
                    
                    {/* Security chip */}
                    <div className="w-8 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm flex items-center justify-center">
                      <div className="w-4 h-3 bg-yellow-300 rounded-xs opacity-80" />
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="absolute top-20 left-6 right-6">
                    <div className="text-cyan-300 font-mono text-lg tracking-[0.2em] mb-2">
                      {service.cardNumber}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="absolute bottom-20 left-6 right-6">
                    <h3 className="text-white font-orbitron font-bold text-lg mb-3 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Features - Only show on larger cards */}
                    {service.size !== 'small' && (
                      <div className="space-y-1 mb-4">
                        {service.features.slice(0, service.size === 'large' ? 4 : 2).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 + 0.3 }}
                            className="text-cyan-100 text-xs flex items-center"
                          >
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    <div className="text-cyan-400 font-orbitron font-bold text-lg glow-text">
                      {service.price}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <div className="text-xs text-cyan-300 font-mono">VALID THRU</div>
                      <div className="text-sm text-white font-mono">{service.validThru}</div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs rounded-lg border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300"
                    >
                      ACTIVATE →
                    </motion.button>
                  </div>

                  {/* Holographic stripe */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400/60 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400/60 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400/60 rounded-br-2xl" />
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
