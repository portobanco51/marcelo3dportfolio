import { useRef } from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
    const formInfo = useRef();

    return (
        <Box
            position={"absolute"}
            display={"flex"}
            justifyContent={"center"}
            sx={{ gap: { xs: "20svh", sm: "26svh" } }}
            mt={"-1svh"}
            minHeight={"100svh"}
            minWidth={"100%"}
            top={"550dvh"}
            flexDirection={"column"}>
            <Box
                className="contact-info"
                boxShadow={"0 0px 25px #00000090"}
                bgcolor={"rgba(255,255,255, 0)"}
                borderRadius="30px"
                maxWidth="clamp(200px, 60vw, 690px)"
                mx={"auto"}
                justifyContent={"space-evenly"}
                display={"flex"}
                sx={{
                    flexDirection: { sm: "row", xs: "column" },
                    py: { sm: "1.5rem", xs: "1rem" },
                    px: { xs: "1rem", sm: "1rem" },
                    alignItems: { sm: "flex-start", xs: "center" },
                    gap: { sm: "0.8rem", xs: "0rem" },
                }}>
                <Box
                    sx={{
                        gap: { sm: "1rem", xs: "0.5rem" },
                        justifyContent: { sm: "flex-start", xs: "center" },
                    }}
                    display={"flex"}
                    maxHeight={"10rem"}
                    flexDirection={"column"}>
                    <Typography
                        sx={{ textAlign: { xs: "center", sm: "left" } }}
                        fontFamily={"Syne"}
                        fontWeight={"700"}
                        fontSize={"28px"}
                        mb={"0.5rem"}>
                        Let<span className="span-green">'</span>s work <br />{" "}
                        together<span className="span-green">!</span>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: { xs: "center", sm: "left" },
                            mx: { xs: "auto", sm: "0" },
                            mb: { xs: "2rem", sm: "0" },
                        }}
                        fontSize={"11px"}
                        maxWidth={"200px"}
                        fontFamily={"B612 Mono"}>
                        Once and for all<span>,</span> let<span>'</span>s bring
                        your project ideas down to Earth and rocket your
                        business into space<span>!</span>
                    </Typography>
                </Box>

                <Box display={"flex"} minHeight={"12.5rem"}>
                    <form
                        ref={formInfo}
                        onSubmit={(e) => e.preventDefault}
                        className="form"
                        color={"#fff"}>
                        <label hidden htmlFor="name"></label>
                        <input
                            name="name"
                            required={true}
                            placeholder="Name"
                            className="form-label"
                            id="name"
                            aria-describedby="my-helper-text"
                        />

                        <label hidden htmlFor="email"></label>
                        <input
                            name="email"
                            type="email"
                            required={true}
                            placeholder="Email"
                            className="form-label"
                            id="email"
                            aria-describedby="my-helper-text"
                        />

                        <label hidden htmlFor="email"></label>
                        <textarea
                            name="message"
                            maxLength="200"
                            rows="4"
                            required={true}
                            placeholder="Message"
                            className=" form-label"
                            id="message"
                            aria-describedby="my-helper-text"
                        />

                        <input
                            className="submit"
                            type="submit"
                            value={`${"✔"}`}></input>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
export default Contact;
