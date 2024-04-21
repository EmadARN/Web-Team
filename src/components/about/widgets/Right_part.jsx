import React from "react";
import Atropos from "atropos/react";
import { Box, Grid } from "@mui/material";
import "atropos/css";
import Lottie from "lottie-react";
import animationData from "../../../assets/Animation - 1713697802685.json";
import Image from "next/image";
const Right_part = () => {
  return (
    <Grid display="flex" justifyContent="center" mt={{xs:-5,md:-12}}  >
      <Box sx={{p:{xs:3,sm:4,md:6}}}>
      <Lottie animationData={animationData} />
      </Box>
      {/* <Atropos
        style={{ width: "390px", height: "180px" }}
        shadow={false}
        scaleClassName="large"
      >
        <Image
          className="large"
          style={{
            width: "100%",
            aspectRatio: "2.4",
          }}
          src={"/images/aboutPic.jpg"}
          data-atropos-offset="5%"
          alt=""
          width={700}
          height={150}
        ></Image>

       
      </Atropos> */}
    </Grid>
  );
};

export default Right_part;
