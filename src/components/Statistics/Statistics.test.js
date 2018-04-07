import React from "react";

import { shallow } from "enzyme";
import Statistics from "./Statistics";
import Percent from "./Percent/Percent";
import Price from "./Price/Price";

describe("Statistics", () => {
  test("without data", () => {
    const wrapper = shallow(<Statistics data={[]} />);
    expect(wrapper.html()).toBe(null);
  });

  test("prop className", () => {
    const className = "test-class-name";
    const wrapper = shallow(<Statistics data={[1]} className={className} />);
    expect(wrapper.find(`.${className}`).length).toBe(1);
  });

  test("children props", () => {
    const props = {
      data: [1, 2, 3]
    };
    const wrapper = shallow(<Statistics data={props.data} />);
    expect(wrapper.find(Percent).props()).toEqual(props);
    expect(wrapper.find(Price).props()).toEqual(props);
  });
});
