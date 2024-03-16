import React from "react";
import About_us from "./widgets/About_us";
import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const About_Main = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >

      <Box mb={6}>
        <Typography
          sx={{ fontSize: { xs: "20px", md: "27px" } }}
          fontWeight="bold"
        >
          {" "}
          {t("aboutTitle")}
        </Typography>
      </Box>
      <About_us />
    </Grid>
  );
};

export default About_Main;
