import { Box, Typography } from "@mui/material";
import React from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";

const MainNav = () => {
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2}>
        {["درباره ما", "مهارت های ما", "پروژه ها", "ارتباط با ما "].map(
          (item) => {
            return <Typography sx={TypographyStyle1}>{item}</Typography>;
          }
        )}
      </Box>
    </Box>
  );
};

export default MainNav;
