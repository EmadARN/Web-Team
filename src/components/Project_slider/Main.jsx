import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Title from "@/common/Title/Title";
import Swiper from "@/common/Swiper/Swiper";
import { imgStyle, sliderslide } from "./Style";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Slider_project = ({ resumeList }) => {
  const { t } = useTranslation();

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
                  <Image
                    style={imgStyle}
                    src={`https://backend-adlikara.ir${item.main_image}`}
                    alt=""
                    width={700}
                    height={200}
                  ></Image>
                  {/* <img
                    style={imgStyle}
                    src={`https://backend-adlikara.ir${item.main_image}`}
                    alt=""
                  /> */}
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
