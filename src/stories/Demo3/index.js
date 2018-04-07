import React from "react";
import "./demo3.css";

import Widget from "../../components/Widget";

const N = 256;
const arr = Array.apply(null, { length: N }).map(Number.call, Number);

export default () => (
  <div className="demo3">
    {arr.map((val, i) => <Widget key={i} count={10} coin="BTC" />)}
  </div>
);
