"use client";

// this componet is just for applying theme in layout purpose
// themeprovider is using just not to make layout.jsx as client side, so we
// we did it separtely naming it use client and applying theme on the layout
import { ThemeContext } from "@/app/context/ThemeContext";
import React, { useContext } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  // here theme is dynamic and applied based on toggle over themeprovider children, and both light and dark is defined in global css

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
