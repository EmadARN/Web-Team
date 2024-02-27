import React from "react";
import { Grid, Box } from "@mui/material";

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
      <Grid className="svg-wrapper">
        {/* copy svg image and past it here */}
       
        <Box
          style={{
            width: "100%",
            fontWeight: "bold",
            color: "#fff",
            transform: "translate(.4rem)",
            marginTop: "1rem",
          }}
          className="loading-text"
        >
          در حال بارگذاری
        </Box>
      </Grid>
    </Grid>
  );
};

export default Loader;
