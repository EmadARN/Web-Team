import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SwiperStyle } from "./Style";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Swiper_Slider({ children }) {
  return (
    <>
      <Swiper
        style={SwiperStyle}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
