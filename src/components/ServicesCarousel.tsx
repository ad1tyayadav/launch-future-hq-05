
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/servicesData';
import FloatingTechWords from './services/FloatingTechWords';
import ServiceHeader from './services/ServiceHeader';
import TimelineCard from './services/TimelineCard';
import ServicePreviewCards from './services/ServicePreviewCards';
import FloatingParticles from './services/FloatingParticles';

const ServicesCarousel = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-advance cards within current service
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % services[currentService].timeline.length);
    }, 4000);

    return () => clearInterval(cardInterval);
  }, [currentService]);

  const currentServiceData = services[currentService];

  const handleServiceSelect = (index: number) => {
    setCurrentService(index);
    setCurrentCard(0);
  };

  return (
    <section className="py-12 relative overflow-hidden bg-transparent">      
      <div className="container mx-auto px-6 relative z-10 h-screen flex flex-col">
        <FloatingTechWords 
          techWords={currentServiceData.techWords} 
          currentService={currentService} 
        />

        {/* Main Service Display */}
        <div className="flex-1 flex flex-col justify-center pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ServiceHeader service={currentServiceData} />
            </motion.div>
          </AnimatePresence>

          {/* Timeline Cards */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentService}-${currentCard}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <TimelineCard
                  phase={currentServiceData.timeline[currentCard]}
                  currentCard={currentCard}
                  totalCards={currentServiceData.timeline.length}
                  phaseIndex={currentCard}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <ServicePreviewCards
          services={services}
          currentService={currentService}
          currentCard={currentCard}
          onServiceSelect={handleServiceSelect}
        />
      </div>

      <FloatingParticles />
    </section>
  );
};

export default ServicesCarousel;
