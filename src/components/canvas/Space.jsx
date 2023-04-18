import { Stars, Sparkles, Float, Environment } from "@react-three/drei";

const Space = ({ env = "/Models/sky.hdr" }) => {
    return (
        <>
            <Environment files={env} blur={1} />
            <color attach={"background"} args={["#000000"]} />

            <Stars
                radius={100}
                depth={10}
                count={800}
                factor={1}
                saturation={1}
                fade
                speed={0.6}
            />

            <Float floatIntensity={0.001} speed={0.7} floatingRange={[-1, -1]}>
                <Sparkles
                    noise={0}
                    count={500}
                    speed={0.01}
                    size={0.6}
                    color={"#FFD2BE"}
                    opacity={10}
                    scale={[20, 88, 10]}
                />
            </Float>

            <Float floatIntensity={0.001} speed={0.7} floatingRange={[-1, -1]}>
                <Sparkles
                    noise={0}
                    count={200}
                    speed={0.01}
                    size={9}
                    color={"#FFF"}
                    opacity={0.6}
                    scale={[20, 88, 10]}
                />
            </Float>

            <Float floatIntensity={0.001} speed={0.5} floatingRange={[-1, -1]}>
                <Sparkles
                    position={[0, 0, -8]}
                    noise={0}
                    count={100}
                    speed={0.01}
                    size={20}
                    color={"#d8fd38"}
                    opacity={0.1}
                    scale={[5, 88, 20]}
                />
            </Float>

            <Float floatIntensity={0.001} speed={0.5} floatingRange={[-1, -1]}>
                <Sparkles
                    position={[0, 0, -8]}
                    noise={0}
                    count={100}
                    speed={0.01}
                    size={20}
                    color={"#edbc88"}
                    opacity={0.1}
                    scale={[5, 88, 20]}
                />
            </Float>
        </>
    );
};
export default Space;
