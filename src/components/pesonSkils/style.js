//Main
export const GridMainStyle = (theme) => {
  const style = {
    bgcolor: theme == "dark" ? "#1116" : "#f5fffe",
    position: "relative",
    overflow: "hidden",
    height: { xs: "80vh", sm: "90vh", md: "115vh", lg: "100vh" },
    opacity: 0,
    transform: "scale(0)",
  };

  return style;
};
//Drawer
export const TypographyStyle = (avatar, theme) => {
  const style = {
    display: "flex",
    filter: avatar ? "blur(2px)" : null,
    justifyContent: "center",
    alignItems: "center",
    color: theme === "dark" ? "#f5fffe" : "#1116",
    width: "100%",
    height: "100vh",
    position: "absolute",
    fontSize: "30px",
  };
  return style;
};
export const GridDrawerStyle = {
  boxShadow:
    "rgba(6, 24, 44, 0.8) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
};
export const BoxDrawerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const avatarStyle = (avatar, selectedAvatar, item) => {
  const style = {
    borderRadius: "50%",
    cursor: "pointer",
    border: item === selectedAvatar ? "2px solid #a10000" : null,
    mb: !avatar ? 4 : 4.7,
    mt: 1,
    transition: "all .6s ease",
    width: !avatar ? { xs: "45px", sm: "55px" } : { xs: "38px", sm: "48px" },
    height: !avatar ? { xs: "45px", sm: "55px" } : { xs: "38px", sm: "48px" },
  };
  return style;
};
export const imgDrawerStyle = {
  backgroundColor: "transparent",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundPosition: "center !important",
  backgroundSize: "contain",

  justifyContent: "center",
};

//MainCv
export const BoxMainCvStyle = {
  backgroundImage: ` url(images/CircuitPrimary.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  height: { xs: "80vh", sm: "90vh", md: "115vh", lg: "100vh" },
  width: { xs: "90%", sm: "100%" },
  position: "absolute",
  left: 0,
};
export const GridMainCvStyle = {
  color: "#efefef",
  justifyContent: { xs: "flex-start", md: "center" },
};
