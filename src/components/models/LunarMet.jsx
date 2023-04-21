import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function LunarMet(props) {
    const { nodes, materials } = useGLTF(
        "./Models/LunarMet/scene-transformed.glb",
    );
    const rotRef = useRef(null);
    useFrame(() => {
        if (!!rotRef.current) {
            rotRef.current.rotation.x -= 0.002;
            rotRef.current.rotation.y -= 0.002;
        }
    });
    return (
        <group ref={rotRef} {...props} dispose={null} scale={100}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.Object_2.geometry}
                    material={materials.material_1}
                />
                <mesh
                    geometry={nodes.Object_3.geometry}
                    material={materials.material_1}
                />
            </group>
        </group>
    );
}

useGLTF.preload("./Models/LunarMet/scene-transformed.glb");

export default LunarMet;
