import React, { useContext, useState } from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { BoxStyle, ImgStyle, allStyle, iconStyle } from "./style";
import { imgData } from "./data";
import { ThemeContext } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { createParallaxTimeline } from "./uitls";

const ParallaxHeader = () => {
  const { t } = useTranslation();
  const [background, setBackground] = useState(20);
  const parallaxRef = useRef(null);
  const night_sea = useRef(null);
  const balloon = useRef(null);
  const abovemoon = useRef(null);
  const undermoon = useRef(null);
  const moon = useRef(null);
  const boat = useRef(null);
  const textRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const ExtraSmall = useMediaQuery("(min-width: 200px) and (max-width: 500px)");
  const Small = useMediaQuery("(min-width: 501px) and (max-width: 767px)");
  const Medium = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const Large = useMediaQuery("(min-width: 992px) and (max-width: 1021px)");
  const ExtraLarge = useMediaQuery(
    "(min-width: 1366px) and (max-width: 1600px) "
  );
  const XXLarge = useMediaQuery("(min-width: 1600px) and (max-width: 2000px) ");

  useEffect(() => {
    let ctx = gsap.context(() => {
      createParallaxTimeline(
        parallaxRef,
        balloon,
        moon,
        boat,
        textRef,
        setBackground
      );
    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  return (
    <section style={allStyle}>
      <Box ref={parallaxRef} sx={BoxStyle(background, theme, show)}>
        {imgData(
          night_sea,
          balloon,
          moon,
          abovemoon,
          undermoon,
          boat,
          ExtraSmall,
          Small,
          Medium,
          Large,
          ExtraLarge,
          XXLarge
        ).map((item) => {
          return (
            <ImgStyle
              key={item.id}
              ref={item.ref}
              style={item.style}
              className={item.class}
              src={`/images/${theme == "dark" ? item.img : item.imgLight}`}
            ></ImgStyle>
          );
        })}
        <Typography
          ref={textRef}
          sx={{
            opacity: 0,
            fontSize: "5px",
            fontWeight: "bold",
          }}
        >
          {t("paralaxHeader")}
        </Typography>
        <KeyboardDoubleArrowDownOutlinedIcon sx={iconStyle} />
      </Box>
    </section>
  );
};
export default ParallaxHeader;
