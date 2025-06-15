
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web3', 'E-commerce', 'Enterprise', 'Mobile', 'Travel'];

  const projects = [
    {
      id: 1,
      title: 'Dyota AI',
      category: 'Web3',
      description: '3D blog platform powered by AI with immersive WebGL experiences',
      fullDescription: 'Revolutionary AI-powered 3D blog platform that transforms content creation through immersive WebGL experiences. Features real-time AI content generation, 3D model integration, and interactive storytelling capabilities.',
      tech: ['Three.js', 'Next.js', 'WebGL', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      color: 'from-cyber-blue to-cyber-purple',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Prajñan CRM',
      category: 'Enterprise',
      description: 'Modern CRM solution with advanced analytics and automation',
      fullDescription: 'Comprehensive CRM platform designed for modern enterprises with advanced analytics, workflow automation, and seamless integration capabilities. Features real-time dashboards and predictive insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      color: 'from-cyber-purple to-cyber-pink',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Innovative Ideas',
      category: 'Travel',
      description: 'Intelligent travel booking platform with personalized recommendations',
      fullDescription: 'Next-generation travel booking platform that leverages AI to provide personalized recommendations, seamless booking experiences, and real-time travel insights for modern travelers.',
      tech: ['Vue.js', 'Django', 'PostgreSQL', 'Maps API'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      color: 'from-cyber-pink to-neon-green',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Chiltel',
      category: 'E-commerce',
      description: 'Electronics e-commerce with integrated service solutions',
      fullDescription: 'Comprehensive electronics e-commerce platform featuring integrated service booking, real-time inventory management, and seamless mobile experience for tech enthusiasts.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      color: 'from-neon-green to-electric-blue',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Service App',
      category: 'Mobile',
      description: 'On-demand services platform with real-time tracking',
      fullDescription: 'Revolutionary on-demand services platform featuring real-time service tracking, intelligent matching algorithms, and seamless payment integration for modern service delivery.',
      tech: ['Flutter', 'GraphQL', 'AWS', 'Real-time'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      color: 'from-electric-blue to-cyber-blue',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Quick Commerce',
      category: 'E-commerce',
      description: 'Rapid delivery e-commerce with smart logistics',
      fullDescription: 'High-speed commerce platform optimized for rapid delivery with intelligent logistics management, real-time inventory tracking, and seamless checkout experiences.',
      tech: ['Next.js', 'Express', 'MongoDB', 'Logistics'],
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=600&fit=crop',
      color: 'from-cyber-blue to-cyber-purple',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 7,
      title: 'Fashion Store',
      category: 'E-commerce',
      description: 'Premium fashion retail with AR try-on experience',
      fullDescription: 'Luxury fashion e-commerce platform featuring AR try-on technology, personalized styling recommendations, and premium checkout experiences for discerning fashion enthusiasts.',
      tech: ['React', 'Node.js', 'Stripe', 'AR/VR'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      color: 'from-cyber-purple to-cyber-pink',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 8,
      title: 'EnerzyFlow',
      category: 'E-commerce',
      description: 'Specialized bottle e-commerce with sustainability focus',
      fullDescription: 'Eco-focused e-commerce platform specializing in sustainable bottles and hydration solutions, featuring environmental impact tracking and carbon offset integration.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Sustainability'],
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=600&fit=crop',
      color: 'from-cyber-pink to-neon-green',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 9,
      title: 'Celebrate',
      category: 'Mobile',
      description: 'Unified dining and entertainment lifestyle platform',
      fullDescription: 'Comprehensive lifestyle platform unifying dining reservations, entertainment booking, and social experiences with real-time availability and personalized recommendations.',
      tech: ['Flutter', 'Firebase', 'Node.js', 'Social'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      color: 'from-neon-green to-electric-blue',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      className="group relative cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative glass-morphism rounded-2xl overflow-hidden transform-gpu transition-all duration-500 group-hover:shadow-2xl">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} p-[2px]`}>
            <div className="h-full w-full rounded-2xl bg-dark-space/90" />
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-dark-space/80 text-cyber-blue font-semibold rounded-full text-sm backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-full text-sm">
                Featured
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-dark-space/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="text-white text-lg font-semibold flex items-center space-x-2"
            >
              <span>View Details</span>
              <ArrowRight size={20} />
            </motion.div>
          </div>
        </div>

        {/* Project Content */}
        <div className="relative p-6 bg-dark-space/50 backdrop-blur-sm">
          <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:glow-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-white/80 font-sora text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-white/60 rounded-md text-xs font-medium">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-2 px-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg text-sm font-semibold"
            >
              View Live
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space transition-all duration-300 rounded-lg"
            >
              <Github size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-morphism rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-dark-space/80 text-white rounded-full hover:bg-dark-space transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-4xl font-orbitron font-bold text-white glow-text">
              {project.title}
            </h2>
            <span className="px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-full">
              {project.category}
            </span>
          </div>

          <p className="text-white/90 font-sora text-lg leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          <div className="mb-8">
            <h3 className="text-cyber-blue font-semibold mb-4 text-lg">Technology Stack:</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg"
            >
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space transition-all duration-300 rounded-lg font-semibold"
            >
              <Github size={20} />
              <span>View Code</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

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
            Client Projects
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Explore our portfolio of groundbreaking digital solutions crafted for real clients, 
            pushing the boundaries of technology and design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-cyber-blue/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyber-pink/5 to-transparent rounded-full blur-2xl" />
    </section>
  );
};

export default ProjectsSection;
