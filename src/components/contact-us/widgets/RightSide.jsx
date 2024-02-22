import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import {
  InputStyle,
  ContactUsTypography,
  T1,
  sendticketButton,
} from "../Style";
const RightSide = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" mb={2}>
        <Typography sx={ContactUsTypography}>ارتباط با ما</Typography>
        <Typography sx={T1}>
          نیاز به مشاوره دارید؟همین الان با ما در ارتباط باشید
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" width="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box>
            <Typography sx={T1}>نام و نام خانوادگی</Typography>
          </Box>
          <Box width="50%">
            <TextField
              size="small"
              sx={InputStyle}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box>
            <Typography sx={T1}> ایمیل </Typography>
          </Box>
          <Box width="50%">
            <TextField
              size="small"
              sx={InputStyle}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography sx={T1}> پیام خود را وارد کنیم </Typography>
          </Box>
          <Box width="50%">
            {" "}
            <TextField
              fullWidth
              sx={InputStyle}
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
          </Box>
        </Box>

        <Box>
          <Button sx={sendticketButton}>ارسال تیکت</Button>
        </Box>
      </Box>
    </>
  );
};

export default RightSide;
