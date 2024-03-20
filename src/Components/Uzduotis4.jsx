import React from "react";
import { useState } from "react";
import styles from "../Styles/cube.module.css";

export const Uzduotis4 = () => {
  const [squareList, createSquare] = useState([]);

  const addSquare = () => {
    createSquare((prevSquare) => [...prevSquare, 0]);
  };
  console.log(styles);
  return (
    <div>
      <button onClick={addSquare}>add</button>
      <div>
        {squareList.map((el, index) => (
          <div
            key={index}
            className={styles.square}
            style={{ backGround: "blue" }}
          ></div>
        ))}
      </div>
    </div>
  );
};
