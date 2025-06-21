
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorDeck = () => {
  return (
    <div className="min-h-screen bg-dark-space relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-cyber-purple/20 to-transparent rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyber-blue transition-colors">
            <ArrowLeft size={20} />
            <span>Back to DevLaunch</span>
          </Link>
          
          <a 
            href="https://preview--launchy-investor-deck.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-cyber-blue hover:text-white transition-colors"
          >
            <span>View Original</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-orbitron glow-text">
            Investor Deck
          </h1>
          <p className="text-xl text-white/80 font-sora">
            Discover the future of digital innovation with DevLaunch
          </p>
        </motion.div>

        {/* Embedded iframe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-morphism p-4 rounded-2xl"
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://preview--launchy-investor-deck.lovable.app/"
              className="absolute inset-0 w-full h-full rounded-xl border border-white/10"
              title="Launchy Investor Deck"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/lets-talk">
            <button className="cyber-button">
              <span>Let's Discuss Investment</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorDeck;
