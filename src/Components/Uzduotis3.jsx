import React from "react";
import { useState } from "react";

export const Uzduotis3 = () => {
  const [number, changeNumber] = useState(0);

  const upNumber = () => {
    changeNumber((number) => number + 1);
  };

  const downNumber = () => {
    changeNumber((number) => number - 3);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={upNumber}>+1</button>
      <button onClick={downNumber}>-3</button>
    </div>
  );
};
