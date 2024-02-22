import React from "react";
import { Grid } from "@mui/material";
import { RightGrid,LeftGrid } from "../Style";
import RightSide from "./RightSide";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LeftSide from "./LeftSide";
const Contact_us = () => {
  return (
    <Grid container width="80%"  >
      <Grid item  sx={RightGrid}>
        <RightSide />
      </Grid>

      <Grid item  sx={LeftGrid}>
<LeftSide/>
      </Grid>
    </Grid>
  );
};

export default Contact_us;
