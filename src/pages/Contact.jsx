import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Links } from "../components";
import { sendEmail } from "../utils/email";

const Contact = () => {
    const formInfo = useRef();

    return (
        <Box
            position={"absolute"}
            display={"flex"}
            justifyContent={"flex-end"}
            sx={{ gap: { xs: "22svh", sm: "28svh" } }}
            mt={"-3svh"}
            minHeight={"100svh"}
            minWidth={"100%"}
            top={"550dvh"}
            flexDirection={"column"}>
            <Box
                className="contact-info"
                boxShadow={"0 0px 25px #00000090"}
                bgcolor={"rgba(255,255,255, 0)"}
                borderRadius={"30px"}
                maxWidth={"clamp(200px, 60vw, 690px)"}
                mx={"auto"}
                justifyContent={"space-evenly"}
                display={"flex"}
                sx={{
                    flexDirection: { sm: "row", xs: "column" },
                    py: { sm: "4rem", xs: "0" },
                    mb: { xs: "-4rem", sm: "0rem" },
                    px: { xs: "1rem", sm: "1rem" },
                    alignItems: { sm: "flex-start", xs: "center" },
                    gap: { sm: "6rem", xs: "0" },
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
                        sx={{
                            textAlign: { xs: "center", sm: "left" },
                            fontSize: { xs: "34px", sm: "34px", md: "46px" },
                            mb: { xs: "0", md: "0.5rem" },
                        }}
                        fontFamily={"var(--font-primary)"}
                        fontWeight={"700"}>
                        Let<span>'</span>s work <br /> together<span>!</span>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: { xs: "center", sm: "left" },
                            mx: { xs: "auto", sm: "0" },
                        }}
                        fontSize={"14px"}
                        maxWidth={"200px"}
                        fontWeight={"500"}
                        fontFamily={"var(--font-secondary)"}>
                        As a team<span>,</span> we<span>'</span>ll ground your vision to launch exceptional software
                        solutions
                        <span>.</span>
                    </Typography>
                </Box>

                <Box display={"flex"} minHeight={"16.5rem"}>
                    <form ref={formInfo} onSubmit={(e) => sendEmail(e, formInfo)} className="form" color={"#fff"}>
                        <label hidden htmlFor="name"></label>
                        <input
                            name="name"
                            required={true}
                            placeholder="Name"
                            className="form-label"
                            id="name"
                            aria-describedby="name"
                        />

                        <label hidden htmlFor="email"></label>
                        <input
                            name="email"
                            type="email"
                            required={true}
                            placeholder="Email"
                            className="form-label"
                            id="email"
                            aria-describedby="email"
                        />

                        <label hidden htmlFor="email"></label>
                        <textarea
                            name="message"
                            maxLength="200"
                            rows="4"
                            required={true}
                            placeholder="Message"
                            className="form-label"
                            id="message"
                            aria-describedby="message"
                        />

                        <input className="submit" type="submit" value={`${"✔"}`}></input>
                    </form>
                </Box>
            </Box>
            <Links />
        </Box>
    );
};
export default Contact;
