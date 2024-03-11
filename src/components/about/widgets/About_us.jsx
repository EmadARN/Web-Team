import React from "react";
import { Grid } from "@mui/material";
import Left_part from "./Left_part";
import Right_part from "./Right_part";

const About_us = () => {
  return (
    <>
    
    <Grid container maxWidth={{ xs: "80%", md: "lg" }}>
   
      <Grid item xs={12} md={6}>
        <Right_part />
      </Grid>
      <Grid item xs={12} md={6}>
        <Left_part />
      </Grid>
    </Grid>
    </>
  );
};

export default About_us;
