import React from "react";
import withMapDataByProp from "./dataByProp";
import { mount } from "enzyme";

describe("withMapDataByProp", () => {
  test("func", () => {
    const Component = ({ data }) => <div>{data.join(" ")}</div>;

    const data = [
      { id: 0, price: 10 },
      { id: 1, price: 20 },
      { id: 2, price: 30 }
    ];

    const WrappedComponent = withMapDataByProp("price")(Component);
    const wrapper = mount(<WrappedComponent data={data} />);
    expect(wrapper.text()).toBe("10 20 30");
  });
});
