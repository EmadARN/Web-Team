import React from "react";
import { Grid, Container } from "@mui/material";
import PrjInfoMain from "./ProjectInformation/Main";
import PrjDescMain from "./ProjectDescribtion/Main";

const PrjTopSectionMain = ({ resumeList }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          WebkitUserSelect: "none" /* Safari */,
          MsUserSelect: "none" /* IE 10 and IE 11 */,
          userSelect: "none" /* Standard syntax */,
        }}
      >
        <Grid container justifyContent="space-around" width="100%" mt={5}>
          <Grid xs={12} md={6} width="45%">
            <PrjInfoMain resumeList={resumeList} />
          </Grid>

          <Grid xs={12} md={6} width="55%">
            <PrjDescMain resumeList={resumeList} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PrjTopSectionMain;
