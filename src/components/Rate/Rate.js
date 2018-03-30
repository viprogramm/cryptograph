import React from "react";
import { array, string } from "prop-types";
import classNames from "classnames";

const Rate = ({ rates = [], className }) => {
  if (rates.length < 1) {
    return null;
  }
  const currentRate = rates.length > 0 ? rates[rates.length - 1] : null;
  const prevRate = rates.length > 1 ? rates[rates.length - 2] : null;
  const firstRate = rates[0];

  const diff = +(currentRate - firstRate).toFixed(10) * 100 / firstRate;

  const lastDiff =
    prevRate === null ? null : +(currentRate - prevRate).toFixed(10);

  const rateClass = classNames({
    fell: lastDiff < 0,
    up: lastDiff > 0,
    rate: true
  });

  const diffClass = classNames({
    fell: diff < 0,
    up: diff > 0,
    diff: true
  });

  return (
    <div className={classNames("rates", className)}>
      <span className={rateClass}>${currentRate}</span>{" "}
      {diff !== null ? <span className={diffClass}>({diff}%)</span> : null}
    </div>
  );
};

Rate.propTypes = {
  rates: array,
  className: string
};

export default Rate;
