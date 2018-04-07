import React from "react";

import { shallow } from "enzyme";
import Label from "./Label";

describe("Label", () => {
  test("with props", () => {
    let wrapper = shallow(<Label coin="ETH" currency="USD" />);
    expect(wrapper.text()).toMatch("ETH");
    expect(wrapper.text()).toMatch("USD");

    wrapper = shallow(<Label coin="ETC" currency="EUR" />);
    expect(wrapper.text()).toMatch("ETC");
    expect(wrapper.text()).toMatch("EUR");
  });
});
