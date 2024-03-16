import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { projects } from "../utils/projectsUrls";
import { ProjectCard } from "../components";

import { fetchData, options } from "../utils/DataFetch";

const Projects = () => {
    const [projectsMeta, setProjectsMeta] = useState([]);

    useEffect(() => {
        const projectsData = async () => {
            const openGraphUrl = "https://seo-open-graph-scraper.p.rapidapi.com/seo?url=";
            const githubUrl = "https://github.com/portobanco51/";

            const asyncFetchData = async (projectUrl) => {
                const { data } = await fetchData(`${openGraphUrl}${projectUrl}`, options);
                console.log(data);
                const { ogTitle, ogUrl, ogImage, twitterImage, description } = data;
                const repoUrl = ogTitle.toLowerCase();

                return {
                    title: ogTitle,
                    url: ogUrl,
                    img: [ogImage || twitterImage],
                    description,
                    git: `${githubUrl}${repoUrl.replace(/\s+/g, "")}`,
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
