import React, { useState, useRef } from 'react'
import { observer, useObservable, useComputed } from 'mobx-react-lite'

const multiply = (total, val) => total * val

const PureCalculator = observer(({ hasExploded }) => {
  const inputRef = useRef()
  const inputs = useObservable([1, 3, 5])
  
  const result = useComputed(
    () =>
      hasExploded ? "💣" : inputs.reduce(multiply, 1) * Number(!hasExploded),
    [hasExploded]
  )

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputs.push(parseInt(inputRef.current.value) | 1)}>
        Multiply
      </button>
      <div>
        {inputs.join(' * ')} = {result}
      </div>
    </div>
  )
})


export default () => {
  const [ hasExploded, explode ] = React.useState(false)

  return (
    <div>
      <PureCalculator hasExploded={hasExploded} />
      <button onClick={() => explode(true)}>EXPLODE</button>
    </div>
  )
}