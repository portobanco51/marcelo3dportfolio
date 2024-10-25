import { Box, Typography } from "@mui/material";

const Hero = () => {
    return (
        <Box mx={"auto"} position={"absolute"}>
            <title className="container">
                <Box
                    mt={"-5svh"}
                    display={"flex"}
                    flexDirection={"column"}
                    flexWrap={"nowrap"}
                    gap={"1rem"}
                    sx={{
                        px: { sm: "20svw", xs: "1rem" },
                        mt: { xs: "15svh", md: "30svh" },
                    }}>
                    <Typography
                        letterSpacing={"5px"}
                        fontSize={"4rem"}
                        lineHeight={"4rem"}
                        fontFamily={"var(--font-primary)"}
                        fontWeight={"800"}
                        sx={{
                            textAlign: { sm: "left", xs: "center" },
                            fontSize: { xs: "3.9rem", sm: "4.2rem" },
                        }}
                        className="main-title">
                        Welcome<span>!</span>
                    </Typography>

                    <Typography
                        fontFamily={"var(--font-primary)"}
                        fontSize={"1.65rem"}
                        sx={{ textAlign: { sm: "left", xs: "center" } }}
                        fontWeight={"600"}>
                        I<span>'</span>m a Software Automation Engineer
                    </Typography>

                    <Typography
                        fontFamily={"var(--font-secondary)"}
                        mx={"auto"}
                        fontSize={"0.9rem"}
                        fontWeight={"500"}
                        sx={{
                            textAlign: { sm: "left", xs: "center" },
                            maxWidth: { sm: "60%", xs: "70%" },
                            mx: { sm: "unset", xs: "auto" },
                        }}>
                        Innovating Software Solutions with Agile Precision and Client<span>-</span>Centric Design
                        <span>.</span>
                        <br />
                        Explore My Portfolio
                        <span>!</span>
                    </Typography>
                </Box>
            </title>
        </Box>
    );
};
export default Hero;
