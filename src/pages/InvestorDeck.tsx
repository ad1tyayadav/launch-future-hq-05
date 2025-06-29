import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, Globe, Zap, Target, Award, DollarSign, Rocket, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ThreeBackground from '@/components/ThreeBackground';

const InvestorDeck = () => {
  const stats = [
    { icon: Users, label: "Active Users", value: "10K+", color: "from-blue-400 to-purple-500" },
    { icon: DollarSign, label: "Monthly Revenue", value: "$50K+", color: "from-green-400 to-teal-500" },
    { icon: Globe, label: "Countries", value: "25+", color: "from-cyan-400 to-blue-500" },
    { icon: Rocket, label: "MVPs Launched", value: "500+", color: "from-orange-400 to-red-500" }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 5000, users: 1000 },
    { month: 'Feb', revenue: 8000, users: 2000 },
    { month: 'Mar', revenue: 12000, users: 3500 },
    { month: 'Apr', revenue: 18000, users: 5000 },
    { month: 'May', revenue: 28000, users: 7000 },
    { month: 'Jun', revenue: 35000, users: 8500 },
    { month: 'Jul', revenue: 42000, users: 9200 },
    { month: 'Aug', revenue: 50000, users: 10000 }
  ];

  const userGrowthData = [
    { month: 'Jan', newUsers: 500, totalUsers: 1000 },
    { month: 'Feb', newUsers: 1000, totalUsers: 2000 },
    { month: 'Mar', newUsers: 1500, totalUsers: 3500 },
    { month: 'Apr', newUsers: 1500, totalUsers: 5000 },
    { month: 'May', newUsers: 2000, totalUsers: 7000 },
    { month: 'Jun', newUsers: 1500, totalUsers: 8500 },
    { month: 'Jul', newUsers: 700, totalUsers: 9200 },
    { month: 'Aug', newUsers: 800, totalUsers: 10000 }
  ];

  const marketShareData = [
    { name: 'DevLaunch', value: 15, color: '#00f5ff' },
    { name: 'Competitor A', value: 25, color: '#8b5cf6' },
    { name: 'Competitor B', value: 20, color: '#ff0080' },
    { name: 'Others', value: 40, color: '#64748b' }
  ];

  const cohortData = [
    { cohort: 'Jan 2024', month1: 100, month2: 85, month3: 78, month4: 72, month5: 68, month6: 65 },
    { cohort: 'Feb 2024', month1: 100, month2: 88, month3: 82, month4: 77, month5: 74, month6: 71 },
    { cohort: 'Mar 2024', month1: 100, month2: 92, month3: 87, month4: 83, month5: 80, month6: 77 },
    { cohort: 'Apr 2024', month1: 100, month2: 89, month3: 84, month4: 80, month5: 77, month6: 74 },
    { cohort: 'May 2024', month1: 100, month2: 91, month3: 86, month4: 82, month5: 79, month6: 76 },
    { cohort: 'Jun 2024', month1: 100, month2: 94, month3: 89, month4: 85, month5: 82, month6: 79 }
  ];

  const projectionData = [
    { quarter: 'Q3 2024', users: 12000, revenue: 60000, projection: false },
    { quarter: 'Q4 2024', users: 15000, revenue: 75000, projection: false },
    { quarter: 'Q1 2025', users: 25000, revenue: 125000, projection: true },
    { quarter: 'Q2 2025', users: 40000, revenue: 200000, projection: true },
    { quarter: 'Q3 2025', users: 65000, revenue: 325000, projection: true },
    { quarter: 'Q4 2025', users: 100000, revenue: 500000, projection: true }
  ];

  // Split data into actual and projected for different styling
  const actualData = projectionData.filter(item => !item.projection);
  const projectedData = projectionData.filter(item => item.projection);
  // Add the last actual data point to projected data for continuity
  const bridgeData = [actualData[actualData.length - 1], ...projectedData];

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
      {/* Background effects */}
      <ThreeBackground />

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
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-white mb-6 font-orbitron glow-text">
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

        {/* 4. Market Opportunity with Enhanced Visuals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Market Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-cyber-blue font-orbitron">$880B</h3>
                  <p className="text-white/80 font-sora">Total Market (TAM)</p>
                  <p className="text-sm text-white/60 font-sora">Global digital transformation</p>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-bold text-cyber-purple font-orbitron">$146B</h3>
                  <p className="text-white/80 font-sora">Serviceable Market (SAM)</p>
                  <p className="text-sm text-white/60 font-sora">Custom software development</p>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-cyber-pink font-orbitron">$12B</h3>
                  <p className="text-white/80 font-sora">Obtainable Market (SOM)</p>
                  <p className="text-sm text-white/60 font-sora">No-code platforms</p>
                </motion.div>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Market Share Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
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

        {/* 6. Enhanced Traction with Interactive Charts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Traction & Growth</h2>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-morphism p-6 text-center rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <motion.h3
                    className="text-2xl font-bold text-white font-orbitron mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-white/70 font-sora text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Revenue & User Growth Charts */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Revenue Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00f5ff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid #00f5ff',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#00f5ff" fillOpacity={1} fill="url(#revenueGradient)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">User Acquisition</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid #8b5cf6',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="newUsers" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cohort Retention Chart */}
          <div className="glass-morphism p-6 rounded-2xl max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">User Retention Cohorts</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={cohortData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="cohort" stroke="#ffffff80" />
                <YAxis stroke="#ffffff80" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid #ff0080',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="month1" stroke="#00f5ff" strokeWidth={2} />
                <Line type="monotone" dataKey="month3" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="month6" stroke="#ff0080" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
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
                className="glass-morphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
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

        {/* 8. Vision / Roadmap with Projections */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-orbitron">Roadmap & Projections</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
            {/* Roadmap */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 font-orbitron">Milestones</h3>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center mb-8 glass-morphism p-6 rounded-xl"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 ${milestone.completed ? 'bg-green-500' : 'bg-gray-500'
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

            {/* Growth Projections */}
            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Growth Projections</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="quarter" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid #00f5ff',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  {/* Actual data - solid lines */}
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#00f5ff"
                    strokeWidth={3}
                    data={actualData}
                    connectNulls={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    data={actualData}
                    connectNulls={false}
                  />
                  {/* Projected data - dashed lines */}
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#00f5ff"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    data={bridgeData}
                    connectNulls={true}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    data={bridgeData}
                    connectNulls={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* 9. Enhanced Ask / CTA Slide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center min-h-screen flex flex-col justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-orbitron glow-text">We're Raising $500K</h2>
            <p className="text-2xl text-cyber-blue mb-12 font-sora max-w-4xl mx-auto">
              Let's build the future of startup creation together
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/lets-talk">
              <motion.button
                className="cyber-button text-lg px-12 py-6"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Meeting</span>
              </motion.button>
            </Link>
            <motion.button
              className="px-12 py-6 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-white transition-all duration-300 font-sora text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Deck (PDF)
            </motion.button>
          </div>

          <motion.div
            className="glass-morphism p-8 rounded-2xl max-w-6xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Investment Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-cyber-blue mb-4 font-orbitron">Use of Funds</h4>
                <ul className="space-y-3 text-white/80 font-sora">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyber-blue rounded-full mr-3"></div>
                    40% Product development & AI features
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyber-purple rounded-full mr-3"></div>
                    30% Marketing & user acquisition
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-cyber-pink rounded-full mr-3"></div>
                    20% Team expansion
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    10% Operations & infrastructure
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cyber-blue mb-4 font-orbitron">Projected Returns</h4>
                <ul className="space-y-3 text-white/80 font-sora">
                  <li className="flex items-center">
                    <Rocket size={16} className="text-cyber-blue mr-3" />
                    100K users by end of 2025
                  </li>
                  <li className="flex items-center">
                    <DollarSign size={16} className="text-green-400 mr-3" />
                    $500K ARR by Q4 2025
                  </li>
                  <li className="flex items-center">
                    <TrendingUp size={16} className="text-cyber-purple mr-3" />
                    Break-even by Q2 2026
                  </li>
                  <li className="flex items-center">
                    <Target size={16} className="text-cyber-pink mr-3" />
                    Exit opportunity in 3-5 years
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default InvestorDeck;
