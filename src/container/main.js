import React from "react";
import MainNav from "./navBar/main";
import MainFooter from "./footer/main";

const Container = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <MainFooter />
    </>
  );
};

export default Container;
