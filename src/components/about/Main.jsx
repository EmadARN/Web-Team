import React from "react";
import About_us from "./widgets/About_us";
import { Grid } from "@mui/material";
const About_Main = () => {
  return (
    <Grid
    
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <About_us />
    </Grid>
  );
};

export default About_Main;
