// src/components/ThemeSwitcher.jsx
import React from "react";
import { useTheme } from "../Context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  if(typeof theme === "undefined" || typeof toggleTheme === 'undefined'){
    console.log("Theme or Toggletheme is undefined")
    return null;
  }

  return (
    <div className="flex justify-center items-center p-5">
      <button
        onClick={toggleTheme}
        className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white p-2 rounded-md transition-all"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
