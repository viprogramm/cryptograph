import React from "react";
import { shallow } from "enzyme";
import Widget from "./Widget";
import Label from "../Label/Label";
import Statistics from "../Statistics/Statistics";
import Graph from "../Graph/Graph";

describe("Widget", () => {
  test("with props", () => {
    const coin = "BTC";
    const data = [10, 20, 30];
    const count = 3;
    const wrapper = shallow(<Widget coin={coin} data={data} count={count} />);
    expect(wrapper.find(Label).prop("coin")).toBe(coin);
    expect(wrapper.find(Statistics).prop("data")).toBe(data);
    expect(wrapper.find(Graph).prop("data")).toBe(data);
    expect(wrapper.find(Graph).prop("count")).toBe(count);
  });
});
