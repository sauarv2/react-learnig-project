import React, { useState } from "react";
// import Nav from "./component/Navbar";
// import Alert from "./component/Alert";
// import About from "./component/About";

// import Textform from "./component/Textform";
// import "./App.css";
// let name = "sauarv";
/*
function App() {
  const [mode, setMode] = useState("light");
  const [ch, setCh] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // cheak darkmode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setCh("light");
      document.body.style.backgroundColor = "grey";
      showAlert("success", "Drak mode has been enabled");
    } else {
      setMode("light");
      setCh("dark");
      document.body.style.backgroundColor = "white";
      showAlert("danger", "Drak mode has been disabled");
    }
  };

  return (
    <div>
      <Nav
        title="React-App"
        feature="Features"
        mode={mode}
        toggleMode={toggleMode}
        ch={ch}
      />
      <div classNameName="container my-5">
        <Alert alert={alert} showAlert={showAlert}></Alert>

        <About />
        {/* <Textform
          classNameName="form-check-label te"
          mode={mode}
          heading="Enter your Text"
          showAlert={showAlert}
        /> }
      </div>
    </div>
  );
}
*/

function App() {
  return <h1>hello</h1>;
}
export default App;
