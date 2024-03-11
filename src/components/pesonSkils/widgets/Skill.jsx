import {Box, Container, Grid} from "@mui/material";

function SkillBox({item}){
    return(
        <>

            <Box sx={{width:"80px",height:"80px",backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                borderRadius:"50%",
                backgroundPosition: "center",
            mr:5
        
            }}>

            </Box>

        </>
    )
}

export default SkillBox