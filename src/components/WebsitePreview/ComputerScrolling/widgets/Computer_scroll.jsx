import React from "react";
import { Grid, Box } from "@mui/material";
import { CpImage, CpInnerGrid, CpMainGrid, SiteContent } from "../Style";
const Computer_scroll = () => {
  return (
    <Grid sx={CpMainGrid}>
      <img
        src="https://webmehr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimac.6cf05c7d.png&w=1920&q=75"
        style={
         CpImage
        }
      />
      <Grid
        sx={
         CpInnerGrid
        }
      >
        <img
          style={
          SiteContent
           
          }
          src="https://webmehr.com/_next/image?url=%2Fprojects%2F1402%2Fdandan.center%2Ffull.png&w=3840&q=75"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Computer_scroll;
