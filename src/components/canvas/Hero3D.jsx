import { Rocket } from "../models";

const Hero3D = () => {
  const isMobile = window.innerWidth <= 600;
  const isNarrow = window.innerWidth <= 380;
  return (
    <mesh
      position={
        isNarrow ? [-1.4, -2.7, 0] : isMobile ? [-1.5, -2, 0] : [-0.8, -0.8, 0]
      }
      scale={isNarrow ? 0.17 : isMobile ? 0.2 : 0.4}
      castShadow>
      <Rocket />
    </mesh>
  );
};

export default Hero3D;
