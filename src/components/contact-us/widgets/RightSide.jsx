import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { InputStyle, T1, sendticketButton } from "../Style";
import { useTranslation } from "react-i18next";
import Textarea from "@/components/Textarea/Textarea";
import { textFields } from "../data";

const RightSide = ({ setOpenSnackbar }) => {
  const { t, i18n } = useTranslation();
  const [inpInfo, setInpInfo] = useState({});
  const resetForm = () => {
    setInpInfo({
      name: "",
      business_type: "",
      email: "",
      phone_number: "",
    });
  };

  const InputHandler = (e, propertyName) => {
    setInpInfo({ ...inpInfo, [propertyName]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    try {
      const response = await fetch(`${apiUrl}/ticket/send/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "http://localhost:3000",
        },
        body: JSON.stringify(inpInfo),
      });

      await response.json();
      resetForm();
      setOpenSnackbar(true);

      setInterval(() => {
        setOpenSnackbar(false);
      }, 3000);
    } catch (error) {}
  };
  return (
    <Box>
      <Box display="flex" flexDirection="column" mb={3}>
        <Typography sx={T1}>{t("contactus.RightTitle")}</Typography>
      </Box>

      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box display="flex" flexDirection="column" width="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            my={1.5}
          >
            {textFields(inpInfo).map((item) => {
              return (
                <>
                  <Box key={item.id} width="80%" mb={2}>
                    <TextField
                      size="small"
                      sx={InputStyle(i18n.language)}
                      label={t(item.label)}
                      id="outlined-basic"
                      variant="filled"
                      value={item.value}
                      name={item.name}
                      fullWidth
                      onChange={(e) => InputHandler(e, item.onChange)}
                    />
                  </Box>
                </>
              );
            })}
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width="80%">
              <Textarea
                name="message"
                onChange={(e) => InputHandler(e, "message")}
                i18n={i18n.language}
              />
            </Box>
          </Box>
          <Box textAlign="center" mt={2}>
            <Button sx={sendticketButton} onClick={(e) => submit(e)}>
              {t("contactus.button")}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default RightSide;
