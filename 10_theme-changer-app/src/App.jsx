// src/App.jsx
import React from "react";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h1 className="text-3xl font-bold text-center py-10">Theme Changer</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
