import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Room = (props) => {
  const { nodes } = useGLTF("./room.glb");
  const { merged, praguePainting, base, earth } = nodes;

  const bakedTexture = useTexture("./baked.jpg");

  const earthRef = useRef(null);

  useFrame((_state, delta) => {
    earthRef.current.rotation.y += delta;
  });
  return (
    <group {...props}>
      <mesh geometry={merged.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={praguePainting.geometry}
        material={praguePainting.material}
      />
      <mesh
        geometry={base.children[0].geometry}
        material={base.children[0].material}
      />
      <mesh
        geometry={base.children[1].geometry}
        material={base.children[1].material}
      />
      <mesh
        ref={earthRef}
        position={earth.position}
        geometry={earth.geometry}
        material={earth.material}
      />
      <directionalLight position={[0.6, 0, -2]} color={"#B6F2FF"} />
    </group>
  );
};

export default Room;
