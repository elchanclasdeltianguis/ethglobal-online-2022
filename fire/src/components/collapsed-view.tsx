import React from 'react'

import EnsComponentCollapsed from './ens-component-collapsed'
import InputGroup from './input-group'
import Nav2 from './nav2'

export default function CollapsedView() {
  return (
    <div className="relative h-[1177px] w-[1440px] overflow-clip bg-gradient-to-b from-[white] to-[rgba(242,242,242,1)]">
      <div className="absolute left-[250px] top-[317px] inline-flex flex-col items-start gap-5">
        <EnsComponentCollapsed type="TYPE0" />
        <EnsComponentCollapsed type="TYPE1" />
        <EnsComponentCollapsed type="TYPE2" />
        <EnsComponentCollapsed type="TYPE3" />
        <EnsComponentCollapsed type="TYPE4" />
      </div>
      <div className="absolute left-[730px] top-[317px] inline-flex flex-col items-start gap-5">
        <EnsComponentCollapsed type="TYPE5" />
        <EnsComponentCollapsed type="TYPE6" />
        <EnsComponentCollapsed type="TYPE7" />
        <EnsComponentCollapsed type="TYPE8" />
        <EnsComponentCollapsed type="TYPE9" />
      </div>
      <div className="absolute top-44 left-[410px] w-[620px] gap-2.5">
        <InputGroup type="TYPE0" />
      </div>
      <Nav2 type="TYPE0" />
    </div>
  )
}
