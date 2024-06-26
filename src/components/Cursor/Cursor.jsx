
import React from "react";
import AnimatedCursor from "react-animated-cursor";
const Cursor = () => {
  return (
    <AnimatedCursor
      outerStyle={{
        backgroundColor: "rgba(255,255,255,0.08)",
        mixBlendMode: "difference",
        zIndex: 1000,
      }}
      innerStyle={{
        zIndex: 1000,
      }}
      innerSize={5}
      outerSize={14}
      color="193 ,11,111"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={4}
      clickables={[
        "a",
        "p",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default Cursor;
