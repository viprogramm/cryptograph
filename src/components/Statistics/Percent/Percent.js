import React from "react";
import { array, string } from "prop-types";
import classNames from "classnames";

const Percent = ({ data = [], className }) => {
  if (data.length < 2) {
    return <span className={className}>(0%)</span>;
  }

  const currentValue = data[data.length - 1];
  const firstValue = data[0];

  const difference = +(
    +(currentValue - firstValue).toFixed(10) *
    100 /
    firstValue
  ).toFixed(3);
  const classes = classNames(
    {
      fell: difference < 0,
      up: difference > 0
    },
    className
  );

  return <span className={classes}>({difference}%)</span>;
};

Percent.propTypes = {
  data: array,
  className: string
};

export default Percent;
