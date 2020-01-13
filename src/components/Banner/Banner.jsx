import React from "react";
import styles from "./Banner.module.css";
import bannerImage from "../../images/rfrrl_card_bg.png";

const Banner = ({ bannerText3, bannerText1, bannerText2, bannerText4 }) => {
  return (
    <div className={styles.container}>
      <img src={bannerImage} className={styles.bannerImage} alt="banner" />
      <div className={styles.bannerText}>
        <p>{bannerText1}</p>
        <h2>&#x20B9;{bannerText2}</h2>
        <p>{bannerText3}</p>
        <h4>{bannerText4}</h4>
      </div>
    </div>
  );
};

export default Banner;
