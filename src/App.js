import "./App.css";
import { ChangeButton } from "./Components/ChangeButton";
import { Cube } from "./Components/Cube";
import { NumberState } from "./Components/NumberState";
import { useState } from "react";
import { Show } from "./Components/A";
import { Click } from "./Components/B";

function App() {
  const [number, changeNumber] = useState(20);

  const upNumber = () => {
    changeNumber((number) => number + 1);
  };
  const downNumber = () => {
    changeNumber((number) => number - 1);
  };

  return (
    <div className="App">
      <ChangeButton />
      <NumberState />
      <Cube />
      <Show number={number} />
      <Click upNumber={upNumber} downNumber={downNumber} />
    </div>
  );
}

export default App;
