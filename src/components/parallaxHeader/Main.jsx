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
  const isSmallScreen = useMediaQuery(
    "(min-width: 200px) and (max-width: 500px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 501px) and (max-width: 600px)"
  );
  const islargeScreen = useMediaQuery(
    "(min-width: 601px) and (max-width:700px)"
  );
  const isXlargeScreen = useMediaQuery(
    "(min-width: 701px) and (max-width:950px)"
  );
  const isXXlargeScreen = useMediaQuery(
    "(min-width: 951px) and (max-width:1200px)"
  );
  const isXXXlargeScreen = useMediaQuery("(min-width: 1250px) ");
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
    }, 100);
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
          isSmallScreen,
          isMediumScreen,
          islargeScreen,
          isXlargeScreen,
          isXXlargeScreen,
          isXXXlargeScreen
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
