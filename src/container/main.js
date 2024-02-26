import React from "react";
import MainNav from "./navBar/main";
import MainFooter from "./footer/main";
import { ThemeProvider } from "@/context/ThemeContext";
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
