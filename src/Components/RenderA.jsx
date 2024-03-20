import React from "react";
import { RenderC } from "./RenderC";

export const RenderA = ({ handleClick, letter, letterA, replace }) => {
  return (
    <div>
      <button onClick={handleClick}>Create letters</button>
      <button onClick={replace}>replace</button>
      <p>{letterA}</p>
      <RenderC letter={letter} />
    </div>
  );
};
