import React from "react";

export const RenderB = ({ letterB, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>boom</button>
      <p>{letterB}</p>
    </div>
  );
};
