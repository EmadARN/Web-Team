import React from 'react'
import Contact_us from './widgets/Contact_us'
import {Grid} from "@mui/material"
const ContactMain = () => {
  return (
    <Grid width="100%" display="flex" justifyContent="center" mt={4} >
    <Contact_us/>
    </Grid>
  )
}

export default ContactMain