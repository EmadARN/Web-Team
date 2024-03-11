import backToUp from "@/utils/BackToUp";
import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useContext } from "react";

import { Btn, BtnStyle } from "./style";
import { ThemeContext } from "@/context/ThemeContext";

const BackToUp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Btn sx={BtnStyle(theme)} onClick={() => backToUp()}>
        <AiOutlineArrowUp /> بازگشت به بالا
      </Btn>
    </div>
  );
};

export default BackToUp;
