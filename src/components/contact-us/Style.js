import { Height } from "@mui/icons-material";

export const InputStyle={
       
    input: { color: "#111", direction: "rtl", pr: 2 ,background:"#fff",borderRadius:"10px"},
    label: { color: "#111" ,fontSize:'17px'},
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

    
}

export const RightGrid ={
  bgcolor: "#393E46", p: 3 ,width:"70%"
}

export const LeftGrid = {
  bgcolor: "#2E2E38", p: 3,width:'30%'
}

export const ContactUsTypography ={
  fontSize: "23px", color: "#fff", fontWeight: "bold"
}

export const T1 ={
   fontSize: "17px", color: "#fff" 
}

export const sendticketButton ={
  backgroundColor: "#00ADB5",
                color: "#fff",
                borderRadius: "7px",
                px: 3,
                "&:hover": { backgroundColor: "#81d8db" },
}

export const iconStyle ={
  fontSize: "20px", color: "#81d8db" 
}