import React from "react";
import { useState } from "react";
import { Vaikas } from "./Vaikas";

export const NumberState = () => {
  const [number, changeNumber] = useState(156);

  const chNumber = () => {
    changeNumber((number) => number + 1);
  };

  return (
    <div>
      <button onClick={chNumber}>increse number</button>
      <Vaikas number={number} />
    </div>
  );
};
