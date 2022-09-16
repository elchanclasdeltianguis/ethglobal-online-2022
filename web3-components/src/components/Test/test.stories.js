// /src/components/Button/button.stories.js

import React from "react";
import Test from "./index";
// import { withKnobs, text } from "@storybook/addon-knobs";

export default { title: "Test component" /* decorators: [withKnobs] */ };

export const test = () => {
  const message = "Jello";
  return <Test message={message}></Test>;
};
