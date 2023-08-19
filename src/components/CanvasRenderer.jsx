import { Canvas } from "@react-three/fiber";

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
    ></Canvas>
  );
};

export default CanvasRenderer;
