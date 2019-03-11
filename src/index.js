import React from "react";
import ReactDOM from "react-dom";

import { Slideshow } from "./Components/Slideshow";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Tech(K)now</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
