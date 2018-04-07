import React from "react";

import { storiesOf } from "@storybook/react";
import Demo from "./Demo";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";

storiesOf("Graph", module)
  .add("BTC", () => <Demo />)
  .add("BTC + ETH + ETC", () => <Demo2 />)
  .add("256 (BTC)", () => <Demo3 />)
  .add("256 (BTC + ETH + ETC)", () => <Demo4 />);
