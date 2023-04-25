import { useEffect, useState } from "react";
import { Box } from "@mui/material";

// import { projects } from "../utils/projectsUrls";
import { ProjectCard } from "../components";

import { fetchData, options } from "../utils/DataFetch";

const Projects = () => {
    const [projectsMeta, setProjectsMeta] = useState([]);
    const projects = [];

    useEffect(() => {
        const projectsData = () => {
            setProjectsMeta([]);
            const openGraphUrl = "https://og-link-preview.p.rapidapi.com/?url=";
            const githubUrl = "https://github.com/portobanco51/";
            projects.forEach(async (e) => {
                const data = await fetchData(`${openGraphUrl}${e}`, options);
                const repoUrl = data.title.toLowerCase();
                setProjectsMeta((prev) => [
                    ...prev,
                    {
                        title: data.title,
                        url: data.domain,
                        img: [data.cover || data.favicon],
                        description: data.description,
                        git: `${githubUrl}${repoUrl.replace(/\s+/g, "")}`,
                    },
                ]);
            });
        };
        projectsData();
    }, []);

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
