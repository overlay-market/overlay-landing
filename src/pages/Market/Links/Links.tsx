import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Links.module.scss";
import { FeedCard, ListRow, Icon, Link } from "../../../components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotionIcon from "../../../assets/icons/notion-icon.png";
import WhitepaperIcon from "../../../assets/icons/whitepaper-icon.png";
import TwitterIcon from "../../../assets/icons/twitter-icon.png";
import TelegramIcon from "../../../assets/icons/telegram-icon.png";
import DiscordIcon from "../../../assets/icons/discord-icon.png";
import MediumIcon from "../../../assets/icons/medium-icon.png";

const data = [
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
];

interface LinksProps { 
  header: string;
}

const Links: React.FC<LinksProps> = ({header}) => {
  return (
    <FeedCard header={header}>
        <Button
          variant="contained"
          color="default"
          href="https://kovan.overlay.exchange"
          endIcon={<ExitToAppIcon />}
          className={styles["exchange-button"]}
        >
          😸 Launch App
        </Button>
      {data.map((item) => (
          <ListRow>
            <Icon 
              height={36} 
              width={36} 
              margin={'0 10px 0 0'} 
              src={item.icon} 
              alt={`${item.text} Icon`} 
              />
                <Link 
                  href={item.link}
                  >
                    {item.text}
                  </Link>
          </ListRow>
        ))}
    </FeedCard>
  )
};

export default Links;