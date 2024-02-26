import { styled, useMediaQuery } from "@mui/material";

export const allStyle = {
  overflow: " hidden !important",
};
export const BoxStyle = (background, theme) => {
  const style = {
    background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #0F2B9C, #EDFC54 )`,
    position: "relative",
    width: "100%",
    height: "110vh",
    display: " flex",
    justifyContent: "center",
    alignItems: "center",
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100px",
      background:
        theme == "dark"
          ? `linear-gradient(to top, #1b1b1b, transparent)`
          : `linear-gradient(to top, #f0fffd, transparent)`,
      zIndex: 1000,
    },
  };
  return style;
};
export const imgStyle1 = {
  width: "100%",
  height: "100%",
};
export const abovemoonStyle = {
  zIndex: 3,
};

export const undermoonStyle = {
  zIndex: 1,
};
export const ImgStyle = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: " 100%",
  backgroundSize: "contain",
  backgroundPosition: "center",
  pointerEvents: "none",
}));

export const ballonStyle = (isSmallScreen, isMediumScreen, islargeScreen) => {
  const style = {
    top: isSmallScreen
      ? "30%"
      : isMediumScreen
      ? "30%"
      : islargeScreen
      ? "30%"
      : "15%",
    left: "0%",
    zIndex: 4,
    width: isSmallScreen
      ? "25%"
      : isMediumScreen
      ? "25%"
      : islargeScreen
      ? "10%"
      : "22%",
    maxHeight: isSmallScreen
      ? "150px"
      : isMediumScreen
      ? "150px"
      : islargeScreen
      ? "150px"
      : "300px",
  };

  return style;
};

export const moonStyle = (isSmallScreen, isMediumScreen, islargeScreen) => {
  const style = {
    width: isSmallScreen
      ? "15%"
      : isMediumScreen
      ? "9%"
      : islargeScreen
      ? "7%"
      : "8%",
    maxHeight: isSmallScreen
      ? "60px"
      : isMediumScreen
      ? "80px"
      : islargeScreen
      ? "80px"
      : "80px",
    top: "30%",
    right: "28%",
    zIndex: 2,
  };
  return style;
};
export const boatStyle = (isSmallScreen, isMediumScreen, islargeScreen) => {
  const style = {
    width: isSmallScreen
      ? "55%"
      : isMediumScreen
      ? "50%"
      : islargeScreen
      ? "30%"
      : "30%",
    maxHeight: "200px",
    right: "0%",
    top: isSmallScreen
      ? "59%"
      : isMediumScreen
      ? "59%"
      : islargeScreen
      ? "60%"
      : "50%",
    zIndex: 1,
  };
  return style;
};
