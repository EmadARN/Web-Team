import BackToUp from "@/common/backToUp/BackToUp";
import Slider_project from "@/components/Project_slider/Main";
import About_Main from "@/components/about/Main";
import ContactMain from "@/components/contact-us/ContactMain";
import ParallaxHeader from "@/components/parallaxHeader/Main";
import MainPersonSkils from "@/components/pesonSkils/main";

import Layout from "@/container/main";
import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

import ServicesMain from "@/components/services/ServiceComputer/Main";
import Services_mobile_Main from "@/components/services/Servicemobile/Main";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
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
      {/* <ScrollBar/> */}
      <Layout>
        <ParallaxHeader />

        <Grid id="aboutUs" py={10}>
          <Container maxWidth="lg">
            <About_Main />
          </Container>
        </Grid>
        <Container maxWidth="lg">
          <Grid sx={{ mb: { xs: 5, md: 10 } }} mt={10}>
            <ServicesMain />
            <Services_mobile_Main />
          </Grid>
        </Container>

        <Grid id="projects" py={10}>
          <Slider_project />
        </Grid>
        <Grid id="skills" py={10}>
          <MainPersonSkils />
        </Grid>
        <Grid id="contactus">
          <ContactMain />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            mt: 4,
            mb: 1,
          }}
        >
          <BackToUp />
        </Grid>
      </Layout>
    </Grid>
  );
};

export default index;
