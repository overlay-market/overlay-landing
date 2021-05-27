import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles["nav__container"]}>
      <div className={styles["nav__content"]}>Nav Content</div>
    </div>
  );
};

export default Nav;
