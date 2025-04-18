import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(5);

  const [number, setNumber] = useState(false);

  const [charallowed, setCharallowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";
    let num = "0123456789";
    let char = "~!@#$%^&*()_+";
    if (number) str += num;
    if (charallowed) str += char;

    for (let i = 0; i <= length; i++) {
      const genP = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(genP);
    }
    setPassword(pass);
    // console.log(setPassword);
  }, [length, number, charallowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, charallowed, passwordGenerator]);
  // console.log(passwordGenerator);

  // **************************************************
  const copyPassword = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 15);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="container">
        <h2>Password Generator</h2>

        <div className="form-group">
          <label htmlFor="length">Password Length</label>
          <input
            type="range"
            id="length"
            min={1}
            max={15}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <div className="range-value">
            Length: <span id="rangeVal">{length}</span>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              id="include-number"
              defaultChecked={Number}
              onChange={() => {
                setNumber((tru) => !tru);
              }}
            />{" "}
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="include-symbols"
              onChange={() => {
                setCharallowed((tru) => !tru);
              }}
            />
            Include Special Characters
          </label>
        </div>

        <input
          type="text"
          value={password}
          className="output"
          placeholder="Your password will appear here"
          readOnly
          ref={passwordref}
        />

        <button onClick={copyPassword} className="generate-btn">
          Copy
        </button>
      </div>
    </>
  );
}

export default App;
