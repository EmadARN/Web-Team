export const BoxStyle1 = { display: "flex", justifyContent: "center" };
export const BoxStyle2 = (theme) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: theme === "dark" ? "#1119" : "rgba(84,84,84,0.1)",
    width: "100%",
    py: 2,
    whiteSpace: { xs: "wrap", sm: "nowrap" },
    borderRadius: 1,
  };
  return style;
};
export const TypographyStyle1 = (theme) => {
  const style = {
    px: { xs: 1, sm: 2, md: 3 },
    fontSize: { xs: "12px", md: "16px" },
    color: theme === "dark" ? "#ddd" : "#1119",
    WebkitUserSelect: "none" /* Safari */,
    MsUserSelect: "none" /* IE 10 and IE 11 */,
    userSelect: "none" /* Standard syntax */,
  };
  return style;
};
