
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

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

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  onProjectClick,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const animationRef = useRef<{ currentX: number; isPaused: boolean }>({
    currentX: 200,
    isPaused: false
  });
  const [isManualScrolling, setIsManualScrolling] = React.useState(false);

  // Reduced duplications for better performance
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    const startAnimation = () => {
      if (animationRef.current.isPaused || isManualScrolling || duplicatedProjects.length === 0) return;
      
      const cardWidth = 380;
      const gap = 32;
      const totalCardWidth = cardWidth + gap;
      const singleSetWidth = projects.length * totalCardWidth;

      const startX = animationRef.current.currentX;
      const endX = startX - singleSetWidth;

      const distance = Math.abs(startX - endX);
      // Slower animation for smoother performance
      const duration = distance / singleSetWidth * 40;

      controls.start({
        x: endX,
        transition: {
          duration,
          ease: "linear"
        }
      }).then(() => {
        if (!animationRef.current.isPaused && !isManualScrolling) {
          animationRef.current.currentX = startX;
          controls.set({ x: startX });
          setTimeout(() => {
            if (!animationRef.current.isPaused && !isManualScrolling) {
              startAnimation();
            }
          }, 50); // Small delay to prevent frame drops
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
  }, [isHovered, isManualScrolling, controls, duplicatedProjects.length, projects.length]);

  const handleMouseEnter = () => {
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
    onMouseEnter();
  };

  const scrollLeft = () => {
    setIsManualScrolling(true);
    const newX = Math.min(animationRef.current.currentX + 400, 200);
    animationRef.current.currentX = newX;
    controls.start({
      x: newX,
      transition: { duration: 0.4, ease: "easeOut" }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 800);
    });
  };

  const scrollRight = () => {
    setIsManualScrolling(true);
    const cardWidth = 380;
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const singleSetWidth = projects.length * totalCardWidth;
    const minX = -(singleSetWidth);
    const newX = Math.max(animationRef.current.currentX - 400, minX);
    animationRef.current.currentX = newX;
    controls.start({
      x: newX,
      transition: { duration: 0.4, ease: "easeOut" }
    }).then(() => {
      setTimeout(() => setIsManualScrolling(false), 800);
    });
  };

  return (
    <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Navigation Buttons */}
      <motion.button 
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg" 
        onClick={scrollLeft} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </motion.button>

      <motion.button 
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-white hover:bg-gray-800/90 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg" 
        onClick={scrollRight} 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </motion.button>

      {/* Horizontal scrolling container */}
      <div className="relative h-[480px] w-full overflow-hidden">
        <motion.div 
          ref={scrollContainerRef} 
          className="flex gap-8 absolute left-0" 
          animate={controls} 
          style={{
            width: `${duplicatedProjects.length * 380 + duplicatedProjects.length * 32 + 400}px`
          }} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={onMouseLeave}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${project.type}-${index}`}
              project={project}
              index={index}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
