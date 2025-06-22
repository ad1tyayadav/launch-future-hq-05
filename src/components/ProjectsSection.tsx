import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Rocket, Terminal, Code, Zap, Eye } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Web3', 'E-commerce', 'Enterprise', 'Mobile', 'Travel'];

  const clientProjects = [{
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
    featured: true
  }, {
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
    featured: false
  }, {
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
    featured: false
  }, {
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
    featured: false
  }, {
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
    featured: false
  }, {
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
    featured: false
  }, {
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
    featured: false
  }, {
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
    featured: false
  }, {
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
    featured: false
  }];

  const devLaunchProjects = [{
    id: 101,
    title: 'DevLaunch Analytics Engine',
    category: 'Analytics',
    status: 'In Development',
    description: 'Real-time analytics dashboard for tracking development metrics and performance',
    fullDescription: 'Advanced analytics platform that provides deep insights into development workflows, code quality metrics, and team performance analytics with predictive modeling capabilities.',
    tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'from-cyan-400 to-violet-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    isDevLaunch: true
  }, {
    id: 102,
    title: 'AI Chat Tools',
    category: 'AI/ML',
    status: 'Open Source',
    description: 'Intelligent chat interface with natural language processing capabilities',
    fullDescription: 'Open-source chat tool suite featuring advanced NLP, context awareness, and multi-modal interaction capabilities for enhanced developer productivity.',
    tech: ['TypeScript', 'OpenAI', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop',
    color: 'from-violet-500 to-cyan-400',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    isDevLaunch: true
  }, {
    id: 103,
    title: 'Internal Dashboard UI',
    category: 'Tools',
    status: 'Production',
    description: 'Comprehensive admin dashboard for internal operations management',
    fullDescription: 'Feature-rich admin dashboard providing real-time monitoring, user management, system analytics, and operational insights for internal team efficiency.',
    tech: ['React', 'Material-UI', 'GraphQL', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    color: 'from-emerald-400 to-cyan-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    isDevLaunch: true
  }, {
    id: 104,
    title: 'Dev CMS',
    category: 'CMS',
    status: 'Experimental',
    description: 'Headless CMS designed specifically for developer workflows',
    fullDescription: 'Developer-first content management system with API-first architecture, version control integration, and advanced content modeling for modern web applications.',
    tech: ['Next.js', 'Strapi', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-pink-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    isDevLaunch: true
  }, {
    id: 105,
    title: 'Prototype Portal',
    category: 'Platform',
    status: 'In Development',
    description: 'Rapid prototyping platform for testing and iterating ideas quickly',
    fullDescription: 'Comprehensive prototyping platform enabling rapid idea validation, user testing, and iterative development with built-in collaboration tools.',
    tech: ['Vue.js', 'Firebase', 'WebRTC', 'Canvas API'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-purple-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    isDevLaunch: true
  }, {
    id: 106,
    title: 'Code Intelligence Suite',
    category: 'Developer Tools',
    status: 'Open Source',
    description: 'AI-powered code analysis and optimization toolkit',
    fullDescription: 'Advanced code intelligence platform providing automated code review, performance optimization suggestions, and smart refactoring capabilities.',
    tech: ['Python', 'AST', 'Machine Learning', 'Docker'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-teal-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    isDevLaunch: true
  }];

  const filteredClientProjects = selectedCategory === 'All' ? clientProjects : clientProjects.filter(project => project.category === selectedCategory);

  const getStatusIcon = status => {
    switch (status) {
      case 'Open Source':
        return <Code size={16} />;
      case 'In Development':
        return <Rocket size={16} />;
      case 'Experimental':
        return <Terminal size={16} />;
      default:
        return <Rocket size={16} />;
    }
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Open Source':
        return 'from-green-500 to-emerald-600';
      case 'In Development':
        return 'from-orange-500 to-red-500';
      case 'Experimental':
        return 'from-purple-500 to-pink-500';
      case 'Production':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -15,
        rotateX: 10,
        rotateY: 5,
        scale: 1.03,
        z: 100
      }}
      className="group relative cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative bg-gradient-to-br from-dark-space/90 via-space-gray/50 to-dark-space/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500">
        
        {/* Enhanced holographic border effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} p-[1px]`}>
            <div className="h-full w-full rounded-3xl bg-dark-space/95 backdrop-blur-xl" />
          </div>
        </div>

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500 overflow-hidden rounded-3xl">
          <svg className="w-full h-full scale-150" viewBox="0 0 100 100">
            <defs>
              <pattern id={`circuit-project-${project.id}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M0 5h10M5 0v10M2.5 2.5h5v5h-5z" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-cyber-blue"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#circuit-project-${project.id})`}/>
          </svg>
        </div>

        {/* Enhanced Project Image */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Multi-layered gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-space via-transparent to-transparent opacity-60" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/60 to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              x: [-100, 400],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{
              width: '3px',
              height: '100%',
            }}
          />
          
          {/* Enhanced badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {project.isDevLaunch ? (
              <>
                <motion.div 
                  className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(project.status)} text-white font-semibold rounded-full text-sm flex items-center space-x-2 backdrop-blur-sm`}
                  whileHover={{ scale: 1.05 }}
                >
                  {getStatusIcon(project.status)}
                  <span>{project.status}</span>
                </motion.div>
              </>
            ) : (
              <motion.span 
                className="px-3 py-1.5 bg-dark-space/80 text-cyber-blue font-semibold rounded-full text-sm backdrop-blur-sm border border-cyber-blue/30"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 245, 255, 0.1)' }}
              >
                {project.category}
              </motion.span>
            )}
          </div>

          <div className="absolute top-4 right-4">
            {project.isDevLaunch ? (
              <motion.span 
                className="px-3 py-1.5 bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold rounded-full text-sm backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(6, 182, 212, 0.3)',
                    '0 0 20px rgba(6, 182, 212, 0.6)',
                    '0 0 10px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                DevLaunch
              </motion.span>
            ) : (
              project.featured && (
                <motion.span 
                  className="px-3 py-1.5 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-full text-sm backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0, 245, 255, 0.3)',
                      '0 0 20px rgba(0, 245, 255, 0.6)',
                      '0 0 10px rgba(0, 245, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Featured
                </motion.span>
              )
            )}
          </div>

          {/* Enhanced hover overlay */}
          <div className="absolute inset-0 bg-dark-space/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1, rotate: 0 }}
              className="flex items-center space-x-3 text-white text-xl font-semibold"
            >
              <Eye size={24} className="text-cyber-blue" />
              <span>View Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={24} className="text-cyber-blue" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Project Content */}
        <div className="relative p-6 bg-gradient-to-br from-dark-space/80 to-space-gray/40 backdrop-blur-sm">
          {/* Tech indicators floating */}
          <div className="absolute -top-3 left-6 flex space-x-2">
            {project.tech.slice(0, 2).map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                className={`px-2 py-1 ${project.isDevLaunch ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30'} rounded-md text-xs font-medium backdrop-blur-sm`}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: techIndex * 0.2
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <motion.h3 
            className="text-2xl font-orbitron font-bold text-white mb-3 mt-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-white/70 font-sora text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
            {project.description}
          </p>

          {/* Enhanced tech stack display */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(2, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className={`px-3 py-1 ${project.isDevLaunch ? 'bg-violet-600/20 text-violet-400' : 'bg-cyber-purple/20 text-cyber-purple'} rounded-md text-xs font-medium`}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 bg-white/10 text-white/60 rounded-md text-xs font-medium">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Enhanced action buttons */}
          <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 245, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 py-3 px-4 ${project.isDevLaunch ? 'bg-gradient-to-r from-cyan-400 to-violet-600' : 'bg-gradient-to-r from-cyber-blue to-cyber-purple'} text-white rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 backdrop-blur-sm`}
            >
              <Zap size={16} />
              <span>View Live</span>
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: project.isDevLaunch ? 'rgba(6, 182, 212, 0.1)' : 'rgba(0, 245, 255, 0.1)',
                borderColor: project.isDevLaunch ? 'rgb(6, 182, 212)' : 'rgb(0, 245, 255)'
              }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 border ${project.isDevLaunch ? 'border-cyan-400 text-cyan-400' : 'border-cyber-blue text-cyber-blue'} hover:text-white transition-all duration-300 rounded-xl backdrop-blur-sm`}
            >
              <Github size={16} />
            </motion.button>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${project.isDevLaunch ? 'bg-cyan-400' : 'bg-cyber-blue'} rounded-full opacity-0 group-hover:opacity-60`}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
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
        onClick={e => e.stopPropagation()}
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
            {project.isDevLaunch ? (
              <div className="flex items-center space-x-2">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-600 text-white font-semibold rounded-full">
                  DevLaunch
                </span>
                <span className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(project.status)} text-white font-semibold rounded-full flex items-center space-x-2`}>
                  {getStatusIcon(project.status)}
                  <span>{project.status}</span>
                </span>
              </div>
            ) : (
              <span className="px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-full">
                {project.category}
              </span>
            )}
          </div>

          <p className="text-white/90 font-sora text-lg leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          <div className="mb-8">
            <h3 className={`${project.isDevLaunch ? 'text-cyan-400' : 'text-cyber-blue'} font-semibold mb-4 text-lg`}>Technology Stack:</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 ${project.isDevLaunch ? 'bg-cyan-400/20 text-cyan-400' : 'bg-cyber-blue/20 text-cyber-blue'} rounded-lg font-medium`}
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
              className={`flex items-center space-x-2 px-8 py-4 ${project.isDevLaunch ? 'bg-gradient-to-r from-cyan-400 to-violet-600' : 'bg-gradient-to-r from-cyber-blue to-cyber-purple'} text-white font-semibold rounded-lg`}
            >
              <ExternalLink size={20} />
              <span>View Live Demo</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-8 py-4 border ${project.isDevLaunch ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400' : 'border-cyber-blue text-cyber-blue hover:bg-cyber-blue'} hover:text-dark-space transition-all duration-300 rounded-lg font-semibold`}
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
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">Projects</h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Explore our portfolio of groundbreaking digital solutions and internal innovations 
            that push the boundaries of technology and design.
          </p>
        </motion.div>

        <Tabs defaultValue="client" className="w-full">
          {/* Main Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1">
              <TabsTrigger 
                value="client" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyber-blue data-[state=active]:to-cyber-purple data-[state=active]:text-white text-white/70 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Client Projects
              </TabsTrigger>
              <TabsTrigger 
                value="devlaunch" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-violet-600 data-[state=active]:text-white text-white/70 font-semibold py-3 rounded-lg transition-all duration-300"
              >
                DevLaunch Projects
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="client" className="focus-visible:outline-none">
            {/* Category Filter for Client Projects */}
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

            {/* Client Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredClientProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>

          <TabsContent value="devlaunch" className="focus-visible:outline-none">
            {/* DevLaunch Projects Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {devLaunchProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>
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
