import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { BoxStyle2, ButtonStyle } from "./style";

const BtnContactUs = () => {
  const [loadCount, setLoadCount] = React.useState(false);

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const scrol = () => {
      if (window.scrollY > 3000) {
        setLoadCount(true);
      } else {
        setLoadCount(false);
      }
    };
    window.addEventListener("scroll", scrol);
  }, []);

  return (
    <>
      <Box sx={BoxStyle2(loadCount, theme)}>
        <Button sx={ButtonStyle}>
          تماس سریع <span style={{ fontSize: "18px" }}>⚡</span>
        </Button>
      </Box>
    </>
  );
};

export default BtnContactUs;
