import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/Themebtn";
import Card from "./Components/Card";
function App() {
  const[Thememode,setThememode] = useState("light");
  const LightTheme = () => {
    setThememode("light");
  }
  const DarkTheme = () => {
    setThememode("dark");
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add('Thememode');
  },[Thememode])
  return (
    <ThemeProvider value={{Thememode,DarkTheme,LightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* {theme btn} */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* {card component} */}
          <Card/>
        </div>
      </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
