import React from "react";
import { Grid } from "@mui/material";
import {
  CpImage,
  CpInnerGrid,
  CpMainGrid,
  SiteContent,
  parentMainGrid,
} from "./Style";
import Image from "next/image";
const Mobile_Scroll_Main = ({ resumeList }) => {
  return (
    <Grid sx={parentMainGrid}>
      <Grid sx={CpMainGrid}>
        <Image
          style={CpImage()}
          src={`/images/${"screen_mobile"}.png`}
          alt="Picture of the author"
          width={400}
          height={300}
          priority
        />
        {/* <img style={CpImage()} src={`/images/${"screen_mobile"}.png`} alt="" /> */}

        <Grid sx={CpInnerGrid()}>
          <Image
            style={SiteContent}
            src={`https://backend-adlikara.ir${resumeList.mobile_image}`}
            alt="Picture of the author"
            width={800}
            height={800}
            priority
          />
          {/* <img
            src={`https://backend-adlikara.ir${resumeList.mobile_image}`}
            style={SiteContent}
          /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mobile_Scroll_Main;
