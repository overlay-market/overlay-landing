import React from 'react'
import styles from './Stats.module.scss'
import {FeedCard} from '../../../components'

interface StatsProps {
  header: string
}

const Stats: React.FC<StatsProps> = ({header}) => {
  return (
    <FeedCard header={header}>
      <div className={styles['column__container']}>
        <div className={styles['stat__header']}>Total Initial Supply</div>
        <div className={styles['stat__number']}>8,000,000 OVL</div>
      </div>
      <div className={styles['column__container']}>
        <div className={styles['stat__header']}>TVL</div>
        <div className={styles['stat__number']}>- OVL</div>
        <div className={[styles['stat__number'], [styles['lighten']]].join(' ')}>- USD</div>
      </div>
      <div className={styles['column__container']}>
        <div className={styles['stat__header']}>Spot Liquidity</div>
        <div className={styles['stat__number']}>- OVL</div>
        <div className={[styles['stat__number'], [styles['lighten']]].join(' ')}>- USD</div>
      </div>
      <div className={styles['column__container']}>
        <div className={styles['stat__header']}>Treasury Staking</div>
        <div className={styles['stat__number']}>APY: - %</div>
      </div>
    </FeedCard>
  )
}

export default Stats
