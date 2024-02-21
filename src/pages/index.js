import Slidermain from "@/components/Project_slider/Main";
import About_Main from "@/components/about/Main";
import ParallaxHeader from "@/components/parallaxHeader/Main";
import MainPersonSkils from "@/components/pesonSkils/main";
import Container from "@/container/main";
import { Grid } from "@mui/material";

import React from "react";

const index = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#1b1b1b",
      }}
    >
      <Container>
        <ParallaxHeader />
        <Grid my={15}>
          <About_Main />
        </Grid>
        <MainPersonSkils />
        <Grid my={15}>
          <Slidermain />
        </Grid>
      </Container>
    </Grid>
  );
};

export default index;
