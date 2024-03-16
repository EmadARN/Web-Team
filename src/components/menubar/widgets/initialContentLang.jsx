import { Box, Button, Divider, Drawer, List, Typography } from "@mui/material";
import {
  BtnFive,
  BtnFour,
  TypoSxTow,
} from "../style";
import * as React from "react";
import { useTranslation } from "react-i18next";

const ListContentLang = ({ theme, toggleDrawer, anchor }) => {
  const { t, i18n } = useTranslation();

  const changeLang = (language) => {
    i18n.changeLanguage(language);
    toggleDrawer();
  };

  return (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      m={1}
    >
      <List>
        <Typography sx={TypoSxTow(theme)}>{t("زبان ")}</Typography>
        <Divider />
        <Box mt={2}>
          <Button sx={BtnFive(theme)} onClick={() => changeLang("en")}>
            English
          </Button>
          <Button sx={BtnFour(theme)} onClick={() => changeLang("fa")}>
            فارسی
          </Button>
          <Drawer />
        </Box>
      </List>
    </Box>
  );
};

export default ListContentLang;
