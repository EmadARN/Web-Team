import React from "react";
import Atropos from "atropos/react";
import { Grid } from "@mui/material";
import "atropos/css";
const Right_part = () => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Atropos
        style={{ width: "390px", height: "180px" }}
        shadow={false}
        scaleClassName="large"
      >
        <img
          className="large"
          style={{
            width: "100%",
            aspectRatio: "2.4",
          }}
          src="/images/aboutPic.jpg"
          data-atropos-offset="5%"
          alt=""
        />
      </Atropos>
    </Grid>
  );
};

export default Right_part;
