import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { loaded, total } = useProgress();
  return (
    <Html center wrapperClass="loader">
      {Math.round((loaded / total) * 100)}%
    </Html>
  );
};

export default Loader;
