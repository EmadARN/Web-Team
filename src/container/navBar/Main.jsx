import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";
import { ThemeContext } from "@/context/ThemeContext";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { navData } from "./data";
import { Link, animateScroll as scroll } from "react-scroll";
import {Trans,useTranslation} from "react-i18next"
import MenuBar from "@/components/menubar/Main";


const MainNav = () => {
  const [loadCount, setLoadCount] = React.useState(false);

  const { theme, switchDark, switchLight } = useContext(ThemeContext);
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
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2(loadCount, theme)}>

        {navData.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-45}
              activeClass="active"
              spy={true}
            >
              <Box sx={TypographyStyle1(theme)}><Trans i18nKey={item.navbarlocale}></Trans></Box>
            </Link>
          );
        })}
        <MenuBar />
      </Box>
    </Box>
  );
};

export default MainNav;
