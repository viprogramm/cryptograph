import React from "react";

import { shallow } from "enzyme";
import Price from "./Price";

describe("Statistics", () => {
  test("without data", () => {
    const wrapper = shallow(<Price data={[]} />);
    expect(wrapper.html()).toBe("<span>$0</span>");
  });

  test("with one data value", () => {
    const wrapper = shallow(<Price data={[10]} />);
    expect(wrapper.text()).toMatch("$10");
  });

  test("with data", () => {
    let wrapper = shallow(<Price data={[30, 50]} />);
    expect(wrapper.prop("className")).toMatch("up");
    expect(wrapper.text()).toMatch("$50");

    wrapper = shallow(<Price data={[50, 30]} />);
    expect(wrapper.prop("className")).toMatch("fell");
    expect(wrapper.text()).toMatch("$30");
  });
});
