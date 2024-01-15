import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley(prop) {
  const {isHappy} = prop;
  return <h2>{isHappy ? "hasppy": "sed"}</h2>;

}
