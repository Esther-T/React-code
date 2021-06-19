import React from "react";
import ReactDOM from "react-dom";
import * as op from "./math.js"

ReactDOM.render(
  <ul>
    <li>{op.add(1,2)}</li>
    <li>{op.subtract(1,2)}</li>
    <li>{op.multiply(1,2)}</li>
    <li>{op.divide(1,2)}</li>
  </ul>,
  document.getElementById("root")
);
