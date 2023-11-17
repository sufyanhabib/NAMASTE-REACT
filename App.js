// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// const parent = React.createElement(
//     "div",
//     { id: "parent"},
//     React.createElement("div",{ id: "child"},
//     [
//         React.createElement("h1", { id: "heading"}, "It is an h1 element"), 
//         React.createElement("h2", { id: "heading2"}, "It is an h2 element"),
//     ]),
    
//         React.createElement("div",{ id: "child"},
//     [
//         React.createElement("h1", { id: "heading"}, "It is an h1 element"), 
//         React.createElement("h2", { id: "heading2"}, "It is an h2 element"),
//     ]),
// )










const parent = React.createElement("div", { id: "parent"}, 
    React.createElement("div", { id: "child"},[
        React.createElement("h1", { id: "heading"},"It is an h1 element"),
        React.createElement("h2", { id: "heading2"},"It is an h2 element"),
    ]),
    React.createElement("div", { id: "child2"},[
        React.createElement("h1", { id: "heading"},"It is an h1 element"),
        React.createElement("h2", { id: "heading2"},"It is an h2 element"),
    ]),
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
