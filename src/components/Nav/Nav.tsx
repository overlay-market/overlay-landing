import styles from "./Nav.module.scss";
import OverlayTitle from "../../assets/icons/overlay-title.png";

const Nav: React.FC = () => {
  return (
    <div className={styles["nav__container"]}>
      <div className={styles["nav__content"]}>
        <div className={styles["nav__title--container"]}>
          <img alt="Overlay Logo" src={OverlayTitle}></img>
        </div>
      </div>
    </div>
  );
};

export default Nav;
