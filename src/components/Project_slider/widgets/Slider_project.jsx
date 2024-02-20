import React from 'react'
import {Container} from "@mui/material"
import { SwiperSlide } from 'swiper/react';
import { slider_data } from '../data';
import Swiper from '@/common/Swiper/Swiper';
import { sliderslide ,imgStyle} from '../Style';
const Slider_project = () => {
  return (
    <Container>
      <Swiper>
{slider_data.map((item)=>{
  return(
<SwiperSlide style={sliderslide} key={item.id}>
  <img style={imgStyle} src={item.img} alt="" />
</SwiperSlide>
  )
})}
</Swiper>
    </Container>
  )
}

export default Slider_project