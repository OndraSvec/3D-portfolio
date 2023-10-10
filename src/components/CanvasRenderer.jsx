import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const CanvasRenderer = () => (
  <>
    <Canvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-4, 3, 5],
      }}
    >
      <Suspense>
        <Experience />
      </Suspense>
    </Canvas>
    <Loader dataStyles={{ fontSize: "1rem" }} />
  </>
);

export default CanvasRenderer;
