import React from "react";
import { EmployeeProfile } from "./EmployeeProfile";
import styles from "../css/Role.module.css";
export const Role = (props) => {
  const { index, roleName, employees } = props;
  console.log(index);
  return (
    <div className={styles.team} style={index % 2 === 0 ? {} : { backgroundColor: "rgb(61, 70, 65)" }}>
      <div className={styles.rolename}>
        <h2>{roleName}</h2>
      </div>

      <div className={styles.employeelist}>
        {employees.map((employee, index) => {
          return (
            <EmployeeProfile
              key={index}
              imageUrl={employee.imageUrl}
              name={employee.name}
              role={employee.role}
            />
          );
        })}
      </div>
    </div>
  );
};
