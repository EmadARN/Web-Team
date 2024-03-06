import React from "react";
import { Grid, Box } from "@mui/material";
import animationData from "../../assets/Animation - 1709040953350.json";
import Lottie from "lottie-react";
const Loader = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
        background: "#18181b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid width="100%" flexDirection="column" className="svg-wrapper" display="flex" justifyContent="center" alignItems="center">
        {/* copy svg image and past it here */}
        <Box width="20%" >
          <Lottie animationData={animationData} />
        </Box>
        {/* <Box
          style={{
            
            fontWeight: "bold",
            color: "#fff",
            transform: "translate(.4rem)",
      
          }}
         
        >
          در حال بارگذاری
        </Box> */}
      </Grid>
    </Grid>
  );
};

export default Loader;
