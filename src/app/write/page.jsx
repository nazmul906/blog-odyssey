"use client";
import React, { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16}></Image>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16}></Image>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16}></Image>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16}></Image>
            </button>
          </div>
        )}

        {/* to modify reactquill=> inspect the text area div and see the classname 
        assign by quill to the div and modify that class in global css file.
        here the classname is ql-container
        */}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="write your story"
        />
      </div>
    </div>
  );
};

export default WritePage;
