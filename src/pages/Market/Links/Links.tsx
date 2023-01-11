import React from 'react'
// import { Button } from "@material-ui/core";
// import styles from "./Links.module.scss";
import {FeedCard, ListRow, Icon, Link} from '../../../components'
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import NotionIcon from '../../../assets/icons/notion-icon.png'
import WhitepaperIcon from '../../../assets/icons/whitepaper-icon.png'
import TwitterIcon from '../../../assets/icons/twitter-icon.png'
// import TelegramIcon from '../../../assets/icons/telegram-icon.png'
import DiscordIcon from '../../../assets/icons/discord-icon.png'
import CatEmojiIcon from '../../../assets/icons/cat-emoji.png'
import MirrorIcon from '../../../assets/icons/mirror-logo.png'
import MemoIcon from '../../../assets/icons/memo-emoji.png'
// import GovernanceIcon from '../../../assets/icons/governance-emoji.png'

const data = [
  {
    text: 'Launch App',
    link: 'https://app.overlay.market/',
    icon: `${CatEmojiIcon}`,
  },
  // {
  //   text: 'PlanckCat DAO',
  //   link: 'https://planckcat.lol/',
  //   icon: `${GovernanceIcon}`,
  // },
  // {
  //   text: 'Notion',
  //   link: 'https://www.notion.so/Overlay-Protocol-29da60fd11e9436ea69e2a5e0db28a74',
  //   icon: `${NotionIcon}`,
  // },
  {
    text: 'Docs',
    link: 'https://docs.overlay.market/',
    icon: `${MemoIcon}`,
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com/OverlayProtocol',
    icon: `${TwitterIcon}`,
  },
  // {
  //   text: 'Telegram',
  //   link: 'https://t.me/joinchat/Vh4ghHUTZI53z5OH',
  //   icon: `${TelegramIcon}`,
  // },
  {
    text: 'Discord',
    link: 'https://discord.gg/FgNhRNtQYv',
    icon: `${DiscordIcon}`,
  },
  {
    text: 'Mirror.xyz',
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e',
    icon: `${MirrorIcon}`,
  },
  {
    text: 'Whitepaper',
    link: 'https://planckcat.mypinata.cloud/ipfs/QmVMX7DH8Kh22kxMyDFGUJcw1a3irNPvyZBtAogkyJYJEv',
    icon: `${WhitepaperIcon}`,
  },
]

interface LinksProps {
  header: string
}

const Links: React.FC<LinksProps> = ({header}) => {
  return (
    <FeedCard header={header}>
      {/* <Button
          variant="contained"
          color="default"
          href="https://kovan.overlay.exchange"
          endIcon={<ExitToAppIcon />}
          className={styles["exchange-button"]}
        >
          😸 Launch App
        </Button> */}
      {data.map(item => (
        <ListRow>
          <Icon
            height={36}
            width={36}
            margin={'0 10px 0 0'}
            src={item.icon}
            alt={`${item.text} Icon`}
          />
          <Link href={item.link} underline={true} newWindow={true}>
            {item.text}
          </Link>
        </ListRow>
      ))}
    </FeedCard>
  )
}

export default Links
