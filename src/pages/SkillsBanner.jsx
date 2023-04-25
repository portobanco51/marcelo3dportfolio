import { Box } from "@mui/material";
import { SkillsContainer } from "../components";

const SkillsBanner = () => {
    return (
        <Box
            position="absolute"
            mx="auto"
            display="flex"
            flexDirection="row"
            overflow="hidden"
            top={"143svh"}>
            <Box display="flex" className="skills-container">
                <SkillsContainer />
                <SkillsContainer />
            </Box>
        </Box>
    );
};
export default SkillsBanner;
