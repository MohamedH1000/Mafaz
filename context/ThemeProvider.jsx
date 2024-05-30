"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const pathname = usePathname();
  const [mode, setMode] = useState("");
  const [nationality, setNationality] = useState("");
  const [job, setJob] = useState("");
  const [type, setType] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [formData, setFormData] = useState({
    nationality: "",
    job: "",
    selectedFile: "",
    path: pathname,
  });

  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        type,
        setType,
        formData,
        setFormData,
        currentId,
        setCurrentId,
        nationality,
        setNationality,
        job,
        setJob,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
