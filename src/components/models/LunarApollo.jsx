import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function LunarApollo(props) {
    const { nodes, materials } = useGLTF(
        "./Models/LunarApollo/scene-transformed.glb",
    );
    const rotRef = useRef(null);
    useFrame(() => {
        if (!!rotRef) {
            rotRef.current.rotation.y += 0.002;
            rotRef.current.rotation.x += 0.002;
        }
    });
    return (
        <group ref={rotRef} {...props} dispose={null} scale={95}>
            <mesh
                geometry={nodes.Object_2.geometry}
                material={materials.material_1}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("./Models/LunarApollo/scene-transformed.glb");

export default LunarApollo;
