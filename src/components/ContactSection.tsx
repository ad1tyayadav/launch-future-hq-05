
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock, Video, User } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ContactSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !bookingData.name || !bookingData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a date and time.",
        variant: "destructive",
      });
      return;
    }

    // Generate Google Meet link (in a real app, this would be done on the backend)
    const meetingId = Math.random().toString(36).substring(2, 15);
    const googleMeetLink = `https://meet.google.com/${meetingId}`;
    
    console.log('Booking submitted:', {
      ...bookingData,
      date: selectedDate,
      time: selectedTime,
      meetLink: googleMeetLink
    });

    toast({
      title: "Meeting Scheduled!",
      description: `Your Google Meet is scheduled for ${format(selectedDate, 'PPP')} at ${selectedTime}. Check your email for the meeting link.`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setBookingData({ name: '', email: '', projectType: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white glow-text mb-6">
            Schedule Your Project Discussion
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto mb-8">
            Ready to transform your vision into a cutting-edge digital reality? 
            Book a personalized consultation to discuss your project and explore the possibilities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto glass-morphism p-8 rounded-2xl">
          <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
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
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-lg border border-white/20 bg-white/5 p-3"
                />
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <Label className="text-white font-sora text-lg block">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Available Times
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`h-12 ${
                          selectedTime === time 
                            ? 'bg-cyber-blue text-white' 
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label className="text-white font-sora">Name *</Label>
                  <Input
                    placeholder="Your full name"
                    value={bookingData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white font-sora">Email *</Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyber-blue"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white font-sora">Project Type</Label>
                  <Select value={bookingData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-cyber-blue">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-space border-white/20">
                      <SelectItem value="web-app" className="text-white">Web Application</SelectItem>
                      <SelectItem value="mobile-app" className="text-white">Mobile App</SelectItem>
                      <SelectItem value="3d-experience" className="text-white">3D Experience</SelectItem>
                      <SelectItem value="ai-solution" className="text-white">AI Solution</SelectItem>
                      <SelectItem value="blockchain" className="text-white">Blockchain</SelectItem>
                      <SelectItem value="other" className="text-white">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white font-sora">Message</Label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={bookingData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="flex w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 resize-none"
                  />
                </div>
              </div>

              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-morphism p-4 rounded-lg border border-cyber-blue/30"
                >
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Meeting Summary
                  </h4>
                  <p className="text-white/80 text-sm">
                    <strong>Date:</strong> {format(selectedDate, 'PPP')}<br />
                    <strong>Time:</strong> {selectedTime}<br />
                    <strong>Duration:</strong> 30 minutes<br />
                    <strong>Platform:</strong> Google Meet (link will be sent via email)
                  </p>
                </motion.div>
              )}

              <Button
                type="submit"
                className="w-full cyber-button h-12 text-lg font-semibold"
                disabled={!selectedDate || !selectedTime || !bookingData.name || !bookingData.email}
              >
                <Video className="w-5 h-5 mr-2" />
                Schedule Meeting
              </Button>

              {/* Contact Details */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Prefer to reach out directly?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-cyber-blue">📧</span>
                    <span className="text-white/80">hello@devlaunch.co.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-cyber-purple">📱</span>
                    <span className="text-white/80">+91 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-cyber-pink">📍</span>
                    <span className="text-white/80">Bangalore, India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </form>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/5 to-transparent rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;
