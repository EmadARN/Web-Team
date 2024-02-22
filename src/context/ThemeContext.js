import React from "react";
import { createContext, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const switchDark = () => {
    setTheme("dark");
  };

  const switchLight = () => {
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ switchLight, switchDark, theme }}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
