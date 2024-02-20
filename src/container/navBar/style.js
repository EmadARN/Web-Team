export const BoxStyle1 = { display: "flex", justifyContent: "center" };
export const BoxStyle2 = (loadCount) => {
  const style = {
    position: "fixed",
    display: loadCount ? "flex" : "none",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
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
export const TypographyStyle1 = {
  px: { xs: 1, sm: 2, md: 3 },
  fontSize: { xs: "12px", md: "16px" },
  color: "#ddd",
  WebkitUserSelect: "none" /* Safari */,
  MsUserSelect: "none" /* IE 10 and IE 11 */,
  userSelect: "none" /* Standard syntax */,
  cursor: "pointer",
};
