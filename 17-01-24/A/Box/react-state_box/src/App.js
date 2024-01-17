import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  console.log("useState=> ", useState());
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    // console.log(isActive);
    setIsActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      {/* <button onClick={handleClick}>Activate</button> */}
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
