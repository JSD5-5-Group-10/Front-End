import React, { useState, useEffect } from "react";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const ToggleDarkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
