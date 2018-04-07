import React from "react";
import { array, string } from "prop-types";
import classNames from "classnames";

const Price = ({ data = [], className }) => {
  if (data.length === 0) {
    return null;
  }

  const currentValue = data[data.length - 1];
  const prevValue = data.length > 1 ? data[data.length - 2] : null;

  const difference =
    prevValue === null ? null : +(currentValue - prevValue).toFixed(10);

  const classes = classNames(
    {
      fell: difference < 0,
      up: difference > 0,
      recent: true
    },
    className
  );

  return <span className={classes}>${currentValue}</span>;
};

Price.propTypes = {
  data: array,
  className: string
};

export default Price;
