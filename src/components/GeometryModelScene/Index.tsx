"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import GeometryModel from "./GeometryModelScene";
import { Environment } from "@react-three/drei";

const Index: React.FC = () => {
  return (
    <Canvas style={{ background: "#000000", height: "100vh" }}>
      <GeometryModel />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default Index;
