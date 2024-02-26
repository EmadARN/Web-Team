import React from "react";
import { Grid,Box, Typography, TextField, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactUsTypography, T1, iconStyle } from "../Style";
const LeftSide = () => {
  return (
    <>

    
      <Box mb={4}>
        <Typography sx={ContactUsTypography}>راه های ارتباطی با ما</Typography>
      </Box>

      <Grid
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="60%"
          mb={5}
        >
          <Box>
            <Typography sx={T1}>0919111111</Typography>
          </Box>
          <Box>
            <LocalPhoneIcon sx={iconStyle} />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="90%"
          mb={5}
        >
          <Box>
            <Typography sx={T1}>adlikara659@gmail.com</Typography>
          </Box>
          <Box>
            <EmailIcon sx={iconStyle} />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="80%"
          mb={5}
        >
          <Box>
            <Typography sx={T1}>زنجان.دانشگاه اعتمادیه</Typography>
          </Box>
          <Box>
            <FmdGoodIcon sx={iconStyle} />
          </Box>
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
            <LinkedInIcon sx={{ color: "#126BC4", cursor: "pointer" }} />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default LeftSide;
