import {Box, Container, Grid} from "@mui/material";

function SkillBox({item}){
    return(
        <>

            <Box sx={{width:"100px",height:"100px",backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                borderRadius:"50%",
                backgroundPosition: "center",
                fontSize:"10px",
                mt:"10"
            }}>

            </Box>

        </>
    )
}

export default SkillBox