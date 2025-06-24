
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Blocks, Smartphone, Palette } from 'lucide-react';

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
      moreFeatures: [
        "Machine learning algorithms",
        "Natural language processing",
        "Computer vision integration",
        "AI model training & optimization",
        "Real-time data processing",
        "Predictive analytics"
      ],
      price: "Starting from $999",
      tag: "NEURAL",
      cardNumber: "4127 8394 5621 7890",
      gradient: "from-slate-800 via-slate-700 to-slate-900",
      accentColor: "from-blue-400 to-cyan-500"
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
      moreFeatures: [
        "Cross-chain compatibility",
        "Token economics design",
        "Security auditing",
        "Gas optimization",
        "Wallet integration",
        "Decentralized governance"
      ],
      price: "Starting from $1,499",
      tag: "CRYPTO",
      cardNumber: "5532 1047 8293 4567",
      gradient: "from-amber-900 via-yellow-800 to-amber-950",
      accentColor: "from-amber-400 to-yellow-500"
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
      moreFeatures: [
        "Cross-platform development",
        "Performance optimization",
        "SEO implementation",
        "Third-party integrations",
        "Analytics setup",
        "Maintenance & support"
      ],
      price: "Starting from $799",
      tag: "MOBILE",
      cardNumber: "3784 5629 1037 842",
      gradient: "from-emerald-900 via-green-800 to-emerald-950",
      accentColor: "from-emerald-400 to-green-500"
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
      moreFeatures: [
        "User research & testing",
        "Accessibility compliance",
        "Brand identity design",
        "Design consultation",
        "Style guide creation",
        "Interactive prototypes"
      ],
      price: "Starting from $599",
      tag: "DESIGN",
      cardNumber: "6011 4578 9321 0456",
      gradient: "from-purple-900 via-violet-800 to-purple-950",
      accentColor: "from-purple-400 to-violet-500"
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
            Service Cards
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Premium access to cutting-edge digital solutions
          </p>
        </motion.div>

        {/* Premium Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-96 [perspective:1000px]"
              >
                {/* Card Container with Flip Effect */}
                <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front of Card */}
                  <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br ${service.gradient} rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_60px_rgba(255,255,255,0.1)_inset] border border-white/20 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_80px_rgba(255,255,255,0.15)_inset] transition-all duration-500`}>
                    
                    {/* Metallic reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60" />
                    
                    {/* Embossed border effect */}
                    <div className="absolute inset-[1px] rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)_inset]" />
                    
                    {/* Premium texture pattern */}
                    <div className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M10 1L5 6l5 5 5-5-5-5zM0 11l5-5 5 5-5 5-5-5z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Card Header with Premium Styling */}
                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.accentColor} flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.1)_inset] border border-white/20`}
                          whileHover={{ scale: 1.1, rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent size={28} className="text-white drop-shadow-lg" />
                        </motion.div>
                        <div>
                          <div className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase">Premium Service</div>
                          <div className="text-white font-orbitron font-bold text-lg tracking-wider">{service.tag}</div>
                        </div>
                      </div>
                      
                      {/* Security chip with metallic finish */}
                      <div className={`w-12 h-8 bg-gradient-to-r ${service.accentColor} rounded-lg flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.4),0_0_10px_rgba(255,255,255,0.2)_inset] border border-white/30`}>
                        <div className="w-8 h-4 bg-white/90 rounded-sm opacity-90 shadow-inner" />
                      </div>
                    </div>

                    {/* Card Number with Embossed Effect */}
                    <div className="absolute top-32 left-8 right-8">
                      <div className="text-white/90 font-mono text-xl tracking-[0.3em] mb-2 drop-shadow-lg text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {service.cardNumber}
                      </div>
                    </div>

                    {/* Service Title and Features */}
                    <div className="absolute bottom-24 left-8 right-8">
                      <h3 className="text-white font-orbitron font-bold text-xl mb-4 leading-tight drop-shadow-lg">
                        {service.title}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 + 0.3 }}
                            className="text-white/90 text-sm flex items-center"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.accentColor} rounded-full mr-3 shadow-lg`} />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className={`text-transparent bg-gradient-to-r ${service.accentColor} bg-clip-text font-orbitron font-bold text-xl`}>
                        {service.price}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="absolute bottom-8 right-8">
                      <div className="text-xs text-white/60 font-mono uppercase tracking-wider">Hover to Explore →</div>
                    </div>

                    {/* Metallic shine effect */}
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: '-100%', skewX: -20 }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                    />

                    {/* Premium corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-3xl" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/40 rounded-tr-3xl" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/40 rounded-bl-3xl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-3xl" />
                  </div>

                  {/* Back of Card */}
                  <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${service.gradient} rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_80px_rgba(255,255,255,0.15)_inset] border border-white/20`}>
                    
                    {/* Metallic reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/5 to-transparent opacity-60" />
                    
                    {/* Embossed border effect */}
                    <div className="absolute inset-[1px] rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)_inset]" />
                    
                    {/* Premium texture pattern */}
                    <div className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M10 1L5 6l5 5 5-5-5-5zM0 11l5-5 5 5-5 5-5-5z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Back Card Header */}
                    <div className="absolute top-8 left-8 right-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <IconComponent size={24} className={`text-transparent bg-gradient-to-r ${service.accentColor} bg-clip-text`} />
                        <div>
                          <div className="text-white/80 text-xs font-mono tracking-[0.2em] uppercase">Extended Features</div>
                          <div className="text-white font-orbitron font-bold text-lg">{service.tag}</div>
                        </div>
                      </div>
                    </div>

                    {/* Extended Features */}
                    <div className="absolute top-24 left-8 right-8 bottom-24">
                      <h3 className="text-white font-orbitron font-bold text-xl mb-6 drop-shadow-lg">
                        {service.title}
                      </h3>
                      
                      <div className="space-y-3 mb-6 max-h-48 overflow-y-auto custom-scrollbar">
                        {service.moreFeatures.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-white/90 text-sm flex items-center"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.accentColor} rounded-full mr-3 flex-shrink-0 shadow-lg`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Card Footer */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className={`text-transparent bg-gradient-to-r ${service.accentColor} bg-clip-text font-orbitron font-bold text-xl`}>
                        {service.price}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 bg-gradient-to-r ${service.accentColor} text-white font-mono text-sm rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.1)_inset] border border-white/20 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_0_30px_rgba(255,255,255,0.15)_inset] transition-all duration-300`}
                      >
                        ACTIVATE PREMIUM →
                      </motion.button>
                    </div>

                    {/* Premium corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-3xl" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/40 rounded-tr-3xl" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/40 rounded-bl-3xl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-3xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
