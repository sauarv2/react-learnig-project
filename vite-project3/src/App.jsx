import { useState } from "react";

import "./App.css";

import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-2 rounded-2xl  mb-10">
        saurav saha
      </h1>
      <Card name="saurav saha" address="India,westbengle" />
      <Card name="kittu saha" address="India,Mumbai" />
    </>
  );
}

export default App;
