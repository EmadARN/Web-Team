import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactUsTypography, T1, iconStyle } from "../Style";
import animationData from "../../../assets/Animation - 1708606536024.json";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Lottie from "lottie-react";
const LeftSide = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box mb={2}>
        <Typography sx={ContactUsTypography}>
          {t("contactus.lefttitle")}
        </Typography>
      </Box>

      <Box width="100%" mb={2}>
        <Lottie animationData={animationData} />
      </Box>

      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          mb={5}
        >
          <Typography sx={T1}>0919111111</Typography>

          <LocalPhoneIcon sx={iconStyle} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          mb={5}
        >
          <Typography sx={T1}>adlikara659@gmail.com</Typography>

          <EmailIcon sx={iconStyle} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          mb={5}
        >
          <Typography sx={T1}>{t("contactus.address")} </Typography>

          <FmdGoodIcon sx={iconStyle} />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box ml={3}>
            <WhatsAppIcon sx={{ color: "#2CD46B", cursor: "pointer" }} />
          </Box>

          <Box>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/adli-kara/"
            >
              <LinkedInIcon sx={{ color: "#126BC4", cursor: "pointer" }} />
            </Link>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default LeftSide;
