import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      hello
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
