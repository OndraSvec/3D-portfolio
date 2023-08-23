import { Environment, PresentationControls } from "@react-three/drei";
import Laptop from "./Laptop";
import Room from "./Room";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function Experience() {
  const laptopRef = useRef(null);

  useFrame((state) => {
    if (laptopZoomed) {
      state.camera.position.lerp(new Vector3(0.3, 0.9, 0.8), 0.05);
      state.camera.lookAt(0.2, 0.8, 0);
      state.camera.updateProjectionMatrix();
    } else if (lastTap && !laptopZoomed) {
      state.camera.position.lerp(new Vector3(-4, 3, 5), 0.025);
      state.camera.lookAt(0, 0, 0);
      state.camera.updateProjectionMatrix();
    }
  });
  return (
    <>
      <color args={["black"]} attach={"background"} />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.1, 0.2]}
        azimuth={[-0.25, 0.25]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Laptop laptopZoomed={laptopZoomed} ref={laptopRef} />
        <Room
          position={[-1, -0.7, 0]}
          scale={0.5}
          rotation-y={-Math.PI * 0.5}
        />
      </PresentationControls>
    </>
  );
}
