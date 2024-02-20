import React from "react";
import { Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import InitialCv2 from "./InitialCv2";
import InitialCv1 from "./InitialCv1";
import { BoxMainCvStyle, GridMainCvStyle } from "../style";
const MainCv = ({ avatar }) => {
  return (
    <>
      <motion.div
        transition={{ delay: 0.4, duration: 0.5 }}
        initial={{
          width: "0",
          opacity: 0,
          position: "absolute",
          left: "-200%",
        }}
        animate={{ width: "91%", opacity: avatar ? 1 : 0, left: 0 }}
      >
        <Box sx={BoxMainCvStyle}>
          <motion.div
            transition={{ delay: 0.7, duration: 0.8 }}
            initial={{
              width: "0",
              position: "absolute",
              left: "-200%",
            }}
            animate={{
              width: "100%",
              left: 0,
            }}
          >
            <Grid container sx={GridMainCvStyle}>
              <Grid xs={5} sm={3} md={3} mt={6}>
                <InitialCv1 />
              </Grid>
              <Grid xs={7} sm={7} mt={{ xs: 12, md: 6 }} pr={1}>
                <InitialCv2 />
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};

export default MainCv;
