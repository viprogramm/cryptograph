import React from "react";
import { array, string } from "prop-types";
import classNames from "classnames";
import Percent from "./Percent/Percent";
import Price from "./Price/Price";

const Statistics = ({ data = [], className }) => {
  return (
    <div className={classNames("statistics", className)}>
      <Price data={data} /> <Percent data={data} />
    </div>
  );
};

Statistics.propTypes = {
  data: array,
  className: string
};

export default Statistics;
