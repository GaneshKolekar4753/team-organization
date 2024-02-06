import React from "react";
import styles from "../css/Company.module.css";
export const Company = () => {
  return (
    <div className={styles.companyDetails} id="about">
      <div className={styles.companyName}>
        <h2>Company name</h2>
      </div>

      <p>
        ABC Solutions is a leading provider of sustainable energy
        solutions, specializing in solar power systems for residential,
        commercial, and industrial applications. Founded in 2010, ABC
        Solutions has rapidly grown to become a trusted name in the renewable
        energy industry, known for its innovative technology, exceptional
        customer service, and commitment to environmental stewardship.
      </p>
      <div className={styles.borderBottom}></div>
    </div>
  );
};
