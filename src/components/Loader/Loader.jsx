
import { Box } from "@mui/material";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};
const Torus = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 4;
  });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        <Sphere position={[0, 0, 0]} size={[0.3, 3, 30]} color={"#850154"} />
        <Torus position={[0, 0, 0]} size={[0.5, 4, 30, 30]} color={"#63439b"} />
      </Canvas>
    </Box>
  );
};

export default Loader;
