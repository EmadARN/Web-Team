import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import {
  InputStyle,
  ContactUsTypography,
  T1,
  sendticketButton,
} from "../Style";
import { useTranslation } from "react-i18next";
import Textarea from "@/components/Textarea/Textarea";
const RightSide = () => {

const {t} = useTranslation()

  return (
    <Box>
      <Box display="flex" flexDirection="column" mb={3}>
        <Typography sx={ContactUsTypography}>ارتباط با ما</Typography>
        <Typography sx={T1}>
          {t('contactus.RightTitle')}
        </Typography>
      </Box>

      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box display="flex" flexDirection="column" width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Box width="80%">
              <TextField
                size="small"
                sx={InputStyle}
                label={t('contactus.firstinput')}
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Box width="80%">
              <TextField
                size="small"
                sx={InputStyle}
                label={t('contactus.seccondinput')}
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Box width="80%">
              <TextField
                size="small"
                sx={InputStyle}
                label={t('contactus.thirdinput')}
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <Box width="80%">
              <TextField
                size="small"
                sx={InputStyle}
                label={t('contactus.forthinput')}
                id="outlined-basic"
                placeholder="شماره همراه"
                variant="filled"
                fullWidth
              />
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width="80%">
              <Textarea />
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Button sx={sendticketButton}>{t('contactus.button')} </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default RightSide;
