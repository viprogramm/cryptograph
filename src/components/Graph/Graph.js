import React from "react";
import { string, array, number } from "prop-types";

const generateDumpData = (count, minValue) => new Array(count).fill(minValue);

const fillDataForPath = (data, count) => {
  const maxValue = data.length === 0 ? 0 : Math.max(...data);
  const minValue = data.length === 0 ? 0 : Math.min(...data);
  const diff = maxValue - minValue;

  let dumpValue = minValue;
  if (data.length === 1) {
    dumpValue = minValue / 2;
  } else if (data[data.length - 1] === minValue && data.length < count) {
    dumpValue = diff !== 0 ? minValue - diff / 2 : minValue / 2;
  }

  return [...data, ...generateDumpData(count, dumpValue)].slice(0, count);
};

const generatePath = (width, height, data, count, extremumMargin) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const diff = maxValue - minValue;

  const getX = step => {
    return width / (count - 1) * step;
  };

  const getY = value => {
    if (diff === 0) {
      return height - extremumMargin;
    }
    return (
      (height - extremumMargin * 2) * (maxValue - value) / diff + extremumMargin
    );
  };

  const points = [`0 ${height}`];

  data.forEach((value, index) => {
    points.push(`${getX(index)} ${getY(value)}`);
  });

  points.push(`${getX(data.length - 1)} ${height}`);

  return `M ${points.join(" L ")} z`;
};

const Graph = ({
  className,
  width = 220,
  height = 100,
  fill = "#daa49d",
  stroke = "#a22921",
  strokeWidth = 2,
  data = [],
  count = 10,
  extremumMargin = 10
}) => {
  const graphData = data.slice(-count).reverse();
  const filledData = fillDataForPath(graphData, count);
  const path = generatePath(width, height, filledData, count, extremumMargin);

  return (
    <svg className={className} width={width} height={height}>
      <path d={path} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
};

Graph.propTypes = {
  className: string,
  width: number,
  height: number,
  fill: string,
  stroke: string,
  strokeWidth: number,
  data: array,
  count: number,
  extremumMargin: number
};

export default Graph;
