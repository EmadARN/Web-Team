//Main
export const GridMainStyle = (theme) => {
  const style = {
    bgcolor: theme == "dark" ? "#1116" : "#f0fffd",
    position: "relative",
    overflow: "hidden",
    height: { xs: "80vh", sm: "90vh", md: "115vh", lg: "100vh" },
    // opacity: 1,
    // transform: "scale(0)",
  };

  return style;
};
//Drawer
export const TypographyStyle = (avatar, theme) => {
  const style = {
    display: "flex",
    filter: avatar ? "blur(2px)" : null,
    justifyContent: "center",
    alignItems: "center",
    color: theme === "dark" ? "#f0fffd" : "#1116",
    width: "100%",
    height: "100vh",
    position: "absolute",
    fontSize: { xs: "22px", md: "30px" },
  };
  return style;
};
export const GridDrawerStyle = {
  boxShadow:
    "rgba(6, 24, 44, 0.8) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
};
export const BoxDrawerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const avatarStyle = (avatar, selectedAvatar, item) => {
  const style = {
    borderRadius: "50%",
    cursor: "pointer",
    border: item === selectedAvatar ? "2px solid #a10000" : null,
    mb: !avatar ? 4 : 4.7,
    mt: 1,
    transition: "all .6s ease",
    width: !avatar ? { xs: "45px", sm: "55px" } : { xs: "38px", sm: "48px" },
    height: !avatar ? { xs: "45px", sm: "55px" } : { xs: "38px", sm: "48px" },
  };
  return style;
};
export const imgDrawerStyle = {
  backgroundColor: "transparent",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundPosition: "center !important",
  backgroundSize: "contain",

  justifyContent: "center",
};

//MainCv
export const BoxMainCvStyle = {
  backgroundImage: ` url(images/CircuitPrimary.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  height: { xs: "80vh", sm: "90vh", md: "115vh", lg: "100vh" },
  width: { xs: "90%", sm: "100%" },
  position: "absolute",
  left: 0,
};
export const GridMainCvStyle = {
  color: "#f0fffd",
  justifyContent: { xs: "flex-start", md: "center" },
};
//initialCv1
export const BoxStyle1_initialCv1 = (theme) => {
  const style = {
    height: {
      xs: "34vh",
      sm: "50vh",
      md: "60vh",
      lg: "60vh",
    },
    position: "relative",
    backgroundColor:
      theme == "dark" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.5)",
    WebkitBackdropFilter: "blur(8px) !important",
    backdropFilter: { xs: "blur(8px)", md: "blur(10px)" },
    borderRadius: "15px",

    "&:hover": {
      bgcolor: "none",
    },
  };
  return style;
};
export const BoxStyle2_initialCv1 = {
  borderRadius: "15px 15px 0 0 ",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgba(255,255,255,0.1)",
  WebkitBackdropFilter: "blur(8px) !important",
  backdropFilter: {
    xs: "blur(8px)",
    md: "blur(10px)",
  },
  height: {
    xs: "45%",
    sm: "50%",
    md: "40%",
    lg: "48%",
  },
  "&:hover": {
    bgcolor: "none",
  },
};

export const BoxStyle3_initialCv1 = {
  display: "flex",
  justifyContent: "center",
  pt: 2,
};
export const LinkedInIcon_initialCv1 = {
  ml: 1,
  fontSize: {
    xs: "14px",
    sm: "15px",
    md: "17px",
  },
  color: "#122Bb9",
};
export const GitHubIcon_initialCv1 = {
  fontSize: {
    xs: "14px",
    sm: "14px",
    md: "17px",
  },
  color: "#000",
};
export const BoxStyle4_initialCv1 = {
  height: { xs: "75%", sm: "60%", md: "40%" },
  display: "flex",
  flexDirection: "column",
  pt: 2,
  pr: { xs: 0.5, sm: 2 },
};

export const Icon_initialCv1 = {
  ml: 1,
  fontSize: { xs: "8px", sm: "10px", md: "14px" },
};

export const TypographyStyle1_initialCv1 = (theme) => {
  const style = {
    color: theme === "dark" ? "#f0fffd" : "#1119",
    textAlign: "center",
    pt: 2,
    fontSize: {
      xs: "12px",
      sm: "18px",
      md: "22px",
    },
    whiteSpace: "nowrap",
  };
  return style;
};
export const TypographyStyle2_initialCv1 = (theme) => {
  const style = {
    color: theme === "dark" ? "#f0fffd" : "#1119",
    fontWeight: "bold",
    textAlign: "center",
    pt: 0.5,
    fontSize: { xs: "7px", sm: "9px", md: "10px" },
    whiteSpace: { xs: "wrap", sm: "nowrap" },
  };
  return style;
};
export const TypographyStyle3_initialCv1 = (theme) => {
  const style = {
    color: theme === "dark" ? "#f0fffd" : "#1119",
    display: "flex",
    alignItems: "center",
  };
  return style;
};
export const TypographyStyleBoth_initialCv1 = {
  fontSize: { xs: "8px", sm: "10px", md: "14px" },
  fontFamily: "Times New Roman !important",
};

export const TypographyStyle5_initialCv1 = (theme) => {
  const style = {
    color: theme === "dark" ? "#f0fffd" : "#1119",
    display: "flex",
    pt: 1,
    alignItems: "center",
  };
  return style;
};

export const TypographyStyle7_initialCv1 = (theme) => {
  const style = {
    color: theme === "dark" ? "#f0fffd" : "#1119",
    display: "flex",
    py: 1,
    alignItems: "center",
  };
  return style;
};
export const TypographyStyle8_initialCv1 = {
  fontSize: {
    xs: "7px",
    sm: "10px",
    md: "14px",
  },
  fontFamily: "Times New Roman !important",
};
//initialCv2
export const TypographyStyle1_initialCv2 = (theme) => {
  const style = {
    p: 1,
    color: theme === "dark" ? "#f0fffd" : "#1119",
    fontSize: { xs: "12px", md: "16px", xlg: "17px" },
  };
  return style;
};
export const TypographyStyle2_initialCv2 = (theme) => {
  const style = {
    textAlign: "justify",
    p: 1,
    fontSize: { xs: "10px", sm: "12px", md: "15px" },
    color: theme === "dark" ? "#f0fffd" : "#1119",
  };
  return style;
};
export const TypographyStyle3_initialCv2 = (theme) => {
  const style = {
    pb: 2,
    pt: 3,
    pr: 1,
    color: theme === "dark" ? "#f0fffd" : "#1119",
    fontSize: { xs: "12px", md: "16px", xlg: "17px" },
  };
  return style;
};
export const BoxStyle1_initialCv2 = (theme) => {
  const style = {
    height: { xs: "60vh", md: "88vh" },
    borderRadius: "15px",
    backgroundColor:
      theme == "dark" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.5)",
    WebkitBackdropFilter: "blur(8px) !important",
    backdropFilter: { xs: "blur(8px)", md: "blur(10px)" },
    "&:hover": {
      bgcolor: "none",
    },
  };
  return style;
};

export const BoxStyle2_initialCv2 = {
  height: { xs: "45%", sm: "48%", md: "35%" },
  backgroundColor: "rgba(255,255,255,0.1)",
  WebkitBackdropFilter: "blur(8px) !important",
  backdropFilter: {
    xs: "blur(8px)",
    md: "blur(10px)",
  },
  color: "#2228",
};

export const BoxStyle3_initialCv2 = {
  width: "100%",
  height: { xs: "30%", sm: "33%", md: "30%" },
  color: "#2228",
  backgroundColor: "rgba(255,255,255,0.1)",
  WebkitBackdropFilter: "blur(7px) !important",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: {
    xs: "blur(7px)",
    md: "blur(10px)",
  },
};
export const BoxStyle5_initialCv2 = (item) => {
  const style = {
    width: { xs: "28px", sm: "40px", md: "80px" },
    height: { xs: "28px", sm: "40px", md: "80px" },
    backgroundImage: `url(${item.icon})`,
    backgroundSize: "cover",
    borderRadius: "50%",
    backgroundPosition: "center",
    mr: 3,
  };
  return style;
};

export const SwiperStyle3_initialCv2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};
export const BoxStyle4_initialCv2 = { textAlign: "justify", p: 1 };
