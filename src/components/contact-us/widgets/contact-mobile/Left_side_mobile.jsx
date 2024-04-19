import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { T1, iconStyle } from "../../Style";
import { useTranslation } from "react-i18next";
const Left_side_mobile = () => {

const{t} = useTranslation()

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      pt={2}
    >
      <Box>
        <Typography>{t("contactus.title")}</Typography>
      </Box>
      <Grid
        width="100%"
        sx={{
          mt: 2,
          p: 4,
          bgcolor: "#2E2E38",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: { xs: "none" },
        }}
      >
        <Grid
          sx={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={T1}>
            0919111111
            <LocalPhoneIcon sx={iconStyle} />
          </Typography>
        </Grid>
        <Grid
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: 5,
          }}
        >
          <Typography sx={T1}>
            adlikara659@gmail.com <EmailIcon sx={iconStyle} />
          </Typography>
        </Grid>
        <Grid
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={T1}>
            {t("contactus.address")}
            <FmdGoodIcon sx={iconStyle} />
          </Typography>
        </Grid>
        {/* <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="10%"
          sx={{ pl: { xs: 6, sm: 0 } }}
        >
          <Typography sx={T1}>0919111111</Typography>

          <LocalPhoneIcon sx={iconStyle} />
        </Grid>

        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="20%"
          sx={{ pr: { xs: 3, sm: 0 } }}
        >
        
            <Typography sx={T1}>adlikara659@gmail.com</Typography>
         
          
            <EmailIcon sx={iconStyle} />
         
        </Grid>

        <Grid
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="70%"
          sx={{ pr: { xs: 4, sm: 0 } }}
        >
       
            <Typography sx={T1}>زنجان.دانشگاه اعتمادیه</Typography>
     
      
            <FmdGoodIcon sx={iconStyle} />
    
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Left_side_mobile;
