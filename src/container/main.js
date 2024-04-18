import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import MainNav from "./navBar/Main";
import MainFooter from "./footer/Main";
const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <MainNav />
        {children}
        <MainFooter />
      </ThemeProvider>
    </>
  );
};

export default Layout;
