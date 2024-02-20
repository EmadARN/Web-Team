import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";

const MainNav = () => {
  const [loadCount, setLoadCount] = React.useState(false);
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
      <Box sx={BoxStyle1}>
        <Box sx={BoxStyle2(loadCount)}>
          {["درباره ما", "مهارت های ما", "پروژه ها", "ارتباط با ما "].map(
            (item) => {
              return <Typography sx={TypographyStyle1}>{item}</Typography>;
            }
          )}
        </Box>
      </Box>
    </>
  );
};

export default MainNav;
