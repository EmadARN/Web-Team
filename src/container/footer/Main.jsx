import React from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";
import { Box, Typography } from "@mui/material";

const MainFooter = () => {
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2}>
        <Typography sx={TypographyStyle1}>
          تمامی حقوق برای آدلی کارا محفوظ می باشد.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainFooter;
