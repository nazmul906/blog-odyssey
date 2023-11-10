import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return (await res).json();
};

const CategoryList = async () => {
  const data = await getData();
  // console.log("data", data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <div className={`${styles.category} ${styles.style}`} key={item._id}>
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
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
