import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const decrementCount = () => {
  //   setCount(count - 1);
  // const incrementCount = () => {
  //   setCount(count + 1);
  //   };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      {/* <ColoredNumber value={0} /> */}
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button

          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button

          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
  }
