import { useEffect, useState } from "react";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillDisplayFill,
} from "react-icons/bs";

const Navbar = () => {
  //get the theme according to system or localstorage
  const selectedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(selectedTheme ? selectedTheme : "system");

  //getting system theme
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  // console.log(darkQuery);

  // take action based on system theme
  const onSystemTheme = () => {
    if (theme === "dark" || (theme === "system" && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      // console.log(darkQuery.matches);
      element.classList.remove("dark");
    }
  };
  onSystemTheme(); //for automatic set theme based on system

  //adding class dark based on theme
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
    }
  }, [theme, element]);

  // handle all them and set to localstorage
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
    <div className="flex w-full py-[2%] gap-x-[8%]">
      <div className="italic font-extrabold text-3xl text-sky-500">Weather</div>
      <div className="flex justify-between items-center w-full">
        <div className=" w-full">
          <input
            className=" w-2/3  bg-stone-200 dark:bg-slate-600 dark:text-white text-gray-700   rounded-l-md py-[11px] px-4 focus:outline-none "
            type="text"
            placeholder="search your city here"
          />
          <button className="px-5 pb-[9.2px] pt-[8.5px] bg-slate-700 dark:bg-sky-400 text-white text-lg rounded-r-md font-semibold">
            Search
          </button>
        </div>
        <div className=" text-black  dark:text-white   flex items-center">
          <button
            title="Light theme"
            onClick={handleLight}
            className={` mr-5  text-2xl ${
              theme === "light" ? "text-blue-400" : ""
            }`}
          >
            <BsFillSunFill></BsFillSunFill>
          </button>
          <button
            title="Dark theme"
            onClick={handleNight}
            className={` mr-5  text-2xl ${
              theme === "dark" ? "text-blue-400" : ""
            }`}
          >
            <BsFillMoonFill></BsFillMoonFill>
          </button>
          <button
            title="System theme based on Browser"
            onClick={handleSystem}
            className={` mr-5  text-2xl ${
              theme === "system" ? "text-blue-400" : ""
            }`}
          >
            <BsFillDisplayFill></BsFillDisplayFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
