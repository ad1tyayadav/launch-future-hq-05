
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(2000), { radius: 1.2 })], []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}  
      >
        <ambientLight intensity={0.3} />
        <Stars />
      </Canvas>
    </div>
  );
}
