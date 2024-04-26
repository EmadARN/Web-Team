import { styled } from "@mui/material";
export const FirstBox = {
  width: "100%",
  display: { xs: "none", md: "flex" },
  justifyContent: "space-evenly",
  height: "70vh",
  m: 2,
};

export const steper_box = (theme, index, activeStep) => {
  const MyS = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "70%",
    cursor: "pointer",
    alignItems: "center",
    "&:hover": {
      backgroundColor:
        (activeStep !== index && theme === "dark" && "#888") ||
        (activeStep !== index && theme !== "dark" && "#1116"),

      "& .texthover": {
        color:
          (activeStep === index && theme === "dark" && "#111") ||
          (activeStep !== index && theme === "dark" && "#fff"),
      },
    },
    backgroundColor:
      (activeStep === index && theme === "dark" && "#fff") ||
      (activeStep === index && theme !== "dark" && "#111"),
    p: 1,
  };

  return MyS;
};

export const desc_typo = (i18n) => {
  const S = {
    direction: i18n === "en" ? "ltr" : null,
    ml: i18n === "en" ? 2 : null,
    fontSize: { xs: "13px", md: "20px", fontWeight: "bold" },
    mb: 2,
  };

  return S;
};

export const SteperStyle = {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  height: "80%",
  width: "50%",
};

export const subcontentTypo = (theme, i18n) => {
  const S6 = {
    direction: "ltr",
    color: theme === "dark" ? "#dddd" : "#1119",
  };
  return S6;
};

export const Btn6 = styled("button")(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  textDecoration: "none",
  p: 2,
  display: "flex",
  justifyContent: "space-evenly",
  width: "70%",
  cursor: "pointer",
  alignItems: "center",
  border: "1px solid transparent",
  WebkitTransition: "all 0.4s cubic-bezier(.5, .24, 0, 1) !important",
  transition: "all 0.4s cubic-bezier(.5, .24, 0, 1)",
  "&:before": {
    content: `""`,
    position: "absolute",
    left: "0px",
    bottom: "0px",
    zIndex: "-1",
    width: "0%",
    height: "1px",
    background: "#6098FF",
    boxShadow: "inset 0px 0px 0px #6098FF",
    display: "block",
    WebkitTransition: "all 0.4s cubic-bezier(.5, .24, 0, 1) !important",
    transition: " all 0.4s cubic-bezier(.5, .24, 0, 1)",
  },
  "&:hover:before": {
    width: "100%",
  },

  "&:after:": {
    content: `""`,
    position: "absolute",
    right: "0px",
    top: "0px",
    zIndex: "-1",
    width: " 0%",
    height: "1px",
    background: " #6098FF",
    WebkitTransition: "all 0.4s cubic-bezier(.5, .24, 0, 1) !important",
    transition: "all 0.4s cubic-bezier(.5, .24, 0, 1)",
  },
  "&:hover:after": {
    width: "100%",
  },
  "&:hover": {
    borderLeft: "1px solid #6098FF",
    borderRight: "1px solid #6098FF",
  },
}));
