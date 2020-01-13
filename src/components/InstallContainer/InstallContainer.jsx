import React from "react";
import AndroidImage from "../../images/cta-android.png";
import styles from "./InstallContainer.module.css";

const InstallContainer = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.androidImage}
        src={AndroidImage}
        alt="Download for Android"
      />
    </div>
  );
};

export default InstallContainer;
