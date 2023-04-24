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
                        mt: { xs: "-40svh", md: "-10svh" },
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
                        I<span>'</span>m Marcelo<span>!</span>
                    </Typography>

                    <Typography
                        fontFamily={"var(--font-primary)"}
                        fontSize={"1.5rem"}
                        sx={{ textAlign: { sm: "left", xs: "center" } }}
                        fontWeight={"800"}>
                        I<span>'</span>m a Front<span>-</span>End Developer
                        <span>.</span>
                    </Typography>

                    <Typography
                        fontFamily={"var(--font-secondary)"}
                        mx={"auto"}
                        fontSize={"0.9rem"}
                        sx={{
                            textAlign: { sm: "left", xs: "center" },
                            maxWidth: { sm: "45%", xs: "80%" },
                            mx: { sm: "unset", xs: "auto" },
                        }}>
                        Clean code enthusiast<span>,</span> ready to rocket
                        projects outta space with cutting<span>-</span>edge
                        technologies<span>!</span>
                    </Typography>
                </Box>
            </title>
        </Box>
    );
};
export default Hero;
