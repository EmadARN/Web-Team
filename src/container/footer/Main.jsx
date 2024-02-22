import React, { useContext } from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";
import { Box, Typography } from "@mui/material";
import { ThemeContext } from "@/context/ThemeContext";

const MainFooter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2(theme)}>
        <Typography sx={TypographyStyle1(theme)}>
          تمامی حقوق برای آدلی کارا محفوظ می باشد.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainFooter;
