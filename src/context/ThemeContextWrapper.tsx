import { FC, useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

import { Props } from "./types";

const ThemeContextWrapper: FC<Props> = ({ children }) => {
  const persistedTheme: string | null = localStorage.getItem("theme")
  const [theme, setTheme] = useState(persistedTheme || "light")

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark")
    else document.body.classList.add("dark")
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper;