import React, { memo } from 'react'
import { useObserver, useObservable } from 'mobx-react-lite'
 
export default memo(props => {
  const person = useObservable({ name: "John" })
  return useObserver(() => (
    <div>
      {person.name}
      <button onClick={() => (person.name = "Mike")}>No! I am Mike</button>
    </div>
  ))
})