import React from "react";
import Spline from "@splinetool/react-spline";
import { Box } from "@mui/material";
import { SplineBoxStyle } from "./style";

const MainSpline = () => {
  return (
    <Box sx={SplineBoxStyle}>
      <Spline scene="https://prod.spline.design/kozqLVHfQTNKR47N/scene.splinecode"></Spline>
    </Box>
  );
};

export default MainSpline;
