import { Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { SkillData } from "@/components/pesonSkils/data";
import SkillBox from "@/components/pesonSkils/widgets/Skill";
import { useTranslation } from "react-i18next";
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
  SwiperStyle3_initialCv2,
  TypographyStyle1_initialCv2,
  TypographyStyle2_initialCv2,
  TypographyStyle3_initialCv2,
} from "../style";
const InitialCv2 = ({ theme }) => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={BoxStyle1_initialCv2}>
        <Typography sx={TypographyStyle1_initialCv2(theme)}>
          {t("ourskillTitle.about")}
        </Typography>
        <Box sx={BoxStyle2_initialCv2}>
          <Typography sx={TypographyStyle2_initialCv2(theme)}>
            ده‌روسی پاسخ داد: او یک مهاجم کاذب در خط میانی یا یک هافبک هجومی
            کاذب در خط حمله است. ایده من این بود که به حسام عوار که یک بازیکن با
            کیفیت دیگر است، اجازه بازی بدهد. اما بعد دیدم که آزمون خوب کار
            می‌کند. با این حال، یافتن این هماهنگی زمان بیشتری می‌برد اما من آن
            را دوست داشتم.
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
            autoplay={{ delay: 2000 }}
     
          >
            {SkillData.map((item) => {
              return (
                <SwiperSlide>
                  <SkillBox item={item} />
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
