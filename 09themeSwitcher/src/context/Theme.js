import { createContext, useContext } from "react";

export const ThemeContext = createContext({
   //default value:
    themeMode: "light", //var
    darkTheme: () => {}, //function
    lightTheme: () => {},
});

//context provider
export const ThemeProvider = ThemeContext.Provider

//custom hook
export default function useTheme() {
  return useContext(ThemeContext)
}