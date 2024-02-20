import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box } from "@mui/material";
import {
  BoxStyle,
  abovemoonStyle,
  allStyle,
  imgStyle1,
  ballon,
  boatStyle,
  moonStyle,
  undermoon,
} from "./style";

const ParallaxHeader = () => {
  const [background, setBackground] = useState(20);
  const parallaxRef = useRef(null);
  const night_sea = useRef(null);
  const balloon = useRef(null);
  const abovemoon = useRef(null);
  const undermoon = useRef(null);
  const moon = useRef(null);
  const boat = useRef(null);

  useEffect(() => {
    let responsive = gsap.matchMedia();
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000 bottom",
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
              scale: 2,
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
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <setion style={allStyle}>
      <Box ref={parallaxRef} sx={BoxStyle(background)}>
        {/* {imgData1.map((item) => {
          return (
            <img
              ref={item.ref}
              style={item.style}
              className={item.class}
              src={`/images/${item.img}`}
            />
          );
        })} */}

        <img
          ref={night_sea}
          style={imgStyle1}
          className="imges"
          src="/images/night-sea.png"
          alt=""
        />
        <img
          ref={balloon}
          style={ballon}
          className="imges ballon"
          src="/images/balloon.png"
          alt=""
        />
        <img
          ref={moon}
          style={moonStyle}
          className="imges moon"
          src="/images/moon.png"
          alt=""
        />
        <img
          ref={abovemoon}
          style={abovemoonStyle}
          className="imges"
          src="/images/above-moon.png"
          alt=""
        />
        <img
          ref={undermoon}
          style={undermoon}
          className="imges"
          src="/images/under-moon.png"
          alt=""
        />
        <img
          ref={boat}
          style={boatStyle}
          className="imges boat"
          src="/images/boat.png"
          alt=""
        />
      </Box>
    </setion>
  );
};
export default ParallaxHeader;
