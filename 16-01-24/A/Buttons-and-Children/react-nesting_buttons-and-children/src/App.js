import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>My</Button>
      <Button>className</Button>
      <Button>is</Button>
      <Button>Text</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
