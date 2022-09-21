import React from 'react'

import Inputs from './inputs'
import Buttons from './buttons'

export default function InputGroup(props: InputGroupInterface) {
  return (
    <>
      {props.type === 'TYPE0' && (
        <div className="inline-flex w-[620px] items-start gap-2 self-stretch">
          <Inputs type="INPUT_DEFAULT_TYPE0" />
          <Buttons type="BUTTON_DISABLED_FALSE_FALSE_TRUE_TYPE0" />
        </div>
      )}
    </>
  )
}

InputGroup.defaultProps = {
  type: 'TYPE0',
}

interface InputGroupInterface {
  type: 'TYPE0';
}
