import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const CanvasRenderer = () => {
  return (
    <Canvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-4, 3, 5],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default CanvasRenderer;
