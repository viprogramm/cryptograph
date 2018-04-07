import React from "react";

import { shallow } from "enzyme";
import Percent from "./Percent";

describe("Statistics", () => {
  test("without data", () => {
    const wrapper = shallow(<Percent />);
    expect(wrapper.html()).toBe(null);
  });

  test("with one data value", () => {
    const wrapper = shallow(<Percent data={[10]} />);
    expect(wrapper.html()).toBe(null);
  });

  test("with data", () => {
    let wrapper = shallow(<Percent data={[10, 30, 50]} />);
    expect(wrapper.prop("className")).toMatch("up");
    expect(wrapper.text()).toMatch("400%");

    wrapper = shallow(<Percent data={[50, 20, 25]} />);
    expect(wrapper.prop("className")).toMatch("fell");
    expect(wrapper.text()).toMatch("-50%");
  });
});
