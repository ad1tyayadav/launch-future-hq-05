
import React from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-dark-space overflow-x-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-dark-space/95 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/540b6631-0fad-4216-aa1e-c068807441ed.png"
                  alt="DevLaunch Logo"
                  className="object-contain w-10 h-10"
                  draggable={false}
                />
              </div>
              <span className="text-white font-orbitron font-bold text-xl glow-text">
                DevLaunch
              </span>
            </div>
            
            <div className="text-white/60 font-sora text-center md:text-right">
              <p>© 2024 DevLaunch. Crafting the future, one pixel at a time.</p>
              <p className="text-sm mt-1">Built with ⚡ by the DevLaunch team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
