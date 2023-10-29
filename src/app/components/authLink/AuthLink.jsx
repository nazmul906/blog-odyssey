"use client";
import Link from "next/link";
import styles from "./authlink.module.css";
import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  // const { status } = useSession();
  // todo: make it dynamic
  const status = "unauthenticated";

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          {/* <span className={styles.link} onClick={signOut}>
            Logout
          </span> */}
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        {/* this below divs are humberger line u see to click */}
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
