import { Box } from "@mui/material";

function SkillBox({ item }) {
  return (
    <>
      {item.skills.map((skill) => {
        return (
          <>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundImage: `url(${skill.icon})`,
                backgroundSize: "cover",
                borderRadius: "50%",
                backgroundPosition: "center",
                mr: 5,
              }}
            ></Box>
          </>
        );
      })}
    </>
  );
}

export default SkillBox;
