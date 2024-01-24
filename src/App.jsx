import { useEffect, useState } from "react";
import useAllData from "./Components/useAllData/useAllData";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillDisplayFill,
} from "react-icons/bs";

const App = () => {
  const [allData, isLoading] = useAllData();

  console.log(allData);
  console.log(isLoading);

  const selectedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "system");
  console.log(theme);

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery);

  const onSystemTheme = () => {
    if (theme === "dark" || (theme === "system" && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      console.log(darkQuery.matches);
      element.classList.remove("dark");
    }
  };
  onSystemTheme();

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
    }
  }, [theme, element]);

  const handleLight = () => {
    localStorage.setItem("theme", "light");

    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };
  const handleNight = () => {
    localStorage.setItem("theme", "dark");

    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };
  const handleSystem = () => {
    setTheme("system");
    localStorage.removeItem("theme");
    onSystemTheme();
  };

  darkQuery.addEventListener("change", (e) => {
    if (theme === "system") {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <div>
      <div className="text-black dark:text-white bg-sky-300 w-full dark:bg-orange-400">
        <button
          title="Light theme"
          onClick={handleLight}
          className={` mr-5  text-lg ${
            theme === "light" ? "text-blue-400" : ""
          }`}
        >
          <BsFillSunFill></BsFillSunFill>
        </button>
        <button
          title="Dark theme"
          onClick={handleNight}
          className={` mr-5  text-lg ${
            theme === "dark" ? "text-blue-400" : ""
          }`}
        >
          <BsFillMoonFill></BsFillMoonFill>
        </button>
        <button
          title="System theme based on Browser"
          onClick={handleSystem}
          className={` mr-5  text-lg ${
            theme === "system" ? "text-blue-400" : ""
          }`}
        >
          <BsFillDisplayFill></BsFillDisplayFill>
        </button>
      </div>
    </div>
  );
};

export default App;
