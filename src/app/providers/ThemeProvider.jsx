"use client";

// this componet is just for applying theme in layout purpose
// themeprovider is using just not to make layout.jsx as client side, so we
// we did it separtely naming it use client and applying theme on the layout
import { ThemeContext } from "@/app/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  // if u refresh page the state is not yet hold previous state due to localstrge and deafult server side rendering of nxt, to handle that use mount
  // as localstorge wnt get by serverside default rendering by next, we need to handle the problem using useEffect

  useEffect(() => {
    setMounted(true);
  }, []);

  // here theme is dynamic and applied based on toggle over themeprovider children, and both light and dark is defined in global css
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
