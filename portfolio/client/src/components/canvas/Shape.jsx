import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Preload } from "@react-three/drei";

const AbstractShape = () => {
  const meshRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.2}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const ShapeCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <AbstractShape />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
      <Preload all />
    </Canvas>
  );
};

export default ShapeCanvas;
