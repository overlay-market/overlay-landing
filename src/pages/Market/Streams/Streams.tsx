import React from "react";
import styles from "./Streams.module.scss";
import { StreamsHeader } from "./StreamsHeader";
import ETH_DAI_NFT from "../../../assets/nft/eth-dai.png";
import OVL_DAI_NFT from "../../../assets/nft/ovl-dai.png";
import OVL_ETH_NFT from "../../../assets/nft/ovl-eth.png";


const data = {
  Streams: [
    {
      pair_name: "ETH-DAI",
      address: "",
      img: ETH_DAI_NFT,
    },
    {
      pair_name: "OVL-DAI",
      address: "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f",
      img: OVL_DAI_NFT,
    },
    {
      pair_name: "OVL-ETH",
      address: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28",
      img: OVL_ETH_NFT,
    },
  ],
};

interface StreamsProps { 
  header: string;
}

const Streams: React.FC<StreamsProps> = ({header}) => {
  return (
    <div className={styles["container"]}>
      {/* <div className={styles["header"]}>{header}</div> */}
      <StreamsHeader>{header}</StreamsHeader>
      <div className={styles["pairs__container"]}>
        {data.Streams.map((pair) => (
          <div className={styles["pair__container"]}>
            <div className={styles["name-amt__container"]}>
              <div className={styles["name"]}>{pair.pair_name}</div>
              <div>- ETH</div>
            </div>

            <div className={styles["token-img__container"]}>
              <img
                alt={`${pair.pair_name} Token`}
                src={pair.img}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streams;
