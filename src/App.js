import React, { Component } from "react";
import Banner from "./components/Banner/Banner";
import InstallContainer from "./components/InstallContainer/InstallContainer";
import MainHead from "./components/MainHead/MainHead";
import SmallBanner from "./components/SmallBanner/SmallBanner";

import styles from "./App.module.css";
import FanImage from "./images/img-fan-1.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headUserName: "username1234",
      headText: "invited you to play Mobile Premier League!",
      smallBannerText: "Install MPL App and get 20 MPL Tokens Free!",
      bannerText1: "Get Free cash",
      bannerText2: "20",
      bannerText3: "Use referral code",
      bannerText4: "abcd123"
    };
  }

  render() {
    const {
      headUserName,
      headText,
      smallBannerText,
      bannerText3,
      bannerText1,
      bannerText2,
      bannerText4
    } = this.state;
    return (
      <div>
        <div className={styles.mainBackground}>
          <MainHead headUserName={headUserName} headText={headText} />
          <Banner
            bannerText3={bannerText3}
            bannerText4={bannerText4}
            bannerText1={bannerText1}
            bannerText2={bannerText2}
          />
          <img src={FanImage} className={styles.fanImage} alt="fan" />
        </div>
        <SmallBanner text={smallBannerText} />
        <br />
        <InstallContainer />
      </div>
    );
  }
}

export default App;
