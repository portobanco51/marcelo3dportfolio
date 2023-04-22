import { Center, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Experience = ({
    margin = 1,
    segments = 16,
    height = 0.002,
    spacing = 0.06,
    bevelSize = 0.01,
    thickness = 0.09,
}) => {
    const { width: w, height: h } = useThree((state) => state.viewport);
    return (
        <group position={[0, -26, -1.9]} scale={0.5}>
            <Center right position={[-w / 2.4 + margin, -2, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`Front Desk\nTech Support\nAmazon, 2019`}
                    <meshLambertMaterial
                        emissive={"#919191"}
                        color={"#ffffff"}
                    />
                </Text3D>
            </Center>
            <Center left position={[w / 2.4 - margin, -7.5, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`Transportation\n       Analyst` + `\n  Amazon, 2019`}
                    <meshLambertMaterial
                        emissive={"#919191"}
                        color={"#ffffff"}
                    />
                </Text3D>
            </Center>
            <Center right position={[-w / 2.4 + margin, -13, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`Executive\nAdministrative\nAssistant\nIBM, 2021`}
                    <meshLambertMaterial
                        emissive={"#919191"}
                        color={"#ffffff"}
                    />
                </Text3D>
            </Center>
            <Center left position={[w / 2.4 - margin, -18, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`          Web\n    Developer` + `\n Aztec P, now`}
                    <meshLambertMaterial
                        emissive={"#919191"}
                        color={"#ffffff"}
                    />
                </Text3D>
            </Center>
        </group>
    );
};
export default Experience;
