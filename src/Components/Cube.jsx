import React from "react";
import { useState } from "react";
import styles from "../Styles/cube.module.css";
import { random } from "../functions/random";

export const Cube = () => {
  const [squareList, createSquare] = useState([]);

  const addSquare = () => {
    createSquare((prevSquare) => [...prevSquare, random(0, 100)]);
  };
  console.log(styles);
  return (
    <div>
      <button onClick={addSquare}>sukurk kvadrateli</button>
      <div>
        {squareList.map((el, index) => (
          <div key={index} className={styles.square}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};
