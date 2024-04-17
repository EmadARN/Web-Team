import React from 'react'
import {Grid, Box, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { T1, iconStyle } from '../../Style';
const Left_side_mobile = () => {
  return (
<Grid display="flex" flexDirection="column" alignItems="center"width="100%"  >
    <Box > <Typography>راه های ارتباطی با ما</Typography></Box>
    <Grid width="100%" sx={{ p:4,bgcolor: "#2E2E38",display:"flex" ,justifyContent:"space-evenly",alignItems:"center",borderRadius:{xs:"none"}}}>
    <Grid
    
          display= "flex"
          alignItems="center"
          justifyContent="center"
          width="20%"
          sx={{pl:{xs:6,sm:0}}}
          
        >
          <Box >
            <Typography sx={T1}>0919111111</Typography>
          </Box>
          <Box>
            <LocalPhoneIcon sx={iconStyle} />
          </Box>
        </Grid>



        <Grid
        
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="20%"
          sx={{pr:{xs:3,sm:0}}}
        >
          <Box>
            <Typography sx={T1}>adlikara659@gmail.com</Typography>
          </Box>
          <Box>
            <EmailIcon sx={iconStyle} />
          </Box>
        </Grid>




        <Grid
        
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="20%"
          sx={{pr:{xs:4,sm:0}}}
        >
          <Box>
            <Typography sx={T1}>زنجان.دانشگاه اعتمادیه</Typography>
          </Box>
          <Box>
            <FmdGoodIcon sx={iconStyle} />
          </Box>
        </Grid>
    </Grid>

</Grid>
  )
}

export default Left_side_mobile