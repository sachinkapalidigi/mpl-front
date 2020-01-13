import React from "react";
import styles from "./SmallBanner.module.css";

const SmallBanner = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default SmallBanner;
