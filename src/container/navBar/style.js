export const BoxStyle1 = { display: "flex", justifyContent: "center" };
export const BoxStyle2 = (loadCount, theme) => {
  const style = {
    position: "fixed",
    display: loadCount ? "flex" : "none",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(84,84,84,0.1)",
    mixBlendMode: "difference",
    color: "#ddd",
    WebkitBackdropFilter: "blur(8px) !important",
    backdropFilter: {
      xs: "blur(8px)",
      md: "blur(10px)",
    },
    width: { xs: "90%", sm: "50%" },
    py: 2,
    whiteSpace: { xs: "wrap", sm: "nowrap" },
    borderRadius: 1,
    zIndex: 999,
  };
  return style;
};
export const TypographyStyle1 = (theme) => {
  const style = {
    px: { xs: 1, sm: 2, md: 3 },
    fontSize: { xs: "12px", md: "16px", lg: "18px" },
    letterSpacing: "-0.025em",
    WebkitUserSelect: "none" /* Safari */,
    MsUserSelect: "none" /* IE 10 and IE 11 */,
    userSelect: "none" /* Standard syntax */,
    cursor: "pointer",
  };

  return style;
};
