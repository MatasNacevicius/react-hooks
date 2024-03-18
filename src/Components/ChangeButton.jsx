import React from "react";
import { useState } from "react";

export const ChangeButton = () => {
  const [txtSize, setTxtSize] = useState(15);

  const increseSize = () => {
    setTxtSize(txtSize === 15 ? 30 : 15);
  };

  return (
    <div>
      <button onClick={increseSize}>click to increse size</button>
      <p style={{ fontSize: txtSize + "px" }}>Labas</p>
    </div>
  );
};
