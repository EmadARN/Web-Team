export const Mobile_Box = {
  width: "100%",

  flexDirection: "column",
  alignItems: "space-evanly",

  display: { xs: "flex", md: "none" },
};

export const SteperMobileStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
};

export const StepMobileStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

export const TitleBox = (activeStep, index, theme) => {
  const S1 = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "70%",
    cursor: "pointer",
    alignItems: "center",
    color:
      (activeStep === index && theme !== "dark" && "#fff") ||
      (activeStep === index && theme === "dark" && "#111"),
    "&:hover": {
      backgroundColor:
        (activeStep !== index && theme === "dark" && "#888") ||
        (activeStep !== index && theme !== "dark" && "#1116"),

      "& .texthovermobile": {
        color:
          (activeStep === index && theme === "dark" && "#111") ||
          (activeStep !== index && theme === "dark" && "#fff") ||
          (activeStep !== index && theme !== "dark" && "#111"),
      },
    },
    backgroundColor:
      (activeStep === index && theme === "dark" && "#fff") ||
      (activeStep === index && theme !== "dark" && "#111"),

    p: 2,
  };

  return S1;
};

export const TitleMobiletypo = (activeStep, index, i18n) => {
  const S2 = {
    cursor: "pointer",
    whiteSpace: "nowrap",

    fontSize: "15px",
  };

  return S2;
};

export const DescTypo = (i18n) => {
  const s10 = {
    direction: i18n === "en" ? "ltr" : null,
    fontSize: "14px",
    fontWeight: "bold",
    m: 2,
  };

  return s10;
};

export const mobileIcon = {
  fontSize: "8px",
  ml: 1,
};

export const SubContentTypo = (i18n, theme) => {
  const SS = {
    color: theme === "dark" ? "#dddd" : "#1119",
    ml: i18n === "en" ? 1 : null,
  };

  return SS;
};
