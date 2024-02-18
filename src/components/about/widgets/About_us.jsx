import React from "react";
import { Grid, Box, Typography } from "@mui/material";
const About_us = () => {
  return (
    <Grid container width="80%" sx={{backgroundColor:"#252525",py:4,px:3,borderRadius:"20px"}}>
     
      <Grid item width="50%">
        <Box>animation</Box>
      </Grid>




      <Grid display="flex" flexDirection="column" width="50%">
        <Box>
          <Typography sx={{color:"#1895D2" ,fontSize:"20px"}}>درباره ما</Typography>
        </Box>

        <Box>
          <Typography sx={{color:"#808080",textAlign:"justify",fontSize:"15px"}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About_us;
