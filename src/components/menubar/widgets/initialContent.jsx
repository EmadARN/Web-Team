import { Box, Button, Divider, List, Typography } from "@mui/material";
import { BtnOne, BtnThree, BtnTwo, TypoSx, drawerSx } from "../style";
import * as React from "react";

const ListContent = ({
  anchor,
  toggleDrawer,
  theme,
  switchLight,
  switchDark,
}) => {
  return (
    <Box
      sx={drawerSx}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography sx={TypoSx(theme)}>حالت :</Typography>
        <Divider />
        <Box mt={2}>
          <Button sx={BtnOne(theme)} onClick={() => switchLight()}>
            💡روشن
          </Button>
          <Button sx={BtnTwo(theme)}>💻سیستم</Button>
          <Button sx={BtnThree(theme)} onClick={() => switchDark()}>
            🌙تاریک
          </Button>
        </Box>
      </List>
    </Box>
  );
};

export default ListContent;
