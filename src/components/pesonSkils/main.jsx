import { useContext, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { avatars } from "./data";
import Drawer from "./widgets/drawer";
import MainCv from "./widgets/mainCv";
import { GridDrawerStyle, GridMainStyle, TypographyStyle } from "./style";
import { ThemeContext } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
const Avatars = () => {
  const {t} = useTranslation()
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatar, setAvatars] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleAvatarClick = (id) => {
    setSelectedAvatar(id);
    setAvatars(true);
  };

  return (
    <Grid container sx={GridMainStyle(theme)}>
      <Typography sx={TypographyStyle(avatar, theme)}>
       {t('skillTitle')}
      </Typography>
      <Grid xs={2} sm={1} sx={GridDrawerStyle}>
        <Drawer
          handleAvatarClick={handleAvatarClick}
          avatar={avatar}
          selectedAvatar={selectedAvatar}
        />
      </Grid>
      {avatars.map((item) => {
        return item.id === selectedAvatar ? (
          <Grid xs={10} sm={11} key={item.id} sx={{ zIndex: 1 }}>
            <MainCv data={item} avatar={avatar} />
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

export default Avatars;
