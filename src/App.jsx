import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";

import {
    Space,
    Titles,
    Hero3D,
    Meteorites,
    Experience,
    ContactBg,
} from "./components/canvas";

import "./App.css";

const App = () => {
    return (
        <>
            <Canvas>
                <ScrollControls pages={6.5} damping={0.1} distance={0.8}>
                    {/* 3D Layer */}
                    <Suspense>
                        <Scroll>
                            <Space />
                            <Titles />
                            <Hero3D />
                            <Meteorites />
                            <Experience />
                            <ContactBg />
                        </Scroll>
                    </Suspense>
                </ScrollControls>
            </Canvas>
        </>
    );
};
export default App;
