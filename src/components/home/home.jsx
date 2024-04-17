import BackToUp from "@/common/backToUp/BackToUp";
import Slider_project from "@/components/Project_slider/Main";
import About_Main from "@/components/about/Main";
import ContactMain from "@/components/contact-us/ContactMain";
import ParallaxHeader from "@/components/parallaxHeader/Main";
import MainPersonSkils from "@/components/pesonSkils/main";
import Layout from "@/container/main";
import { Container, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import ServicesMain from "@/components/services/ServiceComputer/Main";
import Services_mobile_Main from "@/components/services/Servicemobile/Main";
import BtnContactUs from "@/common/btnContactUs/BtnContactUs";
import Alert from "@mui/material/Alert";
const Home = ({ resumeList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
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
        <Grid sx={{ overflow: "hidden" }}>
          <ParallaxHeader />
        </Grid>

        <Grid id="aboutUs" py={10} sx={{ overflowX: "hidden" }}>
          <Container maxWidth="lg">
            <About_Main />
          </Container>
        </Grid>
        <Container maxWidth="lg">
          <Grid id="services" sx={{ mb: { xs: 5, md: 10 } }} mt={20}>
            <ServicesMain />
            <Services_mobile_Main />
          </Grid>
        </Container>
        <BtnContactUs />
        <Grid id="projects" py={10}>
          <Slider_project resumeList={resumeList} />
        </Grid>
        <Grid id="skills" py={10}>
          <MainPersonSkils />
        </Grid>
        <Grid id="contactus">
          <ContactMain setOpenSnackbar={setOpenSnackbar} />

          <Snackbar
            open={openSnackbar}
            severity="success"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              severity="success"
              variant="filled"
              sx={{ width: "100%", direction: "ltr" }}
            >
              تیکت شما با موفقیت ارسال شد
            </Alert>
          </Snackbar>
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

export default Home;
