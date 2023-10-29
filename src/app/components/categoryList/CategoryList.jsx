import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={`${styles.category} ${styles.style} `}>
          <Link href="/blog?cat=style">
            <Image
              src="/style.png"
              height={23}
              width={23}
              className={styles.image}
            ></Image>
            style
          </Link>
        </div>
        <div className={`${styles.category} ${styles.fashion} `}>
          <Link href="/blog?cat=style">
            <Image
              src="/fashion.png"
              height={23}
              width={23}
              className={styles.image}
            ></Image>
            fashion
          </Link>
        </div>
        <div className={`${styles.category} ${styles.food} `}>
          <Link href="/blog?cat=style">
            <Image
              src="/food.png"
              height={23}
              width={23}
              className={styles.image}
            ></Image>
            food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
