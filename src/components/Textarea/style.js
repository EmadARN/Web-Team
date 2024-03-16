import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

//TextArea
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `

    width:100%;
    height:150px !important;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
   
    border-radius: 3px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[600]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#F0F0F0"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

  

    &:focus {
      border-color: #9fc4fc;
 
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

//InformationUs
export const InformationUsTypography = {
  display: "flex",
  alignItems: "center",
  fontWeight: "600",
};

export const InformationUsSpan = {
  backgroundColor: "#DB4444",
  borderRadius: "50%",
  margin: "0 15px 5px 0",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const spanStyles = {
  paddingRight: "10px",
  fontSize: "16px",
  WebkitUserSelect: "none" /* Safari */,
  MsUserSelect: "none" /* IE 10 and IE 11 */,
  userSelect: "none" /* Standard syntax */,
};
//ContactForm
export const ContactFormTextField = {
  "& .css-batk84-MuiInputBase-root-MuiFilledInput-root::after": {
    borderColor: "red",
  },
  width: { sm: "100%", xs: "100%" },
};
export const BtnContactFormStyles = {
  float: "right",
  mr: 1,
  fontWeight: "bold",
};
//ContactForm && InformationUs
export const InformationUsTypography2 = {
  WebkitUserSelect: "none" /* Safari */,
  MsUserSelect: "none" /* IE 10 and IE 11 */,
  userSelect: "none" /* Standard syntax */,
};
