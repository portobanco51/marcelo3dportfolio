import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function GoldMet(props) {
    const { nodes, materials } = useGLTF(
        "./Models/GoldMet/scene-transformed.glb",
    );
    const rotRef = useRef(null);
    useFrame(() => {
        if (!!rotRef) {
            rotRef.current.rotation.y -= 0.002;
            rotRef.current.rotation.x -= 0.002;
        }
    });
    return (
        <group ref={rotRef} {...props} dispose={null} scale={150}>
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

useGLTF.preload("./Models/GoldMet/scene-transformed.glb");

export default GoldMet;
