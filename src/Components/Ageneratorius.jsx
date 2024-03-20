import React from "react";
import styles from "../Styles/cube.module.css";

export const Ageneratorius = ({ sqArr, number }) => {
  return (
    <div>
      {sqArr.map((_, index) => (
        <div key={index} className={styles.square}>
          {number}
        </div>
      ))}
    </div>
  );
};
