import React from "react";

import { shallow } from "enzyme";
import Label from "./Label";

describe("Label", () => {
  test("with props", () => {
    let wrapper = shallow(<Label coin="ETH" currency="USD" />);
    expect(wrapper.html()).toMatch(/<h3>ETH - USD<\/h3>/);

    wrapper = shallow(<Label coin="ETC" currency="EUR" />);
    expect(wrapper.html()).toMatch(/<h3>ETC - EUR<\/h3>/);
  });
});
