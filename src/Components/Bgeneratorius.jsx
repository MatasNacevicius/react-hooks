import React from "react";

export const Bgeneratorius = ({ chNumber, addSquare, sqArr }) => {
  return (
    <div>
      <button onClick={chNumber}>+1</button>
      <button onClick={addSquare}>{sqArr.length}</button>
    </div>
  );
};
