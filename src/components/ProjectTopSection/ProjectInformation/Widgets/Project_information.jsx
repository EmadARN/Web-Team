import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { TypoStyle,TitleTypo } from "../Style";
const Project_information = () => {
  return (
    <Grid display="flex" flexDirection="column" px={2}>
      <Grid mb={2} item display="flex" flexDirection="column">
        <Box mb={1}>
          {" "}
          <Typography sx={TitleTypo}>نوع پروژه</Typography>
        </Box>
        <Box mb={1}>
          <Typography sx={TypoStyle}>فروشگاه اینترنتی</Typography>
        </Box>
        <Box> <Typography sx={TypoStyle} >برنامه نویسی اختصاصی</Typography>  </Box>
      </Grid>

      <Grid display="flex" flexDirection="column">
        <Box mb={1}>
          <Typography sx={TitleTypo}>خدمات</Typography>
        </Box>
        <Box mb={1}> 
          <Typography sx={TypoStyle}>طراحی اختصاصی</Typography>
        </Box>
        <Box mb={1}> 
          <Typography sx={TypoStyle}>برنامه نویسی اختصاصی</Typography>
        </Box>
        <Box mb={1}>
          <Typography sx={TypoStyle}>استقرار و پشتیبانی</Typography>
        </Box>
      </Grid>

      <Grid display="flex" flexDirection="column">
        <Box>
          <Typography sx={TitleTypo}>سال</Typography>
        </Box>
        <Box>
          {" "}
          <Typography sx={TypoStyle}>1402</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Project_information;
