"use client";
import { createContext, useState, useContext, useEffect } from "react";
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  // by default nextjs use serverside rendering, but in server there is no browser , so no localstorage it will get initially whne
  // when it render this thoug we use "use client", so prevent that issue we use

  if (typeof window !== "undefined") {
    // saving to local, so that value doestn change on refresh
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Fallback in case localStorage is not available
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  // if toggle is clicked state of theme is fliped
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // if toggled then localstorage is also need to change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
