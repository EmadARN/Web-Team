import React from "react";
import Contact_us from "./widgets/Contact_us";
import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Title from "@/common/Title/Title";
const ContactMain = () => {
  const { t } = useTranslation();

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Box mb={6}>
        <Title title={t("contactus.title")}></Title>
      </Box>

      <Contact_us />
    </Grid>
  );
};

export default ContactMain;
