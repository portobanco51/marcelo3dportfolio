import { useThree } from "@react-three/fiber";
import { Text3D, Center, Html } from "@react-three/drei";

const Titles = ({ margin = 0.6 }) => {
    const { width: w, height: h } = useThree((state) => state.viewport);

    return (
        <>
            <Center position={[0, -5.5, -1]}>
                <Html className="skills" style={{ top: "-23.95" }} />
                <Text3D
                    curveSegments={16}
                    height={0.005}
                    letterSpacing={0.1}
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.05}
                    size={h / 7.2 - margin}
                    font={"/fonts/Syne.json"}>
                    SKILLS
                    <meshLambertMaterial
                        emissive={"#8fac11"}
                        emissiveIntensity={1}
                        color={"#d8fd38"}
                    />
                </Text3D>
            </Center>
            <Center position={[0, -12, -1]}>
                <Html style={{ top: "10svh" }} className="projects" />
                <Text3D
                    curveSegments={16}
                    height={0.005}
                    letterSpacing={0.1}
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.05}
                    size={h / 7.2 - margin}
                    font={"/fonts/Syne.json"}>
                    PROJECTS
                    <meshLambertMaterial
                        emissive={"#8fac11"}
                        emissiveIntensity={1}
                        color={"#d8fd38"}
                    />
                </Text3D>
            </Center>
            <Center position={[0, -24.5, -1]}>
                <Html style={{ top: "30svh" }} className="experience" />
                <Text3D
                    curveSegments={16}
                    height={0.005}
                    letterSpacing={0.08}
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.05}
                    size={h / 18}
                    font={"/fonts/Syne.json"}>
                    EXPERIENCE
                    <meshLambertMaterial
                        emissive={"#8fac11"}
                        emissiveIntensity={1}
                        color={"#d8fd38"}
                    />
                </Text3D>
            </Center>
            <Center position={[0, -38.5, -1]}>
                <Text3D
                    curveSegments={16}
                    height={0.005}
                    letterSpacing={0.1}
                    bevelEnabled
                    bevelSize={0.02}
                    bevelThickness={0.05}
                    size={h / 7.2 - margin}
                    font={"/fonts/Syne.json"}>
                    CONTACT
                    <meshLambertMaterial
                        emissive={"#8fac11"}
                        emissiveIntensity={1}
                        color={"#d8fd38"}
                    />
                </Text3D>
                <Html style={{ top: "50svh" }} className="contact" />
            </Center>
        </>
    );
};
export default Titles;
