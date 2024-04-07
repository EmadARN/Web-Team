import { Box } from "@mui/material";

function SkillBox({ item }) {
  return (
    <>
      <>
        <Box
          sx={{
            width: "80px",

            height: "80px",
            backgroundImage: `url(${item.icon})`,
            backgroundSize: "cover",
            borderRadius: "50%",
            backgroundPosition: "center",
            mr: 3,
          }}
        ></Box>
      </>
    </>
  );
}

export default SkillBox;
