import React from 'react'

import { ReactElement, useState } from 'react'
import './checkbox.css'

interface CheckboxProps {
  CheckedComponent: (props: {}) => ReactElement
  UncheckedComponent: (props: {}) => ReactElement
}

export default function Checkbox(props: CheckboxProps) {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <input checked={checked} type="checkbox" style={{ appearance: 'none' }} />
      <div onClick={() => setChecked(!checked)} className="checkbox-button">
        <ToggleState
          trueComponent={<props.CheckedComponent />}
          falseComponent={<props.UncheckedComponent />}
          state={checked}
        />
      </div>
    </>
  )
}

interface ToggleStateProps {
  trueComponent: ReactElement
  falseComponent: ReactElement
  state: boolean
}

function ToggleState(props: ToggleStateProps) {
  return (
    <div className="centered-parent">
      <div className="centered-child" style={{ opacity: props.state ? 1 : 0 }}>
        {props.trueComponent}
      </div>
      <div className="centered-child" style={{ opacity: props.state ? 0 : 1 }}>
        {props.falseComponent}
      </div>
    </div>
  )
}
