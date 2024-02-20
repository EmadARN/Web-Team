export const allStyle = {
  overflow: " hidden !important",
};
export const BoxStyle = (background) => {
  const style = {
    background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #0F2B9C, #EDFC54 )`,
    position: "relative",
    width: "100%",
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
      height: "100px",
      background: `linear-gradient(to top, #111, transparent)`,
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

export const undermoon = {
  zIndex: 1,
};
// export const ballon = {
//   top: "15%",
//   left: "0%",
//   zIndex: 4,
//   width: "22%",
//   maxHeight: "300px",
// };
// export const moonStyle = {
//   width: " 8%",
//   maxHeight: "80px",
//   top: "30%",
//   right: "28%",
//   zIndex: 2,
// };
// export const boatStyle = {
//   width: "30%",
//   maxHeight: "200px",
//   right: "0%",
//   top: "50%",
//   zIndex: 1,
// };
