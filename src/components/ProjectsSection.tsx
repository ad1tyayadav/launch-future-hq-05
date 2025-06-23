import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, Rocket, Terminal, Code, Zap, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Job Search Platform",
    description: "Revolutionizing job searching with AI to match candidates with ideal opportunities.",
    image: "/project1.png",
    tags: ["AI", "React", "Node.js", "Machine Learning"],
    featured: true,
    liveLink: "https://example.com/jobsearch",
    githubLink: "https://github.com/example/jobsearch",
  },
  {
    id: 2,
    title: "Decentralized Finance (DeFi) App",
    description: "A secure and transparent DeFi application built on blockchain technology.",
    image: "/project2.png",
    tags: ["Blockchain", "DeFi", "Solidity", "Web3"],
    featured: true,
    liveLink: "https://example.com/defi",
    githubLink: "https://github.com/example/defi",
  },
  {
    id: 3,
    title: "Sustainable Energy Management System",
    description: "Optimizing energy consumption using IoT and data analytics for a sustainable future.",
    image: "/project3.png",
    tags: ["IoT", "Data Analytics", "Python", "Sustainability"],
    featured: false,
    liveLink: "https://example.com/energy",
    githubLink: "https://github.com/example/energy",
  },
  {
    id: 4,
    title: "AI-Driven Healthcare Diagnostics",
    description: "Improving healthcare outcomes with AI-powered diagnostic tools.",
    image: "/project4.png",
    tags: ["AI", "Healthcare", "Machine Learning", "Python"],
    featured: false,
    liveLink: "https://example.com/healthcare",
    githubLink: "https://github.com/example/healthcare",
  },
  {
    id: 5,
    title: "Smart City Traffic Management",
    description: "Reducing traffic congestion and improving urban mobility with intelligent systems.",
    image: "/project5.png",
    tags: ["Smart City", "IoT", "Data Analytics", "C++"],
    featured: false,
    liveLink: "https://example.com/traffic",
    githubLink: "https://github.com/example/traffic",
  },
  {
    id: 6,
    title: "Personalized Education Platform",
    description: "Enhancing learning experiences with personalized education paths.",
    image: "/project6.png",
    tags: ["Education", "AI", "React", "Node.js"],
    featured: false,
    liveLink: "https://example.com/education",
    githubLink: "https://github.com/example/education",
  },
];

const ProjectsSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'featured' | 'all'>('featured');
  const featuredProjects = projectsData.filter(project => project.featured);
  const allProjects = projectsData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderProjectCard = (project: Project, index: number) => (
    <Card
      key={index}
      className="bg-dark-space border-none shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => openModal(project)}
    >
      <CardContent className="p-6">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} className="mr-1 bg-electric-blue text-dark-space border-none">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
        <p className="text-gray-300">{project.description}</p>
      </CardContent>
    </Card>
  );

  // Create a proper autoplay plugin
  const createAutoplayPlugin = () => {
    return {
      name: 'autoplay',
      options: { delay: 3000 },
      init: (embla, optionsHandler) => {
        let autoplayTimer = null;
        
        const play = () => {
          if (!embla) return;
          
          autoplayTimer = setTimeout(() => {
            if (embla.canScrollNext()) {
              embla.scrollNext();
            } else {
              embla.scrollTo(0);
            }
            play(); // Continue the loop
          }, 3000);
        };
        
        const stop = () => {
          if (autoplayTimer) {
            clearTimeout(autoplayTimer);
            autoplayTimer = null;
          }
        };
        
        const reset = () => {
          stop();
          play();
        };
        
        // Start autoplay
        play();
        
        // Stop on user interaction
        embla.on('pointerDown', stop);
        embla.on('pointerUp', reset);
        embla.on('reInit', reset);
        
        return { stop, reset, play };
      },
      destroy: () => {
        // Cleanup handled in init
      }
    };
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-700 opacity-50 z-0"></div>
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-electric-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      {/* Title and description */}
      <div className="container mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Projects
        </h2>
        <p className="text-gray-300 text-lg">
          Explore our innovative projects that drive technological advancement and create positive impact.
        </p>
      </div>
      
      {/* Featured Projects Carousel */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
            <Button 
              variant="outline" 
              className="bg-transparent border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-space"
              onClick={() => setActiveView(activeView === 'featured' ? 'all' : 'featured')}
            >
              {activeView === 'featured' ? 'View All' : 'View Featured'}
            </Button>
          </div>
          
          <AnimatePresence mode="wait">
            {activeView === 'featured' && (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[createAutoplayPlugin()]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {featuredProjects.map((project, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        {renderProjectCard(project, index)}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </motion.div>
            )}
            
            {activeView === 'all' && (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[createAutoplayPlugin()]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {allProjects.map((project, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        {renderProjectCard(project, index)}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </motion.div>
            )}
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
