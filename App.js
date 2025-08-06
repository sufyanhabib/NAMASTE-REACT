import React from "react";
import ReactDOM from "react-dom/client";
// Importing React and ReactDOM to render the component
// React is used to create components and ReactDOM is used to render them to the DOM

// Creating a React element (a component) to render
// Here, we are creating a simple heading element
// This is a JSX syntax which will be transpiled to JavaScript

const heading = <h1>Hello, World from React</h1>;

const list = (
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
    <li>Mango</li>
  </ul>
);

const x = 20;
let text = "Hello, World!";
if (x < 10) {
  text = "Hello, React!";
}
const element2 = <h1>{text}</h1>;
const element = (
  <div>
    {heading} {list} {10 + 20} {/* This will render the sum of 10 and 20 */}
    {element2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
