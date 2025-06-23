
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, project, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4" 
          initial={{
            opacity: 0
          }} 
          animate={{
            opacity: 1
          }} 
          exit={{
            opacity: 0
          }} 
          transition={{
            duration: 0.3
          }}
        >
          <motion.div 
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden" 
            style={{
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
            }} 
            initial={{
              y: 100,
              opacity: 0,
              scale: 0.9
            }} 
            animate={{
              y: 0,
              opacity: 1,
              scale: 1
            }} 
            exit={{
              y: 100,
              opacity: 0,
              scale: 0.9
            }} 
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {/* Close Button */}
            <Button variant="ghost" size="icon" className="absolute top-6 right-6 z-30 text-gray-400 hover:text-white hover:bg-white/10 rounded-full" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="p-8">
              {/* Project Image */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(45deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)'
                }} />
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white font-orbitron glow-text">
                  {project.title}
                </h2>
                
                <p className="text-gray-300 text-lg font-sora leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-orbitron">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start items-center gap-6 pt-4">
                  {project.liveLink && (
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500 px-6 py-3 rounded-xl transition-all duration-300" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        GitHub
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
