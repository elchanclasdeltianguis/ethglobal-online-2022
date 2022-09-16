// /src/components/Button/button.stories.js

import React from "react";
import ENSProfile from "./index";

export default { title: "ENS Profile" };

export const ensprofile = () => {
  const profile = {
    name: "test name",
    address: "0xtestAddress",
    message: "test message",
  };
  return <ENSProfile profile={profile} />;
};
