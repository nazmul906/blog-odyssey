import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/instagram.png" width={24} height={24}></Image>
        <Image src="/facebook.png" width={24} height={24}></Image>
        <Image src="/tiktok.png" width={24} height={24}></Image>
      </div>
      <div className={styles.logo}>BloG</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/home" className={styles.link}>
          home
        </Link>
        <Link href="/contact" className={styles.link}>
          contact
        </Link>
        <Link href="/about" className={styles.link}>
          about
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
