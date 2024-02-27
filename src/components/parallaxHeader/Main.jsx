import React, { useContext, useState } from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box, Typography } from "@mui/material";
import { BoxStyle, ImgStyle, allStyle, iconStyle } from "./style";
import { imgData } from "./data";
import { ThemeContext } from "@/context/ThemeContext";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
const ParallaxHeader = () => {
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

  useEffect(() => {
    let responsive = gsap.matchMedia();
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "3000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      responsive.add(
        {
          isMobile: "(max-width:700px)",
          istablet: "(min-width:701px)",
          isDesktop: "(min-width:993px)",
        },

        (context) => {
          var { isMobile, istablet, isDesktop } = context.conditions;
          tl.to(
            balloon.current,
            {
              x: () => {
                if (isMobile) {
                  return +50;
                } else if (istablet) {
                  return +100;
                } else if (isDesktop) {
                  return +100;
                }
              },
              y: () => {
                if (isMobile) {
                  return -50;
                } else if (istablet) {
                  return -100;
                } else if (isDesktop) {
                  return -100;
                }
              },
              scale: 0.2,
              transition: "2s ease-out",
            },
            0
          );
          tl.to(
            boat.current,
            {
              x: () => {
                if (isMobile) {
                  return -70;
                } else if (istablet) {
                  return -300;
                } else if (isDesktop) {
                  return -300;
                }
              },
              scale: 1.9,
              transition: "3s ease-out",
            },
            0
          );
          tl.to(
            moon.current,
            {
              y: "-=60",
            },
            0
          );
          tl.to(
            textRef.current,
            {
              transition: "all 1s ease ",
              opacity: 1,
              fontSize: "20px",
            },
            0
          );
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <setion style={allStyle}>
      <Box ref={parallaxRef} sx={BoxStyle(background, theme)}>
        {imgData(night_sea, balloon, moon, abovemoon, undermoon, boat).map(
          (item) => {
            return (
              <ImgStyle
                ref={item.ref}
                style={item.style}
                className={item.class}
                src={`/images/${item.img}`}
              ></ImgStyle>
            );
          }
        )}

        <Typography ref={textRef} sx={{ opacity: 0, fontSize: "5px" }}>
          شرکت برنامه نویسی آدلی کارا
        </Typography>
        <KeyboardDoubleArrowDownOutlinedIcon sx={iconStyle} />
      </Box>
    </setion>
  );
};
export default ParallaxHeader;
