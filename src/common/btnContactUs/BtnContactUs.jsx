import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { BoxStyle2, ButtonStyle } from "./style";
import { useTranslation } from "react-i18next";

const BtnContactUs = () => {
  const [loadCount, setLoadCount] = React.useState(false);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const scrol = () => {
      if (window.scrollY > 2000) {
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
        <Button sx={ButtonStyle} href="tel:09126415284">
          {t("fast_call")}
          <span style={{ fontSize: { xs: "12px", md: "16px", xlg: "17px" } }}>
            ⚡
          </span>
        </Button>
      </Box>
    </>
  );
};

export default BtnContactUs;
