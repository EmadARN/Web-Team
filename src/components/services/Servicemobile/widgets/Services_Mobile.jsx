import React, { useContext, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { FirstBox, SteperStyle } from "../../ServiceComputer/style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { services } from "../../../services/ServiceComputer/data";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import {
  DescTypo,
  Mobile_Box,
  StepMobileStyle,
  SteperMobileStyle,
  SubContentTypo,
  TitleBox,
  TitleMobiletypo,
  mobileIcon,
} from "../style";
import { ThemeContext } from "@/context/ThemeContext";
import { Trans } from "react-i18next";
const Services_Mobile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = React.useState({});
  const handleStep = (step) => {
    setActiveStep(step);
  };
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

  const { i18n } = useTranslation();
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
                sx={TitleBox(index, activeStep, theme)}
                onClick={() => handleStep(index)}
              >
                <Typography
                  className="texthovermobile"
                  sx={TitleMobiletypo(activeStep, index)}
                >
                  <Trans i18nKey={item.servicesnumber}>{item.title}</Trans>
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
                  <Box width="100%" display="flex" justifyContent="center">
                    {" "}
                    <Lottie
                      style={{ width: item.width }}
                      animationData={item.img}
                    />
                  </Box>
                  <Typography sx={DescTypo(i18n.language)}>
                    <Trans i18nKey={item.servicesTitle}>{item.desc}</Trans>
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    flexDirection="column"
                    sx={{ mr: 2 }}
                  >
                    {item.content.map((cont) => {
                      return (
                        <Box
                          display="flex"
                          alignItems="center"
                          mb={3}
                          sx={{
                            direction: i18n.language === "en" ? "ltr" : null,
                          }}
                        >
                          <Brightness1Icon sx={mobileIcon} />
                          <Typography sx={SubContentTypo(i18n.language, theme)}>
                            <Trans i18nKey={cont.ServicesContentPart}>
                              {cont.subcontent}
                            </Trans>
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
