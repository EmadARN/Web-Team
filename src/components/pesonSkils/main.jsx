import { useContext, useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { avatars } from "./data";
import { GridDrawerStyle, GridMainStyle, TypographyStyle } from "./style";
import { ThemeContext } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainCv from "./widgets/MainCv";
import Drawer from "./widgets/Drawer";
const Avatars = () => {
  const { t } = useTranslation();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatar, setAvatars] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleAvatarClick = (id) => {
    setSelectedAvatar(id);
    setAvatars(true);
  };
  const Inner = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      repeat: false,
      defaults: { duration: 1, ease: "power3.inOut" },
      scrollTrigger: {
        trigger: Inner.current,
        start: window.innerWidth < 768 ? "-18% center" : "-19% center",
        end: "bottom center",
        scrub: false,
        //markers: true, // برای نمایش نشانگرهای بصری
        onEnter: () => {
          tl.play(); // شروع انیمیشن
        },
      },
    });
    tl.to(
      Inner.current,
      {
        scale: 1,
        opacity: "1",
      },
      0
    );
  });

  return (
    <Grid ref={Inner} container sx={GridMainStyle(theme)}>
      <Typography sx={TypographyStyle(avatar, theme)}>
        {t("skillTitle")}
      </Typography>
      <Grid xs={2} sm={1} sx={GridDrawerStyle}>
        <Drawer
          handleAvatarClick={handleAvatarClick}
          avatar={avatar}
          selectedAvatar={selectedAvatar}
        />
      </Grid>
      {avatars.map((item) => {
        return item.id === selectedAvatar ? (
          <Grid xs={10} sm={11} key={item.id} sx={{ zIndex: 1 }}>
            <MainCv data={item} avatar={avatar} theme={theme} />
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

export default Avatars;
