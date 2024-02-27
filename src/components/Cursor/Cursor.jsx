import React from "react";
import { Box } from "@mui/material";

const Cursor = (props) => {
  return (
    <Box
      sx={{
        left: props.x,
        top: props.y,
        zIndex: 999,
        backgroundColor: "red !important",
        position: "absolute",
        borderRadius: " 100%",
        mixBlendMode: "difference",
        width: "32px",
        height: "32px",
        transform: "translate(-50%, -50%)",
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
