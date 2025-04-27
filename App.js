import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id: "heading" }, "Namste react");
// JSX: Easy to create element

const heading = <h1 className="head">Namste react 🧨</h1>;

const Title = () => {
  return <h1>Title component</h1>;
};

// React Functional component: It is normal java script function
// Component composition: Component inside component
// Here Title component inside HeadingComponent
const number = 1000;
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {heading}
      <h1 className="heading">Namaste react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(<HeadingComponent />);
