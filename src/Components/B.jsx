import React from "react";

export const Click = ({ upNumber, downNumber }) => {
  return (
    <div>
      <button onClick={upNumber}>+</button>
      <button onClick={downNumber}>-</button>
    </div>
  );
};
