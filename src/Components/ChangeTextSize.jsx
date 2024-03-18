import React from "react";
import { useState } from "react";

export const ChangeTextSize = () => {
  const [txt, setTxt] = useState([]);
  // const [txt, setTxt] = React.useState("")
  setTxt((prev) => [...prev, 0]);
  setTxt((prev) => ({ ...prev, name: e.target.value }));
  return <div>ChangeTextSize</div>;
};
