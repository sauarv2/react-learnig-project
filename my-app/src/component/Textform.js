import React, { useState } from "react";

// **********************
function textform(props) {
  const [text, setText] = useState("");
  let texareaText = "enter your text";
  const hendelUpclick = () => {
    setText(text.toUpperCase()); // upper the text by click
    props.showAlert("success", "Converted to uppercase");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClear = () => {
    setText("");
  };

  const handleOnCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    // Select the text field
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(text.value);

    props.showAlert("success", "Texed Copied");
  };

  const handleOnRemoveExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));

    props.showAlert("success", "Extraspace removed");
  };

  return (
    <div>
      <div
        className="mb-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows="10"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",

            color: props.mode === "light" ? "black" : "white",
          }}
          placeholder="enter your text"
        ></textarea>
        <button
          type="button"
          onClick={hendelUpclick}
          className="btn btn-primary"
        >
          Convert
        </button>

        <button
          type="button"
          onClick={handleOnClear}
          className="btn btn-primary mx-3"
        >
          Clear
        </button>

        <button
          type="button"
          onClick={handleOnCopy}
          className="btn btn-primary mx-3"
        >
          Copy
        </button>

        <button
          type="button"
          onClick={handleOnRemoveExtra}
          className="btn btn-primary mx-3"
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>your text summery</h1>
        <p>
          your {text.split(" ").length} words and mumber of {text.length}{" "}
          chrecter
        </p>
        <p> {parseInt(0.008 * text.split(" ").length)} minutes to read</p>
        <p>preview</p>
        <p>
          <p>{text.length > 0 ? text : "enter your text preview"}</p>
        </p>
      </div>
    </div>
  );
}

export default textform;
