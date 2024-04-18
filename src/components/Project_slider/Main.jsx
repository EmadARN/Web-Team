import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Title from "@/common/Title/Title";
import Swiper from "@/common/Swiper/Swiper";
import { imgStyle, sliderslide } from "./Style";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Slider_project = ({ resumeList }) => {
  const { t } = useTranslation();
  const api_Url = process.env.NEXT_PUBLIC_SERVER_URL;
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Box mb={6}>
        <Title title={t("ourProject")}></Title>
      </Box>
      <Container maxWidth={{ xs: "md", md: "lg" }}>
        <Swiper>
          {resumeList.map((item) => {
            return (
              <SwiperSlide style={sliderslide} key={item.id}>
                <Link href={`/Project/${item.id}`}>
                  <img
                    style={imgStyle}
                    src={`https://backend-adlikara.ir${item.main_image}`}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Grid>
  );
};

export default Slider_project;
