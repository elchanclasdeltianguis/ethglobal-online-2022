import React from 'react'

import Vector from './assets/vector'
import Group from './assets/group'

export default function IcoEth(props: IcoEthInterface) {
  return (
    <>
      {props.type === 'TYPE0' && (
        <div className="relative h-6 w-6">
          <Vector />
          <Group />
        </div>
      )}
    </>
  )
}

IcoEth.defaultProps = {
  type: 'TYPE0',
}

interface IcoEthInterface {
  type: 'TYPE0';
}
