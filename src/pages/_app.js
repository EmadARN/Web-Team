import React, { Suspense } from "react";
import Cursor from "@/components/Cursor/Cursor";
import "@/styles/globals.css";
import '../i18n'

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
    <Suspense fallback={<div>loading...</div>}>
      <Component {...pageProps} />
  
      <Cursor/>
      </Suspense>
    </>
  );
}
