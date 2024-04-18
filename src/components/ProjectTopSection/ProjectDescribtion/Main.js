import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { TypoStyle } from "../Style";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const PrjDescMain = ({ resumeList }) => {
  return (
    <Grid display="flex" justifyContent="space-between" position="relative">
      <Grid
        display="flex"
        flexDirection="column"
        px={2}
        sx={{
          WebkitUserSelect: "none" /* Safari */,
          MsUserSelect: "none" /* IE 10 and IE 11 */,
          userSelect: "none" /* Standard syntax */,
        }}
      >
        <Box mb={2}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "17px", md: "22px" } }}
          >
            درباره پروژه
          </Typography>
        </Box>

        <Box mb={2}>
          <Typography sx={{ fontSize: { xs: "23px", md: "35px" } }}>
            {resumeList.title}
          </Typography>
        </Box>

        <Box mb={2} sx={TypoStyle}>
          <Typography textAlign="justify" flexWrap="wrap">
            {resumeList.description}
          </Typography>
        </Box>

        <Box>
          <Link target="_blank" href={resumeList.link}>
            <Button
              endIcon={<ArrowOutwardIcon sx={{ mr: 2 }} />}
              sx={{
                border: "1px solid #111",
                color: "#111",
                fontSize: "17px",
                backgroundColor: "transparent",
                px: 1,
                borderRadius: "10px",
                transition: "all ease 0.5s",
                "&:hover": { color: "#fff", backgroundColor: "#111" },
              }}
            >
              مشاهده وبسایت
            </Button>
          </Link>
        </Box>
      </Grid>
      <Link href="/">
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            width: "15%",
            top: 0,
            left: 0,
            bgcolor: "#1b1b1b",
            "&:hover": {
              bgcolor: "#1b1b1b",
            },
          }}
        >
          بازگشت <KeyboardArrowLeftIcon />
        </Button>
      </Link>
    </Grid>
  );
};

export default PrjDescMain;
