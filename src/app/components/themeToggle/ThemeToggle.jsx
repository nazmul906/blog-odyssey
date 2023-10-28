"use client";
import React, { useContext } from "react";
import styles from "./themetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  console.log("theme", theme);
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" width={24} height={24} alt="moon"></Image>
      <div className={styles.ball}></div>
      <Image src="/sun.png" width={24} height={24} alt="sun"></Image>
    </div>
  );
};

export default ThemeToggle;
