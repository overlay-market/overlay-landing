import React from "react";
import styles from "./Technical.module.scss";
import GithubLogo from "../../../assets/icons/github-logo.png";
import OverlayLogo from "../../../assets/icons/overlay-logo.png";
import { FeedCard, ListRow, Link } from "../../../components";

const data = {
  Technical: {
    header: "Technical",
    content: [
      {
        name: "OIPs",
        description:
          "OIPs are the place to contribute to the development of the protocol.",
        logo: `${OverlayLogo}`,
        link: "https://oips.overlay.market/",
      },
      {
        name: "GitHub",
        description: "Where all us Noob-Noobs go.",
        logo: `${GithubLogo}`,
        link: "https://github.com/overlay-market/",
      },
    ],
  },
  Stakeholders: {
    header: "Stakeholders",
    content: [
      { name: "Polychain", link: "https://polychain.capital/" },
      { name: "1kx", link: "https://twitter.com/1kxnetwork?lang=en" },
      { name: "ParaFi", link: "https://www.parafi.capital/" },
      { name: "The LAO", link: "https://www.thelao.io/" },
      { name: "Metacartel", link: "https://metacartel.xyz/" },
    ],
  },
};

interface TechnicalProps {
  header: string;
}

const Technical:React.FC<TechnicalProps> = ({ header }) => {
  return (
    <FeedCard header={header}>
      <div className={styles["card__content"]}>
        {data.Technical.content.map((resource) => (
          <ListRow>
            <div className={styles["logo__wrapper"]}>
              <img
                alt={`${resource.name} Logo`}
                src={resource.logo}
                loading="lazy"
              />
            </div>
            <div className={styles["text__container"]}>
              <Link 
                href={resource.link} 
                newWindow={true}
                underline={true}>
                  {resource.name}
              </Link>
              <div className={styles["description"]}>
                {resource.description}
              </div>
            </div>
          </ListRow>
        ))}
      </div>
    </FeedCard>
  );
};

export default Technical;
