
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { CalendarIcon } from 'lucide-react';

interface BookingCalendarProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

const BookingCalendar = ({ selectedDate, onSelectDate }: BookingCalendarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div>
        <Label className="text-white font-sora text-lg mb-4 block">
          <CalendarIcon className="w-5 h-5 inline mr-2" />
          Select Date
        </Label>
        <div className="enhanced-calendar-container relative group flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            disabled={(date) => date < new Date()}
            className="enhanced-calendar rounded-lg border-2 border-cyber-blue/30 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyber-blue/60 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] group-hover:scale-[1.02] w-fit mx-auto"
          />
          {/* Neon glow overlay */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyber-blue/10 via-cyber-purple/10 to-cyber-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCalendar;
