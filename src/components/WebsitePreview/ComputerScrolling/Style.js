import { useMediaQuery } from "@mui/material";

export const CpMainGrid = {
  position: "relative",
  width: "50%",
  display: { xs: "none", md: "block" },
};
export const CpImage = () => {
  const isSmallScreen = useMediaQuery(
    "(min-width: 200px) and (max-width: 500px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 501px) and (max-width: 600px)"
  );
  const islargeScreen = useMediaQuery(
    "(min-width: 601px) and (max-width:700px)"
  );
  const isXlargeScreen = useMediaQuery(
    "(min-width: 701px) and (max-width:951px)"
  );
  const isXXlargeScreen = useMediaQuery(
    "(min-width: 951px) and (max-width:1200px)"
  );
  const isXXXlargeScreen = useMediaQuery("(min-width: 1250px) ");
  const style = {
    position: "absolute",
    color: "transparent",
    width: "100%",

    pointerEvents: "none",
    zIndex: "5",
    top: "12px",
    right: "0px",
    height: isSmallScreen
      ? "188px"
      : isMediumScreen
      ? "200px"
      : islargeScreen
      ? "305px"
      : isXlargeScreen
      ? "558px"
      : isXXlargeScreen
      ? "566px"
      : isXXXlargeScreen
      ? "600px"
      : "600px",
  };
  return style;
};

export const CpInnerGrid = {
  overflowY: "scroll !important",

  display: "block",
  width: "100%",
  margin: "24px auto",
  minHeight: "410px",
  height: "100%",
  zIndex: "0",
  position: "absolute",
  top: "40%",
  right: "1px",
  transform: "scale(0.92)",
};

export const SiteContent = {
  color: "transparent",
  width: "100%",
  height: "auto",
  translate: "none",
  rotate: "none",
  scale: "none",
};
