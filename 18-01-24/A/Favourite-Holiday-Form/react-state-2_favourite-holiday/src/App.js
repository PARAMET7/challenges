import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [Fholiday, setFHoliday] = useState("What holiday would you like?");
  const [Fdate, setFDate] = useState("When holiday would you like?");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("event=>",event);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("formData=>",formData);
    console.log("data =>",data);

    setFHoliday(data.Fholiday);
    setFDate(data.Fdate);
    event.target.reset();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        {/* Favourite Holiday: <span className="output">New Year</span> */}
        Favourite Holiday: <span className="output">{Fholiday}</span>
      </p>
      <p>
        {/* Date: <span className="output">Well...</span> */}
        Date: <span className="output">{Fdate}</span>
      </p>
    </div>
  );
}
