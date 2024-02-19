import React from 'react'
import Atropos from 'atropos/react';
import {Grid} from "@mui/material"
import 'atropos/css'
const Right_part = () => {
  return (
    <Grid sx={{display:'flex',justifyContent:"center"}}>
    <Atropos style={{width: "420px",
  height: "220px"}}
      activeOffset={40}
      shadowScale={3.05}
      onEnter={() => console.log('Enter')}
      onLeave={() => console.log('Leave')}
      onRotate={(x, y) => console.log('Rotate', x, y)}
     
    >
      <img style={{backgroundSize:"contain",backgroundPosition:'center',width:"100%"}} src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/06/34_Builtin-1.png" data-atropos-offset="5" alt="" />
    </Atropos>
    </Grid>
  )
}

export default Right_part