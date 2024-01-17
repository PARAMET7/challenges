import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            // console.log("🤔");
            setCount(count - 1);
            console.log("🥰");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            // console.log("🤔");

            setCount(count + 1);
            console.log("😙");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
