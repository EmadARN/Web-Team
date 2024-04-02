import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { services } from "../data";
import { SteperStyle, steper_box } from "../style";
import { Box, Typography } from "@mui/material";
import { Trans } from "react-i18next";
const SteperComponent = ({ activeStep, completed,theme,setActiveStep }) => {
  const handleStep = (step) => {
    setActiveStep(step);
  };
  return (
    <Stepper
      nonLinear
      activeStep={activeStep}
      orientation="vertical"
      sx={SteperStyle}
    >
      {services.map((item, index) => (
        <Step sx={{ width: "100%" }} key={item.id} completed={completed[index]}>
          <Box
            color="inherit"
            sx={steper_box(theme, index, activeStep)}
            onClick={() => handleStep(index)}
          >
            <Typography
              sx={{
                cursor: "pointer",
                whiteSpace: "nowrap",
                color:
                  (activeStep == index && theme === "dark" && "#111") ||
                  (activeStep == index && theme !== "dark" && "#fff") ||
                  (activeStep !== index && theme === "dark" && "#8E96A0"),

                fontSize: { xs: "15px", md: "19px" },
              }}
            >
              <Trans i18nKey={item.servicesnumber}>{item.title}</Trans>
            </Typography>
          </Box>
        </Step>
      ))}
    </Stepper>
  );
};

export default SteperComponent;
