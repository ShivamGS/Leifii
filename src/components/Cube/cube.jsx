"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import "./cube.scss";
import { OrbitControls } from "@react-three/drei";
import {
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion-3d";

const Cube = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothProgress = useSpring(progress, { damping: 20 });

  return (
    <div className="main">
      <div className="cube w-[600px]">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <MyCube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  );
};

export default Cube;

function MyCube({ progress }) {
  const mesh = useRef(null);

  const texture_1 = useLoader(TextureLoader, "/assets/logol.jpg");
  const texture_2 = useLoader(TextureLoader, "/assets/2.jpg");
  const texture_3 = useLoader(TextureLoader, "/assets/3.jpg");
  const texture_4 = useLoader(TextureLoader, "/assets/4.jpg");
  const texture_5 = useLoader(TextureLoader, "/assets/5.jpg");
  const texture_6 = useLoader(TextureLoader, "/assets/6.jpg");

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}
