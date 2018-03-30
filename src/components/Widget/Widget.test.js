import React from "react";
import renderer from "react-test-renderer";
import Widget from "./Widget";

describe("Widget", () => {
  test("withu props", () => {
    const tree = renderer
      .create(<Widget coin="BTC" data={[10, 20, 30]} count={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
