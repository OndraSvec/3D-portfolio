import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useState } from "react";

const CanvasRenderer = () => {
  const [laptopZoomed, setLaptopZoomed] = useState(false);
  const [lastTap, setLastTap] = useState(null);

  const handleZoom = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastTap && now - lastTap < DOUBLE_TAP_DELAY)
      setLaptopZoomed((prevState) => !prevState);
    else setLastTap(now);
  };
  return (
    <Canvas
      flat
      onClick={handleZoom}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-4, 3, 5],
      }}
    >
      <Experience laptopZoomed={laptopZoomed} lastTap={lastTap} />
    </Canvas>
  );
};

export default CanvasRenderer;
