import React from "react";
import { array, string } from "prop-types";
import classNames from "classnames";

const Price = ({ data = [], className }) => {
  if (data.length === 0) {
    return null;
  }

  const currentValue = data[data.length - 1];
  const prevValue = data.length > 1 ? data[data.length - 2] : null;

  const difference = prevValue === null ? null : currentValue - prevValue;

  const classes = classNames(
    {
      fell: difference < 0,
      up: difference > 0,
      recent: true
    },
    className
  );

  const roundedCurrentValue = +parseFloat(currentValue).toFixed(3);

  return <span className={classes}>${roundedCurrentValue}</span>;
};

Price.propTypes = {
  data: array,
  className: string
};

export default Price;
