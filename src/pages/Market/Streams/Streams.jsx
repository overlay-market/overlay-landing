import React from "react";
import styles from "./Streams.module.scss";

const data = {
  Streams: [
    {
      pair_name: "OVL-ETH",
      address: "",
      img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-20.png?alt=media",
    },
    {
      pair_name: "AAVE-ETH",
      address: "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f",
      img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-15.png?alt=media",
    },
    {
      pair_name: "YFI-ETH",
      address: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28",
      img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-17.png?alt=media",
    },
    {
      pair_name: "UNI-ETH",
      address: "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
      img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-16.png?alt=media",
    },
    {
      pair_name: "SNX-ETH",
      address: "0x43AE24960e5534731Fc831386c07755A2dc33D47",
      img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-19.png?alt=media",
    },
    {
      pair_name: "SUSHI-ETH",
      address: "0xCE84867c3c02B05dc570d0135103d3fB9CC19433",
      img: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/Rectangle-18.png?alt=media",
    },
  ],
};
const Streams = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>Streams</div>
      <div className={styles["pairs__container"]}>
        {data.Streams.map((pair) => (
          <div className={styles["pair__container"]}>
            <div className={styles["name-amt__container"]}>
              <div className={styles["name"]}>{pair.pair_name}</div>
              <div>- ETH</div>
            </div>

            <div className={styles["token-img__container"]}>
              <img src={pair.img} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streams;
