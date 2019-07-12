import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./styles.css";

function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  return (
    <div className="App">
      hello
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
      <button
        onClick={() =>
          setCount(({ count1, ...rest }) => {
            return {
              ...rest,
              count1: count1 + 1
            };
          })
        }
      >
        +
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
