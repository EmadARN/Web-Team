import React from "react";
import { Grid, Box } from "@mui/material";
import { CpImage, CpInnerGrid, CpMainGrid, SiteContent } from "../Style";
const Computer_scroll = () => {
  return (
    <Grid sx={CpMainGrid}>
      <img src={`/images/${"monitor"}.JPG`} style={CpImage} />
      <Grid sx={CpInnerGrid}>
        <img
          style={SiteContent}
          src="https://webmehr.com/_next/image?url=%2Fprojects%2F1402%2Fdandan.center%2Ffull.png&w=3840&q=75"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Computer_scroll;
