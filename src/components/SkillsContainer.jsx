import { Box } from "@mui/material";
import { SkillCard } from "./index";
import SkillList from "../utils/skillList.json";

const SkillsContainer = () => {
    return (
        <Box display="flex" maxWidth="100%">
            {SkillList.map((el, i) => (
                <SkillCard key={i} logo={el.logo} name={el.name} />
            ))}
        </Box>
    );
};
export default SkillsContainer;
