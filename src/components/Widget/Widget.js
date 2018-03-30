import React from "react";
import { string, array, number } from "prop-types";
import Label from "../Label/Label";
import Rate from "../Rate/Rate";
import Graph from "../Graph/Graph";

import "./style.css";

const Widget = props => {
  const { coin, data, count } = props;
  return (
    <div>
      <Label coin={coin} currency="USD" />
      <Rate rates={data} />
      <Graph className="svg" data={data} count={count} />
    </div>
  );
};

Widget.propTypes = {
  coin: string.isRequired,
  data: array.isRequired,
  count: number.isRequired
};

export default Widget;
