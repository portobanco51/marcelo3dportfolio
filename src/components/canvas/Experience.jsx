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
          {`Transportation\nAnalyst\nAmazon, 2019`}
          <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
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
          {`     Executive\nAdministrative\n     Assistant` +
            `\n     IBM, 2021`}
          <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
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
          {`Web\nDeveloper\nAztec P, 2022`}
          <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
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
          {`   Software\n   Engineer` + `\n Intel, now`}
          <meshLambertMaterial emissive={"#919191"} color={"#ffffff"} />
        </Text3D>
      </Center>
    </group>
  );
};
export default Experience;
