import { Box, Typography, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";
import { ThemeContext } from "@/context/ThemeContext";

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
        {["درباره ما", "مهارت های ما", "پروژه ها", "ارتباط با ما "].map(
          (item) => {
<<<<<<< HEAD
            return <Button sx={TypographyStyle1}>{item}</Button>;
=======
            return <Typography sx={TypographyStyle1(theme)}>{item}</Typography>;
>>>>>>> 08ae9aab9f710dffe6ce373399a725d4c95f5fd8
          }
        )}
        <Button onClick={theme === "dark" ? switchLight : switchDark}>
          {theme === "dark" ? "روز" : "شب"}
        </Button>
      </Box>
    </Box>
  );
};

export default MainNav;
