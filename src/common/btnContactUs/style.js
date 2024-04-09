export const BoxStyle2 = (loadCount, theme) => {
  const style = {
    position: "fixed",
    display: loadCount ? "flex" : "none",
    top: "50%",
    left: 0,
    zIndex: 999,
  };
  return style;
};
export const ButtonStyle = {
  bgcolor: "Green",
  "&:hover": {
    bgcolor: "Green",
  },
  display: "flex",
  p: 1,
  color: "#fff",
};
