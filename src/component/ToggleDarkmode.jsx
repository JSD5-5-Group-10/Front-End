import React, { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { DarkModeContext } from "./DarkmodeContext";

export const ToggleDarkmode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-md text-black dark:text-white"
      >
        {darkMode ? <MdOutlineDarkMode size={25} /> : <MdDarkMode size={25} />}
      </button>
    </>
  );
};
