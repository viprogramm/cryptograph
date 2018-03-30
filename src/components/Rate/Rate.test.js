import React from "react";

import { shallow } from "enzyme";
import Rate from "./Rate";

describe("Rate", () => {
  test("without rates", () => {
    const wrapper = shallow(<Rate rates={[]} />);
    expect(wrapper.html()).toBe(null);
  });

  test("without one rate", () => {
    const wrapper = shallow(<Rate rates={[10]} />);
    expect(wrapper.html()).toBe(
      `<div class="rates"><span class="rate">$10</span> <span class="diff">(0%)</span></div>`
    );
  });

  test("with rates", () => {
    let wrapper = shallow(<Rate rates={[10, 30, 50]} />);

    expect(wrapper.html()).toBe(
      `<div class="rates"><span class="up rate">$50</span> <span class="up diff">(400%)</span></div>`
    );

    wrapper = shallow(<Rate rates={[10, 50, 30]} />);

    expect(wrapper.html()).toBe(
      `<div class="rates"><span class="fell rate">$30</span> <span class="up diff">(200%)</span></div>`
    );

    wrapper = shallow(<Rate rates={[50, 20, 25]} />);

    expect(wrapper.html()).toBe(
      `<div class="rates"><span class="up rate">$25</span> <span class="fell diff">(-50%)</span></div>`
    );

    wrapper = shallow(<Rate rates={[50, 40, 25]} />);

    expect(wrapper.html()).toBe(
      `<div class="rates"><span class="fell rate">$25</span> <span class="fell diff">(-50%)</span></div>`
    );
  });
});
