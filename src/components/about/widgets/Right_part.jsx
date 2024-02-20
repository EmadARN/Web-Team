import React from "react";
import Atropos from "atropos/react";
import { Box, Grid } from "@mui/material";
import "atropos/css";
const Right_part = () => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Atropos
        style={{ width: "390px", height: "220px" }}
        onEnter={() => console.log("Enter")}
        onLeave={() => console.log("Leave")}
        onRotate={(x, y) => console.log("Rotate", x, y)}
        shadow={false}
        scaleClassName="large"
      >
        <img
          className="large"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "100%",
          }}
          src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/06/34_Builtin-1.png"
          data-atropos-offset="5%"
          alt=""
        />
      </Atropos>
    </Grid>
  );
};

export default Right_part;
