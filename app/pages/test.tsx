import React from "react";

import CollapsedView from "../components/collapsedComponents/collapsed-view";
import ExpandedView from "../components/ContactCardComponent/expanded-view";

type Props = {};

function test({}: Props) {
  return (
    <div>
      <ExpandedView />
      <CollapsedView />
    </div>
  );
}

export default test;
