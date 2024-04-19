import React, { useEffect, useRef, useContext } from "react";
import { Grid } from "@mui/material";
import { RightGrid, LeftGrid } from "../Style";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import Left_side_mobile from "./contact-mobile/Left_side_mobile";
import { ThemeContext } from "@/context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Contact_us = ({ setOpenSnackbar }) => {
  const { theme } = useContext(ThemeContext);
  const Inner = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      repeat: false,
      defaults: { duration: 1, ease: "power3.inOut" },
      scrollTrigger: {
        trigger: Inner.current,
        start: window.innerWidth < 768 ? "-20% center" : "-20% center",
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
        y: "0",

        opacity: "1",
      },
      0
    );
  });
  return (
    <Grid
      ref={Inner}
      container
      sx={{
        width: { xs: "100%", md: "80%" },
        justifyContent: "center",

        overflow: "hidden",
        opacity: 0,
        transform: "translateY(100% ) ",
      }}
    >
      <Grid item sx={RightGrid(theme)}>
        <RightSide setOpenSnackbar={setOpenSnackbar} />
      </Grid>

      <Grid item sx={LeftGrid(theme)}>
        <LeftSide />
      </Grid>

      <Grid sx={{ display: { xs: "flex", md: "none", width: "100%" } }}>
        <Left_side_mobile />
      </Grid>
    </Grid>
  );
};

export default Contact_us;
