import React from "react";
import styles1 from "../Styles/cube.module.css";
import styles2 from "../Styles/circle.module.css";
import { useState } from "react";

const Circle = () => <div className={styles2.circle}></div>;
const Square = () => <div className={styles1.square}></div>;

export const Uzduotis1 = () => {
  const [circle, setCircle] = useState(true);

  const changeShape = () => {
    setCircle((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={changeShape}>change</button>
      <div>{circle ? <Circle /> : <Square />}</div>
    </div>
  );
};
