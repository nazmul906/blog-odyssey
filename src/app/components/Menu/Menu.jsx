import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/MenuPost";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      {/* here menupost without image part will be rendered */}
      <MenuPost withImage={false}></MenuPost>

      {/* <h2 className={styles.subtitle}>Chosen by ME</h2>
      <h1 className={styles.title}>categories</h1>
      <div className={styles.categoryList}>
        <Link className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
      </div> */}

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      {/* here menupost with image part will be rendered */}
      <MenuPost withImage={true}></MenuPost>
    </div>
  );
};

export default Menu;

// without imge
{
  /* <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
        
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John dee</span>
              <span className={styles.date}>23.2.3023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
      
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John dee</span>
              <span className={styles.date}>23.2.3023</span>
            </div>
          </div>
        </Link>
      </div> */
}

// withimage
{
  /* 
      <h2 className={styles.subtitle}>Chosen by ediotor</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John dee</span>
              <span className={styles.date}>23.2.3023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John dee</span>
              <span className={styles.date}>23.2.3023</span>
            </div>
          </div>
        </Link>
      </div> */
}
