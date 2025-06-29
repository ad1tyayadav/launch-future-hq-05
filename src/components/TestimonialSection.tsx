import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Link } from 'react-router-dom';

const TestimonialSection: React.FC = () => {


  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-cyber-purple/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-l from-cyber-pink/10 to-transparent rounded-full filter blur-3xl" />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-aquire text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-orbitron glow-text">
            Client Success Stories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Hear from the visionaries who trusted us to bring their digital dreams to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
  {testimonials.map((testimonial, index) => {
    const clientUrl = `/client/${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`;
    
    return (
      <Link to={clientUrl} key={index}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group relative cursor-pointer"
        >
          <div className="glass-morphism p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-cyber-blue/30 transition-all duration-500 h-full flex flex-col">
            {/* Quote icon */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-blue" />
            </div>

            {/* Stars */}
            <div className="flex mb-4 sm:mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 * i }}
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-white/90 font-sora text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
              "{testimonial.content}"
            </blockquote>

            {/* Project tag */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-2 sm:px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-xs font-mono rounded-full border border-cyber-blue/30">
                {testimonial.project}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center mt-auto">
              <motion.div
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-cyber-blue/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="ml-3 sm:ml-4">
                <div className="text-white font-semibold font-sora text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-sora">
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
            <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-cyber-blue/0 group-hover:border-cyber-blue/60 rounded-tl-2xl transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-cyber-blue/0 group-hover:border-cyber-blue/60 rounded-br-2xl transition-all duration-300" />
          </div>
        </motion.div>
      </Link>
    );
  })}
</div>


        {/* Additional social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="glass-morphism p-4 sm:p-6 rounded-xl border border-white/10 inline-block w-[75vw] sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-blue">50+</div>
                <div className="text-xs sm:text-sm font-sora">Projects Delivered</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/20 sm:block hidden" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-purple">98%</div>
                <div className="text-xs sm:text-sm font-sora">Client Satisfaction</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-white/20 sm:block hidden" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-bold text-cyber-pink">24/7</div>
                <div className="text-xs sm:text-sm font-sora">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;