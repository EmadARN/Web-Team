import { Avatar, Box } from "@mui/material";
import { avatars } from "../data";
import { BoxDrawerStyle, avatarStyle, imgDrawerStyle } from "../style";
import Image from "next/image";

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
            <Image
              style={imgDrawerStyle}
              src={`/images/${item.pic}.png`}
              alt=""
              width={300}
              height={100}
            ></Image>
            {/* <img
              style={imgDrawerStyle}
              src={`/images/${item.pic}.png`}
              alt=""
            /> */}
          </Avatar>
        </Box>
      ))}
    </>
  );
};

export default Drawer;
