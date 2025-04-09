import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let addValue = () => {
    let counter = count + 1;
    if (counter > 50) {
      counter = 50;
    }
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
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
      <h1>counter app {count}</h1>
      <button onClick={addValue}>click ++</button>

      <button onClick={removeValue}> click --</button>
    </>
  );
}

export default App;
