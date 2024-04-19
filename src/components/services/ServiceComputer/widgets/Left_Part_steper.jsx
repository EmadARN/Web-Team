import React from "react";
import { desc_typo, subcontentTypo } from "../style";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { services } from "../data";
import Lottie from "lottie-react";
import { Trans } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const Left_Part_steper = ({ activeStep, theme }) => {
  const { i18n } = useTranslation();
  return (
    <>
      {services.map((item, index) => {
        if (activeStep === index) {
          return (
            <Box key={item.id} display="flex" flexDirection="column">
              <Typography sx={desc_typo(i18n.language)}>
                <Trans i18nKey={item.servicesTitle}>{item.desc}</Trans>
              </Typography>

              <Box
                display="flex"
                justifyContent="space-evenly"
                flexDirection="column"
              >
                {item.content.map((cont) => {
                  return (
                    <Box
                      key={cont.id}
                      display="flex"
                      alignItems="center"
                      mb={1}
                      sx={{ direction: i18n.language === "en" ? "ltr" : null }}
                    >
                      <Brightness1Icon
                        sx={{
                          fontSize: "8px",
                          ml: 1,
                          mr: i18n.language === "en" ? 2 : null,
                        }}
                      />
                      <Typography sx={subcontentTypo(theme, i18n.language)}>
                        <Trans i18nKey={cont.ServicesContentPart}>
                          {cont.subcontent}
                        </Trans>
                      </Typography>
                    </Box>
                  );
                })}
              </Box>

              <Box width="70%">
                <Lottie
                  style={{ width: item.width }}
                  animationData={item.img}
                />
              </Box>
            </Box>
          );
        }
      })}
    </>
  );
};

export default Left_Part_steper;
