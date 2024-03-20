import React from "react";

export const Render = ({ handleClick, letterA }) => {
  return (
    <div>
      <button onClick={handleClick}>Show A</button>
      <p>{letterA}</p>
    </div>
  );
};
