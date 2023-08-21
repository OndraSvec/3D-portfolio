import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Room = (props) => {
  const { nodes } = useGLTF("./room.glb");

  const {
    mergedRoom,
    mergedTable,
    mergedPalms,
    bookcase,
    bookcase001,
    phone,
    grapes,
    apple,
    banana,
    banana2,
    earth,
    base,
  } = nodes;

  const roomTexture = useTexture("./textures/room.jpg");
  const bookcaseTexture = useTexture("./textures/bookcase.jpg");
  const bookcaseWideTexture = useTexture("./textures/bookcaseWide.jpg");
  const palmsTexture = useTexture("./textures/palms.jpg");
  const tableTexture = useTexture("./textures/table.jpg");

  const earthRef = useRef(null);

  useFrame((_state, delta) => {
    earthRef.current.rotation.y += delta;
  });
  return (
    <group {...props}>
      <mesh geometry={mergedRoom.geometry}>
        <meshBasicMaterial map={roomTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={bookcase001.geometry}>
        <meshBasicMaterial map={bookcaseWideTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={bookcase.geometry}>
        <meshBasicMaterial map={bookcaseTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={mergedPalms.geometry}>
        <meshBasicMaterial map={palmsTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={mergedTable.geometry}>
        <meshBasicMaterial map={tableTexture} map-flipY={false} />
      </mesh>
      <mesh
        ref={earthRef}
        position={earth.position}
        geometry={earth.geometry}
        material={earth.material}
      />
      <group>
        <mesh
          geometry={base.children[0].geometry}
          material={base.children[0].material}
        />
        <mesh
          geometry={base.children[1].geometry}
          material={base.children[1].material}
        />
      </group>
      <group>
        {phone.children.map((child, index) => (
          <mesh
            key={index}
            geometry={child.geometry}
            material={child.material}
          />
        ))}
      </group>
      <group>
        {apple.children.map((child, index) => (
          <mesh
            key={index}
            geometry={child.geometry}
            material={child.material}
          />
        ))}
      </group>
      <group>
        {banana.children.map((child, index) => (
          <mesh
            key={index}
            geometry={child.geometry}
            material={child.material}
          />
        ))}
      </group>
      <group>
        {banana2.children.map((child, index) => (
          <mesh
            key={index}
            geometry={child.geometry}
            material={child.material}
          />
        ))}
      </group>
      <group>
        {grapes.children.map((child, index) => (
          <mesh
            key={index}
            geometry={child.geometry}
            material={child.material}
          />
        ))}
      </group>
      <directionalLight position={[0.6, 0, -2]} color={"#B6F2FF"} />
    </group>
  );
};

export default Room;
