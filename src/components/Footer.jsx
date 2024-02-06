import React from "react";
import styles from "../css/Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>About Us</h3>
          <p>ABC Solutions is areating web apps and provides support to boost ypurs future</p>
        </div>
        <div className={styles.footerColumn}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
