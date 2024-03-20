import "./App.css";
// import { ChangeButton } from "./Components/ChangeButton";
// import { Cube } from "./Components/Cube";
// import { NumberState } from "./Components/NumberState";
import { useState } from "react";
// import { Show } from "./Components/A";
// import { Click } from "./Components/B";
import { Cgeneratorius } from "./Components/Cgeneratorius";
import { Bgeneratorius } from "./Components/Bgeneratorius";
import { Ageneratorius } from "./Components/Ageneratorius";
import { Render } from "./Components/Render";
import { RenderA } from "./Components/RenderA";
import { RenderB } from "./Components/RenderB";
import { Uzduotis1 } from "./Components/Uzduotis1";
import { Uzduotis2 } from "./Components/Uzduotis2";
import { Uzduotis3 } from "./Components/Uzduotis3";
import { Uzduotis4 } from "./Components/Uzduotis4";
import { Uzduotis5 } from "./Components/Uzduotis5";

function App() {
  // const [number, changeNumber] = useState(20);

  // const upNumber = () => {
  //   changeNumber((number) => number + 1);
  // };
  // const downNumber = () => {
  //   changeNumber((number) => number - 1);
  // };
  // const [number, changeNumber] = useState(0);
  // const [sqArr, setArr] = useState([]);

  // const addSquare = () => {
  //   setArr((prevSquare) => [...prevSquare, sqArr.length - 1 + 1]);
  // };
  // const chNumber = () => {
  //   changeNumber((number) => number + 1);
  // };
  const [letter, setLetterC] = useState("");
  const [letterA, setLetterA] = useState("");
  const [letterB, setLetterB] = useState("B");

  const handleClick = () => {
    // setLetterC("C");
    // setLetterA("A");
    setLetterB("");
  };

  const replace = () => {
    setLetterC(letter === "C" ? "A" : "C");
    setLetterA(letterA === "A" ? "C" : "A");
  };

  return (
    <div className="App">
      {/* <ChangeButton />
      <NumberState />
      <Cube />
      <Show number={number} />
      <Click upNumber={upNumber} downNumber={downNumber} /> */}
      {/* <Cgeneratorius number={number} />
      <Bgeneratorius chNumber={chNumber} addSquare={addSquare} sqArr={sqArr} />
      <Ageneratorius sqArr={sqArr} number={number} /> */}
      {/* <Render letterA={letterA} handleClick={handleClick} /> */}
      {/* <RenderA
        letter={letter}
        handleClick={handleClick}
        letterA={letterA}
        replace={replace}
      />
      <RenderB letterB={letterB} handleClick={handleClick} /> */}
      <Uzduotis1 />
      <Uzduotis2 />
      <Uzduotis3 />
      <Uzduotis4 />
      <Uzduotis5 />
    </div>
  );
}

export default App;
