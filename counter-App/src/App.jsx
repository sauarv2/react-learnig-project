import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let addValue = () => {
    let counter = count + 1;
    if (counter > 50) {
      counter = 50;
    }
    setCount(counter);
  };
  let removeValue = () => {
    let counter = count - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCount(counter);
  };

  return (
    <>
      <h1>saurav saha</h1>
      <h2>counter APP</h2>
      <h1>counter {count}</h1>
      <button onClick={addValue}>click +</button>
      <button onClick={removeValue}>click -</button>
    </>
  );
}

export default App;
