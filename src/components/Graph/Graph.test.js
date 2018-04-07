import React from "react";

import { shallow } from "enzyme";
import Graph from "./Graph";

describe("Graph", () => {
  test("with props", () => {
    const data = [100, 50, 0, 10, 90];

    let wrapper = shallow(
      <Graph data={data} width={100} height={100} count={5} />
    );
    expect(wrapper.find("path").prop("d")).toBe(
      "M 0 100 L 0 10 L 25 90 L 50 100 L 75 50 L 100 0 L 100 100 z"
    );

    wrapper = shallow(<Graph data={data} width={200} height={100} count={5} />);
    expect(wrapper.find("path").prop("d")).toBe(
      "M 0 100 L 0 10 L 50 90 L 100 100 L 150 50 L 200 0 L 200 100 z"
    );

    wrapper = shallow(<Graph data={data} width={100} height={200} count={5} />);
    expect(wrapper.find("path").prop("d")).toBe(
      "M 0 200 L 0 20 L 25 180 L 50 200 L 75 100 L 100 0 L 100 200 z"
    );

    wrapper = shallow(
      <Graph data={data} width={100} height={100} count={11} />
    );
    expect(wrapper.find("path").prop("d")).toBe(
      "M 0 100 L 0 10 L 10 90 L 20 100 L 30 50 L 40 0 L 40 100 z"
    );
  });

  test("with all props", () => {
    const data = [100, 50, 0, 10, 90];
    const className = "svg";
    const fill = "#ff0000";
    const stroke = "#00ff00";
    const strokeWidth = 1;
    const width = 100;
    const height = 100;
    const count = 5;

    const wrapper = shallow(
      <Graph
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        data={data}
        width={width}
        height={height}
        count={count}
      />
    );

    expect(wrapper.prop("className")).toBe(className);
    expect(wrapper.prop("width")).toBe(width);
    expect(wrapper.prop("height")).toBe(height);

    const path = wrapper.find("path");
    expect(path.prop("fill")).toBe(fill);
    expect(path.prop("stroke")).toBe(stroke);
    expect(path.prop("strokeWidth")).toBe(strokeWidth);
    expect(path.prop("d")).toBe(
      "M 0 100 L 0 10 L 25 90 L 50 100 L 75 50 L 100 0 L 100 100 z"
    );
  });
});
