
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
      cardNumber: "4127 8394 5621 7890"
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
      cardNumber: "5532 1047 8293 4567"
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
      cardNumber: "3784 5629 1037 842"
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
      cardNumber: "6011 4578 9321 0456"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-700/10 to-transparent rounded-full filter blur-3xl" />
        
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
            Premium Service Cards
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Exclusive access to elite digital solutions
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
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_100px_rgba(255,255,255,0.05)_inset,0_0_200px_rgba(255,255,255,0.02)_inset] border-2 border-gray-600/30 group-hover:shadow-[0_35px_70px_rgba(0,0,0,0.9),0_0_120px_rgba(255,255,255,0.08)_inset] transition-all duration-500">
                    
                    {/* Metallic reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] opacity-80" />
                    
                    {/* Premium metallic texture */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 2L10 12l10 10 10-10-10-10zM0 22l10-10 10 10-10 10-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Card Header */}
                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_30px_rgba(255,255,255,0.1)_inset,0_2px_4px_rgba(255,255,255,0.2)_inset] border border-gray-300/20"
                          whileHover={{ scale: 1.1, rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent size={28} className="text-gray-800 drop-shadow-sm" />
                        </motion.div>
                        <div>
                          <div className="text-gray-300 text-xs font-mono tracking-[0.3em] uppercase font-medium">Premium Service</div>
                          <div className="text-white font-orbitron font-bold text-lg tracking-wider">{service.tag}</div>
                        </div>
                      </div>
                      
                      {/* Security chip */}
                      <div className="w-12 h-8 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded-lg flex items-center justify-center shadow-[0_6px_15px_rgba(0,0,0,0.4),0_0_15px_rgba(255,255,255,0.15)_inset] border border-gray-300/30">
                        <div className="w-8 h-4 bg-gradient-to-br from-gray-100 to-gray-300 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)_inset]" />
                      </div>
                    </div>

                    {/* Card Number */}
                    <div className="absolute top-32 left-8 right-8">
                      <div className="text-gray-200 font-mono text-xl tracking-[0.3em] mb-2 font-medium drop-shadow-lg"
                        style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.7), 0 0 10px rgba(255,255,255,0.1)'
                        }}>
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
                            className="text-gray-300 text-sm flex items-center"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mr-3 shadow-lg" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text font-orbitron font-bold text-xl">
                        {service.price}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="absolute bottom-8 right-8">
                      <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">Hover to Explore →</div>
                    </div>

                    {/* Metallic shine effect */}
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                      initial={{ x: '-100%', skewX: -20 }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
                    />

                    {/* Premium corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-400/60 rounded-tl-3xl" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-400/60 rounded-tr-3xl" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-400/60 rounded-bl-3xl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-400/60 rounded-br-3xl" />
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-[0_35px_70px_rgba(0,0,0,0.9),0_0_120px_rgba(255,255,255,0.08)_inset] border-2 border-gray-600/30">
                    
                    {/* Metallic reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/[0.02] to-white/[0.05] opacity-80" />
                    
                    {/* Premium metallic texture */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 2L10 12l10 10 10-10-10-10zM0 22l10-10 10 10-10 10-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Back Card Header */}
                    <div className="absolute top-8 left-8 right-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <IconComponent size={24} className="text-gray-300" />
                        <div>
                          <div className="text-gray-300 text-xs font-mono tracking-[0.3em] uppercase">Extended Features</div>
                          <div className="text-white font-orbitron font-bold text-lg">{service.tag}</div>
                        </div>
                      </div>
                    </div>

                    {/* Extended Features */}
                    <div className="absolute top-24 left-8 right-8 bottom-24">
                      <h3 className="text-white font-orbitron font-bold text-xl mb-6 drop-shadow-lg">
                        {service.title}
                      </h3>
                      
                      <div className="space-y-3 mb-6 max-h-48 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
                        {service.moreFeatures.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-gray-300 text-sm flex items-center"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mr-3 flex-shrink-0 shadow-lg" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Card Footer */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                      <div className="text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text font-orbitron font-bold text-xl">
                        {service.price}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 text-gray-900 font-mono text-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_30px_rgba(255,255,255,0.1)_inset] border border-gray-300/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_40px_rgba(255,255,255,0.15)_inset] transition-all duration-300 font-bold"
                      >
                        ACTIVATE PREMIUM →
                      </motion.button>
                    </div>

                    {/* Premium corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-400/60 rounded-tl-3xl" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-400/60 rounded-tr-3xl" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-400/60 rounded-bl-3xl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-400/60 rounded-br-3xl" />
                  </div>
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
