import React from "react";
import { Box, Typography } from "@mui/material";
import { typographyStyle } from "../style";
import { useTranslation } from "react-i18next";


const Left_part = () => {
const {t,i18n} =useTranslation()

  return (
    <>
      <Box pt={{ xs: 2.6, md: 0 }}>
        <Typography sx={typographyStyle(i18n.language)}>
        {t("aboutusdesc")}
        </Typography>
      </Box>
    </>
  );
};

export default Left_part;
