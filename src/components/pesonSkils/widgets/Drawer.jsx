import { Avatar, Box } from "@mui/material";
import { avatars } from "../data";
import { BoxDrawerStyle, avatarStyle, imgDrawerStyle } from "../style";

const Drawer = ({ handleAvatarClick, avatar, selectedAvatar }) => {
  return (
    <>
      {avatars.map((item) => (
        <Box sx={BoxDrawerStyle} key={item.id}>
          <Avatar
            sx={avatarStyle(avatar, selectedAvatar, item.id)}
            variant="rounded"
            onClick={() => handleAvatarClick(item.id)}
          >
            <img
              style={imgDrawerStyle}
              src="https://learning.xdezo.com/ygeehipi/2023/03/Guide-to-becoming-a-great-computer-programmer.jpg"
              alt=""
            />
          </Avatar>
        </Box>
      ))}
    </>
  );
};

export default Drawer;
