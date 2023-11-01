import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}> John dee</span>
              <span> 12.23.32</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quasi suscipit quam officiis omnis laboriosam expedita facere
              adipisci molestiae officia? At odio perspiciatis natus obcaecati
              molestias iusto reiciendis provident temporibus.
            </p>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              eius!
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quasi suscipit quam officiis omnis laboriosam expedita facere
              adipisci molestiae officia? At odio perspiciatis natus obcaecati
              molestias iusto reiciendis provident temporibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quasi suscipit quam officiis omnis laboriosam expedita facere
              adipisci molestiae officia? At odio perspiciatis natus obcaecati
              molestias iusto reiciendis provident temporibus.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
