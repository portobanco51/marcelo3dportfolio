import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls, useProgress } from "@react-three/drei";
import { NavBar } from "./components";

import { Hero, SkillsBanner, Projects, Contact, Loading } from "./pages";

import { Space, Titles, Hero3D, Meteorites, Experience, ContactBg } from "./components/canvas";

import "./App.css";

const App = () => {
    const { progress } = useProgress();
    const loaded = progress < 100 ? false : true;
    return (
        <>
            <Suspense>
                <Loading progress={progress} loaded={loaded} />
            </Suspense>
            <Canvas>
                <ScrollControls pages={6.5} damping={0.1} distance={0.8}>
                    {/* 2D Layer */}
                    <Scroll html className="text-container">
                        <NavBar />
                        <Hero />
                        <SkillsBanner />
                        <Projects />
                        <Contact />
                    </Scroll>
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
