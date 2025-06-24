
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
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-6" 
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
            duration: 0.2
          }}
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" 
            initial={{
              y: 50,
              opacity: 0,
              scale: 0.95
            }} 
            animate={{
              y: 0,
              opacity: 1,
              scale: 1
            }} 
            exit={{
              y: 50,
              opacity: 0,
              scale: 0.95
            }} 
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-30 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors" 
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            {/* Project Image */}
            <div className="relative w-full h-80 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 transition-colors px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {project.liveLink && (
                  <Button 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg transition-colors" 
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Live
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button 
                    variant="outline" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2.5 rounded-lg transition-colors" 
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
