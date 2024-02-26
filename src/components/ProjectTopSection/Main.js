import React from "react";
import { Grid, Box, Container } from "@mui/material";
import PrjInfoMain from "./ProjectInformation/Main";
import PrjDescMain from "./ProjectDescribtion/Main";

const PrjTopSectionMain = () => {
  return (
    <>
    <Container maxWidth="lg" >
      <Grid container justifyContent="space-around" width="100%" mt={4}>
        <Grid xs={12} md={6} width="45%">
          <PrjInfoMain />
        </Grid>

        <Grid xs={12} md={6} width="55%">
          <PrjDescMain />
        </Grid>
      </Grid>
      </Container>
    </>
  );
};

export default PrjTopSectionMain;
