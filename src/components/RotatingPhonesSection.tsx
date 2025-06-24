import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { createRoundedBoxGeometry } from '../utils/geometries';

// Phone Model Component with further reduced size
function PhoneModel({
  position,
  rotation,
  title,
  color,
  content,
  subtitle
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  color: string;
  content: string[];
  subtitle: string;
}) {
  const meshRef = useRef<THREE.Group>(null);
  // Further reduced phone dimensions for better visibility
  const roundedBoxGeometry = useMemo(() => createRoundedBoxGeometry(8, 16, 1, 0.3, 6), []);
  const screenGeometry = useMemo(() => createRoundedBoxGeometry(7.5, 15, 0.1, 0.25, 6), []);
  
  useFrame(state => {
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
        return ["// Neural Network Training", "model.fit(X_train, y_train,", "  epochs=100, batch_size=32)", "", "accuracy: 94.7%", "loss: 0.023", "", "def predict(input_data):", "  return model.predict(input_data)"];
      case "3D Web Experiences":
        return ["// Three.js Scene Setup", "const scene = new THREE.Scene();", "const camera = new THREE.Camera();", "", "const geometry = new THREE.Box();", "const material = new THREE.Mesh();", "", "scene.add(mesh);", "renderer.render(scene, camera);"];
      case "Blockchain Solutions":
        return ["// Smart Contract", "pragma solidity ^0.8.0;", "", "contract Token {", "  mapping(address => uint) public", "    balances;", "", "  function transfer(address to,", "    uint amount) public {"];
      case "AR/VR Development":
        return ["// Unity VR Controller", "using UnityEngine.XR;", "", "public class VRController {", "  void Update() {", "    Vector3 position =", "      InputTracking.GetLocal", "        Position(XRNode.Head);", "  }"];
      case "Cloud Architecture":
        return ["// Kubernetes Deployment", "apiVersion: apps/v1", "kind: Deployment", "metadata:", "  name: web-app", "spec:", "  replicas: 3", "  selector:", "    matchLabels:"];
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
        <mesh position={[0, 0, 0.51]} castShadow geometry={screenGeometry}>
          <meshPhysicalMaterial 
            color="#000000" 
            metalness={0.1} 
            roughness={0.05} 
            emissive="#111111" 
            emissiveIntensity={0.5} 
          />
        </mesh>

        {/* App Background - Much brighter for visibility */}
        <mesh position={[0, 0, 0.52]}>
          <planeGeometry args={[7.2, 14.6]} />
          <meshPhysicalMaterial 
            color="#1a1a2e" 
            transparent 
            opacity={0.98} 
            emissive="#16213e" 
            emissiveIntensity={0.3} 
          />
        </mesh>

        {/* Status Bar - Brighter */}
        <mesh position={[0, 6.8, 0.53]}>
          <planeGeometry args={[7, 0.6]} />
          <meshPhysicalMaterial 
            color={color} 
            transparent 
            opacity={0.6} 
            emissive={color} 
            emissiveIntensity={0.4} 
          />
        </mesh>

        {/* Status Bar Text - Adjusted for smaller size */}
        <Text 
          position={[-3, 6.8, 0.54]} 
          fontSize={0.28} 
          color="#ffffff" 
          anchorX="left" 
          anchorY="middle" 
          fontWeight="bold"
        >
          {title.split(' ')[0]} IDE
        </Text>

        <Text 
          position={[3, 6.8, 0.54]} 
          fontSize={0.28} 
          color="#00ff00" 
          anchorX="right" 
          anchorY="middle" 
          fontWeight="bold"
        >
          ●
        </Text>

        {/* Code Content - Adjusted for smaller phone */}
        {appContent.map((line, index) => (
          <Text
            key={index}
            position={[-3.3, 6 - index * 0.4, 0.54]}
            fontSize={0.22}
            color={
              line.startsWith('//') ? '#9ca3af' :
              line.includes('=') || line.includes(':') ? '#22d3ee' :
              line.includes('function') || line.includes('const') || line.includes('def') ? '#a855f7' :
              line.includes('accuracy') || line.includes('loss') ? '#fbbf24' :
              '#f3f4f6'
            }
            anchorX="left"
            anchorY="middle"
            maxWidth={6.8}
            lineHeight={1.1}
          >
            {line}
          </Text>
        ))}

        {/* Terminal Cursor - Adjusted size */}
        <mesh position={[-3.3 + (appContent[appContent.length - 1]?.length * 0.12 || 0), 6 - (appContent.length - 1) * 0.4, 0.54]}>
          <planeGeometry args={[0.15, 0.3]} />
          <meshPhysicalMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={1.5} 
            transparent 
            opacity={0.9} 
          />
        </mesh>

        {/* Side Accent Light - Adjusted for smaller phone */}
        <mesh position={[-3.4, 0, 0.53]}>
          <planeGeometry args={[0.15, 12.8]} />
          <meshPhysicalMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.8} 
            transparent 
            opacity={0.8} 
          />
        </mesh>

        {/* Bottom Terminal Bar - Adjusted size */}
        <mesh position={[0, -6.5, 0.53]}>
          <planeGeometry args={[7, 0.8]} />
          <meshPhysicalMaterial 
            color="#2d3748" 
            transparent 
            opacity={0.95} 
            emissive="#374151" 
            emissiveIntensity={0.2} 
          />
        </mesh>

        {/* Terminal Prompt - Adjusted positioning */}
        <Text 
          position={[-3.3, -6.5, 0.54]} 
          fontSize={0.24} 
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

// Circular Orbit Animation with reduced radius for better fit
function CircularOrbit({
  radius = 16,
  count = 5
}: {
  radius?: number;
  count?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // ... keep existing code (services array definition)
  const services = [
    {
      title: "AI Development",
      subtitle: "Intelligent Solutions",
      color: "#00f5ff",
      content: ["Custom ML model training and deployment", "Natural language processing systems", "Computer vision and image recognition", "Predictive analytics and data insights"]
    },
    {
      title: "3D Web Experiences",
      subtitle: "Immersive Digital Worlds",
      color: "#8b5cf6",
      content: ["Interactive WebGL applications", "Three.js powered visualizations", "Virtual showrooms and galleries", "Real-time 3D configurators"]
    },
    {
      title: "Blockchain Solutions",
      subtitle: "Decentralized Innovation",
      color: "#10b981",
      content: ["Smart contract development", "DeFi protocol architecture", "NFT marketplace creation", "Cryptocurrency wallet integration"]
    },
    {
      title: "AR/VR Development",
      subtitle: "Extended Reality",
      color: "#f59e0b",
      content: ["Augmented reality mobile apps", "Virtual reality training simulations", "Mixed reality business solutions", "Spatial computing interfaces"]
    },
    {
      title: "Cloud Architecture",
      subtitle: "Scalable Infrastructure",
      color: "#ef4444",
      content: ["Microservices design patterns", "Serverless function deployment", "Container orchestration setup", "Auto-scaling system architecture"]
    }
  ];

  useFrame(state => {
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

  return <group ref={groupRef}>{phones}</group>;
}

// Main 3D Scene with enhanced lighting for better screen visibility
function Scene() {
  return (
    <>
      {/* Enhanced Lighting Setup for better screen visibility */}
      <ambientLight intensity={2} color="#ffffff" />
      <pointLight position={[40, 40, 40]} intensity={5} castShadow color="#00f5ff" />
      <pointLight position={[-40, -40, -40]} intensity={4.5} color="#8b5cf6" />
      <pointLight position={[40, -40, 40]} intensity={4} color="#10b981" />
      <pointLight position={[0, 0, 60]} intensity={4} color="#ffffff" />
      <spotLight 
        position={[0, 60, 0]} 
        angle={0.8} 
        penumbra={1} 
        intensity={5} 
        castShadow 
        color="#ffffff"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Environment for reflections */}
      <Environment preset="night" environmentIntensity={2} />
      
      {/* Phones Orbit with reduced radius for better container fit */}
      <CircularOrbit radius={16} count={5} />
      
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
    <div className="flex items-center justify-center h-[700px]">
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

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
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

        {/* 3D Animation Container - Increased padding and adjusted height */}
        <div className="relative w-full h-[700px] mb-12 px-4 md:px-8">
          <Suspense fallback={<LoadingFallback />}>
            <Canvas 
              shadows 
              camera={{ position: [0, 0, 30], fov: 65 }}
            >
              <Scene />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
