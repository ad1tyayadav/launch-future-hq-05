import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ExternalLink, Github, X, Eye, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
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
const projectsData: Project[] = [{
  id: 1,
  title: "AI-Powered Job Search Platform",
  description: "Revolutionizing job searching with AI to match candidates with ideal opportunities.",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  tags: ["AI", "React", "Node.js", "Machine Learning"],
  featured: true,
  type: 'client',
  liveLink: "https://example.com/jobsearch",
  githubLink: "https://github.com/example/jobsearch"
}, {
  id: 2,
  title: "Decentralized Finance (DeFi) App",
  description: "A secure and transparent DeFi application built on blockchain technology.",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
  tags: ["Blockchain", "DeFi", "Solidity", "Web3"],
  featured: true,
  type: 'devlaunch',
  liveLink: "https://example.com/defi",
  githubLink: "https://github.com/example/defi"
}, {
  id: 3,
  title: "Sustainable Energy Management System",
  description: "Optimizing energy consumption using IoT and data analytics for a sustainable future.",
  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
  tags: ["IoT", "Data Analytics", "Python", "Sustainability"],
  featured: false,
  type: 'client',
  liveLink: "https://example.com/energy",
  githubLink: "https://github.com/example/energy"
}, {
  id: 4,
  title: "AI-Driven Healthcare Diagnostics",
  description: "Improving healthcare outcomes with AI-powered diagnostic tools.",
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
  tags: ["AI", "Healthcare", "Machine Learning", "Python"],
  featured: false,
  type: 'devlaunch',
  liveLink: "https://example.com/healthcare",
  githubLink: "https://github.com/example/healthcare"
}, {
  id: 5,
  title: "Smart City Traffic Management",
  description: "Reducing traffic congestion and improving urban mobility with intelligent systems.",
  image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
  tags: ["Smart City", "IoT", "Data Analytics", "C++"],
  featured: false,
  type: 'client',
  liveLink: "https://example.com/traffic",
  githubLink: "https://github.com/example/traffic"
}, {
  id: 6,
  title: "Personalized Education Platform",
  description: "Enhancing learning experiences with personalized education paths.",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  tags: ["Education", "AI", "React", "Node.js"],
  featured: false,
  type: 'devlaunch',
  liveLink: "https://example.com/education",
  githubLink: "https://github.com/example/education"
}];
const ProjectsSection: React.FC = () => {
  const [projectType, setProjectType] = useState<'client' | 'devlaunch'>('client');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const animationRef = useRef<{
    currentX: number;
    isPaused: boolean;
  }>({
    currentX: 200,
    isPaused: false
  });

  // Filter projects based on current type only
  const getFilteredProjects = () => {
    return projectsData.filter(project => project.type === projectType);
  };
  const filteredProjects = getFilteredProjects();
  // Create seamless loop by duplicating projects multiple times
  const duplicatedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];
  React.useEffect(() => {
    const startAnimation = () => {
      if (animationRef.current.isPaused || isManualScrolling || duplicatedProjects.length === 0) return;
      const cardWidth = 520; // Increased from 480
      const gap = 32; // Reduced from 48px gap
      const totalCardWidth = cardWidth + gap;
      const singleSetWidth = filteredProjects.length * totalCardWidth;

      // Start from current position and animate to one full set width to the left
      const startX = animationRef.current.currentX;
      const endX = startX - singleSetWidth;

      // Calculate duration based on remaining distance
      const distance = Math.abs(startX - endX);
      const duration = distance / singleSetWidth * 30; // 30 seconds for one full cycle

      controls.start({
        x: endX,
        transition: {
          duration,
          ease: "linear"
        }
      }).then(() => {
        // Reset position seamlessly when animation completes
        if (!animationRef.current.isPaused && !isManualScrolling) {
          animationRef.current.currentX = startX;
          controls.set({
            x: startX
          });
          // Restart animation
          setTimeout(() => {
            if (!animationRef.current.isPaused && !isManualScrolling) {
              startAnimation();
            }
          }, 0);
        }
      });
    };
    if (!isHovered && !isManualScrolling && duplicatedProjects.length > 0) {
      animationRef.current.isPaused = false;
      startAnimation();
    } else {
      animationRef.current.isPaused = true;
      controls.stop();
    }
  }, [isHovered, isManualScrolling, controls, duplicatedProjects.length, filteredProjects.length]);
  const handleMouseEnter = () => {
    // Get current position from the actual transform
    const element = scrollContainerRef.current;
    if (element) {
      const transform = window.getComputedStyle(element).transform;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const values = matrix[1].split(',').map(parseFloat);
          animationRef.current.currentX = values[4] || animationRef.current.currentX;
        }
      }
    }
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const scrollLeft = () => {
    setIsManualScrolling(true);
    const newX = Math.min(animationRef.current.currentX + 500, 200);
    animationRef.current.currentX = newX;
    controls.start({
      x: newX,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 1000);
    });
  };
  const scrollRight = () => {
    setIsManualScrolling(true);
    const cardWidth = 520; // Updated to match new card width
    const gap = 32; // Updated to match new gap
    const totalCardWidth = cardWidth + gap;
    const singleSetWidth = filteredProjects.length * totalCardWidth;
    const minX = -(singleSetWidth * 2); // Allow scrolling through two sets
    const newX = Math.max(animationRef.current.currentX - 500, minX);
    animationRef.current.currentX = newX;
    controls.start({
      x: newX,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 1000);
    });
  };
  const renderSpacePodCard = (project: Project, index: number) => (
    <motion.div
      key={`${project.id}-${project.type}-${index}`}
      className="flex-shrink-0 w-[500px] relative group cursor-pointer perspective-1000" // Increased from w-96 (384px) to w-[500px]
      animate={{
        y: [0, -15, 0]
      }}
      transition={{
        duration: 4 + index % 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.3
      }}
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
        <div className="relative w-[480px] h-96 mx-auto"> {/* Increased from w-80 to w-[480px] */}
          {/* Holographic Card Container */}
          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.05) 50%, rgba(255,0,128,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: `
                0 8px 32px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255,255,255,0.1),
                0 0 40px rgba(6,182,212,0.1)
              `
            }}
            whileHover={{
              rotateY: 15,
              rotateX: 5,
              scale: 1.05,
              boxShadow: `
                0 20px 60px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2),
                0 0 60px rgba(6,182,212,0.2),
                0 0 80px rgba(139,92,246,0.1)
              `
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            {/* Diagonal Light Rays */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full" style={{
              background: `
                    linear-gradient(
                      -45deg,
                      transparent 0%,
                      rgba(0,245,255,0.1) 30%,
                      transparent 35%,
                      transparent 65%,
                      rgba(139,92,246,0.1) 70%,
                      transparent 100%
                    )
                  `
            }} />
            </div>

            {/* Card Content - Front Side */}
            <motion.div className="relative w-full h-full p-6 flex flex-col" initial={{
            rotateY: 0
          }} whileHover={{
            rotateY: 0
          }}>
              {/* Project Image with Holographic Overlay */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.6
              }} />
                
                {/* Holographic Glass Overlay */}
                <motion.div className="absolute inset-0" style={{
                background: `
                      linear-gradient(
                        135deg,
                        rgba(0,245,255,0.1) 0%,
                        transparent 30%,
                        rgba(139,92,246,0.1) 70%,
                        transparent 100%
                      )
                    `
              }} animate={{
                background: ["linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)", "linear-gradient(225deg, rgba(139,92,246,0.1) 0%, transparent 30%, rgba(0,245,255,0.1) 70%, transparent 100%)", "linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)"]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} />

                {/* Gloss Effect */}
                <div className="absolute inset-0 opacity-20 shine-effect" />
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-orbitron glow-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-sora line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => <Badge key={tagIndex} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 text-xs px-2 py-1">
                      {tag}
                    </Badge>)}
                  {project.tags.length > 3 && <Badge className="bg-gray-700/50 border border-gray-600 text-gray-300 text-xs px-2 py-1">
                      +{project.tags.length - 3}
                    </Badge>}
                </div>

                {/* Hover Indicator */}
                <motion.div className="text-center mt-4" animate={{
                opacity: [0.5, 1, 0.5]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }}>
                  <span className="text-cyan-400 text-sm font-sora">
                    Click to explore details
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }} animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20]
            }} transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} />)}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Reduced Background opacity - matching main site */}
      <div className="absolute inset-0">
        {/* Minimal background blend */}
        <div className="absolute inset-0 opacity-5" style={{
        background: `radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)`
      }} />
        
        {/* Very subtle accent gradients */}
        <div className="absolute inset-0 opacity-10" style={{
        background: `
              radial-gradient(ellipse at 20% 30%, rgba(0,245,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(139,92,246,0.05) 0%, transparent 50%)
            `
      }} />

        {/* Starfield matching main site */}
        {[...Array(100)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-white" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: Math.random() > 0.8 ? '2px' : '1px',
        height: Math.random() > 0.8 ? '2px' : '1px'
      }} animate={{
        opacity: [0.1, 0.8, 0.1]
      }} transition={{
        duration: 3 + Math.random() * 4,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeInOut"
      }} />)}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title and description */}
        <div className="container mx-auto text-center mb-16">
          <motion.h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron glow-text" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            Mission Control: Projects
          </motion.h2>
          <motion.p className="text-gray-300 text-lg font-sora" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            Navigate through our space-age portfolio of innovative digital solutions
          </motion.p>
        </div>

        {/* Project Type Switch */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div className="flex justify-center items-center gap-6 bg-gray-900/30 backdrop-blur-md border border-cyan-500/20 rounded-full px-8 py-4 w-fit mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <span className={`font-orbitron text-lg transition-colors ${projectType === 'client' ? 'text-cyan-400 glow-text' : 'text-gray-400'}`}>
              Client Projects
            </span>
            <Switch checked={projectType === 'devlaunch'} onCheckedChange={checked => setProjectType(checked ? 'devlaunch' : 'client')} className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-cyan-600" />
            <span className={`font-orbitron text-lg transition-colors ${projectType === 'devlaunch' ? 'text-purple-400 glow-text' : 'text-gray-400'}`}>
              DevLaunch Projects
            </span>
          </motion.div>
        </div>
        
        {/* Horizontally Scrolling Space Pods with Navigation */}
        <div className="relative px-4 sm:px-8">
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div key={projectType} initial={{
              opacity: 0,
              y: 50
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -50
            }} transition={{
              duration: 0.6
            }}>
                {/* Navigation Buttons - positioned relative to section */}
                <motion.button className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg" onClick={scrollLeft} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }}>
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                <motion.button className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg" onClick={scrollRight} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.95
              }}>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                {/* Horizontal scrolling container */}
                <div className="relative h-[520px] w-full overflow-hidden">
                  <motion.div ref={scrollContainerRef} className="flex gap-8 absolute left-0" animate={controls} style={{
                  width: `${duplicatedProjects.length * 520 + duplicatedProjects.length * 32 + 400}px`
                }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {duplicatedProjects.map((project, index) => renderSpacePodCard(project, index))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-orbitron text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && <motion.div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.3
      }}>
            <motion.div className="relative max-w-4xl w-full rounded-3xl overflow-hidden" style={{
          background: `
                  linear-gradient(135deg, 
                    rgba(6,182,212,0.1) 0%, 
                    rgba(139,92,246,0.05) 50%, 
                    rgba(255,0,128,0.1) 100%
                  )
                `,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: `
                  0 20px 60px rgba(0,0,0,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.1),
                  0 0 60px rgba(6,182,212,0.2)
                `
        }} initial={{
          y: 100,
          opacity: 0,
          scale: 0.9
        }} animate={{
          y: 0,
          opacity: 1,
          scale: 1
        }} exit={{
          y: 100,
          opacity: 0,
          scale: 0.9
        }} transition={{
          duration: 0.5,
          ease: "easeOut"
        }}>
              {/* Close Button */}
              <Button variant="ghost" size="icon" className="absolute top-6 right-6 z-30 text-gray-400 hover:text-white hover:bg-white/10 rounded-full" onClick={closeModal}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>

              <div className="p-8">
                {/* Project Image */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{
                background: 'linear-gradient(45deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)'
              }} />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-white font-orbitron glow-text">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-gray-300 text-lg font-sora leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-orbitron">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag, index) => <Badge key={index} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 text-sm">
                          {tag}
                        </Badge>)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-start items-center gap-6 pt-4">
                    {selectedProject.liveLink && <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105" asChild>
                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>}
                    {selectedProject.githubLink && <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500 px-6 py-3 rounded-xl transition-all duration-300" asChild>
                        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="w-5 h-5" />
                          GitHub
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </section>
  );
};
export default ProjectsSection;
