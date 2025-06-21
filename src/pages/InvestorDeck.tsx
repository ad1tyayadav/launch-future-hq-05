
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, Globe, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorDeck = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "10K+", color: "from-blue-400 to-purple-500" },
    { icon: TrendingUp, label: "Revenue Growth", value: "300%", color: "from-green-400 to-teal-500" },
    { icon: Globe, label: "Global Reach", value: "25+", color: "from-cyan-400 to-blue-500" },
    { icon: Award, label: "Success Rate", value: "98%", color: "from-orange-400 to-red-500" }
  ];

  const features = [
    {
      title: "AI-Powered Development",
      description: "Cutting-edge artificial intelligence solutions that revolutionize business processes",
      icon: Zap
    },
    {
      title: "Blockchain Innovation",
      description: "Secure, transparent, and decentralized solutions for the future economy",
      icon: Target
    },
    {
      title: "Full-Stack Excellence",
      description: "End-to-end development services from concept to deployment",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-dark-space relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyber-pink/10 to-transparent rounded-full filter blur-3xl" />
        
        {/* Starfield */}
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyber-blue transition-colors">
            <ArrowLeft size={20} />
            <span className="font-sora">Back to DevLaunch</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron glow-text">
            DevLaunch
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-cyber-blue mb-4 font-orbitron">
            Investor Pitch Deck
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Revolutionizing digital innovation through cutting-edge AI, blockchain, and full-stack development solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="glass-morphism p-6 text-center rounded-xl"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-orbitron mb-2">{stat.value}</h3>
                <p className="text-white/70 font-sora text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-morphism p-8 rounded-2xl mb-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6 font-orbitron">Our Mission</h3>
          <p className="text-lg text-white/80 font-sora max-w-4xl mx-auto leading-relaxed">
            To empower businesses with next-generation digital solutions that drive innovation, efficiency, and growth. 
            We combine artificial intelligence, blockchain technology, and modern development practices to create 
            transformative experiences that shape the future of digital interaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="glass-morphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 font-orbitron">{feature.title}</h4>
                <p className="text-white/70 font-sora">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Investment Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="glass-morphism p-8 rounded-2xl text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 font-orbitron">Investment Opportunity</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold text-cyber-blue mb-4 font-orbitron">Market Potential</h4>
              <ul className="space-y-2 text-white/80 font-sora">
                <li>• Global digital transformation market: $880B by 2026</li>
                <li>• AI services market growing at 35% CAGR</li>
                <li>• Blockchain adoption increasing 67% annually</li>
                <li>• Custom software development: $146B market</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyber-blue mb-4 font-orbitron">Our Advantage</h4>
              <ul className="space-y-2 text-white/80 font-sora">
                <li>• Expert team with 10+ years experience</li>
                <li>• Proven track record with 300+ projects</li>
                <li>• 98% client satisfaction rate</li>
                <li>• Cutting-edge technology stack</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Ready to Shape the Future?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lets-talk">
              <button className="cyber-button">
                <span>Schedule Meeting</span>
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 font-sora">
              Download Deck (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorDeck;
