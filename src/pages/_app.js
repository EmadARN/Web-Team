import Cursor from "@/components/Cursor/Cursor";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // useEffect(() => {
  //   const handleMouseMovement = (e) => {
  //     setX(e.clientX);
  //     setY(e.clientY);
  //   };
  //   document.addEventListener("mousemove", handleMouseMovement);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMovement);
  //   };
  // }, [x, y]);

  return (
    <>
      <Component {...pageProps} />
      {/* <Cursor x={x} y={y}></Cursor> */}
      <Cursor/>
    </>
  );
}
