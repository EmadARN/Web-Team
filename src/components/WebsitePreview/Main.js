import React from "react";
import {Grid} from '@mui/material'
import Computer_Scroll_Main from "./ComputerScrolling/Main";
import Mobile_Scroll_Main from "./MobileScrolling/Main";
const MobilePreviewMain = () => {
    return ( 
        <Grid container width="100%" justifyContent="space-around">
          
                <Computer_Scroll_Main/>
              


          
                <Mobile_Scroll_Main/>
               
        </Grid>
    );
}
 
export default MobilePreviewMain;