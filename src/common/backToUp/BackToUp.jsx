import backToUp from "@/utils/BackToUp";
import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Btn, BtnStyle } from "./style";
import { ThemeContext } from "@/context/ThemeContext";

const BackToUp = () => {

  const {t} = useTranslation()
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Btn sx={BtnStyle(theme)} onClick={() => backToUp()}>
        <AiOutlineArrowUp /> {t('backtotop')}
      </Btn>
    </div>
  );
};

export default BackToUp;
