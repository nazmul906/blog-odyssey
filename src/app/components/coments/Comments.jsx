import React from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      {/* <h3>Comments</h3> */}
      {status === "authenticated" ? (
        <>
          <div className={styles.write}>
            <textarea
              placeholder="write a comment"
              className={styles.input}
            ></textarea>
            <button className={styles.button}>send</button>
          </div>
        </>
      ) : (
        <Link href="/login">Log in to leave a comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image}></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}> John dee</span>
              <span> 12.23.32</span>
            </div>
          </div>
          <p className={styles.commentdesciption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse
            nihil doloribus voluptatibus natus inventore, commodi similique
            atque et at?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
