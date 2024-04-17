import React from 'react'
import Services_titile from './widgets/Services_titile'
import {Box,Grid} from '@mui/material'
import { useTranslation } from "react-i18next";
import Title from '@/common/Title/Title';
const ServicesMain = () => {

  const {t} = useTranslation()
  return (
    <>

    <Grid
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    width="100%"
   
  
    >
    <Box mb={6}><Title title ={t('ourServices')} ></Title></Box>

   <Services_titile/>
   </Grid>
   </>
  )
}

export default ServicesMain