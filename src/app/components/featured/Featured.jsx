import React from "react";
import styles from "./feature.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>HI, I am rocky here!</b> discover my stories
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This is the title of post</h1>
          <p className={styles.postDescrp}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur, reiciendis! Accusantium impedit temporibus ex ullam,
            laboriosam dolorem error consectetur ad?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
