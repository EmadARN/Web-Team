import React, { useContext, useState } from "react";
import { Box } from "@mui/material";

import { FirstBox } from "../style";

import { ThemeContext } from "@/context/ThemeContext";

import SteperComponent from "./SteperComponent";
import Left_Part_steper from "./Left_Part_steper";
const Services_titile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const { theme } = useContext(ThemeContext);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep >= 4) {
        setActiveStep(0);
      } else {
        setActiveStep(activeStep + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <>
      <Box sx={FirstBox}>
        
        <SteperComponent
          activeStep={activeStep}
          completed={completed}
          theme={theme}
          setActiveStep={setActiveStep}
        />

        <Box width="50%">
          <Left_Part_steper activeStep={activeStep} theme={theme} />
        </Box>
      </Box>
    </>
  );
};

export default Services_titile;
