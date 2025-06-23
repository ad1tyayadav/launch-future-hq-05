
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useMemo(() => {
    // Reduced from 5000 to 2000 stars for better performance
    const positions = new Float32Array(2000 * 3);
    const tempSphere = random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 });
    
    // Validate and clean positions to prevent NaN values
    for (let i = 0; i < tempSphere.length; i++) {
      positions[i] = isNaN(tempSphere[i]) ? 0 : tempSphere[i];
    }
    
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slower rotation for smoother performance
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Smoother, less frequent updates
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Smoother, less frequent updates
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.5;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, -1]}>
      <torusGeometry args={[0.8, 0.3, 8, 50]} />
      <meshStandardMaterial
        color="#ff0080"
        transparent
        opacity={0.5}
        wireframe
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        performance={{ min: 0.5 }}
        dpr={[1, 1.5]}
        frameloop="demand"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Stars />
        <FloatingGeometry />
        <FloatingTorus />
      </Canvas>
    </div>
  );
}
