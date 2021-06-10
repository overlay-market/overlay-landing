import React from 'react';
import styles from './Stats.module.scss';
import { FeedCard } from "../../../components";

const Stats: React.FC = () => { 
  return (
    <FeedCard header="Stats">
      <div className={styles["column__container"]}>
        <div className={styles["stat__header"]}>Total Supply</div>
        <div className={styles["stat__number"]}>- OVL</div>
      </div>
      <div className={styles["column__container"]}>
        <div className={styles["stat__header"]}>TVL</div>
        <div className={styles["stat__number"]}>- OVL</div>
      </div>
      <div className={styles["column__container"]}>
        <div className={styles["stat__header"]}>Spot Liquidity</div>
        <div className={styles["stat__number"]}>- OVL</div>
      </div>
      <div className={styles["column__container"]}>
        <div className={styles["stat__header"]}>Treasury Staking</div>
        <div className={styles["stat__number"]}>- OVL</div>
      </div>
  </FeedCard>
  )
}

export default Stats;