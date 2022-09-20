import React from 'react'

import { useState, ReactElement } from 'react'

interface RatingProps {
  maxRating: number
  RatingWrapper: (props: React.PropsWithChildren<{}>) => ReactElement
  RatingActive: (props: {}) => ReactElement
  RatingInactive: (props: {}) => ReactElement
}

export default function Rating(props: RatingProps) {
  const [rating, setRating] = useState(0)

  const handleRatingChange = (newRating: number) => {
    if (newRating === rating) {
      //Reset rating if clicked
      setRating(0)
    } else {
      setRating(newRating)
    }
  }

  return (
    <props.RatingWrapper>
      {[...Array(props.maxRating)].map((item, index) => {
        return (
          <div
            onClick={() => {
              handleRatingChange(index + 1)
            }}
            style={{ cursor: 'pointer' }}
            key={index}
          >
            <ToggleState
              trueComponent={<props.RatingActive />}
              falseComponent={<props.RatingInactive />}
              state={rating <= index}
            />
          </div>
        )
      })}
    </props.RatingWrapper>
  )
}

interface ToggleStateProps {
  trueComponent: React.ReactNode
  falseComponent: React.ReactNode
  state: boolean
}

function ToggleState(props: ToggleStateProps) {
  return (
    <div className="centered-parent">
      <div className="centered-child" style={{ opacity: props.state ? 0 : 1 }}>
        {props.trueComponent}
      </div>
      <div className="centered-child" style={{ opacity: props.state ? 1 : 0 }}>
        {props.falseComponent}
      </div>
    </div>
  )
}
