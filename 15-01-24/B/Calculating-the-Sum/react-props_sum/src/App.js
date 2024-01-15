import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA = {2} valueB = {2} />
}



function Sum(prop) {
  const {valueA, valueB} = prop;
  const r = valueA + valueB;
  return (
    <h2>
    the result : {valueA} + {valueB} = {r}

    </h2>

  );
}
