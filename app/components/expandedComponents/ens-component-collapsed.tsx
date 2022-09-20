import React from 'react'

import IcoChevronDown7 from './assets/ico_chevron_down7'
import IcoChevronDown8 from './assets/ico_chevron_down8'
import IcoChevronDown9 from './assets/ico_chevron_down9'
import IcoChevronDown10 from './assets/ico_chevron_down10'
import IcoChevronDown11 from './assets/ico_chevron_down11'
import IcoChevronDown3 from './assets/ico_chevron_down3'
import IcoChevronDown4 from './assets/ico_chevron_down4'
import IcoChevronDown5 from './assets/ico_chevron_down5'
import IcoChevronDown6 from './assets/ico_chevron_down6'

export default function EnsComponentCollapsed(
  props: EnsComponentCollapsedInterface
) {
  return (
    <>
      <div className="inline-flex w-[460px] flex-col items-start gap-4 rounded-2xl border-4 border-solid border-[rgba(242,242,242,1)] bg-white px-4 py-5 text-left font-['Roboto_Mono'] text-xl font-bold leading-7 text-black drop-shadow-lg">
        <div className="flex w-[428px] items-center gap-2 self-stretch">
          {props.type === 'TYPE4' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE4' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE4' && <IcoChevronDown7 />}
          {props.type === 'TYPE5' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE5' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE5' && <IcoChevronDown8 />}
          {props.type === 'TYPE6' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE6' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE6' && <IcoChevronDown9 />}
          {props.type === 'TYPE7' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE7' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE7' && <IcoChevronDown10 />}
          {props.type === 'TYPE8' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE8' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE8' && <IcoChevronDown11 />}
          {props.type === 'TYPE0' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE0' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE0' && <IcoChevronDown3 />}
          {props.type === 'TYPE1' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE1' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE1' && <IcoChevronDown4 />}
          {props.type === 'TYPE2' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE2' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE2' && <IcoChevronDown5 />}
          {props.type === 'TYPE3' && <div className="h-10 w-10 rounded-full" />}
          {props.type === 'TYPE3' && (
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
          )}
          {props.type === 'TYPE3' && <IcoChevronDown6 />}
        </div>
      </div>
    </>
  )
}

EnsComponentCollapsed.defaultProps = {
  type: 'TYPE0',
}

interface EnsComponentCollapsedInterface {
  type:
    | 'TYPE0'
    | 'TYPE1'
    | 'TYPE2'
    | 'TYPE3'
    | 'TYPE4'
    | 'TYPE5'
    | 'TYPE6'
    | 'TYPE7'
    | 'TYPE8';
}
