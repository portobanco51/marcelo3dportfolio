import { Box } from "@mui/material";

const Loading = ({ progress, loaded }) => {
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
                </Box>
                <Box
                    height={"0.4rem"}
                    maxWidth={"240px"}
                    width={"50svw"}
                    bgcolor={"#fff"}
                    borderRadius={"50px"}>
                    <Box
                        height={"0.4rem"}
                        width={`${progress}%`}
                        bgcolor={"var(--color-green)"}
                        borderRadius={"50px"}></Box>
                </Box>
            </Box>
        </div>
    );
};
export default Loading;
