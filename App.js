/* const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello react element"
);
 */

// Creating nested div, parent and child

/* const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is child h1 tag"),
    React.createElement("h2", {}, "This is child h2 tag"),
  ])
); */

// If we want wnat to one more child in parent

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is child h1 tag"),
    React.createElement("h2", {}, "This is child h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is child2 h1 tag"),
    React.createElement("h2", {}, "This is child2 h2 tag"),
  ]),
]);

// Problem in this approach is this code looks messy, create problem in future.
// Solution: JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
