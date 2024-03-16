import { Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Trans } from "react-i18next";
import {
  BoxStyle1_initialCv1,
  BoxStyle2_initialCv1,
  BoxStyle3_initialCv1,
  BoxStyle4_initialCv1,
  GitHubIcon_initialCv1,
  Icon_initialCv1,
  LinkedInIcon_initialCv1,
  TypographyStyle1_initialCv1,
  TypographyStyle2_initialCv1,
  TypographyStyle3_initialCv1,
  TypographyStyle5_initialCv1,
  TypographyStyle7_initialCv1,
  TypographyStyle8_initialCv1,
  TypographyStyleBoth_initialCv1,
} from "../style";
const InitialCv1 = ({ item, theme }) => {
  return (
    <>
      <Box key={item.id} sx={BoxStyle1_initialCv1}>
        <Box sx={BoxStyle2_initialCv1}>
          <Box>
            <Typography sx={TypographyStyle1_initialCv1(theme)}>
              <Trans i18nKey={item.skillname}> {item.name}</Trans>
            </Typography>
            <Typography sx={TypographyStyle2_initialCv1(theme)}>
              <Trans i18nKey={item.Ourskiljob}> {item.job}</Trans>
            </Typography>
            <Box sx={BoxStyle3_initialCv1}>
              <Link target="_blank" href={item.linkdien}>
                <LinkedInIcon sx={LinkedInIcon_initialCv1} />
              </Link>
              <Link target="_blank" href={item.github}>
                <GitHubIcon sx={GitHubIcon_initialCv1} />
              </Link>
            </Box>
          </Box>
        </Box>

        <Box sx={BoxStyle4_initialCv1}>
          <Typography sx={TypographyStyle3_initialCv1(theme)}>
            <DateRangeIcon sx={Icon_initialCv1} />
            <Typography sx={TypographyStyleBoth_initialCv1}>
              <Trans i18nKey={item.Ourskillyear}>{item.year}</Trans>
            </Typography>
          </Typography>
          <Typography sx={TypographyStyle5_initialCv1(theme)}>
            <LocationOnIcon sx={Icon_initialCv1} />
            <Typography sx={TypographyStyleBoth_initialCv1}>
              <Trans i18nKey={item.Ourskillplace}></Trans>
            </Typography>
          </Typography>
          <Typography sx={TypographyStyle7_initialCv1(theme)}>
            <EmailIcon sx={Icon_initialCv1} />
            <Typography sx={TypographyStyle8_initialCv1}>
              {item.email}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default InitialCv1;
