import React from "react";
import { Box } from "@mui/material";

const Cursor = (props) => {
  return (
    <Box
      sx={{
        left: props.x,
        top: props.y,
        backgroundColor: "red !important",
        position: "fixed",
        borderRadius: " 100%",
        mixBlendMode: "difference",
        width: "25px",
        height: "25px",
      }}
    ></Box>
  );
};

export default Cursor;
// const CursorPointer = styled.div.attrs((props) => ({
//   style: {
//     left: props.x,
//     top: props.y,
//   },
// }))`
//   z-index: 999;
//   background-color: white;
//   position: absolute;
//   border-radius: 100%;
//   mix-blend-mode: difference;
//   width: 32px;
//   height: 32px;
//   transform: translate(-50%, -50%);
// `;

// export default CursorPointer;
