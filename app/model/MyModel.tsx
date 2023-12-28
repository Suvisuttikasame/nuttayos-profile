"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function BrownBear() {
  const brownBear = useGLTF("/brown-bear.glb");
  useFrame(function ({ clock }) {
    const easeInOutCubic = (t: number) =>
      t < 60 ? 10 * Math.log(t) : t / 10 + 34.94;
    brownBear.scene.rotation.z = easeInOutCubic(clock.getElapsedTime());
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
