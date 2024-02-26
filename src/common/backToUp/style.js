import { styled } from "@mui/material";
export const Btn = styled("button")(({ theme }) => ({
  padding: "0.6em 1em",
  border: "none",
  outline: "none",
  color: " rgb(255, 255, 255)",
  background: "#111",
  cursor: "pointer",
  position: "relative",
  zIndex: 0,
  borderRadius: "10px",
  "&:before": {
    content: `""`,
    background:
      "linear-gradient(45deg, #00ffd5, #002bff, #7a00ff, #ff00c8, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    backgroundSize: "400%",
    zIndex: " -1",
    filter: " blur(5px)",
    width: "calc(100% + 4px)",
    height: " calc(100% + 4px)",
    animation: " glowingbn5 20s linear infinite",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    borderRadius: " 10px",
  },

  "@keyframes glowingbn5": {
    "0%": {
      backgroundPosition: "0 0",
    },
    " 50%": {
      backgroundPosition: "400% 0",
    },
    "100%": {
      backgroundPosition: "0 0",
    },
  },
  "&:after": {
    zIndex: -1,
    content: `""`,
    position: "absolute",
    width: "100%",
    height: "100%",
    background: " #191919",
    left: 0,
    top: 0,
    borderRadius: "10px",
  },
  "&:active": {
    color: "#000",
  },
  "&:active:after": {
    background: "transparent",
  },
  "&:hover:before ": {
    opacity: 1,
  },
}));
