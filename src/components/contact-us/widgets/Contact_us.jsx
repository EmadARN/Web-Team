import React from "react";
import { Grid } from "@mui/material";
import { RightGrid, LeftGrid } from "../Style";
import RightSide from "./RightSide";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LeftSide from "./LeftSide";
import Left_side_mobile from "./contact-mobile/Left_side_mobile";
const Contact_us = () => {
  return (
    <Grid container sx={{ width: { xs: "100%", md: "80%" } }}>
      <Grid item sx={RightGrid}>
        <RightSide />
      </Grid>

      <Grid item sx={LeftGrid}>
        <LeftSide />
      </Grid>


      <Grid sx={{display:{xs:'flex',md:"none",width:"100%"}}} >
      <Left_side_mobile/>
    </Grid>
    </Grid>

 
  );
};

export default Contact_us;
