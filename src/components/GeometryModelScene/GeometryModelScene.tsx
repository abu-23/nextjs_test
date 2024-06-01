import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  Text,
  OrbitControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Mesh } from "three";

export default function GeometryModalScene() {
  const { viewport } = useThree();
  const torus = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
      torus.current.position.z = Math.sin(state.clock.elapsedTime) * 0.4;
    }
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group scale={viewport.width / 5.75}>
      <Text
        position={[0, 0, -1]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Customisable Torus Geometry
      </Text>
      <mesh position={[0, 0, -4]} ref={torus}>
        <torusGeometry args={[0.8, 0.3, 12, 48]} />
        <meshStandardMaterial />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh>
        <bufferGeometry />
      </mesh>
      <OrbitControls />
    </group>
  );
}
