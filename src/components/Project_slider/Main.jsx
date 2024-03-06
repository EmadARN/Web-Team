import React from "react";
import { Container,Grid,Box,Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import Swiper from "@/common/Swiper/Swiper";
import { slider_data } from "./data";
import { imgStyle, sliderslide } from "./Style";

const Slider_project = () => {
  return (
    <Grid
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    width="100%"
    >
        <Box mb={6}><Typography variant="h4" fontWeight="bold"> نمونه کارهای ما</Typography></Box>
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
    </Grid>
  );
};

export default Slider_project;
