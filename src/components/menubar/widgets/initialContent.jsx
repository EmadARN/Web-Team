import { Box, Button, Divider, List, Typography } from "@mui/material";
import { BtnOne, BtnThree, BtnTwo, TypoSx, drawerSx } from "../style";
import * as React from "react";
import { useTranslation } from "react-i18next";
const ListContent = ({
  anchor,
  toggleDrawer,
  theme1,
  switchLight,
  switchDark,
}) => {
  const [autoType, setAutoType] = React.useState();
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setAutoType(mediaQuery);
  }, []);

  const {t} = useTranslation()

  return (
    <Box
      sx={drawerSx}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography sx={TypoSx(theme1)}>{t('drawer.mode')}</Typography>
        <Divider />
        <Box mt={2}>
          <Button sx={BtnOne(theme1)} onClick={() => switchLight()}>
           {t("drawer.day")}
          </Button>
          <Button
            sx={BtnTwo(theme1)}
            onClick={() => (autoType.matches ? switchDark() : switchLight())}
          >
            {t('drawer.system')}
          </Button>
          <Button sx={BtnThree(theme1)} onClick={() => switchDark()}>
            {t("drawer.night")}
          </Button>
        </Box>
      </List>
    </Box>
  );
};
export default ListContent;
