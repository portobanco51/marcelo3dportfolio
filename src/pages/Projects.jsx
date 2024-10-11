import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { projects } from "../utils/projectsUrls";
import { ProjectCard } from "../components";

import { fetchData, options } from "../utils/DataFetch";

const Projects = () => {
    const [projectsMeta, setProjectsMeta] = useState([]);

    useEffect(() => {
        const projectsData = async () => {
            const openGraphUrl = "https://url-metadata-opengraph.p.rapidapi.com/parse?url=";
            const githubUrl = "https://github.com/portobanco51/";

            const asyncFetchData = async (projectUrl) => {
                const { og } = await fetchData(`${openGraphUrl}${projectUrl}`, options);
                const {
                    title: { content: titleContent },
                    description: { content: descriptionContent },
                    image: { content: imageContent },
                } = og;

                const repoUrl = titleContent.toLowerCase();
                const titleText = titleContent.replace(/GitHub - [^/]+\/([^:]+): .+$/, "$1");
                const ArrowKeysMenuImg = "https://shorturl.at/T0l0b";

                return {
                    title: titleText,
                    url: projectUrl || null,
                    img: imageContent || ArrowKeysMenuImg,
                    description: descriptionContent,
                    git: `${githubUrl}${titleText.replace(/\s+/g, "")}`,
                };
            };

            for (const projectUrl of projects) {
                const projectMeta = await asyncFetchData(projectUrl);
                setProjectsMeta((prev) => [...prev, projectMeta]);
            }
        };
        projectsData();
    }, []);

    return (
        <Box position={"absolute"} top={"225svh"} minWidth={"100%"} display={"flex"} justifyContent={"center"}>
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
