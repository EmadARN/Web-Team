import { whitespace } from "stylis";

export const InputStyle = {
  input: {
    color: "#111",
    direction: "rtl",
    pr: 2,
    background: "#fff",
    borderRadius: "10px",
    fontSize:"12px"
  },
  label: { color: "#111", fontSize: "12px" },
  "& label.Mui-focused": {
    color: "#9fc4fc",
    fontWeight: "bold",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#9fc4fc",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9fc4fc",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9fc4fc",
    },
  },
};

export const RightGrid = {
  bgcolor: "#393E46",
  p: 3,
  width: { xs: "100%", md: "60%" },
  borderRadius:"0 20px 20px 0"
};

export const LeftGrid = {
  bgcolor: "#2E2E38",
  p: 3,
  width: {md:"40%",lg:"30%"},
  display: { xs: "none", md: "block" },
  borderRadius:"20px 0 0 20px",
  
};

export const ContactUsTypography = {
  fontSize: { xs: "15px", md: "23px" },
  color: "#fff",
  fontWeight: "bold",
};

export const T1 = {
  fontSize: { xs: "12px", md: "17px" },
  color: "#fff",
  marginLeft: { xs: 1, md: 0 },
  whitespace: "nowrap",
};

export const sendticketButton = {
  backgroundColor: "#00ADB5",
  color: "#fff",
  borderRadius: "7px",

  px: 3,
  "&:hover": { backgroundColor: "#81d8db" },
};

export const iconStyle = {
  fontSize: {xs:"15px",md:"20px"},
  color: "#81d8db",
};
