import React from "react";
import About_us from "./widgets/About_us";
import { Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Title from "@/common/Title/Title";
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
        <Title title={t("aboutTitle")}></Title>
      </Box>
      <About_us />
    </Grid>
  );
};

export default About_Main;
