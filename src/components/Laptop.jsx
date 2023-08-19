import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";

const Laptop = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("./laptop.glb");
  const screenGroupRef = useRef(null);

  useFrame((_state, delta) => {
    if (props.laptopZoomed) {
      if (screenGroupRef.current.rotation.x >= Math.PI * 0.5)
        screenGroupRef.current.rotation.x -= delta * 2;
    }
  });
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0.25, 0.465, 0.15]} scale={0.025}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={nodes.Circle001.material}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={nodes.Circle001_1.material}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={nodes.Circle001_3.material}
        />
        <mesh
          geometry={nodes.Circle001_4.geometry}
          material={nodes.Circle001_4.material}
        />
        <mesh
          geometry={nodes.KeyboardKeyHole.geometry}
          material={nodes.KeyboardKeyHole.material}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          <mesh
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          <mesh
            geometry={nodes.Circle.geometry}
            material={nodes.Circle.material}
          />
          <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <group
          ref={screenGroupRef}
          position={[0.01, -0.47, -10.41]}
          rotation-x={Math.PI}
          scale={5.8}
        >
          <rectAreaLight
            width={1}
            height={0.75}
            intensity={7}
            color={"#818cf8"}
            rotation-x={Math.PI * 0.5}
            position={[0, 0, -1.9]}
          />
          <Html
            occlude={"blending"}
            transform
            wrapperClass="laptopScreen"
            distanceFactor={1.9}
            position={[0, 0, -1.9]}
            rotation-x={-1.56}
          >
            <iframe
              src={
                props.laptopZoomed
                  ? "https://ondrasvecdev.vercel.app"
                  : "https://portfolio-screen-saver.vercel.app/"
              }
            />
          </Html>
          <mesh
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
          />
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
        </group>
      </group>
    </group>
  );
});

export default Laptop;

useGLTF.preload("./laptop.glb");
