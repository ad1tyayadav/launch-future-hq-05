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
  const navItems = [{
    name: 'Services',
    href: '#services'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-space/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        

        {/* Mobile Menu */}
        <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: isMobileMenuOpen ? 1 : 0,
        height: isMobileMenuOpen ? 'auto' : 0
      }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-4">
            {navItems.map(item => <a key={item.name} href={item.href} className="block text-white/80 hover:text-cyber-blue transition-colors duration-300 font-sora" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>)}
            <Link to="/lets-talk">
              <button className="cyber-button w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                <span>Let's Talk</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>;
};
export default Navigation;