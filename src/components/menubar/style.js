export const BtnOne = (theme) => {
  const style = {
    width: "30%",
    border: "1px solid #000",
    color: theme === "dark" ? "#f0fffd" : "#222",
    borderRadius: "0 10px 50px 0",
    fontWeight: "bold",
    boxShadow:"1px 3px 1px 0px #f0fffd"
  };
  return style;
};
export const BtnTwo = (theme) => {
  const style = {
    width: "35%",
    border: "1px solid #000",
    color: theme === "dark" ? "#efefef" : "#222",
    borderRadius: "0",
    fontWeight: "bold",

  };
  return style;
};
export const BtnThree = (theme) => {
  const style = {
    width: "30%",
    border: "1px solid #000",
    color: theme === "dark" ? "#efefef" : "#222",
    borderRadius: "50px 0 0 10px",
    fontWeight: "bold",
    boxShadow:"-1px -3px 1px 0px #ab00ff"
  };
  return style;
};

export const TypoSx = (theme) => {
  const style = {
    color: theme === "dark" ? "#efefef" : "#222222",
    fontWeight: "bold",
  };
  return style;
};

export const BtnFour = (theme) => {
  const style = {
    width: "47%",
    border: "1px solid #000",
    color: theme === "dark" ? "#efefef" : "#222",
    borderRadius: "50px 0 0 10px",
    fontWeight: "bold",
    boxShadow:"-2px -3px 1px 0px #f0fffd"
  };
  return style;
};
export const BtnFive = (theme,direction) => {
  const style = {

    direction:direction === "rtl" ? "ltr" : "rtl",
    width: "47%",
    border: "1px solid #000",
    color: theme === "dark" ? "#efefef" : "#222",
    borderRadius: "0 10px 50px 0",
    fontWeight: "bold",
    boxShadow:"-1px 2px 1px 1px #f0fffd"
  };
  return style;
};

export const drawerSx = (anchor) => {
  const style = {
    width: anchor === "top" || anchor === "bottom" ? "auto" : 330,
    m: 1,
  };
  return style;
};
export const TypoSxTow = (theme) =>{
  return {
    color: theme === "dark" ? "#efefef" : "#222222",
    fontWeight: "bold",
  };
}