import React from "react";
import { useState } from "react";
import styles from "../Styles/cube.module.css";

export const Uzduotis5 = () => {
  const [addSq, setSq] = useState([]);

  return (
    <div>
      <button onClick={() => setSq((prev) => [...prev, "blue"])}>
        add blue
      </button>
      <button onClick={() => setSq((prev) => [...prev, "red"])}>add red</button>
      <button onClick={() => setSq([])}>reset</button>
      <div>
        {addSq.map((kv, i) => (
          <div
            key={i}
            className={styles.square}
            style={{ backgroundColor: kv }}
          ></div>
        ))}
      </div>
    </div>
  );
};
