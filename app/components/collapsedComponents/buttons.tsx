import React from 'react'

import IcoChevronDown1 from './assets/ico_chevron_down1'
import IcoChevronDown from './assets/ico_chevron_down'
import IcoEth from './ico_eth'
import IcoChevronDown2 from './assets/ico_chevron_down2'

export default function Buttons(props: ButtonsInterface) {
  return (
    <>
      <div
        className={`inline-flex items-center gap-2 rounded-[40px] border-4 border-solid px-6 pt-[18px] pb-[18px] transition-all ${
          props.type === 'BUTTON_DEFAULT_ALTERNATE_TRUE_FALSE_FALSE_TYPE2'
            ? 'border-black bg-gradient-to-r from-[rgba(130,71,229,1)] to-[rgba(82,0,255,1)] drop-shadow-lg'
            : ''
        } ${
          props.type === 'BUTTON_DISABLED_FALSE_FALSE_TRUE_TYPE0'
            ? "h-[60px] border-[rgba(189,189,189,1)] bg-white text-center font-['Roboto'] text-base font-bold leading-[18px] text-[rgba(189,189,189,1)] drop-shadow-lg"
            : ''
        } ${
          props.type === 'BUTTON_DEFAULT_TRUE_FALSE_TRUE_TYPE1'
            ? "border-black bg-white text-center font-['Roboto'] text-base font-bold leading-[18px] text-black drop-shadow-lg"
            : ''
        } ${
          props.type === 'BUTTON_DEFAULT_TRUE_TRUE_TRUE_TYPE3'
            ? "border-black bg-white text-center font-['Roboto'] text-base font-bold leading-[18px] text-black drop-shadow-lg"
            : ''
        } `}
      >
        {props.type === 'BUTTON_DEFAULT_ALTERNATE_TRUE_FALSE_FALSE_TYPE2' && (
          <IcoChevronDown1 />
        )}
        {props.type === 'BUTTON_DISABLED_FALSE_FALSE_TRUE_TYPE0' && (
          <p>Save ENS</p>
        )}
        {props.type === 'BUTTON_DEFAULT_TRUE_FALSE_TRUE_TYPE1' && (
          <p>Options</p>
        )}
        {props.type === 'BUTTON_DEFAULT_TRUE_FALSE_TRUE_TYPE1' && (
          <IcoChevronDown />
        )}
        {props.type === 'BUTTON_DEFAULT_TRUE_TRUE_TRUE_TYPE3' && <p>network</p>}
        {props.type === 'BUTTON_DEFAULT_TRUE_TRUE_TRUE_TYPE3' && (
          <IcoEth type="TYPE0" />
        )}
        {props.type === 'BUTTON_DEFAULT_TRUE_TRUE_TRUE_TYPE3' && (
          <IcoChevronDown2 />
        )}
      </div>
    </>
  )
}

Buttons.defaultProps = {
  type: 'BUTTON_DISABLED_FALSE_FALSE_TRUE_TYPE0',
}

interface ButtonsInterface {
  type:
    | 'BUTTON_DISABLED_FALSE_FALSE_TRUE_TYPE0'
    | 'BUTTON_DEFAULT_TRUE_FALSE_TRUE_TYPE1'
    | 'BUTTON_DEFAULT_ALTERNATE_TRUE_FALSE_FALSE_TYPE2'
    | 'BUTTON_DEFAULT_TRUE_TRUE_TRUE_TYPE3';
}
