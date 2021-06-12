import React from "react";
import styles from "./About.module.scss";
import { FeedCard, ListRow } from "../../../components";

const data = {
  About: [
    {
      number: "01",
      text: "A cryptocurrency that lets you long or short DeFi data streams.",
    },
    {
      number: "02",
      text: "Dynamically mints or burns to compensate traders for their profit or loss.",
    },
    {
      number: "03",
      text: "Governs the system so successful traders decide the trajectory of the protocol.",
    },
  ],
};

interface AboutProps {
  header: string;
}

const About:React.FC<AboutProps> = ({header}) => {
  return (
    <FeedCard header={header}>
      {data.About.map((current) => (
        <ListRow>
          <div className={styles["row__number"]}>{current.number}</div>
          <div className={styles["row__text"]}>{current.text}</div>
        </ListRow>
      ))}
    </FeedCard>
  );
};

export default About;
