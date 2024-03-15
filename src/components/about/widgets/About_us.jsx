import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Left_part from "./Left_part";
import Right_part from "./Right_part";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const About_us = () => {
  const Right = useRef(null);
  const Left = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      repeat: false,
      defaults: { duration: 1, ease: "power3.inOut" },
      scrollTrigger: {
        trigger: Right.current,
        trigger: Left.current,
        start: window.innerWidth < 768 ? "2000 center" : "2450 center",
        end: "bottom center",
        scrub: false,
        // markers: true, // برای نمایش نشانگرهای بصری
        onEnter: () => {
          tl.play(); // شروع انیمیشن
        },
      },
    });
    tl.to(
      Right.current,
      {
        y: "0",
        x: "0",
        opacity: "1",
      },
      0
    );
    tl.to(
      Left.current,
      {
        y: "0",
        x: "0",
        opacity: "1",
      },
      0.5
    );
  });

  return (
    <>
      <Grid container maxWidth={{ xs: "80%", md: "lg" }}>
        <Grid
          item
          xs={12}
          md={6}
          ref={Right}
          sx={{ opacity: 0, transform: "translate(100% ) " }}
        >
          <Right_part />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          ref={Left}
          sx={{ opacity: 0, transform: "translate(-100% ) " }}
        >
          <Left_part />
        </Grid>
      </Grid>
    </>
  );
};

export default About_us;
