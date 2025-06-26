
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c932?w=150&h=150&fit=crop&crop=face",
      content: "DevLaunch transformed our vision into reality with their AI-powered solutions. The team's expertise in cutting-edge technologies is unmatched.",
      rating: 5,
      project: "AI-Powered Analytics Platform"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "BlockChain Innovations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Their blockchain expertise helped us launch our DeFi platform ahead of schedule. Professional, innovative, and results-driven.",
      rating: 5,
      project: "DeFi Trading Platform"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "FutureTech Studios",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The 3D interactive experience they created exceeded our expectations. Our user engagement increased by 300% after launch.",
      rating: 5,
      project: "3D Product Configurator"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyber-purple/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-cyber-pink/10 to-transparent rounded-full filter blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
          <h2 className="font-aquire text-4xl md:text-6xl text-white mb-6 font-orbitron glow-text">
            Client Success Stories
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Hear from the visionaries who trusted us to bring their digital dreams to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass-morphism p-8 rounded-2xl border border-white/10 group-hover:border-cyber-blue/30 transition-all duration-500 h-full flex flex-col">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-cyber-blue" />
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-white/90 font-sora text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                {/* Project tag */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs font-mono rounded-full border border-cyber-blue/30">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <motion.div
                    className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-cyber-blue/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  
                  <div className="ml-4">
                    <div className="text-white font-semibold font-sora">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-sm font-sora">
                      {testimonial.role}
                    </div>
                    <div className="text-cyber-blue text-xs font-mono">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-blue/5 via-purple-500/5 to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyber-blue/0 group-hover:border-cyber-blue/60 rounded-tl-2xl transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyber-blue/0 group-hover:border-cyber-blue/60 rounded-br-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-morphism p-6 rounded-xl border border-white/10 inline-block">
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-cyber-blue">50+</div>
                <div className="text-sm font-sora">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-cyber-purple">98%</div>
                <div className="text-sm font-sora">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-cyber-pink">24/7</div>
                <div className="text-sm font-sora">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
