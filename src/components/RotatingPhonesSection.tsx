
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
  const roundedBoxGeometry = useMemo(() => createRoundedBoxGeometry(3.5, 7.0, 0.2, 0.25, 4), []);
  const screenGeometry = useMemo(() => createRoundedBoxGeometry(3.2, 6.5, 0.05, 0.15, 4), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Phone Frame */}
        <mesh castShadow receiveShadow geometry={roundedBoxGeometry}>
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0, 0.11]} castShadow geometry={screenGeometry}>
          <meshPhysicalMaterial
            color="#000000"
            metalness={0.1}
            roughness={0.1}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Screen Content Background */}
        <mesh position={[0, 0, 0.12]}>
          <planeGeometry args={[3.0, 6.2]} />
          <meshPhysicalMaterial
            color="#111111"
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Header Section */}
        <mesh position={[0, 2.4, 0.13]}>
          <planeGeometry args={[2.8, 1.2]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.3}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Title Text */}
        <Text
          position={[0, 2.4, 0.14]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {title}
        </Text>

        {/* Subtitle */}
        <Text
          position={[0, 2.0, 0.14]}
          fontSize={0.15}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {subtitle}
        </Text>

        {/* Content Items */}
        {content.map((item, index) => (
          <group key={index}>
            {/* Content Item Background */}
            <mesh position={[0, 1.2 - (index * 0.8), 0.13]}>
              <planeGeometry args={[2.6, 0.6]} />
              <meshPhysicalMaterial
                color="#222222"
                transparent
                opacity={0.8}
              />
            </mesh>
            
            {/* Bullet Point */}
            <mesh position={[-1.1, 1.2 - (index * 0.8), 0.14]}>
              <circleGeometry args={[0.05, 8]} />
              <meshPhysicalMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
              />
            </mesh>

            {/* Content Text */}
            <Text
              position={[-0.8, 1.2 - (index * 0.8), 0.14]}
              fontSize={0.12}
              color="#ffffff"
              anchorX="left"
              anchorY="middle"
              maxWidth={2.2}
            >
              {item}
            </Text>
          </group>
        ))}

        {/* Bottom Accent */}
        <mesh position={[0, -2.8, 0.14]}>
          <planeGeometry args={[2.8, 0.3]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Circular Orbit Animation
function CircularOrbit({ radius = 1.5, count = 5 }: { radius?: number; count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const services = [
    { 
      title: "AI Apps", 
      subtitle: "Intelligent Solutions",
      color: "#00f5ff",
      content: [
        "Machine Learning Models",
        "Natural Language Processing", 
        "Computer Vision Systems",
        "Predictive Analytics"
      ]
    },
    { 
      title: "3D Web", 
      subtitle: "Immersive Experiences",
      color: "#8b5cf6",
      content: [
        "WebGL Implementations",
        "Three.js Applications",
        "Interactive 3D Models",
        "Virtual Environments"
      ]
    },
    { 
      title: "Blockchain", 
      subtitle: "Decentralized Tech",
      color: "#10b981",
      content: [
        "Smart Contracts",
        "DeFi Applications",
        "NFT Platforms",
        "Crypto Wallets"
      ]
    },
    { 
      title: "AR/VR", 
      subtitle: "Extended Reality",
      color: "#f59e0b",
      content: [
        "Augmented Reality Apps",
        "Virtual Reality Worlds",
        "Mixed Reality Solutions",
        "Spatial Computing"
      ]
    },
    { 
      title: "Cloud", 
      subtitle: "Scalable Infrastructure",
      color: "#ef4444",
      content: [
        "Microservices Architecture",
        "Serverless Functions",
        "Container Orchestration",
        "Auto-scaling Solutions"
      ]
    }
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const phones = useMemo(() => {
    return services.map((service, index) => {
      const angle = (index / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2) * 0.4;
      
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
      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} castShadow color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0066ff" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1.2}
        castShadow
        color="#ffffff"
      />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* Phones Orbit */}
      <CircularOrbit radius={1.5} count={5} />
      
      {/* Invisible floor for shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-[800px]">
      <div className="text-white text-xl">Loading 3D Scene...</div>
    </div>
  );
}

export default function RotatingPhonesSection() {
  return (
    <section className="py-24 relative overflow-hidden min-h-screen">
      {/* Subtle background elements for depth */}
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
          className="text-center mb-8"
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

        {/* 3D Animation Container - No border/background */}
        <div className="relative w-full h-[800px] mb-8">
          <Suspense fallback={<LoadingFallback />}>
            <Canvas
              camera={{ position: [0, 3, 10], fov: 75 }}
              shadows
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              className="w-full h-full"
              gl={{ antialias: true, alpha: true }}
            >
              <Scene />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
                autoRotate={false}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 3}
              />
            </Canvas>
          </Suspense>
        </div>

        {/* Service Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {[
            { title: "AI-Powered Apps", desc: "Intelligent applications that adapt and learn", color: "from-cyan-500/20 to-blue-500/20" },
            { title: "3D Web Experiences", desc: "Immersive interfaces and visualizations", color: "from-purple-500/20 to-pink-500/20" },
            { title: "Blockchain Solutions", desc: "Secure, decentralized applications", color: "from-emerald-500/20 to-teal-500/20" },
            { title: "AR/VR Development", desc: "Next-generation reality experiences", color: "from-amber-500/20 to-orange-500/20" },
            { title: "Cloud Architecture", desc: "Scalable, resilient infrastructure", color: "from-red-500/20 to-rose-500/20" }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group`}
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
