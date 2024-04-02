import React from 'react'
import { desc_typo , subcontentTypo,} from '../style';
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { services } from '../data'
import Lottie from "lottie-react";
import { Trans } from "react-i18next";
import { Box, Typography } from "@mui/material";
const Left_Part_steper = ({activeStep,theme}) => {
 return(
    <>
    {services.map((item, index) => {
        if (activeStep === index) {
          return (
            <Box display="flex" flexDirection="column">
              <Typography sx={desc_typo}>
                <Trans i18nKey={item.servicesTitle}>{item.desc}</Trans>
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
                      <Typography sx={subcontentTypo(theme)}>
                        <Trans i18nKey={cont.ServicesContentPart}>
                          {cont.subcontent}
                        </Trans>
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
</>
 )
    }

export default Left_Part_steper