import React from 'react';
import styles from '../css/EmployeeProfile.module.css'
export const EmployeeProfile = ({ imageUrl, name, role }) => {
    // name="abc hdjdhs";
    // role="Programmer Anlyst";
    // imageUrl="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=252";
    return (
      <div className={styles.employeeProfile}>
        <div className={styles.profileImage}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className={styles.profileDetails}>
          <h2>[ {name} ]</h2>
          <p>{role}</p>
        </div>
      </div>
    );
  };
  

