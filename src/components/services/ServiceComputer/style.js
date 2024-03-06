import { styled } from "@mui/material";
export const FirstBox = {
  width: "100%",
  display: { xs: "none", md: "flex" },
  justifyContent: "space-evenly",

  m: 2,
};

export const SteperStyle = {
  display: "flex",
  alignItems: "start",
  justifyContent: "center",

height:"100%",


  width: "50%",
};


export const subcontentTypo =(theme)=>{
  color:theme ==="dark" ? "#dddd":"#1116" 
}

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

//   .btn6:hover::before {
//     width:100%;
//   }

//   .btn6::after {
//     content: '';
//     position: absolute;
//     right: 0px;
//     top:0px;
//     z-index:-1;
//     width: 0%;
//     height:1px;
//     background: #6098FF;
//     -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
//     transition: all 0.4s cubic-bezier(.5, .24, 0, 1)
//   }
//   .btn6:hover::after {
//     width:100%;
//   }
//   .btn6:hover{
//     border-left:1px solid #6098FF;
//     border-right:1px solid #6098FF;
//   }
