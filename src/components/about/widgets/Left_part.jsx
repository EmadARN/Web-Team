import React from "react";
import { Box, Typography } from "@mui/material";
const Left_part = () => {
  return (
    <>
      <Box sx={{ pt: { xs: 3, md: 0 } }}>
        <Typography
          sx={{
            color: "#808080",
            textAlign: "justify",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            lineHeight: "30px",
            fontWeight: "bold",
            WebkitUserSelect: "none" /* Safari */,
            MsUserSelect: "none" /* IE 10 and IE 11 */,
            userSelect: "none" /* Standard syntax */,
          }}
        >
          ما یک تیم برنامه‌نویسی خلاق و ماهر متشکل از 6 نفر هستیم که به ارائه
          راه‌حل‌های نوآورانه و باکیفیت برای چالش‌های برنامه‌نویسی وب شما اختصاص
          یافته‌ایم. با استفاده از به‌روزترین فناوری‌ها و متدولوژی‌های توسعه،
          وب‌اپلیکیشن‌ها و وب‌سایت‌های سفارشی را طراحی و توسعه می‌دهیم که
          نیازهای منحصر به فرد شما را برآورده می‌کنند. ما به تعهد خود به ارائه
          خدمات باکیفیت و رضایت مشتری افتخار می‌کنیم. ما با شما برای درک کامل
          نیازهایتان همکاری می‌کنیم و راه‌حلی مقرون به صرفه و کارآمد ارائه
          می‌دهیم.
        </Typography>
      </Box>
    </>
  );
};

export default Left_part;
