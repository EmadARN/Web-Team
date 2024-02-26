import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { TypoStyle } from "../../ProjectInformation/Style";
const PrjDesc = () => {
  return (
    <Grid display="flex" flexDirection="column" px={2}>
      <Box mb={2}>
        <Typography>درباره پروژه</Typography>
      </Box>

      <Box mb={2}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "23px", md: "35px" } }}
        >
          پروژه خدماتی یار کار
        </Typography>
      </Box>

      <Box mb={2} sx={TypoStyle}>
        <Typography textAlign="justify" flexWrap="wrap">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </Typography>
      </Box>

      <Box>
        <Button
          endIcon={<ArrowOutwardIcon sx={{ mr: 2 }} />}
          sx={{
            border: "1px solid #111",
            color: "#111",
            fontSize: "17px",
            backgroundColor: "transparent",
            px: 1,
            borderRadius: "10px",
            transition: "all ease 0.5s",
            "&:hover": { color: "#fff", backgroundColor: "#111" },
          }}
        >
          مشاهده وبسایت
        </Button>
      </Box>
    </Grid>
  );
};

export default PrjDesc;
