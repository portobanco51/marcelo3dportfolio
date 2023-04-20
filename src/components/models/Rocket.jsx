import { useRef } from "react";
import { PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Rocket = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF(
        "./Models/Rocket/scene-transformed.glb",
    );
    const rocketRef = useRef();

    useFrame(() => {
        if (!!rocketRef.current) {
            rocketRef.current.rotation.z += 0.0012;
        }
    });

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            rotation={[Math.PI / -85, Math.PI / -30, 0]}
            scale={0.09}>
            <directionalLight position={[100, 110, -80]} />
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    position={[-20, 10, 0]}
                    rotation={[0, 0, 0]}>
                    <group
                        name="c51ca569e8164c7a9693e3f67dc1dff9fbx"
                        position={[120, 0, 0]}
                        rotation={[-Math.PI / -96, Math.PI / -7, 0]}>
                        <group name="Object_2" position={[-25, 0, 0]}>
                            <group name="RootNode">
                                <PresentationControls
                                    snap={{
                                        mass: 1,
                                        tension: 1500,
                                        friction: 30,
                                    }}>
                                    <group
                                        ref={rocketRef}
                                        name="Cone001"
                                        position={[0, 0, 0]}
                                        rotation={[0, 0, 0]}>
                                        <mesh
                                            name="Cone001_01_-_Default_0"
                                            geometry={
                                                nodes["Cone001_01_-_Default_0"]
                                                    .geometry
                                            }
                                            material={materials["01_-_Default"]}
                                        />
                                        <mesh
                                            name="Cone001_02_-_Default_0"
                                            geometry={
                                                nodes["Cone001_02_-_Default_0"]
                                                    .geometry
                                            }
                                            material={materials["02_-_Default"]}
                                        />
                                        <mesh
                                            name="Cone001_03_-_Default_0"
                                            geometry={
                                                nodes["Cone001_03_-_Default_0"]
                                                    .geometry
                                            }
                                            material={materials["03_-_Default"]}
                                        />
                                        <mesh
                                            name="Cone001_07_-_Default_0"
                                            geometry={
                                                nodes["Cone001_07_-_Default_0"]
                                                    .geometry
                                            }
                                            material={materials["07_-_Default"]}
                                        />
                                        <mesh
                                            name="Cone001_09_-_Default_0"
                                            geometry={
                                                nodes["Cone001_09_-_Default_0"]
                                                    .geometry
                                            }
                                            material={materials["09_-_Default"]}
                                        />
                                        <mesh
                                            name="Cone001_08_-_Default_0"
                                            geometry={
                                                nodes["Cone001_08_-_Default_0"]
                                                    .geometry
                                            }
                                            material={materials["08_-_Default"]}
                                        />
                                    </group>
                                </PresentationControls>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload("./Models/Rocket/scene-transformed.glb");

export default Rocket;
