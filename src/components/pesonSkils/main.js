import { useState } from "react";
import { Grid, Avatar, Typography, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const Avatars = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const avatars = [
    { id: 1, bg: "violet", name: "EmadAraban" },
    { id: 2, bg: "red", name: "RezaBhm" },
    { id: 3, bg: "blue", name: "AmirHbb" },
    { id: 4, bg: "gold", name: "RezaFrz" },
    { id: 5, bg: "skyblue", name: "mohammadvlt" },
    { id: 6, bg: "pink", name: "mac" },
  ];

  const handleAvatarClick = (id) => {
    setSelectedAvatar(id);
  };

  return (
    <Grid container sx={{ bgcolor: "#222", position: "relative" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          width: "100%",
          height: "100vh",
          position: "absolute",
        }}
      >
        skills
      </Typography>
      <Grid xs={2} sm={1}>
        {avatars.map((item) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              key={item.id}
              sx={{
                bgcolor: deepOrange[500],
                cursor: "pointer",
                mb: 5.5,
                mt: 1,
                width: "40%",
              }}
              variant="rounded"
              onClick={() => handleAvatarClick(item.id)}
            >
              {item.name.charAt(0)}
              <img src="" alt="" />
            </Avatar>
          </Box>
        ))}
      </Grid>

      {avatars.map((item) => {
        return item.id === selectedAvatar ? (
          <Grid
            xs={10}
            sm={11}
            key={item.id}
            sx={{ bgcolor: item.bg, zIndex: 1 }}
          >
            <Typography sx={{ color: "#efefef" }}>{item.name}</Typography>
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

export default Avatars;
