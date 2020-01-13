import React from "react";
import styles from "./MainHead.module.css";

const MainHead = ({ headUserName, headText }) => {
  return (
    <div className={styles.container}>
      <h3>{headUserName}</h3>
      <p>{headText}</p>
    </div>
  );
};

export default MainHead;
