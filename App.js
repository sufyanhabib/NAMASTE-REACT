const heading = React.createElement(
  "div",
  { className: "heading" },
  React.createElement("h1", null, "Welcome to My App"),
  React.createElement("p", null, "This is a simple React application."),
  React.createElement(
    "button",
    { onClick: () => alert("Button Clicked!") },
    "Click Me"
  ),
  React.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
  }),
  React.createElement("footer", null, "© 2023 My App"),
  React.createElement(
    "a",
    { href: "https://www.example.com", target: "_blank" },
    "Visit Example.com"
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
