import { Box } from "@mui/material";
// import { Player } from "@lottiefiles/react-lottie-player";

const Loading = ({ progress = 20, loaded = false }) => {
    return (
        <div className={`loadingBox ${loaded ? "loadingBox-fade" : ""}`}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"2rem"}
                alignItems={"center"}
                sx={{ mt: { xs: "-20svh", sm: "-15svh" } }}>
                <Box minHeight={"200px"} minWidth="200px">
                    <span className="loader"></span>
                    {/* <Player
                        renderer="svg"
                        className="loading"
                        autoplay
                        loop
                        src="https://lottie.host/09bf873e-d574-4f98-aa2b-6cc97dd0bb35/cI0dW5FOxm.json"
                    /> */}
                </Box>
                <Box
                    height={"0.3rem"}
                    maxWidth={"280px"}
                    width={"50svw"}
                    bgcolor={"#fff"}>
                    <Box
                        height={"0.3rem"}
                        width={`${progress}%`}
                        bgcolor={"var(--color-green)"}></Box>
                </Box>
            </Box>
        </div>
    );
};
export default Loading;
