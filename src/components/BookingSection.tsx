
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Calendar as CalendarIcon, Clock, Video, User } from 'lucide-react';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a date/time.",
        variant: "destructive",
      });
      return;
    }

    // Generate Google Meet link (in real implementation, this would be done server-side)
    const meetLink = `https://meet.google.com/new`;
    
    toast({
      title: "Call Scheduled!",
      description: `Your call is scheduled for ${selectedDate.toDateString()} at ${selectedTime}. Google Meet link will be sent to your email.`,
    });

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    setSelectedTime('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white glow-text mb-6">
            Book a Strategy Call
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto">
            Ready to discuss your project? Schedule a free 30-minute strategy call with our team.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <CalendarIcon className="w-6 h-6 text-cyber-blue mr-3" />
                <h3 className="text-2xl font-orbitron font-bold text-white">
                  Select Date & Time
                </h3>
              </div>

              {/* Calendar */}
              <div className="mb-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border border-white/20 bg-white/5"
                />
              </div>

              {/* Time Slots */}
              <div>
                <Label className="text-white font-sora mb-3 block">Available Times</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-cyber-blue bg-cyber-blue/20 text-cyber-blue'
                          : 'border-white/20 bg-white/5 text-white hover:border-cyber-blue/50'
                      }`}
                    >
                      <Clock className="w-4 h-4 inline mr-2" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-cyber-blue mr-3" />
                <h3 className="text-2xl font-orbitron font-bold text-white">
                  Your Details
                </h3>
              </div>

              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white font-sora">Name *</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-white font-sora">Email *</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white font-sora">Company</Label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                  />
                </div>

                <div>
                  <Label className="text-white font-sora">Project Details</Label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/20 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cyber-button h-12 text-lg font-semibold"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </form>

              {/* Call Info */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-semibold mb-2">What to expect:</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• 30-minute strategy discussion</li>
                  <li>• Project scope and timeline review</li>
                  <li>• Technology recommendations</li>
                  <li>• Custom proposal and next steps</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
