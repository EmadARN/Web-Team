import { useContext, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { avatars } from "./data";
import Drawer from "./widgets/drawer";
import MainCv from "./widgets/mainCv";
import { GridDrawerStyle, GridMainStyle, TypographyStyle } from "./style";
import { ThemeContext } from "@/context/ThemeContext";

const Avatars = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatar, setAvatars] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleAvatarClick = (id) => {
    setAvatars(true);
    setSelectedAvatar(id);
    console.log(selectedAvatar);
  };

  return (
    <Grid container sx={GridMainStyle(theme)}>
      <Typography sx={TypographyStyle(avatar, theme)}>
        مهارت و روزمه ما
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
            <MainCv avatar={avatar} />
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

export default Avatars;
