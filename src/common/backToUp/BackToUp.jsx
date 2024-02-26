import backToUp from "@/utils/BackToUp";
import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";

import { Btn } from "./style";

const BackToUp = () => {
  return (
    <div>
      <Btn sx={{ color: "#ddd" }} onClick={() => backToUp()}>
        <AiOutlineArrowUp /> بازگشت به بالا
      </Btn>
    </div>
  );
};

export default BackToUp;
