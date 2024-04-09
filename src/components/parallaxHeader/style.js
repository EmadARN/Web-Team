import { styled, useMediaQuery } from "@mui/material";

export const allStyle = {
  overflow: " hidden !important",
};
export const BoxStyle = (background, theme, show) => {
  const style = {
    background:
      theme == "dark" && show
        ? `linear-gradient(#0F2B9C, #673D7D ${background}%, #0F2B9C, #EDFC54 )`
        : theme == "light" && show
        ? `linear-gradient( skyblue, #efefef ${background}%,  skyblue,  #c7e3ff)`
        : null,

    position: "relative",
    maxWidth: "100%",
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
      height: "80px",
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

export const ballonStyle = (
  isSmallScreen,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    top: isSmallScreen
      ? "40%"
      : isMediumScreen
      ? "40%"
      : islargeScreen
      ? "40%"
      : isXlargeScreen
      ? "40%"
      : isXXlargeScreen
      ? "30%"
      : isXXXlargeScreen
      ? "30%"
      : "35%",
    left: "0%",
    zIndex: 4,
    width: isSmallScreen
      ? "25%"
      : isMediumScreen
      ? "17%"
      : islargeScreen
      ? "16%"
      : isXlargeScreen
      ? "16%"
      : isXXlargeScreen
      ? "14%"
      : isXXXlargeScreen
      ? "18%"
      : "16%",
    maxHeight: isSmallScreen
      ? "15%"
      : isMediumScreen
      ? "22%"
      : islargeScreen
      ? "20%"
      : isXlargeScreen
      ? "20%"
      : isXXlargeScreen
      ? "30%"
      : isXXXlargeScreen
      ? "40%"
      : "30%",
  };

  return style;
};

export const moonStyle = (
  isSmallScreen,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    width: isSmallScreen
      ? "13%"
      : isMediumScreen
      ? "16%"
      : islargeScreen
      ? "14%"
      : isXlargeScreen
      ? "12%"
      : isXXlargeScreen
      ? "9.5%"
      : isXXXlargeScreen
      ? "7%"
      : "8%",
    maxHeight: isSmallScreen
      ? "50px"
      : isMediumScreen
      ? "80px"
      : islargeScreen
      ? "80px"
      : isXlargeScreen
      ? "90px"
      : isXXlargeScreen
      ? "90px"
      : isXXXlargeScreen
      ? "95px"
      : "80px",
    top: "30%",
    right: "28%",
    zIndex: 2,
  };
  return style;
};
export const boatStyle = (
  isSmallScreen,
  isMediumScreen,
  islargeScreen,
  isXlargeScreen,
  isXXlargeScreen,
  isXXXlargeScreen
) => {
  const style = {
    width: isSmallScreen
      ? "50%"
      : isMediumScreen
      ? "70%"
      : islargeScreen
      ? "60%"
      : isXlargeScreen
      ? "50%"
      : isXXlargeScreen
      ? "40%"
      : isXXXlargeScreen
      ? "35%"
      : "30%",
    maxHeight: isSmallScreen ? "130px" : isXXXlargeScreen ? "250px" : "200px",
    right: "0%",
    top: isSmallScreen
      ? "65%"
      : isMediumScreen
      ? "55%"
      : islargeScreen
      ? "50%"
      : isXlargeScreen
      ? "66%"
      : isXXlargeScreen
      ? "52%"
      : isXXXlargeScreen
      ? "59%"
      : "50%",
    zIndex: 1,
  };
  return style;
};
export const iconStyle = {
  fontSize: { xs: "22px", md: "30px" },
  position: "absolute",
  bottom: "10%",
  animation: " arrow 1.2s cubic-bezier(0,.78,1,.99) infinite",
  "@keyframes arrow": {
    "0%": {
      transform: "translateY(4px)",
    },

    "100%": {
      transform: "translateY(-4px)",
    },
  },
};
