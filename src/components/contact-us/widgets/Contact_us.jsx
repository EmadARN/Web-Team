import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { RightGrid, LeftGrid } from "../Style";
import RightSide from "./RightSide";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LeftSide from "./LeftSide";
import Left_side_mobile from "./contact-mobile/Left_side_mobile";
import { ThemeContext } from "@/context/ThemeContext";
const Contact_us = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Grid
      container
      sx={{
        width: { xs: "100%", md: "80%" },
        justifyContent: "center",
      }}
    >
      <Grid item sx={RightGrid(theme)}>
        <RightSide />
      </Grid>

      <Grid item sx={LeftGrid(theme)}>
        <LeftSide />
      </Grid>

      <Grid sx={{ display: { xs: "flex", md: "none", width: "100%" } }}>
        <Left_side_mobile />
      </Grid>
    </Grid>
  );
};

export default Contact_us;
