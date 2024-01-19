import { useState } from "react";

export default function Form({onCreateUser}) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("event:",event);

    const formData = event.target.elements;
    console.log("formData:",formData);

    const name = formData.name.value;
    console.log("name:",name);

    const email = formData.email.value;
    console.log("email:",email);
    // setName()
    // setEmail()
    onCreateUser(name, email);
    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
