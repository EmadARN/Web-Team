import React from "react";
import About_us from "./widgets/About_us";
import { Grid ,Box,Typography} from "@mui/material";
const About_Main = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Box mb={6}><Typography sx={{fontSize:{xs:"20px",md:'27px'}}} fontWeight="bold">درباره ی ما</Typography></Box>
      <About_us />
    </Grid>
  );
};

export default About_Main;
