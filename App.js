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

function Car(props) {
  return <h2 style={props.style}>I am a  {props.brand.name} and Model is {props.brand.model} !</h2>;
}

function Garage() {
  const carStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "5px",
  };
  const carInfo = {
    name: "Ford",
    model: "Mustang",
  };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car   style={carStyle} brand={carInfo} />
      <Car brand="BMW" />
      <Car brand="Fiat" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />); // Rendering the Garage component to the root element
