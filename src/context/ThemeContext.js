import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // تم پیش فرض

  const switchDark = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark"); // ذخیره تم "dark" در Local Storage
  };

  const switchLight = () => {
    setTheme("light");
    localStorage.setItem("theme", "light"); // ذخیره تم "light" در Local Storage
  };

  // بارگیری تم از Local Storage در زمان نصب کامپوننت
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ switchLight, switchDark, theme }}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
