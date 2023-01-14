import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";
import "./styles.css";

const App = () => {
  return (
    <>
      <MyComponent />
      <MyComponent input={["item 1", "item 2", "item 3"]} />
      <MyComponent input="Hello World" />
    </>
  );
};

export default App;
