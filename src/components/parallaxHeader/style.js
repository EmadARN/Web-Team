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
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  XXLarge
) => {
  const style = {
    top: ExtraSmall
      ? "40%"
      : Small
      ? "40%"
      : Medium
      ? "40%"
      : Large
      ? "40%"
      : ExtraLarge
      ? "30%"
      : XXLarge
      ? "30%"
      : "35%",
    left: "0%",
    zIndex: 4,
    width: ExtraSmall
      ? "16%"
      : Small
      ? "15%"
      : Medium
      ? "16%"
      : Large
      ? "16%"
      : ExtraLarge
      ? "14%"
      : XXLarge
      ? "18%"
      : "14%",
    maxHeight: ExtraSmall
      ? "10%"
      : Small
      ? "22%"
      : Medium
      ? "20%"
      : Large
      ? "20%"
      : ExtraLarge
      ? "30%"
      : XXLarge
      ? "40%"
      : "30%",
  };

  return style;
};

export const moonStyle = (
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  XXLarge
) => {
  const style = {
    width: ExtraSmall
      ? "40%"
      : Small
      ? "25%"
      : Medium
      ? "26%"
      : Large
      ? "25%"
      : ExtraLarge
      ? "22%"
      : XXLarge
      ? "20%"
      : "17%",
    maxHeight: ExtraSmall
      ? "180px"
      : Small
      ? "180px"
      : Medium
      ? "150px"
      : Large
      ? "190px"
      : ExtraLarge
      ? "250px"
      : XXLarge
      ? "250px"
      : "190px",

    top: ExtraSmall
      ? "220px"
      : Small
      ? "160px"
      : Medium
      ? "180px"
      : Large
      ? "180px"
      : ExtraLarge
      ? "130px"
      : XXLarge
      ? "240px"
      : "140px",
    right: "15%",
    zIndex: 2,
  };
  return style;
};
export const boatStyle = (
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  XXLarge
) => {
  const style = {
    width: ExtraSmall
      ? "46%"
      : Small
      ? "44%"
      : Medium
      ? "50%"
      : Large
      ? "50%"
      : ExtraLarge
      ? "36%"
      : XXLarge
      ? "30%"
      : "33%",
    maxHeight: ExtraSmall ? "130px" : XXLarge ? "250px" : "200px",
    right: "0%",
    top: ExtraSmall
      ? "72%"
      : Small
      ? "55%"
      : Medium
      ? "55%"
      : Large
      ? "66%"
      : ExtraLarge
      ? "55%"
      : XXLarge
      ? "58%"
      : "55%",
    zIndex: 1,
  };
  return style;
};
export const iconStyle = {
  fontSize: { xs: "28px", md: "38px" },
  position: "absolute",
  bottom: { xs: "15%", md: "10%" },
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
