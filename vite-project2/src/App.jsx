import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  let value = 1;
  const addValue = () => {
    counter += value;
    if (counter > 20) {
      setCounter((counter = 20));
    } else {
      setCounter(counter);
    }

    setCounter(counter);
  };

  const removeValue = () => {
    counter -= value;
    if (counter < 0) {
      setCounter((counter = 0));
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>hi</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
