import React from "react";
import styles from "./Technical.module.scss";
import GithubLogo from "../../../images/icons/github-logo.png";
import OverlayLogo from "../../../images/icons/overlay-logo.png";

const data = {
  Technical: {
    header: "Technical",
    content: [
      {
        name: "OIP",
        description:
          "OIPs are the place to contribute to the development of the protocol.",
        logo: `${GithubLogo}`,
        link: "https://oips.overlay.market/",
      },
      {
        name: "GitHub",
        description: "Where all us Noob-Noobs go.",
        logo: `${OverlayLogo}`,
        link: "https://github.com/overlay-market/",
      },
    ],
  },
  Writings: {
    header: "Writings",
    content: [
      {
        number: "01",
        link: "",
        title: "What is Overlay?",
      },
      {
        number: "02",
        link: "",
        title: "A deep dive of our metrics",
      },
      {
        number: "03",
        link: "",
        title: "Tokenomics of Overlay",
      },
      {
        number: "04",
        link: "",
        title: "Our mission and values",
      },
      {
        number: "05",
        link: "",
        title: "Another article link",
      },
    ],
  },
  Why: {
    header: "Why",
    content: [
      "We believe in open-source.",
      "Free and fair internet.",
      "Other things.",
    ],
  },
  Stakeholders: {
    header: "Stakeholders",
    content: [
      { name: "Polychain", link: "https://polychain.capital/" },
      { name: "1kx", link: "https://twitter.com/1kxnetwork?lang=en" },
      { name: "ParaFi", link: "https://www.parafi.capital/" },
      { name: "The Lao", link: "https://www.thelao.io/" },
      { name: "Metacartel", link: "https://metacartel.xyz/" },
    ],
  },
};

const Technical = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["card__container"]}>
        <div className={styles["card__header"]}>{data.Technical.header}</div>
        <div className={styles["card__content"]}>
          {data.Technical.content.map((resource) => (
            <div className={styles["row__container"]}>
              <div className={styles["logo__wrapper"]}>
                <img
                  alt={`${resource.name} Logo`}
                  src={resource.logo}
                  loading="lazy"
                />
              </div>
              <div className={styles["text__container"]}>
                <a
                  href={resource.link}
                  className={styles["resource__link"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resource.name}
                </a>
                <div className={styles["description"]}>
                  {resource.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles["card__container"]}>
        <div className={styles["card__header"]}>{data.Writings.header}</div>
        {data.Writings.content.map((writing) => (
          <div className={styles["row__container"]}>
            <div className={styles["number"]}>{writing.number}</div>
            <a
              className={styles["article__link"]}
              href={writing.link}
              target="_blank"
              rel="noreferrer"
            >
              {writing.title}
            </a>
          </div>
        ))}
      </div> */}

      {/* <div className={styles["card__container"]}>
        <div className={styles["card__header"]}>{data.Why.header}</div>
        {data.Why.content.map((text) => (
          <div className={styles["text"]}>{text}</div>
        ))}
      </div> */}

      <div className={styles["card__container"]}>
        <div className={styles["card__header"]}>{data.Stakeholders.header}</div>
        {data.Stakeholders.content.map((stakeholder) => (
          <a
            href={stakeholder.link}
            target="_blank"
            rel="noreferrer"
            className={styles["stakeholder"]}
          >
            {stakeholder.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Technical;
