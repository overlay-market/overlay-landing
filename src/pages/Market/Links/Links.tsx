import React from "react";
// import { Button } from "@material-ui/core";
import { FeedCard, ListRow } from "../../../components";
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


export const Links: React.FC = () => {
  return (
    <FeedCard header="Links">
      {data.map((item) => (
          <ListRow>
            <div>
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
            >
              {item.text}
            </a>
          </ListRow>
        ))}
    </FeedCard>
  )
};
