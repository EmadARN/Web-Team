import BackToUp from "@/common/backToUp/BackToUp";
import Slider_project from "@/components/Project_slider/Main";
import About_Main from "@/components/about/Main";
import ContactMain from "@/components/contact-us/ContactMain";
import ParallaxHeader from "@/components/parallaxHeader/Main";
import MainPersonSkils from "@/components/pesonSkils/main";
import Content from "@/components/spline/Content";
import MainSpline from "@/components/spline/Spline";
import Layout from "@/container/main";
import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import Cursor from "@/components/Cursor/Cursor";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fakeDataFetch();
  }, []);


  return isLoading ? (
    <Loader />
  ) : (
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
        <Grid id="aboutUs" py={5}>
          <About_Main />
        </Grid>
        <Grid id="projects" py={10}>
          <Slider_project />
        </Grid>
        <Grid id="skills" py={10}>
          <MainPersonSkils />
        </Grid>
        <Grid id="contactus">
          <ContactMain />
        </Grid>
        <BackToUp />
      </Layout>
    </Grid>
  );
};

export default index;
