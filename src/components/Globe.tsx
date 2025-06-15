
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CustomGlobe = () => {
  const globeRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.1;
    }
  });

  const vertices = useMemo(() => {
    const tempVertices = [];
    const radius = 2.5;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      tempVertices.push(new THREE.Vector3(positions[i], positions[i+1], positions[i+2]));
    }
    return tempVertices;
  }, []);

  return (
    <group ref={globeRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={vertices.length}
            array={new Float32Array(vertices.flatMap(v => v.toArray()))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#a78bfa" />
      </points>
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial color="#4c1d95" transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>
    </group>
  );
};

const Stars = () => {
    const ref = useRef<THREE.Points>(null!);
    const sphere = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            let r = 4 + Math.random() * 6;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if(ref.current) {
            ref.current.rotation.y -= delta / 30;
            ref.current.rotation.x -= delta / 40;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={sphere.length / 3} array={sphere} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.02} sizeAttenuation={true} color="#ffffff" fog={false} />
        </points>
    );
}

const Globe = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="white" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a78bfa" />
        <CustomGlobe />
        <Stars />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Globe;
