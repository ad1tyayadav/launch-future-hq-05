
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-6" 
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
          onClick={onClose}
        >
          <motion.div 
            className="relative max-w-4xl w-full glass-morphism overflow-hidden shadow-2xl" 
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: `
                0 25px 80px rgba(0,0,0,0.4),
                inset 0 1px 0 rgba(255,255,255,0.2),
                0 0 60px rgba(6,182,212,0.2),
                0 0 80px rgba(139,92,246,0.1)
              `
            }}
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
              duration: 0.4,
              ease: "easeOut"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Neon Border */}
            <motion.div 
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'transparent',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), linear-gradient(135deg, #00f5ff, #8b5cf6, #ff0080, #00f5ff)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                backgroundSize: '300% 300%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Close Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-30 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-cyber-blue/50" 
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            {/* Project Image */}
            <div className="relative w-full h-80 overflow-hidden rounded-t-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Holographic overlay */}
              <motion.div 
                className="absolute inset-0" 
                style={{
                  background: `
                    linear-gradient(
                      135deg,
                      rgba(0,245,255,0.1) 0%,
                      transparent 30%,
                      rgba(139,92,246,0.1) 70%,
                      transparent 100%
                    )
                  `
                }} 
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)", 
                    "linear-gradient(225deg, rgba(139,92,246,0.1) 0%, transparent 30%, rgba(0,245,255,0.1) 70%, transparent 100%)", 
                    "linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 30%, rgba(139,92,246,0.1) 70%, transparent 100%)"
                  ]
                }} 
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} 
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Title */}
              <h2 className="text-3xl font-bold text-white leading-tight glow-text font-orbitron">
                {project.title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed font-sora">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-cyan-300 font-orbitron">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 px-3 py-1 font-sora"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                {project.liveLink && (
                  <Button 
                    className="cyber-button bg-gradient-to-r from-cyber-blue to-cyber-purple text-white px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] font-sora" 
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 hover:border-cyber-purple/50 px-6 py-2.5 rounded-lg transition-all duration-300 backdrop-blur-sm font-sora" 
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {[...Array(15)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" 
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`
                  }} 
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20]
                  }} 
                  transition={{
                    duration: 4 + Math.random() * 3,
                    delay: Math.random() * 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
