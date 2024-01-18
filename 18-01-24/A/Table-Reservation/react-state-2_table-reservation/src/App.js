import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  //Move the `people` state to the `App` component.
   const [people, setPeople] = useState(0);

  //Pass your `handle`:
  function Increment() {
    setPeople(people + 1);
  }

  function Decrement() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter

        Increment={Increment}
        Decrement={Decrement}
      />
      <p>You are going to reserve a table for: {people}  people.</p>
    </div>
  );
}
