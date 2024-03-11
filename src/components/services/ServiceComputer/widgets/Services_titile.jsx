import React, { useContext, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import {
  FirstBox,
  SteperStyle,
  desc_typo,
  steper_box,
  subcontentTypo,
} from "../style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { services } from "../data";
import Lottie from "lottie-react";
import { ThemeContext } from "@/context/ThemeContext";
const Services_titile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const { theme } = useContext(ThemeContext);
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
                  <Typography sx={desc_typo}>{item.desc}</Typography>

                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    flexDirection="column"
                  >
                    {item.content.map((cont) => {
                      return (
                        <Box display="flex" alignItems="center" mb={1}>
                          <Brightness1Icon sx={{ fontSize: "8px", ml: 1 }} />
                          <Typography sx={subcontentTypo(theme)}>
                            {cont.subcontent}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>

                  <Box width="70%">
                    {" "}
                    <Lottie
                      style={{ width: item.width }}
                      animationData={item.img}
                    />
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
