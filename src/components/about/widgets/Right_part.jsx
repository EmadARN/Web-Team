import React from "react";
import Atropos from "atropos/react";
import { Grid } from "@mui/material";
import "atropos/css";
import Image from "next/image";
const Right_part = () => {
  return (
    <Grid display="flex" justifyContent="center" pt={2}>
      <Atropos
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

        {/* <img
          className="large"
          style={{
            width: "100%",
            aspectRatio: "2.4",
          }}
          src="/images/aboutPic.jpg"
          data-atropos-offset="5%"
          alt=""
        /> */}
      </Atropos>
    </Grid>
  );
};

export default Right_part;
