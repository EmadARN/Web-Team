import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { FirstBox, SteperStyle } from "../style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { services } from "../../data";
import Lottie from "lottie-react";
const Services_titile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const handleStep = (step) => {
    setActiveStep(step);
  };
  return (
    <>
  
    <Box sx={FirstBox}>
    
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation="vertical"
        sx={SteperStyle}
      >
        {services.map((item, index) => (
          <Step
            sx={{ width: "100%" }}
            key={item.id}
            completed={completed[index]}
          >
            <Box
              color="inherit"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "70%",
                cursor: "pointer",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: activeStep !== index ? "#ddd" : "#fff",
                  opacity: activeStep !== index ? "0.1" : "none",
                },
                backgroundColor: activeStep === index ? "#fff" : "transparent",
                p: 2,
              }}
              onClick={() => handleStep(index)}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  color: activeStep == index ? "#111" : "#8E96A0",
                  fontSize: { xs: "15px", md: "23px" },
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Step>
        ))}
      </Stepper>

      <Box width="50%">
        {services.map((item, index) => {
          if (activeStep === index) {
            return (
              <Box display="flex" flexDirection="column">
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "23px", fontWeight: "bold" },
                    mb: 2,
                  }}
                >
                  {item.desc}
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  flexDirection="column"
                >
                  {item.content.map((cont) => {
                    return (
                      <Box display="flex" alignItems="center" mb={1}>
                        <Brightness1Icon sx={{ fontSize: "8px", ml: 1 }} />
                        <Typography sx={{ color: "#dddd" }}>
                          {cont.subcontent}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                <Box width="70%">
                  {" "}
                  <Lottie animationData={item.img} />
                </Box>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
    </>
  );
};

export default Services_titile;
