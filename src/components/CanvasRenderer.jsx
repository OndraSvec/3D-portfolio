import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Loader from "./Loader";
import { Suspense } from "react";

const CanvasRenderer = () => (
  <Canvas
    flat
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-4, 3, 5],
    }}
  >
    <Suspense fallback={<Loader />}>
      <Experience />
    </Suspense>
  </Canvas>
);

export default CanvasRenderer;
