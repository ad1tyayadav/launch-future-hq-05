import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { createRoundedBoxGeometry } from '../utils/geometries';

// Phone Model Component with reduced size
function PhoneModel({ position, rotation, title, color, content, subtitle }: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  color: string;
  content: string[];
  subtitle: string;
}) {
  const meshRef = useRef<THREE.Group>(null);
  // Reduced phone dimensions by ~15%
  const roundedBoxGeometry = useMemo(() => createRoundedBoxGeometry(10, 20, 1.2, 0.4, 6), []);
  const screenGeometry = useMemo(() => createRoundedBoxGeometry(9.4, 18.8, 0.1, 0.3, 6), []);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.003;
      // Subtle rotation for dynamic feel
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2 + position[0]) * 0.02;
    }
  });

  // Dynamic code content based on service type
  const getAppContent = () => {
    switch (title) {
      case "AI Development":
        return [
          "// Neural Network Training",
          "model.fit(X_train, y_train,",
          "  epochs=100, batch_size=32)",
          "",
          "accuracy: 94.7%",
          "loss: 0.023",
          "",
          "def predict(input_data):",
          "  return model.predict(input_data)"
        ];
      case "3D Web Experiences":
        return [
          "// Three.js Scene Setup",
          "const scene = new THREE.Scene();",
          "const camera = new THREE.Camera();",
          "",
          "const geometry = new THREE.Box();",
          "const material = new THREE.Mesh();",
          "",
          "scene.add(mesh);",
          "renderer.render(scene, camera);"
        ];
      case "Blockchain Solutions":
        return [
          "// Smart Contract",
          "pragma solidity ^0.8.0;",
          "",
          "contract Token {",
          "  mapping(address => uint) public",
          "    balances;",
          "",
          "  function transfer(address to,",
          "    uint amount) public {"
        ];
      case "AR/VR Development":
        return [
          "// Unity VR Controller",
          "using UnityEngine.XR;",
          "",
          "public class VRController {",
          "  void Update() {",
          "    Vector3 position =",
          "      InputTracking.GetLocal",
          "        Position(XRNode.Head);",
          "  }"
        ];
      case "Cloud Architecture":
        return [
          "// Kubernetes Deployment",
          "apiVersion: apps/v1",
          "kind: Deployment",
          "metadata:",
          "  name: web-app",
          "spec:",
          "  replicas: 3",
          "  selector:",
          "    matchLabels:"
        ];
      default:
        return ["Loading..."];
    }
  };

  const appContent = getAppContent();

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
        
        {/* Screen Base - Dark but not black */}
        <mesh position={[0, 0, 0.61]} castShadow geometry={screenGeometry}>
          <meshPhysicalMaterial
            color="#0f0f23"
            metalness={0.1}
            roughness={0.05}
            emissive="#0a0a1a"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* App Background - Dark terminal style */}
        <mesh position={[0, 0, 0.62]}>
          <planeGeometry args={[9, 18.4]} />
          <meshPhysicalMaterial
            color="#0d1117"
            transparent
            opacity={0.95}
            emissive="#0d1117"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Status Bar */}
        <mesh position={[0, 8.5, 0.63]}>
          <planeGeometry args={[8.8, 0.8]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.3}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Status Bar Text */}
        <Text
          position={[-3.8, 8.5, 0.64]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
          fontWeight="bold"
        >
          {title.split(' ')[0]} IDE
        </Text>

        <Text
          position={[3.8, 8.5, 0.64]}
          fontSize={0.25}
          color="#00ff00"
          anchorX="right"
          anchorY="middle"
          fontWeight="bold"
        >
          ●
        </Text>

        {/* Code Content */}
        {appContent.map((line, index) => (
          <Text
            key={index}
            position={[-4.2, 7.5 - (index * 0.45), 0.64]}
            fontSize={0.22}
            color={line.startsWith('//') ? '#6b7280' : 
                  line.includes('=') || line.includes(':') ? '#10b981' :
                  line.includes('function') || line.includes('const') || line.includes('def') ? '#8b5cf6' :
                  line.includes('accuracy') || line.includes('loss') ? '#f59e0b' :
                  '#ffffff'}
            anchorX="left"
            anchorY="middle"
            maxWidth={8.5}
            lineHeight={1}
          >
            {line}
          </Text>
        ))}

        {/* Terminal Cursor */}
        <mesh position={[-4.2 + (appContent[appContent.length - 1]?.length * 0.13 || 0), 
                         7.5 - ((appContent.length - 1) * 0.45), 0.64]}>
          <planeGeometry args={[0.15, 0.35]} />
          <meshPhysicalMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Side Accent Light */}
        <mesh position={[-4.3, 0, 0.63]}>
          <planeGeometry args={[0.2, 16]} />
          <meshPhysicalMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Bottom Terminal Bar */}
        <mesh position={[0, -8.2, 0.63]}>
          <planeGeometry args={[8.8, 1]} />
          <meshPhysicalMaterial
            color="#21262d"
            transparent
            opacity={0.9}
            emissive="#21262d"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Terminal Prompt */}
        <Text
          position={[-4.2, -8.2, 0.64]}
          fontSize={0.25}
          color={color}
          anchorX="left"
          anchorY="middle"
          fontWeight="bold"
        >
          user@{title.toLowerCase().replace(/[^a-z]/g, '')}:~$
        </Text>
      </group>
    </Float>
  );
}

// Circular Orbit Animation with increased radius
function CircularOrbit({ radius = 28, count = 5 }: { radius?: number; count?: number }) {
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
      groupRef.current.rotation.y += 0.002;
    }
  });

  const phones = useMemo(() => {
    return services.map((service, index) => {
      const angle = (index / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 1.2) * 2;
      
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

// Main 3D Scene with adjusted camera and lighting
function Scene() {
  return (
    <>
      {/* Enhanced Lighting Setup for better visibility */}
      <ambientLight intensity={1.5} color="#ffffff" />
      <pointLight position={[40, 40, 40]} intensity={4} castShadow color="#00f5ff" />
      <pointLight position={[-40, -40, -40]} intensity={3.5} color="#8b5cf6" />
      <pointLight position={[40, -40, 40]} intensity={3} color="#10b981" />
      <pointLight position={[0, 0, 60]} intensity={3} color="#ffffff" />
      <spotLight
        position={[0, 60, 0]}
        angle={0.8}
        penumbra={1}
        intensity={4}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Environment for reflections */}
      <Environment preset="night" environmentIntensity={1.5} />
      
      {/* Phones Orbit */}
      <CircularOrbit radius={28} count={5} />
      
      {/* Invisible floor for shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -25, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <shadowMaterial transparent opacity={0.1} />
      </mesh>
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-[1000px]">
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

        {/* 3D Animation Container - Increased height to prevent cutoff */}
        <div className="relative w-full h-[1000px] mb-12">
          <Suspense fallback={<LoadingFallback />}>
            <Canvas
              camera={{ position: [0, 8, 45], fov: 60 }}
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
                enableZoom={false}
                enableRotate={true}
                autoRotate={false}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 3.5}
                rotateSpeed={0.5}
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
