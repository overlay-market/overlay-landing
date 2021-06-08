import styles from "./Nav.module.scss";
import OverlayTitle from "../../images/icons/overlay-title.png";

const Nav = () => {
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
