
import React from 'react';
import { motion } from 'framer-motion';
import BookingCalendar from './BookingCalendar';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">
            Let's Build the Future
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto mb-8">
            Ready to transform your vision into a cutting-edge digital reality? 
            Schedule a personalized consultation to discuss your project and explore the possibilities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-morphism p-8 rounded-2xl">
                <h3 className="text-3xl font-orbitron font-bold text-white mb-6 glow-text">
                  Why Schedule a Meeting?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Personalized Strategy</h4>
                      <p className="text-white/70">Get tailored recommendations for your specific project needs and goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Fast Track Development</h4>
                      <p className="text-white/70">Skip the back-and-forth emails and get immediate clarity on your project scope.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyber-pink to-neon-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Technical Expertise</h4>
                      <p className="text-white/70">Discuss the latest technologies and innovations that could elevate your project.</p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-4">Prefer to reach out directly?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-cyber-blue">📧</span>
                      <span className="text-white/80">hello@devlaunch.co.in</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyber-purple">📱</span>
                      <span className="text-white/80">+91 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyber-pink">📍</span>
                      <span className="text-white/80">Bangalore, India</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <p className="text-white/60 text-sm mb-4">Follow our journey</p>
                  <div className="flex space-x-4">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                      <motion.button
                        key={social}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/10 hover:bg-cyber-blue/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="text-cyber-blue text-sm font-bold">
                          {social[0]}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Calendar Booking */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-full">
                <BookingCalendar />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/5 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;
