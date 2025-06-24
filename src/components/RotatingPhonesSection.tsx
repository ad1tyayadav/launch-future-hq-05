
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { createRoundedBoxGeometry } from '../utils/geometries';

// Phone Model Component
function PhoneModel({ position, rotation, title, color, content, subtitle }: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  color: string;
  content: string[];
  subtitle: string;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const roundedBoxGeometry = useMemo(() => createRoundedBoxGeometry(6, 12, 0.8, 0.4, 6), []);
  const screenGeometry = useMemo(() => createRoundedBoxGeometry(5.4, 10.8, 0.1, 0.3, 6), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.003;
      // Subtle rotation for dynamic feel
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2 + position[0]) * 0.02;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Phone Frame - Premium metallic look */}
        <mesh castShadow receiveShadow geometry={roundedBoxGeometry}>
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.95}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.02}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Screen Base - Deep black */}
        <mesh position={[0, 0, 0.41]} castShadow geometry={screenGeometry}>
          <meshPhysicalMaterial
            color="#000000"
            metalness={0.1}
            roughness={0.05}
            emissive="#000000"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Glassmorphism Screen Background */}
        <mesh position={[0, 0, 0.42]}>
          <planeGeometry args={[5.2, 10.6]} />
          <meshPhysicalMaterial
            color="#0a0a0f"
            transparent
            opacity={0.85}
            transmission={0.1}
            thickness={0.1}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Glass overlay with subtle reflection */}
        <mesh position={[0, 0, 0.43]}>
          <planeGeometry args={[5.2, 10.6]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.03}
            transmission={0.95}
            thickness={0.1}
            roughness={0}
            clearcoat={1}
            clearcoatRoughness={0}
            ior={1.5}
          />
        </mesh>

        {/* Header Section - Glassmorphism */}
        <mesh position={[0, 4.2, 0.44]}>
          <planeGeometry args={[4.8, 2]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.15}
            transmission={0.3}
            thickness={0.1}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive={color}
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Title Text */}
        <Text
          position={[0, 4.5, 0.45]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {title}
        </Text>

        {/* Subtitle */}
        <Text
          position={[0, 3.8, 0.45]}
          fontSize={0.25}
          color={color}
          anchorX="center"
          anchorY="middle"
          fontWeight="600"
        >
          {subtitle}
        </Text>

        {/* Content Items with glassmorphism cards */}
        {content.map((item, index) => (
          <group key={index}>
            {/* Glassmorphism Content Card */}
            <mesh position={[0, 2.5 - (index * 1.4), 0.44]}>
              <planeGeometry args={[4.6, 1]} />
              <meshPhysicalMaterial
                color="#ffffff"
                transparent
                opacity={0.08}
                transmission={0.2}
                thickness={0.05}
                roughness={0.1}
                clearcoat={0.8}
                clearcoatRoughness={0.2}
              />
            </mesh>

            {/* Card border accent */}
            <mesh position={[0, 2.5 - (index * 1.4), 0.441]}>
              <planeGeometry args={[4.6, 1]} />
              <meshBasicMaterial
                transparent
                opacity={0.15}
                color={color}
              />
            </mesh>
            
            {/* Accent dot */}
            <mesh position={[-1.8, 2.5 - (index * 1.4), 0.45]}>
              <circleGeometry args={[0.08, 12]} />
              <meshPhysicalMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.8}
                transparent
                opacity={0.9}
              />
            </mesh>

            {/* Content Text */}
            <Text
              position={[-1.4, 2.5 - (index * 1.4), 0.45]}
              fontSize={0.18}
              color="#ffffff"
              anchorX="left"
              anchorY="middle"
              maxWidth={3.8}
              lineHeight={1.2}
              fontWeight="500"
            >
              {item}
            </Text>
          </group>
        ))}

        {/* Bottom Glassmorphism Accent */}
        <mesh position={[0, -4.5, 0.44]}>
          <planeGeometry args={[4.8, 0.6]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.2}
            transmission={0.4}
            thickness={0.1}
            emissive={color}
            emissiveIntensity={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Circular Orbit Animation with increased radius
function CircularOrbit({ radius = 8, count = 5 }: { radius?: number; count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const services = [
    { 
      title: "AI Development", 
      subtitle: "Intelligent Solutions",
      color: "#00f5ff",
      content: [
        "Custom ML model training and deployment",
        "Natural language processing systems", 
        "Computer vision and image recognition",
        "Predictive analytics and data insights"
      ]
    },
    { 
      title: "3D Web Experiences", 
      subtitle: "Immersive Digital Worlds",
      color: "#8b5cf6",
      content: [
        "Interactive WebGL applications",
        "Three.js powered visualizations",
        "Virtual showrooms and galleries",
        "Real-time 3D configurators"
      ]
    },
    { 
      title: "Blockchain Solutions", 
      subtitle: "Decentralized Innovation",
      color: "#10b981",
      content: [
        "Smart contract development",
        "DeFi protocol architecture",
        "NFT marketplace creation",
        "Cryptocurrency wallet integration"
      ]
    },
    { 
      title: "AR/VR Development", 
      subtitle: "Extended Reality",
      color: "#f59e0b",
      content: [
        "Augmented reality mobile apps",
        "Virtual reality training simulations",
        "Mixed reality business solutions",
        "Spatial computing interfaces"
      ]
    },
    { 
      title: "Cloud Architecture", 
      subtitle: "Scalable Infrastructure",
      color: "#ef4444",
      content: [
        "Microservices design patterns",
        "Serverless function deployment",
        "Container orchestration setup",
        "Auto-scaling system architecture"
      ]
    }
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const phones = useMemo(() => {
    return services.map((service, index) => {
      const angle = (index / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 1.5) * 1.5; // More subtle vertical variation
      
      return (
        <PhoneModel
          key={index}
          position={[x, y, z]}
          rotation={[0, -angle + Math.PI / 2, 0]}
          title={service.title}
          subtitle={service.subtitle}
          color={service.color}
          content={service.content}
        />
      );
    });
  }, [radius, count, services]);

  return (
    <group ref={groupRef}>
      {phones}
    </group>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[15, 15, 15]} intensity={2} castShadow color="#00f5ff" />
      <pointLight position={[-15, -15, -15]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[15, -15, 15]} intensity={1} color="#10b981" />
      <spotLight
        position={[0, 25, 0]}
        angle={0.6}
        penumbra={1}
        intensity={1.5}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Environment for reflections */}
      <Environment preset="night" environmentIntensity={0.8} />
      
      {/* Phones Orbit with increased radius */}
      <CircularOrbit radius={8} count={5} />
      
      {/* Invisible floor for shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <shadowMaterial transparent opacity={0.1} />
      </mesh>
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-[900px]">
      <div className="text-white text-xl">Loading 3D Experience...</div>
    </div>
  );
}

export default function RotatingPhonesSection() {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      {/* Background elements for depth */}
      <div className="absolute inset-0">        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What We Do
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transforming ambitious ideas into extraordinary digital experiences through cutting-edge technology and strategic innovation
          </motion.p>
        </motion.div>

        {/* 3D Animation Container - Clean, no container styling */}
        <div className="relative w-full h-[900px] mb-12">
          <Suspense fallback={<LoadingFallback />}>
            <Canvas
              camera={{ position: [0, 5, 15], fov: 60 }}
              shadows
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              className="w-full h-full"
              gl={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <Scene />
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
                autoRotate={false}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 3.5}
                minDistance={10}
                maxDistance={25}
                rotateSpeed={0.5}
                zoomSpeed={0.8}
              />
            </Canvas>
          </Suspense>
        </div>

        {/* Service Descriptions with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {[
            { title: "AI-Powered Apps", desc: "Intelligent applications that adapt and learn", color: "from-cyan-500/20 to-blue-500/20", accent: "border-cyan-400/30" },
            { title: "3D Web Experiences", desc: "Immersive interfaces and visualizations", color: "from-purple-500/20 to-pink-500/20", accent: "border-purple-400/30" },
            { title: "Blockchain Solutions", desc: "Secure, decentralized applications", color: "from-emerald-500/20 to-teal-500/20", accent: "border-emerald-400/30" },
            { title: "AR/VR Development", desc: "Next-generation reality experiences", color: "from-amber-500/20 to-orange-500/20", accent: "border-amber-400/30" },
            { title: "Cloud Architecture", desc: "Scalable, resilient infrastructure", color: "from-red-500/20 to-rose-500/20", accent: "border-red-400/30" }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-xl border ${service.accent} hover:border-white/30 transition-all duration-300 group glass-morphism`}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
