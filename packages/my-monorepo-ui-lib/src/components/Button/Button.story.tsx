import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

storiesOf("Button", module).add("onClick button", () => (
  <>
    <Button onClick={action("on click")}>test child</Button>{" "}
  </>
));
