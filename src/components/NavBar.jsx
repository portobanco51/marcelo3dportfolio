import { Box, Button, Typography } from "@mui/material";

const NavBar = () => {
    const buttons = ["SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"];

    const handleClick = (e) => {
        let scroll = document.getElementsByClassName(
            `${e.target.innerText.toLowerCase()}`,
        );
        scroll[0].scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{ justifyContent: { xs: "space-around", md: "space-evenly" } }}
            justifyContent={"space-around"}
            my={"1rem"}
            zIndex={"200"}>
            {buttons.map((el) => (
                <Button
                    key={el}
                    value={el}
                    className="link-item"
                    onClick={(e) => handleClick(e)}>
                    <Typography
                        color={"var(--color-green)"}
                        fontFamily={"var(--font-primary)"}
                        sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}
                        fontWeight={"700"}
                        letterSpacing={"2px"}>
                        {el}
                    </Typography>
                </Button>
            ))}
        </Box>
    );
};
export default NavBar;
