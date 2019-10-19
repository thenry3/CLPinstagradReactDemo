import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";

let test = ["hello", "goodbye", "aijsdf"];

class Index extends React.Component {
  render() {
    return (
      <>
        {test.map(stri => (
          <Card text={stri} />
        ))}
      </>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
