import React from 'react'
import {Typography} from '@mui/material'
const Title = (props) => {
  return (
    <Typography
    sx={{ fontSize: { xs: "20px", md: "27px" } }}
    fontWeight="bold"
  >
    {" "}
    {props.title}
  </Typography>
  )
}

export default Title