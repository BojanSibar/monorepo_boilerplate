import React from "react";
import { storiesOf } from "@storybook/react";

import NewGuiComponent from "./index";

const testNode = <span>test</span>;

storiesOf("NewGuiComponent", module).add("text test", () => (
  <>
    <NewGuiComponent node={testNode} />{" "}
  </>
));
