
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, Globe, Zap, Target, Award, DollarSign, Rocket, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorDeck = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "10K+", color: "from-blue-400 to-purple-500" },
    { icon: DollarSign, label: "Monthly Revenue", value: "$50K+", color: "from-green-400 to-teal-500" },
    { icon: Globe, label: "Countries", value: "25+", color: "from-cyan-400 to-blue-500" },
    { icon: Rocket, label: "MVPs Launched", value: "500+", color: "from-orange-400 to-red-500" }
  ];

  const problemPoints = [
    "80% of startups fail due to poor execution",
    "Technical barriers prevent great ideas from launching",
    "Months of development before market validation",
    "High costs for MVP development"
  ];

  const solutionSteps = [
    { step: "1", title: "Idea", description: "Start with your vision", icon: "💡" },
    { step: "2", title: "Builder", description: "Use our no-code tools", icon: "🛠️" },
    { step: "3", title: "Launch", description: "Deploy in minutes", icon: "🚀" },
    { step: "4", title: "Feedback", description: "Get user insights", icon: "📊" },
    { step: "5", title: "Iterate", description: "Improve rapidly", icon: "🔄" }
  ];

  const teamMembers = [
    { name: "Alex Chen", role: "CEO & Founder", bio: "Former Google PM, 10+ years in tech" },
    { name: "Sarah Kim", role: "CTO", bio: "Ex-Facebook engineer, AI/ML expert" },
    { name: "Mike Rodriguez", role: "Head of Design", bio: "Design lead at top startups" }
  ];

  const milestones = [
    { quarter: "Q1 2024", achievement: "Beta launch with 1K users", completed: true },
    { quarter: "Q2 2024", achievement: "10K users, $20K MRR", completed: true },
    { quarter: "Q3 2024", achievement: "Partnership with accelerators", completed: true },
    { quarter: "Q4 2024", achievement: "AI-powered features", completed: false },
    { quarter: "Q1 2025", achievement: "Enterprise tier launch", completed: false }
  ];

  return (
    <div className="min-h-screen bg-dark-space relative overflow-hidden">
      {/* SEO Meta Tags would be handled by Helmet or similar */}
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyber-blue/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyber-purple/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyber-pink/10 to-transparent rounded-full filter blur-3xl" />
        
        {/* Starfield */}
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-lg text-white hover:text-cyber-blue transition-colors">
          <ArrowLeft size={20} />
          <span className="font-sora">Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 space-y-32">
        
        {/* 1. Welcome Slide / Cover Page */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center min-h-screen flex flex-col justify-center"
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
            <img
              src="/lovable-uploads/540b6631-0fad-4216-aa1e-c068807441ed.png"
              alt="DevLaunch Logo"
              className="object-contain w-20 h-20"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-orbitron glow-text">
            DevLaunch
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-cyber-blue mb-8 font-orbitron">
            The No-Code Tool That Launches Startups
          </h2>
          <p className="text-xl text-white/80 font-sora max-w-3xl mx-auto mb-12">
            Revolutionizing startup creation through AI-powered no-code solutions
          </p>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60"
          >
            <span className="font-sora">Scroll down to view our vision</span>
            <ArrowRight className="mx-auto mt-4 rotate-90" size={24} />
          </motion.div>
        </motion.section>

        {/* 2. Problem Slide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {problemPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-morphism p-6 rounded-xl"
              >
                <p className="text-lg text-white/90 font-sora">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. Solution Slide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">Our Solution</h2>
          <p className="text-2xl text-cyber-blue mb-16 font-sora max-w-4xl mx-auto">
            DevLaunch helps anyone build MVPs fast — no tech skills required
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {solutionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="glass-morphism p-6 rounded-xl text-center w-48"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">{step.title}</h3>
                <p className="text-white/70 font-sora text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. Market Opportunity */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Market Opportunity</h2>
          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <h3 className="text-3xl font-bold text-cyber-blue font-orbitron">$880B</h3>
                <p className="text-white/80 font-sora">Total Market (TAM)</p>
                <p className="text-sm text-white/60 font-sora">Global digital transformation</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyber-purple font-orbitron">$146B</h3>
                <p className="text-white/80 font-sora">Serviceable Market (SAM)</p>
                <p className="text-sm text-white/60 font-sora">Custom software development</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyber-pink font-orbitron">$12B</h3>
                <p className="text-white/80 font-sora">Obtainable Market (SOM)</p>
                <p className="text-sm text-white/60 font-sora">No-code platforms</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Business Model */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Business Model</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-morphism p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Starter</h3>
              <p className="text-4xl font-bold text-cyber-blue mb-4">Free</p>
              <ul className="text-white/80 font-sora space-y-2">
                <li>• 1 project</li>
                <li>• Basic templates</li>
                <li>• Community support</li>
              </ul>
            </div>
            <div className="glass-morphism p-8 rounded-xl border-2 border-cyber-blue">
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Pro</h3>
              <p className="text-4xl font-bold text-cyber-blue mb-4">$29/mo</p>
              <ul className="text-white/80 font-sora space-y-2">
                <li>• Unlimited projects</li>
                <li>• Advanced features</li>
                <li>• Priority support</li>
              </ul>
            </div>
            <div className="glass-morphism p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">Enterprise</h3>
              <p className="text-4xl font-bold text-cyber-blue mb-4">Custom</p>
              <ul className="text-white/80 font-sora space-y-2">
                <li>• White-label solution</li>
                <li>• Custom integrations</li>
                <li>• Dedicated support</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 6. Traction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Traction</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-morphism p-6 text-center rounded-xl"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-orbitron mb-2">{stat.value}</h3>
                  <p className="text-white/70 font-sora text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* 7. Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-morphism p-8 rounded-xl text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-orbitron">{member.name}</h3>
                <p className="text-cyber-blue font-sora mb-2">{member.role}</p>
                <p className="text-white/70 font-sora text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 8. Vision / Roadmap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center mb-8 glass-morphism p-6 rounded-xl"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
                  milestone.completed ? 'bg-green-500' : 'bg-gray-500'
                }`}>
                  {milestone.completed ? <CheckCircle size={24} className="text-white" /> : <Calendar size={24} className="text-white" />}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white font-orbitron">{milestone.quarter}</h3>
                  <p className="text-white/80 font-sora">{milestone.achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 9. Ask / CTA Slide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron">We're Raising $500K</h2>
          <p className="text-2xl text-cyber-blue mb-12 font-sora max-w-4xl mx-auto">
            Let's build the future of startup creation together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/lets-talk">
              <button className="cyber-button text-lg px-12 py-6">
                <span>Schedule Meeting</span>
              </button>
            </Link>
            <button className="px-12 py-6 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 font-sora text-lg">
              Download Deck (PDF)
            </button>
          </div>

          <div className="glass-morphism p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Investment Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-cyber-blue mb-4 font-orbitron">Use of Funds</h4>
                <ul className="space-y-2 text-white/80 font-sora">
                  <li>• 40% Product development & AI features</li>
                  <li>• 30% Marketing & user acquisition</li>
                  <li>• 20% Team expansion</li>
                  <li>• 10% Operations & infrastructure</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cyber-blue mb-4 font-orbitron">Projected Returns</h4>
                <ul className="space-y-2 text-white/80 font-sora">
                  <li>• 100K users by end of 2025</li>
                  <li>• $500K ARR by Q4 2025</li>
                  <li>• Break-even by Q2 2026</li>
                  <li>• Exit opportunity in 3-5 years</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default InvestorDeck;
