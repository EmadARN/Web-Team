import React from "react";
import { Grid } from "@mui/material";
import { CpImage, CpInnerGrid, CpMainGrid, SiteContent } from "./Style";

const Computer_Scroll_Main = ({ resumeList }) => {
  const api_Url = process.env.NEXT_PUBLIC_SERVER_URL;
  return (
    <Grid sx={CpMainGrid}>
      <img src={`/images/${"monitor"}.png`} style={CpImage()} />
      <Grid sx={CpInnerGrid}>
        <img
          style={SiteContent}
          src={`${api_Url}${resumeList.desktop_image}`}
          alt="تصویر از مانیتور"
        ></img>
      </Grid>
    </Grid>
  );
};

export default Computer_Scroll_Main;
