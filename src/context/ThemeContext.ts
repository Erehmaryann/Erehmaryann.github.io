import { createContext } from "react";

const defaultValue = {
  currentTheme: "dark",
  changeCurrentTheme: (newTheme: "light" | "dark") => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
