import { useRef } from "react";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Earth(props) {
    const { nodes, materials } = useGLTF(
        "./Models/Earth/scene-transformed.glb",
    );
    const cloudsRef = useRef();
    const atRef = useRef();

    useFrame(() => {
        if (!!cloudsRef.current || !!atRef.current) {
            cloudsRef.current.rotation.x -= 0.002;
            cloudsRef.current.rotation.y += 0.0009;
            atRef.current.rotation.x -= 0.002;
            atRef.current.rotation.y += 0.0006;
        }
    });

    return (
        <group className="skills" {...props} dispose={null}>
            <PresentationControls
                snap={{ mass: 4, tension: 500, friction: 30 }}>
                <group rotation={[-0.01, 0, -Math.PI / 2]}>
                    <mesh
                        geometry={nodes.Object_2.geometry}
                        material={materials["Material.001"]}
                    />
                    <mesh
                        ref={cloudsRef}
                        geometry={nodes.Object_3.geometry}
                        material={materials.atmosphere}
                    />
                    <mesh
                        ref={atRef}
                        geometry={nodes.Object_4.geometry}
                        material={materials.clouds}
                    />
                </group>
            </PresentationControls>
        </group>
    );
}

useGLTF.preload("./Models/Earth/scene-transformed.glb");

export default Earth;
