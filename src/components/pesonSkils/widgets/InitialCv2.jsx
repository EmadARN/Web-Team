import {Typography, Box, Container} from "@mui/material";
import Swiper_Slider from "@/common/Swiper/Swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Skill, SkillData} from "@/components/pesonSkils/data";
import SkillBox from "@/components/pesonSkils/widgets/Skill";

const InitialCv2 = () => {
    return (
        <>
            <Box
                sx={{
                    height: {xs: "60vh", md: "88vh"},
                    borderRadius: "15px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    WebkitBackdropFilter: "blur(8px) !important",
                    backdropFilter: {xs: "blur(8px)", md: "blur(10px)"},
                }}
            >
                <Typography sx={{p: 1, color: "#2228"}}>درباره من</Typography>
                <Box
                    sx={{
                        height: {xs: "45%", sm: "48%", md: "35%"},
                        backgroundColor: "rgba(255,255,255,0.1)",
                        WebkitBackdropFilter: "blur(8px) !important",
                        backdropFilter: {
                            xs: "blur(8px)",
                            md: "blur(10px)",
                        },
                        color: "#2228",
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "justify",
                            p: 1,
                            fontSize: {xs: "10px", sm: "14px", md: "17px"},
                        }}
                    >
                        ده‌روسی پاسخ داد: او یک مهاجم کاذب در خط میانی یا یک هافبک هجومی
                        کاذب در خط حمله است. ایده من این بود که به حسام عوار که یک بازیکن با
                        کیفیت دیگر است، اجازه بازی بدهد. اما بعد دیدم که آزمون خوب کار
                        می‌کند. با این حال، یافتن این هماهنگی زمان بیشتری می‌برد اما من آن
                        را دوست داشتم.
                    </Typography>
                </Box>
                <Typography sx={{pb: 2, pt: 3, pr: 1, color: "#2228"}}>
                    مهارت های من
                </Typography>
                <Box
                    sx={{
                        height: {xs: "30%", sm: "33%", md: "30%"},
                        color: "#2228",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        WebkitBackdropFilter: "blur(7px) !important",
                        backdropFilter: {
                            xs: "blur(7px)",
                            md: "blur(10px)",
                        },
                    }}
                >

                    <Swiper

                        style={{paddingTop:"5%"}}
                        spaceBetween={50}
                        slidesPerView={4}
                        autoplay={true}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                        {SkillData.map((item) => {
                            return (
                                <Box key={item} display="flex" width="100%">
                                    <SwiperSlide>
                                        <SkillBox item={item}/>
                                    </SwiperSlide>
                                </Box>
                            );
                        })}
                    </Swiper>

                    <Typography sx={{textAlign: "justify", p: 1}}></Typography>
                </Box>
            </Box>
        </>
    );
};

export default InitialCv2;
