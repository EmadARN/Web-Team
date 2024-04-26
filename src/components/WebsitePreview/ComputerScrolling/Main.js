import React from "react";
import { Grid } from "@mui/material";
import { CpImage, CpInnerGrid, CpMainGrid, SiteContent } from "./Style";
import Image from "next/image";
const Computer_Scroll_Main = ({ resumeList }) => {
  return (
    <Grid sx={CpMainGrid}>
      <Image
        style={CpImage()}
        src={`/images/${"monitor"}.png`}
        alt="Picture of the author"
        width={400}
        height={300}
        priority
      />
      {/* <img src={`/images/${"monitor"}.png`} style={CpImage()} /> */}
      <Grid sx={CpInnerGrid()}>
        <Image
          style={SiteContent}
          src={`https://backend-adlikara.ir${resumeList.desktop_image}`}
          alt="Picture of the author"
          width={500}
          height={500}
          priority
        />
        {/* <img
          style={SiteContent}
          src={`https://backend-adlikara.ir${resumeList.desktop_image}`}
          alt="تصویر از مانیتور"
        ></img> */}
      </Grid>
    </Grid>
  );
};

export default Computer_Scroll_Main;
