import React from "react";
import MainNav from "./navBar/main";
import MainFooter from "./footer/main";

const main = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <MainFooter />
    </>
  );
};

export default main;
