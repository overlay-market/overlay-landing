import React from 'react';
import styles from './FeedCard.module.scss';

interface FeedCardProps {
  header: string;
  children: React.ReactNode;
}

export const FeedCard: React.FC<FeedCardProps> = ({header, children}) => {
    return (
      <div className={styles["feed-card__container"]}>
        <div className={styles["feed-card__header"]}> {header} </div>
          {children}
      </div>
    );
}