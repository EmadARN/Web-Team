import backToUp from "@/utils/BackToUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Btn, BtnStyle } from "./style";
import { ThemeContext } from "@/context/ThemeContext";

const BackToUp = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Btn sx={BtnStyle(theme)} onClick={() => backToUp()}>
        <ArrowUpwardIcon fontSize="12px" /> {t("backtotop")}
      </Btn>
    </div>
  );
};

export default BackToUp;
