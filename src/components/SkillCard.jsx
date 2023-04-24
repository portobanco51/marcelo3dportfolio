import { Box, Typography } from "@mui/material";

const SkillCard = ({ name, logo }) => {
    return (
        <Box
            className="skill-card"
            display="flex"
            justifyContent="space-evenly"
            flexDirection="column"
            borderRadius="1rem"
            my="3rem"
            minHeight="13rem"
            minWidth="12rem"
            boxShadow="0px 10px 20px 0px #00000020"
            bgcolor="rgba(255,255,255, 0)"
            sx={{ mx: { sm: "2.2rem", xs: "0.2rem" } }}>
            <img
                width="112px"
                height="112px"
                className="card-img"
                src={logo}
                alt={name}
            />
            <Typography fontFamily="Syne" fontWeight="500" textAlign="center">
                {name}
            </Typography>
        </Box>
    );
};
export default SkillCard;
