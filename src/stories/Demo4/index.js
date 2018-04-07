import React from "react";
import "./demo4.css";

import Widget from "../../components/Widget";

const N = 256;
const arr = Array.apply(null, { length: N }).map(Number.call, Number);

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const getRandomCoin = () => {
  const coins = ["ETC", "ETH", "BTC"];
  const randomIndex = randomInteger(0, 2);
  return coins[randomIndex];
};

export default () => (
  <div className="demo4">
    {arr.map((val, i) => <Widget key={i} count={10} coin={getRandomCoin()} />)}
  </div>
);
