import { Directions } from "@mui/icons-material";

export const InputStyle = (i18n) => {
  const Styleinput = {
    input: {
      color: "#111",
      textAlign: i18n == "fa" ? "right" : "left",
      pr: 2,
      background: "#fff",
      borderRadius: "3px",
      fontSize: "14px",
    },
    label: {
      color: "#0009",
      fontSize: { xs: "14px", md: "16px", lg: "18px" },
      width: "130%",
      textAlign: i18n == "fa" ? "right" : "left",
    },

    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#101c60",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  };

  return Styleinput;
};

export const RightGrid = (theme) => {
  const S3 = {
    backgroundColor: theme === "dark" ? "#393E46" : "#417482",
    p: 3,
    width: { xs: "100%", md: "50%" },
    borderRadius: { xs: "none", md: "0 20px 20px 0" },
  };

  return S3;
};

export const LeftGrid = (theme) => {
  const S4 = {
    bgcolor: theme === "dark" ? "#2E2E38" : "#2e5066",
    p: 3,
    width: { md: "40%", lg: "40%" },
    display: { xs: "none", md: "block" },
    borderRadius: { xs: "none", md: "20px 0 0 20px" },
  };

  return S4;
};

export const ContactUsTypography = {
  fontSize: { xs: "15px", md: "20px" },
  color: "#fff",
  fontWeight: "bold",
};

export const T1 = {
  fontSize: { xs: "8px", sm: "13px", md: "18px" },
  fontWeight: "bold",
  color: "#fff",
  marginLeft: { xs: 1, md: 0 },
  whitespace: "nowrap",
  fontFamily: "Times New Roman !important",
  textAlign: "center",
  pt: 0.5,
};

export const sendticketButton = {
  backgroundColor: "#00ADB5",
  color: "#fff",
  borderRadius: "7px",

  px: 3,
  "&:hover": { backgroundColor: "#81d8db" },
};

export const iconStyle = {
  fontSize: { xs: "10px", sm: "16px", md: "20px" },
  color: "#81d8db",
  mr: 2,
};
