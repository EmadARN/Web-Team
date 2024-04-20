import { useMediaQuery } from "@mui/material";

export const parentMainGrid = {
  width: "25%",
  ml: 16,
};
export const CpMainGrid = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export const CpImage = () => {
  const isSmallScreen = useMediaQuery(
    "(min-width: 200px) and (max-width: 500px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 501px) and (max-width: 600px)"
  );
  const islargeScreen = useMediaQuery(
    "(min-width: 601px) and (max-width:900px)"
  );
  const isXlargeScreen = useMediaQuery(
    "(min-width: 900px) and (max-width:951px)"
  );
  const isXXlargeScreen = useMediaQuery(
    "(min-width: 951px) and (max-width:1200px)"
  );
  const isXXXlargeScreen = useMediaQuery("(min-width: 1250px) ");
  const style = {
    position: "absolute",
    color: "transparent",
    display: "block",

    width: isSmallScreen
      ? "230%"
      : isMediumScreen
      ? "100%"
      : islargeScreen
      ? "100%"
      : isXlargeScreen
      ? "100%"
      : isXXlargeScreen
      ? "100%"
      : isXXXlargeScreen
      ? "85%"
      : "100%",
    height: isSmallScreen
      ? "400px"
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
    pointerEvents: "none",
    zIndex: "5",
    top: "12px",
    right: "0px",
  };
  return style;
};

export const CpInnerGrid = () => {
  const isSmallScreen = useMediaQuery(
    "(min-width: 200px) and (max-width: 500px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 501px) and (max-width: 600px)"
  );
  const islargeScreen = useMediaQuery(
    "(min-width: 601px) and (max-width:900px)"
  );
  const isXlargeScreen = useMediaQuery(
    "(min-width: 900px) and (max-width:951px)"
  );
  const isXXlargeScreen = useMediaQuery(
    "(min-width: 951px) and (max-width:1200px)"
  );
  const isXXXlargeScreen = useMediaQuery("(min-width: 1250px) ");
  const style = {
    overflowY: "scroll ",
    display: "block",
    width: isSmallScreen
      ? "230%"
      : isMediumScreen
      ? "100%"
      : islargeScreen
      ? "100%"
      : isXlargeScreen
      ? "100%"
      : isXXlargeScreen
      ? "100%"
      : isXXXlargeScreen
      ? "85%"
      : "100%",
    margin: "5px auto",
    minHeight: { xs: "415px", sm: "320px", md: "580px", lg: "610px" },
    height: "100%",
    zIndex: "0",
    position: "absolute",
    top: "0%",
    right: "0.5px",
    transform: "scale(0.95)",
    borderWidth: "50px  0 0 0",
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: { xs: "20px", sm: "20px", md: "30px" },
  };
  return style;
};

export const SiteContent = {
  color: "transparent",
  position: "absolute",
  width: "100%",
  height: "auto",
  translate: "none",
  rotate: "none",
  scale: "none",
};
