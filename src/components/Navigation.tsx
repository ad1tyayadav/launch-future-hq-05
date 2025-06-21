
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Replace with your logo path:
const LOGO_SRC = '/lovable-uploads/540b6631-0fad-4216-aa1e-c068807441ed.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-space/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
              <img
                src={LOGO_SRC}
                alt="DevLaunch Logo"
                className="object-contain w-10 h-10"
                draggable={false}
              />
            </div>
            <span className="text-white font-orbitron font-bold text-xl glow-text">
              DevLaunch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-cyber-blue transition-colors duration-300 font-sora"
              >
                {item.name}
              </a>
            ))}
            
            {/* Investor Deck Button */}
            <Link to="/investor-deck">
              <button className="px-4 py-2 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20">
                Investor Deck
              </button>
            </Link>

            <Link to="/lets-talk">
              <button className="cyber-button">
                <span>Let's Talk</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-cyber-blue transition-colors duration-300 font-sora"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link to="/investor-deck">
              <button 
                className="block w-full text-left px-4 py-2 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-semibold rounded-lg mb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investor Deck
              </button>
            </Link>
            <Link to="/lets-talk">
              <button className="cyber-button w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Let's Talk</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
