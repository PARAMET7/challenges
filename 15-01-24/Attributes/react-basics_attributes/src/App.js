import React from "react";
import "./styles.css";



function Article() {
  return (
    <article className="article">
      <h2 className="article__title"> Hello world!</h2>
      <label htmlFor="myInput">leave me a messege:</label>
      <input id="htmlFor"></input>
      <a className="article__link" href="https://eshedyuval.wixsite.com/eshedyuval1">
        This is what I do
      </a>
    </article>
  );

}

export default function App() {
  return  <Article />;
}
