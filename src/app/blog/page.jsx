import React from "react";
import styles from "./blogPage.module.css";
import CardList from "../components/cardList/CardList";
import Menu from "../components/Menu/Menu";
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> blog</h1>

      <div className={styles.content}>
        <CardList />
      </div>
    </div>
  );
};

export default BlogPage;
