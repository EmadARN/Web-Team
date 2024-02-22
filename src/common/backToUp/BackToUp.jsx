import backToUp from "@/utils/BackToUp";
import { AiOutlineArrowUp } from "react-icons/ai";

import React from "react";

const BackToUp = () => {
  return (
    <div>
      <button
        class="bn5"
        variant="outlined"
        sx={{ color: "#ddd" }}
        onClick={() => backToUp()}
      >
        <AiOutlineArrowUp /> بازگشت به بالا
      </button>
    </div>
  );
};

export default BackToUp;
