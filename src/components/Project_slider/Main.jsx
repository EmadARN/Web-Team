import React from "react";
import { Container,Grid,Box,Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import Swiper from "@/common/Swiper/Swiper";
import { slider_data } from "./data";
import { imgStyle, sliderslide } from "./Style";
import { useTranslation } from "react-i18next";

const Slider_project = () => {
  const {t} = useTranslation()
  return (
    <Grid
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    width="100%"
    >
        <Box mb={6}><Typography sx={{fontSize:{xs:"20px",md:'27px'}}} fontWeight="bold"> {t('ourProject')}</Typography></Box>
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
