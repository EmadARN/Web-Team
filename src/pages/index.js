import BackToUp from "@/common/backToUp/BackToUp";
import Slidermain from "@/components/Project_slider/Main";
import About_Main from "@/components/about/Main";
import ContactMain from "@/components/contact-us/ContactMain";
import ParallaxHeader from "@/components/parallaxHeader/Main";
import MainPersonSkils from "@/components/pesonSkils/main";
import Content from "@/components/spline/Content";
import MainSpline from "@/components/spline/Spline";
import Layout from "@/container/main";
import { Container, Grid } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#1b1b1b",
      }}
    >
      <Layout>
        <ParallaxHeader />
        <Container maxWidth="lg">
          <Grid container>
            <Grid xs={12} md={4}>
              <Content />
            </Grid>
            <Grid xs={12} md={8}>
              <MainSpline />
            </Grid>
          </Grid>
        </Container>

        <Grid my={5}>
          <About_Main />
        </Grid>
        <Grid my={20}>
          <Slidermain />
        </Grid>
        <Grid my={15}>
          <MainPersonSkils />
        </Grid>


        <ContactMain />
        <BackToUp />
      </Layout>
    </Grid>
  );
};

export default index;
