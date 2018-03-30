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

    const wrapper = shallow(
      <Graph
        className="svg"
        fill="#ff0000"
        stroke="#00ff00"
        strokeWidth={1}
        data={data}
        width={100}
        height={100}
        count={5}
      />
    );
    expect(wrapper.html()).toBe(
      `<svg class="svg" width="100" height="100"><path d="M 0 100 L 0 10 L 25 90 L 50 100 L 75 50 L 100 0 L 100 100 z" fill="#ff0000" stroke="#00ff00" stroke-width="1"></path></svg>`
    );
  });
});
