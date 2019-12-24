import React from "react";
import { storiesOf } from "@storybook/react";

import Layout from "./index";

const testNode = <span>test</span>;

storiesOf("Layout", module).add("without header", () => (
  <>
    <Layout right={testNode} left={testNode} center={testNode} />{" "}
  </>
));
