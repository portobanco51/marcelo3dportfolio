import { Box, Typography, Link, Icon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ data }) => {
    const { title, url, description, img, git } = data;
    return (
        <Box
            maxWidth="200px"
            borderRadius="30px"
            justifyItems="center"
            justifyContent="center"
            display="flex"
            position="relative"
            bgcolor="#202020"
            alignItems="center"
            my="0.7rem"
            minWidth="300px"
            sx={{
                maxHeight: { sm: "2rem" },
                minHeight: { sm: "32svh", xs: "25svh" },
            }}
            className="project-card"
            style={{
                backgroundImage: `url(${img})`,
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexFlow: "column nowrap",
                backgroundRepeat: "no-repeat",
            }}>
            <Link
                borderRadius="30px"
                justifyContent="space-between"
                color="#fff"
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                underline="none">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    sx={{
                        minHeight: { sm: "30svh", xs: "20smh" },
                        gap: { sm: "2rem", xs: "1rem" },
                    }}
                    minHeight="10rem"
                    maxHeight="15rem"
                    borderRadius="30px">
                    <Typography
                        alignItems="center"
                        display="flex"
                        maxWidth="80%"
                        mx="auto"
                        textAlign="center"
                        fontSize="20px"
                        fontFamily="Syne"
                        fontWeight="400">
                        {title}
                    </Typography>
                    <Typography
                        maxWidth="80%"
                        mx="auto"
                        textAlign="center"
                        fontSize="12px"
                        fontFamily="B612 Mono"
                        fontWeight="400"
                        sx={{ pb: { xs: "3svh" } }}>
                        {description}
                    </Typography>
                </Box>
            </Link>
            <Link
                aria-label={`Go to ${git}`}
                color="#fff"
                target="_blank"
                rel="noopener noreferrer"
                href={git}
                underline="none">
                <Icon className="git-icon">
                    <GitHubIcon fontSize="large" />
                </Icon>
            </Link>
        </Box>
    );
};
export default ProjectCard;
