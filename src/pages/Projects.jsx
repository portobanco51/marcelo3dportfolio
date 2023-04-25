import { useState } from "react";
import { Box } from "@mui/material";

// import { projects } from "../utils/projectsUrls";
import { ProjectCard } from "../components";

const Projects = () => {
    const [projectsMeta, setProjectsMeta] = useState([]);

    return (
        <Box
            position={"absolute"}
            top={"225svh"}
            minWidth={"100%"}
            display={"flex"}
            justifyContent={"center"}>
            <Box
                alignContent={"flex-start"}
                justifyContent={"center"}
                display={"flex"}
                flexWrap={"wrap"}
                maxWidth={"800px"}
                minHeight={"40rem"}
                sx={{
                    pt: { sm: "15svh" },
                    gap: { lg: "6rem", md: "5rem", sm: "1rem", xs: "1rem" },
                }}>
                {projectsMeta.map((e, i) => (
                    <ProjectCard key={i} data={e} />
                ))}
            </Box>
        </Box>
    );
};
export default Projects;
