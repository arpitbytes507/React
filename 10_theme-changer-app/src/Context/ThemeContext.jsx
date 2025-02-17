import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// Create a custom hook to use the Theme Context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
