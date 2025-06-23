
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Rocket, Terminal, Code, Zap, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  type: 'client' | 'devlaunch';
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Job Search Platform",
    description: "Revolutionizing job searching with AI to match candidates with ideal opportunities.",
    image: "/lovable-uploads/06f8542e-bc54-4459-aa62-5b5b60514c86.png",
    tags: ["AI", "React", "Node.js", "Machine Learning"],
    featured: true,
    type: 'client',
    liveLink: "https://example.com/jobsearch",
    githubLink: "https://github.com/example/jobsearch",
  },
  {
    id: 2,
    title: "Decentralized Finance (DeFi) App",
    description: "A secure and transparent DeFi application built on blockchain technology.",
    image: "/lovable-uploads/1d096f38-f3f1-4826-89c4-c8055775fc92.png",
    tags: ["Blockchain", "DeFi", "Solidity", "Web3"],
    featured: true,
    type: 'devlaunch',
    liveLink: "https://example.com/defi",
    githubLink: "https://github.com/example/defi",
  },
  {
    id: 3,
    title: "Sustainable Energy Management System",
    description: "Optimizing energy consumption using IoT and data analytics for a sustainable future.",
    image: "/lovable-uploads/540b6631-0fad-4216-aa1e-c068807441ed.png",
    tags: ["IoT", "Data Analytics", "Python", "Sustainability"],
    featured: false,
    type: 'client',
    liveLink: "https://example.com/energy",
    githubLink: "https://github.com/example/energy",
  },
  {
    id: 4,
    title: "AI-Driven Healthcare Diagnostics",
    description: "Improving healthcare outcomes with AI-powered diagnostic tools.",
    image: "/lovable-uploads/06f8542e-bc54-4459-aa62-5b5b60514c86.png",
    tags: ["AI", "Healthcare", "Machine Learning", "Python"],
    featured: false,
    type: 'devlaunch',
    liveLink: "https://example.com/healthcare",
    githubLink: "https://github.com/example/healthcare",
  },
  {
    id: 5,
    title: "Smart City Traffic Management",
    description: "Reducing traffic congestion and improving urban mobility with intelligent systems.",
    image: "/lovable-uploads/1d096f38-f3f1-4826-89c4-c8055775fc92.png",
    tags: ["Smart City", "IoT", "Data Analytics", "C++"],
    featured: false,
    type: 'client',
    liveLink: "https://example.com/traffic",
    githubLink: "https://github.com/example/traffic",
  },
  {
    id: 6,
    title: "Personalized Education Platform",
    description: "Enhancing learning experiences with personalized education paths.",
    image: "/lovable-uploads/540b6631-0fad-4216-aa1e-c068807441ed.png",
    tags: ["Education", "AI", "React", "Node.js"],
    featured: false,
    type: 'devlaunch',
    liveLink: "https://example.com/education",
    githubLink: "https://github.com/example/education",
  },
];

const ProjectsSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'featured' | 'all'>('featured');
  const [projectType, setProjectType] = useState<'client' | 'devlaunch'>('client');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [featuredApi, setFeaturedApi] = useState<CarouselApi>();
  const [allApi, setAllApi] = useState<CarouselApi>();

  // Filter projects based on current settings
  const getFilteredProjects = () => {
    const typeFiltered = projectsData.filter(project => project.type === projectType);
    return activeView === 'featured' 
      ? typeFiltered.filter(project => project.featured)
      : typeFiltered;
  };

  const filteredProjects = getFilteredProjects();

  // Autoplay functionality
  useEffect(() => {
    if (!featuredApi) return;

    const interval = setInterval(() => {
      if (featuredApi.canScrollNext()) {
        featuredApi.scrollNext();
      } else {
        featuredApi.scrollTo(0);
      }
    }, 3000);

    const handlePointerDown = () => clearInterval(interval);
    const handlePointerUp = () => {
      clearInterval(interval);
      setTimeout(() => {
        const newInterval = setInterval(() => {
          if (featuredApi.canScrollNext()) {
            featuredApi.scrollNext();
          } else {
            featuredApi.scrollTo(0);
          }
        }, 3000);
        return () => clearInterval(newInterval);
      }, 1000);
    };

    featuredApi.on('pointerDown', handlePointerDown);
    featuredApi.on('pointerUp', handlePointerUp);

    return () => {
      clearInterval(interval);
      featuredApi.off('pointerDown', handlePointerDown);
      featuredApi.off('pointerUp', handlePointerUp);
    };
  }, [featuredApi]);

  useEffect(() => {
    if (!allApi) return;

    const interval = setInterval(() => {
      if (allApi.canScrollNext()) {
        allApi.scrollNext();
      } else {
        allApi.scrollTo(0);
      }
    }, 3000);

    const handlePointerDown = () => clearInterval(interval);
    const handlePointerUp = () => {
      clearInterval(interval);
      setTimeout(() => {
        const newInterval = setInterval(() => {
          if (allApi.canScrollNext()) {
            allApi.scrollNext();
          } else {
            allApi.scrollTo(0);
          }
        }, 3000);
        return () => clearInterval(newInterval);
      }, 1000);
    };

    allApi.on('pointerDown', handlePointerDown);
    allApi.on('pointerUp', handlePointerUp);

    return () => {
      clearInterval(interval);
      allApi.off('pointerDown', handlePointerDown);
      allApi.off('pointerUp', handlePointerUp);
    };
  }, [allApi]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderSpacePodCard = (project: Project, index: number) => (
    <motion.div
      key={`${project.id}-${project.type}`}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 15,
        rotateX: 5,
      }}
      style={{ perspective: 1000 }}
      onClick={() => openModal(project)}
    >
      {/* Floating Animation Container */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotateZ: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5
        }}
        className="relative"
      >
        {/* Space Pod Frame */}
        <div className="relative w-80 h-96 mx-auto">
          {/* Outer Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            animate={{
              boxShadow: [
                "0 0 50px rgba(6,182,212,0.3)",
                "0 0 80px rgba(139,92,246,0.4)",
                "0 0 50px rgba(6,182,212,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Pod Viewport - Circular Image Container */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-inner">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 rounded-full" />
            
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Holographic Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-purple-400/10 rounded-full"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(6,182,212,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)",
                  "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 50%, rgba(6,182,212,0.1) 100%)",
                  "linear-gradient(45deg, rgba(6,182,212,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          {/* Orbiting Tech Stack Icons */}
          {project.tags.slice(0, 4).map((tag, tagIndex) => {
            const angle = (tagIndex * 90) + (index * 45);
            return (
              <motion.div
                key={tagIndex}
                className="absolute w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((angle * Math.PI) / 180) * 140 - 16,
                  y: Math.sin((angle * Math.PI) / 180) * 140 - 16,
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  x: { duration: 0 },
                  y: { duration: 0 }
                }}
              >
                {tag.slice(0, 2)}
              </motion.div>
            );
          })}

          {/* Project Title */}
          <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-2 font-orbitron glow-text">
              {project.title}
            </h3>
            
            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              {project.liveLink && (
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full border border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(6,182,212,0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveLink, '_blank');
                  }}
                >
                  <Eye size={16} />
                  Live Demo
                </motion.button>
              )}
              
              {project.githubLink && (
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full border border-purple-400/50 hover:border-purple-300 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(139,92,246,0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubLink, '_blank');
                  }}
                >
                  <Github size={16} />
                  GitHub
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Particle Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-dark-space via-space-gray to-dark-space">
      {/* Animated Space Background */}
      <div className="absolute inset-0">
        {/* Starfield */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Nebula Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" />
      </div>

      {/* Title and description */}
      <div className="container mx-auto text-center mb-16 relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron glow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mission Control: Projects
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg font-sora"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Navigate through our space-age portfolio of innovative digital solutions
        </motion.p>
      </div>

      {/* Project Type Switch */}
      <div className="container mx-auto px-4 relative z-10 mb-12">
        <motion.div 
          className="flex justify-center items-center gap-6 bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-full px-8 py-4 w-fit mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={`font-orbitron text-lg transition-colors ${projectType === 'client' ? 'text-cyan-400 glow-text' : 'text-gray-400'}`}>
            Client Projects
          </span>
          <Switch
            checked={projectType === 'devlaunch'}
            onCheckedChange={(checked) => setProjectType(checked ? 'devlaunch' : 'client')}
            className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-cyan-600"
          />
          <span className={`font-orbitron text-lg transition-colors ${projectType === 'devlaunch' ? 'text-purple-400 glow-text' : 'text-gray-400'}`}>
            DevLaunch Projects
          </span>
        </motion.div>
      </div>
      
      {/* Space Pod Project Carousel */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex justify-center items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button 
                variant="outline" 
                className="bg-transparent border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-300 font-orbitron"
                onClick={() => setActiveView(activeView === 'featured' ? 'all' : 'featured')}
              >
                {activeView === 'featured' ? 'View All Pods' : 'View Featured'}
              </Button>
            </motion.div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeView}-${projectType}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Carousel
                setApi={activeView === 'featured' ? setFeaturedApi : setAllApi}
                className="w-full max-w-7xl mx-auto"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {filteredProjects.map((project, index) => (
                    <CarouselItem key={`${project.id}-${project.type}`} className="md:basis-1/2 lg:basis-1/3">
                      {renderSpacePodCard(project, index)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20" />
                <CarouselNext className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20" />
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-dark-space bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full mx-4 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <Badge key={index} className="mr-2 mb-2 bg-gray-700 text-gray-200 border-none">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-start items-center">
                {selectedProject.liveLink && (
                  <Button variant="secondary" asChild className="mr-4">
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {selectedProject.githubLink && (
                  <Button variant="secondary" asChild>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      GitHub
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
