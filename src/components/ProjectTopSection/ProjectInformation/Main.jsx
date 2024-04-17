import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { TitleTypo, TypoStyle } from "../Style";

const PrjInfoMain = ({ resumeList }) => {
  return (
    <Grid display="flex" flexDirection="column" px={2}>
      <Grid mb={2} item display="flex" flexDirection="column">
        <Box mb={1}>
          <Typography sx={TitleTypo}>نوع پروژه</Typography>
        </Box>
        <Box mb={1}>
          <Typography sx={TypoStyle}>{resumeList.resume_type}</Typography>
        </Box>
      </Grid>

      <Grid display="flex" flexDirection="column">
        <Box mb={1}>
          <Typography sx={TitleTypo}>خدمات</Typography>
        </Box>
        <Box mb={1}>
          <Typography sx={TypoStyle}> {resumeList.service}</Typography>
        </Box>
      </Grid>

      <Grid display="flex" flexDirection="column">
        <Box>
          <Typography sx={TitleTypo}>سال</Typography>
        </Box>
        <Box>
          <Typography sx={TypoStyle}>{resumeList.create_time}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PrjInfoMain;
