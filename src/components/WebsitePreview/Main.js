import React from "react";
import { Grid } from "@mui/material";
import Computer_Scroll_Main from "./ComputerScrolling/Main";
import Mobile_Scroll_Main from "./MobileScrolling/Main";
const PreviewMain = ({ resumeList }) => {
  return (
    <Grid container width="100%" justifyContent="space-around" mt={10}>
      <Computer_Scroll_Main resumeList={resumeList} />
      <Mobile_Scroll_Main resumeList={resumeList} />
    </Grid>
  );
};

export default PreviewMain;
