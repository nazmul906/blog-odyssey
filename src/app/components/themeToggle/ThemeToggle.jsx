import React from "react";
import styles from "./themetoggle.module.css";
import Image from "next/image";
const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" width={24} height={24}></Image>
      <div className={styles.ball}></div>
      <Image src="/sun.png" width={24} height={24}></Image>
    </div>
  );
};

export default ThemeToggle;
