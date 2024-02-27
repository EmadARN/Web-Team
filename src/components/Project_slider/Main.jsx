import React from "react";
import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import Swiper from "@/common/Swiper/Swiper";
import { slider_data } from "./data";
import { imgStyle, sliderslide } from "./Style";

const Slider_project = () => {
  return (
    <Container maxWidth={{ xs: "md", md: "lg" }}>
      <Swiper>
        {slider_data.map((item) => {
          return (
            <SwiperSlide style={sliderslide} key={item.id}>
              <img style={imgStyle} src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Slider_project;
