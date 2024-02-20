import { Box, Typography,Button} from "@mui/material";
import React, { useContext } from "react";
import { BoxStyle1, BoxStyle2, TypographyStyle1 } from "./style";
import { ThemeContext } from "@/context/ThemeContext";

const MainNav = () => {
  const {switchdark,switchLight,theme} =useContext(ThemeContext)
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2}>
        {["درباره ما", "مهارت های ما", "پروژه ها", "ارتباط با ما "].map(
          (item) => {
            return <Typography sx={TypographyStyle1}>{item}</Typography>;
          }
        )}

        <Button onClick={theme === "dark" ? switchLight :switchdark}>
          {theme ==="dark"? "روز":"شب"}
        </Button>
      </Box>
    </Box>
  );
};

export default MainNav;
