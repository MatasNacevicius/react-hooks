import React from "react";
import styles1 from "../Styles/cube.module.css";
import styles2 from "../Styles/circle.module.css";
import { useState } from "react";
import { random } from "../functions/random";

const Circle = ({ number }) => <div className={styles2.circle}>{number}</div>;
const Square = ({ number }) => <div className={styles1.square}>{number}</div>;

export const Uzduotis2 = () => {
  const [circle, setCircle] = useState(true);
  const [number, setNumber] = useState(random(5, 25));

  const changeShape = () => {
    setCircle((prevState) => !prevState);
  };

  const generateNum = () => {
    setNumber(random(5, 25));
  };

  return (
    <div>
      <button onClick={changeShape}>change</button>
      <button onClick={generateNum}>gen number</button>
      <div>
        {circle ? <Circle number={number} /> : <Square number={number} />}
      </div>
    </div>
  );
};
