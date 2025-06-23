
import React from 'react';
import { motion } from 'framer-motion';
import { Switch } from "@/components/ui/switch";

interface ProjectTypeSwitchProps {
  projectType: 'client' | 'devlaunch';
  onProjectTypeChange: (type: 'client' | 'devlaunch') => void;
}

export const ProjectTypeSwitch: React.FC<ProjectTypeSwitchProps> = ({
  projectType,
  onProjectTypeChange
}) => {
  return (
    <div className="container mx-auto px-4 mb-12">
      <motion.div 
        className="flex justify-center items-center gap-6 bg-gray-900/30 backdrop-blur-md border border-cyan-500/20 rounded-full px-8 py-4 w-fit mx-auto" 
        initial={{
          opacity: 0,
          y: 20
        }} 
        whileInView={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          duration: 0.6
        }}
      >
        <span className={`font-orbitron text-lg transition-colors ${projectType === 'client' ? 'text-cyan-400 glow-text' : 'text-gray-400'}`}>
          Client Projects
        </span>
        <Switch 
          checked={projectType === 'devlaunch'} 
          onCheckedChange={checked => onProjectTypeChange(checked ? 'devlaunch' : 'client')} 
          className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-cyan-600" 
        />
        <span className={`font-orbitron text-lg transition-colors ${projectType === 'devlaunch' ? 'text-purple-400 glow-text' : 'text-gray-400'}`}>
          DevLaunch Projects
        </span>
      </motion.div>
    </div>
  );
};
