import React from "react";

import Inputs from "./inputs";
import Buttons from "./buttons";

export default function AddressInput() {
  return (
    <div className="flex flex-col items-start w-[640px] h-[60px] mb-[81px] mt-[86px]">
      <div className="inline-flex w-[620px] items-start gap-2 self-stretch">
        <Inputs type="INPUT_DEFAULT_TYPE0" />
        <Buttons type="BUTTON_DISABLED_FALSE_FALSE_TRUE_TYPE0" />
      </div>
    </div>
  );
}
