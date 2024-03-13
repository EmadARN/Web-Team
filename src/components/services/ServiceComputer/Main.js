import React from 'react'
import Services_titile from './widgets/Services_titile'
import {Box,Typography,Grid} from '@mui/material'
import { useTranslation } from "react-i18next";
const ServicesMain = () => {

  const {t} = useTranslation()
  return (
    <Grid
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    width="100%"
  
    >

<Box mb={6}><Typography sx={{fontSize:{xs:"20px",md:'27px'}}} fontWeight="bold">  {t('ourServices')} </Typography></Box>
   <Services_titile/>
   </Grid>
  )
}

export default ServicesMain