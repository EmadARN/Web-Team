//left_part
export const typographyStyle =(i18n)=> {

  const S ={
    color: "#808080",
    textAlign: "justify",
    fontSize: { xs: "12px", sm: "14px", md: "16px" },
    lineHeight: "30px",
    fontWeight: "bold",
    WebkitUserSelect: "none" /* Safari */,
    MsUserSelect: "none" /* IE 10 and IE 11 */,
    userSelect: "none" /* Standard syntax */,
    direction:i18n === "en" ? "ltr" :"rtl"
  }

  return S

};
