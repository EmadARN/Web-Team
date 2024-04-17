import React from "react";
import Cursor from "@/components/Cursor/Cursor";
import "@/styles/globals.css";
import "../i18n";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}
