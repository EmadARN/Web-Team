import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import {
  InputStyle,
  ContactUsTypography,
  T1,
  sendticketButton,
} from "../Style";

import animationData from '../../../assets/Animation - 1708606536024.json'
import Lottie from 'lottie-react'
const RightSide = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" mb={2}>
        <Typography sx={ContactUsTypography}>ارتباط با ما</Typography>
        <Typography sx={T1}>
          نیاز به مشاوره دارید؟همین الان با ما در ارتباط باشید
        </Typography>
      </Box>

<Grid display="flex" justifyContent="space-evenly" alignItems="center" width="100%" >


<Box width="50%">
        <Lottie animationData={animationData}/>
      </Box>


      <Box display="flex" flexDirection="column" width="50%"  >
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mb={4}
        >
          <Box width="50%">
            <TextField
              size="small"
              sx={InputStyle}
              label="نام و نام خانوادگی"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mb={2}
        >
          <Box width="50%">
            <TextField
              size="small"
              sx={InputStyle}
              label="ایمیل"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Box width="50%">
            {" "}
            <TextField
              label="پیام خود را وارد کنید"
              fullWidth
              sx={InputStyle}
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mt={2}
        >
          <Button sx={sendticketButton}>ارسال تیکت</Button>
        </Box>
      </Box>


   
      </Grid>
    </>
  );
};

export default RightSide;
