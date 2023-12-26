"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BrownBear() {
  const brownBear = useGLTF("/brown-bear.glb");
  useFrame(function ({ clock }) {
    brownBear.scene.rotation.z = clock.getElapsedTime() / 10;
  });
  return <primitive object={brownBear.scene} scale={2} />;
}

export default function MyModel() {
  return (
    <div>
      <Canvas shadows={true} camera={{ fov: 50, position: [0, 0, 8.5] }}>
        <OrbitControls />
        <pointLight position={[5, 10, 0]} intensity={1000} color="#fff" />
        <ambientLight color={"white"} intensity={2} />
        <BrownBear />
      </Canvas>
    </div>
  );
}
0;
