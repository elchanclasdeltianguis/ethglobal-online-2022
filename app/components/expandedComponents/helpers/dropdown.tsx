import React from 'react'

import { useState, useRef, useEffect, ReactElement } from 'react'
import './dropdown.css'

export interface DropdownProps {
  values: Value[]
  DropdownButton: (props: React.PropsWithChildren<{}>) => ReactElement
  DropdownWrapper: (props: React.PropsWithChildren<{}>) => ReactElement
  DropdownOption: (props: React.PropsWithChildren<{}>) => ReactElement
}

export interface Value {
  value: string
  text: string
}

export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [valIdx, setValIdx] = useState(0)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!selectRef.current || selectRef.current.contains(e.target)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectRef])

  return (
    <div ref={selectRef}>
      <div
        className="dropdown-button"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <props.DropdownButton>{props.values[valIdx].text}</props.DropdownButton>
      </div>
      <div
        className="dropdown-wrapper"
        style={
          open
            ? {
                opacity: 1,
                visibility: 'visible',
              }
            : {
                transform: 'translateY(-0.5)',
                visibility: 'hidden',
              }
        }
      >
        <props.DropdownWrapper>
          {props.values.map((value, idx) => (
            <div
              className="dropdown-button"
              onClick={() => {
                setValIdx(idx)
                setOpen(false)
              }}
            >
              <props.DropdownOption>{value.text}</props.DropdownOption>
            </div>
          ))}
        </props.DropdownWrapper>
      </div>
    </div>
  )
}
