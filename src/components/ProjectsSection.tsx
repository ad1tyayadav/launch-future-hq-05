
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'NeuroSync AI Platform',
      category: 'AI/ML',
      description: 'Revolutionary AI platform that processes neural patterns to predict user behavior with 97% accuracy.',
      tech: ['React', 'TensorFlow', 'Python', 'WebGL'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'Quantum Commerce Hub',
      category: 'E-Commerce',
      description: 'Next-gen e-commerce platform with quantum-encrypted transactions and holographic product displays.',
      tech: ['Next.js', 'Three.js', 'Blockchain', 'AR'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'MetaVerse Studio',
      category: 'VR/AR',
      description: 'Immersive 3D workspace where teams collaborate in virtual reality environments.',
      tech: ['Unity', 'WebXR', 'Socket.io', 'Blender'],
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      color: 'from-cyber-pink to-neon-green',
    },
    {
      title: 'Crypto Analytics Matrix',
      category: 'Blockchain',
      description: 'Real-time cryptocurrency analysis dashboard with predictive algorithms and portfolio optimization.',
      tech: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      color: 'from-neon-green to-electric-blue',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">
            Project Showcase
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Explore our portfolio of groundbreaking digital experiences that 
            are shaping the future of technology.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Project Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'glass-morphism neon-border'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`} />
                  <div>
                    <h3 className="text-white font-semibold font-sora">
                      {project.title}
                    </h3>
                    <p className="text-cyber-blue text-sm font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-morphism rounded-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${projects[selectedProject].color} opacity-30`} />
                  
                  {/* Category badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-dark-space/80 text-cyber-blue font-semibold rounded-full text-sm">
                      {projects[selectedProject].category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-orbitron font-bold text-white mb-4 glow-text">
                    {projects[selectedProject].title}
                  </h3>
                  
                  <p className="text-white/80 font-sora text-lg leading-relaxed mb-6">
                    {projects[selectedProject].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-cyber-blue font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[selectedProject].tech.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cyber-button"
                    >
                      <span>View Live Demo</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space transition-all duration-300 rounded-lg font-semibold"
                    >
                      Case Study
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/10 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default ProjectsSection;
