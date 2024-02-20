import { Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";

const InitialCv1 = () => {
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "34vh",
            sm: "50vh",
            md: "60vh",
            lg: "60vh",
          },
          position: "relative",
          backgroundColor: "rgba(255,255,255,0.1)",
          WebkitBackdropFilter: "blur(8px) !important",
          backdropFilter: { xs: "blur(8px)", md: "blur(10px)" },
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            borderRadius: "15px 15px 0 0 ",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            WebkitBackdropFilter: "blur(8px) !important",
            backdropFilter: {
              xs: "blur(8px)",
              md: "blur(10px)",
            },
            height: {
              xs: "45%",
              sm: "50%",
              md: "40%",
              lg: "48%",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#2227",
                textAlign: "center",
                pt: 2,
                fontSize: {
                  xs: "12px",
                  sm: "18px",
                  md: "22px",
                },
                whiteSpace: "nowrap",
              }}
            >
              عماد عربان
            </Typography>
            <Typography
              sx={{
                color: "#2229",
                fontWeight: "bold",
                textAlign: "center",
                pt: 0.5,
                fontSize: { xs: "7px", sm: "9px", md: "10px" },
                whiteSpace: { xs: "wrap", sm: "nowrap" },
              }}
            >
              لیدر فرانت اند
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                pt: 2,
              }}
            >
              <Link href="#">
                <LinkedInIcon
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "17px",
                    },
                  }}
                />
              </Link>
              <Link href="#">
                <GitHubIcon
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "17px",
                    },
                  }}
                />
              </Link>
              <Link href="#">
                <TelegramIcon
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "17px",
                    },
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: { xs: "75%", sm: "60%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            pt: 2,
            pr: { xs: 0.5, sm: 2 },
          }}
        >
          <Typography
            sx={{
              color: "#111",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DateRangeIcon
              sx={{
                ml: 1,
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            >
              1378 15 ,مرداد
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#111",
              display: "flex",
              pt: 1,
              alignItems: "center",
            }}
          >
            <LocationOnIcon
              sx={{
                ml: 1,
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            >
              ایران, تهران
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#111",
              display: "flex",
              py: 1,
              alignItems: "center",
            }}
          >
            <EmailIcon
              sx={{
                ml: 1,
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: "7px",
                  sm: "10px",
                  md: "14px",
                },
              }}
            >
              arabanemad@gmail.com
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#111",
              display: "flex",
              alignItems: "center",
            }}
          >
            <PhoneAndroidIcon
              sx={{
                ml: 1,
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "14px" },
              }}
            >
              9104466400 98+
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default InitialCv1;
