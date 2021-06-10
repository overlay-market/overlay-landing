import React from "react";
import styles from "./About.module.scss";
import { Button } from "@material-ui/core";
import { FeedCard, ListRow } from "../../../components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotionIcon from "../../../images/icons/notion-icon.png";
import WhitepaperIcon from "../../../images/icons/whitepaper-icon.png";
import TwitterIcon from "../../../images/icons/twitter-icon.png";
import TelegramIcon from "../../../images/icons/telegram-icon.png";
import DiscordIcon from "../../../images/icons/discord-icon.png";
import MediumIcon from "../../../images/icons/medium-icon.png";

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
  Links: [
    {
      text: "Notion",
      link: "https://www.notion.so/Overlay-Protocol-29da60fd11e9436ea69e2a5e0db28a74",
      icon: `${NotionIcon}`,
    },
    {
      text: "Whitepaper V2",
      link: "https://firebasestorage.googleapis.com/v0/b/overlay-landing.appspot.com/o/OverlayWPv3.pdf?alt=media",
      icon: `${WhitepaperIcon}`,
    },
    {
      text: "Twitter",
      link: "https://twitter.com/OverlayProtocol",
      icon: `${TwitterIcon}`,
    },
    {
      text: "Telegram",
      link: "https://t.me/joinchat/Vh4ghHUTZI53z5OH",
      icon: `${TelegramIcon}`,
    },
    {
      text: "Discord",
      link: "https://discord.gg/FgNhRNtQYv",
      icon: `${DiscordIcon}`,
    },
    {
      text: "Medium",
      link: "https://medium.com/overlay-protocol",
      icon: `${MediumIcon}`,
    },
  ],
};

const About = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["card__container"]}>
        <div className={styles["card__header--big"]}>About</div>
        {data.About.map((current) => (
          <div className={styles["row__container"]}>
            <div className={styles["row__number"]}>{current.number}</div>
            <div className={styles["row__text"]}>{current.text}</div>
          </div>
        ))}
      </div>

      <FeedCard header="About">
        {data.About.map((current) => (
          <ListRow marginBottom="30px">
            <div className={styles["row__number"]}>{current.number}</div>
            <div className={styles["row__text"]}>{current.text}</div>
          </ListRow>
        ))}
      </FeedCard>

      <div className={styles["card__container"]}>
        <div className={styles["card__header--big"]}>Links</div>
        <Button
          variant="contained"
          color="default"
          href="https://kovan.overlay.exchange"
          endIcon={<ExitToAppIcon />}
          className={styles["exchange-button"]}
        >
          😸 Launch App
        </Button>
        {data.Links.map((item) => (
          <div className={styles["row__container"]}>
            <div className={styles["icon__container"]}>
              <img
                src={item.icon}
                alt={`${item.text} Icon`}
                loading="lazy"
              ></img>
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={styles["link"]}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>

      <div className={styles["card__container"]}>
        <div className={styles["card__header--big"]}>Stats</div>
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
      </div>
    </div>
  );
};

export default About;
