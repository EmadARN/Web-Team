export const CpMainGrid = {
  position: "relative",
  width: "50%",
  margin: 10,
  display: { xs: "none", md: "block" },
};

export const CpImage = {
  position: "absolute",
  color: "transparent",
  width: "100%",
  height: "auto",
  pointerEvents: "none",

  zIndex: "5",
  top: "0px",
  right: "0px",
};

export const CpInnerGrid = {
  overflowY: "scroll !important",
  "::-webkit-scrollbar": {
    width: "0px",
    height: "0px",
  },
  display: "block",
  width: "90%",
  paddingTop: "2rem",
  margin: "24px auto",
  paddingBottom: "1rem",
  height: "320px",
  zIndex: "6",
  position: "absolute",
  top: "40%",
  right: "5%",
};

export const SiteContent = {
  color: "transparent",
  width: "100%",
  height: "auto",
  translate: "none",
  rotate: "none",
  scale: "none",
};
