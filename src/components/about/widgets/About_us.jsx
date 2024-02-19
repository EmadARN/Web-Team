import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Left_part from "./Left_part";
import Right_part from "./Right_part";

const About_us = () => {
  return (
    <Grid container width="80%" sx={{backgroundColor:"#252525",py:4,px:3,borderRadius:"20px"}}>
     
      <Grid item width="50%">
        <Box><Right_part/></Box>
      </Grid>




      <Grid display="flex" flexDirection="column" width="50%">
       <Left_part/>
      </Grid>
    </Grid>
  );
};

export default About_us;
