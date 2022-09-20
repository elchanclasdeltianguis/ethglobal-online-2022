import React from 'react'

import Buttons from './buttons'

export default function Nav2(props: Nav2Interface) {
  return (
    <>
      {props.type === 'TYPE0' && (
        <div className="inline-flex text-center font-['Roboto'] text-xl font-bold leading-[30px] text-white">
          <div className="absolute top-[0] left-[calc(50%_-_470px_+_0px)] flex w-[940px] items-center justify-between bg-white pt-[30px] pb-[30px] [backdrop-filter:blur(4px)]">
            <div className="gap-2.5 bg-black">
              <p>0xBook</p>
            </div>
            <div className="flex items-start gap-4">
              <Buttons type="BUTTON_DEFAULT_TRUE_TRUE_TRUE_TYPE3" />
              <Buttons type="BUTTON_DEFAULT_TRUE_FALSE_TRUE_TYPE1" />
              <Buttons type="BUTTON_DEFAULT_ALTERNATE_TRUE_FALSE_FALSE_TYPE2" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Nav2.defaultProps = {
  type: 'TYPE0',
}

interface Nav2Interface {
  type: 'TYPE0';
}
