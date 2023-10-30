import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.2.2034</span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            dolorum!
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          neque nemo ipsum omnis maxime similique dolore consequatur quia ad
          incidunt.
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
