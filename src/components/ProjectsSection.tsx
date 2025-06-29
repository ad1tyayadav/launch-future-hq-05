
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ProjectModal } from './projects/ProjectModal';
import { ProjectCarousel } from './projects/ProjectCarousel';
import { ProjectTypeSwitch } from './projects/ProjectTypeSwitch';

import { projectsData } from '@/data/projectsData';

const ProjectsSection: React.FC = () => {
  const [projectType, setProjectType] = useState<'client' | 'devlaunch'>('client');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const getFilteredProjects = () => {
    return projectsData.filter(project => project.type === projectType);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          background: `radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)`
        }} />

        <div className="absolute inset-0 opacity-10" style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(0,245,255,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139,92,246,0.05) 0%, transparent 50%)
          `
        }} />

        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.8 ? '2px' : '1px',
              height: Math.random() > 0.8 ? '2px' : '1px'
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title and description */}
        <div className="acontainer mx-auto text-center mb-16">
          <motion.h2
            className="font-aquire text-4xl md:text-6xl text-white mb-6 font-orbitron glow-text"
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            viewport={{
              once: true
            }}
          >
            Mission Control: Projects
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg font-sora"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{
              once: true
            }}
          >
            Navigate through our space-age portfolio of innovative digital solutions
          </motion.p>
        </div>

        {/* Project Type Switch */}
        <ProjectTypeSwitch
          projectType={projectType}
          onProjectTypeChange={setProjectType}
        />

        {/* Horizontally Scrolling Projects */}
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={projectType}
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -50
              }}
              transition={{
                duration: 0.6
              }}
            >
              <ProjectCarousel
                projects={getFilteredProjects()}
                onProjectClick={openModal}
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <div className="container mx-auto px-4 text-center cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group inline-block">
              {/* Subtle background glow */}
              <div className="absolute -inset-1 bg-cyan-400 rounded-full opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>

              <Button
                className="relative bg-gray-900 text-white px-8 py-5 sm:px-10 sm:py-6 rounded-full font-orbitron text-lg sm:text-xl inline-flex items-center border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300 "
              >
                <span className="mr-3">View All Projects</span>

                {/* Magical Arrow Animation */}
                <div className="relative flex items-center">
                  <span className="text-white text-2xl group-hover:opacity-0 transition-opacity duration-300">›</span>
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 absolute left-0 transition-opacity duration-300">→</span>
                </div>

              </Button>

              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full border border-white/50 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
