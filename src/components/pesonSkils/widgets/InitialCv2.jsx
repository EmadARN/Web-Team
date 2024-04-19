import { Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  BoxStyle1_initialCv2,
  BoxStyle2_initialCv2,
  BoxStyle3_initialCv2,
  BoxStyle4_initialCv2,
  BoxStyle5_initialCv2,
  SwiperStyle3_initialCv2,
  TypographyStyle1_initialCv2,
  TypographyStyle2_initialCv2,
  TypographyStyle3_initialCv2,
} from "../style";
const InitialCv2 = ({ theme, item }) => {
  const { t,i18n } = useTranslation();

  return (
    <>
      <Box sx={BoxStyle1_initialCv2(theme)}>
        <Typography sx={TypographyStyle1_initialCv2(theme)}>
          {t("ourskillTitle.about")}
        </Typography>
        <Box sx={BoxStyle2_initialCv2}>
          <Typography sx={TypographyStyle2_initialCv2(theme,i18n.language)}>
            <Trans i18nKey={item.OurSkilDesc}></Trans>
          </Typography>
        </Box>
        <Typography sx={TypographyStyle3_initialCv2(theme)}>
          {t("ourskillTitle.skill")}
        </Typography>
        <Box sx={BoxStyle3_initialCv2}>
          <Swiper
            style={SwiperStyle3_initialCv2}
            spaceBetween={40}
            slidesPerView={3}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 970 }}
          >
            {item.skills.map((skill) => {
              return (
                <SwiperSlide key={skill.id}>
                  <Box sx={BoxStyle5_initialCv2(skill)}></Box>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Typography sx={BoxStyle4_initialCv2}></Typography>
        </Box>
      </Box>
    </>
  );
};

export default InitialCv2;
