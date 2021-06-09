import React from 'react';
import styles from './FeedCard.module.scss';

interface FeedCardProps {
  header_text: string;
  children: React.ReactNode;
}

export const FeedCard: React.FC<FeedCardProps> = ({header_text, children}) => {
    return (
      <div className={styles["feed-card__container"]}>
        <div className={styles["feed-card__header"]}> {header_text} </div>
      </div>
    );
}