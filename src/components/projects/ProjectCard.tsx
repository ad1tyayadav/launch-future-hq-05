
import React from 'react';
import { motion } from 'framer-motion';
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

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[420px] relative group cursor-pointer p-8"
      style={{ perspective: '1000px' }}
      animate={{
        y: [0, -15, 0]
      }}
      transition={{
        duration: 4 + index % 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.3
      }}
      onClick={onClick}
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
        className="relative w-full"
      >
        {/* Space Pod Frame */}
        <div className="relative w-full h-[400px] mx-auto">
          {/* Holographic Card Container */}
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.05) 50%, rgba(255,0,128,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: `
                0 8px 32px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255,255,255,0.1),
                0 0 40px rgba(6,182,212,0.1)
              `,
              transformStyle: 'preserve-3d'
            }}
            whileHover={{
              rotateY: 8,
              rotateX: 4,
              scale: 1.03,
              z: 50,
              boxShadow: `
                0 25px 80px rgba(0,0,0,0.4),
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

            {/* Card Content */}
            <div className="relative w-full h-full p-4 flex flex-col">
              {/* Project Image with Holographic Overlay */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                  whileHover={{
                    scale: 1.1
                  }} 
                  transition={{
                    duration: 0.6
                  }} 
                />
                
                {/* Holographic Glass Overlay */}
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

                {/* Gloss Effect */}
                <div className="absolute inset-0 opacity-20 shine-effect" />
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-orbitron glow-text line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-sora line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge className="bg-gray-700/50 border border-gray-600 text-gray-300 text-xs px-2 py-1">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Hover Indicator */}
                <motion.div 
                  className="text-center mt-2" 
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }} 
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <span className="text-cyan-400 text-xs font-sora">
                    Click to explore details
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full" 
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`
                  }} 
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: [0, Math.random() * 30 - 15],
                    y: [0, Math.random() * 30 - 15]
                  }} 
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
