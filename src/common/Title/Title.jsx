import React from "react";
import { Typography } from "@mui/material";
const Title = (props) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: "20px", md: "27px" },
        WebkitUserSelect: "none" /* Safari */,
        MsUserSelect: "none" /* IE 10 and IE 11 */,
        userSelect: "none" /* Standard syntax */,
      }}
      fontWeight="bold"
    >
      {props.title}
    </Typography>
  );
};

export default Title;
