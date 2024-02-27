import React from 'react'
import {Grid,Box} from '@mui/material'
const Mobile_Scroll = () => {
  return (
  <Grid sx={{position:"relative",width:"100%"}}>
    <img style={{color:"transparent",width:"100%",height:"auto", position:"absolute",zIndex:"5",pointerEvents:"none",top:"0",right:'0'}} src="https://webmehr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiphone.1b5d28ac.png&w=1920&q=75" alt="" />

    <Grid sx={{overflowY:"scroll",display:"block",width:"94%",margin:"2rem auto 0px",zIndex:"4",right:'0',borderRadius:"60px 60px 60px 60px",backgroundColor:"rgb(0,0,0)",height:"580px"}}>
        <img src='https://webmehr.com/_next/image?url=%2Fprojects%2F1402%2Fdandan.center%2FfullRes.png&w=640&q=75' style={{color:"transparent",width:"100%",height:"auto",margin:"auto",translate:"none",rotate:"none",scale:"none"}}/>
    </Grid>
  </Grid>
  )
}

export default Mobile_Scroll