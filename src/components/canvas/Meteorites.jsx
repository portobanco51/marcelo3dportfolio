import { AntarcticMet, LunarMet, LunarApollo, GoldMet } from "../models";
import { useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const Meteorites = () => {
    const { width: w, height: h } = useThree((state) => state.viewport);

    return (
        <group position={[0, -2, 0]}>
            <Float rotationIntensity={0.04} floatIntensity={0.06} speed={0.1}>
                <mesh position={[-w / 2.4, -25, -2]} scale={0.6}>
                    <AntarcticMet />
                </mesh>
            </Float>
            <Float rotationIntensity={0.04} floatIntensity={0.06} speed={0.1}>
                <mesh position={[w / 2.4, -28, -2]} scale={0.3}>
                    <LunarMet />
                </mesh>
            </Float>
            <Float rotationIntensity={0.04} floatIntensity={0.06} speed={0.1}>
                <mesh position={[-w / 2.4, -30.5, -2]} scale={0.6}>
                    <LunarApollo />
                </mesh>
            </Float>
            <Float rotationIntensity={0.04} floatIntensity={0.06} speed={0.1}>
                <mesh position={[w / 2.4, -33, -2]} scale={0.6}>
                    <GoldMet />
                </mesh>
            </Float>
        </group>
    );
};

export default Meteorites;
