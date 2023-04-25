import { Box, Link } from "@mui/material";
import Resume from "../assets/resume.pdf";

const Links = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            gap="1.5rem"
            sx={{
                justifyContent: { xs: "center", sm: "left" },
                ml: { sm: "2rem" },
            }}>
            <Link
                className="link-item"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                fontFamily="Syne"
                letterSpacing={"2px"}
                fontWeight="700"
                underline="none"
                color="#ffffff"
                href="https://www.linkedin.com/in/jonathan-portobanco/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
            </Link>
            <Link
                className="link-item"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                fontFamily="Syne"
                letterSpacing={"2px"}
                fontWeight="700"
                underline="none"
                color="#ffffff"
                href="https://github.com/portobanco51"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
            </Link>
            <Link
                className="link-item"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
                fontFamily="Syne"
                letterSpacing={"2px"}
                fontWeight="700"
                underline="none"
                color="#ffffff"
                href={Resume}
                download={`Marcelo's Resume.pdf`}>
                Resume
            </Link>
        </Box>
    );
};
export default Links;
