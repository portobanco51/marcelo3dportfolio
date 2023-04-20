import { Rocket } from "../models";

const Hero3D = () => {
    const isMobile = window.innerWidth <= 600;
    return (
        <mesh
            position={isMobile ? [-1.5, -2, 0] : [-0.8, -0.8, 0]}
            scale={isMobile ? 0.2 : 0.4}
            castShadow>
            <Rocket />
        </mesh>
    );
};

export default Hero3D;
