import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(5);

  const [number, setNumber] = useState(false);

  const [charallowed, setCharallowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";
    let num = "0123456789";
    let char = "~!@#$%^&*()_+";

    if (number) str += num;
    if (charallowed) str += char;

    for (let i = 0; i <= length; i++) {
      const genP = Math.floor(Math.random() * length + 1);
      pass += str.charAt(genP);
    }
    console.log(pass);
    setPassword(pass);
  }, [length, number, charallowed, setPassword]);

  return (
    <>
      <div className="container">
        <h2>Password Generator</h2>

        <div className="form-group">
          <label for="length">Password Length</label>
          <input type="range" id="length" min="4" max="32" value="12" />
          <div className="range-value">
            Length: <span id="rangeVal">12</span>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input type="checkbox" id="include-numbers" /> Include Numbers
          </label>
          <label>
            <input type="checkbox" id="include-symbols" /> Include Special
            Characters
          </label>
        </div>

        <input
          type="text"
          className="output"
          placeholder="Your password will appear here"
          disabled
        />

        <button className="generate-btn">Generate Password</button>
      </div>
    </>
  );
}

export default App;
