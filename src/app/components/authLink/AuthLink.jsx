import React from "react";
import styles from "./authlink.module.css";
import Link from "next/link";
const AuthLink = () => {
  const status = "notAuth";
  return (
    <div>
      {status === "notAuth" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          {" "}
          <Link href="/write">Write</Link>
          <span className={styles.link}>logout</span>
        </>
      )}
    </div>
  );
};

export default AuthLink;
