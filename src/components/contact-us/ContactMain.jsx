import React from "react";
import Contact_us from "./widgets/Contact_us";
import { Grid, Box, Typography } from "@mui/material";
const ContactMain = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Box mb={6}>
        <Typography sx={{fontSize:{xs:"20px",md:'27px'}}} fontWeight="bold">
          {" "}
          ارتباط با ما
        </Typography>
      </Box>
      <Contact_us />
    </Grid>
  );
};

export default ContactMain;
