import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";
import { ThemeContext } from "@/context/ThemeContext";
import { navData } from "./data";
import { Link, animateScroll as scroll } from "react-scroll";
import { Trans, useTranslation } from "react-i18next";
import MenuBar from "@/components/menubar/Main";

const MainNav = () => {
  const { t } = useTranslation();
  const [loadCount, setLoadCount] = React.useState(false);

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
                <Box sx={TypographyStyle1(theme)}>
                  <Trans i18nKey={item.navbarlocale}></Trans>
                </Box>
              </Link>
            );
          })}
          <MenuBar />
        </Box>
      </Box>
    </>
  );
};

export default MainNav;
