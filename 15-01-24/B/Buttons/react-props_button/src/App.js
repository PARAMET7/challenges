import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    return console.log("buttom is:");
  }
  return (
    <Button
      color={"red"}
      disabled={false}
      text={"button"}
      onClick={handleClick}
    />
  );
}

function Button(props) {
  const {color, disabled, text, onClick } = props // onHandleClick => convention to creat buttom
  return (<button type="button" style={{ backgroundColor: color }}
  disabled={disabled}
  onClick={onClick()}>
   {text}
  </button>
  )
}
