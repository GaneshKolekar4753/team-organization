import React from "react";
import styles from "../css/Header.module.css"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Company Name</div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
