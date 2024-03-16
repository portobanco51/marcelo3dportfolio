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
            <Center right position={[-w / 2 + margin, -2, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`Executive\nAdministrative\nAssistant\nIBM, 2020`}
                    <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
                </Text3D>
            </Center>
            <Center left position={[w / 2 - margin, -7.5, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`           Web\n     Developer` + `\n Aztec P, 2021`}
                    <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
                </Text3D>
            </Center>
            <Center right position={[-w / 1.9 + margin, -13, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 26}
                    font={"/fonts/B612Mono.json"}>
                    {`Front End \nEngineer` + `\nCommandLink, 2023`}
                    <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
                </Text3D>
            </Center>
            <Center left position={[w / 2 - margin, -18, 0]}>
                <Text3D
                    curveSegments={segments}
                    height={height}
                    letterSpacing={spacing}
                    bevelEnabled
                    bevelSize={bevelSize}
                    bevelThickness={thickness}
                    size={h / 22}
                    font={"/fonts/B612Mono.json"}>
                    {`   Software\n   Engineer` + `\n Intel, now`}
                    <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
                </Text3D>
            </Center>
        </group>
    );
};
export default Experience;
