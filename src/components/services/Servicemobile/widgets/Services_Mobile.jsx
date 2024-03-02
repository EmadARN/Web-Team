import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { FirstBox, SteperStyle } from "../../ServiceComputer/style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { services } from "../../../services/ServiceComputer/data";
import Lottie from "lottie-react";
import { DescTypo, Mobile_Box, StepMobileStyle, SteperMobileStyle, TitleBox, TitleMobiletypo, mobileIcon } from "../style";

const Services_Mobile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const handleStep = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={Mobile_Box}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          sx={SteperMobileStyle}
        >
          {services.map((item, index) => (
            <Step
              sx={StepMobileStyle}
              key={item.id}
              completed={completed[index]}
            >
              <Box
                color="inherit"
                sx={
                TitleBox(index,activeStep)
                }
                onClick={() => handleStep(index)}
              >
                <Typography
                  sx={
                    TitleMobiletypo
                  }
                >
                  {item.title}
                </Typography>
              </Box>
            </Step>
          ))}
        </Stepper>

        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          {services.map((item, index) => {
            if (activeStep === index) {
              return (
                <Box display="flex" flexDirection="column">
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                   
                  >
                    {" "}
                    <Lottie style={{ width: "70%" }} animationData={item.img} />
                  </Box>
                  <Typography
                    sx={
                        DescTypo
                    }
                  >
                    {item.desc}
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    flexDirection="column"
                    sx={{ mr: 2 }}
                  >
                    {item.content.map((cont) => {
                      return (
                        <Box display="flex" alignItems="center" mb={5}>
                          <Brightness1Icon sx={mobileIcon} />
                          <Typography sx={{ color: "#dddd" }}>
                            {cont.subcontent}
                          </Typography>
                        </Box>
                      );
                    })}
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

export default Services_Mobile;
