import {
  Environment,
  Float,
  PresentationControls,
  Text,
} from "@react-three/drei";
import Laptop from "./Laptop";
import Room from "./Room";

export default function Experience() {
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
        <Laptop />
        <Room
          position={[-1, -0.7, 0]}
          scale={0.5}
          rotation-y={-Math.PI * 0.5}
        />
        <Float floatIntensity={0.4} rotationIntensity={0.4}>
          <Text
            fontSize={0.375}
            rotation={[0, -1.25, 0.1]}
            position={[1, 2, 2]}
            children={"Double click to\ntoggle zoom"}
            textAlign="center"
          />
        </Float>
      </PresentationControls>
    </>
  );
}
