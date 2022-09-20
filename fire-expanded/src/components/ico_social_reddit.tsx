import React from 'react'

import Vector1 from './assets/vector1'
import Vector3 from './assets/vector3'
import Ellipse6 from './assets/ellipse6'
import Vector2 from './assets/vector2'
import Ellipse10 from './assets/ellipse10'
import Ellipse11 from './assets/ellipse11'

export default function IcoSocialReddit(props: IcoSocialRedditInterface) {
  return (
    <>
      {props.type === 'TYPE0' && (
        <div className="relative h-6 w-6 overflow-clip">
          <Vector1 />
          <Vector3 />
          <div className="absolute top-1/2 left-[33.56%] right-[58.11%] bottom-[41.67%] rounded-full bg-black" />
          <div className="absolute top-1/2 left-[58.56%] right-[33.11%] bottom-[41.67%] rounded-full bg-black" />
          <div className="absolute left-[58.56%] right-[24.78%] top-[12.5%] bottom-[70.83%] rounded-full bg-black" />
          <Ellipse6 />
          <Vector2 />
          <Ellipse10 />
          <Ellipse11 />
        </div>
      )}
    </>
  )
}

IcoSocialReddit.defaultProps = {
  type: 'TYPE0',
}

interface IcoSocialRedditInterface {
  type: 'TYPE0';
}
