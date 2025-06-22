
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "DevLaunch transformed our vision into a stunning reality. Their innovative approach and cutting-edge technology exceeded our expectations.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "InnovateCorp",
      role: "CTO",
      content: "The team's expertise in modern web technologies and AI integration helped us launch our product 3 months ahead of schedule.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "FutureFinance",
      role: "Product Manager",
      content: "Outstanding work on our fintech platform. The UI/UX design is intuitive and the performance is exceptional.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white glow-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with DevLaunch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-morphism p-8 rounded-2xl relative group hover:scale-105 transition-transform duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-cyber-blue/30">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 font-sora mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold font-orbitron">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 text-sm font-sora">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/5 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default TestimonialsSection;
