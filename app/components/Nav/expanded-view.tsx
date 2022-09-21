import React from 'react'

import EnsComponentExpanded from './ens-component-expanded'
import EnsComponentCollapsed from './ens-component-collapsed'
import InputGroup from './input-group'
import Nav2 from '../Header/nav2'

export default function ExpandedView() {
  return (
    <div className="relative h-[1177px] w-[1440px] overflow-clip bg-gradient-to-b from-[white] to-[rgba(242,242,242,1)]">
      <div className="inline-flex">
        <div className="absolute left-[250px] top-[317px] flex flex-col items-start gap-5">
          <EnsComponentExpanded type="TYPE0" />
          <EnsComponentCollapsed type="TYPE0" />
          <EnsComponentCollapsed type="TYPE1" />
          <EnsComponentCollapsed type="TYPE2" />
          <EnsComponentCollapsed type="TYPE3" />
        </div>
      </div>
      <div className="inline-flex">
        <div className="absolute left-[730px] top-[317px] flex flex-col items-start gap-5">
          <EnsComponentCollapsed type="TYPE4" />
          <EnsComponentCollapsed type="TYPE5" />
          <EnsComponentCollapsed type="TYPE6" />
          <EnsComponentCollapsed type="TYPE7" />
          <EnsComponentCollapsed type="TYPE8" />
        </div>
      </div>
      <div className="inline-flex">
        <div className="absolute top-44 left-[410px] w-[620px] gap-2.5">
          <InputGroup type="TYPE0" />
        </div>
      </div>
      <Nav2 type="TYPE0" />
    </div>
  )
}
