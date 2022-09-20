import React from 'react'

export default function Inputs(props: InputsInterface) {
  return (
    <>
      {props.type === 'INPUT_DEFAULT_TYPE0' && (
        <div className="inline-flex h-[60px] flex-1 flex-grow items-center gap-2 rounded-[40px] border-4 border-solid border-black bg-white p-[18px] text-center font-['Roboto_Mono'] text-base font-bold leading-[18px] text-[rgba(130,130,130,1)] drop-shadow-lg">
          <p>Type an ENS or address here...</p>
        </div>
      )}
    </>
  )
}

Inputs.defaultProps = {
  type: 'INPUT_DEFAULT_TYPE0',
}

interface InputsInterface {
  type: 'INPUT_DEFAULT_TYPE0';
}
