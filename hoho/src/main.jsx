// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit Google",
// };

// const Element = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit Google"
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
