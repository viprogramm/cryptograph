import React from "react";
import "./demo2.css";

import Widget from "../../components/Widget";

export default () => (
  <div className="demo2">
    <Widget count={10} coin="BTC" />
    <Widget count={10} coin="ETH" />
    <Widget count={10} coin="ETC" />
  </div>
);
