import React from "react";
import { Grid } from "@mui/material";
import {
  CpImage,
  CpInnerGrid,
  CpMainGrid,
  SiteContent,
  parentMainGrid,
} from "./Style";
const Mobile_Scroll_Main = ({ resumeList }) => {
  return (
    <Grid sx={parentMainGrid}>
      <Grid sx={CpMainGrid}>
        <img style={CpImage()} src={`/images/${"screen_mobile"}.png`} alt="" />

        <Grid sx={CpInnerGrid()}>
          <img
            src={`https://backend-adlikara.ir${resumeList.mobile_image}`}
            style={SiteContent}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mobile_Scroll_Main;
